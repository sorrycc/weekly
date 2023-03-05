---
title: "Signals、Signia、Replit、ChatGPT、CHIPS、技术债"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01xUHzjd1fClawQpRcR_!!6000000003971-2-tps-1536-1024.png_1200x1200.jpg"
titleImageCaption: "Macro Photography, Miniature People, Apple"
publishedAt: "2023/03/06"
---

## 一周要事

![](https://img.alicdn.com/imgextra/i3/O1CN010xNExu1qokDDG3L8W_!!6000000005543-0-tps-2176-1404.jpg_1200x1200.jpg)

我们新增了「MDH Weekly · 深度好文」的 RSS 订阅服务，欢迎使用 Reeder、Readwise 等客户端订阅。该服务通常会在每天中午为大家推荐与前端相关的好文，并且为文章标题和概要提供中文翻译和总结，这两个功能均是 Powered by ChatGPT。这将大大节约我们的时间，让我们更快地完成文章阅读。根据我的经验，至少有一半以上的文章只需要浏览概要即可。将文章大致浏览一遍后，在脑海中留下一个大概的印象，以便需要时能够搜索到或回忆起来即可。

**注：订阅链接是 https://mdhweekly.com/articles.xml 。**

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。

- tanstack query [v5.0.0-alpha.0](https://github.com/TanStack/query/releases/tag/v5.0.0-alpha.0) 发布，传参方式改变等。
- eslint [v8.35.0](https://github.com/eslint/eslint/releases/tag/v8.35.0) 发布，内置规则复用包等。
- zx [v7.2.0](https://github.com/google/zx/releases/tag/7.2.0) 发布，新增 retry 函数等。
- Github action 实验性[提供](https://github.blog/2023-03-01-github-actions-introducing-faster-github-hosted-x64-macos-runners/) 12 核 macOS 机器。
- Github action 支持自动从其他 CICD 平台[迁移](https://github.blog/2023-03-01-github-actions-importer-is-now-generally-available/)。
- Gtihub 个人资料支持配置[性别代词](https://github.blog/changelog/2023-03-01-add-pronouns-to-your-github-profile/)。
- TypeScript [v5.0.1-rc](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/) 发布，新装饰器位置调整等。
- Vscode [v1.76](https://code.visualstudio.com/updates/v1_76) 发布，快速切换预设等。
- Volar 支持了 Web IDE 环境的[类型提示](https://github.com/volarjs/vscode-typescript-web)。
- remix [v1.14.0](https://github.com/remix-run/remix/releases/tag/remix%401.14.0) 发布，支持热更新等。
- React Native 仓库将[迁移](https://github.com/facebook/react-native/pull/36270)至 monorepo 。
- pnpm [v7.29.0-0](https://github.com/pnpm/pnpm/releases/tag/v7.29.0-0) 发布，可配置去除重复对等依赖项等。
- React 文档新增[井字棋](https://beta.reactjs.org/learn/tutorial-tic-tac-toe)教程。

## 深度好文
> 好文推荐。本周开始，好文总结部分尝试用 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本，先试运行一段时间，有建议可留言反馈。

- [《Oops, You Wrote a Database》](https://dx.tips/oops-database)。本文作者讲述了一种关于开发人员对于简单持久性的糟糕判断的情况，即最初可能只是需要一些基本的键值存储，但随着项目的发展，不断地添加新功能，最终可能就自己开发了一个完整的数据库系统。文章中提到，对于团队而言，开发者们手动去维护和解决数据持久性问题是没有必要的。文章建议团队可以使用成熟的数据库解决方案，并在此基础上根据实际需求进行扩展和调整，这样可以让开发人员更专注于业务逻辑的开发，同时也能更好地保证应用的性能、稳定性和数据安全性。
- [《Demystifying Create React Signals Internals · Daishi Kato's blog》](https://blog.axlight.com/posts/demystifying-create-react-signals-internals/)。本文主要介绍了 create-react-signals 库的内部工作原理，这个库的主要目的是将 React 组件中的状态管理从 React 自身分离出来，并使用 signals 来实现状态管理。Signals 是一种包含订阅、获取和设置值等功能的存储对象。文章讲解了如何使用自定义 JSX 转换器将 Signals 转换为可在 React 中使用的组件，以及如何处理对象类型的信号和跳过 diffing 等问题。作者认为，Signals 仍然是 React 中一个开放的研究领域，而使用 Observable 作为新的基元可以进一步探索这种方法。
- [《The JavaScript Site Generator Review》](https://www.zachleat.com/web/site-generator-review/)。该篇文章对当前流行的七种 JavaScript 网站生成器进行了评论。对于 npm 安装时间、客户端 JavaScript 基线、node_modules 权重、npm 审计、遥测（TELEMETRY）等内容进行了测试。其中，有些工具使用创建 x 包来安装依赖，并且包括了帮助用户安装依赖的步骤。然而，这些工具中有一些隐藏了 npm 审计结果（包括关于高严重度的安全漏洞）。还有一些工具默认开启了遥测功能，需要用户选择退出。此外，该文还附带了作者之前的评论和文章链接。
- [《Effective Higher-Order Components :: Building Better Software Slower》](https://www.bbss.dev/posts/effective-hocs/)。本文介绍了 React 中的高阶组件（Higher-Order Components，简称 HOC），它是一个接受组件的函数，并在附加逻辑的包裹下返回它。作者指出，虽然 HOC 带来了无限的可能性，但实际应用应限于透明地添加包装或逻辑。同时，作者提出了 HOC 的一些惯例和注意事项，例如 HOC 不应该改变所提供的组件的 API，HOC 应该有一个符合 withNoun 模式的名字，除了组件本身之外，HOCs 不应该有任何参数等等。此外，作者还介绍了一些最常见的 HOC，例如 Props记录、添加格式化等。最后，作者强调，HOC 应该是一个减轻 JSX 精神负担的工具，而不是炫耀函数式编程技巧的机会。钩子是一个更可预测的、明确的模式，但好的 HOC 依然存在并提供了强大的模式。
- [《Deploy a Cloudflare Worker from Replit – anytime, anywhere》](https://blog.replit.com/cloudflare-workers)。Cloudflare 与 Replit 合作，使开发人员能够轻松地将 Cloudflare Workers（无服务器函数）部署到全球网络，并随时随地从任何设备管理其项目。使用 Cloudflare Workers 模板，可以在 Replit 项目中直接构建无服务器函数，并将其部署到覆盖全球 275 个位置的高度可扩展、低延迟的 JavaScript 执行环境中。开发人员可以使用 Cloudflare Workers 在 Replit 上构建 API、处理网站上的表单提交、进行 A/B 测试以及在边缘缓存内容等。通过 Cloudflare 和 Replit 提供的工具和资源，开发人员可以专注于开发出色的应用程序。
- [《Introducing ChatGPT and Whisper APIs》](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)。OpenAI 宣布，其 ChatGPT 和 Whisper 模型现已可用于 API，让开发者能够使用尖端的语言和语音转文本功能。通过一系列系统级别的优化，自去年 12 月以来，ChatGPT 的成本降低了 90％；现在将这些节省成本传递给 API 用户。开发者现在可以在 API 中使用我们的开源 Whisper large-v2 模型，获得更快速、更具成本效益的结果。Snap Inc.、Quizlet、Instacart 和 Shopify 等公司已经开始使用 ChatGPT API 和 Whisper API。OpenAI 还改进了 API 服务条款以更好地满足开发者的需求。同时，OpenAI 还提供专用实例，使开发者能够深入控制特定模型版本和系统性能。
- [《Use Maps More and Objects Less》](https://www.builder.io/blog/maps)。本文介绍了 JavaScript 中 Object 和 Map 的区别，以及何时应该使用哪种数据结构。虽然 Object 可以存储任意键值对，但是在需要频繁添加和删除键的情况下，使用 Map 比使用普通 Object 更好。Map 还解决了 Object 存在的一些问题，如内置键问题和迭代问题。此外，Map 还具有保留键顺序、支持不同类型键等优点。文章还介绍了 WeakMap 和 Set 等相关概念，并讨论了如何将 Map 和 Set 转换为 Object 和数组进行序列化和反序列化。
- [《ChatGPT use case examples for programming - RisingStack Engineering》](https://blog.risingstack.com/chatgpt-use-case-examples-for-programming/)。本文介绍了一些人们如何在职业网页开发中使用 GPT 等 “AI” 工具。作者分享了他的同事们使用 GPT 及其各种变体的经验，以帮助读者更好地理解它们的实用性。例如，Code GPT 是一个 VS Code 插件，可以从注释提示中生成代码、生成单元测试、查找问题、重构代码、记录和解释代码、以及提出问题。ChatGPT 则可用于编写 Mongo 查询、代替 StackOverflow 等。然而，作者指出，使用这些工具时需要小心检查生成的内容，因为 GPT 可能会产生不对的结果。此外，尽管 “AI” 不会大规模取代就业岗位，但它将提高生产力，就像 Photoshop 是更好的画笔一样。
- [《GitHub Actions Importer is now generally available | The GitHub Blog》](https://github.blog/2023-03-01-github-actions-importer-is-now-generally-available/)。GitHub 推出了 GitHub Actions Importer，这是一款可帮助用户从 Azure DevOps、CircleCI、GitLab、Jenkins 和 Travis CI 迁移到 GitHub Actions 的工具。该产品是官方 GitHub CLI 的扩展，从今天开始任何 GitHub 用户都可以免费使用。
- [《React vs Signals: 10 Years Later》](https://dev.to/this-is-learning/react-vs-signals-10-years-later-3k71)。本文探讨了 JavaScript 中的信号（Signals）技术，以及它与 React 的区别和联系。信号是一种细粒度的响应式编程技术，可以用于前端开发中的数据流管理。尽管在 React 和虚拟 DOM 的兴起中，信号被认为是不可预测和危险的模式，但实际上信号从未消失，而是以第三方库或框架的形式存在。本文介绍了 SolidJS，这是一种新型的信号技术，它采用了组合、单向数据流和显式变异等原则，并将所有东西都视为 Effect，与 React 不同的是，它不会将所有操作视为纯函数，而是通过隔离更新来实现状态变化。作者认为，React 曾经 “修复” 了前端开发，但现在信号技术的复兴又将其推向了新的竞争时代。
- [《I'm not sure I understood this article. I think... — DEV Community》](https://dev.to/dan_abramov/comment/256g9)。这是 Dan 对于上一篇文章（Signals 主题）的评论。他探讨了 React 和 Solid 在处理渲染逻辑上的不同策略。React 的核心思想是，能够编写渲染逻辑，使其在初始化和更新时都能够运行，并且不会与传递的数据不同步。Solid 则只有模板中的 “空洞” 是响应式的，因此不能像 React 那样使用 if 语句和控制流。作者认为，Solid 的优点在于可以避免部分逻辑的重新执行，但这并不是最终的理想状态。通过编译器，可以实现在不重组代码的情况下自动确定 “组”，以达到类似 useMemo 的优化效果。最后，作者指出 React 不需要将渲染逻辑从内向外编写才能实现更新，这是 React 默认具备的响应性。
- [《The Evolution of Signals in JavaScript》](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)。“Signals” 是一种前端技术，最早可以追溯到 20 世纪 60 年代的研究。它们在 JavaScript 中的应用可以追溯到最初的声明式 JavaScript 框架，并在多年间以不同的名称出现过。现在，它们似乎又回到了人们的视野中，出现在各种框架中。这篇文章介绍了 Signals 的历史和背景，并讨论了其未来的发展趋势。同时，作者还介绍了一些使用 Signals 的 JavaScript 框架，如 SolidJS、Vue、Preact 等。
- [《Working with the industry to evolve CHIPS - Chrome Developers》](https://developer.chrome.com/en/blog/working-with-the-industry-to-evolve-chips/)。Cookies Having Independent Partitioned State (CHIPS) 是一种隐私沙箱技术，允许开发人员将 cookie 选择为 “分区” 存储，每个顶级站点有单独的 cookie 存储器。 CHIPS 的示例用例包括任何需要跨站子资源的会话或持久状态的情况，该状态仅限于用户在单个顶级站点上的活动，例如第三方聊天小部件、地图嵌入、子资源 CDN 负载平衡、无头 CMS 提供商等。 CHIPS 正在开发中，旨在成为开放网络标准。
- [《Remote Access to Your Repls via SSH》](https://blog.replit.com/ssh)。Replit 是一个基于云的编码平台，它的所有付费计划都增加了使用 SSH 远程访问 Repls 的功能。订阅了付费计划的用户可以添加他们的 SSH 密钥，并远程操作他们的 Repl。此举使用户能够充分利用 Replit 的功能，同时继续使用其本地开发环境。Replit 将每个 Repl 放入自己的容器中，一旦连接被打开就会运行。在该容器内，一个 SSH 服务器处理所有远程访问需求。一个代理接收连接，验证密钥，并将 SSH 连接通过加密的 SSH 隧道路由到 Repl。
- [《Introducing Signia》](https://tldraw.substack.com/p/introducing-signia)。TLDraw 的开发团队发布了其核心反应式状态管理系统的开源项目 Signia。该库是用于使用基于逻辑时钟的新惰性反应模型处理细粒度反应值（称为 “信号”）的原始库，它诞生的原因是需要高效地处理经常更改的大型派生不可变集合。除了核心库之外，还发布了与 React 绑定的内容。Signia 的 API 类似于 Jotai、@preact/signals 和 Recoil 等类库，其主要区别特征是具有增量派生和内置支持回滚的事务。Signia 的反应性系统基于单个整数，即全局逻辑时钟，每当更新根状态值时，该时钟就会递增。比较时钟值允许 Signia 始终缓存派生值，而不管它们是否正在被积极观察。Signia 的响应式系统基于逻辑时钟和差异，可以实现增量计算派生值。
- [《The 25 Percent Rule for Tackling Technical Debt》](https://shopify.engineering/technical-debt-25-percent-rule)。这篇文章讨论了技术债务的不同类型，并提出了一种 “25% 规则”，即每周花费 10％的时间解决日常技术债务，另外 10％的时间解决每周技术债务，剩下的 5％用于处理每月和每年的技术债务。作者认为，解决技术债务并不是大规模修复的问题，而是通过文化建设来实现。通过改进日常工作中的代码、庆祝重构代码的能力以及知道何时选择好的而不是完美的，可以帮助解决技术债务问题。
- [《You Don't Need a Build Step》](https://deno.com/blog/you-dont-need-a-build-step)。本文探讨了为什么现代 Web 开发需要构建步骤，以及如何使用 Deno 和 Fresh 等工具实现无需构建的开发。文章介绍了构建步骤的来龙去脉，包括编译、压缩、打包和代码分割等过程，并列举了一些流行的构建工具。作者认为，构建步骤是现代 Web 开发不可避免的一部分，但也带来了复杂性和长时间的构建时间。使用 Deno 和 Fresh 可以实现无需构建的开发，从而提高开发效率和代码质量。
- [《Three ways to activate an inspector in Node.js | pawelgrzybek.com》](https://pawelgrzybek.com/three-ways-to-activate-an-inspector-in-node-js/)。本文介绍了三种激活 Node.js inspector 的方法，其中一种是使用 NODE_OPTIONS 环境变量来调试间接运行 Node 的进程。如果您是 Node.js 调试器的新手，可以查看作者之前发布的两篇文章：“在 Google Chrome 中进行基本的 Node.js 调试” 和 “解释 Visual Studio Code 调试器中的继续、步过、步入和步出操作”。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）新增 `esbuild.esbuildMinifyIIFE` 配置项，解 esbuild 压缩时 helpers 命名冲突的问题，2）新增 `umi deadcode` 命令，执行后会告诉你有哪些文件没有被用到，3）新增 `helmet` 配置项，允许配为 `false` 不引入 react-helmet-async 模块，减少一点尺寸。
- ChatGPT API 更新，速度快很多，价格还减少到 1/10，这周社区基本都为着这个转了。我也做了些事，1）在 Replit 上搭了个 ChatGPT API 的代理服务器，给[「二狗」Siri](https://t.me/yqtalk/240) 用，快多了，2）实现了一个简单的工具，[输入是 url，输出是文章总结](https://t.me/yqtalk/234)，也是这篇周刊「深度好文」的内容来源，3）在 2 的基础上支持了 BILIBILI 的视频总结。
- 第一次尝试公众号付费，发布了几周前写的[《程序员高效工作法》](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247486134&idx=1&sn=c69256f02f74feb1477b142656346407&chksm=a680902091f719368b94f2d97e72f27e9e51f1d6b3f1edee9a20e781b35f6ab1e8d817335303&scene=178&cur_album_id=2199691505051729920#rd)，截止 2023.3.4，共有 58 人付费人数。
- [玩了几小时「卧龙」](https://t.me/yqtalk/238)，游戏是好游戏，但是 PC 版的优化太差了，3070ti 的显卡读感觉帧率明显不行，一顿一顿的，不够流畅。准备等买的 ps5 版到了再重新玩了…
- TODO：mdh weekly with chatgpt
	- news.mdhweekly.com

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单。

- 「即时设计」：招前端工程师、前端实习生，base 地「北京朝阳区达美中心」，技术栈要求「React、TypeScript、WASM，专注图形学」，薪资范围「15k——30K * 15」，联系方式「shenchen.shao@js.design」。
- 「字节跳动-懂车帝」：招Web前端，base 地「字节跳动-懂车帝」，要求熟悉React、TS、小程序等，有汽车/ToB行业经验者优先，薪资范围「(18-36K) * 15」，联系方式「微信号：bukasy」。
- 「网易-智慧企业」：招高级 Web 前端工程师，base 地「杭州」，要求「精通 Vue 全家桶或者擅长商业 SDK 开发，有安全或者 ToB 行业经验者优先」，薪资范围「(15k-30k)*16」，联系方式「微信：smthok」。
- 「中移信息技术有限公司」：招前端开发工程师，base 地「深圳市福田区」，要求「计算机或相关专业本科及以上，掌握vue全家桶、electron、低代码相关，此岗位为中国移动正式员工」，薪资范围「年薪40-60万」，联系方式「微信号：baidu____或手机号：15013669204」。
- 「字节跳动」：招资深前端工程师/前端专家，base 地「北京大钟寺/上海科技绿洲/杭州八方城/深圳」，要求「太长，略」，薪资范围「30-60K」，联系方式「微信：zxry622」。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 270 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 270 - 《八方旅人2 速通》
- 269 - 《基于 ChatGPT 的 URL 系统》
- 268 - 《我的 RSS 订阅》
- 267 - 《读书笔记：交办的技术》

## 每周一图

![](https://img.alicdn.com/imgextra/i3/O1CN01Sg9mjM1tdF724a4Ns_!!6000000005924-0-tps-1160-854.jpg_1200x1200.jpg)
