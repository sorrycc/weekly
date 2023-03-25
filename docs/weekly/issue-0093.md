---
title: "npm、sharp images、React Labs、fzf、Server First Framework、手写 Signals"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01JI9isW1Ldyow2M3FG_!!6000000001323-2-tps-1344-896.png"
titleImageCaption: "Landscape illustration, Hayao Miyazaki, in the sea of flowers, clouds, fantastic sky, warm colors, simple composition"
publishedAt: "2023/03/27"
draft: true
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。

- 。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《从 ts-node 迁移到 Bun》](https://johnnyreilly.com/migrating-from-ts-node-to-bun)。本文介绍了如何将一个使用 ts-node 编写的控制台应用程序迁移到 Bun，以及在迁移过程中遇到的一些问题和解决方案。作者发现 Bun 比 ts-node 快 50%，并且迁移过程相对容易。他认为这让他对 Bun 充满信心，并期待未来更多地使用它。
- [《加速 JavaScript 生态系统 - npm 脚本》](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-4/)。本文介绍了如何优化 JavaScript 中常用的 “npm scripts”，以减少其约 400 毫秒的开销。作者通过分析 npm CLI 的代码结构，发现大部分时间都花费在加载组成 npm CLI 的模块上。作者通过惰性加载、减小模块图等方式，将运行 npm scripts 的时间从 400 毫秒降至 22 毫秒。作者指出，JavaScript 工具中普遍存在的问题是没有简便的方法来缩短模块图，因此可以考虑在发布时将代码打包，以减少加载时间。
- [《通过针对高密度显示进行优化，将图像大小减半。》](https://jakearchibald.com/2021/serving-sharp-images-to-high-density-screens/)。本文探讨了高密度屏幕的普及程度以及如何为其优化图像。作者指出，80% 的用户使用 DPR（设备像素比）为 1.5 或更高的屏幕，因此在设计网站时需要考虑到这一点。对于高密度屏幕，需要将图像压缩至用户的设备像素而不是 CSS 像素，以确保图像清晰度。作者提供了一种简单的方法来处理图像，即将最大尺寸乘以 2 并使用较低质量进行编码，以便在高密度屏幕上始终显示清晰的图像。此外，作者还介绍了一种更加完整的方法，包括使用 `<picture>` 和 `<source>` 标签，在不同的屏幕分辨率下提供不同的图像，并提供了示例代码。
- [《Vite 5・vitejs/vite・讨论 #12466》](https://github.com/vitejs/vite/discussions/12466)。Vite 开始讨论下一个主要版本的需求，以收集来自下游生态系统和用户的早期反馈。Vite 5 的开发将重点关注性能方面的改进，并可能引入一些破坏性变化。同时，Vite 还在考虑将 vite-node 移动到 Vite 核心作为 SSR 的替代方案。开发者可以在 Vite 5 的里程碑中跟踪新问题和 PR。
- [《如何获得一个酷炫的 NPM 包名？》](https://unix.bio/posts/how-to-get-npm-package-name)。本文介绍了如何通过 NPM 的争议政策来申请将占位包的所有权转移给自己。对于长期没有更新或仅仅是占位的包，NPM 工作人员会在 4 周后自动将包的 owner 设置为申请者的用户名。申请者需要发送邮件至包的所有者并抄送 support@npmjs.com，并说明申请转移的原因、包名以及自己的 npm username。
- [《您可能不需要的 Hooks》](https://reacttraining.com/blog/hooks-you-probably-dont-need)。本文介绍了 React Hooks 中一些不太常用的 Hook。
- [《React Labs：我们正在进行的工作》](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023)。React Labs 发布了最新的研究进展，包括 React Server Components、Asset Loading、Document Metadata、React Optimizing Compiler、Offscreen Rendering 和 Transition Tracing 等。其中，React Server Components 是由 React 团队设计的一种新的应用架构，提供了一种新的组件类型 —— Server Components，它们可以在构建期间运行，也可以在服务器上运行，让您无需构建 API 即可访问数据层。另外，React Labs 还在开发 Suspense、Transition Tracing 等功能，以提高 React 的性能和用户体验。
- [《那么，您已经安装了 `fzf`。现在该怎么办？》](https://andrew-quinn.me/fzf/)。本文介绍了一个名为 fzf 的工具，它是一个命令行模糊搜索工具，可以极大地提高 Linux 和 Windows 终端用户的效率。作者提到，fzf 的快捷键能够替代基础版本的 Ctrl+R，并且还有一些其他功能，例如 Alt+C 可以快速跳转目录，`vi $(fzf)` 可以模糊查找文件并打开编辑器等。此外，作者还介绍了另一个工具 rg，它是一个快速的递归 grep 工具，可以与 fzf 结合使用来进行模糊搜索文件内容。
- [《GitHub Copilot X：AI 动力的开发者体验 | GitHub 博客》](https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/)。GitHub Copilot X 是 GitHub 的新一代 AI 辅助开发工具，它将 AI 引入整个开发生命周期中。除了自动完成注释和代码外，Copilot X 还支持聊天和语音交互，并在 pull requests、命令行和文档中提供 AI 支持。Copilot X 基于 OpenAI 的 GPT-4 模型，可以为开发人员生成单元测试、修复错误等。此外，Copilot X 还支持针对文档的 ChatGPT 接口，让开发人员能够快速获取关于 React、Azure Docs 和 MDN 等文档的答案。
- [《如何在 2023 年开始一个 React 项目》](https://www.robinwieruch.de/react-starter/)。本文介绍了几种新 React 项目的起始套件，包括 React with Vite、React with Next、React with Astro 等。作者对每种套件的优缺点、开发者所需技能水平以及针对 React 开发者提供的特性进行了分析，并给出了不同需求的三种解决方案。最后，文章总结了一些关于 React 起始项目的思考和建议。
- [《服务器首选框架 - HackMD》](https://hackmd.io/@0u1u3zEAQAO0iYWVAStEvw/rJFCoM4Di)。该文章提出了一个名为 “Server First Framework” 的框架概念，预计将于 2023 年推出。作者认为，虽然过去十年的单页面应用程序（SPA）教会了我们很多东西，但我们现在携带了太多负担。设计面向服务器的框架时，要避免使用过多的同构倾向。该框架的初始页面呈现与 Islands 框架非常相似。所有组件都是经过服务器渲染并发送到浏览器的。客户端组件道具被序列化，并启动任何资源内部的客户端组件。客户端组件被收集并且被水合（如果流式传输可用）。对于后续的导航，路由器将使用下一个 URL（包括当前 URL）请求服务器。服务器能够处理它以确定需要呈现哪些路由部分。同时，客户端请求下一个 URL 所需的所有 Islands 以加载代码。服务器仅呈现新路由部分，跳过呈现客户端组件，但仍然序列化道具。客户端接收响应，并能够使用 HTML 差异交换路由输出。在核心部分，变异遵循 MPA 的模式。您发送数据，服务器响应表示该更改的新标记。您可以将其视为表单提交。该请求响应下一页，因此处理程序可能会使用重定向 / 无效返回语法，即使它们都作为同一服务器响应的一部分进行处理。
- [《编写你自己的响应式信号库》](https://www.lksh.dev/blog/writing-your-own-reactive-signal-library/)。本文介绍了如何编写自定义反应式信号库，涉及细粒度反应性用户界面的构建。信号是持有订阅列表的事件发射器，当值变化时通知订阅者。文章以学习为目的，教读者创建自定义信号，帮助更好地理解Solid及反应性工作原理。文章创建了两个基本原子：createSignal 和 createEffect。createSignal 用于读取和设置响应式值，createEffect 用于在值变化时运行副作用。通过实例，让读者了解信号在简单计数器中的应用。
- [《SPA 视图过渡在 Chrome 111 中实现 - Chrome 开发者》](https://developer.chrome.com/blog/spa-view-transitions-land/)。View Transition API 是一种可以在单个步骤中更新 DOM 的 API，同时生成两种状态之间的动画过渡。该功能目前只在 Chrome 浏览器上可用，但可以作为逐步增强使用。View Transitions API 设计成可以跨同源文档工作，下一步将优化它的性能和扩展性。该 API 还支持多种扩展，包括文档之间的转换、组合器驱动的动画、范围转换、嵌套转换组、转换类别等。
- [《使用 Dagster、dbt 和 BigQuery 追踪假的 GitHub Star 黑市 | Dagster 博客》](https://dagster.io/blog/fake-stars)。GitHub stars 是 GitHub 上社交证明的主要指标之一。然而，虚假的 stars 也会影响高风险决策，如企业使用哪些项目、哪些创业公司获得资金以及哪些公司有才华的专业人士加入。Dagster 团队发现了一些新的开源项目突然在几天内获得数百个星星，这让他们产生了怀疑。因此，他们购买了一些虚假的 stars，并通过 GitHub REST API 和 GitHub Archive 数据库运行了一些 repos 测试。他们采用了两种方法来识别虚假 stars：识别明显的伪造和识别复杂的伪造。最终，他们发现了一个简单的 “低活跃度” 启发式，可以检测到许多（但不是全部）涉嫌伪造的账户。另外，他们使用了无监督聚类技术来识别更复杂的虚假账户。
- [《前端开发的终结》](https://www.joshwcomeau.com/blog/the-end-of-frontend-development/)。很多初入行的开发者越来越担心人工智能的崛起，他们看到了像 GPT-4 这样的工具越来越令人印象深刻的演示，担心等到他们精通 HTML/CSS/JS 时，就没有任何工作机会了。然而，作者并不认为 Web 开发人员的工作将会消失。虽然 AI 会改变一些事情，但并不是人们所说的那种可怕的方式。作者认为最有可能的情况是，像 GPT-4 这样的工具将被整合到开发工具中，用于增强熟练开发人员的能力。而且，如果每个开发人员都变得更有效率，那么需求肯定会超过供应，因此总的开发人员数量可能会增加。
- [《你需要知道 CSS Balance》](https://pawelgrzybek.com/you-need-to-know-the-balance-css-balance/)。本文介绍了 CSS Text Module Level 4 的一项新功能 —— `text-wrap: balance`。该功能可以在多行文本中更好地分配剩余空间，避免出现排版上的问题。然而，由于其算法需要大量资源，目前仅限于文本长度较短的情况下使用。规范草案将此限制设置为 10 行，但当前的 Google Chrome Canary 实现将此功能限制为 4 行。未来，可能不再需要 React Wrap Balancer 等工具。
- [《为什么我们将 package.json 支持添加到 Deno 中》](https://deno.com/blog/package-json-support)。Deno 最新版本的发布引入了一个重大变化：通过支持 package.json，提供了增强的 Node 和 NPM 兼容性。这一更新引发了关于我们的优先级是否发生了变化的问题，因为 Deno 长期以来一直被视为与 Node 不同的道路开拓者。事实上，在第一个 Deno 演示中，明确提到了 package.json 是一个遗憾。因此，许多用户对此发展感到惊讶。本文将解决这些问题，分享我们不断发展的思想，并概述我们的未来目标。
- [《使用 useImperativeHandle 进行细调 refs》](https://prateeksurana.me/blog/fine-tuning-refs-with-useimperativehandle/)。本文介绍了在 React 中使用 refs 和 useImperativeHandle 的方法。Refs 是一种用于在组件之间传递数据的机制，可以让你访问 DOM 节点并使用原生 JavaScript DOM API 对其进行操作。useImperativeHandle 允许你自定义要公开的 ref 处理程序，以便只公开子组件的特定方法。然而，需要注意的是，在 React 中，最好不要使用 refs 来实现可以通过 props 实现的命令式行为，因为这违反了 React 的核心原则。
- [《不要使用过时的机器人》](https://fvsch.com/stale-bots)。本文讨论了软件项目中的 “过时机器人” 问题。过时机器人是指在一段时间内没有活动的情况下，自动将问题标记为 “已关闭” 的自动化流程。使用过时机器人会导致用户体验变差，因为它们可能会关闭具有很好复现步骤、截图和评论的问题，这会让用户觉得他们的努力不被重视。此外，过时机器人也会导致重复问题增加，因为关闭的问题不会出现在搜索结果中。文章建议替代过时机器人的方法包括：接受大量开放问题、设置问题筛选流程、制定项目管理计划等。
- [《本地 CSS 嵌套已经来了》](https://pawelgrzybek.com/native-css-nesting-landed/)。本文介绍了原生 CSS 嵌套的语法和用法，并与 Sass 的嵌套规则进行了比较。作者表示，原生 CSS 嵌套的语法应该对于熟悉 Sass 的人来说很容易理解。此外，文章还提到，CSS 嵌套是 CSS Nesting 规范的第一个版本，随着规范的演进，其功能和语法可能会发生变化。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）基于 Rust 实现类 es-module-lexer 解析器用于 prepare 阶段采集 import 数据，2）配置校验陆续从 joi 迁移到 zod，3）新增 `umi?` 命令，这是框架结合 openai 的第一个尝试，4）MFSU 支持 WASM。
- 尝试把 AI 集成到 Umi，第一步是提供 `umi?` 命令，GIF 图[见链接](https://t.me/yqtalk/288)。
- 换了个 [VSCode 主题](https://t.me/yqtalk/282) 后心情舒畅，来源：同事，主题名：Quiet Light。
- [买了 Surge](https://t.me/yqtalk/280)，Enhanced Mode 和 Dashboard 比较好用。
- github：用 Copliot 的程序员比不用的写代码快 55%。
- joshwcomeau：木匠没有被电动工具取代，会计师没有被电子表格取代，摄影师没有被数码相机/智能手机取代。 我也不认为开发人员会被 LLMs 取代。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 270 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 277 - 《ChatGPT x 前端 x Umi》
- 276 - 《手撕源码 30：wakuwork 和 RSC 原理》

## 每周一图

![](https://img.alicdn.com/imgextra/i4/O1CN01I2npPB1h3GcNmtSzr_!!6000000004221-0-tps-828-969.jpg)
