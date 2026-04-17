export interface pfData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  socialLinks: { name: string; url: string; icon: string }[];
  skills: Skills[];
  projects: Project[];
  experience: Experience[];
}

export interface Skills {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: { name: string; icon: string }[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}
