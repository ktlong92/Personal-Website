import { Social } from '@/typings';

export const fetchSocials = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials`);

  if (!res.ok) {
    throw new Error(`Request to ${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials failed with status ${res.status}`);
  }

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
