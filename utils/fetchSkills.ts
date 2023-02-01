import { Skill } from '@/typings';

export const fetchSkills = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSkills`);

  if (!res.ok) {
    throw new Error(`Request to ${process.env.NEXT_PUBLIC_BASE_URL}api/getSkills failed with status ${res.status}`);
  }

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
