---
title: "Electron 28、Safa 17.2、SvelteKit 2、状态管理、Waku、PageSpy"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01FkKZEg1G8lptaofGf_!!6000000000578-0-tps-1920-1280.jpg_1200x1200.jpg"
titleImageCaption: "kjerdvig @ unsplash"
publishedAt: "2023/12/18"
---

## 一周新闻

- [Electron 发布 28。](https://www.electronjs.org/blog/electron-28-0) 支持 ESM。
- [Safari 发布 17.2。](https://webkit.org/blog/14787/webkit-features-in-safari-17-2/) Safari 17.2 版本发布，新增了 39 项特性和增强，并修复了 169 个问题。
- [React Forgot 要来了？React DevTools v5.0 已经会显示 Forget 徽章。](https://twitter.com/sebastienlorber/status/1734607171030303186)
- [oxlint 可用。](https://oxc-project.github.io/blog/2023-12-12-announcing-oxlint.html) oxlint 是一款 JavaScript linter，旨在无需任何默认配置即可捕获错误或无用的代码。 oxlint 并不是要完全取代 ESLint，而是当 ESLint 的慢速成为工作流瓶颈时作为一种增强工具。Shopify 报告说，他们原本需要 75 分钟的 ESLint 运行现在只需要 10 秒（编者注：75 m应该是不当使用了吧）。oxlint 默认识别错误、多余或混淆的代码，强调正确性而非不必要的吹毛求疵规则。 oxlint 目前还没有提供插件系统，但正在整合来自 TypeScript、React、Jest、Unicorn、JSX-a11y 和 Import 等热门插件的规则。
- [SvelteKit 发布 2。](https://svelte.dev/blog/sveltekit-2) 这是一次增量发布，增加了对新发布的 Vite 5 的支持等。本次更新，我们还推出了浅路由功能（编者注：划重点），可以在不触发导航的情况下将状态与历史记录关联起来，非常适用于创建可以通过滑动返回来取消的模态框或弹出视图。我们还推出新的 Svelte DevTools，Svelte Inspector 和实验性的影像优化支持。在未来的发布中，我们将致力于进一步提升对 Svelte 5 和国际化的支持。
- [ESLint 可以使用新的 Flat Config 方式做配置了。](https://eslint.org/docs/latest/use/configure/configuration-files-new) ESLint 配置文件包含了项目的预定义规则、插件、文件忽略规则等内容。您可以将配置文件 eslint.config.js 置于项目的根目录，然后按需对各种选项进行配置，包括 JavaScript 版本、源代码类型、全局变量、插件、自定义解析器等。同时，不同的配置对象可以级联应用，对象间的冲突会以后来的对象为准。在文件的检测过程中，初步匹配 eslint.config.js，若未找到，将会继续往上一层目录寻找，直至找到或达到根目录。

## 深度好文

- [《A 1-hour introduction to Next.js and React》](https://www.youtube.com/watch?v=h2BcitZPMn4)。 本教程是一份关于如何使用 Next.js 14、React、Prisma、Tailwind 以及 MySQL 搭建 Twitch 克隆应用的全套课程，是 2023 年最新版本的第一部分。在课程中，学员将了解到如何使用 JavaScript 和 SQL 语言以及其他现代编程技术和工具，步步为营地创建出一个功能完整，外观现代的线上视频游戏直播平台。该实战课程为初级到中级开发者设计，旨在提升学员记录写代码、解决问题和探索新技术的能力，最后成功搭建出 Twitch 样式的应用。
- [《React Suspense 和 use Hook 使用指南》](https://sinja.io/blog/guide-to-react-suspense)。 React 的 Suspense 在 React 18 的版本中得到了重要的升级，包括对服务端渲染流和局部 hydration 的支持，并且最近在新版的 React 文档中记录了一个名为 use 的新钩子，这能大大简化 Suspense 在数据获取环节的使用。然而，Suspense 在数据获取环节上的功能并未被 React 团队认为是足够成熟且适合在生产中使用的，因此并未推荐在生产环境中使用。此外，尽管进行了新增并进行了升级，但是 use 钩子并没有被作为 React 稳定版本的一部分对外发布，要想尝试使用它，您需要使用 canary 或 experimental 的 React 渠道。Suspense 目前的使用场景包括错误隔离与数据获取等。而有趣的是，use 钩子可以在条件和循环等特殊场景下使用，扩大了 Suspense 的实际使用场景。
- [《连锁反应》](https://overreacted.io/a-chain-reaction/)。 Dan Abramov 通过一连串的例子，由浅入深地向你解释如何实现一个 jsx 的翻译器。读完之后，可以试着回溯一段 jsx 代码，看能否在脑子里一步步地把他翻译成浏览器认得的状态。
- [《保持您的 Remix 加载器数据的新鲜度》](https://sergiodxa.com/tutorials/keep-your-loader-data-fresh-in-remix)。 使用 useRevalidator 钩子可以按照一定的时间间隔来重新验证我们的加载器数据，以保证我们的数据始终是最新的。当用户离线时，我们可以通过检测用户的在线状态，避免触发重新验证。当应用不在活动状态时，我们也可以通过检测可见性状态改变，停止我们的时间间隔。在某些浏览器中，我们可以利用网络信息 API 来检测连接速度，然后根据连接速度来调整时间间隔。当用户处于数据节省模式时，我们可以检测并避免重新验证。以上都确保了只有在用户在线且观看我们的应用时，我们才进行重新验证。
- [《2023 年 〇 基础学习 SwiftUI》](https://sspai.com/post/84839)。 本文介绍了苹果的开发框架 SwiftUI 的特性和应用。SwiftUI 是一种 UI 框架，其设计理念旨在简化用户界面开发，提供诸如声明性语法、实时预览、自动布局、数据驱动视图等功能。文章还详述了如何通过 SwiftUI 构建应用，为那些希望将其应用在实际项目上的开发者提供了一些建议和学习资源。其中，作者主张面向 “0 基础” 用户群对基础编程教程进行学习。最后作者分享了他的应用「做个应用」，该应用主要为零基础的初学者提供学习资料、每日小知识推送、代码片段等一系列辅助学习工具和资源，希望能帮助用户更好的理解和掌握 SwiftUI。
- [《开始使用 Axum - Rust 最受欢迎的 Web 框架》](https://www.shuttle.rs/blog/2023/12/06/using-axum-rust)。 本文详细介绍了 Rust 后端框架 Axum 的使用方法，包括路由设置、连接数据库、实现 App 状态、使用 Extractors 等。Axum 对 REST 风格的 API 和 Express 风格的 API 都有很好的支持，可以通过 handler 函数轻松设置路由。在数据库设置中，可以通过 Shuttle 来进行简化操作。对于 App 状态的设置，通常是使用 struct，并需要实现 Clone。对于 HTML 识别，我们可以使用 axum::Json 来将 HTTP 请求转为 json 格式。并且，axum 与 tower 有很好的兼容性，可以直接使用 tower 中的 middleware。还介绍了如何通过 Axum 来服务静态文件，如何部署 Axum 等问题。总的来说，Axum 是一个有强大团队支持且与 Rust Web 生态系统高度兼容的框架，现在是开始编写 Rust Rest API 的好时机。
- [《常见的 Rust 生命周期误解》](https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md)。 在 Rust 中，泛型 T 包括所有可能的类型，包括 &T 和 &mut T，且不能直接指定某种数据类型。另外，生命周期'static 指的不是变量数据所存在的全部时间，它包括所有 &'static T 以及所有拥有类型，比如 String，Vec 等。同时要清楚，几乎所有的 Rust 代码都是泛型代码。此外，生命周期不能在运行时变化，生命周期都是在编译时静态验证的，生命周期不能在运行时增长或缩小或以任何方式改变。Rust 的生命周期推断规则并不总是正确的，Rust 并不比你更了解你程序的语义。由于 Rust 可以隐式地重新借用 mut ref，所以你可能在意识到这个问题之前很容易碰到这个问题。这些都是对于 Rust 中的生命周期的误解。
- [《用 Rust 编写操作系统》](https://os.phil-opp.com/zh-CN/)。 这份博客系列从零开始用 Rust 编程语言写一个操作系统，由浅入深地演示和讲解了用 Rust 编写操作系统的全部过程。包括最基础的内核构建、异常处理、硬件中断、内存管理以及异步等关键部分，以及操作系统设计的各种常见问题和解决办法，不仅提供了完整的教程，同时也在 Github 上公开了所有相关的源代码。
- [《从零开始用 Rust 编写文件系统》](https://blog.carlosgaldino.com/writing-a-file-system-from-scratch-in-rust.html)。 本文详细阐述了文件系统 (File System) 的工作原理和各部分组成，包括数据在硬盘或 SSD 上的结构、超级块和位图、i 节点、索引节点、数据块及其用途，以及多层次索引等概念。文章也解释了如何通过文件系统构建和管理磁盘的不同部分，以及文件和目录在文件系统中是如何表示的。最后，作者通过一个名为 GotenksFS 的项目，展示了如何用 Rust 语言编写自己的文件系统，并在其中实现了一些 ext4 的技术。
- [《Non-lexical lifetimes: introduction》](https://smallcultfollowing.com/babysteps/blog/2016/04/27/non-lexical-lifetimes-introduction/)。 这篇文章探讨的是 Rust 的借用检查器和对生命周期的理论，在 Rust 中，借用检查器确保在值被借用期间，不能对其进行移动或修改。这是通过为每次创建的借用分配生命周期去实现的。文章分别详述了生命周期和范围的概念，并通过实例阐释了它们之间的关系。接着给出了几个在实际编程中遇到的问题案例，再就这几个案例，作者展示了如何通过调整代码结构的方式绕过 Rust 现有的编译检查。作者表示这样的做法并不理想，并提出了通过改进编译器来解决这个问题的计划。
- [《简单屏幕录制器，用 20 行 JavaScript 编写》](https://dev.to/ninofiliu/simple-screen-recorder-in-20-lines-of-javascript-4ina)。 如果您对现有屏幕录像机的付费墙和限制感到厌烦，并希望自己编写一个，那么只需几行代码就可以具有基本的功能。我们可以要求浏览器使用屏幕捕获 API 为我们获取捕获视频流，但出于安全原因，我们必须确保用户手势触发了捕获，例如点击按钮。在点击时，获取视频流并记录它。当用户停止分享屏幕时，停止记录。获取记录的文件并下载。现在，您已经有了一个简单的屏幕录像机！虽然它有许多限制 - 音频录制，网络摄像头集成，长时间运行的流等等，但我发现用如此少的代码已经实现了如此强大的功能，这实在太棒了，不分享出来不行。
- [《2024 年的 React 状态管理》](https://dev.to/nguyenhongphat0/react-state-management-in-2024-5e7l)。 本文作者从三个角度对 React 状态管理库进行了分类：基于 reducer 的，如 Redux 和 Zustand；基于 atom 的，如 Recoil 和 Jotai；基于 mutable 的，如 MobX 和 Valtio。每种方法都有其优势和劣势。Reducer 的优势在于其强大的状态机和时间机制，对于开发者工具的支持最好，但是需要编写大量的模板代码，学习曲线陡峭。Atom 的优势在于对 React 特性的充分利用，具有简单和可扩展性，但对开发者工具的支持较弱，不能在组件外使用状态。Mutable 往往提供最简单的 API，并具有高度的灵活性和反应性，但 “自动反应” 也可能带来问题，可能导致数据竞争和异步更新问题。作者个人更偏向于使用 Jotai，因为它没有键的要求，更加高效。
- [《如何在 Macbook 上正确使用两个 GitHub 账户》](https://fayazahmed.com/articles/how-to-use-two-github-accounts-on-a-macbook-the-right-way)。 该文章主要介绍了如何在一台电脑（例如 Macbook）上同时使用个人及工作的 GitHub 账号。作者最初尝试创建新的 SSH 密钥并连接到工作 GitHub 账号，并创造终端别名以在个人和工作 GitHub 账号间切换。但是，这种方法每次切换都要运行脚本，有些繁琐。后来，作者通过在全局的.gitconfig 文件里使用条件语句来达到切换账号的效果。将工作的相关文件都放在名为 work 的文件夹中，每次执行 Git 命令或操作时，程序会自动使用工作账户的证书，而在其他位置则会使用个人账户的证书。应用此方案后，切换账号变得更为方便。
- [《2023 年值得持续阅读的内容平台》](https://justgoidea.com/posts/2023-063/)。 本文是关于公众号大黑天的某期邮件的内容，文中列出了 2022 年值得持续阅读的内容平台，包括网站、创作者、新闻类、文章聚合类、独立博客、电子报和社交媒体账号等多种类别。文章精炼且详细，给出了每个推荐内容的详细介绍和个人阅读偏好。其中，涵盖的主题广泛，包括科技、财经、人文、艺术、旅游、科学等多个领域。这份列表旨在提供给读者在信息海量的网络世界中，高效地获取高质量信息的参考。
- [《介绍 Waku》](https://waku.gg/blog/introducing-waku)。 Waku 是一款 React 的微型框架，它支持探究 React 服务器组件（RSC）的核心功能，并独立于传统的静态站点生成（SSG）和服务器端渲染（SSR）策略来发现 RSC 最佳实践。Waku 基于 Vite，并尽可能依赖其 API 和生态系统。其服务器入口 API 使用名为 entries.tsx 的文件，该文件位于 src 文件夹的根目录，并返回一个包含 JSX 元素的对象。客户端会向服务器发送初始请求，得到服务器的响应并通过 Slot 组件进行渲染。为了使 Waku 支持在 Vercel 上部署，利用了其构建输出 API，通过自定义 “content-type” 头部并以函数方式定义 Waku 服务器，实现了客户端发送请求到服务器并返回 RSC 负载的功能。

## 工具资源

- [PageSpy。](https://github.com/HuolalaTech/page-spy-web) 这个仓库和 HuolalaTech/page-spy-web 相互配合，具体而言 page-spy 负责收集页面信息；page-spy-web 消费收集的信息，对数据进行过滤和整理，并将其转换成一种标准格式，最后在页面上呈现。
- [Trippy。](https://trippy.cli.rs/) Trippy 结合了 traceroute 和 ping 的功能，旨在协助分析网络问题。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 380 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 385 - 《笔记：30 种生活地更好的方法》
- 384 - 《用 GPT-4 写前端文章》
- 383 - 《我的小技巧集合 06》
- 382 - 《Umi 5》
- 381 - 《熟练掌握 Copilot Chat》
- 380 - 《用 Rust 写一个 SSG 的 Blog》
- 379 - 《云谦月报 2023.11》
- 378 - 《Rust 项目的工程化》
