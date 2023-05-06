---
title: "Angular 16、Vercel Storage、类型测试、React Canaries、Panda CSS、WebContainers、Qwik 1、WebGPU"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01Lvp0Uj1RKBPE51v4j_!!6000000002092-2-tps-1456-816.png_1200x1200.jpg"
titleImageCaption: "rainy day, a water wheel in the green river, green plants and flowers in the foreground, mountains and water in the distance"
publishedAt: "2023/05/08"
draft: true
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔。

 - Rollup 文档[中文站](https://cn.rollupjs.org/)。
 - Rollup [v3.21.0](https://github.com/rollup/rollup/releases/tag/v3.21.0) 发布，支持 import tree shake 。
 - React 文档[中文站](https://zh-hans.react.dev/)。
 - Github actions 启用 [macos-13](https://github.blog/changelog/2023-04-24-github-actions-macos-13-is-now-available/) 。
 - [zustand](https://github.com/pmndrs/zustand) 30k stars 。
 - Cypress [v12.11.0](https://docs.cypress.io/guides/references/changelog#12-11-0) 发布，支持 Angular v16 。
 - Vue 推出 [官方认证](https://certification.vuejs.org/) 渠道。
 - [WebContainers](https://blog.stackblitz.com/posts/webcontainers-are-now-supported-on-safari/) 支持在 iOS 上运行。
 - React Native macOS [v0.71](https://devblogs.microsoft.com/react-native/2023-04-27-announcing-macos-71/) 发布。
 - Vue Reactive Props Destructure [RFC](https://github.com/vuejs/rfcs/discussions/502) 。
 - Deno 支持实验性 [KV](https://deno.com/manual@v1.33.0/runtime/kv) 。
 - Vercel 面板支持查看 [OG](https://vercel.com/changelog/open-graph-link-sharing-inspector) 。
 - [Deno](https://deno.com/blog/v1.33) 2 即将发布。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《Angular 发布 v16》](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d)。Angular 发布了最大的版本更新，包括改进响应性、服务器端渲染和工具等方面。其中最重要的是引入了全新的响应性模型，提高了性能和开发者体验。该版本还支持服务端渲染和水合，提供了更好的工具和单独的 API，以及其他许多改进。
- [《Next.js 发布 13.4》](https://nextjs.org/blog/next-13-4)。Next.js 13.4 是一个重要的版本，标志着 App Router 的稳定性。这个版本增加了许多新特性，包括 React Server Components、嵌套路由和布局、简化数据获取、流式渲染和 Suspense、内置 SEO 支持等。其中最重要的是 App Router，它是 Next.js 的核心组件，可以让开发者更方便地定义页面布局和数据获取方式。此外，Turbopack 也是一个值得关注的新功能，它可以加速本地开发和生产构建过程。最后，Server Actions 是一个实验性的功能，可以在服务器端直接修改数据，不需要客户端 JavaScript。
- [《使用 Vercel Spaces 实现规模化的高质量软件 - Vercel》](https://vercel.com/blog/vercel-spaces)。Vercel 推出了 Vercel Spaces，它提供了强大的工具和惯例，可以与 monorepo 集成，使开发人员能够在保持质量的同时有效地扩展。Spaces 仪表板提供了对开发工作流程、代码健康状况和构建日志的洞察力，并包括通过 Conformance、Code Owners 和 Vercel Runs 提升效率和消除障碍的新功能。
- [《Tauri 发布 1.3.0》](https://tauri.app/blog/2023/05/03/tauri-1-3/)。Tauri 团队发布了 1.3 版本，包括安全改进、新功能和重要的错误修复。该版本新增了 NSIS，可以使用 NSIS 创建 Windows 应用程序安装程序，还有其他一些改进和修复。
- [《TailwindCSS vs. UnoCSS》](https://dev.to/mapleleaf/tailwindcss-vs-unocss-2a53)。本文对比了 TailwindCSS 和 UnoCSS 两个工具，总结了它们的特点、语言、文档、自定义样式和编辑器支持等方面。TailwindCSS 拥有完整的 CSS 特性类名，可以通过任意值、变体和属性来进行全面的样式设计，而 UnoCSS 则支持所有 TailwindCSS 的功能，并提供了一些额外的功能，如变体组、CSS 网格流体列和更多动画效果。在语言方面，TailwindCSS 有一个相对规范的类名命名方式，UnoCSS 则更加灵活。在文档和自定义样式方面，两者都有不错的表现，但 UnoCSS 的交互式文档和颜色提示更加出色。在编辑器支持方面，TailwindCSS 支持较好，但存在一些缺陷，而 UnoCSS 的高亮显示和颜色提示则更为出色。作者认为，如果你看重灵活性和额外的功能，你可能会喜欢 UnoCSS，但如果你看重约束和更清晰的编写语言，则应该选择 TailwindCSS。
- [《如何测试类型》](https://www.totaltypescript.com/how-to-test-your-types)。本文介绍了三种测试 TypeScript 类型的方法。首先是使用 vitest，这是一个基于 Vite 的强大测试运行器，可以用来测试运行时代码和类型。其次是自己编写测试代码，可以使用 Expect 和 Equal 等类型帮助工具来测试特定类型，并在测试套件中运行 tsc 检查类型测试是否失败。最后，还介绍了一个名为 tsd 的库，它与 vitest 很相似，但包含了所有必要的内容，使得测试更加方便。对于应用程序开发而言，测试类型并不是必须的，但对于任何将被大量人使用的库而言，测试类型是至关重要的。
- [《10 种使用 ChatGPT 学习更好的方法 - 斯科特・H・扬》](https://www.scotthyoung.com/blog/2023/05/02/chatgpt-learning-tips/)。这篇文章总结了读者们如何使用大型语言模型（LLMs）来学习和研究的建议，并探讨了使用这些工具的优缺点。作者提醒读者要注意，虽然 ChatGPT 可以进行人类般的对话，但它并不是真正的人类，有时会提供错误的答案。然而，ChatGPT 在许多任务上都很有用，例如作为个人导师、语言教练、生成摘要、与长文本对话、简化专业术语等。作者还提到了一些不应该使用 AI 工具的情况，例如期望它们正确地获取事实、引用和数学等方面。
- [《React Canaries：在 Meta 之外启用增量功能发布》](https://react.dev/blog/2023/05/03/react-canaries)。React 团队推出了一个新的官方支持的 Canary 版本，让开发者可以在稳定版本发布之前就采用新功能。这个 Canary 版本只包含 React 团队相信已经准备好被采用的特性，而不像实验性版本那样可能会有重大变化。React 将按照 semver 规范每个稳定版本进行更新，同时也会在博客上发布 Canary 版本中的重大变更和新特性。Canary 版本需要被固定版本号，以避免包含重大变更。除此之外，React 的稳定版本不会有任何改变。
- [《一个文件中多个样式表・Issue #5629・w3c/csswg-drafts》](https://github.com/w3c/csswg-drafts/issues/5629)。这篇文章讨论了在 JS 中导入 CSSStyleSheets 的问题。目前的解决方法是将 CSS 编译为 JS 模块，但这会降低浏览器直接加载和解析 CSS 的性能。Web Bundles 可能会通用地解决这个问题，但其未来在多个浏览器上的应用尚不确定。作者提出了一个新的解决方案：引入一个 @sheet 规则，它包含整个样式表作为其内容，以允许 CSS 的打包。
- [《Panda CSS - 无运行时开销的 CSS-in-JS 方案》](https://infinum.com/blog/panda-css-css-in-js-without-runtime-overhead/)。本文介绍了一个名为 Panda CSS 的前端工具库，它提供了一组实用类、模式和配方，用于在 Web 应用程序中构建现代和响应式用户界面。相比于纯字符串的方法，Panda CSS 提供了一种声明性的方法来使用 JavaScript 对象对组件进行样式设置，使其更易读和易维护。尽管 Panda CSS 目前仍处于实验阶段，但它有望成为前端开发流程中的重要组成部分。
- [《为什么我喜欢使用 Map（和 WeakMaps）来处理 DOM 节点》](https://www.macarthur.me/posts/maps-for-dom-nodes)。本文介绍了在处理大量 DOM 节点时，Maps（和 WeakMaps）是特别有用的工具的原因。与使用对象作为键 / 值存储相比，使用 Map 可以更简单、更强大、更高效地管理状态，并且不需要设置或读取唯一属性。此外，Map 还具有自动垃圾回收的功能，可以更有效地管理内存。总之，Map 对于处理大量 DOM 节点非常有用。
- [《RegExGPT》](https://regexgpt.app/)。RegExGPT 是一种工具，它可以让人们通过输入文本转换的示例和期望结果来生成正则表达式模式。用户还可以使用自然语言输入来解释他们想匹配的模式，并选择输出的编程语言。使用 RegExGPT 时，需要输入要转换的文本示例和期望结果，选择编程语言并点击 “生成” 按钮来生成正则表达式模式。
- [《React Native macOS 发布 0.71》](https://devblogs.microsoft.com/react-native/2023-04-27-announcing-macos-71/)。React Native macOS 发布了 0.71 版本，这是该平台首次与 iOS、Android 和 Windows 保持同步。为了实现这个目标，开发团队不得不跳过了一些中间版本，并开始着手 0.72 版本。此外，该版本还加入了对 Fabric 的实验性支持，但需要注意的是这只是一个概念验证，存在不稳定性。
- [《WebContainers 现在可以在 Safari、iOS 和 iPadOS 上运行。》](https://blog.stackblitz.com/posts/webcontainers-are-now-supported-on-safari/)。StackBlitz 宣布其 WebContainers 已经可以在 Safari、iOS 和 iPadOS 上运行。用户现在可以在 iPhone 或 iPad 上尝试交互式代码示例和 playground，Safari 支持目前处于 beta 版本。StackBlitz 的 WebContainers 是基于未来技术构建的，包括 Wasm threads 和 SharedArrayBuffer，这些技术在 Safari 上得到了支持。
- [《使用 React 服务器组件在您的博客上显示一个视图计数器。》](https://scastiel.dev/view-counter-react-server-components)。本文介绍了如何在个人博客中使用 React Server Components、Streaming 和 Suspense 实现浏览量计数器。作者使用 Plausible 工具的 API 获取页面的浏览量，然后将其渲染到页面上。传统的方法是在客户端和服务器之间进行通信，但是使用 React Server Components 可以更加优雅地处理这个问题。通过在 <PageViews /> 组件中调用 getCountForPage 函数，然后在页面.tsx 文件中渲染计数，可以实现此目的。而使用 Streaming 则可以让服务器先发送一个初始版本的页面，然后保持连接打开，并稍后发送第二个版本（包含浏览量）。
- [《如何在 React 中编写注释：好的、坏的和丑陋的》](https://dmitripavlutin.com/react-comments/)。这篇文章介绍了在 React 中添加注释的三种方法。第一种是使用 JSX 注释语法，但这种方式有些冗长；第二种是在 JSX 标签外使用 JavaScript 注释，可以更简洁地添加注释；第三种是在 JSX 标签内部使用 JavaScript 注释，可以针对特定元素添加注释。作者认为第三种方法最好，因为它简洁明了且针对性强。
- [《React Router 发布 v6.11.0》](https://github.com/remix-run/react-router/releases/tag/react-router%406.11.0)。这篇文章介绍了 React Router 版本 6.11.0 的更新内容。其中，一些小的改动包括在 useFetcher 中启用 basename 支持，更新 @remix-run/router 依赖等。此外，fetchers 不再在搜索参数更改或路由到相同 URL 时重新验证，并且只会在操作提交或 router.revalidate 调用时重新验证。
- [《Qwik 发布 v1.0》](https://www.builder.io/blog/qwik-v1)。Qwik 是一个全栈 Web 框架，旨在通过 JavaScript 流式传输和延迟执行等技术提供快速、可扩展和易维护的 Web 应用程序。Qwik 提供了许多功能，包括 JSX、基于目录的路由、数据获取、中间件逻辑、UI 组件、国际化、身份验证、CMS、样式和测试等。
- [《Prompt 工程 vs 盲目 Prompting》](https://mitchellh.com/writing/prompt-engineering-vs-blind-prompting)。本文介绍了 Prompt Engineering，即利用提示来有效地从语言模型中提取信息的过程，通常用于实际应用。文章指出，许多人声称正在进行 Prompt Engineering，但实际上只是盲目  Prompting。因此，本文提供了一种基于实验方法的 Prompt Engineering 示例，以展示如何为应用程序构建可靠的功能。作者强调了选择问题、演示集、提示候选项和测试提示等步骤的重要性，并解释了如何选择最终的提示方案。
- [《使用 Rust 在 10 分钟或更短的时间内构建和部署 URL 缩短器》](https://www.shuttle.rs/blog/2022/03/13/url-shortener)。这篇文章讲述了一个软件开发人员在凌晨时分突然想到的一个想法：能否在不需要担心基础架构的情况下快速构建一个有用的应用程序。他使用了 Rust 编程语言，结合 serverless 平台 Shuttle 和 Postgres 数据库，最终成功地构建了一个简单的 URL 缩短服务。作者认为，虽然现实中的软件工程很复杂，涉及到不同团队和技能集的协作，但这种新型的无需关注基础架构的开发模式是可行的，并且可以带来更好的体验。
- [《为什么到了 2023 年，OAuth 仍然很难？| Nango 博客》](https://www.nango.dev/blog/why-is-oauth-still-hard)。OAuth 是一个标准协议，但在实际应用中，每个 API 都有自己的解释和实现方式，使得 OAuth 变得非常复杂。许多 API 还添加了非标准扩展，使得调试变得困难。此外，许多 API 需要进行审核才能使用，并且 OAuth 安全性也是一个不断变化的目标。为了解决这些问题，Nango 正在开发一种新的方法，该方法提供预构建的 OAuth 流程、安全令牌存储和自动令牌刷新，支持超过 90 个 OAuth API。
- [《我想谈谈 WebGPU。》](https://cohost.org/mcc/post/1406157-i-want-to-talk-about-webgpu)。WebGPU 是一种新的 WebGL，可以在 Web 浏览器中绘制 3D。它很好用，甚至可能取代 Canvas 成为 Web 浏览器中绘制 2D 的新方式，并取代 Vulkan 和 OpenGL 成为任何编程语言中绘制的标准方式。WebGPU 已经在 Chrome 113 中发布，到年底将会在所有浏览器中普及。此外，WebGPU 提供了 JavaScript、Rust/C++ 等多种语言实现方式。
- [《Vercel 发布 Vercel Storage》](https://vercel.com/blog/vercel-storage)。Vercel 宣布了一套无服务器存储解决方案，包括 Vercel KV，一个无服务器的 Redis 解决方案；Vercel Postgres，一个为前端建立的无服务器SQL数据库；以及 Vercel Blob，一个在边缘上传和服务文件的解决方案。这些解决方案旨在使数据库成为 Vercel 前端云的一流部分，并使开发人员能够管理他们的前端存储需求，而不必担心基础设施。
- [《Deno 发布 KV》](https://deno.com/blog/kv)。Deno KV 是一款全球复制、强一致性的键值数据库，可在 35 个地区实现低延迟读取。它可以无缝集成到开源 Deno 运行时中，无需任何配置即可在本地或作为托管服务运行。Deno KV 是一个简单但功能强大的一流原语，只暴露了少量方法来存储、检索、删除和枚举数据。
- [《React 渲染的交互式指南》](https://ui.dev/why-react-renders)。本文主要介绍了 React 的渲染机制，即 React 只有在状态改变时才会重新渲染组件。当事件处理程序被调用时，如果其中包含 useState 的更新函数，并且新状态与快照中的状态不同，React 将触发重新渲染。此外，本文还介绍了 React 的批处理算法和 StrictMode 组件。
- [《如何使用 Rust 和 Napi RS 在 NodeJs 中将 CSV 文件处理速度提高五倍》](https://www.alxolr.com/articles/how-to-process-a-csv-file-five-times-faster-in-node-js-with-rust-and-napi-rs)。本文介绍了如何使用 Rust 和 Napi RS 在 NodeJs 中处理 CSV 文件。作者使用了 readline 模块来处理 CSV 文件，并记录了处理时间和吞吐量。然后作者使用了 Rust 编写了相同的代码，并通过 pv 命令进行了基准测试，发现 Rust 版本比 Nodejs 版本快五倍。最后，作者介绍了如何使用 Napi rs 将 Rust 代码编译成动态库，并在 Nodejs 中调用。总之，结合 Rust 和 Nodejs 可以实现更好的性能和效率。
- [《2023 年在哪里托管 Remix 应用程序？》](https://www.jacobparis.com/guides/where-to-host-remix)。本文介绍了多种应用托管方式，包括无服务器函数、Netlify、Vercel、Cloudflare Pages、Fastly、AWS Lambda 和长期运行的服务器。对于每种托管方式，文章列出了其优点和缺点，以及支持的功能和限制。需要根据自己的应用需求选择适合的托管方式。
- [《实现 experimental_useFormStatus by acdlite・Pull Request #26722・facebook/react》](https://github.com/facebook/react/pull/26722)。这篇文章介绍了一个新的 React Hook，可以读取其祖先表单组件的状态，用于实现加载指示器等功能。目前该 Hook 只在实验版本中可用，随着其稳定性的提高，将会发布更多 API 和文档。该 Hook 内部使用 startTransition 和上下文对象实现，但实际实现细节可能会发生变化。由于表单元素不能嵌套，因此实现者不需要跟踪多个嵌套的 “转换提供者”。虽然它使用通用的 Fiber 配置方法进行实现，但它目前仍基于 React DOM 的要求进行一些假设。
- [《我作为新经理所犯的一些错误》](https://www.benkuhn.net/newmgr/)。这篇文章讲述了作者成为管理者的经历，以及他在这个过程中犯下的错误和解决策略。作者指出，作为一名管理者，最初的困难之一是难以确定自己的工作是否有用。他提供了三种应对策略：与上级领导沟通，寻求反馈，多元化生活体验。此外，作者还分享了其他的经验教训，如管理的重要性、任务相关成熟度、拖延维护、直接询问等。最后，作者总结了成为新管理者的困难所在，并鼓励读者不要害怕犯错，因为这是成长的必经之路。
- [《TypeScript 装饰器：完整指南》](https://deadsimplechat.com/blog/typescript-decorators-a-complete-guide/)。本文介绍了 TypeScript 的装饰器，装饰器本质上是函数，可以用于给类、方法、属性等应用可重用的行为。不同类型的装饰器包括类装饰器、方法装饰器、属性装饰器、访问器装饰器和参数装饰器。装饰器可以用于实现各种功能，如前 / 后钩子、监视属性更改和方法调用、转换参数、自动序列化和反序列化、依赖注入等。使用装饰器的优点包括跨越关注点、依赖注入、验证和代码组织。
- [《“const” 欺骗》](https://www.joshwcomeau.com/javascript/the-const-deception/)。本文介绍了 JavaScript 中的 const 关键字，它用于声明常量。虽然 const 声明的对象是不可重新赋值的，但我们仍然可以修改该对象的属性或元素。文章讲解了变量名作为标签、重新分配标签和修改数据等概念，并介绍了原始数据类型的特点。最后，作者推荐了一些深入学习 JavaScript 的资源。
- [《2023 年，Rust 能否击败 JavaScript？》](https://joshmo.hashnode.dev/can-rust-beat-javascript-in-2023)。本文介绍了 Rust 作为 Web 开发语言的优势。尽管在过去，一些人认为使用 Rust 前端开发（通过 WASM）比 JavaScript 慢或者不够成熟，但是现在已经不再是问题。实际测试表明，Rust WASM 框架如 Leptos 和 Dioxus 在性能上超越了大多数 JavaScript 框架，同时 Rust 也有着出色的后端性能，在 TechEmpower 的排名中占据了五个前十名的位置。此外，Rust 还具有良好的开发体验和错误处理机制，并且拥有完善的生态系统来支持数据库、Redis、Stripe 支付等服务。最后，文章介绍了 Shuttle 作为部署 Rust 应用的工具。
- [《是时候学习 oklch 颜色了》](https://keithjgrant.com/posts/2023/04/its-time-to-learn-oklch-color/)。本文介绍了最新的 CSS 颜色标记法，包括 hwb()、lab()、lch()、oklab()、oklch() 和 color()。文章推荐学习 oklch() 标记法，因为它基于人眼感知而不是技术限制，可以定义任何颜色，并且支持更广泛的色域。此外，文章还提到了使用 oklch() 时需要注意的一些问题，如 chroma 值的范围和 hue 值的变化等。最后，文章推荐了一个在线颜色选择器 oklch.com，方便调试和转换其他颜色格式。
- [《批判性思维是软件工程师最重要的技能吗？》](https://blog.pragmaticengineer.com/critical-thinking/)。这篇文章谈到了两个现象：技术术语的使用和 “思想领袖” 在社交媒体上的崛起，以及这些现象对批判性思维的影响。作者认为，过度使用技术术语可能掩盖了人们对某一概念的真正理解，而 “思想领袖” 的观点也不应该被轻易地接受，需要进行深入的研究和验证。作者建议人们提高批判性思维能力，包括理解技术术语、验证信息、问 “为什么” 和 “如何”，并避免跟风。最后，作者强调批判性思维将在未来变得越来越重要，因为随着人工智能工具的普及，我们需要更多的人来质疑和思考。
- [《为什么在 React 中你不需要信号（Signals）》](https://blog.axlight.com/posts/why-you-dont-need-signals-in-react/)。本文介绍了信号在 React 中的两个方面：反应式原始类型和绕过 diffing。反应式是 React 的一个关键特性，可以通过 useState 创建反应式原始类型来定义状态，并触发重新渲染。为了简化全局状态的定义和使用，第三方库 Jotai 可以很有用。Jotai 提供了 atoms 来定义全局状态，这些 atoms 可以表示状态的定义，也可以定义依赖于其他 atoms 的派生状态。与 useState 不同，useAtom 不是局部状态，可以在另一个组件中使用来共享 atom 状态。另一个重要的特性是绕过 diffing。React 通过比较 UI 的先前和当前表示来更新 DOM，以确定已更改的内容并仅更新 DOM 的那些部分，从而实现更好的性能和响应性。然而，绕过 diffing 可能会导致 UI 不一致，并使应用程序更难理解。因此，在决定绕过 diffing 之前，需要全面评估性能收益并权衡潜在风险。
- [《不要 "闪烁" 的 UI：使用 useLayoutEffect，绘画和浏览器故事》](https://www.developerway.com/posts/no-more-flickering-ui)。本文介绍了在 React 中如何根据 DOM 测量更改元素的基础知识。文章首先通过一个响应式导航组件的例子，讲解了如何使用 useEffect 来计算容器大小和每个元素的尺寸，并且根据这些信息来调整元素的数量。然而，这种方法会导致初始渲染时出现闪烁问题。为了解决这个问题，文章介绍了 useLayoutEffect 的用法，并解释了浏览器渲染、绘制和事件循环等相关概念。最后，文章还讨论了在 Next.js 等服务器端渲染框架中使用 useLayoutEffect 的问题。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 290 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 294 - 《Toy Webpack Runtime》

## 每周一图

![](https://img.alicdn.com/imgextra/i1/O1CN01eVF8051Y8uyYH1zDF_!!6000000003015-0-tps-517-483.jpg)

