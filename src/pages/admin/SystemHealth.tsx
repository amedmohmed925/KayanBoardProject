import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { GlassCard } from '@/components/GlassCard';
import { ARABIC_CONTENT } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { 
  Server, 
  Activity, 
  Database, 
  Globe, 
  Cpu, 
  Terminal,
  RefreshCw,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ChartWidget } from '@/components/ChartWidget';

const SystemHealth = () => {
  const services = [
    { name: 'خادم الواجهة الأمامية', status: 'online', uptime: '99.99%', latency: '45ms' },
    { name: 'قاعدة البيانات الأساسية', status: 'online', uptime: '99.95%', latency: '12ms' },
    { name: 'خدمة الذكاء الاصطناعي', status: 'online', uptime: '99.90%', latency: '850ms' },
    { name: 'تخزين الملفات (S3)', status: 'degraded', uptime: '98.50%', latency: '320ms' },
    { name: 'خادم الإشعارات', status: 'online', uptime: '100%', latency: '25ms' },
  ];

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.system}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600">32%</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">استهلاك المعالج</p>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[32%]" />
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-purple-600">4.2 GB</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">الذاكرة المستخدمة</p>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[65%]" />
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600">88%</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">صحة قاعدة البيانات</p>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[88%]" />
                </div>
              </GlassCard>
            </div>

            <ChartWidget 
              widget={{
                id: 'sys-load',
                type: 'line',
                title: 'حمل النظام خلال 24 ساعة',
                data: [
                  { name: '00:00', value: 20 },
                  { name: '04:00', value: 15 },
                  { name: '08:00', value: 45 },
                  { name: '12:00', value: 80 },
                  { name: '16:00', value: 65 },
                  { name: '20:00', value: 40 },
                ]
              }} 
            />

            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-6 text-slate-400">
                <Terminal className="w-5 h-5" />
                <h3 className="font-bold text-slate-700">سجل الأحداث المباشر (Terminal)</h3>
              </div>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-[10px] text-emerald-400 space-y-1 h-48 overflow-y-auto">
                <p>[2024-04-10 14:30:12] INFO: User 1042 successfully authenticated.</p>
                <p>[2024-04-10 14:30:15] DEBUG: Querying gemini-pro-1.5...</p>
                <p>[2024-04-10 14:30:18] INFO: Dashboard generation started for "Medical Clinic".</p>
                <p className="text-amber-400">[2024-04-10 14:31:05] WARN: High latency detected in S3 storage cluster.</p>
                <p>[2024-04-10 14:32:00] INFO: Automatic backup completed.</p>
                <p>[2024-04-10 14:35:12] INFO: New user registered: guest_4421.</p>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <GlassCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">حالة الخدمات</h3>
                <RefreshCw className="w-4 h-4 text-slate-400 cursor-pointer hover:rotate-180 transition-transform duration-500" />
              </div>
              <div className="space-y-6">
                {services.map((service, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {service.status === 'online' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500" />
                        )}
                        <span className="text-sm font-medium">{service.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className={service.status === 'online' ? 'text-emerald-600' : 'text-amber-600'}>
                        {service.status === 'online' ? 'نشط' : 'أداء ضعيف'}
                      </span>
                      <span className="text-slate-400">{service.latency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 bg-slate-900 text-white">
              <h4 className="font-bold mb-4 opacity-70">إجراءات الصيانة</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2 bg-white/5 border-white/10 hover:bg-white/10">
                  <RefreshCw className="w-4 h-4" /> مسح التخزين المؤقت
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-white/5 border-white/10 hover:bg-white/10">
                  <Database className="w-4 h-4" /> تصحيح قواعد البيانات
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 text-rose-400 border-rose-400/20 hover:bg-rose-400/10">
                  <Server className="w-4 h-4" /> إعادة تشغيل السيرفر
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SystemHealth;
