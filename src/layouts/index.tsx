import { Outlet, Link } from 'umi';

export default () => {
  return (
    <div>
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
    </div>
  );
};
