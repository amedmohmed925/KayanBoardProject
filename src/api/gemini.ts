import { DashboardWidget } from '@/lib/index.ts';

/**
 * Google Gemini AI Integration Service
 * Uses the Gemini 1.5 Flash model to generate dashboard structures and data
 * based on user natural language descriptions.
 */

// NOTE: In a production environment, this key should be stored in an environment variable.
// For this demo, we use the key provided in the project specification.
const GEMINI_API_KEY = "AIzaSyBZjbqKALE8bfW2kxrwSEBNqdGx4KK3JpU";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

/**
 * Generates a list of widgets based on a user prompt.
 * 
 * @param prompt - The user's description of the dashboard (e.g., "Medical clinic stats")
 * @returns A promise that resolves to an array of DashboardWidget objects
 */
export const generateDashboard = async (prompt: string): Promise<DashboardWidget[]> => {
  const systemInstruction = `
    You are an expert dashboard UI/UX architect for KayanBoard (كيان بورد), a high-end Arabic SaaS platform.
    Your task is to transform a user description into a structured dashboard layout.

    User Request: "${prompt}"

    Rules:
    1. Language: All titles, descriptions, and labels MUST be in ARABIC.
    2. Output: Return ONLY a raw JSON array of widget objects. No markdown, no explanations, no backticks.
    3. Currency: All financial values MUST use 'EGP' as the currency (e.g., 'EGP 1,200', '150 جنيه').
    4. Structure:
       - Include 3-4 'kpi' cards for high-level stats.
       - Include 2-3 charts ('line', 'bar', or 'pie').
       - Include 1 'activity' list for recent updates.
       - Optionally include 'table', 'progress', or 'users' for more variety.
    4. Schema per widget type:
       - KPI: { "id": string, "type": "kpi", "title": string, "value": string|number, "trend": "up"|"down"|"neutral", "change": string }
       - Chart: { "id": string, "type": "line"|"bar"|"pie", "title": string, "data": [{ "name": string, "value": number }], "config": { "colors": [string] } }
       - Activity: { "id": string, "type": "activity", "title": string, "data": [{ "name": string, "time": string, "value": string }] }
       - Table: { "id": string, "type": "table", "title": string, "data": [Object], "config": { "headers": [string] } }
       - Progress: { "id": string, "type": "progress", "title": string, "data": [{ "name": string, "value": number }] }
       - Users: { "id": string, "type": "users", "title": string, "data": [{ "name": string, "role": string, "status": "online"|"offline", "avatar": string }] }
    5. Style: Use dummy but highly realistic and relevant data based on the user request.
    6. Arabic Context: Ensure terminology is professional (e.g., use "إجمالي المبيعات" instead of simple "مبيعات").
  `;

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: systemInstruction }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error Response:', errorData);
      throw new Error('Failed to connect to AI service');
    }

    const result = await response.json();
    
    if (!result.candidates || result.candidates.length === 0) {
      throw new Error('No generation candidates returned from Gemini');
    }

    const generatedText = result.candidates[0].content.parts[0].text.trim();
    
    // Handle potential markdown formatting from AI
    const cleanJsonString = generatedText
      .replace(/^\n?/, '')
      .replace(/\n?$/, '')
      .trim();

    try {
      const parsedWidgets = JSON.parse(cleanJsonString);
      
      if (!Array.isArray(parsedWidgets)) {
        throw new Error('AI did not return an array of widgets');
      }

      // Post-process to ensure all widgets have unique IDs
      return parsedWidgets.map((widget, index) => ({
        ...widget,
        id: widget.id || `ai-widget-${Date.now()}-${index}`
      })) as DashboardWidget[];

    } catch (parseError) {
      console.error('JSON Parsing Error:', cleanJsonString);
      throw new Error('Failed to parse AI generated dashboard structure');
    }

  } catch (error) {
    console.error('Dashboard Generation Error:', error);
    throw error;
  }
};