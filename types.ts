
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export enum AppSection {
  HOME = 'home',
  WORK = 'work',
  SKILLS = 'skills'
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}
