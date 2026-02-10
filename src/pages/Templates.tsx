import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { ARABIC_CONTENT, ROUTE_PATHS } from '@/lib/index';
import { DASHBOARD_TEMPLATES } from '@/data/index';
import { useDashboard } from '@/hooks/useDashboard';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, TrendingUp, DollarSign, Users, Settings, Zap, Search, Bell, User } from 'lucide-react';

const categoryIcons = {
  sales: TrendingUp,
  marketing: Zap,
  finance: DollarSign,
  hr: Users,
  operations: Settings,
};

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { setWidgets, isSidebarCollapsed, toggleSidebar } = useDashboard();

  const filteredTemplates = selectedCategory === 'all' 
    ? DASHBOARD_TEMPLATES 
    : DASHBOARD_TEMPLATES.filter(template => template.category === selectedCategory);

  const handleUseTemplate = (template: typeof DASHBOARD_TEMPLATES[0]) => {
    // Set the template widgets to dashboard state
    setWidgets(template.widgets);
    // Navigate to dashboard
    navigate(ROUTE_PATHS.DASHBOARD);
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              {ARABIC_CONTENT.templates.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {ARABIC_CONTENT.templates.subtitle}
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-white/80 backdrop-blur-md border border-white/20">
                <TabsTrigger value="all" className="text-sm">
                  {ARABIC_CONTENT.templates.categories.all}
                </TabsTrigger>
                <TabsTrigger value="sales" className="text-sm">
                  {ARABIC_CONTENT.templates.categories.sales}
                </TabsTrigger>
                <TabsTrigger value="marketing" className="text-sm">
                  {ARABIC_CONTENT.templates.categories.marketing}
                </TabsTrigger>
                <TabsTrigger value="finance" className="text-sm">
                  {ARABIC_CONTENT.templates.categories.finance}
                </TabsTrigger>
                <TabsTrigger value="hr" className="text-sm">
                  {ARABIC_CONTENT.templates.categories.hr}
                </TabsTrigger>
                <TabsTrigger value="operations" className="text-sm">
                  {ARABIC_CONTENT.templates.categories.operations}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Templates Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTemplates.map((template, index) => {
              const IconComponent = categoryIcons[template.category as keyof typeof categoryIcons] || BarChart3;
              
              return (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard hover className="h-full">
                    <div className="p-6 h-full flex flex-col">
                      {/* Template Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${template.color} text-white`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {template.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {template.widgets.length} عنصر
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Template Description */}
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {template.description}
                      </p>

                      {/* Template Preview */}
                      <div className="bg-slate-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-muted-foreground">
                          {template.preview}
                        </p>
                      </div>

                      {/* Widget Count & Use Button */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {template.widgets.length} عنصر واجهة
                        </div>
                        <GradientButton
                          onClick={() => handleUseTemplate(template)}
                          className="px-4 py-2 text-sm"
                        >
                          {ARABIC_CONTENT.dashboard.useTemplate}
                        </GradientButton>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredTemplates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                لا توجد قوالب في هذه الفئة
              </h3>
              <p className="text-muted-foreground">
                جرب فئة أخرى أو استخدم الذكاء الاصطناعي لإنشاء لوحة مخصصة
              </p>
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
}