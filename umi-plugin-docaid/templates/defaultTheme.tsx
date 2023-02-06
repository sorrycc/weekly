import { Link, styled, useDocAidConfig } from 'umi';
import React, { Fragment } from 'react';

export const DocIndexTitle = (props: any) => {
  return <>{props.doc.title}</>;
};

export const Footer = (props: any) => {
  const { copyright } = useDocAidConfig();
  return <footer>{props.copyright || copyright}</footer>;
};

export const Navs = (props: any) => {
  const { navs } = useDocAidConfig();
  return (
    <nav>
      {(props.navs || navs).map((nav: any, index: number) => {
        let className = undefined;
        if (nav.path && props.activeNav && props.activeNav.path === nav.path) {
          className = 'active';
        }
        return (
          <Fragment key={index}>
            {nav.path ? (
              <div>
                <Link to={nav.path} className={className}>
                  {nav.title}
                </Link>
              </div>
            ) : (
              <div>
                <a href={nav.href}>{nav.title}</a>
              </div>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};

export const HeadTitle = (props: any) => {
  const { headTitle } = useDocAidConfig();
  return (
    <h1>
      <Link to="/">{props.headTitle || headTitle}</Link>
    </h1>
  );
};

export const Loading = () => {
  return <div>Loading...</div>;
};

export const LayoutWrapper = styled.div<{ $isPost: boolean }>`
  max-width: 65ch;
  margin: 0 auto;

  header {
    padding-top: 90px;
    padding-bottom: 46px;
    h1 {
      font-weight: 800;
      font-size: ${(p) => (p.$isPost ? 'var(--16px)' : 'var(--36px)')};
      a {
        text-decoration: none;
      }
    }
    nav {
      margin-top: 20px;
      display: ${(p) => (p.$isPost ? 'none' : 'flex')};
      gap: 16px;
      a {
        text-decoration: underline;
        font-weight: bold;
      }
    }
  }

  footer {
    text-align: center;
    padding: 48px 0;
    color: rgb(107 114 128);
    font-size: var(--14px);
  }
`;

export const DocListWrapper = styled.div`
  h1 {
    display: none;
  }
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
