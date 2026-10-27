import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../types';
import { motion } from 'framer-motion';


export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      id: 'opcbs-hospital-booking',
      title: 'OPCBS - Hospital Appointment Booking Microservices',
      description: 'An enterprise healthcare appointment booking platform powered by JHipster and Spring Boot Microservices architecture. Integrates the Transactional Outbox pattern for reliable async messaging, JWT security, and multi-tenant doctor-patient scheduling.',
      techStack: ['Java 21', 'Spring Boot 3', 'Microservices', 'Outbox Pattern', 'Docker', 'PostgreSQL', 'JWT'],
      features: [
        'Decoupled Auth & Booking Microservices with centralized Gateway',
        'Transactional Outbox Pattern guaranteeing at-least-once message delivery',
        'Doctor Profiles, Clinic Schedule Management & Real-time Slots',
        'Stateless JWT Authentication with role-based security filters',
        'Containerized with Docker & Docker Compose orchestration'
      ],
      githubLink: 'https://github.com/hoangvietquang/opcbs-jhipster-microservices',
      liveLink: 'https://opcbs-demo.vercel.app'
    },
    {
      id: 'interview-management',
      title: 'Interview Management System',
      description: 'A full-stack enterprise web application designed to streamline the recruitment process. Features role-based access control, schedules candidate interviews, and supports candidate tracking across various stages.',
      techStack: ['Spring Boot', 'React', 'SQL Server', 'Spring Security', 'JWT'],
      features: [
        'User Management (Recruiter, Interviewer, Admin)',
        'Candidate Profiles & Application History Tracking',
        'Interactive Interview Scheduling & Auto-notifications',
        'Secured with JWT and Method-Level Authorization'
      ],
      githubLink: 'https://github.com/hoangvietquang/interview-management-system',
      liveLink: 'https://interview-mgmt-demo.vercel.app'
    },
    {
      id: 'vehicle-warehouse',
      title: 'Vehicle Warehouse Management',
      description: 'A robust warehouse backend and tracking dashboard to monitor logistics and vehicles. Includes inventory validations, tracking items across multiple warehouses, and monitoring logs.',
      techStack: ['Spring Boot', 'React', 'MySQL', 'Hibernate', 'Docker'],
      features: [
        'Real-time Vehicle Inventory & Stock Auditing',
        'Interactive Charts for Monthly Statistics',
        'Employee Logs & Performance Audits',
        'Automated RESTful API endpoints for external shipping services'
      ],
      githubLink: 'https://github.com/hoangvietquang/vehicle-warehouse-mgmt',
      liveLink: 'https://vehicle-warehouse-demo.vercel.app'
    },
    {
      id: 'library-management',
      title: 'Library Management System',
      description: 'A database-normalized registry system for managing library contents, borrowers, and fine calculations. Structured with clean CRUD architecture and optimized indexing.',
      techStack: ['Java Core', 'Spring Boot', 'MySQL', 'JDBC', 'Spring Data JPA'],
      features: [
        'Book & Magazine Cataloging',
        'Borrower Account Registration & Borrowing Logs',
        'Fine Calculation Engine & Return Reminders',
        'CRUD operations with transactional safety (@Transactional)'
      ],
      githubLink: 'https://github.com/hoangvietquang/library-management-system'
    }
  ];

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
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
