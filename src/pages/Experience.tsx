import React from 'react';
import { Briefcase, Users, Laptop, Calendar } from 'lucide-react';
import type { Experience as ExperienceType } from '../types';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [

    {
      id: 'team-projects',
      role: 'Lead Backend Developer',
      company: 'University Team Projects (Agile Coursework)',
      duration: 'Mar 2024 - Jun 2024',
      type: 'team',
      description: [
        'Collaborated in a team of 4 to design and deploy full-stack web applications following Scrum methodologies.',
        'Structured the database schema and normalization (3NF) for optimal transactional integrity.',
        'Wrote secure APIs with Spring Boot and integrated them with a React frontend.',
        'Managed git workflows, branches, pull requests, and resolved version control conflicts.'
      ],
    },
    {
      id: 'academic-projects',
      role: 'Software Engineering Student',
      company: 'Academic Assignments & Lab Work',
      duration: 'Sep 2022 - Present',
      type: 'academic',
      description: [
        'Developed console-based and UI-based Java applications to demonstrate Object-Oriented principles, multi-threading, and collections.',
        'Implemented database-backed assignments using JDBC, Hibernate ORM, and SQL Server.',
        'Acquired deep theoretical and practical understanding of REST guidelines, HTTP methods, and response headers.'
      ],
    },
    {
      id: 'freelance-exp',
      role: 'Freelance Developer (Mock/Placeholder)',
      company: 'Self-Employed / Local Contracts',
      duration: 'Ongoing',
      type: 'freelance',
      description: [
        'Created responsive, visual business portfolios and static landing pages for local startups.',
        'Configured domain mappings, custom forms, and Vercel hosting pipelines.',
        'Integrated client-side contact fields with serverless email notification endpoints.'
      ],
    }
  ];

  const getTypeStyling = (type: string) => {
    switch (type) {
      case 'team':
        return {
          icon: <Users className="h-6 w-6 text-emerald-500" />,
          box: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-500',
          company: 'text-emerald-600 dark:text-emerald-400',
          dot: 'text-emerald-500',
          hover: 'hover:border-emerald-500/40',
        };
      case 'academic':
        return {
          icon: <Briefcase className="h-6 w-6 text-cyan-500" />,
          box: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-500',
          company: 'text-cyan-600 dark:text-cyan-400',
          dot: 'text-cyan-500',
          hover: 'hover:border-cyan-500/40',
        };
      default:
        return {
          icon: <Laptop className="h-6 w-6 text-amber-500" />,
          box: 'bg-amber-500/10 border-amber-500/25 text-amber-500',
          company: 'text-amber-600 dark:text-amber-400',
          dot: 'text-amber-500',
          hover: 'hover:border-amber-500/40',
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
          Career Journey & Background
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading"
        >
          Practical Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Hands-on software development across agile team coursework, enterprise microservices architectures, and technical projects.
        </motion.p>
      </div>

      {/* Experience list */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, idx) => {
          const styling = getTypeStyling(exp.type);

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 sm:p-7 space-y-5 ${styling.hover}`}
            >
              {/* Meta Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-xl border ${styling.box}`}>
                    {styling.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white font-heading">
                      {exp.role}
                    </h3>
                    <p className={`text-sm font-semibold ${styling.company}`}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50">
                  <Calendar className="h-3.5 w-3.5 text-orange-500" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-3 pl-2">
                {exp.description.map((bullet, index) => (
                  <li key={index} className="flex items-start text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    <span className={`inline-block mr-2.5 font-bold ${styling.dot}`}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
