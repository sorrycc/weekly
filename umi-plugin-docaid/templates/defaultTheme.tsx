import { Link, styled, useDocAidConfig } from 'umi';

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
        return nav.path ? (
          <Link key={index} to={nav.path}>
            {nav.title}
          </Link>
        ) : (
          <a key={index} href={nav.href}>
            {nav.title}
          </a>
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
