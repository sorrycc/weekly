---
title: "Safari 17、stylex、Svelte 5、线性代码"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01oRrRcY1WH2oeNECXy_!!6000000002762-0-tps-1920-1281.jpg_1200x1200.jpg"
titleImageCaption: "tkristin @ unsplash"
publishedAt: "2023/09/25"
---

## 一周新闻

- [Safari 发布 17。](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/) 这篇文章介绍了 Safari 17.0 的新功能，包括 HTML 新元素 `<search>`、CSS font-size-adjust、多项 JavaScript API 改进，以及浏览器新功能 Safari Profiles、私密浏览模式增强、Web App 在 Mac 桌面等。文章还提到了无障碍改进、安全加强、Safari 开发者工具优化等方面。
- [stylex 文档上线。](https://stylex-docusaurus.vercel.app/)
- [Next.js 发布 13.5。](https://nextjs.org/blog/next-13-5) 这篇文章介绍了 Next.js 13.5 的新功能和改进。其中包括本地开发性能和可靠性的提升，如应用和页面路由器的迭代速度提高了 22%，HMR（Fast Refresh）的速度提高了 29%，内存使用量减少了 40%。此外，还优化了包导入、next/image 和其他方面的性能。文章还提到了 Next.js Conf 的注册和升级指南。
- [Vercel 支持 Remix 2。](https://vercel.com/changelog/support-for-remix-v2) Vercel 现在支持 Remix v2，并提供了一些高级功能，如流式 SSR、API 路由、高级缓存和数据变更等。用户可以使用 Vercel 部署他们的 Remix 应用程序，并使用这些功能来提高性能和开发效率。文章还提供了一个 Remix 模板，供用户快速开始。
- [GitHub Copilot Chat 测试版现已面向所有人开放。](https://github.blog/2023-09-20-github-copilot-chat-beta-now-available-for-all-individuals/)
- [介绍 Svelte 5 符文。](https://svelte.dev/blog/runes) Svelte 5 引入了符文，这些符文使用函数语法实现了声明式组件代码中的特定功能，如声明响应状态、导出关键字和反应性声明。符文使得响应性扩展到了组件之外，可以在 .js 和 .ts 文件中使用。Svelte 5 还引入了 `$derived` 和 `$effect` 符文，这些符文在计算表达式时确定其依赖项，从而实现了运行时响应性。符文使得许多现有概念变得过时，例如 let、export let、`$:`、`<script>` 和 `<script context="module">`、存储 API、`$$props` 和 `$$restProps`、生命周期函数等。Svelte 5 的符文是一项增量功能，但它们使 Svelte 应用程序更易于构建和维护。
- [Mantine 发布 7。](https://mantine.dev/changelog/7-0-0/) 这篇文章介绍了 Mantine 7.0.0 版本的更新内容。其中最重要的变化是不再依赖于 Emotion 来生成样式，而是使用原生的 CSS 文件。这个变化提高了性能，减小了库的大小，并允许在不支持 CSS-in-JS 的环境中使用 Mantine。
- [npm 故障，包下载量全面下降 75%。](https://twitter.com/tomlienard/status/1704878951892418943) 难道是和 Bun 发布后大家都用本地缓存有关？。
- [React Forget 进展。](https://www.reddit.com/r/reactjs/comments/16nnh4z/comment/k1jbr4t/) 这篇文章介绍了 React Forget，它是一个全功能的编译器，而不仅仅是一个转译器。它支持几乎所有的 JavaScript 语言，包括所有的怪癖。由于 React Forget 是向后兼容的，因此必须与现有代码一起工作，而不是引入新的限制，这使得它更加困难。文章给出了一个具体的例子，说明了别名分析是编译器分析中的一个重要问题。在 React Forget 中，还有其他类似的编译器分析，这使得它比普通的 Babel 转换器更加复杂。
- [发布 Microsoft Copilot，您的日常人工智能伴侣。](https://blogs.microsoft.com/blog/2023/09/21/announcing-microsoft-copilot-your-everyday-ai-companion/) 微软宣布进入新的AI时代，推出名为“Microsoft Copilot”的AI伴侣，帮助用户更高效地完成任务。该技术整合了Web、工作数据和用户当前PC操作的智能信息，重视隐私和安全。Copilot将与Windows 11、Microsoft 365、Edge和Bing浏览器无缝集成。此项服务将从9月26日开始，在Windows 11的免费更新中首次推出，并在秋季拓展到Bing、Edge和Microsoft 365 Copilot。

## 深度好文

- [《了解 JavaScript 模运算符》](https://www.joshwcomeau.com/javascript/modulo-operator/)。 这篇文章介绍了 JavaScript 中的模数运算符（%）的工作原理和实际应用。文章通过重新思考除法的概念，解释了模数运算符的作用，即计算除法的余数。当被除数不能被等分时，模数运算符可以告诉我们余数是多少。文章还介绍了模数运算符在实际开发中的应用，例如循环数组。通过使用模数运算符，可以轻松地实现循环数组的功能。
- [《顶尖 1% 工程师的 7 个简单习惯》](https://engineercodex.substack.com/p/7-simple-habits-of-the-top-1-of-engineers)。 这篇文章总结了一些优秀工程师的共同习惯和原则，包括将代码视为解决问题的手段、以人为本、保持代码一致性、遵循编码原则、编写可预测的代码、进行适当的测试、与团队合作并进行沟通、以及深入了解至少一个领域和适当地进行自我营销。文章强调了代码的价值和目的，并提供了一些有用的指导方针，以帮助工程师编写更好的代码。
- [《线性代码更易读》](https://blog.separateconcerns.com/2023-09-11-linear-code.html)。 这篇文章讨论了一些编程最佳实践的争议，特别是关于代码抽象的问题。作者对一篇 Google Testing Blog 的文章提出了异议，该文章认为将代码分解为更小的抽象单元可以提高代码的可读性。作者认为，将代码分解为更小的抽象单元会破坏代码的线性结构，从而降低代码的可读性。作者提供了一个示例，展示了如何通过更好的代码结构来提高代码的可读性，而不是通过过度的抽象。
- [《Javascript 获取数组分组方法》](https://philna.sh/blog/2023/09/14/javascript-array-grouping-methods/)。 这篇文章介绍了 JavaScript 中的 Object.groupBy 和 Map.groupBy 方法，这两个方法可以用来对数组中的元素进行分组。Object.groupBy 方法返回一个没有原型的对象，而 Map.groupBy 方法返回一个 Map 对象。文章还提到了这两个方法的一些注意事项，例如回调函数应该返回一个字符串或符号，而不是其他类型的值。
- [《Deno 上的 Web 框架现状》](https://deno.com/blog/web-frameworks-on-deno)。 这是一篇介绍可以在 Deno Deploy 上运行的各种 Web 框架的文章，包括 Deno 原生的框架 Fresh, Hono, Oak, 以及可以通过适配器支持的 Astro, SvelteKit, Nuxt 等框架，文章列出了这些框架的优势以及如何在 Deno Deploy 上使用它们的指南。
- [《更现代的 CSS Reset》](https://andy-bell.co.uk/a-more-modern-css-reset/)。 这篇文章是关于一个现代 CSS 重置的更新版本。作者提供了一个完整的 CSS 重置代码，并对其中的每个部分进行了详细的解释。这些部分包括盒模型规则、防止字体大小膨胀、删除默认边距、删除列表样式、设置核心 body 默认值、设置较短的行高、平衡标题文本换行、为没有类的 a 元素设置默认样式、为输入和按钮继承字体、确保没有 rows 属性的文本区域不会太小、以及为已锚定的元素添加额外的滚动边距。作者还提供了一些关于 CSS 重置的建议，包括从其他网站上找到自己喜欢的部分，并创建适合自己和团队的重置。
- [《有主见的个人文件夹结构》](https://stefanzweifel.dev/posts/2023/09/16/an-opinionated-personal-folder-structure)。 这篇文章分享了作者使用 Johnny Decimal 系统整理个人文件结构的经验。作者说明 JD 系统的基本规则是最多 10 个一级目录，每个目录下最多 10 个二级子目录，不能再创建子目录。遵循这些限制可以建立一个最多两层的目录结构。作者详细介绍了自己现在 iCloud Drive 上的目录结构，包括个人文档、财务、教育、工作、媒体、写作、项目等方面。作者特别强调了归档和备份的区别，前者包含无法导入其他系统的数据，后者包含可用于恢复原状态的数据。
- [《改变我的生活的 38 条阅读规则》](https://ryanholiday.net/these-38-reading-rules-changed-my-life/)。 这篇文章分享了作家 Ryan Holiday 的 38 条阅读规则。主要内容包括：坚持带书随身阅读、选择精装实体书、记笔记和保持常识书、阅读经典老书、重复阅读喜爱的书、通过注释和参考书找到下一本好书、100 页减去你的年龄是放弃一本书的标准、不要被畅销书迷惑、重读能让你有新的感悟、坚持大量阅读时间、兴趣为先、主动接触不同观点的书、追求智慧而非单纯知识、传播好书等建议。
- [《NFS > FUSE，我们为何用 Rust 构建自己的 NFS 服务器》](https://about.xethub.com/blog/nfs-fuse-why-we-built-nfs-server-rust)。 这篇文章介绍了 FUSE 和 NFSv3 两种文件系统协议，以及作者在构建用户空间文件系统接口时的思考和实验。作者喜欢文件系统的普适性和易用性，但是 FUSE 的 API 设计和跨平台支持存在一些问题。因此，作者回顾了 NFSv3 协议的设计原则和优点，发现使用 NFSv3 协议可以更简单地实现用户空间文件系统，并且可以利用现有的缓存支持和 20 年以上的稳定性和韧性。作者在 Rust 中实现了一个 NFSv3 服务器，使得用户可以在 Linux、Mac 和 Windows Pro 上本地挂载大型数据集，而无需任何内核驱动程序。作者将这个实现开源，并希望其他人可以帮助改进和优化。
- [《加快 JavaScript 生态系统的运行速度--流氓式的 Polyfills》](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-6/)。 这篇文章讨论了 npm 包的依赖问题，指出许多流行的 npm 包依赖于比它们需要的多 6-8 倍的包。大多数这些包都是不必要的 polyfill，这也是 node_modules 文件夹如此庞大的主要原因之一。文章指出 eslint 生态系统似乎受到了这个问题的影响。文章还介绍了一些奇怪的现象，例如一些 polyfill 函数被直接导入和调用，而不是在运行时环境中补丁缺失的功能。这些 polyfill 函数应该像库中的函数一样被调用，而不是直接调用。文章还提到了一些流行的 eslint 插件和预设，它们的依赖关系也存在类似的问题。这些依赖关系使得项目的依赖关系更难以审计，也浪费了空间。
- [《View Transitions API 和元框架实用指南》](https://bejamas.io/blog/what-is-view-transitions-api/)。 这篇文章介绍了 View Transitions API, 它可以让网页之间平滑过渡。它可以用于单页应用和多页应用。它通过在两个状态之间创建一个特殊的覆盖层来实现动画效果。可以通过 CSS 来自定义过渡动画。Astro、Nuxt 和 SvelteKit 框架都支持这个 API。虽然目前只有 Chrome 和 Edge 支持，但可以用渐进增强的方式来使用它。
- [《关于 TypeScript，没人向你解释过的一件事》](https://redd.one/blog/one-thing-nobody-explained-to-you-about-typescript)。 这篇文章讨论了 TypeScript 中的 tsconfig.json 文件。它解释了 tsconfig.json 的作用，以及如何使用它来控制 TypeScript 的行为。文章还介绍了如何在项目中使用多个 tsconfig.json 文件来控制不同的运行时和环境。
- [《使用 ChatGPT 培养原子习惯》](https://critter.blog/2023/09/21/atomic-habit-building-with-chatgpt/)。
- [《《马斯克传》里面，哪些是 “学得来” 的？哪些是 “学不来” 的？》](https://rtw1bnq45a.feishu.cn/docx/YSrbd6JyBoUD5UxKPjXcvdCpnRc)。
- [《培养更好的开发者》](https://this.how/phoenix/index.opml)。 这篇文章讨论了如何通过实际项目来培养更好的开发人员，以及如何在大学中建立开源项目实验室，以探索软件开发的各个方面。作者还提出了技术伦理的概念，强调了用户选择和用户利益的重要性。他认为，通过实际项目和跨学科的合作，可以培养出更好的开发人员，创造更好的软件产品。
- [《自信升级前端依赖项》](https://docusaurus.io/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing)。 这篇文章介绍了如何使用 GitHub Actions、Playwright 和 Argos 来进行可视化回归测试，以帮助前端开发人员升级 npm 依赖项并检测 UI 的副作用。作者提供了一个简单的工作流程，包括在 CI 中构建网站、使用 Playwright 拍摄所有 sitemap.xml 页面的截图、将它们上传到 Argos 并将其与 Git 分支进行比较。
- [《用 React 创建文字输入效果》](https://www.julienthibeaut.xyz/blog/create-text-typing-effect-with-react)。 这篇文章介绍了如何使用自定义 hook 和 React 来创建一个打字动画效果，可以用于创建聊天、加载动画等。作者提供了一个简单的 hook，可以根据需要设置文本、间隔时间和打字方式。此外，作者还提供了一些改进，如添加淡出效果和光标。这篇文章还提供了一些代码示例和工具，以帮助您实现这个效果。
- [《React 服务器组件让我们的网站快了很多》](https://frigade.com/blog/bundle-size-reduction-with-rsc-and-frigade)。 这篇文章介绍了 React Server Components（RSC）的优势，包括可以在服务器上安全地调用仅限服务器的 API，可以在客户端使用浏览器 API，以及可以从客户端包中删除仅限服务器的依赖项等。作者还提供了一个使用 RSC 的案例研究，该案例研究测试了使用 Frigade 和 RSC 的性能，并发现 RSC 版本的网站的包大小减少了 62%，Google 的速度指数提高了 63%。
- [《ChatGPT for you》](https://seths.blog/2023/09/chatgpt-for-you/)。 其中 Custom Instructions 部分的建议挺好的。

## 工具资源

- [高级工程师的 Checklist。](https://littleblah.com/post/2019-09-01-senior-engineer-checklist/)
- [Screenwriter。](https://www.screenwriter.dev/) 无需代码，利用 AI 做 UI 自动化。实现上基于 nat/natbot、thegpvc/gpt-aria 等。
- [Darkmatter。](https://getdarkmatter.dev/) Astro 内容编辑工具，付费软件。
- [Briefy。](https://briefy.ai/) 基于 AI 内容总结工具，付费服务。
- [CSS Grid 里实现等宽列的可视化指引。](https://twitter.com/wesbos/status/1704148800376365084)
- [RSC + React Query。](https://twitter.com/AdamRackis/status/1705751313097596934)


## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 330 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 345 - 《手撕源码 33：marz》
- 346 - 《globalThis、self、window、global 的区别》
- 347 - 《documate》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i1/O1CN01R8L4od1F4MNXnX8of_!!6000000000433-0-tps-1284-1034.jpg_1200x1200.jpg)

![](https://img.alicdn.com/imgextra/i1/O1CN01WYhqyx1aE4hvUXC4C_!!6000000003297-0-tps-510-500.jpg)
