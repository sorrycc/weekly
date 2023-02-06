import { styled, useDocAidConfig, Link } from 'umi';
import { Fragment, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// https://www.framer.com/motion/layout-animations/###border-radius-or-box-shadows-are-behaving-strangely
const NavLinkBackgroundMotion = styled(motion.div)`
  border-radius: 0.375rem;
`;

export const LayoutWrapper = styled.div<{ $isPost: boolean }>`
  max-width: 52rem;
  margin: 8rem auto 10rem;
  display: flex;

  header {
    width: 150px;
    // for position: sticky
    height: 300px;
    > div {
      top: 5rem;
      position: sticky;
    }
    h1 {
      margin-bottom: 2rem;
      padding: 0 5px;
      a {
        text-decoration: none;
      }
    }
    nav {
      a {
        display: inline-block;
        padding: 5px 10px;
        font-family: '__kaisei_a0a918', '__kaisei_Fallback_a0a918';
        text-decoration: none;
        color: #737373;
        &.active {
          color: rgb(38 38 38);
        }
        &:hover {
          color: rgb(38 38 38);
        }
      }
    }
  }
  main {
    flex: 1;
  }
  footer {
    display: none;
  }
`;

export const globalCSS = `
@font-face{font-family:__kaisei_a0a918;src:url(https://leerob.io/_next/static/media/d86fbdfc3d1edd6f-s.p.woff2) format("woff2");font-display:swap;font-weight:700}@font-face{font-family:__kaisei_Fallback_a0a918;src:local("Arial");ascent-override:105.78%;descent-override:26.26%;line-gap-override:0.00%;size-adjust:109.66%}
main h1 {
  font-family: '__kaisei_a0a918', '__kaisei_Fallback_a0a918';
  font-size: 1.875rem !important;
}
`;

export const DocListWrapper = styled.div`
  ul {
    margin: 20px 0;
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

export const HeadTitle = (props: any) => {
  const config = useDocAidConfig();
  return (
    <h1>
      <Link to="/">
        <img src={config.logo} width="60" />
      </Link>
    </h1>
  );
};

export const Navs = (props: any) => {
  const { navs } = useDocAidConfig();
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
    }
  }, [])

  return (
    <nav>
      {(props.navs || navs).map((nav: any, index: number) => {
        let className = undefined;
        const isActive =
          nav.path && props.activeNav && props.activeNav.path === nav.path;
        if (isActive) {
          className = 'active';
        }
        return (
          <Fragment key={index}>
            {nav.path ? (
              <div>
                <Link
                  to={nav.path}
                  className={className}
                  style={{ position: 'relative' }}
                >
                  {nav.title}
                  {isActive && (
                    <NavLinkBackgroundMotion
                      layoutId="nav-link-background"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        background: 'rgb(245 245 245)',
                        zIndex: -1,
                      }}
                      animate={{
                        width: '100%',
                        opacity: 1
                      }}
                      initial={mountedRef.current ? false : {
                        width: 0,
                        opacity: 0.2
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
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
