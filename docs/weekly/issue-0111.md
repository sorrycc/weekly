---
title: "MSW 2、Yarn 4、Next.js 14、useFormSate、WinterJS"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01uQPy261nwaDP2rF7T_!!6000000005154-0-tps-1920-1282.jpg"
titleImageCaption: "benwhitephotography @ unsplash"
publishedAt: "2023/10/30"
---

## 一周新闻

- [MSW 发布 2。](https://mswjs.io/blog/introducing-msw-2.0) MSW 2.0 是一个 JavaScript 库，它提供了一种模拟 API 的解决方案。它的新版本支持 Fetch API 原语，这是一个重大的改进。在新版本中，开发人员可以使用标准的 JavaScript API 来处理请求和定义响应。这意味着更丰富的功能、标准化的处理请求和定义响应的方式，以及更好的可重用性。新版本还包括许多错误修复和改进。如果您正在使用 MSW，您需要遵循详细的迁移指南来适应这些变化。
- [Storybook 发布 7.5。](https://storybook.js.org/blog/storybook-7-5/)
- [Yarn 发布 4。](https://yarnpkg.com/blog/release/4.0) 本文介绍了 Yarn 4.0 的主要变化，包括：要求 Node.js 18+、默认不开启 Zero-Install、使用 Corepack 代替 yarnPath、内置所有官方插件、废弃基于 Prolog 的约束引擎并用 JavaScript 重写、内置所有特性和命令、优化了用户界面、提高了性能、重新设计了网站，并表示 Yarn 4.0 的目标是降低学习曲线和提高用户体验，未来可能会考虑用原生代码重写 Yarn 以进一步提高性能。
- [服务器操作（Server Actions）现已加入 React Canary，可供框架和库采用！服务器动作是与组件一起创建的函数，可在服务器上运行，用于执行数据突变等任务。](https://twitter.com/reactjs/status/1716573234160967762)
- [Next.js 发布 14。](https://nextjs.org/blog/next-14) Next.js 14 是一个重点版本，包含了 Turbopack、Server Actions、Partial Prerendering 和 Next.js Learn 四个主要特性。其中，Turbopack 是一个 Rust 引擎，可以提高 Next.js 的本地开发性能；Server Actions 是一个稳定的后端数据处理方案，可以简化开发者的工作；Partial Prerendering 是一个预览版的编译器优化方案，可以提高动态内容的性能；Next.js Learn 是一个免费的课程，可以教授 App Router、身份验证、数据库等知识。这篇文章详细介绍了这四个特性的使用方法和优势，并提供了升级和入门的指南。
- [React 发布 useFormState。](https://react.dev/reference/react-dom/hooks/useFormState) 在 React Canary（咳咳，Next.js）版本中，它允许你根据表单操作的结果更新状态。useFormState 可以根据表单操作的结果更新状态。该 Hook 目前只在 React 的 canary 和 experimental channels 中可用，并且需要使用支持 React Server Components 的框架才能充分发挥其优势。
- [Astro 发布 3.4。](https://astro.build/blog/astro-340/) Astro 3.4 的新特性包括支持页面局部、图像优化性能和实验性的开发覆盖层等。页面局部可以通过在组件 frontmatter 中设置 partial 选项来实现，可以与渲染库（如 htmx 或 Stimulus）一起使用。图像优化性能方面，Astro 现在可以在构建时并发生成优化的图像，同时为所有变体重用相同的缓冲区，从而提高性能。实验性的开发覆盖层可以帮助开发者检查页面元素、性能和可访问性等，还提供了插件 API，可以自定义插件来扩展其功能。此外，本次更新还包括了一些 bug 修复。
- [MDX 发布 3。](https://mdxjs.com/blog/v3/) 这篇文章介绍了 MDX v3 的一些更新和改进，包括支持 Node.js 16，允许在 MDX 中使用 await 语法和现代 JavaScript 语法，以及一些小的语法改进。
- [HHKB 发布新款键盘 HHKB Studio。](https://www.pfu.ricoh.com/news/2023/news231025.html) 宣传视频见 https://www.youtube.com/watch?v=FEKKSutM2nU 。
- [WinterJS 发布。](https://wasmer.io/posts/announcing-winterjs-service-workers) 本文介绍了WinterJS，一个用Rust编写的JavaScript Service Workers服务器，使用SpiderMonkey运行时来执行JavaScript。WinterJS不仅速度快，而且可以编译为WebAssembly，因此也可以完全在Wasmer上运行。作者在选择JavaScript运行时时考虑了速度、Wasm兼容性和开发时间等因素，最终选择了SpiderMonkey。作者还介绍了WinterJS的部署方式，可以在Wasmer Edge上运行。WinterJS可以在IoT设备和浏览器中运行Service Workers，具有广泛的应用前景。
- [X 退出云计算节省 60%。](https://world.hey.com/dhh/x-celebrates-60-savings-from-cloud-exit-7cc26895) 该文章讨论了 Elon Musk 在某公司（X）中的成就，特别是他如何有效地降低成本和复杂性。文章强调，尽管有人员变动和政治因素，X 公司仍然运行良好，并且实验和新功能的推出速度也有所提升。最引人注目的是，X 公司的工程团队通过优化云服务的使用并转向更多的内部服务器，成功地将每月的云服务成本降低了 60%。据早先的报道，X 公司每年在 AWS 上的支出为 1 亿美元，所以基于这个数据，他们预计每年能节省 6000 万美元。值得注意的是，这一切成就是由一个相比之前缩小了四分之三的团队完成的。作者认为，这一现象将引起 CFO 和投资者的关注，并推测 #CloudExit（退出云服务）的趋势有可能成为主流。

## 深度好文

- [《成为一名优秀的工程师需要积累经验》](https://addyosmani.com/blog/collect-experience/)。 这篇文章探讨了工程师职业成长的多个方面，强调不仅要学习新的编程工具和技术，还要学会如何将这些工具和技术综合应用以解决复杂问题。作者将这种技能和经验比作一个不断演变的“工具箱”，认为单纯掌握工具不如知道如何有效地使用它们。文章还提到，优秀的工程师能够将不同项目中学到的技巧和工具结合起来，以更高效和优雅的方式解决问题。为了拓宽工具箱，建议工程师走出舒适区，参与不同类型的项目，并与社群互动和持续学习。总体来说，这篇文章主张，成为一名优秀的工程师不仅需要掌握各种技能，还需要能够灵活地将这些技能应用于不同的场景。
- [《编程语言经济学》](https://www.youtube.com/watch?v=XZ3w_jec1v8)。 
- [《Base64 编码详解》](https://www.akshaykhot.com/base64-encoding-explained/)。 本文介绍了 Base64 编码的概念、用途和算法。Base64 编码将二进制数据转换为文本，使用 ASCII 字符集中的 64 个字符表示，包括大小写字母、数字和两个符号。Base64 编码的主要用途是在文本环境中传输二进制数据，如在 HTML 中嵌入图像数据或在 URL 中传递数据。文章还介绍了 Base64 编码的算法，包括将文本转换为二进制、将二进制分组为 6 位、将每个组转换为 0-63 的十进制数和使用 Base64 字母表将十进制数转换为 Base64 字符。最后，文章提供了各种编程语言中进行 Base64 编码和解码的方法。
- [《再见，Node.js Buffer》](https://sindresorhus.com/blog/goodbye-nodejs-buffer)。 这篇文章讨论了在 Node.js 中使用 Uint8Array 替代 Buffer 的优势和必要性。作者指出，Uint8Array 是一种原生的 JavaScript 类型，可以跨平台使用，而 Buffer 则引入了许多其他 JavaScript 环境中不可用的方法，需要进行 polyfill，从而阻止了许多有价值的包在浏览器中的兼容性。此外，Buffer 还存在一些潜在的问题，例如 buffer.slice() 创建的是与原始 Buffer 相关的可变段，而 uint8array.slice() 创建的是不可变的副本，可能导致不可预测的行为。因此，作者建议社区逐步远离 Buffer，并鼓励 Node.js 团队至少开始不鼓励使用 Buffer。作者提供了一些工具和建议，以帮助开发人员更轻松地进行转换，并建议使用 linting 强制执行 Uint8Array。最后，作者呼吁社区支持 Node.js 在新的 API 中使用 Uint8Array。
- [《Nextjs 项目工程化最佳实践总结》](https://mp.weixin.qq.com/s?__biz=MzI5MjQ3NjEwNA==&mid=2247483868&idx=1&sn=d88559dba0e6f773ef5091c270af27ea&chksm=ec01847bdb760d6db90b710f5c6a6fbc08d7f1d9f23b61c74908502211777da466bceaa83734&mpshare=1&scene=1&srcid=1024Kf71rQCKbk8anqvduYwU&sharer_shareinfo=aa4fe257e5c9f975ce3749a2f1553904&sharer_shareinfo_first=4c9794122f5559b0ca0df62a1113c24b#rd)。 
- [《React memo 其实很不错》](https://timtech.blog/posts/react-memo-is-good-actually/)。 这篇博客文章表达了作者对 React 性能 API (React.memo、React.useMemo 和 React.useCallback) 的个人见解。作者认为这些 API 受到了不公正的批评，实际上它们可以很好地提高 React 应用的运行时和渲染性能。正确使用这些 API 可以避免不必要的重复渲染，提高逻辑正确性。作者还指出了关于这些 API 的一些常见误解，并提出有时虽然存在更好的替代方案，但使用这些 API 作为优化手段也是完全合理的。总体而言，作者认为合理使用 React 性能 API 是增强 React 应用性能的好方法。
- [《为什么我不会使用 Next.js》](https://www.epicweb.dev/why-i-wont-use-nextjs)。 这篇文章表达了作者使用Remix而非Next.js的理由,主要是Remix更符合作者对可维护性和易用性的追求,强调了Remix遵循web标准的设计理念,相比Next.js来说API更简单稳定,部署更灵活,同时作者认为通过学习Remix可以获得更多通用的web开发技能。
- [《我为什么要使用 Next.js》](https://leerob.io/blog/using-nextjs)。 这篇文章主要是 Next.js 框架的主要开发者 Lee Robinson 对 Kent C. Dodds 关于为什么选择 Remix 而不是 Next.js 的博客文章的回应。Lee Robinson 首先表示 Kent 对 React 社区做出了重大贡献，然后详细阐述了 Next.js 在暴露底层平台原语，部署灵活性，与 React 的关系，平台稳定性等方面的一些争议观点不成立的原因，以及 Next.js 在这些方面正在或已经做出的改进。最后，他表达了自己对 Next.js 的喜爱，认为这可以推进 web 的发展。
- [《使用 Rust-Wasm 库改进 Node.js》](https://elvisbrevi.hashnode.dev/improving-nodejs-with-rust-wasm-library)。 本文介绍了如何将 Rust-Wasm 库集成到 Node.js 中，以实现更好的性能和利用 Rust 的内存安全特性。文章首先介绍了 Rust 和 Node.js 的基础知识，然后演示了如何创建一个 Rust 项目，并使用 `#[wasm_bindgen]` 注释来创建 WASM 绑定。接着，文章演示了如何在浏览器中直接运行 WASM 模块，并在 Node.js 中使用 Rust-Wasm 库。最后，文章通过比较 Rust-Wasm 和纯 JavaScript 实现的 Fibonacci 序列生成函数的性能，展示了 Rust-Wasm 的高效性和性能优势。
- [《Rust 值得吗？》](https://jsoverson.medium.com/was-rust-worth-it-f43d171fb1b3)。 
- [《为什么在 Jotai 中不使用 useSyncExternalStore？这篇文章主要讨论了 Jotai 库的开发过程和解决 React Context 中的额外重新渲染问题的方法》](https://blog.axlight.com/posts/why-use-sync-external-store-is-not-used-in-jotai/)。 作者介绍了 Jotai 的实现方式和与 Suspense 和 Concurrent rendering 的兼容性，并讨论了 tearing 和 time slicing 的问题。作者指出，Jotai 使用 useState (useReducer) 而不是 useSyncExternalStore，因为前者更适合与 useTransition 一起使用。最后，作者还提到了其他类似的库，如 Zustand 和 Valtio。
- [《用这个怪招让 Rust 编译器快 5%》](https://kobzol.github.io/rust/rustc/2023/10/21/make-rust-compiler-5percent-faster.html)。 本文介绍了如何在Linux系统上使用透明大页（THP）来提高Rust编译器的性能。作者通过修改jemalloc内存分配器的配置，使其支持THP，并在编译Rust代码时使用环境变量MALLOC_CONF="thp:always,metadata_thp:always"来启用THP。实验结果表明，使用THP可以将编译时间的墙时减少约5％，并将页面故障减少约60％，某些基准测试甚至可以减少约90％的页面故障。但是，THP也会增加编译器的内存使用量，平均增加约15％，某些基准测试甚至增加约35％。由于THP的配置因操作系统和特定配置而异，因此在所有Rust开发人员之间启用THP支持并不容易。作者建议在Linux系统上使用THP时，需要启用透明大页，并使用环境变量来启用THP。
- [《Rust 项目的全自动发布》](https://blog.orhun.dev/automated-rust-releases/)。 这篇文章介绍了如何通过集成 git-cliff、release-plz、cargo-dist、Dependabot 和 Mergify 等工具,实现 Rust 项目的一键自动化发布。主要思路是利用 git-cliff 生成变更日志,release-plz 处理版本和 crate 发布,cargo-dist 生成代码包,Dependabot 更新依赖,Mergify 合并 Dependabot 的请求。这样通过一个发布请求,完成从变更日志到代码发布的全自动流程,简化了 Rust 项目的发布流程。
- [《程序员自由职业/独立开发的第四年 - 做什么/收入/经验教训》](https://vikingz.me/4-years/)。 这篇文章讲述了独立开发者张轩四年来自由职业的心得体会。他开发了简单简历这个产品,在慕课网卖课,经营个人品牌获得流量,也接一些广告。他认为自由职业最宝贵的是时间自由,不应该仅仅为了赚更多钱而放弃稳定工作。他建议自由职业者要开拓多种收入来源,像一人公司一样经营,而不要限定自己只做产品开发。
- [《如何在 2023 年找到一份开发人员的工作（几乎没有经验）》](https://dev.to/dragosnedelcu/how-to-find-a-developer-job-in-2023-with-little-or-no-experience-27h7)。 本文详细介绍了2023年如何通过优化求职策略在软件开发领域找到工作,包括定制简历、准备面试、培养正确心态等内容。主要建议是深入研究招聘市场、关注重点技能、重视实践经验、保持专注、控制情绪、不轻易放弃、多进行现场编码面试练习等。

## 工具资源

- [测试你的英语词汇量。](https://preply.com/en/learn/english/test-your-vocab)
- [elog。](https://github.com/LetTTGACO/elog) Markdown 批量导出工具、开放式跨平台博客解决方案，随意组合写作平台(语雀/Notion/FlowUs/飞书)和博客平台(Hexo/Vitepress/Confluence/WordPress等)。
- [小红书作品采集工具。](https://github.com/JoeanAmier/XHS_Downloader)
- [Spacedive。](https://www.spacedrive.com/) 资源管理器，跨平台，开源，基于 Rust 和 Tauri 实现。
- [分享适合初学者的SwiftUI教程。](https://kennylin.notion.site/SwiftUI-4a8e871a464d42769b2c8fb7c7cfedb4)

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 360 多篇文章，包含了我们最新的观点和见解。以下是近两周的星球更新，访问「q.sorrycc.com」了解更多。

- 362 - 《用 Azure 申请 OpenAI API》
- 361 - 《读书笔记：习惯的力量》
- 360 - 《从一例 async await 常见错误说起》
- 359 - 《如何写工程化辅助脚本》
- 358 - 《CSS 错误片段集锦》
- 357 - 《我看微前端》
- 356 - 《Mako 近况 @ 2023.10.24》
- 355 - 《optimizePackageImports》
- 354 - 《v0.dev 使用感受》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i4/O1CN01eXy5Ey1YWjcrWiKq0_!!6000000003067-2-tps-775-500.png)
