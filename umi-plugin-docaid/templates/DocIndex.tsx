import React from 'react';
import { Link, useDocAidConfig, useDocAidTheme, useLocation } from 'umi';
import { Helmet } from 'react-helmet';
import { useDoc } from './useDoc';

function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Posts() {
  const config = useDocAidConfig();
  const theme = useDocAidTheme();
  const { pathname } = useLocation();
  const activeNav = config.navs.find((nav) => nav.path === pathname);
  const docQuery = useDoc<any>();
  if (docQuery.isLoading) {
    return <theme.Loading />;
  }

  return (
    <theme.DocListWrapper>
      <Helmet>
        <title>{`${activeNav?.title || ''} - ${config.title}`}</title>
      </Helmet>
      <h1>{upperFirst(activeNav?.title || '')}</h1>
      <ul>
        {docQuery.data!.map((doc: any) => {
          return (
            <li key={doc.path}>
              <Link to={doc.path}>
                <theme.DocIndexTitle doc={doc} />
              </Link>
              <em>{doc.publishedAt}</em>
            </li>
          )
        })}
      </ul>
    </theme.DocListWrapper>
  );
}

export default function Page() {
  return (
    <div>
      <Posts />
    </div>
  );
}
