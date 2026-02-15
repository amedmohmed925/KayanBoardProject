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
  Eye, 
  Trash2, 
  Search, 
  Layout, 
  BarChart3, 
  Share2, 
  MoreHorizontal,
  Star,
  Clock,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminBoards = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const boards = [
    { id: '1', name: 'لوحة مبيعات العقارات', owner: 'أحمد محمد', category: 'مبيعات', views: 1240, lastModified: '2024-03-15', status: 'عام', rating: 4.8 },
    { id: '2', name: 'تحليلات متجر إلكتروني', owner: 'سارة أحمد', category: 'تجارة', views: 850, lastModified: '2024-03-18', status: 'خاص', rating: 4.5 },
    { id: '3', name: 'متابعة أداء الموظفين', owner: 'محمود علي', category: 'موارد بشرية', views: 420, lastModified: '2024-03-20', status: 'فريق', rating: 4.2 },
    { id: '4', name: 'لوحة المصاريف الشخصية', owner: 'ليلى حسن', category: 'مالية', views: 2100, lastModified: '2024-03-22', status: 'خاص', rating: 4.9 },
    { id: '5', name: 'خطة التسويق الرقمي', owner: 'خالد عمر', category: 'تسويق', views: 670, lastModified: '2024-03-25', status: 'عام', rating: 4.6 },
    { id: '6', name: 'إدارة المخزون الذكي', owner: 'ياسين كمال', category: 'عمليات', views: 1540, lastModified: '2024-04-01', status: 'فريق', rating: 4.7 },
    { id: '7', name: 'تحليلات وسائل التواصل', owner: 'مريم إبراهيم', category: 'تسويق', views: 3200, lastModified: '2024-04-05', status: 'عام', rating: 5.0 },
  ];

  const filteredBoards = boards.filter(board => 
    board.name.includes(searchTerm) || board.owner.includes(searchTerm)
  );

  const categories = [
    { name: 'مبيعات', count: 12, color: 'bg-blue-500' },
    { name: 'تسويق', count: 8, color: 'bg-purple-500' },
    { name: 'مالية', count: 5, color: 'bg-emerald-500' },
    { name: 'عمليات', count: 7, color: 'bg-amber-500' },
  ];

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.boards}>
      <div className="space-y-8">
        {/* Category Quick View */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <GlassCard key={i} className="p-4 flex items-center gap-4">
              <div className={`w-2 h-10 rounded-full ${cat.color}`} />
              <div>
                <p className="text-xs text-slate-500">{cat.name}</p>
                <h4 className="text-lg font-bold">{cat.count} لوحة</h4>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="بحث عن لوحة أو مالك..." 
              className="pr-10 bg-white/50 border-slate-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" className="gap-2 bg-white/50">
              <Filter className="w-4 h-4" />
              تصفية الفئات
            </Button>
            <Button className="gap-2 shadow-lg shadow-primary/20">
              <Layout className="w-4 h-4" />
              قوالب جديدة
            </Button>
          </div>
        </div>

        <GlassCard className="overflow-hidden border-slate-100">
          <Table dir="rtl">
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-right font-bold">اللوحة</TableHead>
                <TableHead className="text-right font-bold">المالك</TableHead>
                <TableHead className="text-right font-bold">الخصوصية</TableHead>
                <TableHead className="text-right font-bold">التفاعل</TableHead>
                <TableHead className="text-right font-bold">آخر نشاط</TableHead>
                <TableHead className="text-left font-bold">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBoards.map((board) => (
                <TableRow key={board.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{board.name}</p>
                        <p className="text-[10px] text-primary font-medium">{board.category}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm font-medium text-slate-700">{board.owner}</p>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      board.status === 'عام' ? 'bg-emerald-100 text-emerald-600' : 
                      board.status === 'فريق' ? 'bg-blue-100 text-blue-600' : 
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {board.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-slate-600">
                        <Eye className="w-3 h-3" /> {board.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-amber-500 font-bold">
                        <Star className="w-3 h-3 fill-amber-500" /> {board.rating}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" /> {board.lastModified}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-primary">
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-500">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuLabel>إدارة اللوحة</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2">
                            <Star className="w-4 h-4" /> تمييز كقالب
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Layout className="w-4 h-4" /> نقل إلى فئة أخرى
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2 text-rose-500 focus:text-rose-500">
                            <Trash2 className="w-4 h-4" /> حذف اللوحة
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

export default AdminBoards;
