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
import { 
  Edit, 
  Trash2, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Shield, 
  UserCheck,
  Download
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', role: 'admin', status: 'نشط', joinDate: '2024-01-15', boards: 12, plan: 'احترافي' },
    { id: '2', name: 'سارة أحمد', email: 'sara@example.com', role: 'user', status: 'نشط', joinDate: '2024-02-10', boards: 5, plan: 'مجاني' },
    { id: '3', name: 'محمود علي', email: 'mahmoud@example.com', role: 'user', status: 'غير نشط', joinDate: '2024-03-05', boards: 2, plan: 'مجاني' },
    { id: '4', name: 'ليلى حسن', email: 'layla@example.com', role: 'user', status: 'نشط', joinDate: '2024-03-12', boards: 8, plan: 'احترافي' },
    { id: '5', name: 'خالد عمر', email: 'khaled@example.com', role: 'user', status: 'نشط', joinDate: '2024-03-20', boards: 15, plan: 'شركات' },
    { id: '6', name: 'ياسين كمال', email: 'yassin@example.com', role: 'user', status: 'نشط', joinDate: '2024-04-01', boards: 3, plan: 'مجاني' },
    { id: '7', name: 'مريم إبراهيم', email: 'mariam@example.com', role: 'user', status: 'نشط', joinDate: '2024-04-05', boards: 20, plan: 'شركات' },
  ];

  const filteredUsers = users.filter(user => 
    user.name.includes(searchTerm) || user.email.includes(searchTerm)
  );

  const stats = [
    { label: 'إجمالي المستخدمين', value: '1,284', color: 'text-blue-600' },
    { label: 'نشطون الآن', value: '142', color: 'text-emerald-600' },
    { label: 'مشتركون جدد', value: '28', color: 'text-purple-600' },
    { label: 'معدل الارتداد', value: '2.4%', color: 'text-rose-600' },
  ];

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.users}>
      <div className="space-y-8">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
              <h4 className={`text-xl font-bold ${stat.color}`}>{stat.value}</h4>
            </GlassCard>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="بحث عن مستخدم..." 
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
              تصدير
            </Button>
            <Button className="gap-2 shadow-lg shadow-primary/20">
              <UserPlus className="w-4 h-4" />
              إضافة مستخدم
            </Button>
          </div>
        </div>

        <GlassCard className="overflow-hidden border-slate-100">
          <Table dir="rtl">
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-right font-bold">المستخدم</TableHead>
                <TableHead className="text-right font-bold">الخطة</TableHead>
                <TableHead className="text-right font-bold">اللوحات</TableHead>
                <TableHead className="text-right font-bold">الحالة</TableHead>
                <TableHead className="text-right font-bold">تاريخ الانضمام</TableHead>
                <TableHead className="text-left font-bold">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-bold text-primary">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{user.name}</p>
                        <p className="text-xs text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      user.plan === 'شركات' ? 'bg-purple-100 text-purple-600' : 
                      user.plan === 'احترافي' ? 'bg-blue-100 text-blue-600' : 
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {user.plan}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm font-medium">{user.boards}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'نشط' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                      <span className="text-xs">{user.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-slate-500">{user.joinDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-primary">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-500">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuLabel>إجراءات إضافية</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2">
                            <Shield className="w-4 h-4" /> تغيير الصلاحيات
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <UserCheck className="w-4 h-4" /> تعليق الحساب
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2 text-rose-500 focus:text-rose-500">
                            <Trash2 className="w-4 h-4" /> حذف المستخدم
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
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

export default AdminUsers;
