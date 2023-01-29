---
title: "React 18 Beta、React Location、wrangler 2"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01LYcoGL1y1kl9R2GpJ_!!6000000006519-0-tps-1600-1067.jpg"
titleImageCaption: "joshuaearle @ unsplash"
publishedAt: "2021/11/22"
---

## ❄️ TL;DR

👉 React 18 Beta<br />
👉 React Location<br />
👉 wrangler 2.0<br />
👉 Fruition<br />
👉 330 道 React 面试题<br />
👉 monorepo + esbuild<br />
👉 7 秒了解 async/await<br />
👉 webpack 5 15x slower<br />
👉 No-Code<br />
👉 React Code Review 10 问<br />

## ⚡ 展开讲讲

### React 18 Beta
https://github.com/reactwg/react-18/discussions/112

摘要，

- 正式版还要[数月](https://twitter.com/acdlite/status/1460385219178074112)
- Beta 版引入三个新 API，useSyncExternalStore、useId 和 useInsertionEffect
- 目前是 feature complete 阶段，正式版前不引入新功能
- 社区方面，Next.js、Gastby、React-Redux、Zustand、Apollo、Umi 4 等都会跟进支持 React 18 Beta

### React Location
https://react-location.tanstack.com/

![](https://img.alicdn.com/imgextra/i3/O1CN019aMWwD1qxu7YIqoTz_!!6000000005563-0-tps-1049-232.jpg)

react-router 终于有竞品了。

摘要，

- 作者是 Tanner Linsley，同时也是 React Query、React Table、React Charts 和 React Virtual 的作者
- powerful, enterprise-grade routing for React applications

功能包含，

- ⏳ Async Loaders & Elements
- 🔀 Parallelized
- ⏲️ Prefetching
- 🗄 Caching
- 🔎 1st-class Integrated Search Params API
- 🗂 Code-Splitting
- ⚠️ Error/Pending/Timing States
- 🪆 Nested Layouts

详见 https://twitter.com/tannerlinsley/status/1460274803139510278 。

### wrangler 2.0
https://blog.cloudflare.com/wrangler-v2-beta/

![](https://img.alicdn.com/imgextra/i1/O1CN01nEdbE31hHSse2Oe8p_!!6000000004252-0-tps-1200-675.jpg)

摘要，

- 无需配置，只要一个 JavaScript 即可上手 Cloudflare Workers
- 支持在 Chrome Devtool 里调试 Worker
- 支持本地调试，基于 [Miniflare](https://github.com/cloudflare/miniflare)

### Fruition
https://fruitionsite.com/

![](https://img.alicdn.com/imgextra/i3/O1CN01wNz3ed1T9JCe8IB1y_!!6000000002339-0-tps-240-240.jpg)

快速基于 Cloudflare Workers 和 Notion 搭建网站，抛开账号注册和域名准备，只要 10 分钟。



### 330 道 React 面试题
https://dev.to/aviyel/300-react-interview-questions-4dag

作者整理了 300 道 React 面试题。300 道！注意拉倒下面可以下完整版的 PDF。

### monorepo + esbuild
https://mmazzarolo.com/blog/2021-11-06-speed-up-your-typescript-monorepo-with-esbuild/

用 esbuild 和他的朋友们来加速 monorepo 流程，适用于 node 项目，

- 用 esbuild 来编译代码，跑测试和跑脚本
- 用 esbuild-runner 来直接跑 typescript 代码（注：esno 也可以）
- 用 tsc 来 type check 但不 emit，同时[不需要](https://turborepo.com/posts/you-might-not-need-typescript-project-references) TypeScript 的 [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) 保持更新
- 用 yarn workspace 管理 monorepo（注：pnpm workspace 也可以）
- 用 [ultra-runner](https://github.com/folke/ultra-runner) 跑 monorepo 脚本
- 共享 eslint 和 jest 配置

关于 npm 包的工程化问题，大家可以期待 12 月发布的 father 3，由 dumi 作者操刀，以上功能均包含在内，并且有更深入和系统的思考。

### 7 秒了解 async/await
https://twitter.com/manekinekko/status/855824609299636230

![](https://img.alicdn.com/imgextra/i2/O1CN01iP5NRk1WzvYdAXDq9_!!6000000002860-1-tps-960-720.gif)

从 callback 到 promise 到 async/await 。


### webpack 5 15x slower
https://engineering.tines.com/blog/understanding-why-our-build-got-15x-slower-with-webpack

![](https://img.alicdn.com/imgextra/i3/O1CN016Po0pM1IBdRWZOx3o_!!6000000000855-0-tps-1600-1017.jpg)
摘要，

- 通过 `node --inspect-brk ./node_modules/.bin/webpack` 用 Chrome Devtool + [Bottom Up View](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#bottom-up) 定位性能问题，找到最耗时的点
- 表面上看是 linaria 的问题，但本质上是 webpack 5 在处理 webpack 4 兼容时引入 Symbol.IsConcatSpreadable 导致的问题
- webpack 5.62 增加了 [experiments.backCompat](https://webpack.js.org/configuration/experiments/#experimentsbackcompat)，可以通过设置为 false 禁用此类兼容，从而避免这个问题

### No-Code
https://www.jotform.com/products/apps/e-book/

一本关于 No Code 的电子书。

### React Code Review 10 问
https://www.chakshunyu.com/blog/this-is-my-10-questions-react-code-reviewing-routine/

除了 5 和 6，其他是通用的，摘要如下，

1. 是否能跑？
1. 他做了什么？
1. 代码是否可读？
1. 某个 component/hook 是否做太多？
1. 某个 component/hook 是否有必要提取？
1. API 设计是否足够简单？
1. 有测试吗？
1. 测试有意义吗？
1. 有考虑可访问性吗？
1. 文档更新了吗？

补充几个，

1. 是否有 Prop Drilling？
1. Component、Hooks 和 Props 的命名是否合适？
1. useEffect 的 dependency 是否合理？
