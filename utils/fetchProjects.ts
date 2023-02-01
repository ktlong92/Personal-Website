import { Project } from '@/typings';

export const fetchProjects = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getProjects`);

  if (!res.ok) {
    throw new Error(`Request to ${process.env.NEXT_PUBLIC_BASE_URL}api/getProjects failed with status ${res.status}`);
  }

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
