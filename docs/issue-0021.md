# MDH 前端周刊第 21 期：Rome ❤️ Rust、推断式预渲染、motion

**这是 「MDH：前端周刊」 第 0021 期，发表于：2021/09/27。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01kyG3kF1SGnyGn4S45_!!6000000002220-0-tps-1920-1280.jpg)

封面图：silasbaisch @ www.unsplash.com 。


## ❄️ TL;DR

👉 Rome ❤️ Rust<br />
👉 推断式预渲染<br />
👉 esbuild 0.13<br />
👉 rollup 2.57<br />
👉 ts-pattern<br />
👉 motion<br />

## ⚡ 展开讲讲

### Rome ❤️ Rust
https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust

Rome 做了一些调研，计划用 Rust 重写，切换到 Rust 不仅在性能、内存、安全方面有优势，由于可放心使用三方依赖，生产力方面也没有落下。同时在基础设施上做了一些改变，加入 CST，带来的好处比如可以处理不完整的代码，不改变源信息实现对树的修改等。

### 推断式预渲染
https://web.dev/speculative-prerendering/

摘要，

1. preconnect 和 preload 是声明式，prefetch 和 prerender 是推断式
2. 推断式比如文章的搜索列表页，用户比较可能会点顶部的链接，点过去再返回列表页，则比较可能会点前一篇文章下面的链接
3. prefetch 比如 `<link rel="prefetch" href="/results/" as="document">`，可声明文档或同源的 JS、CSS 资源，浏览器闲置时预先 fetch，在缓存池里放 5 分钟
4. prerender 比如 `<link rel="prerender" href="/next-page/">`，可声明文档，浏览器闲置时 prerender，用地好能带来即时跳转的体验
5. chrome 第一版的 prerender 实现有内存和性能问题，Chrome 63 以后换成 no-state prefetch 的方式，加载所有资源但不执行 JavaScript 和真实意义的渲染，内存从 100M 降低到 45M
6. 相关的三方库有 Quicklink 和 Guess.js。前者基于 Intersection Objserver API 判断链接是否在视图中来决定是否 prefetch；后者基于 Google Analytics 或类似服务提供的数据决定 prefetch 哪些

### esbuild 0.13
https://github.com/evanw/esbuild/releases/tag/v0.13.0

摘要，

1. 支持强行开启或关闭 esbuild，相比之前的自动识别给予了更多掌控权
2. 使用 optionalDependencies 安装不同平台依赖，相比之前用的 post-install 脚本更通用，并且没了边界场景的问题，使用时注意选择 npm client 或者 cnpm（>= 7.1.0 版本），目前 yarn 暂不支持，会下全量包，慢一点，但不影响使用

esbuild 的发布邮件每次都能学到点新东西。

### rollup 2.57
https://github.com/rollup/rollup/releases/tag/v2.57.0

支持通过 `output.generatedCode="es2015"` 配置 helpers 和 wrappers 里的产物为 es2015 语法，比如 const 和箭头函数。

### ts-pattern
https://github.com/gvergnaud/ts-pattern

The exhaustive Pattern Matching library for TypeScript with smart type inference.

```javascript
import { match, select } from 'ts-pattern';

type Data =
  | { type: 'text'; content: string }
  | { type: 'img'; src: string };

type Result =
  | { type: 'ok'; data: Data }
  | { type: 'error'; error: Error };

const result: Result = ...;

return match(result)
  .with({ type: 'error' }, (res) => `<p>Oups! An error occured</p>`)
  .with({ type: 'ok', data: { type: 'text' } }, (res) => `<p>${res.data.content}</p>`)
  .with({ type: 'ok', data: { type: 'img', src: select() } }, (src) => `<img src=${src} />`)
  .exhaustive();
  ```

### motion
https://motion.dev/

动画库，基于 Web Animations API 实现，在尺寸和性能方面考虑较多。sponsor-only repo，默认不开源码，Sponsor $5/month 后才有源码权限。  

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
