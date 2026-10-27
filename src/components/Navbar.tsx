import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <NavLink to="/" className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-xl font-heading tracking-tight group">
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                <Code2 className="h-4.5 w-4.5" />
              </div>
              <span className="font-extrabold tracking-wider bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text">
                HVQ<span className="text-orange-500">.</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 hover:text-orange-500 ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 border-b-2 border-orange-500 dark:border-orange-400 pb-1'
                      : 'text-zinc-600 dark:text-zinc-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Right Menu Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 dark:text-zinc-300 hover:text-orange-500 p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5 text-orange-500" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-orange-500/10 dark:border-orange-500/15 bg-white/95 dark:bg-[#0b0c10]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
