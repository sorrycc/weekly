---
title: "v0、Remix 2、TSConfig、Bun"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01GEmCef1QUt5WHdCZK_!!6000000001980-0-tps-1920-1280.jpg_1200x1200.jpg"
titleImageCaption: "florianolv @ unsplash"
publishedAt: "2023/09/18"
---

## 一周新闻

- [Vercel 支持零配置使用 Bun 安装项目依赖。](https://vercel.com/changelog/bun-install-is-now-supported-with-zero-configuration)
- [Redwoodjs 支持 React Server Actions。](https://community.redwoodjs.com/t/react-server-components-rsc/5081/7)
- [Next.js 重新设计命令行界面。](https://twitter.com/leeerob/status/1701775526459756620)
- [The Joy of React 课程正式发布。](https://www.joyofreact.com/)
- [Chrome 发布 117。](https://developer.chrome.com/en/blog/new-in-chrome-117/) Chrome 117 为开发者带来了多项新功能。其中，三种新的 CSS 特性使得添加平滑的入场和退出动画变得更加简单，例如 transition-behavior、@starting-style 规则和 overlay 属性。在编程方面，通过添加 Object.groupBy 和 Map.groupBy 静态方法，对数组进行分组变得更加方便。DevTools 的本地覆盖功能现已简化，使开发者可以轻松地模拟远程资源的响应头和网页内容。此外，还实现了对 grid-template-columns 和 grid-template-rows 的 subgrid 值的支持，进行了 WebSQL 的弃用试验，并为 bfcache 推出了 notRestoredReasons API。
- [一个 ai 生成 ui 的应用。](https://v0.dev/) react 界的 mid journey，基于 shadcn ui 和 tailwind css。
- [pagefind 发布 1。](https://github.com/CloudCannon/pagefind/releases/tag/v1.0.0)
- [PostgreSQL 发布 16。](https://www.postgresql.org/about/news/postgresql-16-released-2715/)
- [happydom 发布 11。](https://github.com/capricorn86/happy-dom/releases/tag/v11.0.0) 翻完 Bun 文档开始关注到这个库的。
- [Replit 发布桌面应用。](https://blog.replit.com/desktop-app)
- [Remix 发布 2。](https://remix.run/blog/remix-v2) Remix 发布了 v2 版本，经过 2 年的努力和 19 次小更新。如果用户的 Remix v1 应用启用了所有未来的标志，那么升级到 v2 将非常简单。v2 主要更新了 React 18 和 Node 18 等依赖项。v1 的主要亮点包括与 React Router v6 的对齐、引入 defer 特性、添加 “flat” 路由、增强对多种 CSS 策略的支持以及新的开发服务器。v2 的重要特性是一个全新的 create-remix CLI 体验。关于 React Server Components (RSC)，Remix 对在 v3 中加入 RSC 支持持乐观态度，但 v2 仍然依赖于当前稳定的 React 特性。RSC 需要更深入的整合，Remix v3 中的数据加载可能会有所不同。
- [AI + Photoshop。](https://twitter.com/_akhaliq/status/1703095263852625987)
- [tango。](https://github.com/NetEase/tango) 低代码设计器。
- [marz。](https://github.com/hex2f/marz) 基于 Bun 的 React Server Components 框架。
- [tshy。](https://isaacs.github.io/tshy/) TypeScript npm 包打包工具，支持同时产出 ESM 和 CJS 的产物。
- [starry-night。](https://github.com/wooorm/starry-night) 风格类 Github 的高亮库。
- [nuejs。](https://github.com/nuejs/nuejs) 用少 10 倍的代码构建用户界面，React、Vue 和 Svelte 的替代方案。
- [cheetah。](https://github.com/leetcode-mafia/cheetah) 利用 whisper + ai 面试作弊。
- [instagraph。](https://github.com/yoheinakajima/instagraph) 将文本输入或 URL 转换为知识图谱并显示。

## 深度好文

- [《TSConfig 小抄》](https://www.totaltypescript.com/tsconfig-cheat-sheet)。这篇文章为读者提供了TypeScript配置文件tsconfig.json的速查表和完整解释。主要包括基本选项、严格性、是否使用TypeScript进行转译、是否在DOM中运行代码、是否为库构建以及是否在Monorepo中为库构建。每个部分都详细列举了相关的配置选项及其作用，并提供了相关链接以便读者进一步了解。文章旨在帮助读者更容易配置TypeScript。
- [《Node Maintainer 对 Bun 的看法》](https://adventures.nodeland.dev/archive/my-thoughts-on-bun/)。本文总结了 Bun 1.0 版本发布，作者对它的评价是既兴奋又失望。Bun 的速度比 Node.js 快是因为没有向后兼容性约束，而 Node.js 注重保护生态系统。Bun 目前还不支持一些重要的模块如 Fastify 和 Pino。作者认为开放的标准和治理对基础架构很重要。文章列出了作者最近发布的一些模块更新，也提到了一些有趣的链接，如 Deno 现在支持 npm,CloudFlare 替换 Nginx 的工程故事等。
- [《使用 Next.js 4 年后，我如何处理和构建企业前端应用程序》](https://dev.to/josemukorivo/how-i-approach-and-structure-enterprise-frontend-applications-after-4-years-of-using-nextjs-2f5)。 这篇文章总结了作者四年使用 Next.js 开发企业级前端应用的经验。他提出了模块化、关注点分离、可扩展性、可维护性等指导原则。作者推荐使用 React Query、React Context、Cypress 等库，并介绍了组织项目目录结构的方法，如按页面、组件、Hook 等分类。他还分享了 TypeScript 编码规范，以及开发可重用组件的最佳实践，比如提供自定义属性，考虑无障碍性，编写文档等。
- [《写一个 Toast 组件》](https://emilkowal.ski/ui/building-a-toast-component)。
- [《技术独立性》](https://sive.rs/ti)。 这篇文章提供了具体的指导，帮助建立自己的私人服务器和网站，以实现技术独立，不依赖任何公司。它涵盖了如何注册域名、更改 DNS、创建 SSH 密钥、在 Vultr 托管商处设置 OpenBSD 服务器、连接加密存储、设置联系人和日历同步、配置电子邮件服务、建立简单网站和共享文件，以及必要的维护工作。
- [《使用 CloudFlare 突破图片防盗链》](https://blog.meathill.com/infra/use-cloudflare-worker-reverse-proxy-image.html)。 作者叙述了一个朋友想利用 Serverless 技术抓取其他网站图片的需求，主要是为了降低成本。作者选择了 Cloudflare Workers, 参考官方文档很顺利地实现了该功能，只需要解析图片 URL, 然后返回 fetch 请求即可。最后作者总结 Serverless 开发体验很好，文档详尽，一小时内就可以完成一个小功能的开发和上线，不需要考虑费用，很省心省力。作者建议大家也可以了解和使用 Cloudflare Workers。
- [《互联网与中国后现代性呓语 For Public》](https://grd1kevm20.feishu.cn/docs/doccnVL5FwOmPpvCU5NX5lCJljd)。
- [《用 Rust 写个操作系统》](https://os.phil-opp.com/)。
- [《异步 Rust 是一种糟糕的语言》](https://bitbashing.io/async-rust.html)。
- [《反思 Rust 的 unsafe 关键字》](https://rainingcomputers.blog/dist/rethinking_rusts_unsafe_keyword.md)。 文章讨论了Rust语言中的unsafe关键词存在的问题，并提出了一个新的关键词itsfine以及配对的关键词safe来解决这些问题。作者认为当前的unsafe关键词名称可能导致误解，因为其实表示的是代码可能不安全，但在某些上下文中确实安全的。而新提出的itsfine关键词更准确地表达了这个意思。此外，作者还介绍了如何将当前的unsafe代码迁移到使用itsfine和safe的方式，并讨论了一些备选的命名方式。

## 工具资源

- [Obsidian TagFolder。](https://github.com/vrtmrz/obsidian-tagfolder)
- [Hidden Bar。](https://apps.apple.com/us/app/hidden-bar/id1452453066?mt=12) Bartender 替代品。
- [油猴脚本：我只想好好看书。](https://greasyfork.org/en/scripts/461293)
- [RustRover。](https://www.jetbrains.com/rust/) JetBrains 新出的 Rust IDE。
- [Twitter-Block-Porn。](https://github.com/daymade/Twitter-Block-Porn) 共享黑名单, 一键拉黑所有黄推诈骗犯。
- [free-for.dev。](https://free-for.dev/) 这是一份软件（SaaS、PaaS、IaaS 等）及其他产品的列表，其中包含面向开发人员的免费层级。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 340 多篇文章，包含了我们最新的观点和见解。以下是近期的星球更新，访问「q.sorrycc.com」了解更多。

- 344 - 《Bun 笔记》
- 343 - 《前端培训班》
- 342 - 《RSC 笔记》
- 341 - 《Mako 开发日志（3） - 架构图》
- 340 - 《Tree Shaking 原理》
- 339 - 《RSC 调研》
- 338 - 《dprint 源码阅读笔记》
- 337 - 《如何在一个项目里同时使用 antd4 和 antd5？》
- 336 - 《十多年程序员差点被骗十多万》
- 335 - 《Mako 开发日志（2） - Benchmark 的秘密》
- 334 - 《Mako 开发日志（1）》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i2/O1CN017u8gIW1FGGflYrOBx_!!6000000000459-2-tps-2198-1766.png)

![](https://img.alicdn.com/imgextra/i1/O1CN01kRnSoU29xssDprY0u_!!6000000008135-0-tps-592-592.jpg)
