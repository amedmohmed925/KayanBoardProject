import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { ChartWidget } from '@/components/ChartWidget';
import { ARABIC_CONTENT, DashboardWidget } from '@/lib/index';
import { 
  Users, 
  LayoutDashboard, 
  Activity, 
  DollarSign, 
  TrendingUp, 
  Server, 
  Zap, 
  ShieldCheck,
  Globe,
  MousePointer2,
  Clock,
  CreditCard
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from '@/components/GlassCard';

const AdminDashboard = () => {
  // 1. Overview Stats
  const overviewStats = [
    { title: ARABIC_CONTENT.admin.totalUsers, value: '12,842', icon: Users, trend: 'up', change: '+12.5%', description: 'مستخدم جديد هذا الشهر' },
    { title: ARABIC_CONTENT.admin.totalBoards, value: '45,231', icon: LayoutDashboard, trend: 'up', change: '+18.2%', description: 'لوحة تم إنشاؤها' },
    { title: ARABIC_CONTENT.admin.activeNow, value: '1,429', icon: Activity, trend: 'up', change: '+5.4%', description: 'مستخدم نشط حالياً' },
    { title: ARABIC_CONTENT.admin.revenue, value: 'EGP 184,500', icon: DollarSign, trend: 'up', change: '+24.1%', description: 'إجمالي الإيرادات' },
  ];

  // 2. Financial Data
  const revenueChart: DashboardWidget = {
    id: 'revenue-growth',
    type: 'line',
    title: ARABIC_CONTENT.admin.revenueBreakdown,
    data: [
      { name: 'يناير', value: 45000 },
      { name: 'فبراير', value: 52000 },
      { name: 'مارس', value: 48000 },
      { name: 'أبريل', value: 61000 },
      { name: 'مايو', value: 55000 },
      { name: 'يونيو', value: 67000 },
      { name: 'يوليو', value: 72000 },
    ],
  };

  const subscriptionStats: DashboardWidget = {
    id: 'subscriptions',
    type: 'progress',
    title: ARABIC_CONTENT.admin.subscriptions,
    data: [
      { name: 'الخطة المجانية', value: 65 },
      { name: 'الخطة الاحترافية', value: 25 },
      { name: 'خطة الشركات', value: 10 },
    ],
  };

  // 3. User Growth & Activity
  const userGrowthChart: DashboardWidget = {
    id: 'user-growth',
    type: 'bar',
    title: ARABIC_CONTENT.admin.userGrowth,
    data: [
      { name: 'الأسبوع 1', value: 400 },
      { name: 'الأسبوع 2', value: 600 },
      { name: 'الأسبوع 3', value: 800 },
      { name: 'الأسبوع 4', value: 1200 },
    ],
  };

  const recentActivity: DashboardWidget = {
    id: 'recent-activity',
    type: 'activity',
    title: ARABIC_CONTENT.dashboard.recentActivity,
    data: [
      { name: 'أحمد محمد', time: 'منذ دقيقتين', value: 'أنشأ لوحة جديدة' },
      { name: 'سارة علي', time: 'منذ 5 دقائق', value: 'اشتركت في الخطة الاحترافية' },
      { name: 'محمود حسن', time: 'منذ 12 دقيقة', value: 'قام بتوليد لوحة بالذكاء الاصطناعي' },
      { name: 'ليلى إبراهيم', time: 'منذ 20 دقيقة', value: 'أضافت عضواً جديداً للفريق' },
      { name: 'ياسين كمال', time: 'منذ 45 دقيقة', value: 'قام بتحديث إعدادات الملف الشخصي' },
    ],
  };

  // 4. System Health & Usage
  const systemHealth: DashboardWidget = {
    id: 'system-health',
    type: 'pie',
    title: ARABIC_CONTENT.admin.systemHealth,
    data: [
      { name: 'وقت التشغيل', value: 99.9 },
      { name: 'الأخطاء', value: 0.1 },
    ],
  };

  const apiLatency: DashboardWidget = {
    id: 'api-latency',
    type: 'table',
    title: ARABIC_CONTENT.admin.apiLatency,
    config: {
      headers: ['الخدمة', 'وقت الاستجابة', 'الحالة']
    },
    data: [
      { service: 'قاعدة البيانات', latency: '12ms', status: 'ممتاز' },
      { service: 'توليد الصور', latency: '1.2s', status: 'جيد' },
      { service: 'الذكاء الاصطناعي', latency: '850ms', status: 'جيد' },
      { service: 'تخزين الملفات', latency: '45ms', status: 'ممتاز' },
    ],
  };

  // 5. AI Usage & Templates
  const aiUsage: DashboardWidget = {
    id: 'ai-usage',
    type: 'line',
    title: ARABIC_CONTENT.admin.aiUsage,
    data: [
      { name: 'السبت', value: 120 },
      { name: 'الأحد', value: 150 },
      { name: 'الاثنين', value: 200 },
      { name: 'الثلاثاء', value: 180 },
      { name: 'الأربعاء', value: 250 },
      { name: 'الخميس', value: 300 },
      { name: 'الجمعة', value: 280 },
    ],
  };

  const popularTemplates: DashboardWidget = {
    id: 'popular-templates',
    type: 'progress',
    title: ARABIC_CONTENT.admin.popularTemplates,
    data: [
      { name: 'لوحة مبيعات', value: 45 },
      { name: 'إدارة مشاريع', value: 30 },
      { name: 'تحليلات ويب', value: 15 },
      { name: 'موارد بشرية', value: 10 },
    ],
  };

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.title}>
      <div className="space-y-8 pb-10">
        {/* Section 1: Top Level KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-lg transition-all border-primary/10">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                  stat.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
                }`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
                  <span dir="ltr">{stat.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                <h3 className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</h3>
                <p className="text-xs text-slate-400 mt-2">{stat.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <Tabs defaultValue="overview" className="w-full" dir="rtl">
          <TabsList className="bg-white/50 backdrop-blur-sm border border-slate-200 p-1 rounded-xl mb-6">
            <TabsTrigger value="overview" className="rounded-lg px-6">{ARABIC_CONTENT.admin.overview}</TabsTrigger>
            <TabsTrigger value="financial" className="rounded-lg px-6">{ARABIC_CONTENT.admin.revenueBreakdown}</TabsTrigger>
            <TabsTrigger value="users" className="rounded-lg px-6">{ARABIC_CONTENT.admin.users}</TabsTrigger>
            <TabsTrigger value="system" className="rounded-lg px-6">{ARABIC_CONTENT.admin.systemHealth}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartWidget widget={revenueChart} />
              </div>
              <div>
                <ChartWidget widget={subscriptionStats} />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartWidget widget={aiUsage} />
              <ChartWidget widget={popularTemplates} />
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartWidget widget={revenueChart} />
              <GlassCard className="p-6">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  {ARABIC_CONTENT.admin.recentTransactions}
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">عملية دفع ناجحة #{1024 + i}</p>
                          <p className="text-xs text-slate-500">منذ {i * 2} ساعة</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-emerald-600">EGP {500 + (i * 100)}</p>
                        <p className="text-[10px] text-slate-400">بطاقة ائتمان</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6 text-center">
                <p className="text-sm text-slate-500 mb-1">{ARABIC_CONTENT.admin.mrr}</p>
                <h4 className="text-2xl font-bold text-primary">EGP 42,500</h4>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <p className="text-sm text-slate-500 mb-1">{ARABIC_CONTENT.admin.arr}</p>
                <h4 className="text-2xl font-bold text-primary">EGP 510,000</h4>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <p className="text-sm text-slate-500 mb-1">{ARABIC_CONTENT.admin.retentionRate}</p>
                <h4 className="text-2xl font-bold text-emerald-600">94.2%</h4>
              </GlassCard>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartWidget widget={userGrowthChart} />
              </div>
              <div>
                <ChartWidget widget={recentActivity} />
              </div>
            </div>
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">{ARABIC_CONTENT.admin.userList}</h3>
                <button className="text-sm text-primary font-bold">{ARABIC_CONTENT.dashboard.viewAll}</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead>
                    <tr className="text-slate-400 text-sm border-b border-slate-100">
                      <th className="pb-4 font-medium">المستخدم</th>
                      <th className="pb-4 font-medium">الدور</th>
                      <th className="pb-4 font-medium">الحالة</th>
                      <th className="pb-4 font-medium">تاريخ الانضمام</th>
                      <th className="pb-4 font-medium">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                              {String.fromCharCode(64 + i)}
                            </div>
                            <div>
                              <p className="font-bold text-sm">مستخدم {i}</p>
                              <p className="text-xs text-slate-400">user{i}@example.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-sm text-slate-600">{i === 1 ? 'مسؤول' : 'مستخدم'}</td>
                        <td className="py-4">
                          <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full">نشط</span>
                        </td>
                        <td className="py-4 text-sm text-slate-500">2026/02/{10 + i}</td>
                        <td className="py-4">
                          <button className="p-2 hover:bg-white rounded-lg transition-colors">
                            <MousePointer2 className="w-4 h-4 text-slate-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <ChartWidget widget={systemHealth} />
              </div>
              <div className="lg:col-span-2">
                <ChartWidget widget={apiLatency} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard className="p-6 flex flex-col items-center text-center">
                <Server className="w-8 h-8 text-primary mb-3" />
                <p className="text-xs text-slate-500 mb-1">{ARABIC_CONTENT.admin.serverStatus}</p>
                <h4 className="text-lg font-bold text-emerald-600">مستقر</h4>
              </GlassCard>
              <GlassCard className="p-6 flex flex-col items-center text-center">
                <Zap className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-xs text-slate-500 mb-1">استهلاك الموارد</p>
                <h4 className="text-lg font-bold text-slate-800">42%</h4>
              </GlassCard>
              <GlassCard className="p-6 flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-blue-500 mb-3" />
                <p className="text-xs text-slate-500 mb-1">الأمان</p>
                <h4 className="text-lg font-bold text-slate-800">محمي</h4>
              </GlassCard>
              <GlassCard className="p-6 flex flex-col items-center text-center">
                <Globe className="w-8 h-8 text-purple-500 mb-3" />
                <p className="text-xs text-slate-500 mb-1">الزيارات العالمية</p>
                <h4 className="text-lg font-bold text-slate-800">12.4k</h4>
              </GlassCard>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
