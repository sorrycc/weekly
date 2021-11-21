# MDH 前端周刊第 29 期：React 18 Beta、React Location、wrangler 2

**这是 「MDH：前端周刊」 第 0029 期，发表于：2021/11/22。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://lh6.googleusercontent.com/UkwnUs-hgkLCjhyxBQYBydXMgRymzWpI0hSPye34ODzIougF-F0qRHQWIpizVpddLhM2MjpktVvrmuOnwDgN612IQldehToBR0cfiAkUoaJVCeVpoi9V30Jo9Q7s0GOza0RYTOQM#crop=0&crop=0&crop=1&crop=1&from=url&id=c6mIs&margin=%5Bobject%20Object%5D&originHeight=1067&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

封面图：joshuaearle @ unsplash。


## ❄️ TL;DR

👉 React 18 Beta<br />👉 React Location<br />👉 wrangler 2.0<br />👉 Fruition<br />👉 330 道 React 面试题<br />👉 monorepo + esbuild<br />👉 7 秒了解 async/await<br />👉 webpack 5 15x slower<br />👉 No-Code<br />👉 React Code Review 10 问<br />​

## ⚡ 展开讲讲

### React 18 Beta
[https://github.com/reactwg/react-18/discussions/112](https://github.com/reactwg/react-18/discussions/112)<br />​

摘要，

- 正式版还要[数月](https://twitter.com/acdlite/status/1460385219178074112)
- Beta 版引入三个新 API，useSyncExternalStore、useId 和 useInsertionEffect
- 目前是 feature complete 阶段，正式版前不引入新功能
- 社区方面，Next.js、Gastby、React-Redux、Zustand、Apollo、Umi 4 等都会跟进支持 React 18 Beta

​<br />

### React Location
[https://react-location.tanstack.com/](https://react-location.tanstack.com/)<br />![](https://lh5.googleusercontent.com/c2YKix6bB7FxOZHgq7d5PzYxtry1NHdpS1iDkhnc0vMj0qixkfd8hcTS-5NXG-J-Dw4Uadspen2YuZ7X7H9f0sKEIm7AYukagsoKS-5QXLZuVrNTd3eQxBXL_iM26uNBLSEbn7M4#crop=0&crop=0&crop=1&crop=1&from=url&id=TzRfC&margin=%5Bobject%20Object%5D&originHeight=232&originWidth=1049&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)​<br />react-router 终于有竞品了。

<br />摘要，

- 作者是 Tanner Linsley，同时也是 React Query、React Table、React Charts 和 React Virtual 的作者
- powerful, enterprise-grade routing for React applications

<br />功能包含，

- ⏳ Async Loaders & Elements
- 🔀 Parallelized
- ⏲️ Prefetching
- 🗄 Caching
- 🔎 1st-class Integrated Search Params API
- 🗂 Code-Splitting
- ⚠️ Error/Pending/Timing States
- 🪆 Nested Layouts

详见 [https://twitter.com/tannerlinsley/status/1460274803139510278](https://twitter.com/tannerlinsley/status/1460274803139510278)<br />​<br />

### wrangler 2.0
[https://blog.cloudflare.com/wrangler-v2-beta/](https://blog.cloudflare.com/wrangler-v2-beta/)<br />![](https://lh6.googleusercontent.com/DTmP008icBDlVkDxZx3cZejXlMaGmrAo_-SxPM_W_GH-HIZdiojyCngfTSVU33AkdS7KeIgs0GgYi9oBPmUq50yhKmyjqqAfWUuGsl3KR8qJVVbJOaPtN8HM-lKT28qtVxTDCPTQ#crop=0&crop=0&crop=1&crop=1&from=url&id=cKycD&margin=%5Bobject%20Object%5D&originHeight=675&originWidth=1200&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />摘要，

- 无需配置，只要一个 JavaScript 即可上手 Cloudflare Workers
- 支持在 Chrome Devtool 里调试 Worker
- 支持本地调试，基于 [Miniflare](https://github.com/cloudflare/miniflare)

​<br />

### Fruition
[https://fruitionsite.com/](https://fruitionsite.com/)<br />![](https://lh5.googleusercontent.com/wagMvYdEK3K9z6WxGkTt3hMwW-x7jMbNlEufdJk3ZCBadUaI6RwKZszra9N_Tmb0G-GflHks27Mvvcb04tVdPDxsDBMnQ6F_HKnq9CGQnJWRlfOzxJssnqv25j2yX-ROnkrZDrjQ#crop=0&crop=0&crop=1&crop=1&from=url&id=pEQCe&margin=%5Bobject%20Object%5D&originHeight=240&originWidth=240&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />快速基于 Cloudflare Workers 和 Notion 搭建网站，抛开账号注册和域名准备，只要 10 分钟。<br />​<br />

### 330 道 React 面试题
[https://dev.to/aviyel/300-react-interview-questions-4dag](https://dev.to/aviyel/300-react-interview-questions-4dag)<br />​

作者整理了 300 道 React 面试题。300 道！注意拉倒下面可以下完整版的 PDF。<br />​<br />

### monorepo + esbuild
[https://mmazzarolo.com/blog/2021-11-06-speed-up-your-typescript-monorepo-with-esbuild/](https://mmazzarolo.com/blog/2021-11-06-speed-up-your-typescript-monorepo-with-esbuild/)<br />​

用 esbuild 和他的朋友们来加速 monorepo 流程，适用于 node 项目，

- 用 esbuild 来编译代码，跑测试和跑脚本
- 用 esbuild-runner 来直接跑 typescript 代码（注：esno 也可以）
- 用 tsc 来 type check 但不 emit，同时[不需要](https://turborepo.com/posts/you-might-not-need-typescript-project-references) TypeScript 的 [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) 保持更新
- 用 yarn workspace 管理 monorepo（注：pnpm workspace 也可以）
- 用 [ultra-runner](https://github.com/folke/ultra-runner) 跑 monorepo 脚本
- 共享 eslint 和 jest 配置

<br />
关于 npm 包的工程化问题，大家可以期待 12 月发布的 father 3，由 dumi 作者操刀，以上功能均包含在内，并且有更深入和系统的思考。<br />​<br />

### 7 秒了解 async/await
[https://twitter.com/manekinekko/status/855824609299636230](https://twitter.com/manekinekko/status/855824609299636230)<br />​

从 callback 到 promise 到 async/await 。

### ![](https://lh3.googleusercontent.com/lXjxhRrDTu0-jRP0ff2YEymWIre1OXdbpCZGDg8-82JM8VgH6x32XgJgCYOMAzL1hyy9YHpmjFJfGflQ4NaNUMfyKMFNIaLJhShBAL24JeGaJqxDMW9-86SHcy46g6xQR3LP5UIC#crop=0&crop=0&crop=1&crop=1&from=url&id=CZ0zR&margin=%5Bobject%20Object%5D&originHeight=720&originWidth=960&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### webpack 5 15x slower
[https://engineering.tines.com/blog/understanding-why-our-build-got-15x-slower-with-webpack](https://engineering.tines.com/blog/understanding-why-our-build-got-15x-slower-with-webpack)<br />![](https://lh6.googleusercontent.com/p3UMUXhjIpdhA_4F1t0xIStOQdOWS7T6dQjCVskviUsX42pU7wFQUz_gA3_6duzK51o6YkLYTZAlYdN8iLIonv2vXKXSCaVgW2938MdVYca--jfsln5jaIoaJzAY8criz5kXQOu5#crop=0&crop=0&crop=1&crop=1&from=url&id=mi3W8&margin=%5Bobject%20Object%5D&originHeight=1017&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)​<br />摘要，<br />​<br />

- 通过 node --inspect-brk ./node_modules/.bin/webpack 用 Chrome Devtool + [Bottom Up View](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#bottom-up) 定位性能问题，找到最耗时的点
- 表面上看是 linaria 的问题，但本质上是 webpack 5 在处理 webpack 4 兼容时引入 Symbol.IsConcatSpreadable 导致的问题
- webpack 5.62 增加了 [experiments.backCompat](https://webpack.js.org/configuration/experiments/#experimentsbackcompat)，可以通过设置为 false 禁用此类兼容，从而避免这个问题

​<br />

### No-Code
[https://www.jotform.com/products/apps/e-book/](https://www.jotform.com/products/apps/e-book/)<br />​

一本关于 No Code 的电子书。<br />​<br />

### React Code Review 10 问
[https://www.chakshunyu.com/blog/this-is-my-10-questions-react-code-reviewing-routine/](https://www.chakshunyu.com/blog/this-is-my-10-questions-react-code-reviewing-routine/)<br />​

除了 5 和 6，其他是通用的，摘要如下，<br />​<br />

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

<br />补充几个，

1. 是否有 Prop Drilling？
1. Component、Hooks 和 Props 的命名是否合适？
1. useEffect 的 dependency 是否合理？

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
