import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronLeft, Globe, User, LogOut, Settings, Bell } from 'lucide-react';
import { ROUTE_PATHS, ARABIC_CONTENT, cn } from '@/lib/index';
import { USER_PROFILE } from '@/data/index';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: ROUTE_PATHS.HOME, label: ARABIC_CONTENT.common.appName },
    { path: ROUTE_PATHS.PRICING, label: ARABIC_CONTENT.common.pricing },
    { path: ROUTE_PATHS.ABOUT, label: ARABIC_CONTENT.common.about },
    { path: ROUTE_PATHS.DASHBOARD, label: ARABIC_CONTENT.common.dashboard },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">
      {/* Navigation Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "py-3 bg-white/80 backdrop-blur-lg shadow-lg shadow-indigo-500/5 border-b border-white/20"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to={ROUTE_PATHS.HOME} 
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] to-[#06b6d4] tracking-tight">
              {ARABIC_CONTENT.common.appName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-slate-600"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* User Profile or CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {location.pathname.startsWith('/dashboard') || 
             location.pathname === ROUTE_PATHS.MY_BOARDS ||
             location.pathname === ROUTE_PATHS.TEMPLATES ||
             location.pathname === ROUTE_PATHS.TEAM ||
             location.pathname === ROUTE_PATHS.ANALYTICS ||
             location.pathname === ROUTE_PATHS.SETTINGS ||
             location.pathname === ROUTE_PATHS.PROFILE ||
             location.pathname === ROUTE_PATHS.NOTIFICATIONS ? (
              <div className="flex items-center gap-4">
                {/* Notifications Icon with Badge */}
                <Link 
                  to={ROUTE_PATHS.NOTIFICATIONS}
                  className="relative p-2 rounded-xl text-slate-500 hover:text-primary hover:bg-primary/5 transition-all group"
                >
                  <Bell className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-white animate-pulse" />
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-3 p-1 rounded-2xl hover:bg-slate-100/80 transition-all border border-transparent hover:border-slate-200 group">
                      <div className="relative">
                        <Avatar className="w-9 h-9 border-2 border-white shadow-sm transition-transform group-hover:scale-105">
                          <AvatarImage src={USER_PROFILE.avatar} alt={USER_PROFILE.name} />
                          <AvatarFallback className="bg-gradient-to-br from-primary/10 to-accent/10 text-primary font-bold">
                            {USER_PROFILE.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      </div>
                      <div className="hidden lg:flex flex-col items-start leading-none gap-1 mr-1">
                        <span className="text-sm font-bold text-slate-700">
                          {USER_PROFILE.name.split(' ')[0]}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          مدير الحساب
                        </span>
                      </div>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 p-2 rounded-2xl shadow-2xl border-slate-100">
                    <div className="px-3 py-4 bg-slate-50/50 rounded-xl mb-2">
                      <p className="text-sm font-bold text-slate-900">{USER_PROFILE.name}</p>
                      <p className="text-xs text-slate-500 truncate">{USER_PROFILE.email}</p>
                    </div>
                    <DropdownMenuItem asChild className="rounded-lg h-10 cursor-pointer">
                      <Link to={ROUTE_PATHS.PROFILE} className="flex items-center gap-3">
                        <User className="w-4 h-4 text-slate-400" />
                        <span className="font-medium">{ARABIC_CONTENT.profile.title}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg h-10 cursor-pointer">
                      <Link to={ROUTE_PATHS.SETTINGS} className="flex items-center gap-3">
                        <Settings className="w-4 h-4 text-slate-400" />
                        <span className="font-medium">{ARABIC_CONTENT.settings.title}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg h-10 cursor-pointer">
                      <Link to={ROUTE_PATHS.NOTIFICATIONS} className="flex items-center gap-3">
                        <Bell className="w-4 h-4 text-slate-400" />
                        <span className="font-medium">{ARABIC_CONTENT.profile.notifications}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-2 bg-slate-100" />
                    <DropdownMenuItem className="rounded-lg h-10 cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/5">
                      <LogOut className="w-4 h-4 ml-3" />
                      <span className="font-bold">{ARABIC_CONTENT.profile.logout}</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                to={ROUTE_PATHS.DASHBOARD}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d946ef] to-[#06b6d4] text-white font-semibold text-sm shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                {ARABIC_CONTENT.common.getStarted}
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-xl pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => cn(
                    "text-xl font-bold flex items-center justify-between",
                    isActive ? "text-primary" : "text-slate-900"
                  )}
                >
                  {link.label}
                  <ChevronLeft className="w-5 h-5 opacity-30" />
                </NavLink>
              ))}
              <Link
                to={ROUTE_PATHS.DASHBOARD}
                className="mt-4 w-full py-4 rounded-2xl bg-gradient-to-r from-[#d946ef] to-[#06b6d4] text-white text-center font-bold text-lg shadow-xl shadow-fuchsia-500/20"
              >
                {ARABIC_CONTENT.common.getStarted}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 min-h-[calc(100vh-80px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                {ARABIC_CONTENT.common.appName}
              </span>
            </div>

            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-sm text-slate-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-sm text-slate-400">
              {ARABIC_CONTENT.common.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
