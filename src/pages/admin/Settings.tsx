import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { GlassCard } from '@/components/GlassCard';
import { ARABIC_CONTENT } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Save, Shield, Globe, Bell } from 'lucide-react';

const AdminSettings = () => {
  return (
    <AdminLayout title={ARABIC_CONTENT.admin.settings}>
      <div className="max-w-4xl mx-auto space-y-6">
        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">إعدادات الموقع العامة</h3>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="site-name">اسم الموقع</Label>
              <Input id="site-name" defaultValue="كيان بورد | KayanBoard" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="site-desc">وصف الموقع</Label>
              <Input id="site-desc" defaultValue="منصة بناء لوحات التحكم الذكية بالذكاء الاصطناعي" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>وضع الصيانة</Label>
                <p className="text-sm text-muted-foreground">إغلاق الموقع مؤقتاً للصيانة</p>
              </div>
              <Switch />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">الأمان والصلاحيات</h3>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>التسجيل المفتوح</Label>
                <p className="text-sm text-muted-foreground">السماح للمستخدمين الجدد بإنشاء حسابات</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>تأكيد البريد الإلكتروني</Label>
                <p className="text-sm text-muted-foreground">إلزام المستخدمين بتأكيد بريدهم الإلكتروني</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">إشعارات النظام</h3>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>إشعارات البريد للمسؤولين</Label>
                <p className="text-sm text-muted-foreground">تلقي تنبيهات عند تسجيل مستخدمين جدد</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-end">
          <Button className="gap-2 px-8">
            <Save className="w-4 h-4" />
            حفظ التغييرات
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
