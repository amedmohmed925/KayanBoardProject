import React from 'react';
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
import { Eye, Trash2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const AdminBoards = () => {
  const boards = [
    { id: '1', name: 'لوحة مبيعات العقارات', owner: 'أحمد محمد', category: 'مبيعات', views: 1240, lastModified: '2024-03-15' },
    { id: '2', name: 'تحليلات متجر إلكتروني', owner: 'سارة أحمد', category: 'تجارة', views: 850, lastModified: '2024-03-18' },
    { id: '3', name: 'متابعة أداء الموظفين', owner: 'محمود علي', category: 'موارد بشرية', views: 420, lastModified: '2024-03-20' },
    { id: '4', name: 'لوحة المصاريف الشخصية', owner: 'ليلى حسن', category: 'مالية', views: 2100, lastModified: '2024-03-22' },
    { id: '5', name: 'خطة التسويق الرقمي', owner: 'خالد عمر', category: 'تسويق', views: 670, lastModified: '2024-03-25' },
  ];

  return (
    <AdminLayout title={ARABIC_CONTENT.admin.boards}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl font-bold">{ARABIC_CONTENT.admin.boardList}</h2>
          <div className="relative w-full md:w-72">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pr-10" placeholder="بحث عن لوحة..." />
          </div>
        </div>

        <GlassCard className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">اسم اللوحة</TableHead>
                <TableHead className="text-right">المالك</TableHead>
                <TableHead className="text-right">الفئة</TableHead>
                <TableHead className="text-right">المشاهدات</TableHead>
                <TableHead className="text-right">آخر تعديل</TableHead>
                <TableHead className="text-left">{ARABIC_CONTENT.admin.actions}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {boards.map((board) => (
                <TableRow key={board.id}>
                  <TableCell className="font-medium">{board.name}</TableCell>
                  <TableCell>{board.owner}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {board.category}
                    </span>
                  </TableCell>
                  <TableCell>{board.views.toLocaleString()}</TableCell>
                  <TableCell>{board.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </Button>
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
