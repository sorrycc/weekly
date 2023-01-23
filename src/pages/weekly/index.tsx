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
    list-style: none;
  }
  li {
    height: 1.75rem;
    line-height: 1.75rem;
    margin: 0.5rem 0;
    display: flex;
    a {
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    em {
      color: rgb(156 163 175);
      font-style: italic;
      margin-left: 0.5rem;
    }
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
        <title>周刊 - MDH 前端周刊</title>
      </Helmet>
      <ul>
        {postsQuery.data!.map((post) => (
          <li key={post.numberStr}>
            <Link to={`/weekly/issue-${post.numberStr}`}>
              <strong>{post.numberStr} 期</strong>：{post.title}
            </Link>
            <em>{post.publishedAt}</em>
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
