import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillBarProps {

  skill: Skill;
}

const getSkillStyling = (category: string) => {
  switch (category) {
    case 'backend':
      return {
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        badge: 'text-emerald-600 dark:text-emerald-400',
      };
    case 'frontend':
      return {
        gradient: 'from-violet-500 via-purple-500 to-indigo-500',
        badge: 'text-violet-600 dark:text-violet-400',
      };
    case 'database':
      return {
        gradient: 'from-cyan-500 via-sky-500 to-blue-500',
        badge: 'text-cyan-600 dark:text-cyan-400',
      };
    case 'tool':
    default:
      return {
        gradient: 'from-amber-500 via-orange-500 to-rose-500',
        badge: 'text-amber-600 dark:text-amber-400',
      };
  }
};

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const styling = getSkillStyling(skill.category);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-zinc-700 dark:text-zinc-200 text-sm">
          {skill.name}
        </span>
        <span className={`text-xs font-bold font-mono ${styling.badge}`}>
          {skill.level}%
        </span>
      </div>
      <div className="h-2.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${styling.gradient} rounded-full`}
        />
      </div>
    </div>
  );
};
export default SkillBar;
