import { useQuery } from '@tanstack/react-query';
import { Post, Toc } from '@/types';

export function usePost(id: string) {
  return useQuery<
    Post & {
      content: string;
      toc: Toc;
    }
  >(['posts', `${id}.json`]);
}
