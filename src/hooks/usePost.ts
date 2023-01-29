import { useQuery } from 'umi';
import { Post, Toc } from '@/types';

export function usePost(id: string) {
  return useQuery<
    Post & {
      content: string;
      html: string;
      toc: Toc;
    }
  >(['weekly', `${id}.json`]);
}
