import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, Sparkles } from 'lucide-react';
import { ARABIC_CONTENT, cn } from '@/lib/index';
import { useDashboard } from '@/hooks/useDashboard';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { ChartWidget } from '@/components/ChartWidget';
import { AIGenerationModal } from '@/components/AIGenerationModal';
import { GradientButton } from '@/components/GradientButton';

/**
 * Dashboard Page
 * The core application interface featuring a collapsible sidebar, 
 * dynamic widget canvas, and AI-powered generation capabilities.
 */
export default function Dashboard() {
  const {
    widgets,
    isSidebarCollapsed,
    toggleSidebar,
    isGenerating
  } = useDashboard();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter widgets based on search query
  const filteredWidgets = widgets.filter(
    (w) =>
      w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Animation variants for the widget grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      {/* Sidebar Component */}
      <DashboardSidebar 
        collapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 overflow-hidden">
        {/* Top Bar */}
        <DashboardHeader searchQuery={searchQuery} onSearchChange={setSearchQuery}>
          <GradientButton 
            onClick={() => setIsModalOpen(true)}
            className="h-10 px-4 text-sm"
          >
            <Sparkles className="w-4 h-4 ml-2" />
            {ARABIC_CONTENT.dashboard.aiMagic}
          </GradientButton>
        </DashboardHeader>

          {/* Canvas Area */}
          <section className="p-6 lg:p-8 flex-1 overflow-y-auto">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {ARABIC_CONTENT.common.dashboard}
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                  {widgets.length > 0 
                    ? `لديك ${widgets.length} عناصر في لوحة التحكم الحالية` 
                    : 'ابدأ بتوليد لوحة تحكم ذكية باستخدام الزر أعلاه'}
                </p>
              </div>
            </div>

            {/* Widget Grid */}
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-64 gap-4"
                >
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
                  </div>
                  <p className="text-slate-600 font-medium animate-pulse">
                    {ARABIC_CONTENT.dashboard.generating}
                  </p>
                </motion.div>
              ) : widgets.length > 0 ? (
                <motion.div
                  key="grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 grid-flow-row-dense"
                >
                  {filteredWidgets.map((widget) => (
                    <motion.div 
                      key={widget.id} 
                      variants={itemVariants}
                      layout
                      className={cn(
                        "transition-all duration-500",
                        (widget.type === 'line' || widget.type === 'bar' || widget.type === 'table') ? 'md:col-span-2' : '',
                        (widget.type === 'activity' || widget.type === 'users') ? 'xl:col-span-1' : ''
                      )}
                    >
                      <ChartWidget widget={widget} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-[60vh] text-center max-w-md mx-auto"
                >
                  <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-indigo-500/5 flex items-center justify-center mb-6">
                    <Sparkles className="w-12 h-12 text-primary/40" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    لوحة تحكم فارغة
                  </h3>
                  <p className="text-slate-500 mb-8">
                    استخدم سحر الذكاء الاصطناعي لإنشاء لوحة تحكم مخصصة لاحتياجاتك في ثوانٍ معدودة.
                  </p>
                  <GradientButton 
                    onClick={() => setIsModalOpen(true)}
                    className="px-8"
                  >
                    {ARABIC_CONTENT.dashboard.aiMagic}
                  </GradientButton>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </main>

        {/* AI Magic Modal */}
        <AIGenerationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
  );
}
