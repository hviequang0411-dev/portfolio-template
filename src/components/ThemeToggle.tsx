import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-xl hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 hover:text-amber-500 dark:hover:text-amber-400 focus:outline-none transition-all duration-300 cursor-pointer active:scale-95"
      aria-label="Toggle Theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-4.5 w-4.5 text-amber-400 fill-amber-400/20 hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-orange-500 fill-orange-500/20 hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};
