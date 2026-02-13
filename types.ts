
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  achievement: string;
  icon: string;
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
