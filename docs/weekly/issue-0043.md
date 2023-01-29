---
title: "Suspense 基础、2022 CSS 特性、Next.js 迁 Remix、发布 Deno 模块到 Npm"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01loBku51k0vQJl23Pb_!!6000000004622-0-tps-1620-1080.jpg"
titleImageCaption: "mbenna @ unsplash"
publishedAt: "2022/03/07"
---

本期主要内容有这些：

- Suspense 基础
- 2022 CSS 特性
- 迁移 Next.js 到 Remix
- 发布 Deno 模块到 Npm
- 15 个有用的 Lodash 方法
- Rails on Node
- 5 种 Observer

## Suspense 基础
https://www.chakshunyu.com/blog/a-fundamental-guide-to-react-suspense/

作者提了几个问题。Suspense 是什么？为什么需要 Suspense？Suspense 如何解决数据获取问题？使用 Suspense 的好处？

1、Suspense 主要解数据获取的问题。

2、数据获取有什么问题？在此之前，通常有两种机制，Fetch on Render 和 Fetch then Render。前者的问题是慢，会有渲染和请求的瀑布流；后者的问题是在请求好之前页面一片空白。

3、Suspense 如何解这个问题？首先基于 Fetch then Render，然后同时解请求完成前页面空白的问题，即 Render as You Fetch。Suspense 将请求和渲染这两个任务异步化，不影响渲染，数据好了后以最快速度完成渲染。

4、除了让初始数据加载更快，还有一些有点，比如避免 race condition、更直观的加载状态、集成化的错误处理等。

## 2022 CSS 特性
https://www.smashingmagazine.com/2022/03/new-css-features-2022/

2022 有非常多新的 CSS 特性加入，有些会在更多浏览器中获得支持。比如 Container Queries、:has、@when/@else、accent-color、新 color 函数、@layer、Sub Grid、Scroll Timeline、CSS 嵌套等。

## 迁移 Next 到 Remix
https://www.adamcollier.co.uk/blog/moving-from-next-to-remix

作者把个人网站从 Next.js 换成 Remix，解释了背后的原因，Remix 的优点，为啥 Next.js 虽强大但不适合这个场景等。

除此之外，其他的技术栈包括，

- [Planetscale](https://planetscale.com/) | MySql 数据库服务
- [Prisma](https://www.prisma.io/) | MySql 客户端
- [Upstash](https://upstash.com/) | 缓存服务
- [UnoCSS](https://github.com/unocss/unocss) | 元 CSS 生成器

## 发布 Deno 模块到 Npm
https://deno.com/blog/dnt-oak

支持发布 Deno 模块到 Npm 应该是广泛需求，小众社区想要更好发展，兼容更大的社区应该是必须的，否则除了死忠粉，应该较少愿意放弃 Npm 社区。此功能支持后，开发者就多了个选择，用 Deno 方式开发，然后同时支持 Npm 社区。

支持的方式是通过 [dnt](https://github.com/denoland/dnt/)。dnt 可以将 deno 代码转化为兼容 Node 的 TypeScript 代码，处理补丁、deno 内置模块，转化来自 skypack 或 esm.sh 的模块为依赖，生成 package.json、ESM、CJS 和 TypeScript 类型定义文件等。

dnt 主体功能已可用，除了 HTTP/2、WebSockets、FormData、top level await 等。

## 15 个有用的 Lodash 方法
https://blog.bitsrc.io/15-useful-lodash-methods-for-everyday-coding-4454d98f8ab0

Lodash 300 多个方案，很难记住，通常大家都是用到了去查查看是否有相关函数。但有些常用的是可以记一记的，作者整理了其中 15 个。

- shuffle | 打乱数组顺序
- orderBy | 让对象数组以某个 key 排序
- chunk | 给数组分组，返回二维数组
- take | 取数组的前几个，合成新的数组
- difference | 返回数组差异
- intersection | 返回数组交集
- isEmpty| 检查 object、collection、map 或 set 是否为空
- throttle
- debounce | 延迟执行，防抖
- merge | 对象的深度合并
- cloneDeep | 深度拷贝
- startCase | 转化字符串为大驼峰
- kebabCase | 转化字符串，用中划线连接
- snakeCase | 转化字符串，用下划线连接
- camelCase | 转化字符串为小驼峰

## Rails on Node
https://world.hey.com/dhh/no-railsconf-faa7935e

感觉 Rails 才是把前端打包应用研究地最透的框架，Rail 7 之后分别提供了 less Node、full Node 和 no Node 的方案，面向不同的用户群体。开发了 importmaps-rails、jsbundling-rails、cssbundling-rails 等方案，以及面向前端流行库深度整合的 tailwindcss-rails 和 dartsass-rails。

## 5 种 Observer
https://mp.weixin.qq.com/s/-fLZe164aWAaPJ55iZ_m2w

作者分别介绍了 5 种 Observer：MutationObserver、IntersectionObserver、PerformanceObserver、ResizeObserver 和 ReportingObserver。

- IntersectionObserver，监听元素可见性，可见比例达 .5 或 1 时触发回调，可用于埋点、图片懒加载等
- MutationObserver，监听元素属性和子节点的变化，可用于和去广告去水印类的插件斗智斗勇
- ResizeObserver，监听元素尺寸变化，width、height 变更时触发回调
- PerformanceObserver，用于记录时间点，监听资源加载的耗时
- ReportingObserver，用于监听来自 Reporting API 的信息，比如 CSP、Feature-Policy、过期特性报告、Crash、UA 干预等

## 发布

以下是上周社区的重要发布。

- [Umi 发布 4.0.0-rc.4](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.4)，winPath 修复、vite 开启方式变更、crossorigin 支持、安装包瘦身等
- [Rust 发布 1.59](https://blog.rust-lang.org/2022/02/24/Rust-1.59.0.html)，如果没有 debug 需求，配置 strip = "symbols" 可大幅减少可执行文件大小，比如 Deno 可从 77M 减少到 50M 左右
- [Webpack 发布 5.70.0](https://github.com/webpack/webpack/releases/tag/v5.70.0)
- Chrome Canary DevTool 的 [Recorder 支持通过 JSON 格式做 import 和 export](https://bugs.chromium.org/p/chromium/issues/detail?id=1302555)，以后提 BUG 的方式要发生变化了
- 阿里 & 蚂蚁自研 IDE 研发框架 [OpenSumi 正式开源](https://mp.weixin.qq.com/s/MzxhMO-JbREilXaxLSQ4-A)
- [Parcel CSS 发布 1.5](https://github.com/parcel-bundler/parcel-css/releases/tag/v1.5.0)，支持 CSS Color Level 4
- [Astro 发布 0.23](https://astro.build/blog/astro-023/)
- [Headless UI 发布 1.5](https://tailwindcss.com/blog/headless-ui-v1-5)，新增 Combobox 组件
- [MDN 新年换新貌，发布了新的样式](https://hacks.mozilla.org/2022/03/a-new-year-a-new-mdn/)，个人感觉更简洁了
- [TypeScript 发布 4.6](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/)
- [Redux Toolkit 发布 1.8](https://github.com/reduxjs/redux-toolkit/releases/tag/v1.8.0)，新增 Listener Side Effects Middleware，允许在 action dispatch 或状态变更时处理逻辑
