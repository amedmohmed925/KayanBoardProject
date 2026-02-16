import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  ShieldCheck,
  UserCog,
  LayoutGrid,
  Settings2,
  ChevronLeft,
  ChevronRight,
  LogOut,
  LayoutDashboard,
  History,
  CreditCard,
  Cpu,
  LifeBuoy,
  FileJson,
  Activity
} from 'lucide-react';
import { ROUTE_PATHS, ARABIC_CONTENT } from '@/lib/index';
import { useAuth } from '@/hooks/useAuth';

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const { logout } = useAuth();
  
  const adminItems = [
    { id: 'admin-dash', label: ARABIC_CONTENT.admin.overview, icon: ShieldCheck, path: ROUTE_PATHS.ADMIN_DASHBOARD },
    { id: 'admin-users', label: ARABIC_CONTENT.admin.users, icon: UserCog, path: ROUTE_PATHS.ADMIN_USERS },
    { id: 'admin-boards', label: ARABIC_CONTENT.admin.boards, icon: LayoutGrid, path: ROUTE_PATHS.ADMIN_BOARDS },
    { id: 'admin-financials', label: ARABIC_CONTENT.admin.financials, icon: CreditCard, path: ROUTE_PATHS.ADMIN_FINANCIALS },
    { id: 'admin-content', label: ARABIC_CONTENT.admin.content, icon: FileJson, path: ROUTE_PATHS.ADMIN_CONTENT },
    { id: 'admin-ai', label: ARABIC_CONTENT.admin.aiConfig, icon: Cpu, path: ROUTE_PATHS.ADMIN_AI },
    { id: 'admin-support', label: ARABIC_CONTENT.admin.support, icon: LifeBuoy, path: ROUTE_PATHS.ADMIN_SUPPORT },
    { id: 'admin-audit', label: ARABIC_CONTENT.admin.audit, icon: History, path: ROUTE_PATHS.ADMIN_AUDIT },
    { id: 'admin-system', label: ARABIC_CONTENT.admin.system, icon: Activity, path: ROUTE_PATHS.ADMIN_SYSTEM },
    { id: 'admin-settings', label: ARABIC_CONTENT.admin.settings, icon: Settings2, path: ROUTE_PATHS.ADMIN_SETTINGS },
  ];

  const sidebarVariants = {
    expanded: { width: '260px' },
    collapsed: { width: '80px' },
  };

  const labelVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      display: 'block',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    collapsed: {
      opacity: 0,
      x: 20,
      transitionEnd: { display: 'none' },
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  return (
    <motion.aside
      initial={false}
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      className="sticky top-0 h-screen flex flex-col bg-slate-900 text-white z-40 transition-all duration-300"
      dir="rtl"
    >
      {/* Logo Section */}
      <div className="h-20 flex items-center px-6 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-500 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-lg font-bold whitespace-nowrap"
              >
                لوحة الإدارة
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-3 space-y-2 overflow-y-auto custom-scrollbar">
        <div className="py-4">
          {!collapsed && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 mb-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest"
            >
              القائمة الرئيسية
            </motion.p>
          )}
          <nav className="space-y-1">
            {adminItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-3 py-3.5 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <item.icon
                  className="w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110"
                />
                <motion.span
                  variants={labelVariants}
                  className="font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <NavLink
              to={ROUTE_PATHS.DASHBOARD}
              className="flex items-center gap-4 px-3 py-3.5 rounded-2xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all group"
            >
              <LayoutDashboard className="w-6 h-6 flex-shrink-0" />
              <motion.span variants={labelVariants} className="font-medium whitespace-nowrap">
                عودة للوحة المستخدم
              </motion.span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl text-slate-400 hover:bg-slate-800 transition-all group"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {collapsed ? (
              <ChevronLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
            ) : (
              <ChevronRight className="w-5 h-5 group-hover:translate-x-[2px] transition-transform" />
            )}
          </div>
          <motion.span variants={labelVariants} className="font-medium whitespace-nowrap">
            {collapsed ? '' : 'تصغير القائمة'}
          </motion.span>
        </button>

        <button 
          onClick={() => logout()}
          className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl text-rose-400 hover:bg-rose-500/10 transition-all group"
        >
          <LogOut className="w-6 h-6 flex-shrink-0" />
          <motion.span variants={labelVariants} className="font-medium whitespace-nowrap">
            تسجيل الخروج
          </motion.span>
        </button>
      </div>
    </motion.aside>
  );
}
