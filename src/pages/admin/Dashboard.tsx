import React from 'react';
import Layout from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { ChartWidget } from '@/components/ChartWidget';
import { ARABIC_CONTENT } from '@/lib/index';
import { Users, LayoutDashboard, Activity, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: ARABIC_CONTENT.admin.totalUsers, value: '1,284', icon: Users, trend: 'up', change: '+12%' },
    { title: ARABIC_CONTENT.admin.totalBoards, value: '3,456', icon: LayoutDashboard, trend: 'up', change: '+18%' },
    { title: ARABIC_CONTENT.admin.activeUsers, value: '842', icon: Activity, trend: 'down', change: '-5%' },
    { title: ARABIC_CONTENT.admin.revenue, value: 'EGP 45,200', icon: DollarSign, trend: 'up', change: '+24%' },
  ];

  const chartData = [
    { name: 'يناير', users: 400, boards: 240 },
    { name: 'فبراير', users: 300, boards: 139 },
    { name: 'مارس', users: 200, boards: 980 },
    { name: 'أبريل', users: 278, boards: 390 },
    { name: 'مايو', users: 189, boards: 480 },
    { name: 'يونيو', users: 239, boards: 380 },
  ];

  return (
    <Layout title={ARABIC_CONTENT.admin.title}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className={`text-xs mt-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} مقارنة بالشهر الماضي
                  </p>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartWidget
            id="admin-users-chart"
            type="line"
            title="نمو المستخدمين واللوحات"
            data={chartData}
            config={{
              dataKeys: ['users', 'boards'],
              colors: ['#8884d8', '#82ca9d'],
            }}
          />
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4">{ARABIC_CONTENT.admin.userList}</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                      U{i}
                    </div>
                    <div>
                      <p className="font-medium">مستخدم {i}</p>
                      <p className="text-xs text-muted-foreground">user{i}@example.com</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">نشط</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
