import React from 'react';
import { Link } from 'umi';
import { usePosts } from '@/hooks/usePosts';
import { Helmet } from 'react-helmet';

function Posts() {
  const postsQuery = usePosts();
  if (postsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>MDH 前端周刊</title>
      </Helmet>
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
