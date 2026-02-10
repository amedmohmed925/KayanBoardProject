import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { Mail, Lock, Zap, ArrowRight, User, ShieldCheck } from 'lucide-react';
import { ARABIC_CONTENT, ROUTE_PATHS, cn } from '@/lib/index';
import { IMAGES } from '../../assets/images';
import { GradientButton } from '@/components/GradientButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTE_PATHS.OTP);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50" dir="rtl">
      {/* Right Side: Register Form (Form is on the right for Arabic RTL) */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative overflow-hidden order-2 lg:order-1">
        {/* Mobile Background Elements */}
        <div className="lg:hidden absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="lg:hidden absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[440px]"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center mb-12">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="mb-10 text-center lg:text-right">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              {ARABIC_CONTENT.auth.registerTitle}
            </h1>
            <p className="text-slate-500">
              {ARABIC_CONTENT.auth.registerSubtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">{ARABIC_CONTENT.auth.name}</Label>
              <div className="relative group">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="أدخل اسمك الكامل" 
                  className="pr-12 h-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all shadow-sm focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{ARABIC_CONTENT.auth.email}</Label>
              <div className="relative group">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  className="pr-12 h-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all shadow-sm focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{ARABIC_CONTENT.auth.password}</Label>
              <div className="relative group">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pr-12 h-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all shadow-sm focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{ARABIC_CONTENT.auth.confirmPassword}</Label>
              <div className="relative group">
                <ShieldCheck className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pr-12 h-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all shadow-sm focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary transition-all"
                required
              />
              <Label htmlFor="terms" className="text-sm font-medium text-slate-600 cursor-pointer select-none leading-relaxed">
                أوافق على <NavLink to={ROUTE_PATHS.TERMS} className="text-primary hover:underline font-bold">شروط الخدمة</NavLink> و <NavLink to={ROUTE_PATHS.PRIVACY} className="text-primary hover:underline font-bold">سياسة الخصوصية</NavLink>
              </Label>
            </div>

            <GradientButton type="submit" className="w-full h-12 text-lg rounded-xl shadow-lg shadow-fuchsia-500/20 group">
              {ARABIC_CONTENT.auth.registerButton}
              <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            </GradientButton>
          </form>

          <p className="mt-8 text-center text-slate-600">
            {ARABIC_CONTENT.auth.haveAccount}{' '}
            <NavLink 
              to={ROUTE_PATHS.LOGIN} 
              className="font-bold text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              {ARABIC_CONTENT.auth.loginTitle}
            </NavLink>
          </p>
        </motion.div>
      </div>

      {/* Left Side: Branding (Appears as Left for Arabic) */}
      <div className="hidden lg:flex relative bg-slate-900 items-center justify-center overflow-hidden order-1 lg:order-2">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-[20000ms] hover:scale-110"
          style={{ backgroundImage: `url(${IMAGES.ABSTRACT_TECH_1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/30 to-accent/30 mix-blend-multiply" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative z-10 text-center px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 flex items-center justify-center mx-auto mb-8"
          >
            <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6 leading-tight"
          >
            ابدأ ثقافة اتخاذ القرارات <br /> المبنية على البيانات
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed"
          >
            كيان بورد يساعدك على اكتشاف الفرص المخفية في بياناتك من خلال واجهات تفاعلية مذهلة وتقارير ذكية يتم إنشاؤها في ثوانٍ.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
