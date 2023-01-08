import { Outlet, Link } from 'umi';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  header {
    display: flex;
    height: 128px;
    line-height: 128px;
    h1 {
      flex: 1;
      a {
        color: #282c34;
        text-decoration: none;
      }
    }
    nav {
      ul {
        display: flex;
        li {
          margin-left: 12px;
          font-size: 20px;
        }
      }
    }
  }
`;

export default function Layout() {
  return (
    <Wrapper>
      <header>
        <h1>
          <Link to="/">MDH 前端周刊</Link>
        </h1>
        <nav>
          <ul>
            <li>RSS</li>
            <li>Github</li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
}
