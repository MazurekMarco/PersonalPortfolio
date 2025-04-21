export interface Skill {
  name: string;
  level: number;
  label?: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
