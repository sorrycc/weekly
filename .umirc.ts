import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/analytics',
    '@umijs/plugins/dist/styled-components',
    '@umijs/plugins/dist/react-query',
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
  favicons: [
    'https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png',
  ],
  // why set false?
  // 开启后，会拦截 .json 请求，然后访问 /posts.json 会一直走缓存不生效
  mfsu: false,
  hash: true,
  chainWebpack(config: any) {
    const REG = /\.md$/;
    config.module.rule('asset').exclude.add(REG).end();
    config.module.rule('md').test(REG).type('asset/source').end();
  },
  define: {
    LAST_PUBLISHED_AT: require('./public/posts.json')[0].publishedAt,
    LAST_NUMBER: require('./public/posts.json')[0].number,
  },
});
