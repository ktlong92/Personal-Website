import { Skill } from '@/typings';

export const fetchSkills = async () => { 
  const res = await fetch(`http://localhost:3000/api/getSkills`);

  if (!res.ok) {
    throw new Error(`Request to http://localhost:3000/api/getSkills failed with status ${res.status}`);
  }

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
