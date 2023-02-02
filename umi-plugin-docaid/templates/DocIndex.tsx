import React from 'react';
import {
  Link,
  styled,
  useDocAidConfig,
  useDocAidTheme,
  useLocation,
} from 'umi';
import { Helmet } from 'react-helmet';
import { useDoc } from './useDoc';

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
  const config = useDocAidConfig();
  const theme = useDocAidTheme();
  const { pathname } = useLocation();
  const activeNav = config.navs.find((nav) => nav.path === pathname);
  const docQuery = useDoc<any>();
  if (docQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PostsWrapper>
      <Helmet>
        <title>{`${activeNav?.title || ''} - ${config.title}`}</title>
      </Helmet>
      <ul>
        {docQuery.data!.map((doc: any) => (
          <li key={doc.numberStr}>
            <Link to={doc.path}>
              <theme.DocIndexTitle doc={doc} />
            </Link>
            <em>{doc.publishedAt}</em>
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
