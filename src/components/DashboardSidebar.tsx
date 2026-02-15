import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Layout,
  Layers,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  LogOut,
  ShieldCheck,
  UserCog,
  LayoutGrid,
  Settings2
} from 'lucide-react';
import { ROUTE_PATHS, ARABIC_CONTENT } from '@/lib/index';
import { useAuth } from '@/hooks/useAuth';

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  const { logout, user } = useAuth();
  
  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: Home, path: ROUTE_PATHS.HOME },
    { id: 'boards', label: ARABIC_CONTENT.dashboard.myBoards, icon: Layout, path: ROUTE_PATHS.MY_BOARDS },
    { id: 'templates', label: ARABIC_CONTENT.dashboard.templates, icon: Layers, path: ROUTE_PATHS.TEMPLATES },
    { id: 'team', label: ARABIC_CONTENT.dashboard.team, icon: Users, path: ROUTE_PATHS.TEAM },
    { id: 'analytics', label: ARABIC_CONTENT.dashboard.analytics, icon: BarChart3, path: ROUTE_PATHS.ANALYTICS },
    { id: 'settings', label: ARABIC_CONTENT.dashboard.settings, icon: Settings, path: ROUTE_PATHS.SETTINGS },
  ];

  const adminItems = [
    { id: 'admin-dash', label: ARABIC_CONTENT.admin.overview, icon: ShieldCheck, path: ROUTE_PATHS.ADMIN_DASHBOARD },
    { id: 'admin-users', label: ARABIC_CONTENT.admin.users, icon: UserCog, path: ROUTE_PATHS.ADMIN_USERS },
    { id: 'admin-boards', label: ARABIC_CONTENT.admin.boards, icon: LayoutGrid, path: ROUTE_PATHS.ADMIN_BOARDS },
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
      className="sticky top-0 h-screen flex flex-col bg-white/80 backdrop-blur-xl border-e border-white/20 shadow-2xl shadow-indigo-500/5 z-40 transition-all duration-300"
      dir="rtl"
    >
      {/* Logo Section */}
      <div className="h-20 flex items-center px-6 mb-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-xl font-bold bg-gradient-to-r from-[#d946ef] to-[#06b6d4] bg-clip-text text-transparent whitespace-nowrap"
              >
                {ARABIC_CONTENT.common.appName}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-3 space-y-6 overflow-y-auto custom-scrollbar">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-3.5 rounded-2xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d946ef]/10 to-[#06b6d4]/10 text-[#d946ef] shadow-sm shadow-fuchsia-500/5'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-[#d946ef]' : 'text-slate-400'
                    }`}
                  />
                  <motion.span
                    variants={labelVariants}
                    className="font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {user?.role === 'admin' && (
          <div className="space-y-2">
            {!collapsed && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest"
              >
                {ARABIC_CONTENT.admin.title}
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
                        ? 'bg-gradient-to-r from-indigo-500/10 to-blue-500/10 text-indigo-600 shadow-sm shadow-indigo-500/5'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={`w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-indigo-600' : 'text-slate-400'
                        }`}
                      />
                      <motion.span
                        variants={labelVariants}
                        className="font-medium whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-100 space-y-2">
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 transition-all group"
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
          className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl text-destructive hover:bg-destructive/5 transition-all group"
        >
          <LogOut className="w-6 h-6 flex-shrink-0" />
          <motion.span variants={labelVariants} className="font-medium whitespace-nowrap">
            تسجيل الخروج
          </motion.span>
        </button>
      </div>

      {/* User Mini Profile */}
      <div className="p-4">
        <div className={`flex items-center gap-3 p-2 rounded-2xl bg-slate-50/50 border border-slate-100 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d946ef]/20 to-[#06b6d4]/20 flex-shrink-0 border-2 border-white shadow-sm flex items-center justify-center text-primary font-bold">
            {user?.name?.charAt(0) || 'أ'}
          </div>
          {!collapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-slate-900 truncate">{user?.name || 'أحمد محمد'}</span>
              <span className="text-xs text-slate-500 truncate">
                {user?.role === 'admin' ? 'مسؤول النظام' : 'خطة برو'}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
