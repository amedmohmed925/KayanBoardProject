import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, LogOut, Settings, User as UserIcon } from 'lucide-react';
import { ROUTE_PATHS, ARABIC_CONTENT } from '@/lib/index';
import { USER_PROFILE } from '@/data/index';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  children?: React.ReactNode;
}

export function DashboardHeader({ searchQuery, onSearchChange, children }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="بحث..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full bg-slate-100 border-none rounded-xl py-2 pr-10 pl-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {children}

        <div className="flex items-center gap-2 border-r border-slate-200 pr-4 mr-2">
          {/* Notifications Icon with Badge */}
          <Link 
            to={ROUTE_PATHS.NOTIFICATIONS}
            className="relative p-2 rounded-xl text-slate-500 hover:text-primary hover:bg-primary/5 transition-all group"
          >
            <Bell className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-white animate-pulse" />
          </Link>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 p-0.5 rounded-full hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200 group">
                <Avatar className="w-9 h-9 border-2 border-white shadow-sm transition-transform group-hover:scale-105">
                  <AvatarImage src={USER_PROFILE.avatar} alt={USER_PROFILE.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary/10 to-accent/10 text-primary font-bold">
                    {USER_PROFILE.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-2 rounded-2xl shadow-xl border-slate-100" dir="rtl">
              <div className="px-3 py-4 bg-slate-50/50 rounded-xl mb-2">
                <p className="text-sm font-bold text-slate-900">{USER_PROFILE.name}</p>
                <p className="text-xs text-slate-500 truncate">{USER_PROFILE.email}</p>
              </div>
              
              <DropdownMenuItem asChild className="rounded-lg h-10 cursor-pointer">
                <Link to={ROUTE_PATHS.PROFILE} className="flex items-center gap-3">
                  <UserIcon className="w-4 h-4 text-slate-400" />
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
      </div>
    </header>
  );
}
