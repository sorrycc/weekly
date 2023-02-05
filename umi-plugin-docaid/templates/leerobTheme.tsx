import { styled, useDocAidConfig, Link } from 'umi';

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
          background: rgb(245 245 245);
          border-radius: 0.375rem;
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
