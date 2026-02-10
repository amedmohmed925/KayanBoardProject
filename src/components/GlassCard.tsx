import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <motion.div
      initial={false}
      whileHover={hover ? {
        y: -6,
        transition: { 
          type: 'spring', 
          stiffness: 400, 
          damping: 30 
        }
      } : undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/30 bg-white/80 backdrop-blur-md",
        "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
        hover && "hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer transition-shadow duration-300",
        className
      )}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
