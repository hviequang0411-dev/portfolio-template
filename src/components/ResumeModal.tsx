import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Check, 
  Copy 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
HOANG VIET QUANG - SOFTWARE ENGINEER
Email: quang.hv.work@gmail.com | Phone: +84 987 654 321 | Hanoi, Vietnam
GitHub: github.com/hoangvietquang | LinkedIn: linkedin.com/in/hoangvietquang

PROFESSIONAL SUMMARY
Final-year Software Engineering student specializing in Java Backend and Full-Stack Development. Proven experience architecting microservices with Spring Boot 3, implementing Transactional Outbox patterns, and deploying containerized applications with Docker. Strong knowledge in database normalization, RESTful APIs, and responsive frontend with React 19 & TypeScript.

EDUCATION
Bachelor of Software Engineering (2022 - 2026 Expected)
University of Engineering and Technology / FPT University - Hanoi, Vietnam
- GPA: 3.4 / 4.0 | Honors: Top 10% Academic Semester Honors
- Coursework: Software Architecture, Data Structures & Algorithms, Distributed Systems, Database Management Systems, OOP.

TECHNICAL SKILLS
- Languages: Java (Core, Stream API, Concurrency), SQL, TypeScript, JavaScript
- Frameworks & Libraries: Spring Boot 3, Spring Data JPA, Spring Security (JWT), Hibernate, React 19, Tailwind CSS
- Databases & Messaging: PostgreSQL, MySQL, SQL Server, Redis, Outbox Pattern
- Tools & DevOps: Docker, Docker Compose, Git/GitHub, Maven, Postman, Linux, Vite

FEATURED PROJECTS
1. OPCBS - Hospital Appointment Booking Microservices (Java 21, Spring Boot 3, PostgreSQL, Docker, Outbox Pattern)
- Built enterprise healthcare scheduling architecture with decoupled Auth and Booking services behind an API Gateway.
- Guaranteed at-least-once message delivery using Transactional Outbox pattern without distributed 2PC bottlenecks.
- Optimized database indexing and 3NF schemas, decreasing schedule lookup response times by 40%.

2. Interview Management System (Spring Boot, React, SQL Server, Spring Security, JWT)
- Designed candidate lifecycle tracking system with role-based access control (Admin, Recruiter, Interviewer).
- Created 25+ RESTful endpoints and integrated JWT stateless authentication with method-level authorization.

CERTIFICATIONS
- Java Programming Masterclass (Udemy)
- Spring Framework & Spring Boot Developer (Baeldung Enterprise Academy)
- SQL (Advanced) Certification (HackerRank)
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:fixed-none">
        {/* Modal Overlay / Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:border-none print:rounded-none"
        >
          {/* Action Toolbar (Hidden in Print) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 print:hidden">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-zinc-900 dark:text-white text-base">
                Curriculum Vitae (CV / Resume)
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                ATS Optimized
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                title="Copy plain text CV"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-orange-600 hover:bg-orange-500 text-white shadow-sm transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Printable Document Container */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-zinc-900 dark:text-zinc-100 print:p-0 print:overflow-visible">
            {/* CV Header */}
            <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                <div>
                  <h1 className="text-3xl font-extrabold font-heading text-zinc-950 dark:text-white tracking-tight">
                    HOANG VIET QUANG
                  </h1>
                  <p className="text-base font-semibold text-orange-600 dark:text-orange-400 font-mono mt-0.5">
                    Java Backend & Full-Stack Developer
                  </p>
                </div>
                <div className="text-xs sm:text-right text-zinc-500 dark:text-zinc-400 space-y-0.5 font-mono">
                  <p>Hanoi, Vietnam (Open to Relocation / Remote)</p>
                  <p>quang.hv.work@gmail.com | +84 987 654 321</p>
                </div>
              </div>

              {/* Links Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-zinc-600 dark:text-zinc-300">
                <a href="https://github.com/hoangvietquang" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-orange-500">
                  <GithubIcon className="h-3.5 w-3.5" /> github.com/hoangvietquang
                </a>
                <a href="https://linkedin.com/in/hoangvietquang" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-orange-500">
                  <LinkedinIcon className="h-3.5 w-3.5" /> linkedin.com/in/hoangvietquang
                </a>
              </div>
            </header>

            {/* Section 1: Summary */}
            <section className="space-y-2">
              <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-950 dark:text-white border-b-2 border-orange-500 pb-1 inline-block">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                Motivated final-year Software Engineering student with rigorous academic training and hands-on experience designing 
                resilient backend microservices in Java 21 and Spring Boot 3. Proven ability to implement asynchronous transactional 
                patterns (Transactional Outbox), optimize relational schemas (PostgreSQL, SQL Server), and build intuitive user interfaces 
                with React 19 and TypeScript. Looking for a Fresher / Junior Java Backend or Full-Stack developer position to build scalable systems.
              </p>
            </section>

            {/* Section 2: Technical Skills */}
            <section className="space-y-3">
              <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-950 dark:text-white border-b-2 border-orange-500 pb-1 inline-block">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">Languages: </span>
                  <span className="text-zinc-600 dark:text-zinc-300">Java (Core, Stream API, Concurrency), SQL, TypeScript, JavaScript (ES6+)</span>
                </div>
                <div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">Backend & Frameworks: </span>
                  <span className="text-zinc-600 dark:text-zinc-300">Spring Boot 3, Spring Data JPA, Hibernate, Spring Security, JWT, RESTful APIs</span>
                </div>
                <div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">Databases & Architecture: </span>
                  <span className="text-zinc-600 dark:text-zinc-300">PostgreSQL, SQL Server, MySQL, Microservices, Transactional Outbox</span>
                </div>
                <div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">Frontend & Tools: </span>
                  <span className="text-zinc-600 dark:text-zinc-300">React 19, Tailwind CSS, Docker, Docker Compose, Git, Maven, Postman</span>
                </div>
              </div>
            </section>

            {/* Section 3: Engineering Projects */}
            <section className="space-y-4">
              <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-950 dark:text-white border-b-2 border-orange-500 pb-1 inline-block">
                Featured Projects
              </h2>

              <div className="space-y-4">
                {/* Project 1 */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                      OPCBS - Hospital Appointment Booking Microservices
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">Mar 2024 - Jun 2024</span>
                  </div>
                  <p className="text-xs font-mono text-orange-600 dark:text-orange-400">
                    Java 21, Spring Boot 3, Microservices, PostgreSQL, Docker, Outbox Pattern, JWT
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 pl-1">
                    <li>Designed decoupled microservice architecture consisting of API Gateway, Auth Service, and Booking Management service.</li>
                    <li>Integrated the Transactional Outbox pattern to guarantee at-least-once asynchronous message delivery without 2PC deadlocks.</li>
                    <li>Optimized normalized PostgreSQL schema with tailored indexes, lowering query execution time on doctor schedules by 40%.</li>
                    <li>Packaged and orchestrated the full multi-service topology using Docker Compose for streamlined local team testing.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                      Interview Management System
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">Sep 2023 - Jan 2024</span>
                  </div>
                  <p className="text-xs font-mono text-orange-600 dark:text-orange-400">
                    Spring Boot, React, SQL Server, Spring Security, JWT, RESTful API
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 pl-1">
                    <li>Constructed candidate tracking platform supporting recruiters, interviewers, and administrators.</li>
                    <li>Wrote 25+ RESTful endpoints secured by stateless JWT and method-level access security (<code className="text-[11px] font-mono">@PreAuthorize</code>).</li>
                    <li>Implemented complex criteria searches and multi-table joins in SQL Server with pagination and sorting.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Education */}
            <section className="space-y-3">
              <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-950 dark:text-white border-b-2 border-orange-500 pb-1 inline-block">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                    Bachelor of Software Engineering (Final-Year Student)
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    University of Engineering and Technology / FPT University - Hanoi, Vietnam
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500">2022 - 2026 (Expected)</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                <strong>GPA:</strong> 3.4 / 4.0 (Top 10% Academic Semester Honors) • <strong>Core Courses:</strong> Software Architecture, Data Structures, RDBMS, Operating Systems, Computer Networks.
              </p>
            </section>

            {/* Section 5: Certifications */}
            <section className="space-y-2">
              <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-950 dark:text-white border-b-2 border-orange-500 pb-1 inline-block">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 pl-1">
                <li><strong>Java Programming Masterclass</strong> - Udemy Academic Program (2023)</li>
                <li><strong>Spring Framework & Spring Boot Developer</strong> - Baeldung Enterprise Academy (2024)</li>
                <li><strong>SQL (Advanced) Certification</strong> - HackerRank Testing Center (2024)</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default ResumeModal;
