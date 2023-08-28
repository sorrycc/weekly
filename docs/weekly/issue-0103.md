---
title: "TypeScript 5.3、贝塞尔曲线、Suspense、React 并发模式"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01fIuWiK1qnN4mm9Sfp_!!6000000005540-0-tps-1707-1280.jpg"
titleImageCaption: "红原"
publishedAt: "2023/08/28"
---

## 一周新闻

- [Git 发布 2.42。](https://github.blog/2023-08-21-highlights-from-git-2-42/) 亮点包括：使用位图进行更快的对象遍历；在 for-each-ref 中按模式排除引用；保护珍贵对象免于垃圾收集；diff-tree 命令对稀疏索引的完全支持；增强了 for-each-ref 的 --format 选项；改进了 git rev-list 的 --stdin 模式；以及 git cat-file 命令新增 - Z 模式等。
- [pnpm 发布 8.7。](https://github.com/pnpm/pnpm/releases/tag/v8.7.0) 使用 worker threads 后快 33%。
- [Astro 3 将于下周发布。](https://twitter.com/astrodotbuild/status/1695155957959901593)
- [TypeScript 发布 5.2。](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/)
- [Rust 发布 1.72。](https://blog.rust-lang.org/2023/08/24/Rust-1.72.0.html) 包含更好的 cfg 禁用项错误、常量执行时间限制、以及一些有用的警告信息。
- [Bun 发布 0.8。](https://bun.sh/blog/bun-v0.8.0) Debugger [--inspect]、fetch 支持 steam response body、支持 SvelteKit & Nuxt 等。
- [NextUI 发布 2.1。](https://t.co/jwCYYN28WE) 新增 Select、Listbox 和 ScrollShadow 3 个组件。
- [关于 htmx 2 的新消息。](https://twitter.com/htmx_org/status/1692986081556267222) 包括放弃对 IE 的支持、取消传统的 WS/SSE、更改一些对大多数用户来说透明的默认设置。
- [RSC Devtool 上架 Chrome Web Store。](https://chrome.google.com/webstore/detail/rsc-devtools/jcejahepddjnppkhomnidalpnnnemomn)
- [用微调代码在 HumanEval 上击败 GPT-4Llama-34B。](https://www.phind.com/blog/code-llama-beats-gpt4)
- [GPT 3.5 微调可用。](https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates)
- [Gastby 挂了吗？。](https://twitter.com/sebastienlorber/status/1694392101281190224)
- [免费的 Next.js 商业化模版。](https://medusajs.com/nextjs-commerce/)

## 深度好文

- [《编程的未来 - 还有未来么？》](https://blog.csdn.net/SoftwareTeacher/article/details/131019345)。
- [《TypeScript 5.3 初探》](https://www.totaltypescript.com/typescript-5-3)。 TypeScript 5.3 的迭代计划已经发布，其中包含了一些有趣的特性。其中一个是 Import Attributes，可以为导入指定选项，比如指定 JSON 导入的类型、动态导入的类型等。另一个特性是支持 throw 表达式，这是一种在不使用语句的情况下抛出错误的方式。此外，还有 Isolated Declarations，它是一种更严格的 TypeScript 模式，可以加快在大型 monorepo 中的类型检查速度。
- [《如何写一篇有用的文章》](http://paulgraham.com/useful.html)。
- [《三种不同架构下的 React Suspense》](https://elanmed.dev/blog/suspense-in-different-architectures)。 三种架构分别是 CSR、SSR 和 Server Components。1）CSR，在 React.lazy 加载时显示一个回退界面，以及在兼容 Suspense 的框架里声明式地处理加载和错误状态；2）SSR，在 CSR 的基础上，在 `<Suspense />` 中包装的服务器端渲染组件在客户端上选择性地进行 hydration；3）Server Components，在 SSR 的基础上，在 `< Suspense />` 中包装的异步服务器组件分阶段地流式传输到客户端。
- [《CSS 动画中贝塞尔曲线的背后逻辑》](https://blog.richardekwonye.com/bezier-curves)。 这篇文章介绍了 Bézier 曲线在 CSS 动画和 SVG 路径中的应用，以及背后的逻辑。
- [《将 Web Components 用于他们擅长的领域》](https://nolanlawson.com/2023/08/23/use-web-components-for-what-theyre-good-at/)。 这篇文章是对 Web Components 的一个深度分析。作者认为 Web Components 有其优势和劣势，因此在决定是否使用它们时需要理解这些权衡。文章列举了 Web Components 的几个优势，例如客户端渲染的叶组件、避免大规模重写、设计系统和企业应用的稳定性和长期性。然而，也指出了 Web Components 的一些缺点，如服务器端渲染（SSR）和可访问性问题。
- [《在 React 中为表单输入构建双向数据绑定钩子》](https://www.macarthur.me/posts/binding-input-state-in-react)。 作者先尝试了使用HTML属性的方法，但发现这种方法不可行，因为它只能传递字符串，而不能传递状态更新器的引用。然后，他尝试了使用 React 的refs，通过创建一个自定义的 useBoundState 钩子，该钩子返回一个状态变量、一个绑定到输入元素的 ref 和一个状态更新器。这种方法更加令人满意，因为它可以在输入值改变时更新状态，也可以在状态改变时更新输入值。
- [《了解 Next.js 中 Server Actions 的最简示例》](https://scastiel.dev/simplest-example-server-actions-nextjs)。 这篇文章介绍了Next.js的新功能——服务器操作(Server Actions)，并通过一个简单的例子解释了它的用途和工作原理。服务器操作允许客户端组件调用存储在服务器上的函数，实际上是通过HTTP请求调用API端点上的函数。最后，文章列举了一些服务器操作的实际应用场景，例如在服务器上更改数据、发送电子邮件、处理表单数据等，并提供了一些相关资源链接。
- [《TypeScript 里的 Array 类型》](https://tkdodo.eu/blog/array-types-in-type-script)。 `Array<string>` 还是 `string[]`？但作者认为前者是更好的选择，并呼吁社区和工具采纳这一做法。
- [《React 并发模式的基本原理》](https://andreigatej.dev/blog/the-underlying-mechanisms-of-reacts-concurrent-mode/)。 这篇文章深入探讨了 React 的并发模式和 useTransition 钩子的工作原理。

## 工具资源

- [npm 包的依赖图。](https://npmgraph.js.org/?q=umi)
- [Relingo，Chrome 插件，用来学英语单词。](https://relingo.net/en/index)
- [blog-cells。](https://github.com/rameshvarun/blog-cells) 为任何博客或网页添加交互式代码片段。
- [rev-obsidian-sync。](https://github.com/acheong08/rev-obsidian-sync) 开源的 Obsidian Sync 工具，官方的得 $8 每月（待验证）。
- [检查一个 App 是否 Apple Silicon Ready。](https://isapplesiliconready.com/)

## Umi 和我

- 这周全部时间在外带娃，开心的一周。
- 差点被骗 10 多万，有点丢脸，这周四会把过程整理后发到我的公众号里。不是亲身经历很难理解我也会被骗。。

## 每周烂梗

![](https://img.alicdn.com/imgextra/i4/O1CN01qqHbEb1i6IuIh4LOZ_!!6000000004363-0-tps-1162-996.jpg)
