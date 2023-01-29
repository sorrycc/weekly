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
  h1 {
    font-size: 2.25rem; /* 36px */
    line-height: 1.2;
    padding-bottom: 24px;
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
