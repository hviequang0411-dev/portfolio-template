import React from 'react';
import { SkillBar } from '../components/SkillBar';
import type { Skill } from '../types';
import { Code2, Server, Database, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';


export const Skills: React.FC = () => {
  const skillsList: Skill[] = [
    // Backend
    { name: 'Java Core (OOP, Stream API, Concurrency)', level: 92, category: 'backend' },
    { name: 'Spring Boot 3 & Microservices', level: 88, category: 'backend' },
    { name: 'Transactional Outbox & Event Architecture', level: 82, category: 'backend' },
    { name: 'Spring Security & JWT Stateless Auth', level: 85, category: 'backend' },
    
    // Frontend
    { name: 'React 19 (Hooks, Router v7, Context)', level: 82, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS v4 & Responsive UI', level: 88, category: 'frontend' },
    { name: 'Modern JavaScript (ES6+)', level: 85, category: 'frontend' },
    
    // Database
    { name: 'PostgreSQL & MySQL', level: 88, category: 'database' },
    { name: 'Spring Data JPA & Hibernate ORM', level: 85, category: 'database' },
    { name: 'SQL Server', level: 82, category: 'database' },
    { name: 'Database Normalization & Query Tuning', level: 80, category: 'database' },
    
    // Tools
    { name: 'Docker & Docker Compose', level: 82, category: 'tool' },
    { name: 'Git & GitHub Collaboration', level: 88, category: 'tool' },
    { name: 'Postman (API Testing & Mocking)', level: 90, category: 'tool' },
    { name: 'Maven & Gradle Build Systems', level: 85, category: 'tool' },
  ];

  const categories = [
    {
      id: 'backend',
      title: 'Backend Engineering',
      icon: <Server className="h-6 w-6 text-emerald-500" />,
      colorClass: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-500',
      hoverBorder: 'hover:border-emerald-500/40',
      description: 'Building secure, high-throughput server architectures, event-driven outbox patterns, and microservices.',
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code2 className="h-6 w-6 text-violet-500" />,
      colorClass: 'bg-violet-500/10 border-violet-500/25 text-violet-500',
      hoverBorder: 'hover:border-violet-500/40',
      description: 'Crafting responsive, dynamic web experiences, smooth animations, and type-safe UI components.',
    },
    {
      id: 'database',
      title: 'Database Technologies',
      icon: <Database className="h-6 w-6 text-cyan-500" />,
      colorClass: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-500',
      hoverBorder: 'hover:border-cyan-500/40',
      description: 'Structuring normalized relational schemas, index optimization, and reliable transaction boundaries.',
    },
    {
      id: 'tool',
      title: 'Tools & DevOps',
      icon: <Hammer className="h-6 w-6 text-amber-500" />,
      colorClass: 'bg-amber-500/10 border-amber-500/25 text-amber-500',
      hoverBorder: 'hover:border-amber-500/40',
      description: 'Leveraging containerization with Docker, Git workflows, build pipelines, and automated API testing.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
          Skills & Proficiencies
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading"
        >
          Technical Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Comprehensive breakdown of my backend architecture, reactive frontend, relational databases, and tooling capabilities.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {categories.map((cat, idx) => {
          const categorySkills = skillsList.filter((s) => s.category === cat.id);

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between ${cat.hoverBorder}`}
            >
              <div className="space-y-5">
                {/* Title & Icon */}
                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-xl border ${cat.colorClass}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white font-heading">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>


                {/* Progress bars list */}
                <div className="pt-3">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
