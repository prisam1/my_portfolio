export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  github: string;
  live: string;
  tech: string[];
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  current?: boolean;
  highlights: string[];
  tech: string[];
}
