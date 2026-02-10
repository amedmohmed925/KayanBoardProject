import { create } from 'zustand';
import { DashboardWidget } from '../lib/index';
import { INITIAL_WIDGETS } from '../data/index';

/**
 * DashboardState Interface
 * Defines the structure of the dashboard state management store.
 */
interface DashboardState {
  widgets: DashboardWidget[];
  isGenerating: boolean;
  isSidebarCollapsed: boolean;
  
  // Actions
  setWidgets: (widgets: DashboardWidget[]) => void;
  addWidget: (widget: DashboardWidget) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  clearWidgets: () => void;
}

/**
 * useDashboard Hook
 * Custom hook for dashboard state management using Zustand.
 * Handles widget lists, sidebar state, and AI generation loading states.
 */
export const useDashboard = create<DashboardState>((set) => ({
  // Initial State
  widgets: INITIAL_WIDGETS,
  isGenerating: false,
  isSidebarCollapsed: false,

  /**
   * Replace current widgets with a new set.
   * Typically used after AI generation completes.
   */
  setWidgets: (widgets) => set({ widgets }),

  /**
   * Add a single widget to the existing collection.
   */
  addWidget: (widget) => 
    set((state) => ({
      widgets: [...state.widgets, widget]
    })),

  /**
   * Set the loading state during AI generation.
   */
  setIsGenerating: (isGenerating) => set({ isGenerating }),

  /**
   * Toggle the sidebar between collapsed and expanded states.
   */
  toggleSidebar: () => 
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed
    })),

  /**
   * Set specific sidebar state.
   */
  setSidebarCollapsed: (isSidebarCollapsed) => set({ isSidebarCollapsed }),

  /**
   * Reset the dashboard by removing all widgets.
   */
  clearWidgets: () => set({ widgets: [] }),
}));
