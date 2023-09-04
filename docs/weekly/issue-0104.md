---
title: "Astro 3、Npm 10、Biome、State of CSS 2023"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN0177lJDJ1RzP5cqzsSn_!!6000000002182-0-tps-1920-1080.jpg"
titleImageCaption: "danielcgold @ unsplash"
publishedAt: "2023/09/04"
---

## 一周新闻

- [React Redux 发布 9.0.0-alpha。](https://github.com/reduxjs/react-redux/releases/tag/v9.0.0-alpha.0)
- [Rome 更名为 Biome。](https://biomejs.dev/blog/annoucing-biome)
- [Npm 发布 10。](https://github.com/npm/cli/releases/tag/v10.0.0)
- [State of CSS 2023 出炉。](https://2023.stateofcss.com/zh-Hans/)
- [随着 Firefox 117 支持 CSS Nesting，此功能已覆盖所有浏览器。](https://twitter.com/wesbos/status/1696201171587809761)
- [Tailwind CSS 的下一代引擎 Oxide 将基于 Lightning CSS。](https://www.youtube.com/watch?v=CLkxRnRQtDE&t=2146s)
- [OpenAI 推出 ChatGPT 企业版。](https://openai.com/blog/introducing-chatgpt-enterprise)
- [Remix 发布 2 Pre。](https://twitter.com/remix_run/status/1696525340640936190) 值得注意的是，2 的新功能在 1 里已可通过 Future Flag 开启。
- [Fomos，一个开源的试验性操作系统。](https://github.com/Ruddle/Fomos) 基于 Rust。
- [Astro 发布 3。](https://astro.build/blog/astro-3/) Astro 3.0 是第一个支持 View Transitions API 的 web 框架。Astro 3.0 的新特性包括图像优化、更快的渲染性能、服务器无服务器的 SSR 增强、JSX 的 HMR 增强和优化的构建输出。View Transitions API 允许在页面之间进行平滑过渡，例如淡入淡出、滑动、变形和持久化状态元素。Astro 3.0 还提供了对 React Fast Refresh 的支持，这是一种智能推送本地更改到浏览器的现代开发特性，而不会更改UI的当前状态。此外，Astro 3.0 还提供了 HTML 最小化、组件 ID 更改和 CSS 内联等构建输出优化。
- [Next.js 的新文档《迁移 Vite 项目到 Next.js》。](https://nextjs.org/docs/app/building-your-application/upgrading/from-vite)

## 深度好文

- [《Tailwind CSS 为啥会赢》](https://matt-rickard.com/why-tailwind-css-won)。 1）直接写在 jsx 或 html 里，无需切换到 css，2）可复制和粘贴，3）依赖少，4）可重用。
- [《状态管理器（数据流）现状》](https://newsletter.bytebullet.dev/p/07-current-state-of-state-management)。 作者首先解释了为什么可能需要状态管理器，例如主题切换、复杂的通知系统、撤销/重做功能或完全脱机模式。然后，作者介绍了几种不同的状态管理库，包括 Recoil、Jotai、Redux、Zustand、Hookstate、Mobx、Effector 和 Valtio，每个库都用简单的计数器应用程序作为示例。作者最终选择了 Jotai ，因为它提供了易用性和通过不同集成的可扩展性。
- [《未来的 4 种软件类型》](https://www.proofofconcept.pub/p/the-four-types-of-software-in-the)。 商业软件、精品软件、个人软件和一次性软件。
- [《TypeScript 对编译器来说出乎意料地好》](https://matklad.github.io/2023/08/17/typescript-is-surprisingly-ok-for-compilers.html)。 作者提出了使用TypeScript编写类型检查器的想法，并详细介绍了如何使用TypeScript定义抽象语法树（AST）和类型推断。文章还展示了如何使用TypeScript的访问者模式和转换函数来实现类型检查，并处理类型错误。最后，作者总结了TypeScript的优点，包括deno运行时、优秀的工具支持和强大的语言特性，并展示了如何使用TypeScript实现类型安全的语法糖解析。
- [《为什么 htmx 没有构建步骤，而是选择使用纯 JavaScript》](https://htmx.org/essays/no-build-step/)。 作者认为，纯JavaScript代码具有更好的持久性，可以避免因依赖项变化而导致的维护成本，同时也简化了开发人员的体验。虽然这种方法有一些缺点，比如不能使用静态类型、ES6特性和模块化，但对于htmx这样的项目，这些缺点是可以接受的。作者强调，这种方法适合htmx，但不一定适合所有应用程序。最后，作者指出，这种方法给了开发人员更多的选择，可以避免被复杂的JavaScript堆栈所束缚。
- [《您不知道可以使用 GitHub Project 做的 10 件事》](https://github.blog/2023-08-28-10-things-you-didnt-know-you-could-do-with-github-projects/)。 包括：1. 使用CLI管理项目；2. 将项目导出为TSV文件；3. 创建可重复使用的项目模板；4. 复制项目；5. 使用工作流自动化项目；6. 为自定义字段添加颜色和描述；7. 从任何组织添加问题；8. 一次编辑多个项目；9. 重新排序字段；10. 使用“切片”功能查看所需内容。此外，文章还介绍了一个额外的技巧：深度链接，可以直接将特定问题的链接发送给队友。
- [《如何建立写博客的习惯》](https://blog.douchi.space/keep-blogging/)。 作者提出了几个建议：1. 选择适合自己的工具，减小写博客的外界阻力；2. 把想写的点子随手记录下来，建立一个题材库；3. 建立激励机制，包括自身激励和外部激励；4. 培养有效的分发平台，让更多人看到自己的文章；5. 建立自己的博客社交圈，与其他博主交流互动。
- [《如何在工作之余抽出时间学习》](https://www.feststelltaste.de/how-to-find-time-to-learn-after-work/)。 作者分享了他的一些技巧和工具，例如在通勤时听播客、做饭时看会议视频、用蓝牙耳机连接多个设备、以至少两倍于原速的速度听音频等。他认为这种方式不需要100%的专注，但可以获取关键信息或主要观点。
- [《Astro View Transitions》](https://developer.chrome.com/blog/astro-view-transitions/)。 View Transitions API 是浏览器的解决方案，用于简化页面不同状态之间的平滑过渡。文章描述了 Astro 社区如何早期采纳和实验该 API ，并强调了它对更广泛社区的可能性。Astro 3.0 中的新功能是对 View Transitions 的内置支持。文章还讨论了 Astro 团队如何找到、采纳并将 View Transitions 纳入 Web 开发体验的中心。Astro 3.0 最终支持了新的 View Transitions API ，并为所有人取消了标记。这使得开发人员可以实验性地或一次性地采纳新的 API 。文章还强调了将 Astro 与平台 API 对齐的意外好处，例如在原生 View Transitions API 之上构建新功能的能力。
- [《最快的 WebSocket 实现》](https://c410-f3r.github.io/thoughts/the-fastest-websocket-implementation/)。 这篇文章是对 wtx 和其他几个 WebSocket 实现项目的性能进行测试和比较，以确定哪一个是最快的。作者首先介绍了三个用于评估 WebSocket 性能的参数：连接数、消息数和传输内存大小，并解释了它们的重要性。然后，作者列举了将要测试的六个不同语言的 WebSocket 实现项目，并详细说明了测试的设置和过程。测试结果以图表的形式展示，其中每个图表代表不同的参数组合。测试结果显示，wtx 在所有测试中都是最快的。
- [《AI 辅助教学》](https://openai.com/blog/teaching-with-ai)。 这篇文章介绍了教育工作者如何使用ChatGPT来加速学生学习，并提供了一些提示，帮助教育工作者开始使用这个工具。文章列举了几个例子，包括角色扮演，制作测验、测试和课程计划，帮助非英语母语者，教授学生批判性思维。文章还包括了一些示例提示，以帮助教育工作者开始使用ChatGPT，例如制定课程计划，创建有效的解释、示例和类比，通过教学帮助学生学习，创建AI辅导员等。
- [《用 Deno 在 5 分钟内构建跨平台 CLI》](https://deno.com/blog/build-cross-platform-cli)。 文章首先介绍了Deno的优点，然后逐步指导读者设置CLI环境，解析参数，与浏览器方法交互，管理状态，测试，编译和分发CLI。文章还提供了一些额外的资源，包括一些有用的模块和框架，可以帮助开发更复杂的CLI。最后，文章鼓励读者分享他们用Deno构建的项目。
- [《如何判断一个人是否真的爱你》](https://www.zhihu.com/question/321353759/answer/2664161573)。 首先，要表现出明确的情绪，然后观察对方的反应。如果对方的反应与你的情绪同频，例如你痛苦，对方也感到痛苦，那么这个人可能真的爱你。相反，如果对方的反应与你的情绪相反，例如你开心，对方却表现出不悦，那么这个人可能并不真的爱你。

## 工具资源

- [FFmpeg.app。](https://ffmpeg.app/)
- [Obsidian Auto Note Mover。](https://github.com/farux/obsidian-auto-note-mover) 根据根据自动移动笔记到文件夹。
- [双语网页翻译扩展 & 油猴脚本。](https://github.com/fishjar/kiss-translator)
- [本恰恰原创合集。](https://www.weibo.com/2166767661/MwiGQECPH?pagetype=profilefeed)
- [见室优质信息源导航。](https://buerc.notion.site/1c9e865c15744f2ab88d9d3a382b2170)
- [Mochary Method Curriculum。](https://docs.google.com/document/d/18FiJbYn53fTtPmphfdCKT2TMWH-8Y2L-MLqDk-MFV4s/edit?pli=1)

## 每周烂梗

![](https://img.alicdn.com/imgextra/i2/O1CN01eSUsBg1z0D6gMLZ4w_!!6000000006651-2-tps-1580-1472.png)
后端程序员写样式。
