import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { GlassCard } from '@/components/GlassCard';
import { ARABIC_CONTENT, formatCurrency } from '@/lib/index';
import { ChartWidget } from '@/components/ChartWidget';
import { 
  CreditCard, 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  Download,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const AdminFinancials = () => {
  const stats = [
    { title: 'الإيرادات الشهرية (MRR)', value: 45200, icon: TrendingUp, trend: '+12%', up: true },
    { title: 'إجمالي المشتركين', value: 1240, icon: Users, trend: '+5%', up: true },
    { title: 'متوسط قيمة العميل', value: 36.5, icon: CreditCard, trend: '-2%', up: false },
    { title: 'معدل الإلغاء (Churn)', value: '1.4%', icon: ArrowDownRight, trend: '-0.3%', up: true },
  ];

  const transactions = [
    { id: 'TXN-001', user: 'محمد علي', plan: 'احترافي', amount: 299, date: '2024-04-10', status: 'completed' },
    { id: 'TXN-002', user: 'سارة خالد', plan: 'شركات', amount: 999, date: '2024-04-10', status: 'completed' },
    { id: 'TXN-003', user: 'يوسف أحمد', plan: 'احترافي', amount: 299, date: '2024-04-09', status: 'failed' },
    { id: 'TXN-004', user: 'ليلى مراد', plan: 'احترافي', amount: 299, date: '2024-04-09', status: 'completed' },
  ];

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.financials}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className={`flex items-center text-xs font-bold ${stat.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.trend}
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">
                {typeof stat.value === 'number' ? formatCurrency(stat.value) : stat.value}
              </h3>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartWidget 
              widget={{
                id: 'rev-flow',
                type: 'line',
                title: 'تدفق الإيرادات',
                data: [
                  { name: 'يناير', value: 30000 },
                  { name: 'فبراير', value: 35000 },
                  { name: 'مارس', value: 42000 },
                  { name: 'أبريل', value: 45000 },
                ]
              }} 
            />
          </div>
          <GlassCard className="p-6">
            <h3 className="font-bold mb-6">توزيع الخطط</h3>
            <div className="space-y-4">
              {[
                { name: 'الخطة المجانية', count: 850, percentage: 68, color: 'bg-slate-400' },
                { name: 'الخطة الاحترافية', count: 320, percentage: 26, color: 'bg-indigo-500' },
                { name: 'خطة الشركات', count: 70, percentage: 6, color: 'bg-purple-600' },
              ].map((plan, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{plan.name}</span>
                    <span className="text-slate-500">{plan.count} مستخدم</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${plan.color}`} 
                      style={{ width: `${plan.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">أحدث المعاملات</h3>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" /> تقرير مالي
            </Button>
          </div>
          <Table dir="rtl">
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم العملية</TableHead>
                <TableHead className="text-right">المستخدم</TableHead>
                <TableHead className="text-right">الخطة</TableHead>
                <TableHead className="text-right">المبلغ</TableHead>
                <TableHead className="text-right">التاريخ</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-mono text-xs">{txn.id}</TableCell>
                  <TableCell className="font-medium">{txn.user}</TableCell>
                  <TableCell>{txn.plan}</TableCell>
                  <TableCell>{formatCurrency(txn.amount)}</TableCell>
                  <TableCell className="text-slate-500 text-sm">{txn.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      txn.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                    }`}>
                      {txn.status === 'completed' ? 'ناجحة' : 'فاشلة'}
                    </span>
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

export default AdminFinancials;
