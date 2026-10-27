import React from 'react';
import { Award, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import type { Certification } from '../types';
import { motion } from 'framer-motion';


export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 'java-core',
      title: 'Java Programming Masterclass',
      issuer: 'Udemy Academic Program',
      date: 'Dec 2023',
      status: 'active',
      credentialUrl: 'https://udemy.com/certificate/placeholder-java'
    },
    {
      id: 'spring-boot',
      title: 'Spring Framework & Spring Boot Developer',
      issuer: 'Baeldung Enterprise Academy',
      date: 'Jul 2024',
      status: 'active',
      credentialUrl: 'https://baeldung.com/certificate/placeholder-spring'
    },
    {
      id: 'sql',
      title: 'SQL (Advanced) Certification',
      issuer: 'HackerRank Testing Center',
      date: 'Apr 2024',
      status: 'active',
      credentialUrl: 'https://hackerrank.com/certificates/placeholder-sql'
    },
    {
      id: 'toeic',
      title: 'TOEIC Listening & Reading Standard Test',
      issuer: 'IIG Vietnam Testing (Target Goal)',
      date: 'Upcoming (Q3 2026)',
      status: 'upcoming'
    }
  ];

  const getCertStyling = (id: string) => {
    switch (id) {
      case 'java-core':
        return {
          box: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-500',
          issuer: 'text-emerald-600 dark:text-emerald-400',
          hover: 'hover:border-emerald-500/40',
          link: 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-500',
        };
      case 'spring-boot':
        return {
          box: 'bg-amber-500/10 border-amber-500/25 text-amber-500',
          issuer: 'text-amber-600 dark:text-amber-400',
          hover: 'hover:border-amber-500/40',
          link: 'text-amber-600 dark:text-amber-400 hover:text-amber-500',
        };
      case 'sql':
        return {
          box: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-500',
          issuer: 'text-cyan-600 dark:text-cyan-400',
          hover: 'hover:border-cyan-500/40',
          link: 'text-cyan-600 dark:text-cyan-400 hover:text-cyan-500',
        };
      case 'toeic':
      default:
        return {
          box: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-500',
          issuer: 'text-indigo-600 dark:text-indigo-400',
          hover: 'hover:border-indigo-500/40',
          link: 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-500',
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
          Credentials & Training
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading"
        >
          Certifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Recognized technical course completions, enterprise skill assessments, and professional development milestones.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {certifications.map((cert, idx) => {
          const styling = getCertStyling(cert.id);

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[180px] cursor-default ${styling.hover}`}
            >
              <div className="flex gap-4">
                <div className={`p-3 rounded-xl border h-fit ${styling.box}`}>
                  <Award className="h-5 w-5" />
                </div>
                
                <div className="space-y-1 max-w-[80%]">
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base leading-snug font-heading">
                    {cert.title}
                  </h3>
                  <p className={`text-xs sm:text-sm font-semibold ${styling.issuer}`}>
                    {cert.issuer}
                  </p>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
                    Issued: {cert.date}
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center mt-4 pt-3.5 border-t border-zinc-200/60 dark:border-zinc-800/60">
                {cert.status === 'active' ? (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>Verified Credential</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 dark:text-amber-400">
                    <Clock className="h-4 w-4" />
                    <span>Targeted Milestone</span>
                  </div>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${styling.link}`}
                  >
                    <span>Verify</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Certifications;
