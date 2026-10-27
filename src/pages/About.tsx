import React from 'react';
import { Timeline } from '../components/Timeline';
import type { TimelineItem } from '../types';
import { BookOpen, Target, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';


export const About: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: '1',
      title: 'Software Engineering Major',
      subtitle: 'Final-Year University Student',
      date: '2022 - Present',
      description: 'Acquired strong foundational knowledge in Software Architecture, Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems. Maintaining a strong academic track record.',
      type: 'edu',
    },
    {
      id: '2',
      title: 'Deep Dive into Java Core',
      subtitle: 'OOP, Collections, Stream API',
      date: 'Late 2023',
      description: 'Mastered Core Java fundamentals, concurrency control, advanced memory management, Stream APIs, and Exception Handling, cementing a strong backend-first programming mindset.',
      type: 'tech',
    },
    {
      id: '3',
      title: 'Spring Boot Ecosystem',
      subtitle: 'Restful API & Microservices',
      date: 'Mid 2024',
      description: 'Learned to build enterprise-ready REST APIs. Gained expertise in Spring Data JPA/Hibernate, database schema migrations, JWT authorization protocols, and dependency injections.',
      type: 'tech',
    },
    {
      id: '4',
      title: 'Modern Frontend with React',
      subtitle: 'React, TypeScript, Styling',
      date: 'Late 2024',
      description: 'Expanded full-stack skills by building SPA UI. Learned state management (Context, Redux), React Router routing, custom hooks, and utility-first styling with TailwindCSS.',
      type: 'tech',
    },
    {
      id: '5',
      title: 'Internship & Fresher Pursuit',
      subtitle: 'Java Backend / Full Stack Developer',
      date: '2026',
      description: 'Actively searching for an internship or fresher role in backend development or full-stack software engineering to contribute to real-world applications and learn clean coding standards in production.',
      type: 'goal',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-20">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
          Background & Focus
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          My engineering mindset, academic background, and technical journey in building backend systems.
        </motion.p>
      </div>

      {/* Grid of Bio Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-7 sm:p-8 space-y-6 flex flex-col justify-between hover:border-emerald-500/40"
        >
          <div>
            <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-xl mb-4 font-heading">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500">
                <BookOpen className="h-5 w-5" />
              </div>
              <span>My Background</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-[15px] mb-3.5">
              Hello! I'm <strong className="text-zinc-900 dark:text-white font-semibold">Hoang Viet Quang</strong>, a final-year Software Engineering student. My interest in software began with a fascination for algorithmic problem-solving, structured database models, and resilient backend systems.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-[15px]">
              Over the past few years, I have architected practical web services using Spring Boot, focusing on normalized schemas, JWT authentication, and transactional outbox messaging patterns.
            </p>
          </div>
          <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-5 mt-5 flex items-center gap-3">
            <Award className="h-4 w-4 text-emerald-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Actively preparing for Java & Spring Boot enterprise certifications.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-7 sm:p-8 space-y-6 flex flex-col justify-between hover:border-orange-500/40"
        >
          <div>
            <div className="flex items-center gap-3 text-orange-600 dark:text-orange-400 font-bold text-xl mb-4 font-heading">
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-500">
                <Target className="h-5 w-5" />
              </div>
              <span>Career Objective & Strengths</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-[15px] mb-4">
              Seeking a <strong className="text-zinc-900 dark:text-white font-semibold">Java Backend / Full Stack Engineer</strong> position to contribute to high-availability production workloads and learn enterprise standards alongside talented engineering teams.
            </p>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-cyan-500/10 text-cyan-500 mt-0.5">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm font-heading">Fast-Paced Adaptability</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-0.5">Quickly master new frameworks, distributed architectures, and modern web tooling.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-orange-500/10 text-orange-500 mt-0.5">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm font-heading">Production Backend Mindset</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-0.5">Emphasis on clean design patterns, database index optimization, and predictable error handling.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-8 pt-4">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
            Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tight">
            Learning & Career Roadmap
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </div>
  );
};
export default About;
