import { useParams } from 'umi';
import { useQuery } from '@tanstack/react-query';
import { Post } from '@/types';
// @ts-ignore
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  linkify: true,
});

export default () => {
  const params = useParams();
  const postsQuery = useQuery<Post & { content: string }>([
    'posts',
    `${params.issue}.json`,
  ]);
  console.log(params);
  console.log(postsQuery);
  if (postsQuery.isLoading) return <p>loading...</p>;
  const { title, content } = postsQuery.data!;
  console.log(content);
  return (
    <div>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(content),
        }}
      />
    </div>
  );
};
