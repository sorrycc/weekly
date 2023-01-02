# MDH 前端周刊第 41 期：State of JS 2021、约定式路由、配置读取的 AOT 和 JIT、Parcel CSS

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1gzk18thmx6j21hc0u07fq.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：地平线 西之绝境。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0041 期，发表于 2022/02/21。</p>

本期主要内容有这些：

- State of JS 2021
- 拍平的约定式路由
- TypeScript 配置读取的 AOT 和 JIT
- Next.js vs. Remix
- 10 个 React TypeScript 贴士
- Parcel CSS 入门
- Github Mermaid
- rich-textarea

## State of JS 2021
https://2021.stateofjs.com/zh-Hans/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzk6je9wwoj214y0icabm.jpg)

相比 5 年前，使用 TypeScript 的从 21% 升到 69% ；前端框架虽然变化快，但 React 和 Vue 也已占据框架榜 6 年多，反馈 JS 变化快的开发者从 59% 降低到 38%。

ES 新特性中，Optional Chaining 和 Nullish Coalescing 成为新 API 中使用率最高的，如果你还没用过，建议试试。

Vite 2021 年满意度 98%，同时占据 30% 的使用率；工具迭代飞快，12 个统计中的工具有 8 个是近两年出现的；monorepo 是今年新加入统计类目，包含 pnpm、Turborepo 和 Nx 等，满意度为 25%，说明这部分可以做的事还很多。

## 拍平的约定式路由
https://gist.github.com/jamiebuilds/86d467ee4353cb316edce8e69ad19237

现在约定式路由是把 url 映射到文件系统，所以 url 什么样文件系统就什么样，这样能快速找到文件，比如 foo/bar 通常是在 pages/foo/bar.tsx，但却不能在一个地方看到所有路由。

jamiebuilds 关于约定式路由的想法个人很喜欢，通过把文件系统拍平的方式解上述问题，这样就能在 pages 目录下看到所有路由，见下图。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzk32jkss6j210y0luadg.jpg)

## TypeScript 配置读取的 AOT 和 JIT
https://github.com/gatsbyjs/gatsby/discussions/34613

Gastby 采取的方式是 AOT。用 Parcel 编译 gastby-config.ts 和 gastby-node.ts 到 .cache/compiled 目录，然后 Gastby 从 .cache/compiled 目录去找配置。

对比下，Umi 采取的方式是 JIT。通过 hook require.extensions，遇到 .ts 文件时用 esbuild 编译，也可用成熟库 pirates 处理 hook。

AOT 的缺点是实现难度高，初始速度相对较慢；JIT 的缺点是潜在的运行时内存消耗，require extensions 不能面向未来支持 ESM。你喜欢哪种？

## Next.js vs. Remix
https://blog.bitsrc.io/remix-vs-next-js-a-detailed-comparison-6ff557f7b41f

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzkbh7szolj212w0mymy9.jpg)

作者从路由、数据加载、Session 和 Cookie 的使用、部署、样式 5 个维度进行对比。

Remix 在 2021 取得很好的成绩，但 Next.js 明显还是拥有更多的用户量和开发资源，毕竟 Vercal 最近招了太多人。作者建议 Remix 可以先在个人网站和玩具型站点上应用，对于生产应用来说，还是采用 Next.js。

## 10 个 React TypeScript 贴士
https://dev.to/alexomeyer/10-must-know-patterns-for-writing-clean-code-with-react-and-typescript-1m0g

作者给了 10 个写 React + TypeScript 时让代码更简洁的贴士，前三个是，

1、使用 default import 来 import React，比如 `import React from 'react'`，而不是 `import * as React from 'react'`，记得在 tsconfig.json 中加上 `esModuleInterop: true`

2、在实现之前声明类型，不要在实现代码中间夹类型定义。前置声明可以让其他人读你代码时，一眼就能了解当前组件的 API 等

3、显式声明 children Props，比如 `type Props = { children: React.ReactNode }`，因为有太多可选，声明后对于使用者更友好

## Parcel CSS 入门
https://blog.logrocket.com/getting-started-parcel-css/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzk1zy21tlj21100eugmp.jpg)

Parcel CSS 出自 Parcel 团队，基于 Rust，具备 CSS 的解析、编译、压缩和打包能力，上图是作为压缩器，其与 CSSNano 和 ESBuild 速度的对比。

```js
const css = require('@parcel/css');
let {code, map} = css.transform({
  filename: 'style.css',
  code: Buffer.from('.foo { color: red }'),
  minify: true,
  sourceMap: true,
  targets: {
    safari: (13 << 16) | (2 << 8)
  }
});
```

这周发布的 Parcel 1.3 还支持了 Bundle 能力。

## Github Mermaid
https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzk2rrexdzj20xc0hidgs.jpg)

Github 支持 Markdown 里用 Mermaid 画图。Mermaid 目的是做文档的图形化，支持的图表非常丰富，包括流程图、时序图、甘特图、类图、状态图、饼图、行程图等。

## rich-textarea
https://github.com/inokawa/rich-textarea

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzkc353kaog20qi0dkhdu.gif)

基于 React 的自定义 textarea，支持颜色、高亮、文本装饰、自动完成等。

## 发布

以下是上周社区的重要发布。

- [Umi 发布 4.0.0-rc.2](https://github.com/umijs/umi-next)，修复 rc.1 发布后的大量问题，包括 windows 支持问题、loading 组件配置、全局样式和脚本支持等
- [Vercal Cli 发布 24](https://vercel.com/changelog/vercel-cli-v24)，新增 vercel bisect 用于自查、vercel dev 已稳定、基于 TypeScript 重构
- [Next.js 发布 12.1](https://nextjs.org/blog/next-12-1)，支持按需 ISR、SWC 支持 styled-components 和 replay、0 配置 Jest 支持
- [Deno 发布 1.19](https://deno.com/blog/v1.19)，新增 deno vendor 用于锁定 import-maps
- [Remix 发布 1.2](https://github.com/remix-run/remix/releases/tag/v1.2.0)，新增 serverBuildTarget 配置简化 server 接入
- [Tauri 发布 1.0 RC](https://dev.to/tauri/tauri-10-release-candidate-53jk)，期待已久
- [Midway 发布 3.0](https://mp.weixin.qq.com/s/b2CpCCE3-10JB-JkQpCgwg)，新路由和新全栈套件
- [Parcel CSS 发布 1.3](https://github.com/parcel-bundler/parcel-css/releases/tag/v1.3.0)，支持 Bundle，相比上个版本快 5%，尺寸减少近一半
- swc 发布新版，支持新的 transform 插件，[意见收集中](https://github.com/swc-project/swc/discussions/3540)

## 推广

我在知识星球开了个专栏，付费的那种。专栏名叫「云谦和他的朋友们」。截止 2022.2.21 已有 200+ 朋友加入，写了 52 篇日更，35 篇每日前端资讯简报，还有大量问题回复。

以下是上周的 5 篇日更。

- 53 - 《如何在 CJS 中使用 Pure ESM 依赖》
- 54 - 《unified、remark、rehype 和 mdx》
- 55 - 《Mermaid》
- 56 - 《App 推荐：Espanso》
- 加更：如果我写「前端工程化」小册，大纲会怎么组织
- 57 - 《当我们聊工程化时，我们在聊什么？》

<p style="color:#b5495b;"><a style="color:#b5495b;" href="https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247484448&idx=1&sn=3195bb82d2d2b7d58305c4f1aeae5e0d">点击此处查看详情</a>或扫下方二维码加入。</p>

![](https://tva1.sinaimg.cn/large/008i3skNly1gzc9tn5k6yj30u011xdj6.jpg)

## 小结

以上就是本期我的分享。如果需要文内资讯的链接，请点击「查看原文」。持续更新不易，如果你喜欢本周刊，请转发给你的朋友，告诉他们到这里来订阅，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
