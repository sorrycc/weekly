import { useQuery } from 'umi';
import { Post, Toc } from '@/types';

export function usePost(id: string) {
  return useQuery<
    Post & {
      content: string;
      toc: Toc;
    }
  >(['posts', `${id}.json`]);
}
