import { useLocation, useQuery } from 'umi';

export function useDoc<T>() {
  const location = useLocation();
  return useQuery<T>(`${location.pathname.slice(1)}.json`.split('/'), {
    async queryFn({ queryKey }: any) {
      const res = await fetch(`/${queryKey.join('/')}`);
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    },
  });
}
