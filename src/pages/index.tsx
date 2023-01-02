import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'umi';
import { Post } from '@/types';

function Posts() {
  const postsQuery = useQuery<Post[]>(['posts.json']);
  const posts = postsQuery.data;
  if (postsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postsQuery.data!.map((post) => (
          <li key={post.numberStr}>
            <Link to={`/weekly/issue-${post.numberStr}`}>
              <h3>
                第 {post.numberStr} 期：{post.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h1>Page index</h1>
      <Posts />
    </div>
  );
}
