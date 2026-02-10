import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, ArrowLeft, KeySquare } from 'lucide-react';
import { ARABIC_CONTENT, ROUTE_PATHS } from '@/lib/index';
import { IMAGES } from '../../assets/images';
import { GradientButton } from '@/components/GradientButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email and navigate to OTP for reset
    navigate(ROUTE_PATHS.OTP);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50" dir="rtl">
      {/* Left Side: Illustration & Branding */}
      <div className="hidden lg:flex relative bg-slate-900 items-center justify-center overflow-hidden order-1 lg:order-2">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-[20000ms] hover:scale-110"
          style={{ backgroundImage: `url(${IMAGES.ABSTRACT_TECH_1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/20 mix-blend-multiply" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/30 rounded-full blur-[100px] animate-pulse delay-700" />

        <div className="relative z-10 text-center px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 flex items-center justify-center mx-auto mb-8"
          >
            <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6 leading-tight"
          >
            استعد الوصول <br /> إلى حسابك بأمان
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed"
          >
            لا تقلق، سنساعدك في استعادة كلمة المرور الخاصة بك في خطوات بسيطة وسريعة لتعود لإدارة بياناتك.
          </motion.p>
        </div>
      </div>

      {/* Right Side: Forgot Password Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative overflow-hidden order-2 lg:order-1">
        {/* Mobile Background Elements */}
        <div className="lg:hidden absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="lg:hidden absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[440px]"
        >
          <div className="mb-10 text-center lg:text-right">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              {ARABIC_CONTENT.auth.forgotPasswordTitle}
            </h1>
            <p className="text-slate-500">
              {ARABIC_CONTENT.auth.forgotPasswordSubtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <GradientButton type="submit" className="w-full h-12 text-lg rounded-xl shadow-lg shadow-fuchsia-500/20 group">
              {ARABIC_CONTENT.auth.sendResetLink}
              <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            </GradientButton>

            <div className="pt-4 text-center">
              <NavLink 
                to={ROUTE_PATHS.LOGIN} 
                className="inline-flex items-center justify-center gap-2 text-slate-500 font-semibold hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                {ARABIC_CONTENT.auth.backToLogin}
              </NavLink>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
