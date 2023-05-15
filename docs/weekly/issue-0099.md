---
title: "jQuery 3.7、Vue 3.3、Deopt Explorer、粘性菜单、Remix、SSC"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01jO672q21ohyPcdBIi_!!6000000007032-2-tps-2346-1212.png_1200x1200.jpg"
titleImageCaption: "王国之泪"
publishedAt: "2023/05/15"
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔。

 - Vue [v3.3](https://xlog.sxzz.moe/vue-3-3) 新特性详解。
 - Github 启用新[代码搜索](https://github.blog/changelog/2023-05-08-the-new-code-search-and-code-view-is-now-generally-available/)。
 - Firefox [v113](https://www.mozilla.org/en-US/firefox/113.0/releasenotes/) 发布，优化搜索等。
 - lerna [v7.0.0-alpha.0](https://github.com/lerna/lerna/releases/tag/7.0.0-alpha.0) 发布，默认使用 nx 等。
 - CodeSandbox 支持 [Tailwind](https://twitter.com/CompuIves/status/1656359660230971395) 提示。
 - [Svelte](https://twitter.com/Rich_Harris/status/1656381997348995074) 迁移 TS 至 JSDoc 。
 - Vue Router [v4.2.0](https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md) 发布，守卫中可获取数据。
 - Github mobile 支持编辑 [workflow](https://github.blog/changelog/2023-05-11-edit-workflow-files-on-github-mobile/) 文件。
 - Vercel [即时回滚](https://vercel.com/changelog/instant-rollback-is-now-available-to-revert-deployments)普遍可用。
 - 网络平台新增 [Baseline](https://web.dev/introducing-baseline/) 规范。
 - Remix Conf [2023](https://www.youtube.com/watch?v=wobP9yhrmhQ) 举行。
 - CSS in [2023](https://developer.chrome.com/en/blog/whats-new-css-ui-2023/) 。
 - esbuild [v0.17.19](https://github.com/evanw/esbuild/releases/tag/v0.17.19) 发布，修正 CSS 嵌套等。
 - Rome [v12.1.0](https://github.com/rome/tools/releases/tag/cli%2Fv12.1.0) 发布，支持装饰器等。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《使用 Deno 在 Rust 中运行 JavaScript》](https://austinpoor.com/blog/js-in-rs)。本文介绍了作者创建的一个名为 “js-in-rs” 的基于 Rust 的 CLI 工具，用于使用 JavaScript 表达式过滤文件。与 grep 工具使用正则表达式不同，js-in-rs 使用 JavaScript 表达式进行过滤。文章详细介绍了 js-in-rs 的工作原理和代码实现，并探讨了在 Rust 应用程序中运行 JavaScript 代码的潜在应用，例如 Web 服务器、数据管道和数据库用户定义函数等。
- [《jQuery 3.7.0 发布》](https://blog.jquery.com/2023/05/11/jquery-3-7-0-released-staying-in-order/)。jQuery 3.7.0 发布了，包含了 bug 修复、新方法和性能提升等内容。此次更新中，jQuery 删除了其长期使用的选择器引擎 Sizzle，并将其代码直接放入了 jQuery 核心中，以便为未来版本的选择做准备。同时，jQuery 增加了一个可链接的 `.uniqueSort()` 方法，解决了某些情况下 `.prevAll()` 方法返回元素顺序相反的问题。jQuery 还添加了对更多 CSS 属性的支持，避免自动添加 “px” 单位。
- [《发布 Vue 3.3》](https://blog.vuejs.org/posts/vue-3-3)。Vue 3.3 "Rurouni Kenshin" 已经发布，重点是改善开发者在使用 Vue 与 TypeScript 时的体验。该更新包括改进 SFC `<script setup>` 与 TypeScript 的使用，宏中的导入和复杂类型支持，通用组件，更符合人体工程学的 defineEmits ，带有 defineSlots 的类型槽，以及反应式道具 destructure 和 defineModel 等实验性功能。
- [《React 协调：它是如何工作的，为什么我们应该关心》](https://www.developerway.com/posts/reconciliation-in-react)。本文详细介绍了 React 的协调算法，以及它如何影响我们的日常代码。文章探讨了条件渲染、"key" 属性和为什么不应该在其他组件内声明组件等问题，并提供了解决方法。作者通过分析 React 的虚拟 DOM 和状态更新过程，解释了为什么在条件渲染中声明组件会重新挂载，以及为什么需要使用 "key" 属性来避免组件重复挂载或保证元素的唯一性。最后，作者提供了多个示例来说明这些概念。
- [《介绍 Deopt Explorer - TypeScript》](https://devblogs.microsoft.com/typescript/introducing-deopt-explorer/)。本文介绍了如何使用内联缓存（inline caching）优化 JavaScript 代码的性能，并讲解了在 TypeScript 编译器中如何使用 Deopt Explorer 工具来分析性能问题和减少多态现象。文章详细介绍了内联缓存的概念、不同类型的缓存以及多态现象的产生原因。通过实例分析，作者展示了如何使用 Deopt Explorer 工具来分析 V8 引擎生成的 ICs 和对象类型，并通过优化 Symbol 类型的属性访问，将编译时间平均缩短了 8-10%。
- [《我的 Remix 之路》](https://redd.one/blog/my-struggle-with-remix)。这篇文章讨论了作者使用 Remix 框架的经验和遇到的问题。作者认为 Remix 是一个很好的框架，但是也存在一些缺点。作者提出了四个主要问题：开发体验、路由过于神秘、仍然不够成熟以及控制不是默认的。作者指出，Remix 在某些方面缺乏对开发者的控制权，例如构建过程和静态资源处理。此外，Remix 的路由语法可能会使人感到困惑，并且更新时可能会出现问题。
- [《滑动进入动画》](https://antfu.me/posts/sliding-enter-animation)。本文介绍了一种通过 CSS 动画实现页面元素滑动进入的效果，并提供了一个示例代码。作者在文章中还尝试了使用 CSS 计数器来简化应用到 Markdown 页面内容的过程，但由于计数器函数返回字符串而无法直接转换为数字，因此最终采用了 `nth-child()` 选择器来手动实现该效果。最后，作者将该效果应用到了自己的博客页面中，并分享了源代码。
- [《不阻塞事件循环的实用指南》](https://www.bbss.dev/posts/eventloop/)。本文介绍了 JavaScript 在单线程环境下的事件循环机制，以及如何避免同步任务阻塞事件循环。作者提出了三种解决方案：增加节点数量、将同步任务改为异步任务、将同步任务转移到另一个线程。其中，将同步任务转移到另一个线程需要使用 Worker，并且有数据传输限制。作者还介绍了将同步任务改为异步任务的具体实现方法，即通过将代码块分散到事件循环中来添加同步执行之间的间隙，从而让事件循环得以运行。
- [《Astro 发布 2.4》](https://astro.build/blog/astro-240/)。Astro 2.4 发布了，新增了几个功能：更强大的 CSS 作用域、升级了 `<Code />` 组件、在站点地图中支持服务器端渲染、中间件（实验性）和 CSS 内联（实验性）。其中，scopedStyleStrategy 允许使用类选择器来配置更高的特异性，`<Code />` 组件升级到了 Shiki 0.14 版本，@astrojs/sitemaps 包更新以支持服务器端渲染，中间件支持拦截请求和响应并动态注入行为，CSS 内联可以通过配置将样式表嵌入到 `< style>` 标签中。此外，还包括一些 bug 修复和集成功能。
- [《粘性菜单的问题及替代方案》](https://adamsilver.io/blog/the-problem-with-sticky-menus-and-what-to-do-instead/)。本文讨论了粘性菜单（即固定在视口边缘的菜单）对用户体验的负面影响。这些菜单会占用页面空间、遮挡内容、缩放时出现问题、难以访问、容易使内部页面锚点失效、距离键盘用户较远并遮挡链接和其他可聚焦元素。作者建议解决根本原因，让页面变短，让用户自由滚动；将相关链接放入上下文中；使用返回顶部链接等方式来替代粘性菜单。
- [《React 服务器组件是什么？》](https://www.viget.com/articles/what-even-are-react-server-components/)。React Server Components 是在服务器上渲染的 React 组件，旨在减少网络瀑布效应。与传统的服务器端渲染 (SSR)、并行获取和架构更改相比，Server Components 具有更好的用户体验、更快的构建速度和更易于维护的特点。Server Components 可以通过在 JS 和 HTML 中填充一些初始数据来减少客户端请求次数，而且这种方式可以嵌套使用，只需要向顶层组件和其子组件发出一次请求即可。Server Components 还可以减小 JS 包的大小，只发送必要的数据给客户端，从而提高性能。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 290 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 298 - 《Node 项目初始化 SOP》
- 297 - 《我的小技巧集合 03》

## 每周一图

![](https://img.alicdn.com/imgextra/i2/O1CN01NJFQ8L1SruBeqa0NU_!!6000000002301-0-tps-1200-1456.jpg)
