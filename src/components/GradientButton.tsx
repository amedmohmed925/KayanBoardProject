import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
}

/**
 * A high-end, premium gradient button designed for KayanBoard.
 * Features include spring-based micro-interactions, physical depth with layered shadows,
 * and a loading state with a centered spinner.
 */
export function GradientButton({
  children,
  onClick,
  loading = false,
  className,
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 12px 24px -8px color-mix(in srgb, var(--primary) 50%, transparent)" 
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30 
      }}
      onClick={onClick}
      disabled={loading}
      className={cn(
        "relative isolate flex items-center justify-center gap-2 px-8 py-3.5",
        "font-sans font-bold text-white transition-all rounded-2xl",
        "bg-gradient-to-r from-primary via-primary to-accent",
        "shadow-xl shadow-primary/20",
        "disabled:opacity-80 disabled:cursor-not-allowed",
        "overflow-hidden group",
        className
      )}
    >
      {/* Tactile Highlight Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated Shine Effect */}
      <div className="absolute inset-0 w-[200%] h-full pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]" />

      <div className={cn("flex items-center gap-2 transition-opacity", loading ? "opacity-0" : "opacity-100")}>
        {children}
      </div>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center"
          >
            <Loader2 className="w-5 h-5 animate-spin" />
          </motion.div>
        </div>
      )}

      {/* Physicality Edge - Top Rim Light */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 pointer-events-none" />
      
      {/* Physicality Edge - Bottom Shade */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/10 pointer-events-none" />
    </motion.button>
  );
}
