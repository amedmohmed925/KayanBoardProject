import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useDashboard } from '@/hooks/useDashboard';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { ARABIC_CONTENT } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Settings as SettingsIcon, 
  Palette, 
  Bell, 
  Zap, 
  User,
  Shield,
  CreditCard,
  Globe,
  Moon,
  Sun,
  Monitor,
  Search
} from 'lucide-react';

export default function Settings() {
  const { isSidebarCollapsed, toggleSidebar } = useDashboard();
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    marketing: false
  });

  const [appearance, setAppearance] = useState({
    theme: 'light',
    language: 'ar',
    animations: true,
    compactMode: false
  });

  const [general, setGeneral] = useState({
    companyName: 'شركة التقنية المتقدمة',
    timezone: 'Africa/Cairo',
    dateFormat: 'dd/mm/yyyy',
    currency: 'EGP'
  });

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
              {ARABIC_CONTENT.settings.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {ARABIC_CONTENT.settings.subtitle}
            </p>
          </motion.div>

          {/* Settings Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-md border border-white/20">
                <TabsTrigger value="general" className="flex items-center gap-2">
                  <SettingsIcon className="w-4 h-4" />
                  {ARABIC_CONTENT.settings.general}
                </TabsTrigger>
                <TabsTrigger value="appearance" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  {ARABIC_CONTENT.settings.appearance}
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  {ARABIC_CONTENT.settings.notifications}
                </TabsTrigger>
                <TabsTrigger value="integrations" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {ARABIC_CONTENT.settings.integrations}
                </TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <User className="w-5 h-5" />
                          معلومات الشركة
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="company-name">اسم الشركة</Label>
                            <Input
                              id="company-name"
                              value={general.companyName}
                              onChange={(e) => setGeneral({...general, companyName: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="timezone">المنطقة الزمنية</Label>
                            <Input
                              id="timezone"
                              value={general.timezone}
                              onChange={(e) => setGeneral({...general, timezone: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="currency">العملة</Label>
                            <Input
                              id="currency"
                              value={general.currency}
                              onChange={(e) => setGeneral({...general, currency: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          التفضيلات الإقليمية
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="language">اللغة</Label>
                            <Input
                              id="language"
                              value="العربية"
                              disabled
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="date-format">تنسيق التاريخ</Label>
                            <Input
                              id="date-format"
                              value={general.dateFormat}
                              onChange={(e) => setGeneral({...general, dateFormat: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div className="pt-4">
                            <GradientButton className="w-full">
                              حفظ التغييرات
                            </GradientButton>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Appearance Settings */}
              <TabsContent value="appearance" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Palette className="w-5 h-5" />
                          المظهر والثيم
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <Label className="text-sm font-medium">نمط الألوان</Label>
                            <div className="grid grid-cols-3 gap-3 mt-2">
                              <div className="flex items-center justify-center p-3 rounded-lg border-2 border-primary bg-primary/10 cursor-pointer">
                                <Sun className="w-5 h-5 text-primary" />
                                <span className="text-sm mr-2">فاتح</span>
                              </div>
                              <div className="flex items-center justify-center p-3 rounded-lg border border-border cursor-pointer hover:border-primary/50">
                                <Moon className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm mr-2">داكن</span>
                              </div>
                              <div className="flex items-center justify-center p-3 rounded-lg border border-border cursor-pointer hover:border-primary/50">
                                <Monitor className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm mr-2">تلقائي</span>
                              </div>
                            </div>
                          </div>
                          
                          <Separator />
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">الرسوم المتحركة</Label>
                              <p className="text-xs text-muted-foreground">تفعيل التأثيرات البصرية</p>
                            </div>
                            <Switch
                              checked={appearance.animations}
                              onCheckedChange={(checked) => setAppearance({...appearance, animations: checked})}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">الوضع المضغوط</Label>
                              <p className="text-xs text-muted-foreground">عرض أكثر كثافة للمحتوى</p>
                            </div>
                            <Switch
                              checked={appearance.compactMode}
                              onCheckedChange={(checked) => setAppearance({...appearance, compactMode: checked})}
                            />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4">معاينة المظهر</h3>
                        <div className="space-y-4">
                          <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                            <h4 className="font-medium text-foreground mb-2">عنوان تجريبي</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              هذا نص تجريبي لمعاينة كيف سيبدو المحتوى مع الإعدادات الحالية.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="default">تسمية</Badge>
                              <Badge variant="secondary">ثانوية</Badge>
                            </div>
                          </div>
                          <Button className="w-full" variant="outline">
                            زر تجريبي
                          </Button>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Notifications Settings */}
              <TabsContent value="notifications" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Bell className="w-5 h-5" />
                          إعدادات الإشعارات
                        </h3>
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">إشعارات البريد الإلكتروني</Label>
                              <p className="text-xs text-muted-foreground">تلقي التحديثات عبر البريد</p>
                            </div>
                            <Switch
                              checked={notifications.email}
                              onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">الإشعارات الفورية</Label>
                              <p className="text-xs text-muted-foreground">إشعارات المتصفح المباشرة</p>
                            </div>
                            <Switch
                              checked={notifications.push}
                              onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">التقرير الأسبوعي</Label>
                              <p className="text-xs text-muted-foreground">ملخص أسبوعي للنشاط</p>
                            </div>
                            <Switch
                              checked={notifications.weekly}
                              onCheckedChange={(checked) => setNotifications({...notifications, weekly: checked})}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">العروض التسويقية</Label>
                              <p className="text-xs text-muted-foreground">أخبار المنتج والعروض</p>
                            </div>
                            <Switch
                              checked={notifications.marketing}
                              onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                            />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          الأمان والخصوصية
                        </h3>
                        <div className="space-y-4">
                          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-sm font-medium text-emerald-800">الحساب آمن</span>
                            </div>
                            <p className="text-xs text-emerald-700">
                              تم تفعيل جميع إعدادات الأمان الموصى بها
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <Button variant="outline" className="w-full justify-start">
                              <Shield className="w-4 h-4 ml-2" />
                              تغيير كلمة المرور
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                              <CreditCard className="w-4 h-4 ml-2" />
                              إدارة طرق الدفع
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                              <User className="w-4 h-4 ml-2" />
                              تحديث الملف الشخصي
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Integrations Settings */}
              <TabsContent value="integrations" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          التكاملات المتاحة
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center">
                                <span className="text-xs font-bold text-blue-600">G</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Google Analytics</p>
                                <p className="text-xs text-muted-foreground">تحليلات الويب</p>
                              </div>
                            </div>
                            <Switch />
                          </div>
                          
                          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">
                                <span className="text-xs font-bold text-purple-600">S</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Slack</p>
                                <p className="text-xs text-muted-foreground">إشعارات الفريق</p>
                              </div>
                            </div>
                            <Switch />
                          </div>
                          
                          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center">
                                <span className="text-xs font-bold text-green-600">E</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Excel/CSV</p>
                                <p className="text-xs text-muted-foreground">تصدير البيانات</p>
                              </div>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4">API والمطورين</h3>
                        <div className="space-y-4">
                          <div className="p-4 rounded-lg bg-slate-50 border border-border">
                            <Label className="text-sm font-medium">مفتاح API</Label>
                            <div className="flex gap-2 mt-2">
                              <Input
                                value="kb_live_••••••••••••••••"
                                disabled
                                className="font-mono text-xs"
                              />
                              <Button variant="outline" size="sm">
                                نسخ
                              </Button>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Button variant="outline" className="w-full justify-start">
                              إنشاء مفتاح جديد
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                              عرض الوثائق
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>
      </main>
    </div>
  );
}