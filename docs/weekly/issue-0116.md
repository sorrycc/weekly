---
title: "Astro 4 Beta、XState 5、Fresh 1.6、Prettier 性能、Biome、VSCode 调试"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01PAOhWy1pTqbrkwX6I_!!6000000005362-0-tps-1920-1280.jpg_1200x1200.jpg"
titleImageCaption: "hamidtajikph @ unsplash"
publishedAt: "2023/12/04"
---

## 一周新闻

- [Astro 发布 4 Beta。](https://astro.build/blog/astro-4-beta/) Astro 4 的首个测试版已发布，主要为了及时更新内部构建工具 Vite，整合了最新的 Vite 5 版本。大多数项目可以轻松升级到 Astro 4，代码变动极小甚至不需要。开发者可通过安装 astro@beta 包在现有应用中试用新测试版。
- [Biome 赢得 Prettier 挑战的 $22.5K 奖金。](https://biomejs.dev/blog/biome-wins-prettier-challenge) Biome v1.4.0 支持更丰富的格式化选项以及新的 VSCode 功能等，现已发布。该版本旨在优化格式化体验，提高与 Prettier 的兼容性至 96%，并吸引了众多开发者参与其开源贡献。此外，新增了 lineEnding、bracketSameLine 和 bracketSpacing 等格式化选项。同时，VSCode 插件也进行了升级，移至新的仓库并移除了绑定的二进制扩展。Biome 也新增了一些 CLI 功能以及新的规则，包括 177 条 linter 规则，在此版本中部分规则得到了提升和更新。开发者可通过运行特定命令升级 Biome。此外，Biome 表示虽然挑战已经结束，但他们将致力于进一步提高与 prettier 的兼容性，并欢迎任何有关这方面的贡献。
- [ExcaliDraw 支持文生流程图。](https://twitter.com/excalidraw/status/1729163853546868802) 不需要自己的 API 令牌。
- [Node 发布 18.19。](https://nodejs.org/en/blog/release/v18.19.0) Node.js 18.19.0 版发布，其中主要更新包括：新增版本的 npm 10 支持；对模块系统的默认类型进行调整，通过添加新的标志 --experimental-default-type；提升了内置测试代码的运行环境；新增了一种名为 'DomainToUnicode' 的 API 接口；对 Buffer、URL 等类别添加了一些新的 JSDoc 信息等；在测试环节中，对部分行为进行了重新定义与修正，并新增了一些测试范式。
- [Deno Cron 发布。](https://deno.com/blog/cron) Deno Cron 是一种创建定时任务的简便方式，并能实现在 Deno 部署（Deno Deploy）上的自动管理。此外，Deno Cron 在执行过程中能避免重叠问题，支持定时运行各种任务，如更新 Deno KV 状态、发送邮件、进行数据库备份等。用户在部署项目时，Deno Deploy 会自动检测并评估您的定时任务，并在执行时设置按需进行的隔离。
- [xstate 发布 5。](https://stately.ai/blog/2023-12-01-xstate-v5) 开发团队发布了 XState v5 版本，这是一款聚焦于 "演员" 的新版本，可以帮助用户更快、更容易地开始使用 XState。尽管状态机转换可能需要零时间，但从 XState v4 转移到 v5 花费了很长时间。v5 版本以演员为主要焦点，虽然状态机和状态图仍然是 XState 的重要组成部分，但它们并不是模拟演员行为的唯一方式。v5 版引入了新的状态机功能，大幅改进了 TypeScript 开发人员体验，减小了包大小，并重新整理文档并添加了许多新示例。
- [Fresh 发布 1.6。](https://deno.com/blog/fresh-1.6) Fresh 1.6 对 Tailwind CSS 插件进行了全面支持，扩展了插件 API，并进行了多项开发者体验改进。部分主要更新包括：从 Twind 迁移到 Tailwind CSS，支持在表单元素上使用片段，可关闭错误悬浮叠加层，优化岛屿捆绑策略，减少清单合并冲突，支持预生成资产，对插件 API 进行增强，加快路由匹配，简化类型定义等。我们对插件 API 花费了大量时间进行改进，带来了用户期待的新功能，包括从插件添加岛屿、添加 `<link>` 元素、新增配置已解析钩子等。在简化内部代码的同时，我们优化了路由匹配的效率，尤其是在处理包含大量静态文件的项目时。未来的更新重点将在提升 JSX 的编译性能、热更新以及 Partial 等方面进行改进。
- [Ripgrep 发布 14。](https://github.com/BurntSushi/ripgrep/releases/tag/14.0.0) Ripgrep 14 更新包含超链接支持、正则引擎重写和参数解析库更换等新功能。超链接功能默认关闭，可以手动开启并向开发者反馈使用体验。这次的正则引擎重写可能让部分搜索更快，改变的参数解析库使命令行参数覆盖等操作更加一致，例如 "--no-ignore" 与 "--ignore-vcs" 这两个参数现在可以按预期一起工作。此外，针对不同文件类型进行的搜索性能也有所提升，还新增了部分功能，例如新的 "--stop-on-nonmatch" 标志，以及 "--hyperlink-format" 标志，可以将文件路径转为超链接，还解决了多个 bug。
- [Axum 发布 0.7。](https://tokio.rs/blog/2023-11-27-announcing-axum-0-7-0) 我们很高兴宣布 axum 版本 0.7 的发布。axum 是一个使用 tokio、tower 和 hyper 构建的人性化和模块化的 web 框架。这也包括 axum-core、axum-extra 和 axum-macros 的新的主要版本。axum 0.7 的头条特性是对 hyper 1.0 的支持。axum 0.7 提供了新的 axum::serve 函数，用以替代 axum::Server。另外，axum 介绍了自己的 Body 类型 axum::body::Body，并减少了施加在 axum::Router 上的一般性。您可以查看更新日志以获取所有更改和升级提示。如果在更新过程中遇到问题，请打开 GitHub 讨论或在 Discord 中提问。
- [Bun 发布 1.0.15。](https://bun.sh/blog/bun-v1.0.15) 修复 23 个问题。提升性能，让 TSC 启动快 2 倍，让 Prettier 快 40%。

## 深度好文

- [《处理问题而不是情况》](https://seths.blog/2023/11/working-with-problems/)。 这段内容主要讨论了问题和情况的区别，并对如何辨识和处理它们提供了一些观点。首先，问题有解决方案，我们可能不喜欢解决方案的代价、引发的妥协或需要投入的时间和努力，但问题肯定是有解决方案的。而情况是我们需要接受的情况，没有解决方案。一旦意识到我们面临的问题实际上是一个情况，就更容易将其放下，做好自己。其次，如果一个问题存在已久，那可能不是一个简单的问题，因为简单的问题一般会很快得到解决。这可能是一个需要更多努力或妥协的问题。最后，有些问题如果我们愿意谈论，会变得更好。有些情况，如果我们把精力和社区的注意力集中在它们上面，可能会变得更糟。
- [《绩效与环境有关》](https://jacobian.org/2023/nov/20/performance-is-contextual/)。 本文提出了 “员工工作绩效是由上下文环境决定的” 这一观点，挑战了常见的 “固定思维模式”（即简单的将员工分为 “高绩效” 和 “低绩效” 两种类型）。工作绩效受各类因素影响，包括同事和管理层、公司状况、个人价值观、政治环境、健康以及家庭亲友等。因此，文章建议管理者应理解和重视这种上下文环境对绩效影响的规律，避免简单地给员工评定绩效标签，而应更加关注如何改变环境来提升工作效率，找出困境原因，与员工共同寻找解决之道。此外，管理者需要平衡全体员工和公司的利益，对于工作不能到位的员工也需要做出合理决定。总的来说，管理者的核心职责就是创造有利于员工展现最佳绩效的条件。
- [《使用 Visual Studio Code 调试 React 应用程序》](https://leonardomontini.dev/vscode-react-debugger/)。 文章介绍了如何在 React 应用程序中使用 Visual Studio Code（vscode）进行调试。首先，用户需要在 vscode 的 “运行和调试” 选项卡中创建一个 launch.json 文件，并在其中设置正确的应用程序运行端口。然后启动应用程序，设置断点，应用程序的执行将在此停止，用户可以查看在这一点上应用程序的状态。vscode 的 “运行和调试” 标签中还包含 “变量”、“观察”、“调用堆栈” 和 “断点” 等面板，帮助用户方便地监控和修改变量值，查看函数调用堆栈等。此外，用户还可以通过设置条件断点，来在满足特定条件时停止应用程序的执行。
- [《为什么选择 Next.js--五大性能优势》](https://cult.honeypot.io/reads/top-nextjs-performance-benefits/)。 Next.js 是一种灵活的 React 框架，逐渐成为工程师构建高性能应用程序的首选。Next.js 主要通过服务器端渲染（SSR）、优化图像加载、自动代码分割、缓存和增量静态生成（ISG）等方法显著提升了网页应用的性能。除了性能优势，Next.js 还提供了一系列用户友好的功能，例如错误处理，快速刷新，内置 SEO 支持，预构建的分析功能和与第三方平台的无缝整合，极大的提高了开发效率，使开发者可以更加高效地构建、管理和监控 Next.js 应用程序。
- [《如何免费用云服务搭建博客评论系统》](https://blog.alswl.com/2023/11/build-blog-comment-system-based-on-free-cloud-service/)。 博主因为对 Disqus 广告过于频繁不满，寻找新的评论系统替代。博主在寻找新评论系统时，有三个主要的选型原则：数据自有、服务部署和存储，以及访问速度。非功能需求方面主要考虑低成本和系统稳定性。在探索过程中考虑了多个方案，如 Utterances、Cusdis、Waline 等，并进行一些特性的横向对比。最终博主选择了使用 Utterances 和 Waline 作为英文博客和中文博客的评论系统，两者部署成本都是 0，满足了博主的需求。
- [《如何更快地编写代码之 VS 代码版》](https://dev.to/kinginit/how-to-code-faster-vs-code-edition-4pa)。 该文主要提供了如何更快地在 Visual Studio Code（VS Code）中编写代码的一些技巧和建议。这些建议包括：更智能地复制和粘贴操作，包括更合理地使用快捷键操作；通过搜索而不是手动导航进行更有效的导航；使用 F2 一键重命名，而不是手动操作；使用 Emmet 插件；使用格式化器，如 Prettier 等，对代码进行整齐的排版；利用代码片段；进行 “量子打字”；利用 VS Code 的重构技能；使用正则表达式进行搜索和替换；以及利用像 NimbleText 这样的工具自动执行枯燥的工作。这些方法可以大大提高 VS Code 编程的效率。
- [《Electron 生态回顾 2023》](https://www.electronjs.org/blog/ecosystem-2023-eoy-recap)。 Electron's 开发者生态在 2023 年进行了多项改进。其中包括 Electron Forge 7 的推出，这个工具用于打包和分发 Electron 应用，它进行了一些重要的更改，包括切换到 notarytool 进行 macOS 认证，最低 Node.js 版本提高至 v16.4.0，以及停止支持 electron-prebuilt 和 electron-prebuilt-compile。此外，Electron Forge 也增加了 Google Cloud Storage 发布器和 ESM forge 配置文件的支持，并可以并行运行 Makers 以提高效率。此外，为了提供更好的静态存储自动更新，Electron 针对无服务器自动应用更新进行了改进。与此同时，Electron 还将所有第一方工具统一到 @electron / 命名空间下。未来，将有一款名为 @electron/windows-sign 的新工具登陆，旨在解决 Windows 代码签名证书的存储问题。Electron 还在寻求社区对于他们应该着手改进哪些方面的意见和建议。
- [《9 个 GitHub 上的最佳自托管开源软件仓库》](https://dev.to/srbhr/discover-the-9-best-self-hosted-open-source-repositories-on-github-23oc)。 自托管软件是用户在自己的服务器或基础设施上安装、管理和运行的软件、应用程序或服务，而不是托管在外部或第三方服务器上。本文列出了九个重要的从 GitHub 获取的自托管开源库，包括 Swirl、Clickvote、Wasp 等。这些开源软件可提高数据控制和隐私，提供定制和灵活性，具有成本效益，并可确保可靠性和独立性，同时符合安全和合规要求。此外，这些工具还说明了自我托管的力量以及在小团队和个人创作者中蓬勃发展的创新。
- [《Prettier CLI：性能深度剖析》](https://prettier.io/blog/2023/11/30/cli-deep-dive)。 开发者 Fabio 发布了一篇博文分享了他在尝试加速 Prettier 命令行接口 (CLI) 过程中的优化经验。主要优化方向包括：加快文件的快速查找，优化路径的解析，对查找及配置步骤进行缓存以及调整 CLI 输出。经优化后，相比当前 CLI，新的 CLI 在格式化文件过程中的所需时间可以实现 22 倍的提升。除此之外，Fabio 提出其未来可能进行的优化方向，包括核心格式化函数的优化，进一步优化缓存功能及批量日志输出，以及对视觉效果的优化等。目前，新的 CLI 的开发工作仍在进行中，应广大用户需求已进行了公开发布。
- [《图像优化新技术：SVG 短路处理》](https://www.zachleat.com/web/svg-short-circuit)。 Eleventy Image 提供了一种新的图像优化方法，可以将大型矢量图像（SVG）转换为矢量和栅格输出的混合，同时丢弃文件重量大于其对应矢量图像的栅格图像。具体来说，该技术涉及在 `<source>` 中用 SVG 替换大型栅格格式。Eleventy Image 还会根据特定图像使用的输出格式和宽度选项的组合，自动为你在 `<img>` 和 `<picture>` 之间进行切换。虽然该方法还处于实验阶段，但实际效果良好。这是使用构建步骤优化网站性能的一个好例子，可以突破请求时图像优化的限制。
- [《Things that aren't doing the thing》](https://strangestloop.io/essays/things-that-arent-doing-the-thing)。 准备做事并非真正去做。预定时间做事、做待做事项清单或者告诉他人你将做的事情都不等同于真正执行。给可能做的朋友发消息、发布你会做事的推文，或者自责未做的事情，甚至嫉妒别人已完成的事项，不论怎样都不是做事。幻想你做成事情后得到的赞赏，读关于如何做事的资料，都只是回绕事情的边缘，并不是真正做事。只有真正开始行动，才算是做事。
- [《React 开发轻松搞定：使用 UseRef Hook》](https://blog.openreplay.com/working-with-the-useref-hook-in-react/)。useRef 是 React 中的内置函数，能创建对 DOM 元素的引用并直接与其交互，提高了性能，保留元素状态跨渲染，允许父组件与子组件共享元素引用，整合第三方库和优化代码。在实际使用中，用于元素动画，创建计时器，与音频和视频元素交互，专注管理和整合第三方库。此外，还可以使用 forwardRef 和 useImperativeHandle 钩子将其传递给子组件，从而实现对子组件的 DOM 元素的访问和操作，实现父子组件之间的通信，整合第三方库，执行自定义钩子，管理表单验证和控制。
- [《Rust temporary lifetimes and "super let"》](https://blog.m-ou.se/super-let/)。 本文详细介绍了 Rust 编程语言中临时变量生命周期的规则和使用情境，并提出了一种新的语言概念，即超级 let，以便程序员有更多的控制权。超级 let 语句会使变量保持更长的生命周期，从而解决各种问题，如不必要的资源浪费、性能下降等。文章结尾，作者提出了 “临时生命周期 2024” 的 RFC，旨在修复某些导致死锁的临时生命周期问题，并通过超级 let 提供更长的生命周期。
- [《为什么 Rust 中的枚举感觉好多了》](https://www.shuttle.rs/blog/2023/11/23/enums-in-rust)。 Rust 语言中的枚举（enums）得到了一流的支持，比其他语言更为强大。Rust 的枚举允许你为其实现特定的方法，省去大量繁琐的代码，使代码更加清洁。借助派生宏可以在编译时自动生成代码，简化代码生成过程。枚举在 Rust 的类型系统中使用广泛，是 Rust 错误处理系统的基础。你也可以为你的枚举类型实现 Error trait，让你的枚举更好地作为错误类型。此外，借助新类型模式，你还可以在枚举中包含单个或多个 crate 的类型，对原始类型创建抽象，以便引入新功能并保持向后兼容性。
- [《如何在 Rust 中使用声明式宏》](https://flinect.com/blog/quick-tips-rust-declarative-macros)。 这篇文章主要讨论了在 Rust 语言中使用宏（Macros）的几种常见情况并提供了实际示例。作者对宏的使用非常满意，特别喜欢 Rust 中的元编程，称赞其有别于 C/C++ 的良好特性。文章中详细介绍了如何使用诸如 macro_rules! 或者 macro_name!(…) 等宏构造，以及使用不同的匹配模式和模板。其中，作者常常使用 ident, expr, ty/path 和 tt 这四种片段标秀符。此外，文章也讨论了在实现特性（Traits）和测试时使用宏的便利性，强调了通过使用宏来减少手写代码的重复内容，以及提高测试的便捷性和可读性。
- [《调查疯狂的编译时间》](https://blog.adamchalmers.com/crazy-compile-time/)。 作者在调试 rust 编译时长问题时，发现 KittyCAD Rust API 客户端在发布模式下的编译时间过长，而在调试模式下的编译时间却完全正常。作者通过追踪 GitHub Actions 的执行记录，找到使编译时间猛增的确切提交，结果是一个新增了一个包含全球每个国家和每种货币编码的 Rust 枚举。进一步实验表明，编译时间与国家数量成二次关系。使用 cargo llvm-lines 发现，由于派生 JsonSchema 的实现而编译成大量的 LLVM 行。作者修复了这个问题，将 OpenAPI 模式中的每个有效国家编码列表替换为字符串，并使服务器在用户没有输入有效二字母国家编码时发送 HTTP 400 无效请求。虽然这对用户体验造成了一定的影响，但是将 API 客户端的编译时间从 40 分钟缩短到 1.5 分钟的收益更大。
- [《编写异步运行时通用库》](https://www.sea-ql.org/blog/2023-11-22-async-runtime-generic/)。 如果你正在用 Rust 编写异步应用，此文主要分享如何将代码分割为几个独立的库，以及编写异步运行时通用库的好处和三种方法。好处包括代码可移植性增强，更易发现错误。三种方法包括：定义自己的 AsyncRuntime 特性，这需要下游实现；内部抽象异步运行时并暴露特性标志，这需要为每个异步运行时定义模块；保持异步运行时抽象库，即聚合所有异步运行时 API 并编写包装库，虽然繁琐，但有助于在项目的一个地方指定所有与异步运行时的交互。

## 工具资源

- [pix2tex。](https://github.com/lukas-blecher/LaTeX-OCR) 使用 ViT 将方程图像转换为 LaTeX 代码。
- [EuroRust 2023。](https://www.youtube.com/playlist?list=PLH6-VpZ3SvUUKFSEPEWiHQi4JqebBj9Tq)

## 每周烂梗

![](https://img.alicdn.com/imgextra/i4/O1CN01C0VHxh1CbqVigqsOv_!!6000000000100-0-tps-1530-1147.jpg)

![](https://img.alicdn.com/imgextra/i3/O1CN012fEa6F1N1AZ6PL8My_!!6000000001509-0-tps-640-367.jpg)