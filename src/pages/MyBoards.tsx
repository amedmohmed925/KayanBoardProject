import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useDashboard } from '@/hooks/useDashboard';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { ARABIC_CONTENT, ROUTE_PATHS } from '@/lib/index';
import { MY_BOARDS } from '@/data/index';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Eye, Calendar, BarChart3, MoreVertical, Edit, Trash2, Search, Bell, User } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function MyBoards() {
  const { isSidebarCollapsed, toggleSidebar } = useDashboard();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleCreateBoard = () => {
    navigate(ROUTE_PATHS.TEMPLATES);
  };

  const handleOpenBoard = (boardId: string) => {
    navigate(ROUTE_PATHS.DASHBOARD);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
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
                {ARABIC_CONTENT.myBoards.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {ARABIC_CONTENT.myBoards.subtitle}
              </p>
            </div>
            <GradientButton onClick={handleCreateBoard} className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              {ARABIC_CONTENT.myBoards.createBoard}
            </GradientButton>
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
                    <p className="text-sm text-muted-foreground mb-1">إجمالي اللوحات</p>
                    <p className="text-3xl font-bold text-foreground">{MY_BOARDS.length}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">إجمالي المشاهدات</p>
                    <p className="text-3xl font-bold text-foreground">
                      {MY_BOARDS.reduce((sum, board) => sum + board.views, 0).toLocaleString('ar-SA')}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">إجمالي العناصر</p>
                    <p className="text-3xl font-bold text-foreground">
                      {MY_BOARDS.reduce((sum, board) => sum + board.widgets, 0)}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Boards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {MY_BOARDS.map((board, index) => (
              <motion.div
                key={board.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard hover className="h-full">
                  <div className="p-6 h-full flex flex-col">
                    {/* Board Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${board.color} text-white`}>
                          <BarChart3 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {board.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {board.widgets} عنصر
                          </Badge>
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
                            تعديل
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 ml-2" />
                            حذف
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Board Description */}
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {board.description}
                    </p>

                    {/* Board Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(board.lastModified)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {board.views.toLocaleString('ar-SA')} مشاهدة
                      </div>
                    </div>

                    {/* Open Button */}
                    <Button
                      onClick={() => handleOpenBoard(board.id)}
                      className="w-full"
                      variant="outline"
                    >
                      فتح اللوحة
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Create New Board Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: MY_BOARDS.length * 0.1 }}
            >
              <GlassCard hover className="h-full">
                <div 
                  className="p-6 h-full flex flex-col items-center justify-center text-center cursor-pointer group"
                  onClick={handleCreateBoard}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <Plus className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    إنشاء لوحة جديدة
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    ابدأ بقالب جاهز أو استخدم الذكاء الاصطناعي
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}