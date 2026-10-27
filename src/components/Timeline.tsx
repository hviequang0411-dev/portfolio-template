import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Rocket } from 'lucide-react';
import type { TimelineItem } from '../types';

interface TimelineProps {

  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const getTypeStyling = (type: string) => {
    switch (type) {
      case 'edu':
        return {
          icon: <GraduationCap className="h-4 w-4" />,
          node: 'border-cyan-500 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white shadow-cyan-500/20',
          badge: 'text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/25',
          subtitle: 'text-cyan-600 dark:text-cyan-400',
        };
      case 'tech':
        return {
          icon: <Terminal className="h-4 w-4" />,
          node: 'border-emerald-500 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white shadow-emerald-500/20',
          badge: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25',
          subtitle: 'text-emerald-600 dark:text-emerald-400',
        };
      case 'goal':
      default:
        return {
          icon: <Rocket className="h-4 w-4" />,
          node: 'border-orange-500 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white shadow-orange-500/20',
          badge: 'text-orange-700 dark:text-orange-300 bg-orange-500/10 border-orange-500/25',
          subtitle: 'text-orange-600 dark:text-orange-400',
        };
    }
  };

  return (
    <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12 py-4">
      {items.map((item, idx) => {
        const styling = getTypeStyling(item.type);

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-10 group"
          >
            {/* Node Icon Indicator */}
            <div className={`absolute -left-4 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border-2 transition-all duration-300 shadow-md ${styling.node}`}>
              {styling.icon}
            </div>

            {/* Timeline Card */}
            <div className="glass-card rounded-2xl p-6 relative">
              <span className={`text-xs font-bold px-3 py-1 rounded-full absolute top-6 right-6 font-mono border ${styling.badge}`}>
                {item.date}
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 font-heading">
                {item.title}
              </h3>
              <h4 className={`text-sm font-semibold mb-3 ${styling.subtitle}`}>
                {item.subtitle}
              </h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
export default Timeline;
