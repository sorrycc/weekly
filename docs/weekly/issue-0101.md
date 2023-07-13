---
title: "WIP"
titleImage: ""
titleImageCaption: ""
publishedAt: "2023/05/29"
draft: true
---

## 一周要事

。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔。

- 。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。


- [《克劳德 2》](https://www.anthropic.com/index/claude-2)。我们很高兴地宣布推出新模型 Claude 2。Claude 2 的性能得到了提升，响应更长，可以通过 API 以及新的公开测试网站 claude.ai 进行访问。用户反馈称，Claude 易于交谈，清晰解释其思考过程，不太可能产生有害输出，并且记忆力更强。我们在编码、数学和推理方面对上一代模型进行了改进。例如，我们的最新模型在律师资格考试的多项选择题部分得分为 76.5%，比 Claude 1.3 的 73.0% 有所提高。Claude 2 在 GRE 阅读和写作考试中的得分超过了 90% 的申请研究生的成绩，而在定量推理方面的得分与中位数申请人相似。Claude 2 的输入和输出长度都得到了增加，用户可以在每个提示中输入多达 100K 的标记，这意味着 Claude 可以处理数百页的技术文档甚至一本书。Claude 现在也可以一次性写出更长的文件 —— 从备忘录到信件到故事，所有这些都可以一次性完成。此外，我们的最新模型在编码技能方面有了显著的提高。Claude 2 在 Codex HumanEval 的 Python 编码测试中得分为 71.2%，高于 56.0%。在 GSM8k（一套大型小学数学问题集）中，Claude 2 的得分为 88.0%，高于 85.2%。我们已经为 Claude 2 规划了一系列令人兴奋的功能改进计划，并将在未来几个月中逐步部署。Claude 2 目前在美国和英国普遍可用，我们正在
- [《您可能不需要Jest - Node.js原生测试运行器非常棒 | pawelgrzybek.com》](https://pawelgrzybek.com/you-might-not-need-jest-the-node-js-native-test-runner-is-great/)。文章主要介绍了 Node.js 原生测试运行器的一些特性和使用方法。现代的 JavaScript 运行时环境，如 Deno 和 Bun，以及像 Go 和 Rust 这样的现代编程语言都具备测试功能，Node.js 也在逐步跟上。Node.js 的测试运行器模块在 18 版本中首次实验性引入，并在 20 版本中稳定下来。此模块在出现错误时返回进程退出代码 1，否则返回 0。此外，文章还介绍了如何使用 node:assert 模块简化断言，以及如何执行所有匹配文件的测试。Node.js 在添加测试设施时功能有限，但几次迭代后，我们现在可以使用许多更常用的测试特性，如分组、模拟、挂钩等。此外，Node.js 在 18.11 版本中添加了观察模式，稍后在 19.2 版本中为测试运行器添加了观察模式。默认的人类可读测试报告（spec）可以替换为紧凑（dot）格式，如果这些选项都不符合你的需求，可以使用 npm 安装自定义报告，或者创建一个遵循 TAP（Test Anything Protocol）规范的自定义报告。最后，作者表示，使用 jest 也是可以的。
- [《使用耳语转录播客》](https://www.swyx.io/whisper-for-podcasts)。该文章是作者在邀请读者订阅他们的时事通讯，包括 AI 新闻和 DevRel/DevTools 新闻。目前已有超过 10,000 的订阅者，并会不定期更新新的帖子和项目。
- [《GitHub - privatenumber/minification-benchmarks: 🏃‍♂️🏃‍♀️🏃 JS minification benchmarks: babel-minify, esbuild, terser, uglify-js, swc, google closure compiler, tdewolff/minify》](https://github.com/privatenumber/minification-benchmarks)。这篇文章是一个关于 JavaScript 压缩器性能对比的报告，涵盖了 babel-minify、esbuild、google-closure-compiler、minify-js、swc、tdewolff/minify、terser 和 uglify-js 等多种压缩器。每个压缩器都在自己的进程中执行，设定了 20 秒的超时时间，并在压缩前后进行了完整性测试。压缩器的排名依据是压缩后文件的大小。测试结果显示，在多数情况下，uglify-js 和 swc 的表现最佳，它们不仅能有效地减小文件大小，还能在较短的时间内完成压缩任务。
- [《Sass：浏览器中的Sass》](https://sass-lang.com/blog/sass-in-the-browser/)。Natalie Weizenbaum 在 2023 年 7 月 7 日发布的文章中提到，Sass 现在可以直接在浏览器中运行。这得益于 Dart Sass 1.63 版本的发布，它正式支持 sass npm 包在浏览器中直接运行，不再需要通过服务器来编译 Sass。此外，Sass 还可以通过多种方式加载，包括 CommonJS require () 和 ES6 import，也可以通过打包工具（如 esbuild、Rollup、Vite 和 webpack）或者直接在浏览器中无需打包就可以加载。唯一的注意事项是，如果你在没有任何打包的情况下使用它，你需要设置一个导入地图以找到它所依赖的 Immutable 库。此外，Sass 网站上新增了一个长期期待的功能：Sass Playground，用户可以在浏览器中直接测试 Sass，并且始终使用最新版本的所有最新功能。

- [《发布 v2.0.0-beta.0 - reduxjs/redux-toolkit》](https://github.com/reduxjs/redux-toolkit/releases/tag/v2.0.0-beta.0)。这篇文章介绍了 Redux Toolkit 2.0 beta 版的更新内容，包括更新了许多 TS 类型以提高类型安全和行为，更新了 entityAdapter.getSelectors () 以接受一个 createSelector 选项，依赖于最新的 redux@5.0-beta.0 版本，并包括了 2.0 alpha 版之前的所有更改。此版本具有破坏性更改。文章还列出了一些新功能和破坏性更改的详细信息。
- [《现代HTML电子邮件（不再需要表格）。》](https://fullystacked.net/posts/modern-html-email/)。本文讨论了电子邮件开发中的问题，尤其是 Outlook 在 Windows 上的支持不足。传统的基于表格的布局已经成为过去式，现代的 HTML 和 CSS 标准开始被广泛采用。文章介绍了使用 div 元素、内联 CSS 和 AMP（加速移动页面）等技术来构建电子邮件的方法，并探讨了这些技术的优缺点。虽然电子邮件行业的进展缓慢，但它正在向着更一致和更现代的方向前进。
- [《在30秒内用TypeScript为WebAssembly分享Rust类型》](https://dawchihliou.github.io/articles/share-rust-types-with-typescript-for-webassembly-in-30-seconds)。本文介绍了在 Rust 中生成 WebAssembly 模块的 TypeScript 类型定义的问题，并提供了一种解决方案。作者使用了 wasm-pack 和 wasm-bindgen 来编译 Rust 代码为 WebAssembly，但生成的 TypeScript 定义中有许多 “any” 类型，不够友好。为了解决这个问题，作者使用了 Tsify 库来自动生成 TypeScript 绑定，并对 Rust 代码进行了一些修改。最终生成的 TypeScript 定义更加清晰易懂。文章还介绍了 Voy，一个基于 WebAssembly 的语义搜索引擎，以及其他几个生成 TypeScript 定义的库。
- [《关于RustConf的主题演讲 | Rust博客》](https://blog.rust-lang.org/2023/05/29/RustConf.html)。2023 年 5 月 26 日，JeanHeyd Meneide 宣布他们不再在 RustConf 2023 上发言。他们被邀请在会议上发表主题演讲，但两周后被告知该演讲将被降级为普通演讲，原因是 Rust 项目领导层做出的决定。这个决定是错误的，我们首先要公开道歉造成的伤害。我们辜负了你，JeanHeyd。邀请后降低演讲的想法是侮辱性的，任何领导人都不应该愿意接受。领导层正在努力全面弄清楚发生了什么以及如何防止这种情况再次发生。然而，我们希望分享一些措施，以减少类似事件再次发生的风险。失败的主要原因是领导层聊天的决策和沟通过程。领导层聊天是在 2021 年底前的 Moderation Team 辞
- [《如何做在创业小厂里做技术领导》](https://blog.meathill.com/management/how-to-be-a-tech-leader-in-startup.html)。这篇文章主要讲述了在创业小厂中如何找到技术研发带头人以及如何管理技术团队。作者认为，技术领导的首要工作是提升团队的短板，可以通过工具、流程、规范等手段来实现。推荐使用 Git、自动化测试、代码静态分析、故障收集等工具来提升代码质量；同时，建议采用敏捷开发方法，包括每日立会、需求评审会、技术评审会等流程来保证团队稳定可靠高效地输出技术产品。
- [《GitHub - vadimdemedes/pastel: 🎨类似Next.js的框架，用于用Ink制作的CLI。》](https://github.com/vadimdemedes/pastel)。Pastel 是一个基于 Ink 开发的类似于 Next.js 的 CLI 框架。它允许用户在 commands 文件夹中创建文件来添加命令，支持定义选项和参数，并使用 Zod 实现完全类型安全。此外，Pastel 还自动生成命令、选项和参数的帮助信息，并在底层使用经过测试的 Commander 包。Pastel 可以通过 create-pastel-app 快速搭建一个带有 TypeScript、linter 和测试设置的应用程序，也可以手动设置新项目并安装 Pastel 和 TypeScript。 Pastel 支持索引命令、默认命令、子命令和别名，并支持字符串、数字、布尔、枚举、数组和集合等类型的选项和参数。Pastel 还允许用户自定义应用程序名称、描述和版本，并提供了一组 API 来初始化 Pastel 应用程序并运行它们。
- [《React API的演变和代码重用》](https://frontendmastery.com/posts/the-evolution-of-react-patterns/)。本文介绍了 React 的演变历程和不同的代码重用模式，深入探讨了它们背后的思维模型和权衡。从最初的 Mixins 到 Higher-order components、Render props 和 Hooks，React 逐渐发展出更加简洁、灵活和易于理解的编程范式。作者指出，React 是一个提供低级原语的库，强调构建在稳定基础之上的架构和模式，以及应该优先考虑用户体验而非开发者体验。同时，随着 React 扩展到客户端和服务器端，我们需要更好地理解全栈 React 的边界和组合方式，以便更好地进行本地推理和代码管理。
- [《我为什么离开拉斯特》](https://www.jntrnr.com/why-i-left-rust/)。文章主要讲述了作者为何离开 Rust 项目。起因是 JeanHeyd Meneide 被选为 RustConf 的主题演讲嘉宾，但由于他在博客中对 Rust 反射的看法引起了一些团队成员的不满，导致 Rust 领导层将其从主题演讲嘉宾降级为普通演讲嘉宾。作者认为这样的行为极度不尊重专家，并且暴露了 Rust 组织的冷酷和无情。此外，JeanHeyd 曾批评 Rust 缺乏黑人代表性，因此作者也认为这次事件背后可能还有更深层次的问题。最后，作者呼吁 Rust 组织要对这次事件负责并采取措施避免类似事件再次发生。
- [《3种方法来找到你最糟糕的页面加载的JavaScript违规者》](https://performance.shopify.com/blogs/blog/3-ways-to-find-your-worst-javascript-offenders-for-page-load)。本文介绍了三种方法来评估 JavaScript 文件在页面加载中的影响。首先，使用 Lighthouse Treemap 根据字节大小排名 JavaScript 文件和模块，以便快速找出最大的依赖项。其次，使用 Chrome Dev Tools 性能选项卡根据脚本运行时间排名单个域的所有脚本。最后，使用 WebPageTest 根据阻塞时间排名脚本来源。作者建议使用这些方法来找到可以快速优化的低垂果实，然后再着手解决更复杂的问题。
- [《如何在React Router v6测试中避免嘲弄？》](https://webup.org/blog/how-to-avoid-mocking-in-react-router-v6-tests/)。本文介绍了如何使用 React Router (v6) 测试应用程序，并提供了一个示例包装函数，以帮助您可靠地测试页面导航。这个包装函数建立在 React Testing Library（RTL）的 render () 函数之上，并抽象了一个数据路由器提供者，以便您可以在不模拟的情况下进行编程测试。文章还介绍了 renderWithRouter 函数的实现和测试用例，并提供了一个 codesandbox 示例。最后，作者提到了关于测试主题的后续计划，包括如何避免 mocking。
- [《React应用中的状态管理》](https://reacthandbook.dev/state-management)。本文介绍了在 React 应用程序中管理应用状态的一种非常灵活的方法。具体而言，这适用于 SPA（单页应用程序）构建架构。本指南的目标受众是 React 工程师和架构师，他们不是初学者，要么正在寻求构建新应用程序的指导，要么正在理解其他人为他们所工作的应用程序做出的决策。本文详细介绍了 5 种不同类型的 React 应用程序状态，并探讨了使用 React API、数据获取库和全局存储来管理这些状态的最佳实践。同时，本文还提到了一些常见的 React 生态系统中的库，如 Redux、Zustand、Jotai 等。
- [《你需要多少内存来运行100万个并发任务？》](https://pkolaczk.github.io/memory-consumption-of-async/)。本文对比了异步和多线程编程在 Rust、Go、Java、C#、Python、Node.js 和 Elixir 等流行语言中的内存消耗。作者创建了一个基准程序，通过同时启动 N 个任务并等待它们完成来测试各种语言的内存消耗。结果显示，不同语言的运行时具有不同的权衡，有些轻量级且适用于少量任务，但随着任务数量的增加而扩展性差，而另一些初始开销高，可以轻松处理高工作负载。文章还指出，除了内存消耗之外，任务启动时间和通信速度等其他因素也同样重要。值得注意的是，在启动 100,000 个任务时，有些程序已经无法正常工作。
- [《写总结比读更多的书更重要 - Andreas Fragner》](https://www.andreasfragner.com/writing/writing-summaries)。本文作者认为，阅读并非追求页数或速度，而是要注重理解和思考。为了提高理解能力，读者需要在阅读时自问问题，并尝试回答这些问题。作者建议使用一个简单的框架来写书摘，包括总结书籍主旨、中心问题和个人所学到的重要内容。此外，作者还介绍了两种选择好书的方法：主题阅读和检视阅读。最后，作者提出了另一种分享阅读体验的方式，即与他人讨论所读书籍的思想和观点。
- [《GitHub - MineDojo/Voyager：一个具有大型语言模型的开放式体现型代理》](https://github.com/MineDojo/Voyager)。本文介绍了 Voyager，这是一个基于大型语言模型的具有开放式体验的生命学习代理，可以在 Minecraft 中持续探索世界、获得多样化技能并进行新颖的发现。Voyager 包括三个关键组成部分：1）自动课程设置，最大限度地促进探索；2）可执行代码的不断增长的技能库，用于存储和检索复杂行为；3）一种新的迭代提示机制，结合环境反馈、执行错误和自我验证以改进程序。Voyager 通过黑盒查询与 GPT-4 交互，避免了模型参数微调的需要。经验上，Voyager 表现出强大的场景下的生命学习能力，并展示了在玩 Minecraft 方面的卓越熟练度。它获得了比先前 SOTA 更多的独特物品（3.3 倍）、行程更长（2.3 倍），以及解锁关键技术树里程碑的速
- [《7.22.0版发布：明确的资源管理支持和导入属性解析 - Babel》](https://babeljs.io/blog/2023/05/26/7.22.0)。Babel 7.22.0 发布了，支持解析 / 转换明确资源管理提案的同步和异步变体，并支持导入属性的解析。此外，更新了装饰器的实现，添加了对 TypeScript 导入和导出语句的支持，以及将所有稳定 ECMAScript 功能的插件从 “-proposal-” 重命名为 “-transform-”。Babel 还提供 Open Collective 捐赠和直接与其合作实现新的 ECMAScript 提案的机会。更新还包括：明确资源管理、导入属性、装饰器更新和重命名软件包等。
- [《GitHub - vanjs-org/van: 🍦VanJS（Vanilla JavaScript）：世界上最小的反应式UI框架》](https://github.com/vanjs-org/van)。VanJS 是一个超轻量级、零依赖和无偏见的反应式 UI 框架，基于纯粹的 vanilla JavaScript 和 DOM。它提供了声明性 DOM 树组合、可重用组件、响应式状态绑定等功能，类似于 React，但不需要 React、JSX、转换、虚拟 DOM 或任何隐藏逻辑。VanJS 非常容易学习，只有四个导出函数在 API 中，并且提供了 TypeScript 支持。它的打包大小仅为 1.2kB，比大多数流行的 UI 框架小 100 倍以上。VanJS 旨在通过降低 UI 编程的入门门槛来构建更好的世界，没有商业化的意图或计划。如果您发现 VanJS 有趣或将来可能对您有用，请考虑支持该项目。
- [《2023年如何免费托管你的副业项目：从Auth到数据库》](https://dev.to/livecycle/how-to-host-your-side-projects-for-free-in-2023-from-auth-to-database-42im)。本文介绍了如何在 2023 年免费托管你的项目。涵盖了身份验证、数据库、网站托管、后端托管、定时任务和键值存储等方面。Clerk 可用于处理用户身份验证，PlanetScale 提供 MySQL 数据库服务，Vercel 和 Netlify 可用于网站托管，Fly.io 适用于 Docker 镜像托管，Upstash 则提供定时任务和 Redis 缓存服务。这些服务可以帮助你免费托管你的项目，并且随着你的项目发展，它们也可以进行扩展。这些服务都是基于无服务器技术，因为无服务器技术可以根据需要自动缩放，从而使成本保持低廉。
- [《Deno 1.34: deno编译支持npm包》](https://deno.com/blog/v1.34)。这篇文章介绍了 Deno 1.34 的更新内容，包括支持 npm 包的 deno compile、在 deno.json 和 CLI 标志中支持 Glob、使用 IP 地址的 TLS 证书等。此外，还有许多改进和错误修复，如配置文件改进、语言服务器改进、Deno API 更改、npm 和 Node 兼容性改进、V8 11.5 和 TypeScript 5.0.4 等。最后，文章还提到了 Deno KV，这是一个全球分布式数据库，现已进入 beta 测试阶段。
- [《Node JS与Bun的基准测试》](https://decode.sh/benchmarking-node-js-vs-bun)。这篇文章测试了使用 Bun 和 Node 的默认 HTTP 模块进行编译和未编译的性能表现。结果显示，未编译的 Bun 代码是四种方法中最快的，比第二快的未编译 Node 快 250％。尽管 Bun 仍不够稳定并且文档需要改进，但它的速度让人兴奋，可能会在未来的项目中使用。此外，文章还介绍了其他主题，如 Warp Terminal、设置 Node.js 用于生产和 Javascript 循环。
- [《Bun v0.6.3》](https://bun.sh/blog/bun-v0.6.3)。Bun.js has released support for node:vm, improvements to node:tls and node:http, test.todo(), test timeouts, and better preloading. The release also includes fixes to Bun's bundler, such as a crash when merging adjacent top-level variable declarations, assets copying to an incorrect output path, and minifier bugs involving template literals being incorrectly merged. Additionally, two memory leaks found in fetch() have been fixed, and improvements have been made to console.log(). Changes to WebSocket include a breaking change to publishToSelf behaviour and buffer support in WebSocket messages. Other bug fixes include fs.writeFile({ flag: "a" }) now appending to files instead of overwriting it and N-API finalizers being called with the correct data pointer and finalizer hint.
- [《使用TypeScript的React组件库》](https://atlassc.net/2023/05/23/react-component-library-with-typescript)。本文介绍了如何使用 TypeScript 创建 React 组件库的步骤。首先需要创建一个新目录并初始化 npm 包，然后安装必要的依赖项，包括 TypeScript、React 和 Rollup 等。接下来需要创建 tsconfig.json 和 rollup.config.js 文件，并在 src 目录中创建组件文件。最后可以使用 Rollup 进行打包并测试组件库。通过这些步骤，可以轻松地创建自己的基于 TypeScript 的 React 组件库。
- [《阿童木2.5 | 阿童木》](https://astro.build/blog/astro-250/)。Astro 2.5 发布了，其中包括数据集合和引用、混合渲染、自定义客户端指令、HTML 压缩、并行渲染和多态类型助手等功能。数据集合和引用允许用户在 src/content/ 文件夹中存储 JSON 和 YAML 文件，并从其他集合中引用这些数据；混合渲染允许在大多数静态站点中使用服务器路由；自定义客户端指令允许集成作者定义自己的客户端加载机制；HTML 压缩可以选择压缩 Astro 模板；并行渲染可以加速同时进行数据加载的多个组件的渲染；多态类型助手可以定义接受与内置元素相同道具的组件。此外，该版本还包括其他 bug 修复和改进。
- [《更快的Sandpack Transpiler之旅》](https://codesandbox.io/blog/the-journey-to-a-faster-sandpack-transpiler)。这篇文章介绍了 Sandpack 团队为了解决性能问题而进行的优化和重构工作。他们一开始使用 babel 和 meriyah 进行转译，但是由于需要在客户端上转译更多的代码，他们寻找了一个更快的转译器，最终选择了 Sucrase。然而，Sucrase 在处理大文件时存在问题，因此他们对其进行了优化和重写，使其比 esbuild 更快。接下来，他们决定使用 Rust 语言重写 Sucrase，以获得更好的内存管理和更高的性能。他们首先重写了解析器，使用 Ropey 库和字符向量来提高性能，然后重写了转换器，使用状态字符迭代器和字符串引用来减少拷贝和提高性能。最终，经过测试，新的 Sucrase 比之前的版本快两倍以上，并且还有更多的优化空间。
- [《使用Bun.js作为捆绑器》](https://shaneosullivan.wordpress.com/2023/05/17/using-bun-js-as-a-bundler/)。Bun.js 是一个新的 JavaScript 运行时，旨在实现极速。作者 Jarred Sumner 在 Twitter 上宣布他们已经发布了一个新的代码捆绑器的 beta 版本，展示了与其他捆绑器相比的惊人速度提升。该文章介绍了作者如何使用 Bun.js 来加速他的构建系统，并讨论了他在使用过程中遇到的问题和解决方案。尽管 Bun.js 还处于开发阶段，但其速度和功能使其成为一个非常有用的工具。最后，作者推广了他的一个 iPad / 平板应用程序 KidzFun.art，这是一个适合孩子们画图、做数学题、制作 GIF 等的 PWA 应用。
- [《我正在建立一个公司》](https://cpojer.net/posts/building-a-company)。文章介绍了作者创立的新游戏公司 Nakazawa Tech，以及他们正在制作的第一款游戏 Athena Crisis。作者提到自己希望通过建立这个公司来实现新的个人目标和原则，例如：构建他所希望存在的事物、关注真正重要的事情、创造难忘的体验和艺术等。同时，作者还强调了开源对于公司的重要性，并分享了他们最近发布的一些小型库。最后，作者邀请读者注册早期访问 Athena Crisis，并表示公司正在寻找故事设计师、社区经理和后端托管合作伙伴。
- [《用Sprite-Diffuser修改《帝国时代II》的内容》](https://www.engine.study/blog/modding-age-of-empires-ii-with-a-sprite-diffuser/)。本文介绍了作者如何利用 Stable Diffusion Web UI 和 Python 创建一个多功能的基于提示的图像生成器，以制作自定义文明精灵。作者在 Photoshop 中使用 Alpaca 开始实验，并尝试在不同风格下生成 Age of Empires II 游戏截图，探索模型的行为和选择保留和丢弃的形状和纹理。作者还使用 Control Net 和 Loopbacks 等技术来优化输出结果，并提出了一些其他的实验和思考。最终，作者认为这种模型非常灵活，未来的游戏可以利用它来种植用户生成的故事或内部开发。
- [《GitHub - imartinez/privateGPT: 利用GPT的力量私下与你的文件互动，100%私下进行，没有数据泄露。》](https://github.com/imartinez/privateGPT)。本文介绍了一种使用 LLMs 进行离线问答的方法，完全私密，不需要互联网连接。用户可以将文件导入并提出问题，而无需互联网连接。该方法使用 LangChain、GPT4All、LlamaCpp、Chroma 和 SentenceTransformers 构建。用户需要设置环境并下载 LLM 模型，然后将数据集放入指定目录中，支持多种格式的文件。用户可以使用命令行工具提出问题，并且可以使用命令行参数修改脚本的行为。该方法使用本地模型和 LangChain 的强大功能，在不泄露任何数据的情况下运行整个流程，并具有合理的性能。但是，该方法仅用于测试，不适用于生产环境，选择的模型也不是针对性能优化的。
- [《同一个站点》](https://www.engineersneedart.com/blog/samestop/samestop.html)。这篇文章讲述了一位前苹果程序员退休后又重新开始编程的经历。虽然最初他感到解脱，但不久之后又开始尝试用 Python 和 Javascript 写小项目。现在他突然重返编程世界，重新沉迷于 C 语言和游戏开发。他回顾了自己从事编程的经历，并思考了编程对于工程师们来说是一份工作还是一种爱好。他认为，早期的程序员都是出于热情而从事编程的，但现在的工程师们可能更多地将其视为一份工作。最后，他对自己重返编程世界的经历感到惊讶和欣喜，同时也提醒自己要注意保持平衡。
- [《GitHub - pengxiao-song/LaWGPT: 🎉 Repo for LaWGPT, Chinese-Llama tuned with Chinese Legal knowledge. 基于中文法律知识的大语言模型》](https://github.com/pengxiao-song/LaWGPT)。LaWGPT 是一系列基于中文法律知识的开源大语言模型，通过扩充法律领域专有词表和大规模中文法律语料预训练，增强了大模型在法律领域的基础语义理解能力。在此基础上，构造法律领域对话问答数据集、中国司法考试数据集进行指令精调，提升了模型对法律内容的理解和执行能力。该项目持续开展，法律领域数据集及系列模型后续相继开源。
- [《健康学习到150岁 - 人体系统调优不完全指南》](https://github.com/zijie0/HumanSystemOptimization)。本文介绍了神经科学教授 Andrew Huberman 的一些关于提升日常工作、学习表现的方法和工具。其中睡眠是最重要的前提，生物钟对睡眠的控制机理是光照和体温。因此，控制接收光照的时间点、类型和时长以及保持适当的体温可以提升睡眠质量。其他实践包括锻炼、饮食、呼吸和注意力训练等方面。这些方法都基于高质量、peer reviewed 的科学研究成果，可以像调优软件程序那样来 “调优” 我们自身的人体系统。
- [《React服务器组件、Next.js应用程序路由器和实例》](https://addyosmani.com/blog/react-server-components-app-router/)。本文介绍了 React 社区最近关于 Server Components、Next.js App Router 和工具与渲染方法未来的讨论，以及对这些概念的简要总结。文章解释了什么是 React Server Components，它们与 Next.js App Router 的关系，以及为什么选择生产框架（如 Next.js 或 Remix）而不是 Create React App。文章还提到了 RSC 实现的可用性和 “混合” 渲染的趋势，即将构建时间、服务器和客户端渲染相结合，创造更灵活的 Web 开发方法。最后，文章推荐了一些 RSC + Next App Router 的示例。
- [《把Python当作Rust来写》](https://kobzol.github.io/rust/python/2023/05/20/writing-python-like-its-rust.html)。本文介绍了作者在使用 Rust 后如何将其中的一些概念应用到 Python 编程中，以提高程序的严谨性和可读性。具体来说，作者建议在函数签名和类属性中尽可能使用类型提示，使用 dataclass 代替元组或字典，使用 union type 模拟 Rust 中的 algebraic data types，使用 newtype 提高代码的可读性，使用构造函数代替 __init__ 方法，并使用类型系统来编码不变量。通过这些方法，作者认为可以减少代码中的错误和 bug，提高代码的可维护性和可扩展性。
- [《来自其他语言和框架的模式来增强你的前端项目》](https://hackernoon.com/patterns-from-other-languages-and-frameworks-to-enhance-your-frontend-projects)。这篇文章介绍了作者在编程过程中学到的一些规则、工具和模式，以及如何将它们应用到前端项目中。作者分享了他对这些规则的理解和使用方法，并提供了一些实用的技巧和建议。通过这篇文章，读者可以学习到如何提高前端项目的质量和效率。
- [《了解React并发性》](https://www.bbss.dev/posts/react-concurrency/)。React v18.0 引入了一项期待已久的功能：并发模式！尽管有大量资源解释如何使用它，但对其工作原理的解释很少。基本上，React 并发模式是重新设计渲染过程，使得在渲染下一个视图时，当前视图保持响应性。由于这是一项低级特性，理解 React 的并发模式的想法并不关键，但也无妨。React 团队最初计划通过并发模式来提高应用程序性能，但由于向后兼容性原因，该计划未能实现，转而推出了一组新 API，即并发特性，以选择性地启用并发渲染。目前，React 已经引入了两个新钩子来选择并发渲染：useTransition 和 useDeferredValue。这篇文章介绍了这两个钩子的用法和注意事项，并提到了它们在 Suspense 组件中的作用。
- [《工人浏览器渲染API进入公开测试阶段》](https://blog.cloudflare.com/browser-rendering-open-beta/)。Cloudflare 宣布开放其 Workers Browser Rendering API 的公测，该 API 允许开发者编程控制和交互无头浏览器实例，并为应用程序和产品创建自动化流程。通过 Wrangler 命令行工具配置、构建和部署应用程序，开发者可以使用 Browser Rendering API 绑定与 Cloudflare 开发平台上的资源进行交互。此外，Cloudflare 还推出了 Puppeteer，这是一个流行的库，它抽象了低级别的 DevTools 协议，提供了高级 API，使开发者能够轻松地操纵 Chrome/Chromium 并自动化浏览会话。在未来，Cloudflare 将更新 Puppeteer 以匹配其基础设施中运行的 Chromium 实例版本。该公司表示，他们已经广泛使用 Browser Rendering API 进行屏幕截图、测试 Web 应用程序等任务，而且还计划将其用于 URL 扫描器等项目。


- [《循环依赖空间切换》](https://kizu.dev/cyclic-toggles/)。这篇文章介绍了一种新的 CSS 技术，即通过切换单个自定义属性从列表中选择值。作者首先展示了代码，然后解释了这种被称为 “循环切换” 的技术。这种技术利用了 CSS 变量的循环依赖性，使得当我们跨引用自定义属性时，所有变量都会变成 “保证无效值”。作者还探讨了这种技术的限制，包括继承、动画和命名等问题。此外，作者也提到了这种技术的使用案例，如主题选择、组件 API 等。最后，作者强调了分享和请求特定功能的重要性，因为这有助于推动 CSS 的发展。
- [《亲身体验Node.js测试运行器》](https://www.sonarsource.com/blog/node-js-test-runner/)。Node.js 在 18 版本中发布了一个实验性的测试运行器，并在 20 版本中将其稳定化。这意味着我们作为 JavaScript 开发者可以使用内置的测试运行器，而无需依赖第三方包，如 Mocha、Jasmine 或 Jest。这减少了维护成本和配置复杂性。此外，该测试运行器还提供了一套基础原语，供测试框架标准化使用。文章还介绍了如何使用 Node.js 测试运行器编写测试，包括创建测试文件、执行测试命令、使用断言模块、跳过测试等操作。最后，文章表示，尽管 Node.js 测试运行器还提供了内置的模拟功能、实验性的观察模式和测试覆盖率收集，但对于小型项目，测试运行器和断言模块已经足够用来编写测试套件。
- [《介绍 MDN Playground：让您的代码栩栩如生！| MDN 博客》](https://developer.mozilla.org/en-US/blog/introducing-the-mdn-playground/)。Mozilla 宣布推出 MDN Playground，这是一个可以预览 HTML、CSS 和 JavaScript 的简单方式。MDN Playground 提供了快速原型设计和测试想法的无障碍方式，用户只需将代码粘贴到 playground 中，就可以立即在预览区域看到结果。此外，它还支持实时交互，使用户能够实时与代码进行交互，进行更改并立即观察其效果。MDN Playground 还扩展了代码示例，解决了在文档中阅读代码示例而无法立即试验的问题。当用户在 MDN 上遇到代码示例时，现在会找到一个方便的 “播放” 按钮，点击它将在 MDN Playground 中打开示例，准备供用户探索和修改。此外，MDN Playground 还支持协作，使得与同事合作或寻求社区帮助变得比以往任何时候都更容易。用户可以与他人分享代码 playground，让他们查看和重新混合代码。要开始使用 MDN Playground，只需访问 developer.mozilla.org/en-US/play 并深入交互式 Web 开发的世界。
- [《svelte.dev：全面改版》](https://svelte.dev/blog/svelte-dev-overhaul)。Svelte 的新网站发布了，采用全新设计，并增加了多项新功能和底部导航栏。新网站对旧版进行了全面改革，文档已经分为多个页面，所有页面在右侧边栏列出各自的章节。新网站还配备了搜索栏，可以通过它在文档和 API 表面进行搜索。此外，新网站还提供 JavaScript / TypeScript 切换功能，使用户可以以自己喜欢的方式查看文档。新网站还添加了深色模式开关，并与操作系统的深色模式设置同步。此外，REPL 也被重新编写，完全类型安全，并带有深色模式等功能。新网站的首页也得到了更新，与 kit.svelte.dev 保持一致，并展示了由 @vedam 制作的美丽的 Svelte Machine。最后，新网站还实现了网站的统一，现在 svelte.dev、kit.svelte.dev 和 learn.svelte.dev 都使用相同的设计系统，彼此之间更加一致，这使得在网站之间导航变得更加容易，也使维护工作变得更加容易。
- [《宣布regex 1.9 | Rust博客》](https://blog.rust-lang.org/2023/07/05/regex-1.9.html)。正则表达式小组宣布发布了 regex 1.9 版本。regex 库由 Rust 项目维护，是在 Rust 中使用正则表达式的推荐方式。其定义特性是保证最坏情况下线性时间搜索，相对于被搜索字符串的大小。虽然 regex 库的发布通常不会在此博客上公告，但由于在 1.9 版本中，其内部的大部分已经被重写，因此这个公告旨在鼓励额外的审查。如果你遇到任何问题或性能回归，请在问题跟踪器上报告或在讨论论坛上提问。新版本进行了一些 API 添加，值得一提的是 Captures::extract 方法，这将使在某些情况下获取捕获组更加方便。否则，人们应该看到的主要变化是搜索时间更快。你可以在 CHANGELOG 和更深入的关于 regex 库内部作为库的博客文章中阅读更多信息。
- [《JavaScript Gom Jabbar》](https://frantic.im/javascript-gom-jabbar/)。这篇文章描述了一个拥有 10 年 JavaScript 经验的开发者面对一项任务：打开并阅读一个充满挑战的 package.json 文件。作者表达出对各种编程问题和困扰的痛苦，包括版本管理、包命名冲突、模块迁移、复杂的脚本、依赖管理等。他提到了许多具体的库和工具，如 Isomorphic JavaScript, watchman, gulp, left-pad, moment.js, eslint, postcss, jest 等，以及它们带来的问题。同时，他也表达了对维护过时依赖包、处理编译错误、配置测试运行器等任务的恐惧和压力。尽管如此，他仍然坚持下去，因为他知道这是程序员的日常工作。最后，他鼓励读者订阅他的博客以获取更多编程、软件设计和项目相关的信息。
- [《Lenz Weber-Tronic (phryneas) - 我对当前React与服务器组件争议的看法》](https://phryneas.de/react-server-components-controversy)。这篇文章是一位技术人员对 React Server Components（RSC）和 React 团队的沟通方式表达了自己的挫败感。他认为，虽然每个人都有自己的立场，但我们大多数人都以最不生产的方式进行交流。

文章作者身为 Apollo Client、Redux Toolkit 和 RTK Query 等库的维护者，他发现帮助用户变得更加困难。因为人们遇到了一些奇怪的问题，他无法为他们解决所有问题。比如，StackOverflow 上的用户面临着他们无法理解的错误信息。他们在 React 主页上创建了一个新的 React 项目，然后只是应用了默认设置。他们不知道什么是 Server Component，但他们现在正在编写 Server Components。而这三个库在 Server Components 中的工作方式与之前完全不同。

作者还提出了一些建议，包括在 Canaries 中隐藏实验性功能，试图使客户端和服务器用户体验保持一致，以及提供一些缺失的 API 等。他希望通过这篇文章引起人们的关注，并愿意就这些想法进行交谈并提供帮助。
- [《在2023年与SVG-in-JS决裂》](https://kurtextrem.de/posts/svg-in-js)。去年 12 月，一篇题为 “为什么我们要和 CSS-in-JS 分手” 的文章引起了轰动，解释了为什么你不再希望在 JS 包中包含 CSS。然而，现在 JS 包中不仅有 CSS，还有 SVG，正如 Preact 的作者 Jason Miller 所展示的那样：“请不要将 SVG 作为 JSX 导入，这是最昂贵的形式，比其他技术至少贵 3 倍，而且会影响运行时（渲染）性能和内存使用。” 他还指出，一个流行网站的包中，几乎 50% 都是 SVG 图标（250kb），大部分都没有用到。因此，我们需要把 SVG 从 JS 包中移出，重新回归到 HTML 中。本文将探讨在保持 JS 包小巧和高效的同时，更好地使用 SVG 的技术。这些技术包括：使用 < img > 标签加载 SVG、使用 < use > 创建 SVG 精灵、通过 CSS 和 currentcolor 移除更多的 JS、使用 React 的服务器组件等。另外，如果遇到 CORS 问题，可以使用 CSS 进行救援。此外，我们还需要权衡性能和加载时间，决定是否内联 SVG。最后，我们可以使用一些工具和代码片段来实现这些操作。总的来说，通过使用这些技巧，你可以使你的 JavaScript 包变得更小、更高效，这对于旧设备和慢速设备非常有帮助，也使互联网变得更加包容。
- [《Next.js应用程序路由器更新》](https://nextjs.org/blog/june-2023-update)。Next.js 团队正在专注于改进性能、稳定性和开发者教育。他们已经设计了一种新的基础设施 ——App Router，以满足更大规模应用的需求。这个新工具允许开发者逐步迁移到新的 API，而不需要对整个应用进行重写。目前，团队正在探索更多使增量采用变得更容易的机会。在性能方面，他们正在专注于提高本地迭代速度、生产构建时间和无服务器性能。他们还在努力优化现有的 webpack 架构的性能，并计划用 Turbopack 替换 webpack。为了改善稳定性，他们正在修复 App Router 中的 bug，并感谢社区的反馈。最后，他们正在重新编写 Next.js 的文档，并计划发布更多的教育资源，以帮助开发者理解新的特性和概念。
- [《npm生态系统核心的巨大错误》](https://blog.vlt.sh/blog/the-massive-hole-in-the-npm-ecosystem)。文章是由前 npm CLI 团队的工程经理撰写，主要讨论了 npm 包的 "manifest confusion" 问题。npm 包的清单与其 tarball 独立发布，且从未完全验证过它们的内容是否一致。这导致任何使用公共注册表的工具或洞察可能易受攻击或不准确，恶意行为者可以在直接或转移依赖项中隐藏恶意软件和脚本而不被检测到。作者认为，应该进一步调查以确定受影响的注册表条目的范围，并尽快记录 npm 公共注册表 API 及其各自的请求 / 响应对象。同时，建议开发者联系任何已知依赖于 npm 注册表的 manifest 数据的工具作者 / 维护者，并确保他们在适当时开始使用包的内容作为元数据。
- [《高级macOS命令 - saurabhs.org》](https://saurabhs.org/advanced-macos-commands)。文章介绍了 macOS 系统中的一些高级命令行工具，包括 Unix 标准工具和 macOS 特有的功能。这些工具包括：caffeinate 用于设置 Mac 的睡眠行为；pbcopy 和 pbpaste 用于与系统剪贴板交互；networkQuality 用于测量互联网速度；sips 用于图像操作；open 用于打开文件和应用程序；textutil 是文档文件转换器；mdfind 和 mdls 用于使用 Spotlight 进行搜索；screencapture 用于截屏；taskpolicy 用于控制进程的调度；say 是文本转语音引擎；pmset 用于配置电源管理；networksetup 用于配置网络设置；softwareupdate 用于管理操作系统更新；system_profiler 用于查看系统信息。每个工具都有详细的使用说明和例子，可以通过运行 man <command> 查看完整的文档。
- [《现代JavaScript中的安全数据获取》](https://www.builder.io/blog/safe-data-fetching)。这篇文章讨论了 JavaScript 中 Fetch 函数的使用方法和常见问题，作者指出直接使用 Fetch 可能会遇到错误处理不当和信息丢失等问题。为了解决这些问题，作者提出了创建自定义错误类和封装 Fetch 函数的方法，使得错误处理更加智能和方便。但是，这种方法仍然需要开发者每次都写一定量的样板代码。因此，作者推荐使用 Axios、Redaxios 和 Wretch 等开源解决方案，它们可以自动处理上述问题，同时还有更多的文档、测试和社区支持。无论选择哪种方式，作者强调要正确地获取数据，以保证用户体验和团队效率。
- [《现代Javascript：过去10年中你错过的一切》](https://turriate.com/articles/modern-javascript-everything-you-missed-over-10-years)。这篇文章是一份 JavaScript 的速查表，作者总结了近年来在现代浏览器中广泛支持的 JavaScript 新语法和功能。包括内置数组函数、const/let 关键字、空值合并和可选链运算符、Async/Await 关键字、箭头函数、for...of 循环、异步迭代、类、get/set 函数、函数默认参数、命名参数、剩余参数、Object.assign 和展开运算符、解构、简写函数、Promise.all、模板字面量、代理以及模块导入 / 导出等。每个主题都附有示例代码和进一步文档的链接。此外，作者还提供了其他参考资源，如 Map、Set、生成器、严格模式、数组方法、对象静态方法、反射、URL 等。
- [《Ember 5.0发布》](https://blog.emberjs.com/ember-5-0-released/)。EmberJS 5.0 代表了开发者对 Ember 生态系统稳定性和可靠性的承诺。Ember 团队努力去除所有弃用的部分，并向 Polaris 迈进。这篇文章介绍了我们的发布策略，如何升级，预期结果，以及被移除的过时 API。
这是根据 RFC 830 提出的新发布策略和目标下的第一个主要版本。总结来说，每 12 个小版本，Ember 将发布一个新的主要版本，移除任何针对该主要版本的过时代码。
在引入新功能时，Ember 通常旨在在小版本中发布新功能，同时为现有代码提供向后兼容性，同时让开发者有机会尝试新功能。这种方法减少了团队面临的主要升级挑战，相比于制作带有大量新功能的大型、突破性、引人注目的主要版本。
在 Ember 4.x 的小版本中，我们添加了一些特性（当然还有各种错误修复）：
在 Ember 4.1 中，我们发布了一系列改善生活质量的改进：
缓存昂贵 getter 的 @cached 装饰器
@service 装饰器，所以你不再需要导入 {inject as service}
Ember 路由器上的刷新方法，使整个当前路由树的数据刷新更容易
在 Ember 4.4 中，我们发布了一个 {{unique-id}} 助手，使编写可访问表单更容易，并通过改进 setupTest 的蓝图使测试定制更容易。
在 Ember 4.5 中，我们使得可以使用普通的 JavaScript 函数作为助手：不再需要用 helper () 包裹它们！
我们还发布了一个新的测试原语，renderSettled
- [《CommonJS是不会消失的》](https://bun.sh/blog/commonjs-is-not-going-away)。文章讨论了 JavaScript 的未来，特别是关于 CommonJS 和 ES 模块（ESM）的使用。尽管 ESM 被视为 JavaScript 的未来，但 CommonJS 仍然有其存在的价值。数据显示，ESM 在 npm 上的使用率为 9%，而 CJS（CommonJS）的使用率为 73.6%。CommonJS 在 2009 年开发并由 Node.js 推广，它允许文件将属性分配给名为 exports 的特殊变量，然后其他文件可以通过特殊的 require 函数引用 exports 对象的属性。相比之下，ESM 在 2015 年作为 ES6 的一部分引入，它使用 export 关键字声明其导出，并使用 import 关键字从其他文件导入。与 CommonJS 不同，ESM 设计用于在浏览器中工作，预期文件会通过网络加载，这就是 ES 模块被称为异步的原因。文章还指出，CommonJS 启动速度更快，允许动态模块加载，并且已经在 npm 发布了数百万个模块。最后，Bun v0.6.5 开始原生实现 CommonJS，而且 Bun 也增加了对__esModule 注解的支持，这是 CommonJS 模块表明 exports.default 应被解释为默认导出的事实标准方式。总的来说，CommonJS 已经在这里并将继续存在，Bun 将其视为一等公民。
- [《Remotion 4.0 | Remotion | 在React中以编程方式制作视频》](https://www.remotion.dev/blog/4-0)。Remotion 4.0 发布了最大的更新，为每个工作流程带来了重大改进。这次更新引入了 Remotion Studio，并增加了一些方便的功能。现在，用户可以通过图形界面直接编辑数字、字符串、数组、对象、枚举和日期等属性，甚至可以可视化和编辑嵌套的数据结构。此外，该版本还增加了渲染按钮，用户只需按下按钮就可以渲染资产。新版本还使用 Rust 二进制文件加速了当前和未来的功能，并内置了 FFmpeg。此外，Remotion 4.0 还提供了对 WebP 和 PDF 生成的支持，简化了数据驱动视频的制作，并升级了所有模板以使用新特性。此外，该版本还增加了许多新功能，包括 @remotion/rive 包、@remotion/shapes 包、@remotion/tailwind 包、音频编解码器的调整、Lambda 的改进、新的 PHP 和 Go SDKs、播放器的改进、ES 模块支持、字体选择器、新的核心 API 等。
- [《用Rust写一个Node库》](https://blog.metlo.com/writing-a-node-library-in-rust/)。Metlo 是一个开源 API 安全工具，可以在 15 分钟内设置完成，对你的端点进行清单，检测恶意行为者并实时阻止恶意流量。通过使用 Rust 编程语言，Metlo 能够创建一个 C 兼容库，这样就可以用各种 FFI 库或低延迟通信系统（如 GRPC 或管道）来使用它。文章中以 Node.js 为例，介绍了如何利用基于 Rust 的库 Neon 来实现，并探讨了 Rust 在处理不同任务时的性能提升。Neon 可以让我们在 Node.js 代码中运行 Rust 代码。Metlo 使用这些绑定来支持多个框架，几乎无需配置即可使用。在 Metlo，他们能够支持所有三种 node 框架，因为他们的核心逻辑现在都是用 rust 编写的。此外，他们的 rust 代理是内存安全的，非阻塞的，并且最多只会增加几百微秒的延迟。
- [《Bun v0.6.10》](https://bun.sh/blog/bun-v0.6.10)。我们正在招聘 C/C++ 和 Zig 工程师来构建 JavaScript 的未来！加入我们的团队→最近，我们对 Bun 进行了许多更改，以下是一些重要更新：

v0.6.0 - 引入 bun build，Bun 的新 JavaScript 打包器。
v0.6.2 - 性能提升：JSON.parse 速度提高 20%，Proxy 和 arguments 速度提高 2 倍。
v0.6.3 - 实现 node:vm，对 node:http 和 node:tls 进行了大量修复。
v0.6.4 - 实现 require.cache，process.env.TZ，并使 bun test 速度提高 80%。
v0.6.5 - 对 CommonJS 模块的原生支持（之前，Bun 将 CJS 转换为 ESM）。
v0.6.6 - bun test 的改进，包括 Github Actions 支持，test.only ()，test.if ()，describe.skip () 以及 15 + 个 expect () 匹配器；还有使用 fetch () 进行文件上传。
v0.6.7 - Node.js 兼容性改进，以解决 Discord.js、Prisma 和 Puppeteer 的问题。
v0.6.8 - 引入 Bun.password，bun test 中的 mocking 和 toMatchObject ()。
v0.6.9 - 内存使用减少，支持非 ascii 文件名。

此外，我们对 CommonJS 的支持也有所改善，使得在 Bun 中加载 npm 包更加可靠。我们修复了与加载 CommonJS 模块相关的许多崩溃，并改进了我们的 CommonJS 模块加载器，使其更兼容 Node.js。

我们还修复了 Bun 客户端 WebSocket 实现中的一个编码错误，这可能会导致 latin1 编码的文本帧被截断。感谢这些更改，puppeteer 在 Bun 中的支持已经得到改善。

另外，我们对 bun:test 进行了改进，现在支持更多的匹配
- [《发布v6.0.0 - styled-components/styled-components》](https://github.com/styled-components/styled-components/releases/tag/v6.0.0)。这篇文章是关于一个版本更新的说明，主要包含以下改动：

在此版本中进行了一些修复和改进，例如防止样式属性上的 prop 渗漏，通过 "CSS" 命名空间来传输 csstype，提升 stylis 至 4.3 版本，并减少了一些不必要的分支逻辑。

在 v6 版本中有一些重大变化，包括现在使用 stylis v4（如果使用 stylis-plugin-rtl，你需要升级到新版本），styled-components 现在提供自己的类型；如果你过去安装过 @types/styled-components，你会想要移除它。此外，还删除了 $as 和 $forwardedAs props（使用 as 或 forwardedAs 替代），以及自动 prop 过滤；对于你不希望传递给子组件 / HTML 的内容，使用瞬态 props（$ 前缀）。

StyleSheetManager 也做出了一些更改，比如用 enableVendorPrefixes prop 替换了 disableVendorPrefixes，取消了自动供应商前缀；如果你需要支持旧的浏览器，可以使用上述 prop 轻松重新启用。

此外，还删除了已弃用的 withComponent API（87f511a）；现在需要使用 "as" prop。并且需要 node >= 14。

完整的更改日志可以查看：v5.3.7...v6.0.0。
- [《对Svelte(Kit)的看法，一年后30亿次的请求》](https://claudioholanda.ch/en/blog/svelte-kit-after-3-billion-requests/)。去年，我的公司接到了建设一个新闻网站的任务。自从项目上线以来，它经历了显著的观众增长，每天处理数十万的访客。在过去的 12 个月中，每个访客都在页面及其组件上进行导航和交互，大约产生了 30 亿次请求。

我选择 Svelte 作为这个项目的开发框架，并分享了我认为使用 Svelte 和 SvelteKit 工作的好坏两面。

我们的客户给我们带来了一个多年前制作的网站，该网站采用了旧技术，难以添加新功能，性能差，且垂直基础设施昂贵。经过几次会议，我们得出的结论是，最好的方法是暂停旧网站的开发，使用最佳技术和实践从头开始构建一个新的。考虑到这个项目的可塑性和可扩展性需求，还需要从零开始构建一个新的 CMS。

SvelteKit 具有强大的 SSR 解决方案，因此我选择了它。尽管 React 是一个拥有庞大社区和繁荣生态系统的优秀反应式库，但一旦你离开这条路径，你可能会在某个时候遇到麻烦。而有些项目你不想（或不能）因为你选择的 UI 开发工具而冒险遇到麻烦。所以我们选择了 Svelte/SvelteKit 而不是 React/Next.js。

然而，Svelte 也存在一些问题，比如缺乏 “Svelte” 组件，很多项目都是一个人的军队，缺乏已经建立的模式和优秀的教程等。但总的来说，Svelte 对于我们的团队
- [《GitHub - mrjooz/password-generator: 密码生成工具》](https://github.com/mrjooz/password-generator)。这篇文章讲述了在使用 Git 时，如果已经存在与提供的分支名相同的标签，可能会导致一些问题。因为很多 Git 命令同时接受标签和分支名，所以创建这个分支可能会引发意外的行为。作者询问读者是否确定要创建这个分支。
- [《通过使用Node.js的AsyncLocalStorage来避免参数钻取| pawelgrzybek.com》](https://pawelgrzybek.com/avoid-parameter-drilling-by-using-the-node-js-asynclocalstorage/)。虽然全局变量被认为是一种不好的做法，但它可能是共享上下文的最简单形式。在这个例子中，我定义了全局变量 context，并用它在主函数和 logger 函数之间共享 uuid 值。这种方法对于同步代码来说工作得很好，但是当我们引入异步操作时，问题就出现了。让我通过添加一个 http 服务器来说明这个问题：每个后续的请求都会更新全局上下文，logger 函数总是记录 uuid 的最后一个值，而不一定是与请求相关的那个值。将 uuid 作为参数传递给 logger（参数钻取）或将其粘贴到 req 对象是解决此问题的常见解决方案。尽管如此，它们都可能很快变得繁琐。

自 Node.js 13.10 以来，AsyncLocalStorage 类提供了一种在 web 请求或任何其他异步操作的生命周期内存储特定上下文数据的方法。它类似于不同编程语言中使用的线程本地存储（TLS）概念。让我们利用这个 API 并重写我们的示例：现在，所有连续的请求都将记录正确的 uuid 值，而无需担心相互干扰。关联 ID 只是 AsyncLocalStorage API 的许多用例之一。它可以用于存储当前用户、事务 ID、报告数据等。

Node.js AsyncLocalStorage API 的广泛用例激发了社区成员提出 JavaScript 的异步上下文。我希望这个提案能够迅速成为 ECMAScript 标准的一部分。

感谢 Syntax.fm 的一集启发了我去探索这个主题并写下这篇文章。感谢 Wes 和 Scott 创造的优秀内容！
- [《在焦点上刷新React服务器组件》](https://buildui.com/recipes/refresh-react-server-component-on-focus)。这篇文章介绍了一个名为 <RefreshOnFocus /> 的组件，它可以被插入到 Next.js 应用中的任何 React 服务器组件中，使其在浏览器窗口被聚焦时刷新。页面上的卡片使用与它们的动态数据相关的键来运行 CSS 动画，每当它们的数据发生变化时都会触发动画。文章还提供了代码和使用方法，以及使用的库 ——Next.js 13 App Directory。同时，文章也邀请读者加入 Build UI Newsletter，以便在发布新的配方时接收通知。
- [《发布v1.18.0 - remix-run/remix》](https://github.com/remix-run/remix/releases/tag/remix%401.18.0)。这篇文章介绍了 Remix 1.18.0 的新特性和改进。包括：

1. 稳定的 V2 开发服务器：这个新版本正式稳定化了 "New Dev Server"，并带有 HMR/HDR。

2. JSON/Text 提交：如果你不是 FormData 的粉丝，Remix 1.18.0 更新了对 react-router-dom@6.14.0 的支持，它带来了在 useSubmit/fetcher.submit 中选择 application/json 或 text/plain 编码的支持，并添加了相应的 navigation.json/navigation.text 和 fetcher.json/fetcher.text 字段。

3. 视口驱动的预获取：Link 组件现在可以通过新的 <Link prefetch="viewport"> 属性值自动预获取路由数据和 JS 模块。

4. 更新的 ESLint 配置：我们已经更新了 @remix-run/eslint-config，以继承来自 @typescript-eslint/recommended 的推荐规则集，而不是手动维护我们自己的 TS 相关规则。

5. 性能改进：我们过去几周大量投入到性能提升上，你可能会看到一些改善（大约快 10%），但我们也亲眼看到在一些极端情况下构建和重建时间大幅缩短。

此外，还修复了一些问题，包括使用 React 17 时的类型问题、pathless 布局路由下的嵌套路径段的错误等，并更新了 React Router 依赖项至最新版本。
- [《用键盘锁API实现更好的全屏模式 - Chrome开发人员》](https://developer.chrome.com/blog/better-full-screen-mode/)。这篇文章介绍了如何使用键盘锁 API 来在全屏模式下捕获 Escape 键。作者指出，当用户在全屏游戏中打开一个对话框，本能地用 Escape 键取消时，可能会被强制退出全屏模式，这是由于对话框和全屏模式对 Escape 键的 “争夺”。默认情况下，全屏模式总是胜出。但通过使用键盘锁 API，可以让对话框成为 Escape 键的 “赢家”。该 API 可以在 navigator.keyboard 上使用，lock () 方法可以在启用后捕获物理键盘上所有键的按键。此方法只能捕获操作系统授权访问的键，幸运的是 Escape 键就是其中之一。如果你的应用有全屏模式，可以在请求全屏时捕获 Escape 键，以此作为渐进增强的手段。当用户离开全屏模式时，通过 Keyboard 接口的 unlock () 方法解锁（即不再捕获）键盘。这样，在全屏模式下，按下 Escape 键将默认取消对话框。如果用户长按 Escape 键，仍然可以退出全屏模式。
- [《在VSCode中提高生产力的6个快速技巧》](https://techhub.iodigital.com/articles/6-vscode-tips)。这篇文章分享了六个 VSCode 的使用技巧，帮助开发者优化工作流程。1. 通过快捷键 cmd + option + o（Windows 上为 Shift + Alt + o）可以方便地删除无用的引入，使代码库更整洁。2. 在 VSCode 中，可以通过 F2 键轻松重命名变量，系统会自动更新代码中所有该变量的实例，节省时间并保证一致性。3. 对于频繁使用的命令或扩展，可以设置快捷键，提高工作效率。在 “代码> 首选项 > 键盘快捷方式” 中搜索需要的操作，双击快捷方式列并设定你喜欢的快捷键。4. 可以设置一个快速修复 ESLint 问题的自定义快捷键。将以下代码复制到 keybindings.json 文件中，并分配一个未被 VSCode 使用的键组合，即可立即触发 ESLint 的自动修复功能。5. VSCode 内置的 “快速修复” 功能能够显示当前上下文所有可用的快速修复方案，例如添加缺失的引入、修复 linting 问题或向单行箭头函数添加花括号。6. 可以创建一个 “快速修复：添加所有缺失的引入” 的快捷键，比如设定为 cmd + '，当遇到未解决的引入时，只需使用这个快捷键就能自动添加必要的引入，无需手动搜索、输入和导入。
- [《Bright - 语法高亮的React服务器组件》](https://bright.codehike.org/)。这篇文章主要讲述了 React 服务器组件用于语法高亮的内容。
- [《2023年的React Ecosystem。》](https://dev.to/ihteshamulhaq510/react-ecosystem-in-2023-5aj4)。这篇文章主要介绍了 2023 年的 React 生态系统，包括一些可供学习和成为 React 开发者的库。最近，推出了一款名为 million.js 的工具，它使 React 的速度提高了 70%。对于初学者来说，选择正确的库可能相当具有挑战性。

文章列举了一些 React 库，包括构建工具（如 vite、nextjs、Webpack）、路由（如 react router、tanstack router）、客户端状态管理（如 redux toolkit、zustand）、服务器状态管理（如 tanstack query、redux-toolkit query、Apollo Client、jotai）、表单处理（如 Formik、React Hook Form）、测试（如 Vitest、React Testing library、Play-write）、样式（如 Tailwindcss、Styled-components、Emotion、Bootstrap）、UI 组件库（如 Material UI、Man time UI、Ant Design、Chakra UI、Headless UI (tailwindcss)、DaisyUI (Tailwindcss)、shadcn UI (Tailwindcss)、React Bootstrap）、动画（如 React Spring、Framer motion）、数据可视化（如 Victory charts、React Charts js、Recharts）、表格（如 Tanstack table）、国际化（如 react-i18next、formatjs）以及开发工具（如 react developer tools、Redux dev tool、testing playground、react hook form dev tools、AxeDev Tool (Accessibility)、Tanstack query dev tools）。
- [《第四部分：编写简洁高效的React代码--最佳实践和优化技术》](https://dev.to/sathishskdev/part-4-writing-clean-and-efficient-react-code-best-practices-and-optimization-techniques-423d)。本文是 "2023 年 React 最佳实践" 系列的第四部分，探讨了如何编写清晰、高效的 React 应用程序代码。以下是一些最佳实践：

1. 实现错误边界来优雅地处理组件错误。
2. 对于功能组件，使用 React.memo 以避免不必要的重渲染。
3. 使用 Linting 工具（如 ESLint）来提高代码质量和一致性。
4. 避免默认导出，因为它可能使理解哪些组件被导入和在其他文件中使用变得困难。
5. 使用对象解构，这是一种更简洁、优雅的方式来提取对象属性。
6. 使用片段来避免在渲染多个元素时产生不必要的包装 div。
7. 优先传递对象而不是多个 props。
8. 使用箭头函数，它提供了更简洁的语法和词法范围。
9. 使用枚举代替数字或字符串。
10. 对布尔 props 使用简写。
11. 避免使用索引作为 key props。
12. 在小函数中使用隐式返回。
13. 使用 PropTypes 进行类型检查。
14. 优先使用模板文字。
15. 避免使用庞大的组件。

以上最佳实践可以提高代码的可维护性、性能和可读性。
- [《跟大家聊聊当下卖课的现状》](https://blog.meathill.com/share/lets-talk-about-be-a-tutorial-video-creator.html)。文章作者分享了他在制作在线课程方面的经验。首先，他提到了平台分成问题，大部分平台会收取 50% 的服务费，再加上苹果设备用户需要支付 30% 的税，最终讲师能拿到的收入并不多。其次，课程内容的选择也是一个问题，新人讲师往往无法接到热门选题，而自己感兴趣的选题可能平台不愿意接受。此外，如果想自行销售课程，除非有大量的粉丝基础，否则难以获得成功。最后，由于网络技术更新快速，课程的生命周期较短，因此很难实现稳定的收入。总的来说，作者建议想做在线课程的人在开始前应该仔细考虑各种因素，找出更适合自己的方向。
- [《React中的远程传输：定位、堆叠上下文和传送门》](https://www.developerway.com/posts/positioning-and-portals-in-react)。这篇文章详细讨论了 CSS 定位的工作原理，堆叠上下文（Stacking Context）是什么，如何使用 CSS 逃离 overflow:hidden，为什么我们不能用 CSS 做所有事情而需要 Portals，以及 Portals 是如何工作的。文章首先解释了 CSS 的绝对定位，并指出绝对并不完全是绝对的，它实际上是相对于设置了任何值的最近元素的位置。然后，文章介绍了堆叠上下文，这是一个三维的视角来看待 HTML 元素。接着，文章讨论了如何使用 CSS 逃离内容剪裁，为什么我们不能用 CSS 做所有事情而需要 Portals，以及 Portals 是如何实际工作的。文章还深入探讨了 React Portal 如何解决这个问题，以及 React 生命周期，重渲染，Context 和 Portals 之间的关系。最后，文章总结了在使用 Portals 时的规则：在 React 中发生的事情保持在 React 层次结构中，在 React 之外的事情遵循 DOM 结构规则。
- [《GitHub - a16z-infra/ai-getting-started：一个用于周末项目的Javascript AI入门栈，包括图像/文本模型、矢量存储、授权和部署配置。》](https://github.com/a16z-infra/ai-getting-started)。这篇文章是关于如何开始使用 AI 的指南，包括了一些主要技术栈和操作步骤。技术栈包括 Auth：Clerk、应用逻辑：Next.js、VectorDB：Pinecone / Supabase pgvector、LLM Orchestration：Langchain.js、图像模型：Replicate、文本模型：OpenAI、文本流：ai sdk、部署：Fly 等。

文章详细介绍了如何在本地测试这个技术栈，并理解每个组件的工作方式。首先需要从 Github 账户复制并克隆仓库，然后安装依赖项。接着填写 Clerk Secrets、OpenAI API key、Replicate API key、Pinecone API key 和 Supabase API key。注意，默认情况下，此模板使用 Pinecone 作为向量存储，但你可以轻松开启 Supabase pgvector。

之后，生成嵌入并将其存储在向量数据库中以供未来查询。然后在本地运行应用程序进行测试。最后，将应用程序部署到 fly.io。

此外，文章还介绍了如何为该仓库做出贡献，包括代码贡献工作流程和其他贡献方式。
- [《什么是CDN？内容交付网络的无偏见指南》](https://calibreapp.com/blog/content-delivery-networks-guide)。内容分发网络（CDN）是提高网站性能和可靠性的最佳方式之一。它可以帮助提高页面速度，抵御拒绝服务攻击，并优化内容以实现更快的传输。选择合适的 CDN 对于网站来说是一个重要的决定，因此你需要进行研究。然而，大部分关于 CDN 的搜索结果都来自销售 CDN 的公司，这让人很难相信由销售人员写的博客文章。好消息是我们不销售 CDN，但作为网络性能专家，我们对此有深入了解。我们编写了这篇指南，帮助你在选择 CDN 时做出明智的决定。

CDN 是全球分布的服务器网络，可以托管你的内容并快速将其传送给访问者。CDN 通过减少延迟、提高可靠性，甚至优化内容以实现更快的传输，来支持你的主机服务器。CDN 就像是遍布全球的小型本地仓库。当访问者请求内容时，这些本地仓库从你的中央仓库（主机服务器）接收内容并存储起来。这样，我们可以快速可靠地传输内容，因为 CDN 服务器的位置遍布全球，如果一个服务器出现故障，其他服务器可以接替其工作。

CDN 的工作原理是在全球各地的战略位置拥有服务器，从而更快地为你传送内容。CDN 通过在全球范围内提前存储你的内容来解决这些问题。因此，当有请求时，CDN 会将数据存储在悉尼的服务器上，以便更快地传送到新西兰。

CDN 的好
- [《宣布Svelte 4》](https://svelte.dev/blog/svelte-4)。Svelte 4 稳定版已经发布，它主要是一个维护版本，提升了性能，改进了开发者体验，并对网站进行了更新。Svelte 4 的包大小减少了近 75%，从 10.6MB 降到 2.8MB，这意味着在执行 npm install 时等待时间更短。此外，Svelte 的依赖项数量也从 61 个大幅度减少到 16 个，这不仅可以加快用户的下载速度，还可以降低供应链攻击的风险。对于 Web 组件的使用者来说，最大的变化是改变了使用 Svelte 来创建自定义元素的方式。此外，Svelte 4 还改进了 IDE 编写体验，更新了官方网站、文档和教程，并为即将发布的 Svelte 5 做好了准备。
- [《TypeScript 5.2的新关键词："using"。》](https://www.totaltypescript.com/typescript-5-2-new-keyword-using)。TypeScript 5.2 将引入一个新的关键字 - 'using'，你可以用它在离开作用域时处理任何带有 Symbol.dispose 函数的东西。

这基于 TC39 提案，该提案最近达到了第 3 阶段，表明它将被引入 JavaScript。'using' 对于管理诸如文件句柄、数据库连接等资源将非常有用。

Symbol.dispose 是 JavaScript 中的一个新的全局符号。任何赋予 Symbol.dispose 函数的东西都会被视为一个 “资源” - “具有特定生命周期的对象”，并可以与 using 关键字一起使用。

你还可以使用 Symbol.asyncDispose 和 await using 来处理需要异步处理的资源。

这将在继续之前等待 Symbol.asyncDispose 函数。这对于数据库连接等资源非常有用，你希望确保程序继续之前连接已经关闭。

使用案例：

文件句柄：通过节点中的文件处理器访问文件系统可能会因为 using 变得更容易。

数据库连接：管理数据库连接是 C# 中使用 using 的一个常见用例。
- [《99.9成功率！Mac运行赛博朋克2077，使用Game Porting Toolkit》](https://www.bilibili.com/read/cv24310042)。这篇文章主要介绍了如何在苹果 M 芯片 Mac 上运行赛博朋克 2077 游戏。首先，需要通过 Game Porting Toolkit 工具将 Direct3D 指令转译成 Metal 指令，使得 Windows 游戏能够在 Apple Silicon Mac 上运行。然后，作者详细介绍了准备所需资源、安装 macOS14 Beta、安装 Game Porting Toolkit、配置 Wine Prefix 环境和安装 Steam 等步骤。最后，通过 Wine 直接启动赛博朋克 2077 游戏。全程操作较为复杂，需要耐心且对计算机有一定的了解。
- [《具有稳定扩散性的风格化二维码》](https://antfu.me/posts/ai-qrcode)。这篇文章是作者分享如何使用 Stable Diffusion 和 ControlNet 创建一个既可以扫描的 QR 码又是一幅艺术插图的过程。首先，作者介绍了他对 AI 技术的兴趣，并提到了一些重要的工具和模型。然后，他详细描述了创建 QR 码图像的步骤，包括设置环境、生成 QR 码、将文本转化为图像、调整细节和放大图像等。最后，他展示了最终结果并总结了自己的学习经历。作者希望这篇文章能够给读者提供一些基础概念或启发他们开始自己的创作之旅。
- [《工人们的KV在新的架构下比以前更快》](https://blog.cloudflare.com/faster-workers-kv-architecture/)。Cloudflare 宣布了对 Workers KV 的重大性能改进，这一改进主要集中在显著提高冷读性能和降低延迟，甚至对于长尾访问模式也是如此。开发人员使用 KV 时，热读取性能很好，但他们会问为什么他们的 95% 分位延迟 —— 通常是在一个关键（或一组关键）上，这个关键最近没有被访问过或者在该地区没有被访问过 —— 比预期的要高。因此，Cloudflare 已经在幕后为 KV 开发了一个新的缓存层，使客户能够实现更频繁的热读取，减少最差情况下的延迟时间，更好地控制缓存 TTL，并且比以前的版本快得多。最好的部分是，使用 KV 的开发人员不需要改变任何东西就可以从这种增强的性能中受益。

Workers KV 是 Cloudflare 网络支持的针对读取密集型用例和应用程序设计的键值存储。KV 专注于读取密集型用例，使其能够在毫秒内提供热（缓存）读取，这使其成为存储每个应用程序或客户配置数据、路由配置、多变量（A/B 测试）配置，甚至需要快速提供的小资产数据的理想选择。你可以将任何可以序列化并且需要快速获取的东西存储在 KV 中，每个单独的键可以存储高达 25 MiB 的数据，总数据存储没有上限。

Cloudflare 已经重新设计了 Workers KV，由新的分层缓存实现驱动。这个实现是作为 Worker 服务编写的。我们重用了为平
- [《为什么快速工作比它看起来更重要 " jsomers.net博客》](http://jsomers.net/blog/speed-matters)。这篇文章主要讨论了工作效率的重要性。作者指出，快速工作不仅可以在单位时间内完成更多的工作，而且会使新任务在你的心中看起来成本更低，因此你会倾向于做更多的事情。相反，如果你做事慢，那么你可能会继续保持这种状态，因为提高速度的唯一方法就是多做。

作者还发现，如果他能快速回复人们的邮件，他们就会给他发送更多的邮件。这是因为发件人期望得到回复，这种期待促使他们写信。换句话说，速度本身就能吸引他们发邮件，因为他们知道自己的努力会有回报。

同样，网站响应速度慢会导致用户流失。谷歌以其搜索速度著名，他们意识到如果搜索速度快，你就更可能去搜索。原因是它鼓励你尝试，得到反馈，然后再次尝试。当你想到一个问题时，你知道谷歌已经在那里了。没有思考和行动之间的延迟，没有失去寻找答案的冲动。谷歌搜索的预计成本几乎为零，它感觉就像你思维的延伸。

此外，如果你想做某件事并且变得擅长 —— 比如写作或修复错误 —— 你应该试着更快地去做。这并不意味着草率行事，但确实意味着，你需要推动自己比你认为健康的速度更快。因为这样，任务在你的心中的成本会
- [《杀人社区》](https://www.marginalia.nu/log/82_killing_community/)。这篇文章主要探讨了社交媒体平台的发展模式，以及这种模式对在线社区的影响。作者将在线社区比作一个村庄，其中有熟悉的面孔、集体经验和共享价值观等。然而，当这些 “村庄” 不能承受持续大量的陌生人涌入时，它们就会变得不再像村庄，更像是火车站，人们来来去去，没有真正的归属感。在这样的环境中，人们总是保持警惕，因为他们总是在与陌生人打交道。这种环境是压抑的，使人感到孤立无援，无力改变。作者认为，如果你想彻底摧毁一个关于建立社区和结识新朋友的网站，那么就让这个网站和所有的社区尽可能地增长。这样，你会得到一个每个人都是陌生人的地方，粗鲁成为常态，没有归属感。最后，作者提出，对 Reddit 这类社区型网站来说，停止增长甚至稍微缩小规模可能是最好的选择，这将使社区能够稳定下来，重新变得像村庄一样，从社区的角度看，网站将因此变得更好。但从商业角度看，这是一个真正的困境，因为唯一赚钱的方式就是增长，而唯一增长的方式就是破坏社区。
- [《TIL: 无效的CSS循环依赖和有效的空回退值，使用裸逗号| pawelgrzybek.com》](https://pawelgrzybek.com/til-invalid-css-cyclic-dependencies-and-a-valid-empty-fallback-value-using-a-bare-comma/)。今天我阅读了 Roman Komarov 的一篇名为 “Cyclic Dependency Space Toggles” 的文章，这是我近期阅读过的最令人费解的 CSS 文章之一。它让我思考了我们在过去几年中探索的所有使用 CSS 自定义属性的模式，以及我们还有多少需要发现的。我从这篇文章中学到了两个令人兴奋的概念，让我与你们分享一下。

无效的循环依赖
当自定义属性相互引用时，循环中的所有自定义属性都是无效的。规范中的一个引述：这可能会产生循环依赖性，其中一个自定义属性使用 var () 引用自身，或者两个或更多的自定义属性试图相互引用。[…] 如果依赖关系图中存在循环，那么循环中的所有自定义属性在计算值时都是无效的。

有效的空回退值使用裸逗号
如果传递给 var () 函数的初始值缺失或无效，但其后跟着一个裸逗号，则计算值为有效的空回退值。规范中的解释是：[…] 一个裸逗号，后面没有任何东西，必须被视为在 var () 中有效，表示一个空的回退值。

这两个概念如何有用？
如果你想知道这些对你有何帮助，我建议你阅读 Roman 的文章，该文提出了一个强大的值切换用例。当然，这不是利用自定义属性的有效 / 无效评估的唯一方式。看看这个简化的例子。

--color 自定义属性的值决定了 --is-default, --is-red 和 --is-green 的有效性。然后，应用相应的背景颜色回退值（灰色，
- [《万维网联盟宣布在线支付的新网络标准》](https://www.applemust.com/w3c-announces-new-web-standard-for-online-payments/)。世界广域网联盟（W3C）宣布了一种新的网络标准，这是一种新的浏览器能力，有助于简化用户认证并在网页结账时提高支付安全性。该标准名为 “安全支付确认”（SPC），可以帮助商家、银行、支付服务提供商、卡网络等降低强大客户认证的摩擦，并产生用户同意的密码证据，这两者都是欧洲支付服务指令（PSD2）等监管要求的重要方面。目前，该标准已经作为候选建议可用，这意味着功能集是稳定的，并且已经得到了广泛的审查。

W3C 表示，该标准的创建是为了应对基于网络的电子商务的增加以及随之而来的支付欺诈的增加。自 2019 年以来，W3C 一直在开发安全支付确认，以帮助实现强大的客户认证要求，同时降低结账摩擦。Stripe 进行了一个早期实施 SPC 的试点，并在 2020 年 3 月报告称，与一次性密码（OTP）相比，SPC 认证使转化率增加了 8%，同时结账速度提高了 3 倍。

安全支付确认不仅适用于卡支付。网络支付工作组定期讨论如何将 SPC 整合到其他支付生态系统中，如开放银行、巴西的 PIX 以及专有支付流程中。目前，SPC 在 MacOS、Windows 和 Android 上的 Chrome 和 Edge 中可用。在候选推荐期间，网络支付工作组将寻求在其他浏览器和环境中实施 —— 考虑到苹果在 W3C 和 FIDO 的参与，S
- [《简介》](https://vinejs.dev/docs/introduction)。VineJS 是一个用于 Node.js 的表单数据验证库，可用于验证后端应用中的 HTTP 请求体。它是 Node.js 生态系统中最快的验证库之一，并提供运行时和静态类型安全性。VineJS 专为验证表单数据和 JSON 负载而构建，支持自定义错误消息和格式化错误，并附带 50 多个验证规则和 12 种模式类型。你可以向 VineJS 添加自定义规则和模式类型，我们还让测试自定义验证规则变得非常简单。

在与 Yup、Zod 和 VineJS 验证一个简单对象的性能比较中，VineJS 是最快的。在验证 HTTP 请求体的情况下，VineJS 的性能比 Zod 好 5 倍到 10 倍，处理了许多 HTML 表单序列化的怪癖（Zod 没有），并为定义自定义错误消息和格式化错误提供了更好的工作流程。

然而，VineJS 不是一个通用的验证库，因此你不能用它来验证 JavaScript 数据类型，如函数、映射或集合。VineJS 是在 Node.js 运行时环境中使用的后端环境，因此你不能在浏览器内运行它。

VineJS 是由 Harminder Virk 最初创建的独立开源项目，由 AdonisJS 核心团队维护。VineJS 是现有的 AdonisJS 验证器代码库的改进版本，作为一个独立的库发布，以便与任何 Node.js 项目一起工作。该项目通过 Github 赞助商资助，如果你或你的企业从 VineJS 中获益，请考虑赞助我们以支持项目的开发。
- [《SvelteKit的新功能：轻松优化你的应用程序 - Vercel》](https://vercel.com/blog/feature-complete-sveltekit)。Svelte 已经在 Web 开发框架的世界中崭露头角，这要归功于其将组件转化为优化的 JavaScript 模块的独特方法。这种创新的渲染应用程序的方式消除了传统框架中存在的开销，从而提高了应用程序的性能和效率。随着 SvelteKit 1.0 的发布，开发者可以充分利用全栈 Svelte 的强大功能，而不必担心会产生破坏性的改变。此外，SvelteKit 还在不断发展，提供了一套强大的功能，并与各种部署环境（包括 Vercel）无缝集成。Vercel 采用了基于框架定义的基础设施（FDI），并已经接纳了 SvelteKit，最近添加了对每个路由的无服务器和边缘函数配置、增量静态再生（ISR）以及与一系列 Vercel 产品更容易兼容的支持。在本文中，我们将探讨如何使您的应用程序更具性能，可扩展性和用户友好性。
- [《发布v0.18.5 - evanw/esbuild》](https://github.com/evanw/esbuild/releases/tag/v0.18.5)。这个版本实现了即将出现的 JavaScript 装饰器提案中的新的自动访问器语法。这种语法尚未成为 JavaScript 的一部分，但已在 TypeScript 4.9 版本中加入。如果目标设置为除 esnext 之外的其他内容，将会对自动访问器进行转换。现在也可以在 esbuild 的 TypeScript 实验性装饰器转换中使用自动访问器，行为应与装饰底层 getter/setter 对相同。

此版本还使 esbuild 现在从即将出现的 JavaScript 装饰器提案中解析装饰器，并将它们原样传递到输出（只要语言目标设置为 esnext）。还没有实现将 JavaScript 装饰器转换为不支持它们的环境。目前 esbuild 实现的唯一装饰器变换仍然是 TypeScript 实验性装饰器变换，这只在.ts 文件中工作，并且需要在你的 tsconfig.json 文件中设置 "experimentalDecorators": true。

此外，如果可能，现在使用静态块来使用具有赋值语义的静态字段。以前，这是通过从类体中移除字段并在类声明后添加赋值语句来完成的。但是，这也导致任何私有字段也必须降低（以防字段初始化器使用私有符号，直接或间接）。此版本将此转换更改为使用内联静态块（如果支持的话），这避免了在此场景中需要降低私有字段。

最后，修复了 TypeScript 实验性装饰器与 --mangle-props 设置结合使用时可能导致的崩溃问题。现在可以安全地将这两个功能结合在一起使用。
- [《介绍一下HTTP/3的优先次序》](https://blog.cloudflare.com/better-http-3-prioritization-for-a-faster-web/)。今天，Cloudflare 宣布全面支持 HTTP/3 可扩展优先级，这是一种新的标准，可以将网页的加载速度提高高达 37%。Cloudflare 与标准构建者紧密合作，帮助形成 HTTP/3 优先级的规范，并很高兴能推动网络前进。HTTP/3 可扩展优先级适用于 Cloudflare 的所有计划。对于付费用户，有一个增强版本可进一步提高性能。网页由许多必须在处理和呈现给用户之前下载的对象组成。并非所有对象对网页性能的重要性都相等。HTTP 优先级的作用是在最适当的时机加载正确的字节，以实现最佳结果。在多个对象都在竞争同一受限资源时，优先级最为重要。在 HTTP/3 中，这个资源就是 QUIC 连接。在大多数情况下，从服务器到客户端的带宽是瓶颈。选择将带宽分配给哪些对象，或在哪些对象之间共享带宽，是网页性能的关键基础。如果出现错误，我们在其上构建的其他优化可能会受到影响。
- [《NestJS v10现已上市 - Trilon Consulting》](https://trilon.io/blog/nestjs-10-is-now-available)。NestJS 10 正式发布，带来了许多错误修复、改进和新功能。其中最令人兴奋的新特性包括对 SWC（Speedy Web Compiler）的支持，这是一个可用于编译和打包的基于 Rust 的可扩展平台，使用 SWC 与 Nest CLI 可以显著加快开发过程；测试中模块的覆盖功能，这在需要模拟整个模块而不是单独模拟每个提供者时非常有用；对 Redis 通配符订阅的支持，该功能允许你订阅所有匹配给定模式的消息；CacheModule 已从 @nestjs/common 包中移除，并作为独立包 @nestjs/cache-manager 提供；此外，NestJS 10 不再支持 Node.js v12，而需要 Node.js v16 或更高版本。
- [《GitHub - dtinth/superwhite: 在支持HDR的显示器上显示非常明亮的白色》](https://github.com/dtinth/superwhite)。这篇文章介绍了如何在支持 HDR 的显示器上展示非常亮的白色。通过使用 Final Cut Pro 创建一个带有宽色域 HDR 颜色处理设置的库，然后创建一个项目，添加一个纯白色的颜色生成器，并将其设置为亮白色，同时将图形 HDR 级别调整到 100。接着添加 HDR 工具视频效果，将模式设置为 SDR 到 HDR (PQ)，并将峰值亮度调整到 5000 尼特。最后用 HEVC 10 位作为编解码器导出视频。若在支持 HDR 的 Mac 显示器或者最新的 iPhone 或 iPad（低电量模式关闭）上查看此页面，你应该能看到一个比 #ffffff 更亮的白色。在不支持的显示器上，你会看到正常的白色。作者还提醒读者不要滥用这个技术。
- [《你不能相信谷歌》](https://world.hey.com/dhh/you-can-t-trust-google-f7d64064)。文章作者 David Heinemeier Hansson 警告，如果 Google 无法通过广告直接实现数十亿规模的盈利，那么它最终会关闭你关心的每一项服务。他认为，Google 在产品或服务业务中的能力有限，因为这些都不是 Google 的主要收入来源，广告才是。他以客户服务为例，指出 Google 的客户服务一直很差，因为帮助解决 Workspaces 或 Google Cloud Platform 上的问题永远不会像帮助广告商获取注意力那样有利可图。他提到了 Google 刚刚关闭其域名注册商 Google Domains 的事情，尽管这个业务每年可以带来 1.8 亿美元的收入，并服务了 1000 万个域名。此外，他还提到了 Google Home / Nest 的失败案例。他建议，无论是协作、电子邮件还是家庭安全系统，用户最好都有备份计划，因为任何标有 "由 Google 制造" 的产品或服务都可能随时被 Google 放弃。
- [《GitHub - kaleidawave/ezno：一个用Rust编写的JavaScript编译器和TypeScript检查器，专注于静态分析和运行时性能。》](https://github.com/kaleidawave/ezno)。这篇文章介绍了 Ezno，一个用 Rust 编写的 JavaScript 编译器和 TypeScript 检查器，重点关注静态分析和运行时性能。Ezno 是一个 JavaScript 类型检查器，可以作为库使用，也可以与可选的编译器基础设施（解析器、CLI、LSP 等）一起使用。它提供完全类型化的程序，保证类型安全，并旨在通过更好的静态分析实现类型的准确性和追踪。此外，Ezno 还具有命令式类型系统，事件追踪和评估函数副作用。

然而，Ezno 并不是一个二进制可执行文件生成器，它将 JavaScript（或 TS/Ezno 超集）编译为 JavaScript。此过程更像是编译而不是转译。尽管你可以使用其事件 IR 生成一个较低级别的格式，但 Ezno 目前还不能使用，离实用还有很长的路要走。

此外，该项目还包含了一些箱子，如 checker 和 parser 等。同时，作者也邀请读者参与贡献，查看问题并参与讨论。
- [《GPT-4的本地JSON输出》](https://yonom.substack.com/p/native-json-output-from-gpt-4)。这篇文章介绍了 OpenAI 在 2023 年 6 月 13 日发布的新功能 —— 函数调用，该功能使得在产品中集成大型语言模型（LLMs）时生成结构化数据（如 JSON）变得更简单。文章通过一个名为 “食谱创建器” 的演示应用来说明这个新功能的使用方法和优点。

新 API 引入了两个新参数：functions（一个包含可供 GPT 使用的函数数组，每个函数都有名称、描述和参数的 JSON Schema）和 function_call（可选地指定无或 { "name": "<function_name>" }，可以强制 GPT 使用特定函数，或明确禁止调用任何函数）。通过设置 function_call 参数，你可以从 GPT 调用中可靠地获取 JSON 响应，而不再是字符串。

此外，新 API 还改变了我们与 OpenAI LLMs 交互的方式，除了明显的插件使用案例外，还可以生成 JSON 输出。以前需要通过提示工程来完成这一步骤，但这种方法对于简单的情况效果良好，但容易出错。现在，通过对大型语言模型的低级访问，你可以做得更好。例如，通过降低令牌使用，可以使 API 调用更快、更便宜。

最后，作者认为新 API 的另一个优点是减少了生成正确输出所需的提示工程，使得 LLMs 更容易作为无代码后端使用。并且，OpenAI 的 API 似乎支持 JSON Schema 的特性，如 #ref（递归）和 oneOf（多选），意味着你应该能够在单个 API 请求中通过 JSON schema 实现更复杂的代理和递归思考过程。
- [《宣布Tauri 1.4.0 | Tauri Apps》](https://tauri.app/blog/2023/06/14/tauri-1-4/)。Tauri 团队宣布推出 1.4 版本。这个版本包括了一些新功能和重要的错误修复，比如 CLI 补全、单元测试能力和 Windows 安装程序的改进。确保更新 NPM 和 Cargo 依赖到 1.4.0 版本。Tauri CLI 现在可以为 Bash、Zsh、PowerShell 和 Fish 生成 shell 补全。窗口的最大化、最小化和关闭按钮现在可以通过配置或 API 调用来禁用。1.4.0 版本包括了几项 NSIS 捆绑增强：自定义语言文件、自定义安装模板（.nsi 文件）、支持荷兰语、日语、韩语、波斯语、瑞典语和土耳其语等。如果你的应用程序是通过 WiX 安装的，安装程序会提示用户卸载它。Tauri 1.4 仍然支持 Rust 1.60 版本，但由于一些依赖性不兼容问题，我们不再固定 time, ignore, 和 winnow crate 的补丁版本。tauri crate 现在在 test Cargo feature 下暴露了 test 模块。这个模块还不稳定，但允许你通过创建一个可以在不生成窗口的情况下执行的 tauri::App 实例来对你的应用程序进行单元测试。从 v1.4.0 开始，我们的更新日志格式已经得到了改进。
- [《Fresh 1.2 - 欢迎全职维护者，在岛屿之间共享状态，有限的npm支持，以及更多》](https://deno.com/blog/fresh-1.2)。这篇文章介绍了 Fresh 1.0，一种现代化、以 Deno 为首的全栈 Web 框架。自去年推出以来，Fresh 在 GitHub 上获得了大量的关注，并取得了显著的增长。然而，对于 Deno 团队是否会持续维护 Fresh，人们一直有疑问。尽管团队一直表示会坚定不移地维护，但现实情况更为复杂。由于主要维护者没有足够的时间专注于 Fresh，因此很多问题得不到及时解决。

为了改变这种情况，团队找到了新的主要维护者 Marvin Hagemeister，他是 Preact 的维护者和 Preact DevTools 的构建者。他将全职领导 Fresh 项目的开发。预计在未来几个月内，Fresh 在易用性、功能、性能和项目维护等方面都将有显著的提升。

最后，文章介绍了 Fresh 1.2 的一些亮点特性，包括传递信号、Uint8Arrays 和循环数据到岛屿属性，支持自定义 HEAD 处理器，HandlerContext.render 的状态和头部覆盖，./islands 文件夹中的子目录，异步插件渲染，简化 Fresh 项目的测试等。
- [《Node.js中的调试介绍》](https://blog.openreplay.com/an-introduction-to-debugging-in-nodejs/)。本文主要讲解了 Node.js 的调试技巧。Node.js 是一种使用 Google Chrome 浏览器的 V8 引擎的流行 JavaScript 运行时，可用于创建服务器端 Web 应用、构建工具、命令行应用等。然而，当代码出现问题时，情况就不那么明朗了。调试是修复软件缺陷的艺术，找到错误原因可能需要花费大量时间。

为避免错误，作者提出了以下建议：使用带有行号、颜色编码、linting、自动完成、括号匹配、参数提示等功能的好的代码编辑器；使用像 Git 这样的源代码控制系统来管理代码修订；采用像 Jira、FogBugz 或 Bugzilla 这样的 bug 跟踪系统；使用测试驱动开发（TDD）；尝试代码解释或配对编程等技术与其他开发人员合作。

此外，文章还介绍了如何通过环境变量、命令行选项、控制台日志、Node.js V8 检查器以及 VS Code 等方式进行 Node.js 调试。最后，文章还提供了一份关于调试的术语表，以帮助读者更好地理解调试过程中可能遇到的各种专业术语。
- [《完成你的项目》](https://github.com/readme/guides/finish-your-projects)。这篇文章主要讨论了如何完成一个项目的挑战，以及完成一个项目所带来的满足感。开始一个新项目总是充满无限可能性和乐趣，但随着时间的推移，这种快乐会逐渐变成痛苦的工作。许多人在这个阶段失去了兴趣，放弃了项目。然而，只有坚持到最后，完成项目的人才能体验到深深的满足感。

完成一个项目需要付出努力，也需要勇气。首先，你需要接受这个事实：完成一个项目不可能一直都是有趣的。你必须习惯于项目的最后 10% 的艰苦奋斗。其次，你需要克服发布项目的恐惧，这通常源自于害怕自己的工作和自己受到批评。

作者分享了他的生产力方法：设定一段时间，提前决定要做什么，全力以赴地专注于那件事。他还建议找出适合自己的方式，给自己每一个可能的优势，因为完成工作是困难的。

完成一个项目本身就是一种奖励。无论项目的结果如何，你都应该为自己感到骄傲，因为你已经完成了一项任务。你是一个能够完成事情的人。不断地完成项目，你的工作成果将随着时间的推移而增长。完成是一种技能，你可以磨练它。
- [《GitHub - 7PH/powerglitch：小小的JS库，可以让网络上的任何东西出现故障。》](https://github.com/7PH/powerglitch)。PowerGlitch 是一个独立的库，无需外部依赖。它利用 CSS 动画在网页上产生任何故障效果，无需使用 canvas。其压缩后的大小不到 2kb。你可以通过包管理器安装 PowerGlitch，或者在脚本标签中导入网络捆绑包（或将其保存在本地）。然后找到一个元素进行故障处理，导入 PowerGlitch，就可以使元素出现故障效果了。该项目还提供了优化和使用技巧的使用指南。此外，PowerGlitch 还支持 React 和 Vue 的集成。如果你遇到问题、发现错误或想要贡献，欢迎开放问题或创建拉取请求。
- [《GitHub - LeeeSe/MessAuto: 自动提取Mac平台的短信验证码，2FHey的免费替代品；为Mac平台自动提取短信验证码，2FHey的免费替代品》](https://github.com/LeeeSe/MessAuto)。MessAuto 是一款由 Rust 开发的 macOS 平台软件，能自动提取短信验证码并粘贴回车。它可以在任何 APP 中使用，是 2FHey 的免费替代品。该软件支持多语言，占用存储和内存较小，没有 GUI，只有一个任务栏托盘图标。使用方法是通过菜单栏操作，包括自动粘贴、自动回车、暂时隐藏、永久隐藏和登录时启动等功能。但需要注意的是，ARM64 版本打开时可能会提示文件损坏，因为需要 Apple 开发者签名才能正常启动。作者开发这款软件的初衷是希望将 Safari 浏览器的自动获取验证码功能扩展到所有 APP 上。使用此软件需要 macOS 系统，并能接收 iPhone 的短信，还需要完全磁盘访问权限和辅助功能权限。
- [《你可以停止对React.FC的憎恨》](https://www.totaltypescript.com/you-can-stop-hating-react-fc)。本文介绍了 TypeScript 5.1 和 React 18 中 React.FC 的改进，使其成为一种完全可行的组件类型定义方式。React.FC 曾经因为在 props 类型中默认包含 children 而备受争议，但现在已经不再包含 children，并且可以返回 undefined、string 或 number。虽然作者仍然建议直接注释 props 来定义组件类型，但是如果你的代码库中使用了 React.FC，也没有必要将其移除。总之，React.FC 不再是一个反模式，而是一种可选的组件类型定义方式。
- [《Astro 2.6: 中间件 | Astro》](https://astro.build/blog/astro-260/)。Astro 2.6 是一个大版本更新，包括几个实验性功能已经被标记为稳定，并且可以在所有 Astro 项目中使用。这些功能包括 Middleware、Hybrid SSR 输出模式、自定义客户端指令和 CSS 内联等。此外，Astro 2.6 还引入了新功能和改进，包括管理重定向的实验性功能、Markdoc 改进和语言工具改进等。Astro 2.6 的更新由社区成员贡献，其中一些功能最初是通过公共路线图和 RFC 过程提出的。Astro 团队还与 Stripe 的 Markdoc 团队密切合作，以改善 Astro 中的 Markdoc 支持。Astro 的语言工具也得到了升级，包括 Astro VSCode 扩展和 Astro 语言服务器。Astro 团队使用 Volar 框架来提高语言工具的性能和稳定性。
- [《NakedJSX - 在没有React的情况下使用JSX》](https://nakedjsx.org/)。NakedJSX 是一个命令行工具，可以从 JSX 生成 HTML 文件。输出的内容是纯 HTML 和 CSS，除非你选择添加自己的 JavaScript。它不需要设置 Node.js 项目，只需在 NakedJSX 内容目录上运行 npx 命令即可构建站点到输出文件夹中。它还提供了一个带有实时刷新构建和 Web 服务器的开发模式，并提供了一个可选的小型运行时，允许客户端 JavaScript 使用 JSX。NakedJSX 支持多种功能，包括嵌套 CSS、CSS 最小化和去重、图像转换为 webp 格式等。NakedJSX 的设计哲学是纯 HTML 和 CSS 输出、低摩擦、API 稳定性、保守依赖选择和安全合规。该项目目前处于设计更改的状态，但反馈非常受欢迎。
- [《GitHub - HeyPuter/kv.js：用于JavaScript的高级内存缓存模块。》](https://github.com/HeyPuter/kv.js)。KV.JS 是一个快速的纯 JavaScript 内存数据存储，受到 Redis 和 Memcached 的启发。它能够处理多种数据类型，包括字符串、列表、集合、排序集、哈希和地理空间索引。此外，KV.JS 支持超过 140 个函数，涵盖了从 SET、GET、EXPIRE、DEL 到 INCR、DECR、LPUSH、RPUSH、SADD、SREM、HSET、HGET 等广泛的操作。它适用于需要缓存但运行 Redis 会过度的场景。该项目遵循 MIT 许可证发布。
- [《现在WebContainers中已经支持npm、yarn和pnpm。》](https://blog.stackblitz.com/posts/announcing-native-package-manager-support/)。WebContainers 团队一直在不断改进和重构其构建模块，以确保其速度和安全性。去年他们已经为 WebContainers 提供了 pnpm 和 yarn 的本地支持，现在他们又宣布了 npm 的本地支持，这将使得开发者可以在 StackBlitz 上无缝使用所有主要的包管理器。此外，他们还实现了比本地快 5 倍的速度，这是通过多年的研究和加速依赖项解析和快速磁盘链接来实现的。同时，他们也宣布将于 2024 年 1 月 1 日废弃 Turbo，转而支持原生的 npm。在这个过程中，可能会出现一些兼容性问题，但 WebContainers 团队已经在努力解决这些问题，并承诺将在未来几周内发布更多功能。
- [《如何用稳定扩散法制作二维码 - 稳定扩散法艺术》](https://stable-diffusion-art.com/qr-code/)。这篇文章介绍了如何使用 Stable Diffusion 生成艺术 QR 码。首先需要生成一个高容错率的 QR 码，然后使用 AUTOMATIC1111 Stable Diffusion GUI 进行图像处理。通过调整参数和添加提示，可以生成类似于 QR 码的艺术图像。文章还提供了一些其他提示和示例，包括机械女孩、日本女孩、机器人和户外市场等。
- [《MacOS Sonoma 14 Beta上的网络应用》](https://blog.tomayac.com/2023/06/07/web-apps-on-macos-sonoma-14-beta/)。本文介绍了苹果公司在 macOS Sonoma 中推出的可安装 Web 应用程序。这些应用程序高度集成在整个 macOS 体验中，不显示任何 Safari 用户界面。用户可以通过将网站添加到 Dock 来安装应用程序，并可以自定义名称和图标。这些应用程序支持 AutoFill 凭据、摄像头、麦克风和位置权限，并且支持 Web 推送、标记和所有通常由 WebKit 实现的 Web 标准。文章还列出了一些对苹果公司的建议和 Chrome 的改进建议。总之，Web 应用程序在 macOS 上具有巨大的潜力，并且可以成功地融入操作系统体验。
- [《Bun v0.6.8》](https://bun.sh/blog/bun-v0.6.8)。Bun 发布了一系列更新，包括引入 JavaScript 打包器、提高性能、实现 node:vm 等功能。最新版本还加入了安全密码哈希 API、函数模拟和 toMatchObject 匹配器，以及实验性的检查员模式。此外，bun:sqlite 的.values () 方法现在返回 [] 而不是 null，同时发布了 bun-devtools 来简化开发人员的工作。该团队正在招聘 C/C++ 和 Zig 工程师，共同构建 JavaScript 的未来。
- [《GitHub - evanw/polywasm》](https://github.com/evanw/polywasm)。本文介绍了一个名为 polywasm 的 WebAssembly polyfill，它可以在 JavaScript 环境中运行缺少 WebAssembly 实现的.wasm 文件。这个库的存在是为了解决某些现代 JavaScript 环境禁用 WebAssembly 的问题，同时也可以用于调试和玩耍 WebAssembly 执行。该库的局限性包括没有完全验证 WebAssembly、不支持 NaN 位模式等。此外，文章还介绍了该库的性能和实现细节，包括数字表示和 AST 格式以及优化策略等。
- [《发布v0.18.0 - evanw/esbuild》](https://github.com/evanw/esbuild/releases/tag/v0.18.0)。这篇文章介绍了 esbuild 的新版本，主要是为了修复一些长期存在的问题，特别是与 tsconfig.json 文件的处理有关。该版本包含了向后不兼容的更改，建议在 package.json 文件中固定 esbuild 的确切版本或使用仅接受补丁升级的版本范围语法。更新内容包括：增加在线试用 esbuild 的方式、更改 TypeScript 装饰器的处理方式、支持 TypeScript 5.0 的多重继承、忽略 node_modules 中的 tsconfig.json 文件等。此外，还添加了针对 Safari 16.2 及更早版本的 bug 的解决方法，并修复了 CSS 嵌套转换的伪元素问题。
- [《骄傲的动画旗帜》](https://www.joshwcomeau.com/animation/pride-flags/)。这篇文章介绍了如何使用 CSS 和 React 构建一个波浪的像素化彩虹旗。作者通过 CSS 关键帧动画、线性渐变等技巧来实现旗帜的波动效果，并且使用 CSS 变量和 JavaScript 函数来动态生成不同彩虹旗的颜色渐变。此外，作者还分享了一些额外的技巧，例如控制旗帜波动的程度、设置圆角、隐藏初始设置等。最后，作者呼吁人们支持跨性别群体，并推荐了一些 LGBTQIA + 慈善机构。
- [《一些博客迷思》](https://jvns.ca/blog/2023/06/05/some-blogging-myths/)。本文主要讨论了一些阻止人们写博客的迷思，包括需要原创、需要专家水平、文章必须 100% 正确、写无聊的文章是不好的、需要解释每个概念、页面浏览量很重要以及更多材料总是更好等。作者认为这些迷思都是错误的，并提供了自己的看法和经验。例如，作者认为你只需要了解读者不知道的 1-2 件有趣的事情，而且不必担心预测什么会让人感兴趣。此外，作者还强调了个人故事的重要性，并分享了如何处理评论中的挑剔或恶意言论。最后，作者鼓励人们写博客，并表示他喜欢阅读关于计算机技术的个人故事。
- [《如何只用一个JavaScript函数就能画出任何规则的形状 | MDN博客》](https://developer.mozilla.org/en-US/blog/javascript-shape-drawing-function/)。本文介绍了如何使用 JavaScript 和 <canvas> 元素绘制多边形。作者首先展示了如何绘制六边形，然后通过修改角度和线条数量的方式，演示了如何绘制三角形、正方形和八边形等不同形状。接着，作者将这些代码封装成一个函数，使得用户可以通过传递中心点、半径和边数等参数来绘制不同的多边形。最后，作者提供了一些扩展思路，例如添加内半径、曲线和镶嵌等。文章还介绍了一些用于计算多边形顶点位置的数学和三角函数，以及一些基本的 < canvas > 绘图方法。读者可以在 MDN Web Docs Discord server 上与作者交流。
- [《GitHub - cpojer/remdx：美丽的极简主义React & MDX演示文稿》](https://github.com/cpojer/remdx)。ReMDX 是一个基于 React 和 MDX 的漂亮的极简主义演示文稿创建工具。它提供了一些自定义设置和使用方法，可以通过添加组件来扩展功能。每个幻灯片都可以通过三条横线分隔开，并且可以在顶部插入前置块。它还支持自定义主题和背景图片，并使用 shiki-twoslash 进行代码块样式设置。ReMDX 受到 mdx-deck、Spectacle 和 Slidev 等工具的启发，但是它专注于快速、轻量级和可组合性。如果需要添加新的功能，可以 fork 并提交 PR。
- [《前端Rust开发WebAssembly与Swc插件快速入门_咲奈的博客-CSDN博客》](https://sakina.blog.csdn.net/article/details/131028238)。本文介绍了如何使用 Rust 进行前端开发，包括开发 wasm、swc 插件和代码处理工具。其中，开发 wasm 可以利用浏览器运行 wasm 的优势，在 wasm 中进行大量复杂的计算、音视频、图像处理等；开发 swc 插件可以替代 babel 插件实现代码转换；开发代码处理工具可以借助 Swc 来解析 JavaScript、TypeScript 代码，从而实现代码信息提取、转换、编译等。文章还介绍了如何初始化项目、构建产物和运行二进制包，并指出了各种方法的优缺点。最后，文章强调了不断精进 Rust，组织出更优雅的代码结构，实现更高的执行效率的重要性。
- [《Bun中的JavaScript宏》](https://bun.sh/blog/bun-macros)。Bun 发布了一个新功能 ——Bun Macros，它是一种在打包时运行 JavaScript 函数的机制，返回值直接嵌入到打包文件中。这个功能可以用于一些小的打包任务，也支持执行一些特权操作，比如读取数据库等。但如果需要大量运行代码，则应该考虑使用服务器。Bun Macros 是通过导入语句来实现的，需要使用 {type: 'macro'} 属性注解。该功能支持异步操作和 Promise，但输入参数必须是静态可分析的，并且返回值必须可序列化。此外，为了减少恶意软件攻击的可能性，它不能在 node_modules 目录中执行。
- [《我认为Zig很难......但值得。》](http://ratfactor.com/zig/hard)。本文介绍了 Zig 编程语言的学习难度。虽然许多人认为 Zig 很容易学习，但对于像作者这样的程序员来说，它仍然是有挑战性的。文章列举了几个原因，包括 Zig 是一门新语言、Zig 强制你做出选择、Zig 是一门严谨的语言、Zig 具有 comptime 等特点。尽管 Zig 可能不容易掌握，但它力求简单、统一和正确，值得投资学习。
- [《宣布 TypeScript 5.1 - TypeScript》](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/)。TypeScript 5.1 已经发布，这个版本带来了一些新特性和优化。其中包括对 undefined-Returning 函数的隐式返回更容易、Getter 和 Setter 的无关类型、JSX 元素和 JSX 标记类型之间解耦的类型检查、命名空间 JSX 属性、typeRoots 在模块解析中的咨询、链接光标、@param JSDoc 标记的代码片段完成、避免不必要的类型实例化等。此外，TypeScript 5.1 还需要 ECMAScript 2020 和 Node.js 14.17 作为最小运行时要求。 TypeScript 团队正在努力开发 TypeScript 5.2，并计划在未来几个月内发布。
- [《宣布Rust 1.70.0 | Rust博客》](https://blog.rust-lang.org/2023/06/01/Rust-1.70.0.html)。Rust 1.70.0 版本已发布，该版本包括了一些新特性和 API 的稳定化。其中，Cargo 的 “sparse” 协议现在默认启用，这将大大提高从 crates.io 索引中获取信息的性能。此外，还稳定了两个新类型 OnceCell 和 OnceLock，用于共享数据的一次性初始化，以及新增了一个名为 IsTerminal 的特征，用于确定给定文件描述符或句柄是否表示终端或 TTY。同时，还稳定了许多 API，包括 Default for std::collections、Rc::into_inner、Arc::into_inner 等。此外，该版本还修复了一些 bug，完善了一些文档和测试。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegram 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）。
- 。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 290 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 。

## 每周一图

。
