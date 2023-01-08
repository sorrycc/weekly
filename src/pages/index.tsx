import React from 'react';
import { Link } from 'umi';
import { usePosts } from '@/hooks/usePosts';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const PostsWrapper = styled.div`
  h2 {
    margin-bottom: 24px;
  }
  ul {
    list-style: circle;
    padding-left: 24px;
  }
  li {
    height: 30px;
    line-height: 30px;
  }
`;

function Posts() {
  const postsQuery = usePosts();
  if (postsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PostsWrapper>
      <Helmet>
        <title>MDH 前端周刊</title>
      </Helmet>
      <h2>往期周刊</h2>
      <ul>
        {postsQuery.data!.map((post) => (
          <li key={post.numberStr}>
            <Link to={`/weekly/issue-${post.numberStr}`}>
              第 {post.numberStr} 期：{post.title}
            </Link>
          </li>
        ))}
      </ul>
    </PostsWrapper>
  );
}

export default function Page() {
  return (
    <div>
      <Posts />
    </div>
  );
}
