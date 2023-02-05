import { Outlet, useLocation, useDocAidConfig, useDocAidTheme } from 'umi';

export function DefaultLayout() {
  const location = useLocation();
  const { headTitle, navs, copyright } = useDocAidConfig();
  const theme = useDocAidTheme();
  return (
    <theme.LayoutWrapper
      $isPost={location.pathname.startsWith('/weekly/issue-')}
    >
      <header>
        <theme.HeadTitle props={{ headTitle }} />
        <theme.Navs props={{ navs }} />
      </header>
      <main>
        <Outlet />
      </main>
      <theme.Footer props={{ copyright }} />
    </theme.LayoutWrapper>
  );
}

export default function Layout() {
  const theme = useDocAidTheme();
  const Component = theme.Layout || DefaultLayout;
  return <Component />;
}
