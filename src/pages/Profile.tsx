import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useDashboard } from '@/hooks/useDashboard';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { ARABIC_CONTENT } from '@/lib/index';
import { USER_PROFILE } from '@/data/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Mail, 
  Building, 
  Calendar, 
  Edit, 
  Camera,
  Shield,
  Bell,
  CreditCard,
  LogOut,
  Crown,
  Star,
  Search
} from 'lucide-react';

export default function Profile() {
  const { isSidebarCollapsed, toggleSidebar } = useDashboard();
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(USER_PROFILE);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case 'professional':
        return <Badge className="bg-gradient-to-r from-primary to-accent text-white"><Crown className="w-3 h-3 ml-1" />احترافية</Badge>;
      case 'advanced':
        return <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white"><Star className="w-3 h-3 ml-1" />متقدمة</Badge>;
      default:
        return <Badge variant="secondary">أساسية</Badge>;
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              {ARABIC_CONTENT.profile.title}
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <GlassCard>
                <div className="p-6 text-center">
                  {/* Avatar */}
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback className="text-2xl">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -left-2 rounded-full w-8 h-8 p-0"
                      variant="outline"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Profile Info */}
                  <h2 className="text-xl font-semibold text-foreground mb-1">
                    {profile.name}
                  </h2>
                  <p className="text-muted-foreground mb-2">{profile.role}</p>
                  <div className="mb-4">
                    {getPlanBadge(profile.plan)}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">3</p>
                      <p className="text-xs text-muted-foreground">لوحات نشطة</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">2,773</p>
                      <p className="text-xs text-muted-foreground">إجمالي المشاهدات</p>
                    </div>
                  </div>

                  {/* Edit Button */}
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    className="w-full"
                  >
                    <Edit className="w-4 h-4 ml-2" />
                    {isEditing ? 'إلغاء التعديل' : ARABIC_CONTENT.profile.editProfile}
                  </Button>
                </div>
              </GlassCard>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6"
              >
                <GlassCard>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">إجراءات سريعة</h3>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start">
                        <Shield className="w-4 h-4 ml-2" />
                        {ARABIC_CONTENT.profile.security}
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Bell className="w-4 h-4 ml-2" />
                        {ARABIC_CONTENT.profile.notifications}
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <CreditCard className="w-4 h-4 ml-2" />
                        {ARABIC_CONTENT.profile.billing}
                      </Button>
                      <Separator className="my-2" />
                      <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                        <LogOut className="w-4 h-4 ml-2" />
                        {ARABIC_CONTENT.profile.logout}
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Profile Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-md border border-white/20">
                  <TabsTrigger value="personal">
                    {ARABIC_CONTENT.profile.personalInfo}
                  </TabsTrigger>
                  <TabsTrigger value="account">
                    {ARABIC_CONTENT.profile.accountSettings}
                  </TabsTrigger>
                  <TabsTrigger value="activity">
                    النشاط الأخير
                  </TabsTrigger>
                </TabsList>

                {/* Personal Information */}
                <TabsContent value="personal" className="mt-6">
                  <GlassCard>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-foreground">
                          {ARABIC_CONTENT.profile.personalInfo}
                        </h3>
                        {isEditing && (
                          <GradientButton onClick={handleSave}>
                            حفظ التغييرات
                          </GradientButton>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">الاسم الكامل</Label>
                          <Input
                            id="name"
                            value={profile.name}
                            onChange={(e) => setProfile({...profile, name: e.target.value})}
                            disabled={!isEditing}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">البريد الإلكتروني</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({...profile, email: e.target.value})}
                            disabled={!isEditing}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="role">المنصب</Label>
                          <Input
                            id="role"
                            value={profile.role}
                            onChange={(e) => setProfile({...profile, role: e.target.value})}
                            disabled={!isEditing}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company">الشركة</Label>
                          <Input
                            id="company"
                            value={profile.company}
                            onChange={(e) => setProfile({...profile, company: e.target.value})}
                            disabled={!isEditing}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <Separator className="my-6" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                          <Calendar className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium text-foreground">تاريخ الانضمام</p>
                            <p className="text-xs text-muted-foreground">
                              {formatDate(profile.joinDate)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                          <Crown className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium text-foreground">الباقة الحالية</p>
                            <p className="text-xs text-muted-foreground">
                              {profile.plan === 'professional' ? 'احترافية' : 'أساسية'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </TabsContent>

                {/* Account Settings */}
                <TabsContent value="account" className="mt-6">
                  <div className="space-y-6">
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          الأمان
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                            <div>
                              <p className="text-sm font-medium">كلمة المرور</p>
                              <p className="text-xs text-muted-foreground">آخر تحديث منذ 3 أشهر</p>
                            </div>
                            <Button variant="outline" size="sm">
                              تغيير
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                            <div>
                              <p className="text-sm font-medium">المصادقة الثنائية</p>
                              <p className="text-xs text-muted-foreground">غير مفعلة</p>
                            </div>
                            <Button variant="outline" size="sm">
                              تفعيل
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <CreditCard className="w-5 h-5" />
                          الفوترة والاشتراك
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                            <div>
                              <p className="text-sm font-medium">الباقة الاحترافية</p>
                              <p className="text-xs text-muted-foreground">99 جنيه شهرياً</p>
                            </div>
                            <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                              نشطة
                            </Badge>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" className="flex-1">
                              ترقية الباقة
                            </Button>
                            <Button variant="outline" className="flex-1">
                              إدارة الفوترة
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </TabsContent>

                {/* Activity */}
                <TabsContent value="activity" className="mt-6">
                  <GlassCard>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">النشاط الأخير</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-foreground">تم إنشاء لوحة تحكم جديدة</p>
                            <p className="text-xs text-muted-foreground">لوحة المبيعات الرئيسية - منذ ساعتين</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-foreground">تم تحديث الملف الشخصي</p>
                            <p className="text-xs text-muted-foreground">تغيير معلومات الشركة - أمس</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-foreground">تم دعوة عضو جديد</p>
                            <p className="text-xs text-muted-foreground">ليلى الحربي - منذ 3 أيام</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-foreground">تم استخدام قالب جديد</p>
                            <p className="text-xs text-muted-foreground">قالب التسويق - منذ أسبوع</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}