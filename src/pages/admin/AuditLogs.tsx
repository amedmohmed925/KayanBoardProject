import React, { useState } from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { GlassCard } from '@/components/GlassCard';
import { ARABIC_CONTENT } from '@/lib/index';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Download, Clock, User, Shield, AlertTriangle } from 'lucide-react';

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const logs = [
    { id: '1', user: 'أحمد محمد', action: 'تغيير إعدادات الموقع', module: 'الإعدادات', ip: '192.168.1.1', date: '2024-04-10 14:30', status: 'success' },
    { id: '2', user: 'نظام آلي', action: 'نسخ احتياطي ناجح', module: 'النظام', ip: 'localhost', date: '2024-04-10 03:00', status: 'success' },
    { id: '3', user: 'سارة أحمد', action: 'حذف مستخدم', module: 'المستخدمين', ip: '192.168.1.45', date: '2024-04-09 18:20', status: 'warning' },
    { id: '4', user: 'أحمد محمد', action: 'محاولة دخول فاشلة', module: 'الأمان', ip: '45.12.33.1', date: '2024-04-09 10:15', status: 'danger' },
    { id: '5', user: 'خالد عمر', action: 'ترقية خطة العميل', module: 'المالية', ip: '192.168.1.12', date: '2024-04-08 16:45', status: 'success' },
  ];

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.audit}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="بحث في السجلات..." 
              className="pr-10 bg-white/50 border-slate-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" className="gap-2 bg-white/50">
              <Filter className="w-4 h-4" />
              تصفية
            </Button>
            <Button variant="outline" className="gap-2 bg-white/50">
              <Download className="w-4 h-4" />
              تصدير CSV
            </Button>
          </div>
        </div>

        <GlassCard className="overflow-hidden border-slate-100">
          <Table dir="rtl">
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-right font-bold">المسؤول</TableHead>
                <TableHead className="text-right font-bold">الإجراء</TableHead>
                <TableHead className="text-right font-bold">الوحدة</TableHead>
                <TableHead className="text-right font-bold">عنوان IP</TableHead>
                <TableHead className="text-right font-bold">التوقيت</TableHead>
                <TableHead className="text-right font-bold">الحالة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="font-medium text-sm">{log.user}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{log.action}</TableCell>
                  <TableCell>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-600 font-bold">
                      {log.module}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs font-mono text-slate-500">{log.ip}</TableCell>
                  <TableCell className="text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {log.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    {log.status === 'success' && <Shield className="w-4 h-4 text-emerald-500" />}
                    {log.status === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                    {log.status === 'danger' && <AlertTriangle className="w-4 h-4 text-rose-500" />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlassCard>
      </div>
    </AdminLayout>
  );
};

export default AuditLogs;
