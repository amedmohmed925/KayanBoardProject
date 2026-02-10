import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, NavLink } from 'react-router-dom';
import { ShieldCheck, ArrowRight, RefreshCcw } from 'lucide-react';
import { ARABIC_CONTENT, ROUTE_PATHS, cn } from '@/lib/index';
import { IMAGES } from '../../assets/images';
import { GradientButton } from '@/components/GradientButton';

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every(digit => digit)) {
      navigate(ROUTE_PATHS.DASHBOARD);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50" dir="rtl">
      {/* Left Side: Illustration & Branding (Hidden on Mobile) */}
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
            أكد هويتك للانطلاق <br /> في عالم البيانات
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed"
          >
            أمانك هو أولويتنا القصوى. من فضلك أدخل الرمز المرسل إلى بريدك الإلكتروني لتفعيل حسابك والبدء في بناء لوحاتك الذكية.
          </motion.p>
        </div>
      </div>

      {/* Right Side: OTP Input Form */}
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
          <div className="lg:hidden flex items-center justify-center mb-10">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="mb-10 text-center lg:text-right">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              {ARABIC_CONTENT.auth.otpTitle}
            </h1>
            <p className="text-slate-500 leading-relaxed">
              {ARABIC_CONTENT.auth.otpSubtitle}
              <br />
              <span className="font-bold text-slate-900">admin@kayan.com</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between gap-2 sm:gap-4" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={cn(
                    "w-12 h-16 sm:w-16 sm:h-20 text-center text-3xl font-bold rounded-2xl border-2 transition-all outline-none ",
                    digit 
                      ? "border-primary bg-white text-primary shadow-2xl shadow-fuchsia-500/20 scale-110 ring-4 ring-primary/10" 
                      : "border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  )}
                />
              ))}
            </div>

            <div className="space-y-4">
              <GradientButton type="submit" className="w-full h-12 text-lg rounded-xl shadow-lg shadow-fuchsia-500/20 group">
                {ARABIC_CONTENT.auth.verify}
                <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              </GradientButton>

              <button 
                type="button" 
                className="w-full flex items-center justify-center gap-2 text-slate-500 font-bold py-2 hover:text-primary transition-colors text-sm"
              >
                <RefreshCcw className="w-4 h-4" />
                لم يصلك الرمز؟ إعادة الإرسال
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-slate-600 font-medium">
            ترغب في تغيير البريد؟{' '}
            <NavLink to={ROUTE_PATHS.REGISTER} className="text-primary hover:underline underline-offset-4 font-bold">
              تعديل البيانات
            </NavLink>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
