import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { GlassCard } from '@/components/GlassCard';
import { ARABIC_CONTENT } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Layout, 
  FileText, 
  Settings, 
  Eye, 
  Trash2, 
  Edit,
  Globe,
  Image as ImageIcon
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContentManager = () => {
  return (
    <AdminLayout title={ARABIC_CONTENT.admin.content}>
      <div className="space-y-6">
        <Tabs defaultValue="templates" className="w-full" dir="rtl">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-slate-100 p-1">
              <TabsTrigger value="templates" className="gap-2">
                <Layout className="w-4 h-4" /> القوالب
              </TabsTrigger>
              <TabsTrigger value="pages" className="gap-2">
                <Globe className="w-4 h-4" /> الصفحات
              </TabsTrigger>
              <TabsTrigger value="media" className="gap-2">
                <ImageIcon className="w-4 h-4" /> الوسائط
              </TabsTrigger>
            </TabsList>
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> إضافة جديد
            </Button>
          </div>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'لوحة مبيعات العقارات', category: 'مبيعات', usage: 1240, color: 'bg-blue-500' },
                { name: 'تحليلات المتجر', category: 'تجارة', usage: 850, color: 'bg-emerald-500' },
                { name: 'إدارة المهام', category: 'إنتاجية', usage: 2100, color: 'bg-purple-500' },
              ].map((template, i) => (
                <GlassCard key={i} className="overflow-hidden group">
                  <div className={`h-32 ${template.color} opacity-20 flex items-center justify-center`}>
                    <Layout className="w-12 h-12 text-current" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{template.name}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold">{template.category}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">استخدم هذا القالب {template.usage} مرة</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <Edit className="w-3 h-3" /> تعديل
                      </Button>
                      <Button variant="outline" size="icon" className="text-rose-500 hover:bg-rose-50">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pages">
            <div className="space-y-4">
              {[
                { title: 'من نحن', path: '/about', status: 'published', lastUpdate: '2024-03-01' },
                { title: 'سياسة الخصوصية', path: '/privacy', status: 'published', lastUpdate: '2024-01-15' },
                { title: 'الشروط والأحكام', path: '/terms', status: 'draft', lastUpdate: '2024-04-05' },
              ].map((page, i) => (
                <GlassCard key={i} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <FileText className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{page.title}</h4>
                      <p className="text-xs text-slate-400">{page.path}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                      page.status === 'published' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                    }`}>
                      {page.status === 'published' ? 'منشور' : 'مسودة'}
                    </span>
                    <p className="text-xs text-slate-400">{page.lastUpdate}</p>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon"><Settings className="w-4 h-4" /></Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default ContentManager;
