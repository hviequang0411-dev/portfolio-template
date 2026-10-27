import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      if (currentScroll > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular progress parameters
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            title={`Scroll to top (${Math.round(scrollProgress)}%)`}
            className="relative flex items-center justify-center w-12 h-12 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-[#0c0e14]/85 text-zinc-700 dark:text-zinc-200 hover:text-orange-600 dark:hover:text-orange-400 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-orange-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-orange-500/20 transition-all duration-300 group cursor-pointer active:scale-95"
          >
            {/* SVG Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
              viewBox="0 0 44 44"
            >
              {/* Background Track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-zinc-200/60 dark:stroke-zinc-800/60"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Animated Progress Indicator */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-orange-500 transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Arrow Icon with Upward Bounce on Hover */}
            <ArrowUp className="h-4.5 w-4.5 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
