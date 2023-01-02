import React from 'react';
import { Link } from 'umi';
import { usePosts } from '@/hooks/usePosts';

function Posts() {
  const postsQuery = usePosts();
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
      <Posts />
    </div>
  );
}
