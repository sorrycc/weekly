---
title: "WIP"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01RKI3ju1VALM0za1pD_!!6000000002612-0-tps-1456-816.jpg_1200x1200.jpg"
titleImageCaption: "rainy day, a water wheel in the green river, green plants and flowers in the foreground, mountains and water in the distance"
publishedAt: "2023/04/17"
draft: true
---

## 一周要事

。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。

- 。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《GitHub - ds300/lazyrepo: 用于 npm/pnpm/yarn monorepos 的缓存任务运行器。》](https://github.com/ds300/lazyrepo)。lazyrepo 是一个针对 npm/pnpm/yarn monorepos 的零配置缓存任务运行器。它适合于 turborepo 所开创的领域：使 package.json “scripts” 扩展，而无需采用像 nx、bazel、rush 或 buck 这样的大型工业级构建系统。lazyrepo 非常快速，尽管它是用 TypeScript 编写而不是一些年轻、英俊、聪明、有趣的系统语言，但它比 turborepo 要快得多。
- [《ChatGPT 的工作原理：深入探究 | Dan Hollick 🇿🇦》](https://typefully.com/DanHollick/yA3ppZC)。本文介绍了大型语言模型 ChatGPT 的工作原理。这些模型通过计算输入和输出之间的概率来预测下一个单词或符号。为了实现这一点，它们使用神经网络来处理输入并生成输出的概率。在简单的情况下，神经网络由输入层、隐藏层和输出层组成，其中每个神经元都与相邻层中的神经元相连，并具有一个权重。当输入值通过神经元时，它会乘以该神经元的权重，并将结果传递给下一层中的所有神经元。然后，神经元将这些值相加，并将结果压缩到 - 1 到 1 之间，并将其传递给下一层中的每个神经元。最后一个隐藏层的神经元也是如此，但是将值压缩到 0 到 1 之间，并将其传递到输出层。
- [《在页面退出时显示未保存的表单数据警告。》](https://claritydev.net/blog/display-warning-for-unsaved-form-data-on-page-exit)。本文介绍了如何实现一个 FormPrompt 组件，以提高 Web 应用程序的用户体验。该组件可以在用户尝试离开具有未保存更改的页面时发出警告。作者讨论了使用纯 JavaScript 的 beforeunload 事件处理此类情况，以及使用 React Router v5 中的 Prompt 组件和 React Router v6 中的 useBeforeUnload 和 unstable_useBlocker 钩子的 React 特定解决方案。
- [《Amazon CodeWhisperer，个人免费使用，现已普遍提供 | Amazon Web Services》](https://aws.amazon.com/blogs/aws/amazon-codewhisperer-free-for-individual-use-is-now-generally-available/)。Amazon CodeWhisperer 是一款实时 AI 编码助手，现已正式推出。它可以帮助开发人员快速、安全地编写代码，而无需离开他们的 IDE 进行研究。CodeWhisperer 可以在多个 IDE 中使用，包括 Visual Studio Code、IntelliJ IDEA 等，并支持 Python、Java、JavaScript、TypeScript 和 C# 等多种语言。此外，它还具有筛选可能被认为是有偏见或不公平的代码建议的功能，以及扫描生成和开发人员编写的代码以查找难以检测的漏洞并提供修复建议的安全扫描功能。CodeWhisperer 的个人版免费使用，可通过电子邮件注册。专业版则提供了更多的管理功能和安全扫描限制。
- [《Replit 部署 - 从想法到生产的最快方式》](https://blog.replit.com/deployments-launch)。Replit 推出了其部署功能，该功能将开发和生产环境分开，使用户能够在不影响实时用户的情况下对其应用进行工作。Replit Deployments 建立在谷歌云平台上，提供行业领先的安全功能，如传输中和静止时的数据加密。该公司正计划在未来几周和几个月内增加更多的功能。
- [《用 LLM 替换我的最好的朋友，训练了 50 万个群聊消息》](https://www.izzy.co/blogs/robo-boys.html)。作者用一个大型语言模型训练了他和他的好友们在大学时期使用的聊天记录，并通过 Modal 和 Hex 完成了这个项目。作者将原始聊天数据转换成了可供微调的格式，然后使用 LLaMa 进行微调。最终，作者将模型部署到了 Modal 上，并建立了一个类似于 iMessage 的前端界面，使得所有人都可以与 “机器人男孩” 聊天。作者强烈鼓励大家尝试这种无聊但复杂的 AI 项目，因为它是一个入门级别的 AI 项目，可以让你更深入地了解 LLMs 以及如何针对特定场景进行微调。
- [《RFC：`next/third-parties`・vercel/next.js・讨论 #48256》](https://github.com/vercel/next.js/discussions/48256)。Next.js 计划推出 next/third-parties 包，以简化开发人员在应用程序中加载流行第三方库的体验。该包将提供预配置的包装器组件，以确保流行的第三方资源能够高效加载，并随着最佳实践的演变而持续高效。为了避免增加 Next.js 的安装 / 包大小，这个包可以单独存在于核心 next 库之外，但仍然在同一个 monorepo 中。此外，Next.js 还将考虑支持其他流行的第三方库，例如 Sentry、DataDog 和 Facebook Pixel。
- [《GitHub - shadcn/taxonomy：一个使用新路由器、服务器组件和 Next.js 13 中的所有新功能构建的开源应用程序。》](https://github.com/shadcn/taxonomy)。这是一个使用 Next.js 13 和服务器组件构建的开源应用程序，包括身份验证、订阅、API 路由、静态页面等功能。作者正在使用此项目作为实验来测试现代应用程序在 Next.js 13 和服务器组件中的工作方式。该应用程序使用 Radix UI 构建 UI 组件，使用 Prisma ORM 管理数据库，使用 Stripe 实现订阅功能，并使用 Zod 进行验证。目前还存在一些问题，例如 GitHub 身份验证不可用，但作者会继续更新并改进该应用程序。
- [《发布 v1.32.0・microsoft/playwright》](https://github.com/microsoft/playwright/releases/tag/v1.32.0)。Playwright v1.32 发布了 UI Mode（预览版），该模式允许您探索、运行和调试测试，并带有内置的观察模式。
- [《使用 WordPress Playground 和 WebAssembly 在浏览器中构建 WordPress 体验 - Chrome 开发者》](https://developer.chrome.com/en/blog/wordpress-playground/)。WordPress Playground 是一个完整的 WordPress 技术堆栈，包括 PHP 和数据库，直接在浏览器中运行。用户可以免费使用和定制嵌入在 playground.wordpress.net 上的 WordPress。此外，用户还可以将 WordPress Playground 嵌入到应用程序中，并使用 JavaScript 进行控制。
- [《DRY vs SoC，一个艰难的选择 | Swizec Teller》](https://swizec.com/blog/dry-vs-soc-a-difficult-choice/)。本文探讨了软件工程中两个重要的概念：DRY（不要重复自己）和 SoC（关注点分离）。作者指出，这两个概念并不是针对代码的规则，而是针对概念的规则。在应用这些概念时，需要关注的是业务概念是否相同，如果相同则可以使用 DRY，否则需要进行关注点分离。作者还提供了一些示例来说明如何应用这些概念。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）无。
- [周末玩了下「大侠立志传」](https://t.me/yqtalk/325)，好玩！开放世界、武功秘籍、腰缠万贯、妻妾成群、门派帮派、城镇村落、武林霸主，可以满足对于武侠的各种想象。
- [Umi 的 Copilot for PRs 通过了](https://t.me/yqtalk/327)，但是感觉新鲜感过了，没啥感觉。
- 美嘉欣大脚好便宜，vs. Traxxas。
- 激活了 giffgaff。
- [高效工作的一上午是这样的](https://t.me/yqtalk/335)。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 270 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 287 - 《a == 1 && a == 2 && a == 3》
- 286 - 《手撕源码 31：magicast》

## 每周一图

![](https://img.alicdn.com/imgextra/i4/O1CN01ZeThvH291G828BaqN_!!6000000008007-2-tps-643-657.png)
