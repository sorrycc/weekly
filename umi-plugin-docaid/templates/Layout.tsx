import { Outlet, Link, useLocation, styled, useDocAidConfig } from 'umi';

const Wrapper = styled.div<{ isPost: boolean }>`
  max-width: 65ch;
  margin: 0 auto;

  header {
    padding-top: 90px;
    padding-bottom: 46px;
    h1 {
      font-weight: bold;
      font-size: ${(p) => (p.isPost ? 'var(--16px)' : 'var(--36px)')};
      a {
        text-decoration: none;
      }
    }
    nav {
      margin-top: 20px;
      display: ${(p) => (p.isPost ? 'none' : 'flex')};
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

export default function Layout() {
  const location = useLocation();
  const { headTitle, navs, copyright } = useDocAidConfig();
  return (
    <Wrapper isPost={location.pathname.startsWith('/weekly/issue-')}>
      <header>
        <h1>
          <Link to="/">{headTitle}</Link>
        </h1>
        <nav>
          {navs.map((nav, index) => {
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
      </header>
      <div>
        <Outlet />
      </div>
      <footer>{copyright}</footer>
    </Wrapper>
  );
}
