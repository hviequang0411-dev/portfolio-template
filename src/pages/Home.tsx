import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from '../components/Button';

// Local counter component that animates up to target
const AnimatedNumber: React.FC<{ value: number; suffix?: string; colorClass?: string }> = ({ 
  value, 
  suffix = '', 
  colorClass = 'text-orange-600 dark:text-orange-400' 
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1.2;
      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={`text-4xl sm:text-5xl font-extrabold font-heading tracking-tight ${colorClass}`}>
      {count}
      {suffix}
    </span>
  );
};

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    const cvText = `
HOANG VIET QUANG
Email: quang.hv.work@gmail.com
Phone: +84 987 654 321
Title: Java Backend / Full-Stack Developer
Education: Final-year Software Engineering student
Core Tech: Java, Spring Boot, Microservices, Outbox Pattern, Docker, React, TypeScript
Projects: OPCBS Hospital Booking Microservices, Interview Management System
    `;
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HoangVietQuang_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techStack = [
    { 
      name: 'Java 21', 
      category: 'Backend Core', 
      icon: <Server className="h-5 w-5" />,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25 group-hover:bg-emerald-500 group-hover:text-white',
      badge: 'text-emerald-600 dark:text-emerald-400'
    },
    { 
      name: 'Spring Boot 3', 
      category: 'Microservices', 
      icon: <Cpu className="h-5 w-5" />,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25 group-hover:bg-amber-500 group-hover:text-white',
      badge: 'text-amber-600 dark:text-amber-400'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Relational DB', 
      icon: <Database className="h-5 w-5" />,
      color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25 group-hover:bg-cyan-500 group-hover:text-white',
      badge: 'text-cyan-600 dark:text-cyan-400'
    },
    { 
      name: 'MySQL / SQL Server', 
      category: 'Enterprise DB', 
      icon: <Database className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25 group-hover:bg-blue-500 group-hover:text-white',
      badge: 'text-blue-600 dark:text-blue-400'
    },
    { 
      name: 'React 19', 
      category: 'Frontend UI', 
      icon: <Globe className="h-5 w-5" />,
      color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25 group-hover:bg-sky-500 group-hover:text-white',
      badge: 'text-sky-600 dark:text-sky-400'
    },
    { 
      name: 'TypeScript', 
      category: 'Type Safety', 
      icon: <Code className="h-5 w-5" />,
      color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25 group-hover:bg-indigo-500 group-hover:text-white',
      badge: 'text-indigo-600 dark:text-indigo-400'
    },
    { 
      name: 'Docker & Compose', 
      category: 'Containers & Cloud', 
      icon: <Cpu className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25 group-hover:bg-blue-500 group-hover:text-white',
      badge: 'text-blue-600 dark:text-blue-400'
    },
    { 
      name: 'REST & gRPC', 
      category: 'API Architecture', 
      icon: <Server className="h-5 w-5" />,
      color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/25 group-hover:bg-teal-500 group-hover:text-white',
      badge: 'text-teal-600 dark:text-teal-400'
    },
    { 
      name: 'Spring Security / JWT', 
      category: 'Auth & Encryption', 
      icon: <ShieldCheck className="h-5 w-5" />,
      color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25 group-hover:bg-rose-500 group-hover:text-white',
      badge: 'text-rose-600 dark:text-rose-400'
    },
    { 
      name: 'Git & CI/CD', 
      category: 'DevOps Flow', 
      icon: <Code className="h-5 w-5" />,
      color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25 group-hover:bg-orange-500 group-hover:text-white',
      badge: 'text-orange-600 dark:text-orange-400'
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-28 overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-orange-500/10 via-amber-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-mono font-medium tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
              <span>Available for Software Engineer Roles</span>
            </div>

            {/* Headline Group */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block">
                Hello, I am
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white leading-[1.06] tracking-tight font-heading">
                Hoang Viet{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                  Quang
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-700 dark:text-zinc-200 tracking-tight font-heading">
                Java Backend & Full-Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              Final-year Software Engineering student dedicated to building scalable <strong className="text-zinc-900 dark:text-white font-medium">Spring Boot microservices</strong>, transactional outbox architectures, and responsive full-stack applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-1">
              <Button 
                variant="primary" 
                size="md" 
                icon={<ArrowRight className="h-4 w-4" />} 
                iconPosition="right" 
                onClick={() => navigate('/projects')}
              >
                Explore Projects
              </Button>
              <Button 
                variant="outline" 
                size="md" 
                icon={<Download className="h-4 w-4" />} 
                onClick={handleDownloadCV}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Visual Developer Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 w-full max-w-md lg:max-w-lg flex justify-center items-center"
          >
            <div className="relative w-full">
              {/* Decorative Vibrant Ambient Background Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-amber-500/30 to-cyan-500/20 rounded-3xl blur-xl opacity-60 -z-10" />

              {/* Glass Container */}
              <div className="relative rounded-3xl bg-zinc-950/90 border border-orange-500/25 shadow-2xl overflow-hidden backdrop-blur-xl group">
                {/* Visual Avatar Banner */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <img
                    src="/images/developer-avatar.jpg"
                    alt="Hoang Viet Quang - Java Backend & Full-Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-emerald-500/30 shadow-lg text-emerald-400 text-xs font-mono font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active for Hire</span>
                  </div>

                  {/* Floating Stack Tag Top Left */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-orange-500/30 shadow-lg text-orange-400 text-xs font-mono font-semibold">
                    <span>Java 21 • Spring Boot 3</span>
                  </div>
                </div>

                {/* Profile Meta Info Bar */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Hoang Viet Quang
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                        Software Engineering Major • Class of 2026
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-lg border border-orange-500/25">
                      Hanoi / Remote
                    </span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Spring Boot Microservices
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Transactional Outbox
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      PostgreSQL
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      React 19 & TypeScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white/70 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-zinc-200/80 dark:divide-zinc-800/80">
            <div className="space-y-1.5 py-3 sm:py-0">
              <AnimatedNumber value={8} suffix="+" colorClass="text-orange-600 dark:text-orange-400" />
              <div className="text-zinc-600 dark:text-zinc-400 font-medium text-sm">Projects Architected</div>
            </div>
            <div className="space-y-1.5 py-3 sm:py-0">
              <AnimatedNumber value={15} suffix="+" colorClass="text-emerald-600 dark:text-emerald-400" />
              <div className="text-zinc-600 dark:text-zinc-400 font-medium text-sm">Technologies Mastered</div>
            </div>
            <div className="space-y-1.5 py-3 sm:py-0">
              <AnimatedNumber value={100} suffix="%" colorClass="text-cyan-600 dark:text-cyan-400" />
              <div className="text-zinc-600 dark:text-zinc-400 font-medium text-sm">Commitment to Clean Code</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading">
            Enterprise Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Proven backend frameworks, databases, messaging patterns, and development tools leveraged in real applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center cursor-default group hover:shadow-lg"
            >
              <div className={`p-3 rounded-xl border transition-all duration-300 shadow-sm ${tech.color}`}>
                {tech.icon}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 font-heading text-sm">{tech.name}</h3>
                <span className={`text-[11px] font-medium mt-0.5 block ${tech.badge}`}>{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Architectural Strengths & What I Bring to the Table */}
      <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#0d0f17]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
              Core Engineering Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading">
              Architectural Rigor & Engineering Strengths
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Applying clean architectural principles, reliable messaging patterns, and transactional safety to deliver resilient software.
            </p>
          </div>

          {/* 3D Architecture Pipeline Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl relative group"
          >
            {/* Mock Window Title Bar */}
            <div className="px-5 py-3.5 bg-zinc-950/80 border-b border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                <span className="ml-3 text-xs font-mono text-zinc-300 font-medium hidden sm:inline">
                  microservices-topology.svg — Event-Driven Pipeline & Transactional Outbox
                </span>
                <span className="ml-2 text-xs font-mono text-zinc-300 font-medium sm:hidden">
                  microservices-topology.svg
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
                ARCHITECTURE TOPOLOGY
              </span>
            </div>

            {/* Diagram Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-zinc-950">
              <img
                src="/images/microservices-diagram.jpg"
                alt="Distributed Microservices Architecture and Transactional Outbox Pattern Pipeline"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>At-Least-Once Delivery • Non-Blocking Asynchronous Events</span>
                </div>
                <span className="text-zinc-400 text-[11px] hidden md:inline">API Gateway ➔ Auth / Booking Engine ➔ Outbox Queue ➔ Message Broker</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Pillar 1: Microservices & Domain Isolation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-7 space-y-4 hover:border-emerald-500/40 hover:shadow-emerald-500/5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading">
                    Decoupled Microservices
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    Spring Boot • Gateway • Stateless JWT
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Experienced in architecting autonomous microservices with centralized API Gateways, Eureka service discovery, and fine-grained JWT role-based security filters. Focused on loose coupling and high cohesion across bounded contexts.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  Bounded Contexts
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  JHipster Ecosystem
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  REST & gRPC APIs
                </span>
              </div>
            </motion.div>

            {/* Pillar 2: Transactional Outbox Pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card rounded-2xl p-7 space-y-4 hover:border-amber-500/40 hover:shadow-amber-500/5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform duration-300">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading">
                    Guaranteed Event Delivery
                  </h3>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-medium">
                    Transactional Outbox • Zero Data Loss
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Deep hands-on implementation of the <strong className="text-zinc-900 dark:text-white font-semibold">Transactional Outbox Pattern</strong> to overcome dual-write distributed failures. Guarantees atomic database operations and at-least-once message propagation to message brokers and downstream consumers.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  Dual-Write Prevention
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  At-Least-Once Delivery
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  Async Workers
                </span>
              </div>
            </motion.div>

            {/* Pillar 3: Database Integrity & Query Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card rounded-2xl p-7 space-y-4 hover:border-cyan-500/40 hover:shadow-cyan-500/5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  <Database className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading">
                    Relational Schema Optimization
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    PostgreSQL • MySQL • Index Tuning
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Skilled in 3NF database normalization, indexing strategies, constraint integrity, and preventing Hibernate N+1 query bottlenecks using fetch joins and entity graphs for predictable query execution.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  ACID Transactions
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  Connection Pooling
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  JPA Entity Lifecycle
                </span>
              </div>
            </motion.div>

            {/* Pillar 4: Modern Full-Stack Execution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-card rounded-2xl p-7 space-y-4 hover:border-violet-500/40 hover:shadow-violet-500/5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-600 dark:text-violet-400 group-hover:scale-105 transition-transform duration-300">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading">
                    Full-Stack Cohesion
                  </h3>
                  <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-medium">
                    React 19 • TypeScript • Tailwind CSS
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Committed to delivering complete software products. Translating complex backend services into intuitive, type-safe, and dynamic web interfaces with optimized client rendering and fluid interaction states.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                  Type Safety
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                  Responsive UI
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                  Smooth Animations
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Disciplined Engineering Workflow */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">
            Methodology & Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading">
            How I Build Robust Software
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A methodical four-stage process emphasizing maintainability, transactional boundaries, and automated delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="glass-card rounded-2xl p-6 space-y-3.5 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            <span className="text-3xl font-extrabold font-mono text-zinc-300 dark:text-zinc-700 block">
              01
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white font-heading text-base">
              Contract & Schema First
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Define clear entity relationships, normalized database tables, and REST/gRPC contracts before implementing business logic.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 font-mono font-medium">
              <CheckCircle2 className="h-4 w-4" />
              <span>Predictable APIs</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card rounded-2xl p-6 space-y-3.5 relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
            <span className="text-3xl font-extrabold font-mono text-zinc-300 dark:text-zinc-700 block">
              02
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white font-heading text-base">
              SOLID Layered Architecture
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Enforce strict separation between Controllers, Services, and Repositories to maintain high testability and clean domain code.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
              <CheckCircle2 className="h-4 w-4" />
              <span>Clean Separation</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card rounded-2xl p-6 space-y-3.5 relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
            <span className="text-3xl font-extrabold font-mono text-zinc-300 dark:text-zinc-700 block">
              03
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white font-heading text-base">
              Transactional Integrity
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Protect state transitions with explicit transaction scopes, idempotent handlers, and reliable outbox queues to avoid race conditions.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-mono font-medium">
              <CheckCircle2 className="h-4 w-4" />
              <span>Fault-Tolerant</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card rounded-2xl p-6 space-y-3.5 relative overflow-hidden group hover:border-violet-500/40 transition-all duration-300">
            <span className="text-3xl font-extrabold font-mono text-zinc-300 dark:text-zinc-700 block">
              04
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white font-heading text-base">
              Containerized Delivery
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Standardize runtime environments using Docker and Docker Compose orchestrations for smooth CI/CD and deployment parity.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-violet-600 dark:text-violet-400 font-mono font-medium">
              <CheckCircle2 className="h-4 w-4" />
              <span>Production Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Flagship Project Spotlight (OPCBS) */}
      <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-emerald-500/25 relative overflow-hidden shadow-2xl">
            {/* Ambient Background Radial */}
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Flagship Enterprise Project</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tight">
                    OPCBS — Hospital Booking Microservices
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    A high-availability healthcare appointment booking platform powered by JHipster and Spring Boot Microservices architecture. Integrates the <strong className="text-zinc-900 dark:text-white">Transactional Outbox Pattern</strong> for reliable asynchronous message broadcasting, stateless JWT security, and Docker Compose orchestration.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                      Java 21
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                      Spring Boot 3
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                      Transactional Outbox
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
                      PostgreSQL
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/25">
                      Docker Compose
                    </span>
                  </div>
                </div>

                {/* Action Side */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                  <Button
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="h-4 w-4" />}
                    iconPosition="right"
                    onClick={() => navigate('/projects')}
                    className="w-full sm:w-auto"
                  >
                    View All Projects
                  </Button>
                  <a
                    href="https://github.com/hoangvietquang/opcbs-jhipster-microservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700/80 transition-colors duration-200"
                  >
                    <span>Explore Repository</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Realistic Interactive Dashboard Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-zinc-950 group">
                <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                    <span className="ml-2 text-xs font-mono text-zinc-300 font-medium hidden sm:inline">
                      opcbs-portal.enterprise/dashboard — Doctor Scheduling & Microservices Telemetry
                    </span>
                    <span className="ml-1 text-xs font-mono text-zinc-300 font-medium sm:hidden">
                      opcbs-portal.enterprise
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                  <img
                    src="/images/opcbs-preview.jpg"
                    alt="OPCBS Healthcare Microservices Dashboard Preview"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Call To Action (Let's Build Together) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-3xl p-10 sm:p-16 space-y-6 relative overflow-hidden border border-orange-500/30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-mono font-medium">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
            <span>Open for Junior / Fresher Roles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Bring Reliable Engineering to Your Team?
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            I am actively seeking software engineering positions where I can contribute to high-impact backend systems and learn from senior peers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Download className="h-4 w-4" />}
              onClick={handleDownloadCV}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
