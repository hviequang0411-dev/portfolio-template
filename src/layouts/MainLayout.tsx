import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingControls } from '../components/FloatingControls';
import { ScrollToTop } from '../components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';

export const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] dark:bg-[#0b0c10] text-zinc-800 dark:text-zinc-100 transition-colors duration-300 relative selection:bg-orange-500/30 overflow-x-hidden">
      {/* Dynamic Ambient Background Lighting Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Right Warm Gold & Amber Aura */}
        <div className="absolute -top-36 -right-36 w-96 h-96 sm:w-[540px] sm:h-[540px] rounded-full bg-gradient-to-br from-amber-400/15 via-orange-500/10 to-transparent blur-3xl dark:from-orange-500/15 dark:via-amber-600/10 dark:to-transparent" />
        
        {/* Center-Left Deep Cyber Cyan & Teal Accent */}
        <div className="absolute top-1/3 -left-48 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/12 via-teal-500/8 to-transparent blur-3xl dark:from-cyan-500/10 dark:via-teal-600/6 dark:to-transparent" />
        
        {/* Bottom-Right Luxury Violet & Indigo Glow */}
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tl from-violet-500/10 via-indigo-500/8 to-transparent blur-3xl dark:from-violet-500/10 dark:via-indigo-600/6 dark:to-transparent" />

        {/* Micro-dot grid mesh for architectural tech feel */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.12)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />
      </div>

      <Navbar />

      {/* Scrollable Main Area with Page Transitions */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Persistent Floating Controls (Bottom Left: Audio + Theme Dock) */}
      <FloatingControls />

      {/* Floating Scroll To Top with SVG Progress Ring (Bottom Right) */}
      <ScrollToTop />
    </div>
  );
};
export default MainLayout;
