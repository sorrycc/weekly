import React from 'react';
import { Link, styled } from 'umi';
import { usePosts } from '@/hooks/usePosts';
import { Helmet } from 'react-helmet';

const PostsWrapper = styled.div`
  li {
    height: 28px;
    line-height: 28px;
    margin: 8px 0;
    display: flex;
    gap: 8px;
    a {
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    em {
      color: rgb(156 163 175);
      font-style: italic;
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
        <title>往期周刊 - MDH 前端周刊</title>
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
