import { Project } from '@/typings';

export const fetchProjects = async () => { 
  const res = await fetch(`http://localhost:3000/api/getProjects`);

  if (!res.ok) {
    throw new Error(`Request to http://localhost:3000/api/getProjects failed with status ${res.status}`);
  }

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
