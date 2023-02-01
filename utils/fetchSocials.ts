import { Social } from '@/typings';

export const fetchSocials = async () => { 
  const res = await fetch(`http://localhost:3000/api/getSocials`);

  if (!res.ok) {
    throw new Error(`Request to http://localhost:3000/api/getSocials failed with status ${res.status}`);
  }

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
