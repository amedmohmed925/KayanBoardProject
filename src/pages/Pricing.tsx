import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PRICING_PLANS } from '@/data/index';
import { ARABIC_CONTENT, formatCurrency, ROUTE_PATHS } from '@/lib/index';

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <Layout>
      <div className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen" dir="rtl">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            {ARABIC_CONTENT.pricing.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
          >
            {ARABIC_CONTENT.pricing.subtitle}
          </motion.p>

          {/* Toggle Button */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !isYearly ? "text-slate-900" : "text-slate-500")}>
              {ARABIC_CONTENT.pricing.monthly}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-slate-200 p-1 transition-colors hover:bg-slate-300 outline-none"
            >
              <motion.div
                animate={{ x: isYearly ? -32 : 0 }}
                className="w-6 h-6 rounded-full bg-white shadow-md"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={cn("text-sm font-medium transition-colors", isYearly ? "text-slate-900" : "text-slate-500")}>
              {ARABIC_CONTENT.pricing.yearly}
            </span>
            <span className="bg-fuchsia-100 text-fuchsia-600 text-xs font-bold px-3 py-1 rounded-full">
              {ARABIC_CONTENT.pricing.save}
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div key={plan.id} variants={itemVariants} className="relative h-full">
              <GlassCard
                hover
                className={cn(
                  "h-full flex flex-col p-8 transition-all duration-300",
                  plan.isFeatured ? "ring-2 ring-primary border-transparent shadow-2xl scale-105 z-10" : "border-white/40"
                )}
              >
                {plan.isFeatured && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-gradient-to-r from-[#d946ef] to-[#06b6d4] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <Star size={14} fill="currentColor" /> الأكثر شعبية
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-4xl font-bold text-slate-900"
                      >
                        {formatCurrency(isYearly ? plan.priceYearly : plan.priceMonthly)}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-slate-500 text-sm">/ {isYearly ? 'سنوي' : 'شهري'}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <GradientButton
                  className="w-full text-lg py-6"
                  onClick={() => navigate(ROUTE_PATHS.LOGIN)}
                >
                  {plan.buttonText}
                </GradientButton>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Hint */}
        <div className="max-w-2xl mx-auto text-center mt-20">
          <p className="text-slate-500">
            لديك أسئلة أخرى؟ <a href="#" className="text-primary font-bold hover:underline">تحدث مع فريق الدعم لدينا</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

/** Utility function locally scoped as requested */
function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Pricing;