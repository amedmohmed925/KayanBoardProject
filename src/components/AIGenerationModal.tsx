import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, X, Sparkles, Loader2 } from 'lucide-react';
import { ARABIC_CONTENT, cn } from '@/lib/index';
import { generateDashboard } from '@/api/gemini';
import { useDashboard } from '@/hooks/useDashboard';
import { GradientButton } from '@/components/GradientButton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

interface AIGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * AIGenerationModal Component
 * Provides a high-end glassmorphic interface for users to describe their dashboard
 * and generate it using Google Gemini AI.
 */
export function AIGenerationModal({ isOpen, onClose }: AIGenerationModalProps) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setWidgets, setIsGenerating } = useDashboard();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setIsGenerating(true);

    try {
      const result = await generateDashboard(prompt);
      // Update the dashboard store with the AI-generated widgets
      setWidgets(result);
      // Close modal on success
      onClose();
      // Reset local prompt
      setPrompt('');
    } catch (error) {
      console.error('AI Generation failed:', error);
      // In a real app, we'd show a toast here
    } finally {
      setIsLoading(false);
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !isLoading && !open && onClose()}>
      <DialogContent 
        dir="rtl" 
        className="sm:max-w-[550px] bg-white/80 backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden rounded-3xl"
      >
        {/* Background Decorative Glows */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <DialogHeader className="relative z-10 space-y-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#d946ef] to-[#06b6d4] shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              {ARABIC_CONTENT.dashboard.aiMagic}
            </DialogTitle>
          </div>
          <DialogDescription className="text-slate-600 text-base text-right leading-relaxed">
            {ARABIC_CONTENT.hero.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="relative z-10 py-6 space-y-6">
          <div className="relative">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={ARABIC_CONTENT.dashboard.placeholder}
              disabled={isLoading}
              className={cn(
                "min-h-[160px] text-right text-lg p-5 rounded-2xl border-slate-200 bg-white/50 focus:bg-white transition-all resize-none",
                "placeholder:text-slate-400 focus:ring-primary/20 focus:border-primary/40"
              )}
            />
            
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl z-20"
                >
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative"
                  >
                    <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-primary animate-spin mb-4" />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                  </motion.div>
                  <p className="text-slate-900 font-semibold animate-pulse">
                    {ARABIC_CONTENT.dashboard.generating}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <GradientButton
              onClick={handleGenerate}
              loading={isLoading}
              className="flex-1 h-14 text-lg font-bold group"
            >
              <span className="flex items-center justify-center gap-2">
                {!isLoading && <Wand2 className="w-5 h-5 transition-transform group-hover:rotate-12" />}
                {ARABIC_CONTENT.dashboard.generate}
              </span>
            </GradientButton>
            
            <button
              disabled={isLoading}
              onClick={onClose}
              className="px-8 py-4 rounded-xl text-slate-500 font-medium hover:bg-slate-100 transition-colors disabled:opacity-50"
            >
              إلغاء
            </button>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
          <Sparkles className="w-32 h-32 text-primary rotate-12" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
