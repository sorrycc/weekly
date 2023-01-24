import { Outlet, Link, useLocation } from 'umi';
import styled from 'styled-components';

const Wrapper = styled.div<{ isPost: boolean }>`
  max-width: 65ch;
  margin: 0 auto;

  header {
    padding-top: 6rem;
    padding-bottom: 3rem;
    h1 {
      font-weight: bold;
      font-size: ${(p) => (p.isPost ? '1rem' : '2.25rem')};
      a {
        text-decoration: none;
      }
    }
    nav {
      margin-top: 1.4rem;
      display: ${(p) => (p.isPost ? 'none' : 'flex')};
      gap: 1rem;
      a {
        text-decoration: underline;
        font-weight: bold;
      }
    }
  }

  footer {
    text-align: center;
    padding: 3rem 0;
    color: rgb(107 114 128);
    font-size: 0.875rem;
  }
`;

export default function Layout() {
  const location = useLocation();
  return (
    <Wrapper isPost={location.pathname.startsWith('/weekly/issue-')}>
      <header>
        <h1>
          <Link to="/">MDH Weekly</Link>
        </h1>
        <nav>
          <Link to="/weekly">周刊</Link>
          <a href="https://q.sorrycc.com/">知识星球</a>
          <a href="https://github.com/sorrycc/weekly/issues">投稿</a>
          <a href="/rss">RSS</a>
          <a href="https://github.com/sorrycc/weekly">Github</a>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>MDH Weekly since 2021</footer>
    </Wrapper>
  );
}
