export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
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
  duration: string;
  description: string[];
  type: 'academic' | 'team' | 'freelance';
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
