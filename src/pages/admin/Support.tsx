import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { GlassCard } from '@/components/GlassCard';
import { ARABIC_CONTENT } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  LifeBuoy, 
  MessageSquare, 
  Search, 
  Clock, 
  User, 
  ChevronLeft,
  Filter,
  MoreVertical
} from 'lucide-react';

const AdminSupport = () => {
  const tickets = [
    { id: 'TKT-1024', subject: 'مشكلة في ربط Stripe', user: 'أحمد محمد', status: 'open', priority: 'high', time: 'منذ ساعة' },
    { id: 'TKT-1025', subject: 'استفسار عن خطة الشركات', user: 'سارة خالد', status: 'pending', priority: 'medium', time: 'منذ 3 ساعات' },
    { id: 'TKT-1026', subject: 'خطأ في توليد لوحة البيانات', user: 'ياسين كمال', status: 'closed', priority: 'low', time: 'يوم أمس' },
    { id: 'TKT-1027', subject: 'طلب استرجاع مبلغ', user: 'مريم إبراهيم', status: 'open', priority: 'urgent', time: 'منذ 15 دقيقة' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-emerald-100 text-emerald-600';
      case 'pending': return 'bg-amber-100 text-amber-600';
      case 'closed': return 'bg-slate-100 text-slate-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-rose-100 text-rose-600';
      case 'high': return 'bg-orange-100 text-orange-600';
      case 'medium': return 'bg-blue-100 text-blue-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.support}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <GlassCard className="p-4">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4" /> فئات الدعم
            </h4>
            <div className="space-y-1">
              {[
                { label: 'الكل', count: 12, active: true },
                { label: 'نشط', count: 5, active: false },
                { label: 'في انتظار الرد', count: 3, active: false },
                { label: 'مغلق', count: 4, active: false },
              ].map((cat, i) => (
                <button 
                  key={i}
                  className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                    cat.active ? 'bg-primary text-white' : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${cat.active ? 'bg-white/20' : 'bg-slate-200'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-4 bg-primary/5 border-primary/10">
            <p className="text-xs text-slate-500 mb-2">متوسط وقت الرد</p>
            <h3 className="text-xl font-bold text-primary">24 دقيقة</h3>
          </GlassCard>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="بحث عن تذكرة أو مستخدم..." className="pr-10" />
            </div>
            <Button variant="outline" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {tickets.map((ticket, i) => (
              <GlassCard key={i} className="p-4 hover:border-primary/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-slate-400">{ticket.id}</span>
                        <h4 className="font-bold text-sm">{ticket.subject}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {ticket.user}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ticket.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className={`text-[10px] font-bold ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority === 'urgent' ? 'عاجل' : ticket.priority === 'high' ? 'عالية' : 'عادية'}
                      </Badge>
                      <Badge variant="secondary" className={`text-[10px] font-bold ${getStatusColor(ticket.status)}`}>
                        {ticket.status === 'open' ? 'مفتوحة' : ticket.status === 'pending' ? 'جاري المعالجة' : 'مغلقة'}
                      </Badge>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSupport;
