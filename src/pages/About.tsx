import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ARABIC_CONTENT, ROUTE_PATHS } from '@/lib/index';
import { TEAM_MEMBERS } from '@/data/index';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { IMAGES } from '@/assets/images';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 30 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden" dir="rtl">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Header Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] to-[#06b6d4]">
              {ARABIC_CONTENT.common.about}
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            نحن فريق من المبدعين والمهندسين نسعى لإحداث ثورة في عالم تحليل البيانات من خلال دمج الجمال البرمجي مع قوة الذكاء الاصطناعي.
          </p>
        </motion.section>

        {/* Vision & Mission Section */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          <motion.div variants={fadeInUp}>
            <GlassCard className="h-full p-8 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">{ARABIC_CONTENT.about.visionTitle}</h2>
              <p className="text-slate-600 leading-relaxed">
                {ARABIC_CONTENT.about.visionText}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard className="h-full p-8 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">{ARABIC_CONTENT.about.missionTitle}</h2>
              <p className="text-slate-600 leading-relaxed">
                {ARABIC_CONTENT.about.missionText}
              </p>
            </GlassCard>
          </motion.div>
        </motion.section>

        {/* Visual Break with Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-24 shadow-2xl"
        >
          <img 
            src={IMAGES.TEAM_WORK_1} 
            alt="Team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
            <p className="text-white text-xl font-medium">نعمل كعائلة واحدة لتحقيق أهدافك الرقمية</p>
          </div>
        </motion.div>

        {/* Team Section */}
        <section className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">{ARABIC_CONTENT.about.teamTitle}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">العقول المبدعة خلف المشروع</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div 
                key={member.id} 
                variants={fadeInUp} 
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef] to-[#06b6d4] rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-slate-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Footer CTA-like Break */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 md:p-20 text-center text-white"
        >
          <img 
            src={IMAGES.TEAM_WORK_6} 
            alt="Office background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لتجربة المستقبل؟</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              انضم إلى آلاف الشركات التي تستخدم كيان بورد لتحويل بياناتها إلى قرارات ذكية. ابدأ رحلتك اليوم واكتشف قوة الذكاء الاصطناعي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate(ROUTE_PATHS.LOGIN)}
                className="px-8 py-4 bg-gradient-to-r from-[#d946ef] to-[#06b6d4] rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all"
              >
                {ARABIC_CONTENT.common.getStarted}
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
                تواصل معنا
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
