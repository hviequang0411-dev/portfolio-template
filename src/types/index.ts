export interface ProjectArchitecture {
  architectureType: string;
  databaseDesign: string;
  challenges: string[];
  solutions: string[];
  workflow?: { step: number; title: string; description: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category?: 'microservices' | 'fullstack' | 'backend' | 'javacore';
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
  architectureDetails?: ProjectArchitecture;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'database' | 'tool';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  type: 'internship' | 'team' | 'academic' | 'freelance';
  technologies?: string[];
  highlights?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  gpa?: string;
  honors?: string;
  keyCourses: string[];
  achievements?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  status: 'active' | 'upcoming';
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: 'edu' | 'tech' | 'goal';
}
