---
title: "webpack-dev-server 4、astro 0.19、图解 Context 渲染、真实世界的 css-in-js"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01Ip6Ei51nWvqJOhjeY_!!6000000005098-0-tps-1920-1280.jpg"
titleImageCaption: "robsonhmorgan @ unsplash"
publishedAt: "2021/08/23"
---

## ❄️ TL;DR

👉 webpack-dev-server 4<br />
👉 astro 0.19<br />
👉 图解 Context 渲染<br />
👉 真实世界的 css-in-js<br />
👉 未捕获的异步错误<br />
👉 Marc Andreessen 的效率指南<br />

## ⚡ 展开讲讲

### webpack-dev-server 4
https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0

大量配置变更，对我来说主要是支持了 webpack 5 的 lazyCompilation。

### astro 0.19
https://astro.build/blog/astro-019

![](https://img.alicdn.com/imgextra/i1/O1CN01s9ouA11WUK7ZOIiiF_!!6000000002791-2-tps-1018-360.png)

包含，

1. **Next.js-inspired routing**，支持动态路由，比如 `src/pages/[slug].astro`，然后导出 `getStaticPaths` 声明路径列表，和 Next.js 的方式如出一辙
2. **`client:only` 指令**，有些组件比如 D3 依赖 window 不可能走 SSR，可通过该指令声明，比如 `<MyReactComponent client:only />`
3. **`Astro.resolve()`**，支持引用相对路径的 assets 文件，比如 `<img src={Astro.resolve('../images/logo.png')} />`，之前只能放 `public` 目录然后用绝对路径引
4. Github 官方支持 `.axios` 文件及其高亮，CodeSandbox 也已支持，[Webstorm 尚未支持](https://youtrack.jetbrains.com/issue/WEB-52015)

可能还有同学不知道 Astro 是啥，

1. 定义： **静态站点构建工具**，极快性能，现代 DX
2. **BYOF**，支持你的框架，包含 React, Svelte, Vue, Preact, web components, 甚至 HTML + JavaScript
3. 接近**100% 静态 HTML，没有 JS**
4. 有些场景 JavaScript 还是不可避免的，比如轮播、购物车、搜索自动完成等，Astro 会针对这些组件在 **可见** 时加载 **组件依赖的脚本**，即 **HTML-first, JavaScript-only-as-needed**，这叫 [Partial Hydration](https://addyosmani.com/blog/rehydration/)，这种架构叫 [Islands Architecture](https://jasonformat.com/islands-architecture/)，正是 Astro 和其他静态站点工具的差别点
5. 作者认为，性能差大概率不是开发者的问题，而是工具的问题。而 Astro 的目标是让站点 “fast by default”，让构建慢站点变得困难
6. Astro 背后的团队是 Snowpack 和 Skypack 的团队（怪不得我看工具是 Snowpack）

### 图解 Context 渲染
https://alexsidorenko.com/blog/react-render-context/

![](undefined)

Alex Sidorenko React Render 系列文章的第 5 篇。如果已看完前四篇，这篇其实没啥新内容，之前的概念套到 Context 里一样适用。比如：

1. Context Provider 下的 React 组件得 memo 下
2. 引用类型属性会导致 rerender，解法是拍平或者 useMemo 下
3. 等等

### 真实世界的 css-in-js
https://pustelto.com/blog/css-vs-css-in-js-perf/

tl;dr

1. **好的 DX 不应以 UX 为代价**
2. 作者把他的项目从 Styled Component 迁移到 [Linaria](https://linaria.dev/)，前者是 Runtime CSS-in-JS 方案，后者是 Buildtime CSS-in-JS 方案，会在 build 时提取 css，也叫 0 runtime
3. 对比结果是 Runtime CSS-in-JS 全面落败，在 Slow 3G 环境下，加载时间多的有 1s+ 的差距，还是有点大
4. 想起我们在做大促时，也遇到 JS 加载 CSS 且 CSS 比较大会有严重的性能问题，后来加了 extract-css-webpack-plugin 就解了
5. 一个结论是 **Simply less JS = Faster Site**，如果你在意站点的加载时间，不要用含 runtime 的 CSS-in-JS

### 未捕获的异步错误
https://advancedweb.hu/how-to-avoid-uncaught-async-errors-in-javascript/

tl;dr

1. 未捕获的错误不仅是显示在命令行里的警告信息，本质上说明了代码在某些场景的没考虑到和不可靠
2. 非 Promise（同步）错误未捕获报 `Uncaught Error: <msg>`，Promise 错误（异步）未捕获报 `(node:29493) UnhandledPromiseRejectionWarning: Error: <msg>`
3. 一类常见错误是 async 外包 try...catch，比如 `try { (async(){ throw new Error('foo') })(); } catch(e) {}` ，结果是不能捕获，原因是 try...catch 只能捕获同步的，同理，setTimeout 执行的函数报错也不能捕获，`setTimeout(() => { throw new Error('xx'); }, 1000);` 
4. 两个解法，1) 在里面 async 函数体内 try...catch 2) 用 .catch，因为 async 返回的是 Promise
5. async 不行，但 await 还是可以 try...catch 的
6. 不要在 forEach 里用 async，`forEach(async () => {})`，因为 catch 不住，可改成 `await Promise.all([].map(async () => {})`，就能 catch 了
7. Promise 链也得注意，`.then(onSuccess, onError)` 然后在 onSuccess 里抛错是不会被 onError 捕获到的，应该改成 `.then(onSuccess).catch(onError)`
8. ![image](https://img.alicdn.com/imgextra/i2/O1CN01j0ElKl1VrqqonmpDJ_!!6000000002707-2-tps-1024-613.png)
9. 有时我们会用早点初始化 Promise + 迟点 await 的方式实现并行，比如 `const p1 = delay(3000).then(() => { throw new Error('x') }); await delay(2000); await p1;`，这个 x 也不会被捕获到，因为只有 await 会停止异步 Promise，解法是改用 `await Promise all([])` 实现并行
10. Event Listener 里经常会漏加 try...catch，从而出现未捕获错误
11. `new Promise()` 构造器里如果在 `setTimeout` 回调里报错也不会被捕获，比如 `new Promise(() => { setTimeout(() => { throw new Error('foo') }, 1000) }).catch(e => {})`，解法是用 `.then` 拆到不同的阶段里，比如  `new Promise((resolve) => setTimeout(resolve, 1000)).then(() => { throw new Error('foo') }).catch(e => {})`

### Marc Andreessen 的效率指南
http://www.kejilie.com/jiasuhui/article/AZrm2a.html

> 这期开始，每期加一个非技术类的分享。

Marc Andreessen 是硅谷著名风投机构 A16Z 的联合创始人，以下是他的一些效率指南，

1. **不要预定任何日程**，这样可以永远在当下这个时刻做对你来说最重要或最感兴趣的事情
2. **有且仅有三个任务列表**，TODO、Watch（观察）和 Later（稍后）
3. **睡前写下明日 3-5 件事，第二天醒来就做这 3-5 件事**，如果做到了就认为是成功的一天
4. **结构化拖延**，不抵抗拖延，而把拖延期间的时间用来做其他的事情，这是一种策略
5. **策略性无能（认怂）**，一次性把事情做砸，然后别人就再也不叫你做这件事了，比如组织公司聚会、收发快递、配女朋友逛街等
6. **一天只处理两次邮件**，处理这类信息会带来完成的快感，但很可惜这些事情都是不太紧急多半不重要的，可以试着把微信和钉钉这么处理
7. **藏在耳机中**，人们对于打扰一个戴耳机的人会更有负罪感
8. **不要轻易答应**，很多时候大脑同意的时候，心里是不同意的。但是由于拒绝很难受，就会口是心非的答应。然后自己的时间就被堆积满了别人发起的邀请，而忽略了自己真正重要的事情
