import { Experience } from '@/typings';

export const fetchExperiences = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExperiences`);

  if (!res.ok) {
    throw new Error(`Request to ${process.env.NEXT_PUBLIC_BASE_URL}api/getExperiences failed with status ${res.status}`);
  }
  
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
