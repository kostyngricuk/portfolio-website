export interface Project {
  name: string;
  description?: string;
  tags?: string[],
  demoLink?: string;
}

export const projects: Project[] = [
  {
    name: 'Project Name',
    description: 'Project Description',
    tags: ['React', 'TypeScript', 'MUI'],
  },
]
