import { useParams } from 'umi';
// @ts-ignore
import MarkdownIt from 'markdown-it';
import { usePost } from '@/hooks/usePost';
import { usePosts } from '@/hooks/usePosts';
import { Helmet } from 'react-helmet';
import React from 'react';

const md = new MarkdownIt({
  linkify: true,
});

function Main() {
  const params = useParams();
  const num = parseInt(params.issue!.replace('issue-', ''), 10);
  const postQuery = usePost(params.issue as string);
  if (postQuery.isLoading) return <p>loading...</p>;
  const { title, content } = postQuery.data!;

  return (
    <div>
      <Helmet>
        <title>{`第 ${num} 期 - MDH 前端周刊`}</title>
      </Helmet>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(content),
        }}
      />
    </div>
  );
}

function Sidebar() {
  const postsQuery = usePosts();
  if (postsQuery.isLoading) return <p>loading...</p>;
  return (
    <div>
      {postsQuery.data!.map((post) => {
        return <li key={post.numberStr}>{post.title}</li>;
      })}
    </div>
  );
}

export default () => {
  return (
    <div>
      <Sidebar />
      <Main />
    </div>
  );
};
