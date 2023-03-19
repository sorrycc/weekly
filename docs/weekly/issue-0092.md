---
title: "react.dev、npm 安全、Execa 7、Reactivity、React Query"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01EjCmpP1nmVQoTl6LJ_!!6000000005132-2-tps-1344-896.png_1200x1200.jpg"
titleImageCaption: "三国人物 from MidJounery"
publishedAt: "2023/03/20"
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。

 - 基于 Rust 的代码 Linter [oxc](https://github.com/Boshen/oxc) 开源。
 - React 支持渲染[异步](https://github.com/facebook/react/pull/25634)组件。
 - OpenAI 发布 [GPT-4](https://openai.com/research/gpt-4) 。
 - Nuxt [v3.3](https://nuxt.com/blog/v3-3) 发布，性能改进等。
 - [Electron](https://www.electronjs.org/blog/10-years-of-electron) 10 年了。
 - Github 支持对文件[发表评论](https://github.blog/changelog/2023-03-14-comment-on-files-in-a-pull-request-public-beta/)。
 - Github 支持关闭 [discussion](https://github.blog/changelog/2023-03-14-adding-the-ability-to-close-github-discussions/) 。
 - Node [v19.8](https://nodejs.org/en/blog/release/v19.8.0) 发布，新增 AsyncLocalStorage 相关 api 等。
 - Firefox [v111](https://www.mozilla.org/en-US/firefox/111.0/releasenotes/) 发布，支持文件系统 API 等。
 - Docker Hub 将[清退](https://blog.alexellis.io/docker-is-deleting-open-source-images/)所有免费组织，但[公有镜像](https://www.docker.com/blog/we-apologize-we-did-a-terrible-job-announcing-the-end-of-docker-free-teams/)不会删除。
 - TypeScript Eslint [v6](https://github.com/typescript-eslint/typescript-eslint/tree/v6) alpha 发布，规则拆分等。
 - Webpack [v5.76.0](https://github.com/webpack/webpack/releases/tag/v5.76.0) 发布，CVE 修复等。
 - React 将删除 layout effect [警告](https://github.com/facebook/react/pull/26395)。
 - Github markdown [新增指令](https://github.blog/changelog/2023-03-15-introducing-the-github-markdown-helpers-public-beta/)。
 - Microsoft 365 [Copilot](https://www.microsoft.com/en-us/microsoft-365/blog/2023/03/16/introducing-microsoft-365-copilot-a-whole-new-way-to-work/) 发布。
 - Nextjs 默认建议使用 [Tailwindcss](https://twitter.com/timneutkens/status/1636654046474805249) 。
 - React [新文档](https://react.dev/)上线，CRA 被删除。
 - TypeScript [v5](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/) 发布，装饰器功能等。
 - [Bun](https://github.com/oven-sh/bun) 40k stars 。
 - Dan 表示使用 CSR [没有意义](https://twitter.com/dan_abramov/status/1636827365677383700)。

## 深度好文
> 好文推荐。本周开始，好文总结部分尝试用 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本，先试运行一段时间，有疑问可以留言反馈。

- [《介绍 react.dev》](https://react.dev/blog/2023/03/16/introducing-react-dev)。React 官方文档网站已经更新，现在的网址是 react.dev。新网站教授使用函数组件和 Hooks 的现代 React，并包括了图表、插图、挑战和 600 多个交互式示例。旧版 React 文档网站已移至 legacy.reactjs.org。新网站分为 “学习 React” 和 “API 参考” 两个主要部分，前者是一个自定进度的课程，后者提供每个 React API 的详细信息和用法示例。新网站还添加了很多沙盒，让用户可以快速玩转 React API、探索想法并检查理解。
- [《介绍 “安全 npm”，一个 Socket npm 包装器 - Socket》](https://socket.dev/blog/introducing-safe-npm)。Socket 推出了一款名为 “safe npm” 的 CLI 工具，用于保护开发人员在使用 npm install 时免受恶意软件、拼写错误、安装脚本、抗议软件和遥测等方面的影响。该工具透明地包装了 npm 命令，并在安装过程中保护开发人员免受恶意软件、拼写错误、安装脚本、抗议软件、遥测等 11 种问题的影响。
- [《GitHub - gajus/turbowatch：Node.js 的极速文件变更检测器和任务编排工具。》](https://github.com/gajus/turbowatch/)。Turbowatch 是一个用于 Node.js 的极快文件更改检测器和任务编排器。它可用于自动化响应文件更改的任何操作，例如运行（并自动重新启动）长时间运行的进程（如您的 Node.js 应用程序）或构建资产（如 Docker 镜像）。
- [《JulesBlom.com - React API 地图》](https://julesblom.com/writing/map-of-react-api)。这篇文章介绍了一种学习 React API 的方法，即通过将其组织成一个空间地图来帮助理解。作者将 React 的不同部分联系在一起，形成了一个可供探索的结构，并在 “推荐阅读” 部分中添加了一些经过筛选的优质博客文章链接，以便更好地理解 React API。
- [《介绍 Warp AI》](https://www.warp.dev/blog/introducing-warp-ai)。Warp AI 是一款内置于终端的人工智能，旨在帮助开发人员更高效地工作。用户可以通过向 Warp AI 提问来掌握终端的使用方法，包括解释错误、建议修复方案、编写脚本等。Warp AI 与终端输入和输出的交互方式是其最大优势，它可以将 AI 生成的命令直接运行，而无需复制 / 粘贴或切换上下文。
- [《发布 v6.9.0・remix-run/react-router》](https://github.com/remix-run/react-router/releases/tag/react-router%406.9.0)。React Router 发布了 6.9.0 版本，支持使用 React 组件定义路由元素和错误元素字段。此外，还引入了 Lazy Route Modules，以保持应用程序包的小巧和支持代码分割路由。此功能通过 lazy () 路由属性实现，是一个异步函数，解析路由定义的非匹配部分。
- [《Execa 7 的无 Shell 脚本 | ITNEXT》](https://itnext.io/shell-free-scripts-with-execa-7-885fb3b42f83)。Execa 7 提供了类似于 zx 的模式，但采用更简单的纯 JavaScript 方法。使用 Execa，不需要记忆任何 shell 语法，几乎所有特定于 shell 的功能都可以在 JavaScript 中表达。
- [《Reactivity 简史》](https://www.builder.io/blog/history-of-reactivity)。本文探讨了响应式编程在不同框架中的演变历程。作者分享了自己在使用 Macromedia Flex、AngularJS、React、Knockout、Svelte、RxJS、Vue、MobX 和 SolidJS 等框架时的经验和见解。文章指出，随着框架的发展，人们越来越注重细粒度的响应式系统，以便更好地管理状态和提高性能。
- [《2023 年每个前端开发人员都应该知道的 6 个 CSS 片段》](https://web.dev/6-css-snippets-every-front-end-developer-should-know-in-2023/)。本文介绍了六个有用的 CSS 技巧，包括使用容器查询、创建滚动吸附效果、避免使用 grid 的 `position: absolute`、快速制作圆形、使用层叠样式表（cascade layers）控制变体和使用逻辑属性（logical properties）来减少代码量。
- [《Nuxt 3.3》](https://nuxt.com/blog/v3-3)。Nuxt.js 发布了新版本，增加了本地模块开发、自动重启服务器和性能优化等功能。该版本还提供了一些新的组件和可组合函数，包括错误处理组件 `<NuxtClientFallback>` 和处理不受信任用户输入的 useHeadSafe 可组合函数。此外，该版本还改进了类型定义和 Nitro 引擎，支持自定义配置模式，并且有更好的 Chrome DevTools 支持。
- [《Mockup 是什么？定义、类型以及如何创建 ——LogRocket 博客》](https://blog.logrocket.com/product-management/mockup-definition-types-how-to-create/)。本文介绍了在产品管理中使用 Mockup 的最佳实践。
- [《深入探究 TanStack 查询中的突变》](https://blog.logrocket.com/deep-dive-mutations-tanstack-query/)。TanStack Query 有三个主要概念：查询、变异和查询失效。本文将重点介绍变异，包括变异的副作用、失效和并行实现。通过使用 useMutation Hook，可以轻松地处理所有更新、创建和删除请求。同时，乐观更新是使用 TanStack Query 变异的关键优势之一。
- [《GitHub - nedbat/watchgha：实时显示当前 GitHub 操作运行情况》](https://github.com/nedbat/watchgha)。这篇文章介绍了一个名为 “watch_gha_runs” 的 Python 包，它提供了一个命令，可以监视 GitHub Action 的运行状态。用户只需提供 GitHub 仓库的 URL 和分支名称，即可显示该分支上最新的 GitHub Action 运行状态。
- [《获取用户后，我学到了 4 件事情》](https://basementcommunity.bearblog.dev/things-i-learned/)。文章介绍了作者在运营一个以用户生成内容为主的网站时所学到的四件事情。首先，无论你做什么，总会有人滥用你的网站。其次，你需要一个性能监控系统。第三，你需要优化你的 SQL 查询。最后，你需要听取用户的反馈和建议。在文章中，作者分享了他是如何应对这些问题的，并提供了一些解决方案。
- [《如何在 React 中拖放》](https://www.robinwieruch.de/react-drag-and-drop/)。本文是一篇 React 教程，您将逐步学习如何创建一个 DnD 组件，首先作为垂直列表，然后作为水平列表，并在其中进行大量自定义示例。我们将使用 react-beautiful-dnd 进行此 React 教程。文章介绍了如何使用 useState Hook 初始化状态列表，如何使用 Droppable 和 Draggable 组件以及如何使用 render prop 模式提供更多控制权。
- [《GitHub - pgrok/pgrok：穷人版 ngrok - 通过 SSH 远程端口转发的多租户 HTTP 反向隧道解决方案》](https://github.com/pgrok/pgrok)。pgrok 是一个基于 SSH 协议的多租户 HTTP 反向隧道解决方案，旨在为需要将本地开发环境暴露到公共互联网的小团队提供稳定的子域名，并通过 OIDC 协议由 SSO 进行门控。它可以作为 ngrok 企业版的替代品，但不建议将其放在生产系统中使用。
- [《一次删除多个 Git Tag》](https://rafaelcamargo.com/blog/deleting-multiple-git-tags-at-once/)。本文介绍了如何删除 Git 项目中的多个 Tag。无论是进行本地还是远程清理，上述任何命令都可以几乎立即完成工作。
- [《为什么前端世界忽略了 Web 组件・保罗・阿姆斯特朗》](https://paularmstrong.dev/blog/2023/03/13/why-we-do-not-write-web-components/)。Web Components 一直被认为是为浏览器而非开发人员设计的，因此前端开发人员更倾向于使用 React、Angular、Vue 等框架。Web Components 存在测试性、缺乏统一框架、跨组件状态管理和三种语言等问题，这些都使得它们难以维护且不易上手。
- [《React Hooks 是一个错误吗？| jakelazaroff.com》](https://jakelazaroff.com/words/were-react-hooks-a-mistake/)。本文探讨了 React 编程模型的不同之处，以及为什么有些人更喜欢使用 signal-based components。作者认为，人们对组件的心理模型与 React 中的函数组件和 hooks 的工作方式不匹配。与类组件相比，signal-based components 更加相似。文章还介绍了 Solid 等信号驱动框架，并讨论了它们与 React hooks 之间的区别和权衡。最后，作者总结说，现在的框架似乎正在尝试在 hooks 的可组合性和类的稳定性之间取得平衡。
- [《基于 React Query 的请求防抖》](https://rafaelcamargo.com/blog/deboucing-requests-with-react-query/)。React Query 不支持 deboucing，因此需要将其包装在一个简单的抽象中。作者提出了一种方法来扩展 React Query 以添加新功能，代码行数少于 40 行。通过动画演示，展示了防抖的实际效果，使用防抖后，应用程序只触发了 1 个请求并交换了 294 B 的数据，请求减少了 91％，传输的数据减少了 99％。
- [《Theme Toggles》](https://toggles.dev/)。Theme Toggles 是一款易于使用的动画切换集合，旨在切换浅色和深色模式。它是一个模块化库，旨在提供足够的自定义功能。它与 Tailwindcss 等实用 CSS 框架非常配合使用。
- [《零配置类型安全》](https://svelte.dev/blog/zero-config-type-safety)。SvelteKit 现在可以自动生成类型注释，无需手动添加。通过在 SvelteKit 应用程序中添加类型注释，可以实现网络全面的类型安全性。现在，SvelteKit 框架可以为我们类型化 load 和 data，这是计算机所擅长的 —— 让我们专注于创造性的工作。使用 VSCode 的用户只需升级到最新版本的 Svelte 扩展即可，其他编辑器的扩展也可以使用此功能，只要它们支持 Language Server Protocol 和 TypeScript 插件。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）启用 zod 作为配置的类型校验和类型提示工具，2）升级 webpack 到 5.76.1，修复「任意代码执行漏洞」，3）[引入 ChatGPT](https://github.com/umijs/umi/pull/10779) 作为 Code Review 工具。
- Umi 发版前会随机验 100+ 内网项目，以此来确保发布的版本不会出现明显问题，这应该也算是个优势吧，哈哈。
- 学到一个新的命令行 [mas](https://github.com/mas-cli/mas)，可以在命令行里安装和更新 Mac App Store 里的应用。
- 征集了一些星球内的同学来一起开发 ChatGPT Client，进度比一个人快多了。
- 为了 GPT-4，[又把 ChatGPT Plus 开回来了](https://t.me/yqtalk/270)...
- 新的 M2 Max MBP 用了一个多月，[整体感觉很值](https://t.me/yqtalk/272)，除了效率上的提升，主要是还可以少担心很多事。
- 给手机和 Mac [新换了壁纸](https://t.me/yqtalk/273)，辟起老师说很好看。
- 第一次用 CloudFlare，意外发现他也[支持 umi](https://t.me/yqtalk/275)。
- 周末时间全部在[玩《卧龙：苍天陨落》](https://t.me/yqtalk/278)，目前进度是到「董卓」，荒废了不少时间，但感觉很好玩，强烈推荐！如果满分 10 星，PC 版最多给 3 星（因为很卡），PS5 版倒是可以给 8 星。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 270 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 275 - 《Webpack 的任意代码漏洞是怎么回事》
- 274 - 《我的小技巧集合》
- 273 - 《开源许可证》

## 每周一图

![](https://img.alicdn.com/imgextra/i1/O1CN01dF2Ycs23AypgeFFeO_!!6000000007216-0-tps-799-799.jpg)
