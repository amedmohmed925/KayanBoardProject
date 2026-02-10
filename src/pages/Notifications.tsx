import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useDashboard } from '@/hooks/useDashboard';
import { GlassCard } from '@/components/GlassCard';
import { Bell, CheckCircle2, AlertCircle, Info, Trash2, Filter } from 'lucide-react';
import { ARABIC_CONTENT, cn } from '@/lib/index';
import { NOTIFICATIONS_DEMO } from '@/data/index';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Notifications() {
  const { isSidebarCollapsed, toggleSidebar } = useDashboard();
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DEMO);
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const deleteAll = () => {
    setNotifications([]);
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
        <DashboardHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Canvas Area */}
        <section className="p-6 lg:p-8 flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {ARABIC_CONTENT.profile.notifications}
                </h1>
                <p className="text-slate-500 text-lg">
                  ابقَ على اطلاع بأحدث التنبيهات والأنشطة في حسابك
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  className="gap-2 rounded-xl border-slate-200 bg-white/50 backdrop-blur-sm"
                  onClick={markAllRead}
                  disabled={notifications.every(n => n.isRead)}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  تحديد الكل كمقروء
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2 rounded-xl text-destructive border-destructive/20 hover:bg-destructive/5 hover:text-destructive bg-white/50 backdrop-blur-sm"
                  onClick={deleteAll}
                  disabled={notifications.length === 0}
                >
                  <Trash2 className="w-4 h-4" />
                  حذف الكل
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={notification.id}
                  >
                    <GlassCard 
                      className={cn(
                        "p-6 flex gap-6 items-start border-r-4 transition-all hover:bg-white/60",
                        notification.isRead ? "border-r-slate-200" : "border-r-primary bg-white ring-1 ring-primary/5"
                      )}
                      hover
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
                        notification.type === 'success' ? "bg-green-50" : 
                        notification.type === 'warning' ? "bg-amber-50" : "bg-blue-50"
                      )}>
                        {getIcon(notification.type)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={cn(
                            "font-bold text-lg",
                            notification.isRead ? "text-slate-700" : "text-slate-900"
                          )}>
                            {notification.title}
                          </h3>
                          <span className="text-sm text-slate-400 font-medium">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-slate-500 leading-relaxed mb-4">
                          {notification.description}
                        </p>
                        <div className="flex items-center gap-2">
                          {!notification.isRead && (
                            <Badge className="bg-primary hover:bg-primary/90 rounded-full px-3">
                              جديد
                            </Badge>
                          )}
                          <Badge variant="outline" className="rounded-full border-slate-200 text-slate-500">
                            {notification.type === 'success' ? 'نظام' : 
                            notification.type === 'warning' ? 'تنبيه' : 'تحديث'}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button 
                          className="p-2 text-slate-400 hover:text-destructive hover:bg-destructive/5 rounded-lg transition-colors"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                  <Bell className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-400 font-medium">لا توجد إشعارات حالياً</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
