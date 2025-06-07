export type ProjectCategory = 'Web' | 'Mobile' | 'Console' | 'Backend' | 'Other';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  demoUrl?: string;
  codeUrl?: string;
}
