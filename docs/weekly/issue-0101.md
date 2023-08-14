---
title: "MDH Weekly 恢复更新、RSC Devtool、Node 配置地狱、npm 包支持 ESM、技术债"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN016BDO2T2AAFYYZ29MB_!!6000000008162-2-tps-1200-675.png"
titleImageCaption: "博德之门3，上周末沉浸式体验了 20+ 小时。"
publishedAt: "2023/08/14"
---

## 本周新闻

- [Astro 发布 2.1](https://astro.build/blog/astro-2100/)。新增 transition:persist 指令，用于在 View Transitions 时保持旧页面 DOM 元素和 Island 的状态。同时，还附带发布了 Astro 3 的早起预览版，包括 HTML 默认压缩、API 路由大小写灯 Break Change。
- [TypeScript 5.2 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2-rc/) 发布。新版本中包含了许多新特性，如使用声明和显式资源管理、装饰器元数据、命名和匿名元组元素、联合数组的简化方法使用、仅类型导入路径与 TypeScript 实现文件扩展名等。
- [VanJS 发布 1](https://github.com/vanjs-org/van/discussions/72)。
- [Google 发布了新的基于浏览器的代码环境项目 IDX](https://addyosmani.com/blog/project-idx/)，该项目内置有 AI 辅助的代码生成、代码完成和代码解释功能，并支持现代 JavaScript 框架。
- React 官网新增 [Using TypeScript](https://react.dev/learn/typescript) 章节。
- Next.js 新增[关于 Caching 的文档](https://nextjs.org/docs/app/building-your-application/caching)。
- Github Copilot 最新非公开 Beta 版本[支持 Code Referencing](https://github.blog/2023-08-03-introducing-code-referencing-for-github-copilot/)，用于显示提示的代码片段来自 Github 上的哪个公开代码。
- 新书：Addy Osmani 的[《Leading Effective Engineering Teams》](https://twitter.com/addyosmani/status/1686989244336877568)将于 2024 年出版。
- 新书：阮一峰新出的[《TypeScript 教程》](https://wangdoc.com/typescript/)，免费。
- 新书：[ADVANCED REACT](https://advanced-react.com/)。
- Google 出的[免费 CSS 学习教程](https://web.dev/learn/css/)。
- CSS 技巧：[给列表滚动加元素进场动画](https://twitter.com/jh3yy/status/1689604707596050432)。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《通过应用程序接口发送用户界面》](https://www.builder.io/blog/ui-over-apis)。这篇文章讨论了服务器驱动的 UI。这种方法提供了新的动态性和灵活性，正在改变传统的 UI 开发范式。Instagram、Lyft 和 Airbnb 等科技巨头已经实施了这种方法，利用服务器驱动的 UI 向全球数百万用户提供动态内容和更新。服务器驱动的 UI 在服务器上生成 UI，并通过 API 将其发送到客户端，这种方法可以提供更快的迭代和更个性化的用户体验。
- [《为 RSC 创建开发者工具》](https://www.alvar.dev/blog/creating-devtools-for-react-server-components)。作者创建了 rsc-parser.vercel.app，一个可以复制粘贴使用 RSC 的网络响应站点的页面，并获得更好的数据探索体验。作者还创建了一个浏览器扩展，可以记录响应并在浏览时呈现信息。尽管该扩展仍处于早期阶段，但作者正在寻找方法，利用一些内部 React 代码来解析响应。
- [《Node.js 的配置地狱问题》](https://deno.com/blog/node-config-hell)。这篇文章讨论了 Node.js 项目的配置地狱问题。为啥一个项目需要数十个配置文件？因为 JavaScript 生态没有主见，没有公认的社区最佳实践，这在一些其他语言里是比较少见的。
- [《因为 React 而忘记（或从不知道）的事情》](https://joshcollinsworth.com/blog/antiquated-react)。作者的观点是，人们常常安于默认选择,而没有主动探索更好的可能性。这种心态也体现在开发者使用React框架时。React曾经是前端框架的先驱，但现在已经相对落伍。它存在许多问题，比如缺乏web组件支持、hooks 模式已经不是优势、渲染循环管理麻烦、useEffect 使用困难、扩展性存疑等。最后推荐了 Svelte、Vue、Solid、Fresh、Astro、Preact、Qwik 等框架作为 React 的替代选择，并分析了各自的优势和使用场景。
- [《美团前端研发框架 Rome 实践和演进趋势》](https://segmentfault.com/a/1190000044080381)。这篇文章总结了美团到店前端研发框架Rome的实践和演进趋势。包含 Rome 整体的工程生态、演变路径、规模化升级以及工程框架外的开发辅助工具，还重点阐述了如何做框架度量和相关的业务实践，最后做整体的总结以及对工程框架的下一阶段的思考。
- [《将软件包现代化为 ESM 的经验》](https://blog.isquaredsoftware.com/2023/08/esm-modernization-lessons/)。这篇文章主要讨论了作者 Mark Erikson 在迁移Redux 相关库到 ESM 时所遇到的痛苦经历和学到的教训，包括打包配置的复杂性、缺乏权威指导、以及持续的 ESM 兼容问题。
- [《帮助人们轻松驾驭命令行？》](https://jvns.ca/blog/2023/08/08/what-helps-people-get-comfortable-on-the-command-line-/)。这篇文章主要讨论了如何帮助初学者克服对命令行的恐惧，并提供了一些实用的建议。首先，减少风险是非常重要的，例如定期备份数据、使用 git 进行代码管理、避免使用通配符等。其次，找到自己感兴趣的 “杀手级应用” 可以增加动力，如 ripgrep、jq、wget /curl、git 等。此外，观察他人如何高效地使用命令行也能激发学习的欲望。
- [《技术债先恶化后好转》](https://jeremymikkola.com/posts/2022_01_29_tech_debt_gets_worse_before_it_gets_beffer.html)。这篇文章讨论了技术债务如何在清偿过程中首先变得更糟,然后才会变得更好。1）清偿技术债务的项目开始时往往会产生更多技术债务,技术债务水平会先变得更糟,然后随着旧代码被删除才会变得更好，2）这种先恶化后改善的情况发生,是因为在重构系统时,必须保持旧系统可用,所以新旧系统会重复存在一段时间，3）不要等技术债务变得无法承受才开始清偿，4）一旦开始清偿技术债务,就不要半途而废,不然系统可能会陷入比开始前更糟的状态。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 333 多篇文章，包含了我们最新的观点和见解。以下是距离上次写周刊更新过的 32 篇星球内容，访问「q.sorrycc.com」了解更多。

- 302 - 《Rust 资料》
- 303 - 《再看 ChatGPT 等 AI 工具》
- 304 - 《Tauri 和 lencx_ChatGPT》
- 305 - 《Pake》
- 306 - 《代码门禁》
- 307 - 《SWC》
- 308 - 《RSC》
- 309 - 《调试》
- 310 - 《厦门游记 2023》
- 311 - 《Thinking in React Query》
- 312 - 《给我大娃的暑假编程计划》
- 313 - 《前端现状》
- 314 - 《Node 补丁方案》
- 315 - 《Suspense》
- 316 - 《Full Stack React 笔记（1）》
- 317 - 《按需打包 class 方法》
- 318 - 《GIAC 2023 深圳》
- 319 - 《2023 前端框架和技术（1）》
- 319 - 《技术产品答疑》
- 320 - 《2023 前端框架和技术（2）》
- 321 - 《2023 年中总结》
- 321 - 《杭州中考择校》
- 322 - 《2023 年中规划》
- 323 - 《Git 进阶》
- 324 - 《Framer Motion》
- 325 - 《preserveModules》
- 326 - 《手写 styled-components》
- 327 - 《我的小技巧集合 04》
- 328 - 《CSS Import》
- 329 - 《技术产品和技术债》
- 330 - 《星球 Next》
- 331 - 《长沙印象》
- 332 - 《npm 包可用性检测》
- 333 - 《翻译 epub》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i1/O1CN012PKj751Mpid1UwVEO_!!6000000001484-0-tps-1158-371.jpg)
