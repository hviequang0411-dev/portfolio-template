import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Cpu, 
  Database, 
  ShieldAlert, 
  Lightbulb, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Workflow 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const arch = project.architectureDetails;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                <Workflow className="h-4 w-4" />
              </span>
              <span className="font-heading font-bold text-zinc-900 dark:text-white text-base">
                Engineering Architecture Deep Dive
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-7 text-zinc-900 dark:text-zinc-100">
            {/* Title & Overview */}
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold font-heading text-zinc-950 dark:text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Tech Stack Matrix */}
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                Technology & Infrastructure Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            {arch && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    <Cpu className="h-4 w-4" />
                    <span>System Architecture Pattern</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {arch.architectureType}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    <Database className="h-4 w-4" />
                    <span>Database & Data Modeling</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {arch.databaseDesign}
                  </p>
                </div>
              </div>
            )}

            {/* Step-by-Step Workflow (if available) */}
            {arch?.workflow && arch.workflow.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-emerald-500" />
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                    Request / Event Execution Flow
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {arch.workflow.map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-800"
                    >
                      <span className="w-6 h-6 rounded-full bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {arch && (
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    <ShieldAlert className="h-4 w-4" />
                    <span>Key Engineering Challenges Encountered</span>
                  </div>
                  <ul className="space-y-2">
                    {arch.challenges.map((c, i) => (
                      <li key={i} className="text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                        <span className="text-amber-500 font-bold shrink-0">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <Lightbulb className="h-4 w-4" />
                    <span>Engineering Solutions & Trade-offs</span>
                  </div>
                  <ul className="space-y-2">
                    {arch.solutions.map((s, i) => (
                      <li key={i} className="text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold rounded-xl transition-colors border border-zinc-300 dark:border-zinc-700"
              >
                <GithubIcon className="h-4 w-4" />
                <span>View GitHub Repository</span>
              </a>

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open Live Application</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default ProjectDetailsModal;
