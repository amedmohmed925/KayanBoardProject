import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useDashboard } from '@/hooks/useDashboard';
import { GlassCard } from '@/components/GlassCard';
import { ChartWidget } from '@/components/ChartWidget';
import { ARABIC_CONTENT } from '@/lib/index';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Clock, 
  Users, 
  Activity,
  Calendar,
  Target,
  Search,
  Bell,
  User
} from 'lucide-react';
import { useState } from 'react';

const analyticsData = {
  overview: [
    {
      id: 'total-views',
      type: 'kpi' as const,
      title: 'إجمالي المشاهدات',
      value: '12,847',
      trend: 'up' as const,
      change: '+23.5%',
      description: 'مقارنة بالشهر الماضي'
    },
    {
      id: 'active-users',
      type: 'kpi' as const,
      title: 'المستخدمون النشطون',
      value: '2,341',
      trend: 'up' as const,
      change: '+12.8%',
      description: 'في آخر 30 يوم'
    },
    {
      id: 'avg-session',
      type: 'kpi' as const,
      title: 'متوسط الجلسة',
      value: '4:32',
      trend: 'up' as const,
      change: '+8.2%',
      description: 'دقيقة:ثانية'
    },
    {
      id: 'bounce-rate',
      type: 'kpi' as const,
      title: 'معدل الارتداد',
      value: '18.4%',
      trend: 'down' as const,
      change: '-5.1%',
      description: 'تحسن ملحوظ'
    }
  ],
  performance: [
    {
      id: 'dashboard-usage',
      type: 'line' as const,
      title: 'استخدام اللوحات اليومي',
      data: [
        { name: 'السبت', value: 1200 },
        { name: 'الأحد', value: 1100 },
        { name: 'الاثنين', value: 1800 },
        { name: 'الثلاثاء', value: 2100 },
        { name: 'الأربعاء', value: 1900 },
        { name: 'الخميس', value: 2300 },
        { name: 'الجمعة', value: 1600 }
      ],
      config: {
        colors: ['#d946ef'],
        showGrid: true
      }
    },
    {
      id: 'popular-widgets',
      type: 'bar' as const,
      title: 'العناصر الأكثر استخداماً',
      data: [
        { name: 'مؤشرات الأداء', value: 4200 },
        { name: 'الرسوم البيانية', value: 3800 },
        { name: 'الجداول', value: 2900 },
        { name: 'الخرائط', value: 1800 }
      ],
      config: {
        colors: ['#06b6d4'],
        showGrid: true
      }
    },
    {
      id: 'user-activity',
      type: 'pie' as const,
      title: 'توزيع النشاط حسب الوقت',
      data: [
        { name: 'الصباح (6-12)', value: 35 },
        { name: 'الظهر (12-18)', value: 45 },
        { name: 'المساء (18-24)', value: 15 },
        { name: 'الليل (24-6)', value: 5 }
      ],
      config: {
        colors: ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b']
      }
    }
  ],
  usage: [
    {
      id: 'feature-adoption',
      type: 'bar' as const,
      title: 'معدل اعتماد المميزات',
      data: [
        { name: 'الذكاء الاصطناعي', value: 78 },
        { name: 'القوالب', value: 65 },
        { name: 'التصدير', value: 52 },
        { name: 'المشاركة', value: 43 }
      ],
      config: {
        colors: ['#8b5cf6'],
        showGrid: true
      }
    },
    {
      id: 'monthly-growth',
      type: 'line' as const,
      title: 'نمو المستخدمين الشهري',
      data: [
        { name: 'يناير', value: 1200 },
        { name: 'فبراير', value: 1450 },
        { name: 'مارس', value: 1680 },
        { name: 'أبريل', value: 1920 },
        { name: 'مايو', value: 2150 },
        { name: 'يونيو', value: 2341 }
      ],
      config: {
        colors: ['#10b981'],
        showGrid: true
      }
    }
  ]
};

export default function Analytics() {
  const { isSidebarCollapsed, toggleSidebar } = useDashboard();
  const [searchQuery, setSearchQuery] = useState('');

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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              {ARABIC_CONTENT.analytics.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {ARABIC_CONTENT.analytics.subtitle}
            </p>
          </motion.div>

          {/* Analytics Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-md border border-white/20">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  {ARABIC_CONTENT.analytics.overview}
                </TabsTrigger>
                <TabsTrigger value="performance" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {ARABIC_CONTENT.analytics.performance}
                </TabsTrigger>
                <TabsTrigger value="usage" className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  {ARABIC_CONTENT.analytics.usage}
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {analyticsData.overview.map((widget, index) => (
                    <motion.div
                      key={widget.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ChartWidget widget={widget} />
                    </motion.div>
                  ))}
                </div>

                {/* Additional Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-foreground">أفضل اللوحات</h3>
                          <Badge variant="secondary">هذا الأسبوع</Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">لوحة المبيعات</span>
                            <span className="text-sm font-medium">1,247 مشاهدة</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">تحليلات التسويق</span>
                            <span className="text-sm font-medium">892 مشاهدة</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">الموارد البشرية</span>
                            <span className="text-sm font-medium">634 مشاهدة</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-foreground">الأنشطة الأخيرة</h3>
                          <Clock className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                            <div>
                              <p className="text-sm text-foreground">تم إنشاء لوحة جديدة</p>
                              <p className="text-xs text-muted-foreground">منذ 5 دقائق</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                            <div>
                              <p className="text-sm text-foreground">تم تحديث البيانات</p>
                              <p className="text-xs text-muted-foreground">منذ 15 دقيقة</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                            <div>
                              <p className="text-sm text-foreground">انضم عضو جديد</p>
                              <p className="text-xs text-muted-foreground">منذ ساعة</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-foreground">الأهداف</h3>
                          <Target className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">المشاهدات الشهرية</span>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">المستخدمون الجدد</span>
                              <span className="text-sm font-medium">67%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div className="bg-accent h-2 rounded-full" style={{ width: '67%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Performance Tab */}
              <TabsContent value="performance" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {analyticsData.performance.map((widget, index) => (
                    <motion.div
                      key={widget.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ChartWidget widget={widget} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Usage Tab */}
              <TabsContent value="usage" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {analyticsData.usage.map((widget, index) => (
                    <motion.div
                      key={widget.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ChartWidget widget={widget} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>
      </main>
    </div>
  );
}