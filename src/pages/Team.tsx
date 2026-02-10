import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useDashboard } from '@/hooks/useDashboard';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { ARABIC_CONTENT } from '@/lib/index';
import { TEAM_MEMBERS_EXTENDED } from '@/data/index';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  UserPlus, 
  Users, 
  Clock, 
  Shield, 
  Edit, 
  MoreVertical,
  Mail,
  Calendar,
  Search,
  Bell,
  User
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Team() {
  const { isSidebarCollapsed, toggleSidebar } = useDashboard();
  const [inviteEmail, setInviteEmail] = useState('');
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const activeMembers = TEAM_MEMBERS_EXTENDED.filter(member => member.status === 'active');
  const pendingMembers = TEAM_MEMBERS_EXTENDED.filter(member => member.status === 'pending');

  const handleInvite = () => {
    // Handle invite logic here
    console.log('Inviting:', inviteEmail);
    setInviteEmail('');
    setIsInviteOpen(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const getPermissionBadge = (permissions: string[]) => {
    if (permissions.includes('admin')) {
      return <Badge variant="destructive" className="text-xs">مدير</Badge>;
    } else if (permissions.includes('edit')) {
      return <Badge variant="default" className="text-xs">محرر</Badge>;
    } else {
      return <Badge variant="secondary" className="text-xs">مشاهد</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      {/* Sidebar Component */}
      <DashboardSidebar 
        collapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 overflow-hidden">
        {/* Top Bar */}
        <DashboardHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Canvas Area */}
        <section className="p-6 lg:p-8 flex-1 overflow-y-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                {ARABIC_CONTENT.team.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {ARABIC_CONTENT.team.subtitle}
              </p>
            </div>
            <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
              <DialogTrigger asChild>
                <GradientButton className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  {ARABIC_CONTENT.team.inviteMember}
                </GradientButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md" dir="rtl">
                <DialogHeader>
                  <DialogTitle>دعوة عضو جديد</DialogTitle>
                  <DialogDescription>
                    أدخل البريد الإلكتروني للعضو الجديد لإرسال دعوة للانضمام للفريق
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="grid flex-1 gap-2">
                    <Input
                      placeholder="البريد الإلكتروني"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      type="email"
                    />
                  </div>
                  <Button onClick={handleInvite} disabled={!inviteEmail}>
                    إرسال دعوة
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <GlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">الأعضاء النشطون</p>
                    <p className="text-3xl font-bold text-foreground">{activeMembers.length}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">في الانتظار</p>
                    <p className="text-3xl font-bold text-foreground">{pendingMembers.length}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">المديرون</p>
                    <p className="text-3xl font-bold text-foreground">
                      {activeMembers.filter(m => m.permissions.includes('admin')).length}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Team Members Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/80 backdrop-blur-md border border-white/20">
                <TabsTrigger value="active">
                  {ARABIC_CONTENT.team.members} ({activeMembers.length})
                </TabsTrigger>
                <TabsTrigger value="pending">
                  {ARABIC_CONTENT.team.pending} ({pendingMembers.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard hover>
                        <div className="p-6">
                          {/* Member Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-foreground">
                                  {member.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {member.role}
                                </p>
                              </div>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="w-4 h-4 ml-2" />
                                  تعديل الصلاحيات
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Mail className="w-4 h-4 ml-2" />
                                  إرسال رسالة
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          {/* Member Info */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Mail className="w-4 h-4" />
                              {member.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              انضم في {formatDate(member.joinDate)}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">الصلاحيات:</span>
                              {getPermissionBadge(member.permissions)}
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="pending" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pendingMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard>
                        <div className="p-6">
                          {/* Member Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-12 h-12 opacity-60">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-foreground">
                                  {member.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {member.role}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              في الانتظار
                            </Badge>
                          </div>

                          {/* Member Info */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Mail className="w-4 h-4" />
                              {member.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              دُعي في {formatDate(member.joinDate)}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="flex-1">
                                إعادة إرسال
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1">
                                إلغاء
                              </Button>
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

                {pendingMembers.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                      <Clock className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      لا توجد دعوات معلقة
                    </h3>
                    <p className="text-muted-foreground">
                      جميع أعضاء الفريق نشطون حالياً
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>
      </main>
    </div>
  );
}