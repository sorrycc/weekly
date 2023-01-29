import { Helmet } from 'react-helmet';
import React from 'react';
import { Doc } from 'docaid/client';
import { useDoc } from './useDoc';

export default () => {
  const postQuery = useDoc<any>();
  if (postQuery.isLoading) return <p>loading...</p>;
  const {
    title,
    html: originHtml,
    toc,
    numberStr,
    publishedAt,
    titleImage,
    titleImageCaption,
  } = postQuery.data || {};
  const sp = new URLSearchParams(location.search);
  let html = originHtml;
  if (sp.has('__mp')) {
    html =
      `
<p
  style="font-weight: bold; color: blue;"
>
  ⚡ Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 ${numberStr} 期，发表于
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
    <>
      <Helmet>
        <title>{`第 ${numberStr} 期：${title} - MDH 前端周刊`}</title>
      </Helmet>
      <Doc
        title={{
          content: title!,
          balance: true,
        }}
        publishedAt={publishedAt}
        headImg={{
          src: titleImage!,
          alt: titleImageCaption,
        }}
        toc={{
          data: toc!,
          leftPadding: 40,
        }}
        contentHtml={html}
      />
    </>
  );
};
