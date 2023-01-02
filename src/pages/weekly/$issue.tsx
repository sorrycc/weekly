import { useParams } from 'umi';
// @ts-ignore
import MarkdownIt from 'markdown-it';
import { usePost } from '@/hooks/usePost';
import { usePosts } from '@/hooks/usePosts';

const md = new MarkdownIt({
  linkify: true,
});

function Main() {
  const params = useParams();
  const postQuery = usePost(params.issue as string);
  if (postQuery.isLoading) return <p>loading...</p>;
  const { title, content } = postQuery.data!;

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
