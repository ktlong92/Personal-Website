import { PageInfo } from '@/typings';

export const fetchPageInfo = async () => { 
  const res = await fetch(`http://localhost:3000/api/getPageInfo`);

  if (!res.ok) {
    throw new Error(`Request to http://localhost:3000/api/getPageInfo failed with status ${res.status}`);
  }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
