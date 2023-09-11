---
title: "Bun 1、RSC、Code Coverage"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01pmviIb1nh0jZt3RN6_!!6000000005120-0-tps-1920-1096.jpg"
titleImageCaption: "karthikb351 @ unsplash"
publishedAt: "2023/09/11"
---

## 一周新闻

- [Bun 发布 1。](https://bun.sh/blog/bun-v1.0)
- [Astro Studio 将于 2024 提供 host 服务。](https://studio.astro.build/)
- [SvelteKit 1.24 支持 View Transitions。](https://svelte.dev/blog/view-transitions) 首先，文章解释了 view transitions 的工作原理，即通过调用 document.startViewTransition 并传递一个更新 DOM 的回调来触发视图转换。然后，文章介绍了 SvelteKit 1.24 中引入的新的生命周期钩子 onNavigate，它在新页面渲染之前触发，使得整合 view transitions 变得更加容易。接下来，文章提供了如何在 SvelteKit 应用中开始使用 view transitions 的具体步骤和代码示例。
- [Turbo 8 弃用 TypeScript。](https://world.hey.com/dhh/turbo-8-is-dropping-typescript-70165c01)
- [modelfusion。](https://github.com/lgrammel/modelfusion) 使用 JavaScript 和 TypeScript 构建多模态人工智能应用程序、聊天机器人和代理。
- [puck。](https://github.com/measuredco/puck) 基于 React 的可视化编辑器。
- [watlings。](https://github.com/EmNudge/watlings) 通过编写小程序来学习 WebAssembly。
- [open-interpreter。](https://github.com/KillianLucas/open-interpreter) 在本地终端运行 OpenAI 的代码解释器。

## 深度好文

- [《用 Rust 编写自己的 CLI》](https://noobscience.medium.com/writing-your-own-cli-in-rust-921824516c80)。
- [《组件渲染的顺序是什么？文章讨论了在 NextJS App Router 中组件的渲染顺序》](https://www.pronextjs.dev/what-s-the-order-of-component-rendering)。 当有三个组件 ComponentA、ComponentB 和 ComponentC 时，它们的渲染顺序通常是 A、B、C。但如果使用 "transclusion"（即使用 children 进行容纳）来改变它们的结构，渲染顺序会变为 C、B、A。更有趣的是，如果将 ComponentB 更改为客户端组件 ClientComponentB，渲染顺序会变为 C、A、B。文章建议不要根据组件渲染的具体机制来构建架构，因为它们可能会出乎意料。
- [《风格一致的约束》](https://stephanango.com/style)。 这篇文章探讨了风格和一致性的重要性。作者引用了奥斯卡・王尔德的话，强调思想应该是灵活的，但过程应该是可重复的。风格来源于一致性，并通过一系列的约束来定义。作者分享了他自己的一些风格选择，如穿单色衣服、使用特定的日期格式和写作方式等。他认为，拥有自己的风格可以节省决策时间，提供焦点，并帮助人们识别何时打破约束。文章的附录部分列出了一些有趣的个人风格选择实例，如 Steve Jobs 每天都穿相同的衣服，Beethoven 制作咖啡时总是精确计数咖啡豆等。
- [《如何为 React Props 添加类型？文章讨论了在React中如何为Props定义类型，提到了三种方式：type、interface和内联对象字面量》](https://twitter.com/mattpocockuk/status/1698642590193619025)。 内联对象字面量虽然写起来快，但不便于在代码库中复用。在type和interface之间，作者更偏向于使用type。但当需要继承其他组件的props时，使用interface的extends会更高效，因为使用交叉类型可能会降低TypeScript在大型代码库中的性能。因此，建议开发者养成为每个prop声明使用接口的习惯，并推荐使用代码片段来声明接口，这样既快速又能保持TypeScript的性能和复用性。
- [《每个人每天都只有24小时，希望我的选择真的是我的选择》](https://justinyan.me/post/5790)。
- [《是的，您可以衡量软件开发人员的工作效率》](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/yes-you-can-measure-software-developer-productivity)。 文章提出了一种新的衡量方法，已在20家技术、金融和制药公司中实施，取得了显著的效果。它包括以下几个关键方面：内部/外部循环时间花费、开发者速度指数基准、贡献分析和人才能力得分。
- [《案例研究：使用现代 CSS 重建 TechCrunch 布局》](https://ishadeed.com/article/rebuilding-techcrunch-modern-css)。
- [《理解 React 服务器组件》](https://www.joshwcomeau.com/react/server-components/)。 这篇文章详细介绍了 React 的新特性 ——React Server Components（RSC）。RSC 允许开发者在服务器上独立运行 React 组件，从而提高性能，减少客户端的 JS 包大小，并简化数据获取流程。文章首先回顾了传统的客户端渲染和服务器端渲染的工作原理，然后详细解释了 RSC 的工作原理、优势和如何与其他 React 特性结合使用。作者认为，RSC 为 React 开发带来了巨大的变革和潜力，未来几年将会有更多的工具和库出现，充分利用 RSC 的优势。
- [《四种常见的代码覆盖类型》](https://web.dev/ta-code-coverage/)。 这篇文章探讨了代码覆盖率的概念及其测量方式。代码覆盖率是一个指标，用于测量测试执行的源代码百分比，帮助识别可能缺乏适当测试的区域。文章介绍了四种常见的代码覆盖率类型：函数覆盖率、行覆盖率、分支覆盖率和语句覆盖率，并通过一个计算咖啡成分的代码示例来解释每种类型是如何计算其百分比的。文章还强调，虽然高代码覆盖率是理想的，但 100% 的代码覆盖率并不保证代码中没有错误。代码覆盖率只是一个指标，还需要考虑其他因素，如测试的质量和应用程序的要求。目标不应该是追求 100% 的代码覆盖率，而是应该结合多种测试方法，包括单元测试、集成测试、端到端测试和手动测试，来使用代码覆盖率。
- [《为 Vercel 优化 Next.js 冷启动》](https://holocron.so/blog/optimizing-next.js-cold-starts-for-vercel)。 这篇文章介绍了如何优化 Next.js 应用的冷启动时间。作者从 5 + 秒的冷启动时间优化到了大约 1 秒，但这只是执行时间，还有额外的函数配置时间。为了减少不必要的代码，建议只导入所需的内容，避免大型的 utils.js 文件。作者开发了一个工具来轻松地在 Vercel 上分析 Next.js 的冷启动。文章还指出 Node.js 的 import 非常慢，建议使用 esmExternals: false 来解决这个问题。此外，require 也很慢，建议使用边缘版本的 @sentry/nextjs 来提高速度。如果不需要 SEO，可以禁用 SSR 来进一步提高速度。作者还开发了一个名为 elacca 的 Next.js 插件，可以从 lambda 函数中删除所有与客户端相关的代码。
- [《Rust Server Components》](https://anto.pt/articles/rust-server-components)。 这篇文章描述了作者如何使用 Rust 语言创建自己的 web 服务器，而不是使用流行的框架如 Next.js。作者通过 Rust 实现了服务器端渲染，使用了多个 Rust 库，如 Axum、Maud、comrak 和 lol-html，来创建和渲染 HTML 内容。文章还介绍了如何使用 htmx JavaScript 库为网站添加交互性，以及如何实现 React 的 Suspense 组件的功能。
- [《React 中的 Parents 和 Owners：数据流》](https://julesblom.com/writing/parents-owners-data-flow)。 这篇文章探讨了 React 中组件的组合方式。作者指出，如果 100 个 React 开发者被给予相同的 UI 设计，他们可能会有 100 种不同的方式来组合和创建组件。因此，如何组合组件是 React 中最具挑战性的部分。一个良好组合的 React 应用应该具有易于跟踪的数据流、良好的组件封装和良好的渲染性能。文章中提到了 "prop drilling" 的问题，即某些数据需要通过多个组件传递，即使这些组件并不需要这些数据。为了解决这个问题，作者引入了 "slotted components" 的概念，允许父组件将内容放入子组件中。此外，作者强调了组件之间的 "parent" 和 "owner" 的区别，这是理解组件如何组合的关键。总的来说，文章强调了 React 中组件组合的重要性，并提供了一些策略和工具来帮助开发者更好地组织他们的组件。

## 工具资源

- [YouTube Dubbing。](https://chrome.google.com/webstore/detail/youtube-subsound/ohjehnjdpnambhdcalhoabplbiclekhp) 这个 Chrome 插件的功能是把外语视频里的语音替换成中文语音。
- [33字幕。](https://www.33subs.com/) 基于 whisper + deepl。有 gpu 的可尝试 https://github.com/chidiwilliams/buzz 。
- [外链自动跳转油猴脚本。](https://greasyfork.org/zh-CN/scripts/462796-%E5%A4%96%E9%93%BE%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AC)
- [Machato。](https://untimelyunicorn.gumroad.com/l/machato) ChatGPT 客户端，Mac 原生应用，3 欧+。
- [Heptabase。](https://heptabase.com/) 用来学习复杂主题的笔记软件。
- [程序员如何优雅地做副业。](https://github.com/easychen/lean-side-bussiness)
- [506 engineering blogs。](https://engineeringblogs.xyz/)

## 每周烂梗

![](https://img.alicdn.com/imgextra/i2/O1CN01nBPHtA1a5NBIRxuiQ_!!6000000003278-0-tps-720-960.jpg)

![](https://img.alicdn.com/imgextra/i3/O1CN01nQKMX523IlcUcaT8i_!!6000000007233-0-tps-1250-842.jpg)

![](https://img.alicdn.com/imgextra/i1/O1CN01IWOEa11TXaGZZpWjY_!!6000000002392-0-tps-427-720.jpg)
