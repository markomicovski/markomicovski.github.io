
import { Project, Experience, Education, SkillCategory } from './types';

export const COLORS = {
  navy: '#0A1628',
  blue: '#2D9CDB',
  cyan: '#56CCF2',
  white: '#F8F9FA',
  gray: '#E0E0E0',
  charcoal: '#333333',
  green: '#27AE60',
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-inventory',
    title: 'AI Inventory & Sales Management System',
    description: 'AI-powered inventory management with automated stock tracking and predictive restocking logic based on historical patterns.',
    tech: ['Python', 'Airtable', 'Machine Learning'],
    achievement: 'Reduced manual inventory checks by 85%',
    icon: 'fa-brain',
    link: 'https://github.com/markomicovski',
  },
  {
    id: 'trading-dashboard',
    title: 'Trading Intelligence Dashboard',
    description: 'Real-time data visualization platform for high-frequency trading insights and predictive market analysis.',
    tech: ['Power BI', 'SQL', 'Python'],
    achievement: 'Improved trading decisions by 50%',
    icon: 'fa-chart-pie',
    link: 'https://github.com/markomicovski',
  },
  {
    id: 'reve-sleepwear',
    title: 'Rêve Sleepwear E-Commerce',
    description: 'Full-stack e-commerce infrastructure integrating Klaviyo marketing and Sufio automated invoicing for global operations.',
    tech: ['Shopify', 'JavaScript', 'API Integration'],
    achievement: 'Increased conversion rate by 40%',
    icon: 'fa-shopping-cart',
    link: 'https://github.com/markomicovski',
  },
  {
    id: 'banking-optimization',
    title: 'Banking System Optimization',
    description: 'Infrastructure and application performance tuning for high-volume banking systems and secure data workflows.',
    tech: ['C#', 'ASP.NET Core', 'Infrastructure'],
    achievement: 'Improved app response times by 25%',
    icon: 'fa-server',
    link: 'https://github.com/markomicovski',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Technology and Data Associate',
    company: 'Malid Export DOOEL',
    location: 'Skopje, North Macedonia',
    period: 'Jan 2025 - Aug 2025',
    bullets: [
      'Managed digital systems and technical workflows used in daily operations.',
      'Provided troubleshooting support, improving efficiency of documentation and coordination by 40%.',
      'Assisted with data handling and communication between engineering and IT teams.'
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Beta Trading AS',
    location: 'Kristiansand, Norway',
    period: 'Oct 2023 - June 2024',
    bullets: [
      'Designed and maintained data dashboards delivering actionable insights that improved trading decisions by 50%.',
      'Automated data processing and reporting workflows, reducing manual reporting time by 35%.',
      'Conducted predictive analysis on trading patterns to support data-driven decision making.'
    ],
  },
  {
    title: 'Information Technology Intern',
    company: 'NLB Bank',
    location: 'Skopje, North Macedonia',
    period: 'June 2023 - Sept 2023',
    bullets: [
      'Supported IT infrastructure for 100+ employees and troubleshot network issues.',
      'Assisted in system optimization initiatives, improving banking app response times by 25%.',
      'Collaborated with senior engineers on documentation and cybersecurity compliance efforts.'
    ],
  },
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Master of Science - IT & Management',
    institution: 'Florida Atlantic University',
    period: 'In Progress',
    details: 'Concentration: Advanced Information Technology',
  },
  {
    degree: 'Bachelor of Arts - Computer Science',
    institution: 'Florida Atlantic University',
    period: 'Expected Dec 2025',
  },
  {
    degree: 'Bachelor of Science - Software Engineering',
    institution: 'University American College Skopje',
    period: 'July 2025',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'C#', 'HTML/CSS'],
  },
  {
    name: 'Frameworks',
    skills: ['React', 'Node.js', 'ASP.NET Core', 'Shopify'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'MongoDB', 'Power BI', 'Airtable', 'Klaviyo'],
  },
];
