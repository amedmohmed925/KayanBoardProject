import React from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useDashboard } from '@/hooks/useDashboard';
import { motion } from 'framer-motion';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const { isSidebarCollapsed, toggleSidebar } = useDashboard();

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      {/* Admin Sidebar Component */}
      <AdminSidebar 
        collapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 overflow-hidden">
        {/* Top Bar */}
        <DashboardHeader />

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {title && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                {title}
              </h1>
            </motion.div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
