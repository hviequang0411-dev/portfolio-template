import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Laptop, 
  Calendar, 
  GraduationCap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Layers 
} from 'lucide-react';
import type { Experience as ExperienceType, EducationItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const experiences: ExperienceType[] = [
    {
      id: 'backend-team-lead',
      role: 'Lead Backend Developer',
      company: 'Hospital Appointment Booking System (OPCBS Capstone)',
      location: 'Hanoi, Vietnam',
      duration: 'Mar 2024 - Jun 2024',
      type: 'team',
      technologies: ['Java 21', 'Spring Boot 3', 'Microservices', 'PostgreSQL', 'Docker', 'JWT', 'Outbox Pattern'],
      highlights: [
        'Achieved top 5% project defense score (9.4/10) praised for clean layered architecture and resilience.',
        'Guaranteed zero transactional message loss between booking & notification services via Outbox Pattern.'
      ],
      description: [
        'Spearheaded the backend architecture for an enterprise healthcare booking platform in a 4-member agile team.',
        'Structured microservices boundaries (Auth Service, Doctor Schedule Service, Appointment Booking Service) behind an API Gateway.',
        'Implemented the Transactional Outbox pattern with database event polling, ensuring eventual consistency without distributed 2PC locks.',
        'Designed normalized PostgreSQL 3NF schemas with index optimization, lowering schedule query latency by 40%.',
        'Led Git branching, code reviews, and managed Docker Compose setup for localized multi-container testing.'
      ],
    },
    {
      id: 'academic-internship',
      role: 'Java Backend Developer (Coursework Internship)',
      company: 'Enterprise Recruitment & Interview Management System',
      location: 'Hanoi, Vietnam',
      duration: 'Sep 2023 - Jan 2024',
      type: 'internship',
      technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'SQL Server', 'RESTful API', 'Postman'],
      highlights: [
        'Engineered 25+ production-grade REST APIs supporting recruiter, candidate, and interviewer workflows.',
        'Secured application with stateless JWT filters and method-level security annotations (@PreAuthorize).'
      ],
      description: [
        'Built a centralized interview scheduling and candidate tracking portal for technical hiring teams.',
        'Implemented role-based authorization ensuring interview questions and evaluations remain confidential until review stages.',
        'Wrote complex SQL Server queries, stored procedures, and JPA criteria specifications for multi-criteria candidate filtering.',
        'Authored comprehensive Postman API test collections and automated request validation logic.'
      ],
    },
    {
      id: 'academic-labs',
      role: 'Software Engineering Academic Labs & Research',
      company: 'University Computer Science Department',
      location: 'Hanoi, Vietnam',
      duration: 'Sep 2022 - Present',
      type: 'academic',
      technologies: ['Java Core', 'OOP & Design Patterns', 'Multithreading', 'Data Structures', 'JDBC', 'MySQL'],
      highlights: [
        'Consistently earned Excellent marks across Core Java, Database Systems, and Software Architecture labs.',
        'Built high-concurrency simulation utilities applying Java threads, locks, and ConcurrentHashMap.'
      ],
      description: [
        'Deep-dived into Core Java internals: Memory management, Garbage Collection algorithms, Stream API, and Generics.',
        'Implemented classic GoF Design Patterns (Factory, Singleton, Observer, Strategy, Builder) in real-world scenarios.',
        'Configured JDBC connection pooling, Hibernate ORM caching strategies, and transaction boundary management.',
        'Practiced unit and integration testing with JUnit 5 and Mockito to verify service layer resilience.'
      ],
    },
    {
      id: 'freelance-exp',
      role: 'Frontend & Full-Stack Developer',
      company: 'Freelance & Startup Collaborations',
      location: 'Remote',
      duration: 'Jan 2024 - Present',
      type: 'freelance',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST Integration', 'Vercel'],
      highlights: [
        'Delivered responsive portfolios and business landing pages with Google Lighthouse performance scores > 95/100.',
        'Created modular, reusable UI component systems with dark/light theme switching.'
      ],
      description: [
        'Developed interactive, responsive client web applications with dynamic routing and state management.',
        'Bridged client-side interfaces with backend RESTful endpoints and serverless webhooks.',
        'Optimized bundle size, asset loading, and typography for seamless mobile and desktop cross-device rendering.'
      ],
    }
  ];

  const educationHistory: EducationItem[] = [
    {
      id: 'bachelor-degree',
      degree: 'Bachelor of Software Engineering (Final-Year Student)',
      institution: 'University of Engineering and Technology / FPT University',
      location: 'Hanoi, Vietnam',
      duration: '2022 - 2026 (Expected Graduation)',
      gpa: '3.4 / 4.0 (Very Good Academic Standing)',
      honors: 'Top 10% Academic Semester Honors',
      keyCourses: [
        'Software Architecture & Design Patterns',
        'Data Structures & Algorithms',
        'Relational Database Management Systems (RDBMS)',
        'Object-Oriented Analysis & Design (OOAD)',
        'Distributed Systems & Microservices',
        'Computer Networks & Network Security',
        'Operating Systems & Concurrent Programming'
      ],
      achievements: [
        'Maintained high academic standing with major focus on backend enterprise systems and distributed architectures.',
        'Active participant in University Coding Contests, Hackathons, and Technical Developer Workshops.',
        'Selected as Team Lead across multiple core software project courses for agile coordination and code quality.'
      ]
    }
  ];

  const getTypeStyling = (type: string) => {
    switch (type) {
      case 'team':
        return {
          icon: <Users className="h-6 w-6 text-emerald-500" />,
          badge: 'Team Project / Capstone',
          badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
          box: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-500',
          company: 'text-emerald-600 dark:text-emerald-400',
          dot: 'text-emerald-500',
          hover: 'hover:border-emerald-500/40',
          accent: 'from-emerald-500/20 to-transparent',
        };
      case 'internship':
        return {
          icon: <Briefcase className="h-6 w-6 text-orange-500" />,
          badge: 'Internship / Practical Work',
          badgeClass: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25',
          box: 'bg-orange-500/10 border-orange-500/25 text-orange-500',
          company: 'text-orange-600 dark:text-orange-400',
          dot: 'text-orange-500',
          hover: 'hover:border-orange-500/40',
          accent: 'from-orange-500/20 to-transparent',
        };
      case 'academic':
        return {
          icon: <BookOpen className="h-6 w-6 text-cyan-500" />,
          badge: 'Academic Research & Labs',
          badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25',
          box: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-500',
          company: 'text-cyan-600 dark:text-cyan-400',
          dot: 'text-cyan-500',
          hover: 'hover:border-cyan-500/40',
          accent: 'from-cyan-500/20 to-transparent',
        };
      default:
        return {
          icon: <Laptop className="h-6 w-6 text-amber-500" />,
          badge: 'Freelance & Contract',
          badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25',
          box: 'bg-amber-500/10 border-amber-500/25 text-amber-500',
          company: 'text-amber-600 dark:text-amber-400',
          dot: 'text-amber-500',
          hover: 'hover:border-amber-500/40',
          accent: 'from-amber-500/20 to-transparent',
        };
    }
  };

  const getTechBadgeClass = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('java') || t.includes('spring') || t.includes('outbox') || t.includes('microservice')) {
      return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25';
    }
    if (t.includes('react') || t.includes('typescript') || t.includes('tailwind')) {
      return 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/25';
    }
    if (t.includes('postgres') || t.includes('sql') || t.includes('database')) {
      return 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25';
    }
    if (t.includes('docker') || t.includes('git') || t.includes('postman')) {
      return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/25';
    }
    return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700';
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
          Experience & Education
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Hands-on software development across agile team coursework, enterprise microservices architectures, and technical projects.
        </motion.p>

        {/* Filter Navigation Tabs */}
        <div className="pt-4 flex items-center justify-center gap-2">
          <div className="inline-flex p-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-zinc-800 text-orange-600 dark:text-orange-400 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              All Overview
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-zinc-800 text-orange-600 dark:text-orange-400 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Work & Projects ({experiences.length})
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-zinc-800 text-orange-600 dark:text-orange-400 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Education & Academics
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section 1: Practical Experience */}
        {(activeTab === 'all' || activeTab === 'experience') && (
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-heading">
                  Practical Experience & Engineering Roles
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Real-world agile teams, backend microservices development, and technical responsibilities.
                </p>
              </div>
            </div>

            {/* Timeline cards with left border guide */}
            <div className="relative pl-4 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-10">
              {experiences.map((exp, idx) => {
                const styling = getTypeStyling(exp.type);

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="relative group"
                  >
                    {/* Timeline node icon */}
                    <div className="absolute -left-[25px] sm:-left-[41px] top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-zinc-900 border-2 border-orange-500 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    </div>

                    {/* Card Container */}
                    <div className={`glass-card rounded-2xl p-6 sm:p-7 space-y-5 border border-zinc-200/80 dark:border-zinc-800/80 ${styling.hover} transition-all duration-300`}>
                      {/* Meta Row */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div className="flex items-start sm:items-center gap-3.5">
                          <div className={`p-3 rounded-xl border shrink-0 ${styling.box}`}>
                            {styling.icon}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white font-heading">
                                {exp.role}
                              </h3>
                              <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${styling.badgeClass}`}>
                                {styling.badge}
                              </span>
                            </div>
                            <p className={`text-sm font-semibold ${styling.company} mt-0.5`}>
                              {exp.company}
                              {exp.location && (
                                <span className="text-zinc-500 dark:text-zinc-400 font-normal"> • {exp.location}</span>
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 shrink-0">
                          <Calendar className="h-3.5 w-3.5 text-orange-500" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Key Highlights / Achievements */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 font-mono">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Key Highlights & Impact</span>
                          </div>
                          <ul className="space-y-1">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                                <span className="text-orange-500 font-bold">•</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Bullets */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          Responsibilities & Implementation
                        </span>
                        <ul className="space-y-2.5 pl-1">
                          {exp.description.map((bullet, index) => (
                            <li key={index} className="flex items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                              <span className={`inline-block mr-2.5 font-bold ${styling.dot}`}>•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-1 flex items-center gap-1">
                            <Layers className="h-3 w-3" /> Tech:
                          </span>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`text-[11px] font-mono px-2 py-0.5 rounded-md border font-medium ${getTechBadgeClass(tech)}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 2: Education & Academic History */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-heading">
                  Education & Academic Qualifications
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Formal software engineering training, relevant coursework, and academic milestones.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {educationHistory.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 shrink-0">
                        <GraduationCap className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-heading">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {edu.institution} {edu.location && `• ${edu.location}`}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 shrink-0">
                      <Calendar className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Badges / GPA / Honors */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {edu.gpa && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.honors && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                        <Award className="h-3.5 w-3.5 text-amber-500" />
                        {edu.honors}
                      </span>
                    )}
                  </div>

                  {/* Core Coursework */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                      Core Academic Coursework & Theoretical Foundations
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.keyCourses.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  {edu.achievements && (
                    <div className="space-y-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                        Academic Highlights & Activities
                      </span>
                      <ul className="space-y-2 pl-1">
                        {edu.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            <span className="text-emerald-500 font-bold mr-2.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default Experience;