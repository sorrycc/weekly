import { useQuery } from '@tanstack/react-query';
import { Post } from '@/types';

export function usePosts() {
  return useQuery<Post[]>(['posts.json']);
}
