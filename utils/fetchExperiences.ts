import { Experience } from '@/typings';

export const fetchExperiences = async () => { 
  const res = await fetch(`http://localhost:3000/api/getExperiences`);

  if (!res.ok) {
    throw new Error(`Request to http://localhost:3000/api/getExperiences failed with status ${res.status}`);
  }
  
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
