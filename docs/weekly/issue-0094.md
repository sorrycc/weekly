---
title: "Socket AI、CSS 遮罩、Qwik RC、Source Map、1000X 工程师、Rome 12、Pnpm 8"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01AjgrL01ifZMDpdUyP_!!6000000004440-2-tps-1344-896.png_1200x1200.jpg"
titleImageCaption: "Cute and adorable cartoon Korean girl, along side pet"
publishedAt: "2023/04/03"
draft: true
---

## 一周要事

。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。

- 。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《介绍 Socket AI - ChatGPT 驱动的威胁分析 - Socket》](https://socket.dev/blog/introducing-socket-ai-chatgpt-powered-threat-analysis)。Socket 宣布推出基于人工智能的源代码分析解决方案，利用 ChatGPT 检查每个 npm 和 PyPI 包。当检测到包中存在潜在问题时，Socket 会将其标记并请求 ChatGPT 对其进行总结。Socket 的 AI 警告应视为建议而非绝对分析，因为 LLMs 的限制意味着跨文件分析等任务仍需持续改进。此外，Socket 还在不断增强静态分析功能，未来预计将进一步整合 LLMs，实现更复杂的 AI 引导分析。
- [《CSS 遮罩 - Ahmad Shadeed》](https://ishadeed.com/article/css-masking/)。本文介绍了 CSS 遮罩的定义、用法和几个实际应用案例。遮罩是一种隐藏元素部分内容而不删除它的技术，可以使用形状或渐变来显示或隐藏元素的部分内容。在 CSS 中，有几种方法可以遮罩元素，包括 mask 属性、clip-path 属性和 SVG <mask>。本文主要关注 mask 属性，它类似于 background 属性，并且可以使用图像和渐变进行遮罩。作者提供了许多实际应用案例，包括淡化图像、遮罩文本内容、遮罩列表、有趣的图像效果等。
- [《Qwik 达到了 RC 里程碑。》](https://www.builder.io/blog/qwik-rc-milestone)。Qwik 发布了 v1 Release Candidate 版本，这是一个重要的里程碑。Qwik 是一款现代化的 Web 应用程序框架，设计用于即时启动应用程序，无论应用程序大小如何。Qwik 使用一种创新的方法，“流式” 地向最终用户传输 JavaScript 块，从而自动消除了其他框架中需要的许多手动性能优化，从而实现更好的开发人员体验。Qwik 采用熟悉、简洁和易于使用的设计，使用众所周知的 JSX 语法、带有 hooks API 风格的函数组件，并通过利用信号实现反应式。Qwik 的独特 JavaScript 流式处理功能由可恢复执行模型提供支持，实现了无与伦比的用户体验和最高的 Google Core-Web-Vitals 分数。
- [《使用 Zod 和 JSDoc 进行 JavaScript 类型定义》](https://blog.jim-nielsen.com/2023/types-in-jsdoc-with-zod/)。本文介绍了如何在纯 JavaScript 文件中使用 JSDoc 注释和 Zod 类型库来推断类型。通过这种方法，可以在编写代码时获得类型提示和检查，并在运行时使用类型。这种方法不需要编译、转换或配置任何东西，因此非常适合小型项目。
- [《Twitter 的推荐算法》](https://blog.twitter.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm)。Twitter 公布了其推荐算法的工作原理，该算法将每天发布的大约 5 亿条推文缩减到最终出现在用户设备上的少数优质推文。Twitter 的推荐系统由许多相互连接的服务和作业组成，包括从不同的推荐来源提取最佳推文、使用机器学习模型对每个推文进行排名、过滤掉用户已屏蔽的推文等。这篇博客将介绍算法如何为用户的时间轴选择推文。
- [《什么是 Source Map》](https://web.dev/source-maps/)。本文介绍了源代码映射（source maps）的基本知识，以及它们如何生成和改善调试体验。源代码映射是以 “.map” 结尾的文件，包含了关于编译后的代码如何映射回原始代码的重要信息，使开发人员能够轻松地进行调试。大多数构建工具都可以生成源代码映射文件，例如 Vite、webpack、Rollup、Parcel、esbuild 等。此外，源代码映射还支持扩展，开发人员可以自定义字段来帮助集中精力处理代码。
- [《每两个新的 Npm 软件包中就有一个是 SEO 垃圾邮件》](https://blog.sandworm.dev/one-in-two-new-npm-packages-is-seo-spam-right-now)。据报道，超过一半（约 185,000 个）提交到 npm 的新软件包都是 SEO 垃圾邮件。这些空软件包只有一个 README 文件，其中包含指向各种恶意网站的链接。大多数垃圾邮件软件包来自一个针对俄语用户的 Telegram 频道。这些软件包的名称设置为与各种敏感主题的搜索匹配，如乌克兰战争或俄罗斯天然气公司的投资决策。另外，还出现了承诺免费 Fortnite V-Bucks 的虚假软件包。
- [《如何拥有充裕的时间》](https://world.hey.com/dhh/how-to-have-buckets-of-time-38693993)。本文介绍了一种管理时间的技巧，即将相关任务放入一个桶中，让这个桶积累直到满，然后一次性处理。这与试图在数不清的打断管道中捕捉每个任务形成对比，如果你让它们滴答滴答地流逝，它们会将你的一天淹没。作者强调，时间并不是稀缺资源，注意力才是，找到你的桶，培养耐心让它们填满，然后逐个清空。这是 10X 生产力的窍门。
- [《发布 react-router@6.10.0・remix-run/react-router》](https://github.com/remix-run/react-router/releases/tag/react-router%406.10.0)。React Router 6.10.0 发布，增加了一些数据路由标志，包括 future.v7_normalizeFormMethod，可以将 useNavigation () 和 useFetcher () 的 formMethod 字段规范化为大写 HTTP 方法，以与 fetch ()（以及某些 Remix）行为对齐。此外，还修复了一些错误，并更新了 @remix-run/web-fetch@4.3.3。
- [《1000X 工程师》](https://kadekillary.work/posts/1000x-eng/)。本文介绍如何通过一系列命令行包装函数来使用 OpenAI API 提高程序员的生产力。作者首先介绍了如何获取 OpenAI API 密钥，然后演示了如何使用 API 来回答各种问题、生成数据集、创建图像等。作者认为，未来的开发者生产力将会是一个重要的竞争优势，而采用借助人工智能的工作流程可能会更加高效。虽然这并不意味着程序员将被替代，但它提供了一种解决模糊领域中更大问题的有趣新方法。
- [《Rome v12 发布》](https://rome.tools/blog/2023/03/28/rome12/)。Rome 版本 12 已推出，新增了 JSON 支持、新的 lint 规则、导入排序等功能。Rome 现在支持 JSON 文件，用户可以通过 CLI 或 LSP 格式化 JSON 文件，并在解析 JSON 文件时使用 Rome 的诊断工具。此外，Rome 还支持 TypeScript 4.7 和 TypeScript 5.0 的所有新功能。该版本还提供了导入排序功能，用户可以通过配置文件控制该功能。Rome 还增强了配置文件的诊断和恢复功能，以及自动发现配置文件和指定配置文件路径的功能。该版本还添加了新的 lint 规则和更多配置选项。
- [《从 Create React App (CRA) 迁移到 Vite》](https://www.robinwieruch.de/vite-create-react-app/)。本文介绍了如何将现有的 Create React App（CRA）项目迁移到 Vite，以创建一个现代的 React 单页应用程序。作者提供了一份快速迁移指南，包括安装 Vite 和相关依赖、更改 package.json 文件中的脚本、重命名 JSX 文件的扩展名等步骤。此外，如果需要保留 ESLint、TypeScript、react-testing-library 等配置，作者还提供了相应的教程链接。最后，作者列举了一些可能出现的问题及其解决方案。
- [《为什么工程师需要写作》](https://www.developing.dev/p/why-engineers-need-to-write)。本文讨论了写作在软件工程中的重要性。软件工程师需要写技术问题、代码评论和设计文档等，因为编写软件是协作的过程。优秀的写作能力可以提高软件工程师的效率和影响力。此外，写作还是影响他人最可扩展的方式之一。即使未来 AI 工具可以代替我们写作，写作仍然有价值，因为它可以强制将思维转化为连贯的逻辑叙述，同时也能够激发更多的创意。因此，写作对于软件工程师来说是一项必备技能。
- [《Tailwind CSS 3.3：扩展的颜色调色板、ESM/TS 支持、逻辑属性等》](https://tailwindcss.com/blog/tailwindcss-v3-3)。Tailwind CSS 发布了 3.3 版本，带来了用户一直期待的一些新功能以及一些未知但有用的新功能。其中包括扩展颜色调色板、ESM 和 TypeScript 支持、简化 RTL 支持、精细调整渐变颜色停止位置、一键截断多行文本、新的行高修改器、无 var() 的 CSS 变量、可配置字体变量设置、新的列表样式图像工具和连字符工具等。此外，该版本还添加了更多的逻辑属性实用程序，以便在 LTR 和 RTL 语言之间进行样式设置。升级项目只需从 npm 安装最新版本即可。
- [《一个完整的视觉指南，帮助理解 Node.js 事件循环》](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)。本文介绍了 Node.js 事件循环的视觉指南。文章首先回顾了 JavaScript 中的异步编程，然后介绍了 Node.js 运行时和其核心组件之一的 libuv 库。接着，文章解释了在 Node.js 运行时中代码执行的过程，并探讨了 libuv 如何处理异步操作。最后，文章详细介绍了事件循环的工作原理和不同队列的优先级顺序。通过这篇文章，读者可以更好地理解 Node.js 事件循环，从而编写出更高效的应用程序。
- [《发布 GitHub Actions 扩展适用于 VS Code | GitHub 博客》](https://github.blog/2023-03-28-announcing-the-github-actions-extension-for-vs-code/)。GitHub 发布了官方的 GitHub Actions VS Code 扩展程序的公共测试版。该扩展程序支持编写和编辑工作流程，并帮助用户管理工作流程运行，无需离开 IDE。使用该扩展程序，用户可以在不离开编辑器的情况下管理工作流程，轻松监控存储库中的工作流程运行，取消和重新运行它们，或者为手动触发的工作流程触发新的运行。此外，用户还可以列出所有受支持级别（组织、存储库和环境）的可用密钥和变量。扩展程序提供了语法高亮、集成文档、验证和代码完成等功能，以提高编辑工作流程的体验。
- [《介绍 Nuxt DevTools・Nuxt》](https://nuxt.com/blog/introducing-nuxt-devtools)。Nuxt DevTools 是一种新工具，旨在帮助开发人员了解 Nuxt 应用程序并进一步提高开发体验。该工具提供了更好的透明度，可以找到性能瓶颈并帮助您管理应用程序和配置。它作为实验性模块发布，并在安装后添加一个小图标，点击它将打开 DevTools 面板。该工具包括许多功能，如页面、组件、导入、模块、挂钩、应用程序配置、负载和数据、终端等。Nuxt DevTools 还可以扩展，允许模块贡献其自己的视图，以提供其集成的交互式数据和游乐场。
- [《发布 v8.0.0・pnpm/pnpm》](https://github.com/pnpm/pnpm/releases/tag/v8.0.0)。pnpm 发布了最新版本 v8，其中包括一些重要的更改和更新。首先，不再支持 Node.js 14。其次，大多数配置更改与对等依赖关系有关，其中 auto-install-peers、dedupe-peer-dependents 和 resolve-peers-from-workspace-root 等设置已默认启用。此外，还采用了 Lockfile v6，该格式通过从软件包 ID 中删除哈希来提高锁定文件的可读性，并对导入器部分中的字段进行了一些重新排列。同时，pnpm-lock.yaml 文件也更加抗 git 合并冲突。最后，直接依赖项现在会被去重，如果一个依赖项同时存在于项目和工作区根目录中，则只会链接到工作区根目录。
- [《关于 Svelte 的想法》](https://tyhopp.com/notes/thoughts-on-svelte)。本文介绍了作者在一个月内使用 Svelte 和 SvelteKit 构建个人 RSS 阅读器的经验，并分享了对 Svelte 的看法。作者认为 Svelte 的组件格式、内置存储和事件分发 API 是其优点，但反应语句、等待块和过渡动画 API 则是其缺点。作者表示，Svelte 适合个人项目，但可能不适合大型企业项目。最后，作者更新了一些评论，解决了对过渡动画 API 的疑虑。
- [《从 Web SQL 到 SQLite Wasm：数据库迁移指南 - Chrome 开发者》](https://developer.chrome.com/en/blog/from-web-sql-to-sqlite-wasm/)。本文介绍了如何将现有的 Web SQL 数据库迁移到基于 SQLite 数据库、编译为 Web Assembly（Wasm）并由 Origin Private File System 支持的 SQLite Wasm。作者提供了四个步骤，包括将 Web SQL 数据库翻译成 SQL 语句、导入数据到 SQLite Wasm、释放 Web SQL 存储空间以及在迁移后使用数据。通过这种方式，用户不会注意到他们的数据已经被迁移到 SQLite Wasm 中，并且不再存在于 Web SQL 中。虽然这个过程可能需要一些初始努力，但更强大、灵活和未来可扩展的数据库解决方案的好处使得它值得投资。
- [《新的 React 文档似乎假装单页面应用程序不再存在 | Wasp》](https://wasp-lang.dev/blog/2023/03/17/new-react-docs-pretend-spas-dont-exist)。React 发布了新文档，网址为 https://react.dev/。虽然它看起来很棒，并且有很多改进，但引起社区关注的一个部分是 “开始一个新的 React 项目”。强烈建议启动新的 React 项目的方法是使用 Next.js 等框架，而传统的使用打包程序（如 Vite 或 CRA）的路线则相当不被推荐。Next.js 是一个很棒的框架，其受欢迎程度的上升在很大程度上归功于通过服务器端渲染（SSR）实现 SEO 优化的回归。对于依赖于 SEO 的静态站点和页面，使用提供 SSR 的框架确实是有意义的。但是，对于典型的单页应用程序（SPA）呢？那些生活在认证后面（根本不需要 SEO）的仪表板式工具，以及 React 最初设计的应用程序，仍然存在。
- [《通过 WebAssembly 使用 Pages 功能，您可以选择任何语言。》](https://blog.cloudflare.com/pages-functions-with-webassembly/)。Cloudflare 宣布支持 WebAssembly，允许开发者使用除 JavaScript 以外的其他语言构建 Pages Functions 项目。在 Cloudflare Pages Functions 中，WebAssembly 模块的导入方式与 Workers 类似，用户可以将 .wasm 文件作为 WebAssembly 模块导入，然后直接从 Functions 中使用。这项工作还支持导入文本和二进制模块类型，这些非标准化模块对于需要导入原始文本块（如 HTML 文件）或原始数据块（如图像）的用户非常有用。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）create-umi 支持从 npm 模版创建项目，2）自动检测 esbuild 压缩后 helper 会导致 var 变量冲突的问题。
- 新学到小 Tip +1，随时带「指甲刀」，永远保持合适的指甲长度敲击键盘。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 270 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 282 - 《我的小技巧集合 02》
- 281 - 《ChatGPT 账号商是如何炼成的》
- 280 - 《构建工具应该包含哪些能力》
- 279 - 《调研 Tree Shaking 实现》

## 每周一图

![](https://img.alicdn.com/imgextra/i4/O1CN01XwjxvP1ZiTKPu0ijm_!!6000000003228-0-tps-528-500.jpg)
