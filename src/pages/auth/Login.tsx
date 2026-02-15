import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { Mail, Lock, Zap, ArrowRight, Github, Chrome, AlertCircle } from 'lucide-react';
import { ARABIC_CONTENT, ROUTE_PATHS, cn } from '@/lib/index';
import { IMAGES } from '../../assets/images';
import { useAuth } from '@/hooks/useAuth';
import { GradientButton } from '@/components/GradientButton';
import { GlassCard } from '@/components/GlassCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Demo Credentials Check
    if (email === 'admin@kayan.com' && password === 'admin123') {
      login(email, 'أحمد محمد العلي', 'admin');
      navigate(ROUTE_PATHS.ADMIN_DASHBOARD);
    } else if (email === 'user@kayan.com' && password === 'user123') {
      login(email, 'سارة أحمد', 'user');
      navigate(ROUTE_PATHS.DASHBOARD);
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة. استخدم الحساب التجريبي.');
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50" dir="rtl">
      {/* Left Side: Illustration & Branding (Visual Left in RTL) */}
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
            تحكم في بياناتك بدقة <br /> وذكاء لا حدود له
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed"
          >
            انضم إلى آلاف المحترفين الذين يستخدمون كيان بورد لتحويل البيانات المعقدة إلى رؤى واضحة وقرارات ذكية.
          </motion.p>
        </div>
      </div>

      {/* Right Side: Login Form (Visually Right in RTL) */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative overflow-hidden order-2 lg:order-1">
        {/* Mobile Background Elements */}
        <div className="lg:hidden absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="lg:hidden absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
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
              {ARABIC_CONTENT.auth.loginTitle}
            </h1>
            <p className="text-slate-500">
              {ARABIC_CONTENT.auth.loginSubtitle}
            </p>
          </div>

          {/* Demo Credentials Info */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
            <p className="text-sm font-bold text-primary mb-1">الحسابات التجريبية:</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">حساب مسؤول</p>
                <p className="text-xs text-slate-600">البريد: <code className="bg-white px-1 rounded">admin@kayan.com</code></p>
                <p className="text-xs text-slate-600">كلمة المرور: <code className="bg-white px-1 rounded">admin123</code></p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">حساب مستخدم</p>
                <p className="text-xs text-slate-600">البريد: <code className="bg-white px-1 rounded">user@kayan.com</code></p>
                <p className="text-xs text-slate-600">كلمة المرور: <code className="bg-white px-1 rounded">user123</code></p>
              </div>
            </div>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6 rounded-xl bg-rose-50 border-rose-100 text-rose-600">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm font-medium">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">{ARABIC_CONTENT.auth.email}</Label>
              <div className="relative group">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@kayan.com" 
                  className="pr-12 h-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all shadow-sm focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{ARABIC_CONTENT.auth.password}</Label>
                <NavLink 
                  to={ROUTE_PATHS.FORGOT_PASSWORD} 
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {ARABIC_CONTENT.auth.forgotPasswordTitle}
                </NavLink>
              </div>
              <div className="relative group">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="admin123" 
                  className="pr-12 h-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all shadow-sm focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary transition-all"
              />
              <Label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer select-none">
                {ARABIC_CONTENT.auth.rememberMe}
              </Label>
            </div>

            <GradientButton type="submit" className="w-full h-12 text-lg rounded-xl shadow-lg shadow-fuchsia-500/20 group">
              {ARABIC_CONTENT.auth.loginButton}
              <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            </GradientButton>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-50 px-4 text-slate-500 font-medium">أو الاستمرار عبر</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-700 shadow-sm font-medium">
                <Chrome className="w-5 h-5" />
                <span>جوجل</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-700 shadow-sm font-medium">
                <Github className="w-5 h-5" />
                <span>جيت هاب</span>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-slate-600">
            {ARABIC_CONTENT.auth.noAccount}{' '}
            <NavLink 
              to={ROUTE_PATHS.REGISTER} 
              className="font-bold text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              {ARABIC_CONTENT.auth.registerButton}
            </NavLink>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
