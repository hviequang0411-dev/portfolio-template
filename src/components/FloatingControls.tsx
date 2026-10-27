import React from 'react';
import { motion } from 'framer-motion';
import { SoundToggle } from './SoundToggle';
import { ThemeToggle } from './ThemeToggle';

export const FloatingControls: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed bottom-5 sm:bottom-6 left-5 sm:left-6 z-50 flex items-center"
    >
      <div className="relative flex items-center gap-1.5 p-1.5 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-[#0c0e14]/85 border border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-orange-500/40 transition-all duration-300">
        {/* Ambient Warm Underglow on Hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none" />

        {/* Ambient Sound Controller */}
        <SoundToggle />

        {/* Subtle Divider */}
        <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 mx-0.5" />

        {/* Theme Switcher */}
        <ThemeToggle />
      </div>
    </motion.div>
  );
};

export default FloatingControls;
