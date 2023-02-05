import styled from 'styled-components';

export const Article = styled.article`
  line-height: 1.6;
  a {
    &:visited {
      color: purple;
    }
  }
  ul {
    list-style: circle;
    padding-left: 20px;
  }
  h2 {
    font-size: 1.75rem; /* 28px */
    font-weight: bold;
    margin-top: 50px;
  }
  p {
    margin: 20px 0;
    code {
      padding: 0.2em 0.4em;
      background: #eff1f3;
      white-space: break-spaces;
    }
  }
  code {
    font-size: 85%;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
  }
  pre {
    border: 1px solid #eff0f1;
    padding: 10px 1em;
    overflow: auto;
    line-height: 1.45;
  }
  img {
    display: block;
    margin: 20px auto;
    max-width: 100%;
  }
  blockquote {
    border-left: 4px solid #dfe2e5;
    color: #6a737d;
    padding-left: 16px;
  }
`;

export const Doc = styled.div`
  flex: 1;
  position: relative;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  h1 {
    font-size: 2.25rem; /* 36px */
    line-height: 1.2;
    padding-bottom: 24px;
    font-weight: 800;
  }
  div.publishedAt {
    margin-top: 12px;
    color: #666;
    font-style: italic;
  }
  div.headImg {
    margin-top: 32px;
    img {
      width: 100%;
      vertical-align: middle;
    }
    .caption {
      margin-top: 12px;
      color: #666;
      text-align: center;
    }
  }
`;

export const Toc = styled.div`
  position: sticky;
  top: 0;
  height: 0;
  & > div {
    position: absolute;
    right: -440px;
    top: 20px;
    width: 400px;
    padding-left: 20px;
    border-left: 3px solid #e3e3e3;
    line-height: 2;
    font-size: 0.875rem; /* 14px */
  }
  a {
    color: #666;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
