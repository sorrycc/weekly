---
title: "SvelteKit 1、Tauri Mobile、React Router 6.5、useEffectEvent、React Query"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01fdbUqE1ptx5RRt4vD_!!6000000005419-2-tps-1536-1024.png_1200x1200.jpg"
titleImageCaption: "A Cute Snowman"
publishedAt: "2022/12/19"
---

## 新闻
> 推荐下 YingCi 的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯，也是本文新闻的重要渠道之一。也可订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

* SvelteKit [发布 1](https://svelte.dev/blog/announcing-sveltekit-1.0)，同时提供[交互式教程](https://learn.svelte.dev/)。元框架、SSR、SSG、约定式路由、内置 code splitting、基于 Vite、支持[部署到 Vercel](https://vercel.com/blog/using-sveltekit-1-0-on-vercel) 等。
* Harlem [发布 3](https://github.com/andrewcourtice/harlem)，这是 Vue 生态的一个全局状态管理库，他的 Logo 非常可爱。
* Tauri Mobile [发布 Alpha](https://tauri.app/blog/2022/12/09/tauri-mobile-alpha/)，支持 iOS 和 Andriod，需要用 2.0.0-alpha.0 版本的依赖。
* React Router [发布 6.5](https://github.com/remix-run/react-router/releases/tag/react-router%406.5.0)，支持 [Optional Route Segments](https://github.com/remix-run/react-router/issues/9546)。在任何 path 段末尾添加一个 ? 会使整个路径段成为可选，对静态段和动态参数都有效。
* Deno [发布 1.29](https://deno.com/blog/v1.29)，以下是部分改动。1）支持自定义 npm registry，2）deno repl 默认不给权限，3）fmt 和 lint 默认忽略 node_modules 和 .git 目录，4）调试支持 --inspect-wait 参数，等调试器连接而不一定要在用户第一行代码中断。
* 发现几个 terminal 版 copilot 的实现，Python 实现的 [terminal-copilot](https://github.com/Methexis-Inc/terminal-copilot) 和 Rust 实现的 [plz-cli](https://github.com/m1guelpf/plz-cli)，输入文本描述之后会帮你转成命令命令。
* 看到 [Codux 发布](https://dev.to/codux/introducing-codux-15j5)，来自 Wix 联合创始人的作品。这是一个 React 组件可视化编辑器，类似 Storybook，特点是和代码之间双向同步。
* 发现一个 Weedend App [Fuzzy Compiler](https://fuzzy.yohei.me/)，模糊编译器，基于 GTP-3。如果你好久没写代码，只要在这里写思路，他会帮你编译成带注释的代码。
* 看到一个库 [snk](https://github.com/Platane/snk)，可以将 github contributions graph 转换成贪吃蛇的 gif 和 svg。
* atom 仓库[被 archive](https://github.com/atom/atom)，正式停止更新。
* React 的 useEvent RFC 里，[useEvent 更名为 useEffectEvent](https://github.com/reactjs/reactjs.org/pull/5373)，Event function 更名为 Effect Event。

## 好文
* 发现一本免费的算法书[《Hello 算法》](https://www.hello-algo.com/)，没细看，感兴趣可关注。
* StackDiary 更新了[《The Most Popular Node.js Frameworks in 2022》](https://stackdiary.com/node-js-frameworks/)和[《The Most Popular CSS-in-JS Libraries in 2022》](https://stackdiary.com/css-in-js-libraries/)，分别由 Next.js 和 Styled-Components 拔得头筹，Styled-Components 已连续 4 年第一。
* DebugBear 更新了一篇[《2022 In Review: What’s New In Web Performance?》](https://www.debugbear.com/blog/2022-in-web-performance) 总结 2022 年 Web 性能领域的变化，包括提升资源优先级的 Priority Hints、Chrome 不做 OSCP 证书校验后的性能提升、用于衡量交互后响应速度的 INP 指标、Google 将 Core Web Vitals 纳入排名因素、Chrome 浏览器支持前进后退缓存、HTTP/3 标准化、Chrome DevTool 和 performance API 会提示哪些资源会 block、用于提前提供资源列表的 103 响应、Chrome 108 开始支持全页面预渲染、Safari 支持 AVIF、Safari 原生支持图片懒加载。
* 看到一篇[《A simple stack for today's web hacks》](https://neugierig.org/software/blog/2022/12/simple-web-hacks.html)，关于极简 web 前端技术栈，只要 TypeScript 类型、esbuild 打包、preact 框架即可。
* 看到一篇[《How to automatically add unique ID’s to H2 tags for content deep-linking》](http://www.js-craft.io/blog/how-to-automatically-add-unique-ids-to-h2-tags-for-content-deep-linking/)，原来标题内容转锚点通过一个正则即可搞定。
* 看到一篇[《Avoid These Common Pitfalls Of React useState》](https://profy.dev/article/react-usestate-pitfalls)，给初级开发者的关于 useState 的 6 个常见误区。

## Umi 和我
> 关于 Umi 和我最近的进展。

* Umi 发布 4.0.37 和 4.0.38 两个版本，新增微生成器支持自定义页面和组件模板，升级 vite 到 3.2.5，以及一些修复和文档更新。
* 这周做了一期内部框架用户访谈，槽点最多的是文档。
* 开始做请求方案的调研，这是 Umi/Bigfish 今年最佳实践的最后一个拼图。第一个深入看的是 React Query，翻了 [Practical React Query | TkDodo's blog](https://tkdodo.eu/blog/practical-react-query) 系列文章后做了两篇笔记。然后对 React Query 路转粉，学习到不少关于请求的细节处理思路，推荐大家都好好读一读。
* 眼馋 [ScrapingBee](https://www.scrapingbee.com/) 的功能，但是太贵了，自己动手基于 node + axios + cheerio + phantomjs cloud 写了个简化版的。然后基于此把 sspai 的 rss 转成全文输出，部署在 repit。
* 上周末跑通了用 whipser + ffmpeg + deepl 给非中文视频加中文字幕的流程，这周把他用在多个场景，看视频效率 ++。这周看到个[有趣的类似应用](https://kill-the-newsletter.com/alternates/8ho1zeo0yjbatu07.html)，思路是用 whisper 提取文字版，用 openai embed 转换成可搜索的版本，当用户提问时，搜索到相关的部分，然后将问题和相关文本一起喂给 GTP-3，拿到答案。
* 有点被 Readwise Reader 功能惊艳到，准备弃坑 Instapaper。于是[请 Chatgpt 帮我写信半价付费 Readwise 锁价](https://t.me/yqtalk/45)（需提供身份证信息），之后 Reader 功能出了应该是要涨价的。
* 家人经历了一次乌龙阳，陪着折腾了 2-3 天，感受了一遍一线防疫的政策、社区、街道和医院。

