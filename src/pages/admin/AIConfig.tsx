import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { GlassCard } from '@/components/GlassCard';
import { ARABIC_CONTENT } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  Cpu, 
  Zap, 
  Key, 
  BarChart3, 
  Save, 
  AlertCircle,
  Database
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AIConfig = () => {
  return (
    <AdminLayout title={ARABIC_CONTENT.admin.aiConfig}>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <GlassCard className="p-4 flex items-center gap-4 border-emerald-100">
            <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">استهلاك اليوم</p>
              <h4 className="text-lg font-bold">1,240 tokens</h4>
            </div>
          </GlassCard>
          <GlassCard className="p-4 flex items-center gap-4 border-blue-100">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">المفاتيح النشطة</p>
              <h4 className="text-lg font-bold">3 مفاتيح</h4>
            </div>
          </GlassCard>
          <GlassCard className="p-4 flex items-center gap-4 border-purple-100">
            <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">النموذج الافتراضي</p>
              <h4 className="text-lg font-bold">Gemini 1.5 Pro</h4>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-bold">إعدادات محرك الذكاء الاصطناعي</h3>
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>المزود الافتراضي</Label>
                <Select defaultValue="gemini">
                  <SelectTrigger dir="rtl">
                    <SelectValue placeholder="اختر المزود" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gemini">Google Gemini (موصى به)</SelectItem>
                    <SelectItem value="openai">OpenAI GPT-4</SelectItem>
                    <SelectItem value="anthropic">Anthropic Claude</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label>Gemini API Key</Label>
                <div className="flex gap-2">
                  <Input type="password" value="********************************" readOnly />
                  <Button variant="outline">تحديث</Button>
                </div>
              </div>

              <div className="grid gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تفعيل التوليد السريع</Label>
                    <p className="text-xs text-slate-500">استخدام نماذج أصغر للاستجابة السريعة</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تخزين مؤقت للنتائج (Caching)</Label>
                    <p className="text-xs text-slate-500">توفير التكلفة عن طريق تخزين الردود المتكررة</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 border-amber-100 bg-amber-50/30">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
            <div className="space-y-2">
              <h4 className="font-bold text-amber-900">حدود الاستهلاك التحذيرية</h4>
              <p className="text-sm text-amber-800">سيتم إرسال إشعار للمسؤولين عند وصول استهلاك الـ API إلى 80% من الحد الشهري المحدد.</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex-1">
                  <div className="h-2 w-full bg-amber-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[65%]" />
                  </div>
                </div>
                <span className="text-sm font-bold text-amber-900">65%</span>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-end gap-3">
          <Button variant="outline">إعادة تعيين</Button>
          <Button className="gap-2 px-8">
            <Save className="w-4 h-4" /> حفظ الإعدادات
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AIConfig;
