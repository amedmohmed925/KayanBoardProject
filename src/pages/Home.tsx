import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Layout as LayoutIcon, 
  BarChart3, 
  Zap, 
  Settings, 
  ChevronLeft, 
  CheckCircle2, 
  Target,
  Lightbulb
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { GradientButton } from '@/components/GradientButton';
import { GlassCard } from '@/components/GlassCard';
import { ROUTE_PATHS, ARABIC_CONTENT, cn } from '@/lib/index';
import { FEATURES_DATA, TEAM_MEMBERS } from '@/data/index';
import { IMAGES } from '@/assets/images';
import { useNavigate, NavLink } from 'react-router-dom';

// Mapping for dynamic icons in FEATURES_DATA
const ICON_MAP: Record<string, any> = {
  Layout: LayoutIcon,
  BarChart3: BarChart3,
  Zap: Zap,
  Settings: Settings,
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      <div dir="rtl" className="flex flex-col w-full bg-slate-50">
        {/* Hero Section */}
        <section 
          id="hero" 
          ref={heroRef}
          className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-32 px-4 overflow-hidden"
        >
          {/* Subtle Circuit Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url(${IMAGES.CIRCUIT_BG_1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Gradient Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity }}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-white/50 backdrop-blur-md border border-white/20 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse ml-2" />
              <span className="text-sm font-medium text-slate-600">متوفر الآن: الجيل الثاني من سحر الذكاء الاصطناعي</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              {ARABIC_CONTENT.hero.title}
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {ARABIC_CONTENT.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton 
                onClick={() => navigate(ROUTE_PATHS.LOGIN)} 
                className="w-full sm:w-auto text-lg px-10 py-6"
              >
                {ARABIC_CONTENT.hero.cta}
              </GradientButton>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-2"
              >
                {ARABIC_CONTENT.common.learnMore}
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Floating Dashboard Mockups */}
          <div className="relative w-full max-w-6xl mx-auto mt-20 perspective-1000">
            <motion.div 
              style={{ y: y1 }}
              className="relative z-20 mx-auto w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/20"
            >
              <img 
                src={IMAGES.DASHBOARD_MOCKUP_7} 
                alt="Dashboard Preview" 
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-20 -right-10 z-30 w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-white/30 hidden lg:block"
            >
              <img 
                src={IMAGES.GLASS_UI_1} 
                alt="Widget Preview" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                {ARABIC_CONTENT.features.title}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {ARABIC_CONTENT.features.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES_DATA.map((feature, index) => {
                const Icon = ICON_MAP[feature.icon] || Zap;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard hover className="h-full p-8 relative overflow-hidden group">
                      {/* Top Gradient Border */}
                      <div className={cn("absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r", feature.color)} />
                      
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-gradient-to-br transition-transform group-hover:scale-110", feature.color)}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-32 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-10 h-full flex flex-col border-none shadow-xl shadow-indigo-500/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{ARABIC_CONTENT.about.visionTitle}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {ARABIC_CONTENT.about.visionText}
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-10 h-full flex flex-col border-none shadow-xl shadow-indigo-500/5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{ARABIC_CONTENT.about.missionTitle}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {ARABIC_CONTENT.about.missionText}
                  </p>
                </GlassCard>
              </motion.div>
            </div>

            {/* Team Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-16">
                {ARABIC_CONTENT.about.teamTitle}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {TEAM_MEMBERS.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                        <img 
                          src={member.avatar} 
                          alt={member.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                    <p className="text-slate-500">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-r from-primary to-accent p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                هل أنت مستعد لبناء مستقبلك الرقمي؟
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                انضم إلى آلاف الشركات التي تستخدم كيان بورد لتحويل بياناتها إلى قرارات ذكية.
              </p>
              <button 
                onClick={() => navigate(ROUTE_PATHS.DASHBOARD)}
                className="bg-white text-primary hover:bg-slate-50 px-12 py-5 rounded-2xl font-bold text-xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                ابدأ الآن مجاناً
              </button>
            </div>
          </div>
        </section>

        {/* Simple Footer Text */}
        <footer className="py-12 border-t border-slate-200 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <NavLink to={ROUTE_PATHS.TERMS} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">شروط الخدمة</NavLink>
              <NavLink to={ROUTE_PATHS.PRIVACY} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">سياسة الخصوصية</NavLink>
              <NavLink to={ROUTE_PATHS.ABOUT} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">من نحن</NavLink>
            </div>
            <p className="text-slate-400 text-sm">
              {ARABIC_CONTENT.common.rights}
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;