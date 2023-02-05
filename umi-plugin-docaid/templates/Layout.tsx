import { Outlet, useLocation, useDocAidConfig, useDocAidTheme } from 'umi';

export function DefaultLayout() {
  const location = useLocation();
  const { headTitle, navs, copyright } = useDocAidConfig();
  const config = useDocAidConfig();
  const theme = useDocAidTheme();
  const { pathname } = useLocation();
  const activeNav = config.navs.find((nav) => nav.path === pathname);
  return (
    <theme.LayoutWrapper
      $isPost={location.pathname.startsWith('/weekly/issue-')}
    >
      <header>
        <div>
          <theme.HeadTitle headTitle={headTitle} />
          <theme.Navs activeNav={activeNav} navs={navs} />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <theme.Footer copyright={copyright} />
    </theme.LayoutWrapper>
  );
}

export default function Layout() {
  const theme = useDocAidTheme();
  const Component = theme.Layout || DefaultLayout;
  return <Component />;
}
