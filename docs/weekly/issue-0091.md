---
title: "代码提取、Turborepo、Farm、React 常见错误、tRPC、技术债"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01tIAiAb1drruS9Z7D9_!!6000000003790-2-tps-1536-1024.png_1200x1200.jpg"
titleImageCaption: "Three Kingdoms"
publishedAt: "2023/03/13"
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- React Query 将从 Jest [迁移](https://github.com/TanStack/query/issues/5074)至 Vitest 。
- Vercel 将发布 [VercelSans](https://twitter.com/evilrabbit_/status/1632742989880606720) 字体。
- pnpm [v8.0.0-beta.0](https://github.com/pnpm/pnpm/releases/tag/v8.0.0-beta.0) 发布，默认去除重复对等依赖项等。
- Rust 是前端基础设施的未来 一文已有 [28w](https://twitter.com/leeerob/status/1632827748572864514) 阅读量。
- Astro 更新了 [Logo](https://twitter.com/astrodotbuild/status/1632809919291457537) 样式。
- 基于 Rust 的构建工具 [farm](https://github.com/farm-fe/farm) 开源。
- Deno 启动了 [State of Edge](https://deno.com/blog/state-of-edge-functions-survey) 调查。
- [text-wrap](https://chromestatus.com/feature/5196960707903488) 预计 chrome 113 发布。
- 新 [headless](https://developer.chrome.com/articles/new-headless/) 预计 chrome 112 发布。
- Netlify 更新 [Logo](https://www.netlify.com/blog/netlify-new-logo/) 。
- Safari Preview [165](https://webkit.org/blog/13932/release-notes-for-safari-technology-preview-165/) 发布，支持正则同名捕获组等。
- Chrome [v112](https://developer.chrome.com/en/blog/new-in-devtools-112/) devtools 支持嵌套 CSS 语法等。
- mantine [v6.0](https://mantine.dev/changelog/6-0-0/) 发布，新增超大号按钮等。
- Chrome [v111](https://developer.chrome.com/en/blog/new-in-chrome-111/) 发布，支持 color level 4 等。
- Nodejs [官网](https://nodejs.org/en/)迁移到 Nextjs 实现。
- Nx [v15.8](https://github.com/nrwl/nx/releases) 发布，使用 Rust 计算哈希等。
- Million [v2](https://twitter.com/aidenybai/status/1634060432372813829) 发布，加速 React 组件。
- Chrome [v112](https://developer.chrome.com/en/blog/chrome-112-beta/) Beta 发布，css 嵌套支持等。
- Github 全面推行 [2FA](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13/) 。

## 深度好文
> 好文推荐。本周开始，好文总结部分尝试用 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本，先试运行一段时间，有疑问可以留言反馈。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《WTF 是代码提取？》](https://www.builder.io/blog/wtf-is-code-extraction)。本文介绍了一种新的开发方式 —— 代码共存（code collocation），即将服务器端和客户端代码放在同一个文件中。作者认为这种方式可以提高开发效率，因为大部分代码都在两个位置上运行，没有必要将它们分开成不同的文件。然而，由于服务器端和客户端有不同的限制，需要将它们分开并创建代码包。文章介绍了三种策略：导出抽取、函数抽取和闭包抽取，并详细解释了如何使用这些策略来实现代码共存。最后，作者还介绍了一种称为 “标记函数” 的方法，可以让开发者自定义标记以及相应的转换过程。（编者注：元框架开发必备技能）
- [《为什么 Turborepo 从 Go 迁移到 Rust - Vercel》](https://vercel.com/blog/turborepo-migration-go-rust)。Turborepo 是一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统。该系统通过增量构建、并行执行和远程缓存来避免重复工作。随着使用量的增加和产品需求的变化，Turborepo 决定从 Go 逐步迁移到 Rust。该迁移主要基于 Rust 的正确性、强大的生态系统以及开发人员的愉悦度等因素。Turborepo 正在采取渐进式的迁移方式，目前已经实现了 “Rust-Go-Rust Sandwich” 的状态，即 Rust 是入口点，可以选择使用 Rust 或 Go 来实现特定命令的功能。
- [《Apple: M2 Eaten Dust for Security | Programmer's Cat》](https://catcoding.me/p/apple-perf/)。该文章介绍了作者在使用苹果 M2 Pro 电脑时发现的一个让人大跌眼镜的设计：系统在运行任何软件之前都会进行校验和检查，以确保其不是恶意软件。这个过程需要通过网络请求与苹果服务器通信，导致性能下降。作者在编译 Rust 编译器项目时发现，相同测试用例的 Linux 虚拟机只需要 1.5 分钟，而 M2 Pro 需要 16 分钟。经过调查，作者发现关闭 System Integrity Protection（SIP）可以显著提高性能，但苹果回应称这是 “设计使然”。（编者注：有没有用不清楚，反正我设置了）
- [《如果我明天去世了，我的网络应用程序会持续多久？》](https://casparwre.de/blog/webapp-afterlife/)。一位名为 “Hacker News” 的开发人员在其博客上分享了一个问题：如果他突然去世，他的 Web 应用程序会运行多久？他估计，只要数据库、域和云服务继续运作，该应用程序将无限期在线。但是，他也考虑到了可能导致应用程序离线的几种情况，例如自然灾害、基础设施故障、技术故障、产品故障、安全漏洞或恶意攻击以及付款故障。最后，他认为最有可能导致应用程序离线的是付款故障。
- [《Sandworm》](https://docs.sandworm.dev/)。Sandworm 是一个免费的开源命令行工具，可帮助 JavaScript 开发人员扫描项目和依赖项中的漏洞、许可证和其他问题。它支持自定义许可证策略，并提供 JSON 问题和许可证使用报告以及易于理解的 SVG 依赖树和树状图形可视化。此外，它还可以覆盖安全漏洞和包许可证信息，并生成所有依赖项和许可证信息的 CSV 文件。用户可以在终端中运行 Sandworm Audit 作为命令行工具，或者使用 .sandworm.config.json 配置文件进行配置。
- [《如何为你完全不了解的项目做出贡献？》](https://grifel.dev/how-to-contribute-without-knowledge)。本文介绍了一个名为 Bun 的 JavaScript/TypeScript 运行时，它与 Deno/Node 类似，但具有更快的启动时间。作者通过编写测试套件来测试 Bun 的性能，并在测试过程中遇到了问题。作者分享了自己处理问题的方法，包括询问前任维护者、规范功能 / 问题、运行测试、编写测试用例并更改代码等步骤。
- [《比 Vite 快 5 倍？2ms HMR？Farm：基于 Rust 的极速构建引擎！》](https://zhuanlan.zhihu.com/p/611603260)。Farm 是一个使用 Rust 编写的构建引擎，比 Webpack 快 10 倍以上，比 Vite 快 5 倍。它支持 HTML、CSS、JavaScript、静态资源等模块的编译能力，并且采用按需编译，在加载时编译除首屏需要的模块外的其他模块，理论上对任意规模的项目都能支持秒启动。所有能力都由插件实现，支持 Rust 和 Js 插件。
- [《React 初学者常见错误》](https://www.joshwcomeau.com/react/common-beginner-mistakes/)。这篇文章介绍了 React 开发中常见的 9 种陷阱，包括：使用零进行条件判断、直接修改状态、未生成 key、缺少空格、在更改状态后访问它、返回多个元素、从不受控制到受控制的转换、缺少样式括号和异步效果函数。对于每种陷阱，文章都提供了解决方法，并给出了示例代码。
- [《@githubnext/github-copilot-cli》](https://www.npmjs.com/package/@githubnext/github-copilot-cli#whats-the-point-of-the-eval-and-alias-stuff)。GitHub Copilot CLI 是一个命令行体验，可以让 GitHub Copilot 在命令行中帮助你。它将自然语言转换为 shell 命令，并具有不同领域的模式。安装后，您可以使用以下三个命令：`??`：将自然语言翻译为任意 shell 命令；`git?`：将自然语言翻译为 Git 命令；`gh?`：将自然语言翻译为 GitHub CLI 命令。（编者注：装完再也没用过，因为 git 命令已成肌肉记忆）
- [《使用 tRPC 和 React 的全栈 TypeScript》](https://www.robinwieruch.de/react-trpc/)。tRPC 是一种使用 TypeScript 在全栈应用程序中创建完全类型安全 API 的方法。 tRPC 服务器应用程序生成具有类型安全函数的类型安全路由器（例如 CRUD 操作：创建用户，按标识符获取用户，获取所有用户），客户端应用程序可以直接调用这些函数。 在幕后，仍然使用 HTTP 在客户端和服务器之间通信。相比 GraphQL 和 REST，tRPC 主要用于较小的项目，其中不需要协调许多服务（例如 GraphQL），或者我们不一定按照标准化的 RESTful 方法工作。但是，随时可以从 tRPC 迁移到 GraphQL / REST，因为 tRPC 最终只是服务器上的函数，可以直接在 REST 路由器或 GraphQL 解析器中使用。
- [《我喜欢用 Rust 来创业。但我不会再选择它了。》](https://www.propelauth.com/post/i-love-building-a-startup-in-rust-i-wouldnt-pick-it-again)。该文章介绍了一家初创公司在选择编程语言时的经验教训。作者表示，尽管他非常喜欢 Rust 语言，但如果重新开始，他不会再次选择它。作者解释了他们最初选择 Rust 的原因，包括安全性和代码可读性等方面。然而，作者认为，在初创阶段，快速迭代比构建高效的代码更为重要。此外，对于不熟悉 Rust 的新员工来说，学习曲线也较陡峭。作者建议，在确定产品方向并需要构建高性能系统时，再考虑使用 Rust 语言。
- [《优秀工程师和卓越工程师的区别》](https://www.intercom.com/blog/traits-of-exceptional-engineers/)。Intercom 的 CTO DARRAGH CURRAN 概述了造就杰出工程师的六个特征。其中包括野心和决心，习惯性简化，快速调试任何东西的能力，愿意帮助别人成为伟大的人，知道什么是有价值的，以及有创造力和积极性。Kotlyar说，工程文化是由被雇用的人、他们采取的行动以及被奖励和赞美的特质所塑造的。
- [《使用 React-Spring 创建动画：全面指南》](https://voskan.host/2023/02/08/creating-animations-in-react-with-react-spring/)。作者介绍了 React-Spring 这个流行的 JavaScript 库，它提供了一组强大的钩子，可以用于向组件添加动画效果。文章详细介绍了如何安装和使用 React-Spring，并提供了许多示例代码来展示如何创建简单的淡入淡出和滑动动画，以及更复杂的动画效果，如关键帧和动画序列。
- [《停止使用 “技术债务” 的说法。》](https://stackoverflow.blog/2023/02/27/stop-saying-technical-debt/)。开发团队常常陷入技术债务的泥潭，每次发布新功能都会遇到各种问题。但是，这种情况往往是我们自己给自己挖的坑。我们试图通过使用 “技术债务” 这个词来让商业人士、设计师、产品经理和工程师达成共识，但这个词在不同人看来意义不同，导致沟通困难。如果我们将技术债务等同于糟糕的代码，就会误以为前任开发人员干得不好，而实际上可能是有某些限制。我们应该选择一些可衡量的指标来评估系统的质量，如维护负荷。我们可以跟非工程团队的人谈论这个数字，让他们帮助我们减少维护负荷。（编者注：换了个说法，从技术债到「维护负荷」）

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）优化『Did you know』的提示策略，2）支持通过 `ERROR_OVERLAY=none` 禁用 error overlay，在调试 Error Boundary 时会有用，3）用 zod 代替 joi 做配置的校验和类型生成，4）新增 https 模式下允许关闭 http/2 的配置项，因为 http/2 偶尔会不稳定。
- [刚学的 Tip](https://github.com/umijs/umi/pull/10719)，monorepo 项目用 pnpm publish 可以自动更新版本号，可以让发布省不少事。
- 在「Privacy & Security > Developer Tools」里[把 Terminal 等开发者工具加上](https://t.me/yqtalk/249)，绕开系统的安全策略，据说可以让请求和编译更快。
- [写了个小工具](https://t.me/yqtalk/248)做业余项目的自动提交，基于 OpenAI API，避免每次提交前还得费脑子想 commit message 该写啥，效率 +1。社区也有类似工具，比如 aicommit。
- 取消了 ChatGPT Plus，感觉相比 API 的使用方式已经没有任何优势。然后给主账户[绑定了 Depay 的信用卡](https://t.me/yqtalk/253)，据说绑卡后会解除免费账户的使用频率限制。
- 直播写了会 ChatGPT Client。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单。

- 「字节跳动-懂车帝」：招Web前端，base 地「字节跳动-懂车帝」，要求熟悉React、TS、小程序等，有汽车/ToB行业经验者优先，薪资范围「(18-36K) * 15」，联系方式「微信号：bukasy」。
- 「中移信息技术有限公司」：招前端开发工程师，base 地「深圳市福田区」，要求「计算机或相关专业本科及以上，掌握vue全家桶、electron、低代码相关，此岗位为中国移动正式员工」，薪资范围「年薪40-60万」，联系方式「微信号：baidu____或手机号：15013669204」。
- 「字节跳动」：招资深前端工程师/前端专家，base 地「北京大钟寺/上海科技绿洲/杭州八方城/深圳」，要求「太长，略」，薪资范围「30-60K」，联系方式「微信：zxry622」。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 270 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 272 - 《新知识学习法和 Rust》
- 271 - 《手撕源码 29：Farm》

## 每周一图

![](https://img.alicdn.com/imgextra/i4/O1CN01Zm9bk01Kp8qtEFf3o_!!6000000001212-0-tps-1280-1280.jpg_1200x1200.jpg)
