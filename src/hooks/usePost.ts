import { useQuery } from '@tanstack/react-query';
import { Post } from '@/types';

export function usePost(id: string) {
  return useQuery<Post & { content: string }>(['posts', `${id}.json`]);
}
