import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/analytics',
    '@umijs/plugins/dist/styled-components',
    '@umijs/plugins/dist/react-query',
    'umi-plugin-docaid',
  ],
  links: [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'MDH Weekly 前端周刊',
      href: 'https://mdhweekly.com/rss.xml',
    },
  ],
  analytics: {
    ga_v2: 'G-JJ5DHZ4KZ9',
  },
  styledComponents: {},
  reactQuery: {},
  docaid: {
    title: 'MDH Weekly 前端周刊',
    headTitle: 'MDH Weekly',
    siteUrl: 'https://mdhweekly.com/',
    // @ts-ignore
    transform(doc: any) {
      const numberStr = doc.file.match(/issue-(\d+)\.md/)![1];
      return {
        ...doc,
        metaTitle: `第 ${numberStr} 期：${doc.title}`,
        number: parseInt(numberStr, 10),
        numberStr,
        html: `
${doc.html}
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
`.trim(),
      };
    },
    navs: [
      { title: '往期周刊', path: '/weekly' },
      { title: '知识星球', href: 'https://q.sorrycc.com/' },
      { title: '深度文章 RSS', href: '/articles.xml' },
      { title: 'RSS', href: '/rss.xml' },
      { title: 'Github', href: 'https://github.com/sorrycc/weekly' },
    ],
    copyright: 'MDH Weekly since 2021',
    rss: {
      weekly: {
        default: true,
        feedOpts: {
          image:
            'https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png',
          copyright: 'MDH Weekly since 2021',
          author: {
            name: 'Chen Cheng',
            email: 'sorrycc@gmail.com',
            link: 'https://sorrycc.com/',
          },
        },
        transform(data: any, { doc }: any) {
          return {
            ...data,
            title: `第 ${doc.numberStr} 期：${doc.title}`,
          };
        },
      },
    },
  },
  favicons: [
    'https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png',
  ],
  // why set false?
  // 开启后，会拦截 .json 请求，然后访问 /posts.json 会一直走缓存不生效
  mfsu: false,
  hash: true,
});
