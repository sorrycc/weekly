---
title: "React Query、技术演讲、Reactivity、Bun Bundler、Rome、infer"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN012NfNlw1dhKp20MNdF_!!6000000003767-2-tps-2284-1106.png_1200x1200.jpg"
titleImageCaption: "王国之泪"
publishedAt: "2023/05/22"
---

## 一周要事

经过近两年的时间，我们的 "MDH Weekly" 已经写了 100 期，感谢大家这段时间的支持和阅读。

由于个人的原因，目前精力上变成了 Rust、AI 和前端三等分。同时我们发现，有些事 AI 可能比人能完成地更好，大家已经看到，近期周刊中好文阅读的总结是由 AI 完成的。所以在这个时间点上，我觉得需要重新思考 MDH Weekly 的定位和书写方式，所以决定暂时停止更新。这并不是结束，而是一个新的开始。我们需要一些时间来思考和规划，以确保我们的内容能够继续满足需求。

如果大家对 MDH Weekly 有啥感受或对于以后有啥建议，欢迎留言或邮件联系 sorrycc#gmail.com 。期待在不久的将来能再次与你们相见。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《你可能不需要 React Query》](https://tkdodo.eu/blog/you-might-not-need-react-query)。这篇文章讨论了 React Server Components 是否会取代 React Query。作者认为，每个工具都应该帮助我们解决我们遇到的问题。传统上，React 在数据获取方面并不强调如何处理，这就是 React Query 和 swr 等库产生的原因。随着服务端渲染的出现，React Query 也扮演了重要的角色。但是，随着 React Server Components 的出现，如果您的数据获取仅发生在服务器上，那么您可能不需要 React Query。最后，作者提醒读者，不要盲目追随新技术，一切都有权衡。
- [《Nuxt 发布 3.5》](https://nuxt.com/blog/v3-5)。Nuxt 3.5.0 发布了，带来了许多令人兴奋的功能，特别是在类型支持方面。此外还有 Nitropack v2.4 和丰富的 JSON 负载等更新。Nuxt 3.5.0 还支持交互式服务器组件、环境配置、完全类型化页面和 “捆绑器” 模块解析等功能。
- [《发布 TypeScript 5.1 RC》](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-rc/)。TypeScript 5.1 已经作为候选版本发布，除了关键的错误修复外，预计在稳定版发布前不会有进一步的变化。新版本包括更容易的未定义返回函数的隐式返回，getters 和 setters 的不相关类型， JJSX 元素和 JJSX 标签类型之间的解耦类型检查，命名的 JJSX 属性，以及其他。TypeScript 5.1 还支持 JJSX 标签的链接光标，@param JSDoc 标签的片段补全，以及优化，如避免不必要的类型实例化和联合字面的负数检查。
- [《在科技会议上从参会者到演讲者的 9 个技巧 | GitHub博客》](https://github.blog/2023-05-18-9-tips-to-go-from-attendee-to-speaker-at-a-tech-conference/)。GitHub Universe 是一年一度的全球开发者和客户活动，今年将于 11 月 8 日至 9 日在线上和线下举行。文章提供了一些撰写成功演讲提案的技巧，例如标题要吸引人、具体说明内容的收获、突出会议性质等。此外，还提供了演讲者个人介绍的公式和其他有用资源，如往年活动的回顾、联系前任演讲者、关注行业热点等。最后，文章呼吁有兴趣参加演讲的人提交他们的想法，并列出了被选中的好处。
- [《GitHub - DukeLuo/eslint-plugin-check-file》](https://github.com/DukeLuo/eslint-plugin-check-file)。本文介绍了一个名为 eslint-plugin-check-file 的 ESLint 插件，该插件可以帮助开发者强制规范化文件和文件夹的命名方式。插件支持多种规则，例如强制指定文件夹名称、文件名命名规范等。开发者只需要在 .eslintrc 配置文件中添加相应的规则即可使用。
- [《为什么我们选择 Astro 而不是 Nuxt》](https://www.blackspike.com/blog/why-we-chose-astro-over-nuxt/)。这篇文章介绍了一个网站建设过程中的问题：由于使用了 Three.js 等大量 JavaScript 库，导致页面加载缓慢和卡顿。为了解决这个问题，作者尝试了 Astro 框架，它可以将 JavaScript 编译成 HTML 和 CSS，从而减少页面的 JavaScript 代码量。作者发现，对于博客和静态营销网站等项目，Astro 是一个很好的选择。但对于有交互部分的网站，如头条 Shopify 网站或单页应用程序，则更适合使用 Nuxt 框架。文章最后总结了两种框架的优缺点。
- [《揭开魔法的面纱：探索各种框架的反应性》](https://www.builder.io/blog/reactivity-across-frameworks)。本文深入探讨了各种前端框架中的响应性（reactivity）机制，着重比较了粗粒度和细粒度响应性之间的差异。React 和 Angular 属于粗粒度系统，需要重新执行组件树来检测更改并更新 DOM；Svelte、Vue、Qwik 和 Solid 属于细粒度系统，可以更加高效地检测和更新 DOM。Qwik 是唯一一个不需要预热的框架，它通过 SSR/SSG 将状态与 DOM 相关联，并在客户端恢复这些信息，从而避免了下载大量应用代码的问题。作者认为，虽然粗粒度系统 “随便用” 会更方便，但是使用细粒度系统可能会更高效，因为后者已经进行了优化。
- [《介绍一下 Legend-State 1.0：更快地构建更快的应用程序》](https://legendapp.com/open-source/legend-state-v1/)。文章介绍了一个名为 Legend-State 的 React 状态库，它具有极快的速度、易用性、自然的细粒度反应和内置持久性等四个主要优点。该库基于可观察对象实现，使用 Proxy 跟踪对象中的路径，从而在速度和内存使用方面超越其他 React 状态库。使用该库不需要繁琐的模板代码和上下文、动作、规约、分派器等，只需调用 get() 获取原始数据并使用 set() 更改数据即可。此外，该库还支持细粒度反应，使得组件能够在特定值更改时更新，从而减少重新渲染的次数。最后，该库还内置了持久化功能，可以保存和同步应用程序状态。未来，该库将添加更多的持久化插件和辅助可观察对象和钩子函数。
- [《管理 GitHub 通知》](https://antfu.me/posts/manage-github-notifcations-2023)。这篇文章介绍了一种名为 “Notification-driven Developement” 的方法来管理 GitHub 上的项目。该作者通过使用 GitHub 的通知系统来管理他所维护的各种规模的项目，以保持项目的活跃度和稳定性。他提出了 “Inbox-Zero” 概念，即每天处理完所有收到的通知，以便快速响应社区成员并控制维护工作量。文章还分享了一些减少通知数量和组织通知的技巧，并介绍了一个用户脚本来自动化通知处理。最后，作者强调了享受工作和保持良好的工作与生活平衡的重要性。
- [《Bun Bundler》](https://bun.sh/blog/bun-bundler)。Bun bundler 是一个快速的本地打包工具，现在已经进入了 beta 测试阶段。它可以通过 bun build CLI 命令或新的 Bun.build() JavaScript API 来使用。该工具可以用于构建前端应用程序，并提供了内置的 Bun.build () 函数和 bun build CLI 命令。文章指出，JavaScript 生态系统的复杂性不断增加，如何运行 TypeScript 文件、如何为生产环境构建 / 打包代码等问题使得开发变得越来越复杂。Bun bundler 的目标是将打包引入 JavaScript 运行时，从而使前端和全栈代码的发布更简单、更快速。该工具的优点包括：插件执行快速、生成预转换文件以提高运行性能、统一的插件 API、构建输出数组、支持 ESM 模块系统、支持 tree-shaking、支持源码映射、支持 JS 压缩器等。未来，Bun bundler 还将与 Bun 的 HTTP 服务器 API（Bun.serve）集成，从而实现用简单的声明式 API 代替
- [《充满惊喜的 JavaScript 生态圈》](https://fly.io/blog/js-ecosystem-delightfully-wierd/)。这篇文章讲述了 JavaScript 生态系统的奇怪之处。作者认为，JavaScript 在不到 10 年前非常糟糕，缺乏许多现代语言特性，而且主要运行在浏览器的 DOM 中，很难处理。然而，随着时间的推移，JavaScript 的发展迅速改善，出现了许多编译器和转换工具，如 CoffeeScript、Babel 和 esbuild，使得开发人员可以使用更加现代化的语言特性来编写 JavaScript 代码。同时，JavaScript 生态系统也变得越来越庞大，涵盖了许多框架和库，但是这些框架和库并没有完全遵循 ECMAScript 标准，而是进行了一些自己的扩展和修改，例如 TypeScript 和 JSX。最近，React Server Components (RSC) 出现了，它通过与打包工具的合作，实现了将 React 组件编译成 HTML 或 JSON 流的功能，从而引发了人们对于 JavaScript 语言本身的重新思考。总
- [《用 Qt 和 Rust 构建一个桌面应用程序 - LogRocket博客》](https://blog.logrocket.com/build-desktop-app-qt-rust/)。本文介绍了如何使用 Rust 和 Qt 框架构建桌面应用程序。作者首先讨论了桌面应用程序的优点，然后介绍了 Rust 在桌面应用程序开发中的流行程度和可靠性。接着，作者演示了如何使用 Qt 和 Rust 构建一个简单的 “Hello World” 应用程序，并逐步添加了加密和解密功能。最后，作者还介绍了如何使用 GitHub CI 工作流程来确保代码正确性。
- [《将 Next.js App Router 用于生产的 5 条经验之谈》](https://www.inngest.com/blog/5-lessons-learned-from-taking-next-js-app-router-to-production)。Next.js 13 的新功能 App Router 引入了 Nested Layouts、Server Components 和 Streaming 等多项新特性，是第一个开源实现 React 18 原语的工具。从 Next.js 13.4 开始，App Router 已被认为是生产就绪状态。使用 App Router 可以更轻松地在路由之间共享 UI、更好地利用服务器组件、更快地展示页面部分内容以及准备未来。但是，在应用 App Router 时需要注意两个缓存、URL 搜索参数在布局服务器组件中的问题、文件结构的优点以及学习新技术和资源有限的挑战。建议先仔细阅读官方文档，如果遇到问题可以查看 GitHub 和 Twitter 上的讨论，并且分享经验和解决方案有助于建立更加实质性的知识库。总体而言，采用 App Router 可以提高用户和开发者的体验，但需要耐心和深入挖掘。
- [《理解 useRef 和 useState 用于跟踪 React 中的组件渲染次数》](https://peterkellner.net//2023/05/05/Understanding-useRef-and-useState-for-Tracking-Component-Render-Count-in-React/)。本文介绍了在 React 中使用 useRef 和 useState 来追踪组件渲染次数的实际例子。通过自定义一个名为 useComponentRenderCount 的 hook，使用 useRef 来存储渲染次数，并使用 useState 来管理组件内的不同状态值。通过将状态值分开控制，可以提高代码可读性并更轻松地管理每个值的状态更新。理解何时使用 useRef 以及如何与 useState 一起使用对于管理复杂的组件行为至关重要。在开发 React 应用程序时，需要平衡性能和功能，才能创建高质量的应用程序。
- [《反应全局状态为局部状态》](https://webup.org/blog/react-global-state-as-local-state/)。这篇文章介绍了一种基于 React 的全局状态管理方案，使用 useGlobalState 钩子来读取全局存储对象，并在其更新时强制所有已订阅的组件重新渲染。相比于 Redux 和 Context，这种方案更加简单且没有繁琐的代码。该方案不需要依赖库，支持测试和 TypeScript。文章详细介绍了如何实现这个钩子，包括 JavaScript 和 TypeScript 的实现以及测试用例。作者表示这种方案虽然简单，但也具有可扩展性，可以在其上构建中间件、错误处理和动作等功能。作者在几个项目中尝试了 createGlobalState，目前已成为他的默认选择。
- [《Rome 发布 v12.1.0》](https://rome.tools/blog/2023/05/10/rome12_1/)。Rome v12.1.0 发布了，支持新的 Stage 3 装饰器、VCS 集成和新的 lint 规则。现在，Rome 可以解析和格式化大多数框架中的装饰器，并且支持 git VCS 集成。此外，还添加了许多新的 lint 规则，并提供了一个新的命令来更新配置文件。还有一个新的 CLI 帮助提示库，可以从源代码生成输出。
- [《掌握 TypeScript 中的 infer - JavaScript in Plain English》](https://javascript.plainenglish.io/mastering-infer-in-typescript-6cf3f93cca86)。本文介绍了 TypeScript 中 infer 关键字的用法，它可以从现有的代码中提取和推断类型。使用 infer 关键字可以增加代码的类型安全性、效率和组织性。infer 关键字可以在泛型类型、函数参数和返回值、映射类型中使用，但只能在条件类型中使用。同时，文章还提供了一些实际的例子来展示 infer 关键字的使用方法。
- [《发布 Dart 3 - Dart - Medium》](https://medium.com/dartlang/announcing-dart-3-53f065a10635)。Google 在 I/O 2023 上宣布了 Dart 3 的发布，这是迄今为止最大的 Dart 版本，包括三个主要进展：100％的声音空安全、记录、模式和类修饰符的重大新语言特性以及通过 Wasm 编译实现对 Web 的本地代码支持。其中，100％空安全意味着 Dart 具有可靠的类型系统，可以避免某些编码错误，如空指针异常，并允许编译器和运行时优化代码。此外，Dart 3 还引入了记录、模式和类修饰符等新功能，使 Dart 更加表达和精简，同时提供了一种详细控制大型 API 表面的方法。最后，Dart 3 还提供了未来的预览，即通过 Wasm 编译实现对 Web 的本地代码支持。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 300 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 301 - 《Node 性能优化》
- 300 - 《如何用 ChatGPT 写书》
- 299 - 《Google Bard API 逆向》
