import { useQuery } from 'umi';
import { Post } from '@/types';

export function usePosts() {
  return useQuery<Post[]>(['weekly.json']);
}
