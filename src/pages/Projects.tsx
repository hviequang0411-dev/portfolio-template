import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDetailsModal } from '../components/ProjectDetailsModal';
import type { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 'opcbs-hospital-booking',
      title: 'OPCBS - Hospital Appointment Booking Microservices',
      category: 'microservices',
      description: 'An enterprise healthcare appointment booking platform powered by JHipster and Spring Boot Microservices architecture. Integrates the Transactional Outbox pattern for reliable async messaging, JWT security, and multi-tenant doctor-patient scheduling.',
      longDescription: 'OPCBS is an enterprise healthcare management ecosystem engineered to handle peak hospital scheduling loads without service downtime. Built on Java 21 and Spring Boot 3, it decouples user authentication and appointment booking domains behind a high-performance Spring Cloud Gateway, guaranteeing message delivery via the Transactional Outbox pattern.',
      techStack: ['Java 21', 'Spring Boot 3', 'Microservices', 'Outbox Pattern', 'Docker', 'PostgreSQL', 'JWT', 'Spring Cloud Gateway'],
      features: [
        'Decoupled Auth & Booking Microservices with centralized Spring Cloud Gateway',
        'Transactional Outbox Pattern guaranteeing at-least-once message delivery without distributed 2PC',
        'Doctor Profiles, Clinic Schedule Management & Real-time Slots',
        'Stateless JWT Authentication with role-based security filters',
        'Containerized with Docker & Docker Compose multi-service orchestration'
      ],
      architectureDetails: {
        architectureType: 'Microservices with Spring Cloud Gateway & Transactional Outbox Pattern',
        databaseDesign: 'PostgreSQL 3NF normalized schema with partial indexes on doctor appointment slots and composite unique constraints preventing double booking.',
        challenges: [
          'Dual-write race condition: Creating an appointment while ensuring the notification event is delivered without distributed transaction bottlenecks.',
          'High concurrency slot reservation: Preventing two patients from reserving the same doctor time-slot simultaneously.'
        ],
        solutions: [
          'Adopted the Transactional Outbox pattern where appointment record and event message are written to PostgreSQL inside the same atomic ACID transaction.',
          'Employed optimistic locking with version fields and unique database constraints on (doctor_id, date, start_time) to eliminate booking collisions.'
        ],
        workflow: [
          { step: 1, title: 'Client Request via Gateway', description: 'Patient submits booking payload to Spring Cloud Gateway with bearer JWT authorization header.' },
          { step: 2, title: 'Atomic Outbox Insertion', description: 'Booking Service verifies doctor availability and inserts Appointment record + Outbox Event in a single local database transaction.' },
          { step: 3, title: 'Async Event Dispatcher', description: 'Scheduled polling worker fetches unpublished outbox records and sends payload to Notification service with guaranteed delivery.' },
          { step: 4, title: 'Status Update & Confirmation', description: 'Upon acknowledgment, outbox status transitions to PUBLISHED and user receives confirmation response.' }
        ]
      },
      githubLink: 'https://github.com/hoangvietquang/opcbs-jhipster-microservices',
      liveLink: 'https://opcbs-demo.vercel.app'
    },
    {
      id: 'interview-management',
      title: 'Interview Management System',
      category: 'fullstack',
      description: 'A full-stack enterprise web application designed to streamline the recruitment process. Features role-based access control, schedules candidate interviews, and supports candidate tracking across various stages.',
      longDescription: 'A corporate recruitment platform that streamlines candidate evaluation and interview coordination. Connects HR recruiters, interviewers, and system administrators with fine-grained access policies, automated reminder pipelines, and real-time candidate scorecards.',
      techStack: ['Spring Boot', 'React', 'SQL Server', 'Spring Security', 'JWT', 'Tailwind CSS'],
      features: [
        'User Management (Recruiter, Interviewer, Admin) with granular permission trees',
        'Candidate Profiles & Application History Tracking with timeline audits',
        'Interactive Interview Scheduling & Auto-notifications',
        'Secured with JWT and Method-Level Authorization (@PreAuthorize)'
      ],
      architectureDetails: {
        architectureType: 'Monolithic Layered Architecture (Controller -> Service -> Repository) with SPA React Frontend',
        databaseDesign: 'SQL Server relational model with foreign key constraints, candidate state tracking tables, and index-optimized candidate search queries.',
        challenges: [
          'Ensuring interviewer scorecards remain completely private from recruiters until the interview round concludes.',
          'Complex multi-condition candidate queries (filtering by tech stack, GPA, graduation year, interview status).'
        ],
        solutions: [
          'Enforced method-level security with Spring Security SpEL expressions to validate user roles against candidate assessment statuses.',
          'Built JPA Specifications and dynamic query builders to compose efficient SQL Server queries without full table scans.'
        ]
      },
      githubLink: 'https://github.com/hoangvietquang/interview-management-system',
      liveLink: 'https://interview-mgmt-demo.vercel.app'
    },
    {
      id: 'vehicle-warehouse',
      title: 'Vehicle Warehouse Management',
      category: 'backend',
      description: 'A robust warehouse backend and tracking dashboard to monitor logistics and vehicles. Includes inventory validations, tracking items across multiple warehouses, and monitoring logs.',
      longDescription: 'Automated logistics and vehicle inventory platform built to maintain multi-warehouse stock integrity. Provides automated inventory reconciliation, employee operational audit trails, and RESTful webhooks for third-party transport partners.',
      techStack: ['Spring Boot', 'React', 'MySQL', 'Hibernate', 'Docker', 'REST API'],
      features: [
        'Real-time Vehicle Inventory & Multi-Warehouse Stock Auditing',
        'Interactive Charts for Monthly Shipping & Intake Statistics',
        'Employee Operational Logs & Performance Audits',
        'Automated RESTful API endpoints with input validation and rate-limiting'
      ],
      architectureDetails: {
        architectureType: 'Domain-Driven RESTful Service with Hibernate 2nd Level Cache',
        databaseDesign: 'MySQL schema with strict foreign keys, vehicle VIN uniqueness validations, and warehouse capacity constraints.',
        challenges: [
          'Preventing concurrent warehouse transfers from exceeding physical storage limits during peak hours.',
          'Maintaining an unalterable audit log for sensitive vehicle status transitions.'
        ],
        solutions: [
          'Implemented pessimistic row-level locking on warehouse capacity records during transfer commitments.',
          'Built dedicated audit event listeners using Hibernate interceptors to automatically capture timestamps and actor IDs.'
        ]
      },
      githubLink: 'https://github.com/hoangvietquang/vehicle-warehouse-mgmt',
      liveLink: 'https://vehicle-warehouse-demo.vercel.app'
    },
    {
      id: 'library-management',
      title: 'Library Management System',
      category: 'javacore',
      description: 'A database-normalized registry system for managing library contents, borrowers, and fine calculations. Structured with clean CRUD architecture and optimized indexing.',
      longDescription: 'A core database and backend application that manages cataloging, borrowing lifecycle, overdue fine computations, and member accounts. Emphasizes clean transactional boundaries and robust relational constraints.',
      techStack: ['Java Core', 'Spring Boot', 'MySQL', 'JDBC', 'Spring Data JPA'],
      features: [
        'Book, Periodical & Digital Media Cataloging',
        'Borrower Account Registration & Active Borrowing Limits',
        'Automated Fine Calculation Engine & Overdue Reminders',
        'CRUD operations with transactional safety (@Transactional)'
      ],
      architectureDetails: {
        architectureType: 'Layered Spring Data JPA Service with transactional safety boundaries',
        databaseDesign: '3NF normalized schema in MySQL with cascade delete protections, indexed ISBN lookups, and fine balance triggers.',
        challenges: [
          'Accurate overdue fine calculation across varying holiday calendars and borrower tiers.',
          'Preventing deadlocks during bulk end-of-day loan auditing.'
        ],
        solutions: [
          'Engineered a deterministic calculation engine with customizable strategy pattern implementations.',
          'Batched overdue audits with chunked pagination to minimize lock contention on active borrower tables.'
        ]
      },
      githubLink: 'https://github.com/hoangvietquang/library-management-system'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsList.length },
    { id: 'microservices', label: 'Microservices & Distributed', count: projectsList.filter(p => p.category === 'microservices').length },
    { id: 'fullstack', label: 'Full-Stack Applications', count: projectsList.filter(p => p.category === 'fullstack').length },
    { id: 'backend', label: 'Enterprise Backend & DB', count: projectsList.filter(p => p.category === 'backend' || p.category === 'javacore').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsList
    : selectedCategory === 'backend'
    ? projectsList.filter(p => p.category === 'backend' || p.category === 'javacore')
    : projectsList.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
          Featured Engineering Works
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading"
        >
          Featured Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Enterprise backend microservices and full-stack solutions built with Spring Boot, Docker, and SQL databases.
        </motion.p>

        {/* Filter Navigation Tabs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex flex-wrap p-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-zinc-800 text-orange-600 dark:text-orange-400 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard 
                project={project} 
                onOpenDetails={(p) => setActiveModalProject(p)} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Deep Dive Architecture Modal */}
      <ProjectDetailsModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};

export default Projects;