import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, CheckCircle2, Workflow } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}


const getProjectHeaderGradient = (id: string) => {
  switch (id) {
    case 'opcbs-hospital-booking':
      return 'bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 dark:from-emerald-950/80 dark:via-teal-950/70 dark:to-zinc-950/90 border-b border-emerald-500/20';
    case 'interview-management':
      return 'bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 dark:from-amber-950/80 dark:via-orange-950/70 dark:to-zinc-950/90 border-b border-orange-500/20';
    case 'vehicle-warehouse':
      return 'bg-gradient-to-br from-blue-600 via-indigo-700 to-cyan-700 dark:from-blue-950/80 dark:via-indigo-950/70 dark:to-zinc-950/90 border-b border-blue-500/20';
    case 'library-management':
      return 'bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 dark:from-purple-950/80 dark:via-violet-950/70 dark:to-zinc-950/90 border-b border-purple-500/20';
    default:
      return 'bg-gradient-to-br from-amber-500/90 via-orange-500/90 to-rose-600/90 dark:from-amber-950/70 dark:via-orange-950/60 dark:to-zinc-950/80 border-b border-orange-500/15';
  }
};

const getTechTagClass = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('java') || t.includes('spring') || t.includes('outbox') || t.includes('microservice')) {
    return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25';
  }
  if (t.includes('react') || t.includes('typescript') || t.includes('javascript') || t.includes('tailwind')) {
    return 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/25';
  }
  if (t.includes('postgres') || t.includes('mysql') || t.includes('sql') || t.includes('database')) {
    return 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25';
  }
  if (t.includes('docker') || t.includes('devops') || t.includes('ci/cd') || t.includes('maven')) {
    return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/25';
  }
  if (t.includes('jwt') || t.includes('security') || t.includes('auth')) {
    return 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/25';
  }
  return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25';
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-zinc-200/80 dark:border-zinc-800/80 hover:border-orange-500/40 hover:shadow-2xl transition-all duration-300"
    >
      {/* Mock Browser/Window Header with Screenshot */}
      {project.id === 'opcbs-hospital-booking' ? (
        <div className="relative h-44 sm:h-48 overflow-hidden bg-zinc-950 border-b border-emerald-500/20 group">
          <img
            src="/images/opcbs-preview.jpg"
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute top-3.5 left-4 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 shadow-sm" />
          </div>
          <div className="absolute top-3 right-4 text-[10px] font-semibold text-emerald-400 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full font-mono border border-emerald-500/30 tracking-wider">
            FEATURED
          </div>
          <div className="absolute bottom-3 left-4 right-4">
            <span className="font-heading font-bold text-base text-white tracking-tight drop-shadow-md line-clamp-1">
              {project.title}
            </span>
          </div>
        </div>
      ) : (
        <div className={`relative h-40 sm:h-44 flex items-center justify-center p-5 ${getProjectHeaderGradient(project.id)}`}>
          {/* Window controls */}
          <div className="absolute top-3.5 left-4 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 shadow-sm" />
          </div>
          <div className="absolute top-3 right-4 text-[10px] font-semibold text-white/90 bg-black/25 px-2.5 py-0.5 rounded-full font-mono border border-white/10 tracking-wider">
            FEATURED
          </div>
          <div className="flex flex-col items-center justify-center text-white space-y-2 px-4">
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-inner">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-center line-clamp-1">{project.title}</span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2.5 font-mono">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-xs text-zinc-600 dark:text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer info & Links */}
        <div className="space-y-4 pt-5 border-t border-zinc-200/60 dark:border-zinc-800/60">
          {/* Tech Stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`text-[11px] font-semibold border px-2.5 py-1 rounded-lg ${getTechTagClass(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {onOpenDetails && project.architectureDetails && (
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/25 text-xs font-semibold rounded-xl transition-all duration-200"
              >
                <Workflow className="h-3.5 w-3.5" />
                <span>Architecture Deep Dive</span>
              </button>
            )}

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold rounded-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Source Code</span>
            </a>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md shadow-orange-500/20"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
