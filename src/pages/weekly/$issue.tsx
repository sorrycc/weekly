import { useParams, Link } from 'umi';
// @ts-ignore
import MarkdownIt from 'markdown-it';
import { usePost } from '@/hooks/usePost';
import { usePosts } from '@/hooks/usePosts';
import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const Wrapper = styled.div`
  display: flex;
  aside {
    width: 250px;
    margin-right: 24px;
    li {
      height: 32px;
      line-height: 32px;
      overflow: hidden;

      a {
        color: #282c34;
        text-decoration: none;
      }

      &.active a {
        color: #b5495b;
      }
    }
  }
  main {
    flex: 1;
    h1 {
      font-size: 32px;
    }
    div.publishedAt {
      margin-top: 12px;
      color: #666;
    }
    div.titleImage {
      margin-top: 24px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    div.titleImageCaption {
      margin-top: 12px;
      color: #666;
      text-align: center;
    }
  }
`;

const Post = styled.div`
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
    font-size: 28px;
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

const md = new MarkdownIt({
  linkify: true,
});

function Main() {
  const params = useParams();
  const postQuery = usePost(params.issue as string);
  if (postQuery.isLoading) return <p>loading...</p>;
  const {
    title,
    content,
    numberStr,
    publishedAt,
    titleImage,
    titleImageCaption,
  } = postQuery.data!;

  let html = md.render(content);
  const sp = new URLSearchParams(location.search);
  if (sp.has('__mp')) {
    html =
      `
<p
  style="font-weight: bold; color: blue;"
>
  Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 ${numberStr} 期，发表于
  ${publishedAt}，将为您带来最新的资讯和分享。
</p>
<p>注意：本文带有大量链接，推荐点击「查看原文」在语雀上查看。</p>
  ` + html;
  }
  html =
    html +
    `
<h2>小结</h2>
<p>
  如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们
  <a href="https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600#wechat_redirect">
    到这里来订阅
  </a>
  ，这是对我最大的帮助。下期见！
</p>
<p
  style="color: #b5495b"
>
  MDH，让开发者有笑容 :)
</p>
`;

  return (
    <main>
      <Helmet>
        <title>{`第 ${numberStr} 期 - MDH 前端周刊`}</title>
      </Helmet>
      <h1>
        第 {numberStr} 期：{title}
      </h1>
      <div className="publishedAt">发布日期：{publishedAt}</div>
      <div className="titleImage">
        <img src={titleImage} alt="headImg" />
      </div>
      <div className="titleImageCaption">题图：{titleImageCaption}。</div>
      <Post
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </main>
  );
}

function Sidebar() {
  const postsQuery = usePosts();
  const params = useParams();
  if (postsQuery.isLoading) return <p>loading...</p>;
  return (
    <aside>
      <ul>
        {postsQuery.data!.map((post) => {
          return (
            <li
              key={post.numberStr}
              className={clsx({
                active: post.numberStr === params.issue!.replace('issue-', ''),
              })}
            >
              <Link to={`/weekly/issue-${post.numberStr}`}>
                第 {post.numberStr} 期：{post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default () => {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
};
