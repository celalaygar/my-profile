export interface Project {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  type: string;
  technologies: string[];
  url: string;
  image?: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  url?: string;
}

export interface Technology {
  id: string;
  name: string;
  level: number;
}

export interface TechnologyGroup {
  group: string;
  technologies: Technology[];
}

export interface Article {
  id: string;
  title: string;
  short_description: string;
  link: string;
}

export interface InterviewQuestion {
  id: string;
  title: string;
  short_description: string;
  long_description: string;
  tags: string[];
  url: string;
}

export interface Game {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  url: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
}

export interface Hobby {
  id: string;
  en: string;
  tr: string;
}

export interface ContactLink {
  title: string;
  url: string;
}

export interface PricingPlan {
  id: string;
  title: Record<string, string>;
  price: number;
  currency: string;
  duration: string;
  revisions: string;
  features: string[];
  popular?: boolean;
}

export interface EnterpriseSolution {
  id: string;
  title: Record<string, string>;
  price: number;
  priceType?: "monthly";
  extra?: string;
  features: string[];
}

export interface ServicesData {
  pricing: PricingPlan[];
  enterpriseSolutions: EnterpriseSolution[];
  process: string[];
  revisionPolicy: Record<string, string>;
}
