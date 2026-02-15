import React from 'react';
import Layout from '@/components/Layout';
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
import { Edit, Trash2, UserPlus } from 'lucide-react';

const AdminUsers = () => {
  const users = [
    { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', role: 'admin', status: 'نشط', joinDate: '2024-01-15' },
    { id: '2', name: 'سارة أحمد', email: 'sara@example.com', role: 'user', status: 'نشط', joinDate: '2024-02-10' },
    { id: '3', name: 'محمود علي', email: 'mahmoud@example.com', role: 'user', status: 'غير نشط', joinDate: '2024-03-05' },
    { id: '4', name: 'ليلى حسن', email: 'layla@example.com', role: 'user', status: 'نشط', joinDate: '2024-03-12' },
    { id: '5', name: 'خالد عمر', email: 'khaled@example.com', role: 'user', status: 'نشط', joinDate: '2024-03-20' },
  ];

  return (
    <Layout title={ARABIC_CONTENT.admin.users}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{ARABIC_CONTENT.admin.userList}</h2>
          <Button className="gap-2">
            <UserPlus className="w-4 h-4" />
            إضافة مستخدم
          </Button>
        </div>

        <GlassCard className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">{ARABIC_CONTENT.auth.name}</TableHead>
                <TableHead className="text-right">{ARABIC_CONTENT.auth.email}</TableHead>
                <TableHead className="text-right">{ARABIC_CONTENT.admin.role}</TableHead>
                <TableHead className="text-right">{ARABIC_CONTENT.admin.status}</TableHead>
                <TableHead className="text-right">تاريخ الانضمام</TableHead>
                <TableHead className="text-left">{ARABIC_CONTENT.admin.actions}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.role === 'admin' ? 'bg-purple-500/10 text-purple-500' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {user.role === 'admin' ? 'مسؤول' : 'مستخدم'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'نشط' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500">
                        <Edit className="w-4 h-4" />
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
    </Layout>
  );
};

export default AdminUsers;
