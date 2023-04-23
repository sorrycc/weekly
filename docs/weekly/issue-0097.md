---
title: "Tree Shaking、Vite 4.3、Node 20、pretty-ts-errors、React Query 5 API"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01SLe2251vqBY7I6SN0_!!6000000006223-2-tps-1456-816.png_1200x1200.jpg"
titleImageCaption: "a robot is sitting on a courtroom"
publishedAt: "2023/04/24"
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。

 - [Windi](https://windicss.org/posts/sunsetting.html) CSS 不再维护。
 - Immer [v10](https://github.com/immerjs/immer/releases/tag/v10.0.0) 发布，优化体积等。
 - Nodejs [v20](https://github.com/nodejs/node/releases/tag/v20.0.0) 发布，权限模型等。
 - TypeScript [v5.1 Beta](https://github.com/microsoft/TypeScript/releases/tag/v5.1-beta) 发布，类型推断改进等。
 - Firefox 将支持[自动拒绝](https://www.ghacks.net/2023/04/17/firefox-may-interact-with-cookie-prompts-automatically-soon/) cookies 。
 - Github actions 支持 [Npm](https://github.blog/2023-04-19-introducing-npm-package-provenance/) 包验证。
 - Vercel [Analytics](https://vercel.com/blog/vercel-web-analytics-is-now-generally-available) 普遍可用。
 - React 团队[裁员](https://twitter.com/mengdi_en/status/1648718077796786177)。
 - [Expo](https://docs.expo.dev/overview/) 新文档。
 - Vite [v4.3](https://github.com/vitejs/vite/blob/v4.3.1/packages/vite/CHANGELOG.md#430-2023-04-20) 发布，速度提升等。
 - Nuxt [v3.4.2](https://github.com/nuxt/nuxt/releases/tag/v3.4.2) 发布，升级 Vite 等。
 - Lightning CSS [v1.20.0](https://github.com/parcel-bundler/lightningcss/releases/tag/v1.20.0) 发布，支持更多规则等。
 - Vite 将支持 [Lightning CSS](https://github.com/vitejs/vite/pull/12807) 。
 - Npm [v9.6.5](https://github.com/npm/cli/releases/tag/v9.6.5) 发布，支持包签名等。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《发布 v5.80.0・webpack/webpack》](https://github.com/webpack/webpack/releases/tag/v5.80.0)。Webpack v5.80.0 的新增功能包括支持在 import.meta 中使用解构赋值、支持带有 AwaitExpression 的解构赋值的树摇、引入 errorsSpace 和 warningsSpace 以获得更可读的跟踪信息等。Bug 修复主要涉及 CSS 相关问题、语法错误、模块 ID 分配等。
- [《Deno vs. Node：没有人准备好迎接这个变化 | .cult by Honeypot》](https://cult.honeypot.io/reads/deno-vs-node-main-differences/)。本文介绍了 Node.js 和 Deno 两个 JavaScript 运行环境的比较。Node.js 是一个流行的服务器端、开源、跨平台的 JavaScript 运行环境，自 2009 年以来一直占据着 Web 开发世界的主导地位。相比之下，Deno 在设计上有所改进，提供了更安全的框架和现代特性，由 Node.js 的创始人 Ryan Dahl 推出。然而，尽管 Deno 解决了 Node.js 的一些设计缺陷，但采用 Deno 的速度非常缓慢，大多数开发人员仍然满意于 Node.js。本文将探讨这种现象背后的原因，并对 Node.js 和 Deno 进行比较，从第三方包管理、API、安全性和 TypeScript 支持等方面进行分析。
- [《发布 Vite 4.3。》](https://vitejs.dev/blog/announcing-vite4-3.html)。Vite 4.3 发布，主要改进了开发服务器的性能。该版本优化了解析逻辑，改进了热路径，并实现了智能缓存，以查找 package.json、TS 配置文件和已解决的 URL。此外，该团队正在开发一个官方基准测试工具，以获取每个 Pull Request 的性能指标，并通过 vite-plugin-inspect 提供更多的性能相关功能来帮助用户识别应用程序的瓶颈。明年他们将发布 Vite 5，这将是今年唯一的 Vite 主要版本，同时也会放弃对 Node.js 14 和 16 的支持。
- [《我们如何让 Vite 4.3 更快》](https://sun0day.github.io/blog/vite/why-vite4_3-is-faster.html)。这篇文章介绍了 Vite 4.3 是如何通过优化解析策略、使用异步函数、并行处理和 JavaScript 优化等方式来提高性能的。
- [《介绍 npm 包 provenance | GitHub 博客》](https://github.blog/2023-04-19-introducing-npm-package-provenance/)。GitHub 在其 Action 工具中增加了一项功能，使开发者能够在他们的 npm 项目旁边发布出处。该功能提供了一个软件包与其源码库之间的可验证的链接，以及用于发布软件包的构建指令。其目的是通过使开发者能够确保其软件供应链的完整性来增加对开源项目的信任。
- [《如何编写类型安全的 CSS 模块 - LogRocket 博客》](http://blog.logrocket.com/write-type-safe-css-modules/)。本文介绍了如何使用 typed-css-modules 包自动生成类型定义，并提供脚本来验证生成的类型是否是最新的。
- [《Node.js 20 现已推出！| Node.js》](https://nodejs.org/en/blog/announcements/v20-release-announce)。Node.js 20 发布了，其中包括了新的 Node.js 权限模型、同步 import.meta.resolve、稳定的测试运行器、更新到 V8 JavaScript 引擎 11.3 版本和 Ada 到 2.0 等。此次更新还包括对基础部分的改进，如 URL、fetch() 和 EventTarget 等。值得注意的是，Permission Model 是一项实验性机制，用于在执行期间限制对特定资源的访问。该项目继续在多个领域取得进展，许多新功能和修复已流入现有的 LTS 版本中。
- [《用 Next.js 13 和 React Server Components 建立博客》](https://maxleiter.com/blog/build-a-blog-with-nextjs-13)。本文介绍了如何使用 Next.js 13 和 React Server Components 构建博客，并提供了实际示例。文章包括设置项目、文件结构、动态路由、获取和呈现 Markdown、SEO、部署等内容。作者还介绍了如何使用 next-mdx-remote 和 Bright 进行语法高亮。本文旨在帮助读者快速搭建自己的博客，并鼓励读者进行自己的实验和探索。
- [《成为 Astro 维护者》](https://www.elian.codes/blog/23-04-12-becoming-an-astro-maintainer/)。本文介绍了作者如何开始参与开源，并最终成为 Astro 的维护者。作者分享了自己的经验和故事，包括加入 Astro Discord 社区、提交第一个 PR 和发表有关 Astro 的演讲等。作者还提出了自己作为 Astro 维护者的目标，包括推出大使计划、改进文档和优化开发体验等。最后，作者表示很高兴能够成为 Astro 社区的一员，并希望在更广泛的开源领域中产生积极影响。
- [《发布 v10.0.0・immerjs/immer》](https://github.com/immerjs/immer/releases/tag/v10.0.0)。Immer 10 发布了，支持现代浏览器，不再支持 UMD 构建和 Promise-based reducers。默认情况下忽略纯对象上的 getter 和 setter，提供了显著的性能提升。ES5 模式已被删除，缩短 JSON 数组长度现在会生成删除补丁。此外，Immer 现在是一个 ESM 包，可以直接在浏览器中导入。
- [《发布 TypeScript 5.1 Beta - TypeScript。》](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-beta/)。TypeScript 5.1 测试版已经发布，其特点是未定义返回函数的隐式返回更容易，以及 getters 和 setters 的非相关类型。该版本还包括 JJSX 元素和 JJSX 标签类型之间的解耦类型检查、命名的 JJSX 属性以及同时自动编辑多个位置的能力。TypeScript 现在在 TypeScript 和 JavaScript 文件中键入 @param 标签时提供片段补全。
- [《GitHub - yoavbls/pretty-ts-errors：在 VSCode 中使 TypeScript 错误更漂亮和易读》](https://github.com/yoavbls/pretty-ts-errors)。这是一个名为“Pretty TypeScript Errors”的Visual Studio Code扩展，旨在让TypeScript错误变得更加美观和易于阅读。当类型的复杂性增加时，TypeScript错误会变得越来越混乱。这个扩展能帮助您更好地理解错误信息。主要功能包括：为错误信息中的类型提供语法高亮，支持深色和浅色主题；在错误信息中的类型旁边提供一个按钮，可以跳转到相关类型声明；提供一个按钮，可以将您导航到typescript.tv，那里有详细的解释，有时还有视频；提供一个按钮，可以将您导航到ts-error-translator，那里可以用简单的英语阅读错误。
- [《ECMAScript 2023 有什么新特性 | pawelgrzybek.com》](https://pawelgrzybek.com/whats-new-in-ecmascript-2023/)。JavaScript 的新功能列表已经确定，最终版本的 ECMAScript 规范预计将于 6 月底发布。这些新功能包括在 Array 和 TypedArray 原型上添加 findLast() 和 findLastIndex() 方法、标准化 Hashbang 语法、允许使用符号作为 WeakMap 键以及在 Array.prototype 上添加返回新副本的方法等。这些功能都已达到第 4 阶段，并预计将包含在即将发布的 ECMAScript 版本中。
- [《编程 Playgrounds 列表》](https://jvns.ca/blog/2023/04/17/a-list-of-programming-playgrounds/)。本文介绍了一些编程工具，包括编译器、着色器、Arduino/IoT、CSS/HTML/JS、正则表达式、DNS、nginx、varnish、SQLite、SQL、Git、.NET bytecode、Python bytecode、数据格式、编程语言等等。这些工具可以帮助程序员在浏览器中快速测试和调试代码，并提高开发效率。
- [《LangChainJS 支持多个 JS 环境》](https://blog.langchain.dev/js-envs/)。LangChain.js 宣布支持在浏览器、Cloudflare Workers、Vercel/Next.js、Deno、Supabase Edge Functions 等多个 JavaScript 环境中运行。该库最初只能在 Node.js 上运行，但收到了许多用户的请求，要求在其他环境中使用。为了实现这一目标，开发团队对代码进行了修改，例如将其转换为 ESM 格式，并使用 fetch 替换了 OpenAI 请求。此外，他们还重新设计了第三方集成的 export 方式，以避免不必要的代码加载和打包问题。
- [《负载均衡》](https://samwho.dev/load-balancing/)。本文讨论了负载均衡算法的不同类型，以及它们在 HTTP 请求分发中的应用。从最简单的 “轮询” 算法开始，到更复杂的 “加权轮询” 和 “最小连接数” 算法，再到结合了动态加权轮询和最小连接数的 “峰值指数加权移动平均” 算法。文章还讨论了优化 HTTP 负载均衡算法的目标是延迟而不是丢失请求，并提供了一些实际模拟数据来支持这些算法的比较和评估。最后，作者还提供了一个交互式的模拟器，可以让读者自己尝试调整参数并观察结果。
- [《Windi CSS 停止维护》](https://windicss.org/posts/sunsetting.html)。Windi CSS 宣布将停止维护。Windi CSS 是一个用于解决 Tailwind 的性能问题的框架，其高效和强大的按需方法激发了 Tailwind 实现他们的 “JIT” 引擎。该项目已经开发出了许多增强开发人员体验的功能，包括 Variant Group、Shortcuts、Attributify Mode 和 Visual Analyzer 等。然而，由于团队成员追求新机会，他们无法再继续积极地开发和维护该项目，因此决定停止维护 Windi CSS。虽然不会添加新功能，但仍会提供安全修复程序。对于新项目，建议考虑 UnoCSS 或 Tailwind CSS 等替代方案。
- [《故意 Break React Query 的 API》](https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose)。React Query 在其即将发布的 v5 版本中删除了 useQuery 的回调。做出这个决定是因为回调不一致，可能导致错误，特别是在用于状态同步时。虽然一些用户对失去直观的 API 表示担忧，但 React Query 建议使用全局缓存级回调或 Query 上的元字段来代替。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）icons 引用本地 icon 时支持子目录，2）@umijs/preset-vue 支持 Vue JSX。
- [读了一半《5000 天后的世界》](https://t.me/yqtalk/344)，但发现书中关于 AI 的观点已过时。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 290 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 293 - 《一个有成本的 Promise 知识点》
- 292 - 《避免 XY 问题》
- 291 - 《HMR 和 React Refresh 原理》
- 290 - 《ChatGPT Keep Alive》
- 289 - 《手撕源码 32：lazyrepo》

## 每周一图

![](https://img.alicdn.com/imgextra/i4/O1CN01SAmkYt1hahXMH4M3o_!!6000000004294-0-tps-1952-1888.jpg)
