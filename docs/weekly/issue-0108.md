---
title: "Cloudflare Fonts、GPT-4 Vision、Bun 炒作、简历、Draggable"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN011cV3J91JZHaRUew3L_!!6000000001042-0-tps-1920-1277.jpg_1200x1200.jpg"
titleImageCaption: "benwhitephotography @ unsplash"
publishedAt: "2023/10/09"
---

## 一周新闻

- [React Query 发布 5.0.0-rc.1。](https://github.com/TanStack/query/releases/tag/v5.0.0-rc.1)
- [Cloudflare Fonts 发布。](https://blog.cloudflare.com/cloudflare-fonts-enhancing-website-privacy-speed/) 它允许您从网站自己的域而不是从谷歌（如果使用谷歌字体）加载字体。这样可以让字体更接近终端用户，从而提高性能。
- [GPT-4 Vision 可以实现图生代码。](https://twitter.com/skirano/status/1706823089487491469)
- [Replit 上的 Superagent.sh：创建人工智能助手的开源框架。](https://blog.replit.com/superagent) Superagent.sh 是一个开源的 Agentic AI 框架，可以让开发者在几分钟内将生产就绪的 AI 助手集成到任何应用程序中。它利用大型语言模型来理解人类语言、推理和执行各种任务。Superagent 的运行时是为 Replit 构建的，利用 Replit Code-Exec 和 Agent-Env 来允许开发者访问 Replit 的强大功能，创建、部署和管理他们的 AI 助手。Superagent 可以用于创建各种任务的 AI 助手，包括客户支持、法律工作、代码审查、内容生成等。通过与 Replit Autoscale Deployments 结合使用，开发者可以确保他们的 AI 助手可以处理不同的工作负载。Superagent 是开源的。
- [Github Blocks。](https://blocks.githubnext.com/) GitHub Blocks 是一个可以扩展代码库的平台，它提供了自定义交互式块的功能，可以创建丰富的文档、增强工作流程，让代码库更加生动。通过 GitHub Blocks，可以创建交互式的 README，展示项目的健康状态、可搜索的参考文档、自定义界面等等。此外，GitHub Blocks 还支持对文件、文件夹和整个代码库进行操作，可以帮助开发者更好地了解代码库的结构和社区健康状况。
- [Remix Dev Tools 发布 3。](https://github.com/Code-Forge-Net/Remix-Dev-Tools/releases/tag/v3.0.0) Remix Dev Tools 发布了 V3 版本，支持 Remix v2，提供了全面的 CJS/ESM 支持，新增了开发服务器和服务器开发工具，支持路由边界，修复了稳定性和 bug 问题。此外，V3 版本还提供了可选的服务器端开发工具套件，可以选择性地记录应用程序中的所有进程，包括加载器、操作、缓存、cookie、延迟关键字、清理标头、重定向和错误。
- [MDX Editor 发布 1。](https://github.com/mdx-editor/editor/releases/tag/v1.0.0)
- [Sonner 发布 1。](https://github.com/emilkowalski/sonner/releases/tag/v1.0.0)
- [Shopify 发布图片背景替换模型。](https://huggingface.co/spaces/Shopify/background-replacement)
- [TypeScript 发布 5.3 Beta。](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3-beta/) TypeScript 5.3的新特性包括：导入属性、在导入类型中稳定支持resolution-mode、switch (true)缩小、布尔值比较的缩小、通过Symbol.hasInstance缩小instanceof、在实例字段上访问super属性的检查、类型的交互式内联提示、跳过JSDoc解析的优化、比较非标准化交集的优化、tsserverlibrary.js和typescript.js之间的整合，以及一些破坏性的改变和正确性的改进。
- [Astro 发布 3.2。](https://astro.build/blog/astro-320/) GitHub Copilot: Astro 3.2 发布了，新增了多项改进，包括控制浏览器历史记录、通过 JavaScript 触发页面导航、为屏幕阅读器提供路由通告、动态添加集成等。为了使用最新的视图转换功能，请确保运行最新版本的 Astro。你可以通过运行你选择的包管理器的升级命令来升级到 Astro 3.2。此外，本次更新还包括了其他 bug 修复和集成功能。
- [nuxt dev 支持 --tunnel。](https://twitter.com/Atinux/status/1707346248158548083) 在使用 Nuxt 服务器路由开发应用程序接口时，将您的开发服务器暴露在互联网上对使用 webhooks （例如 Stripe）很有帮助，实现基于 untun。
- [Vitest 发布 1.0.0-beta。](https://github.com/vitest-dev/vitest/releases/tag/v1.0.0-beta.0) 这篇文章是关于 Vitest 的 beta 版本发布的说明。它包含了一些重大变更，例如支持多个并行的 child_process，添加了对 pool 和 poolOptions 的支持，以及使快照更加美观等。此外，还包括了一些新功能和 bug 修复。如果您使用 Vitest，请查看此版本的更改并相应地更新您的代码。
- [rerun.io 发布 0.9。](https://www.rerun.io/blog/release-0.9) Rerun 0.9.0发布了，这个版本引入了新的代码生成框架，重构了数据基础设施，增加了对C++ SDK的支持，提供了更多的底层控制，支持自定义数据类型，为未来的功能铺平了道路。新的API更加易用、表达力更强、可扩展性更好，但也需要注意旧API已被标记为弃用，将在0.10版本中被完全删除。
- [Cloudflare Turnstile 对所有人免费。](https://blog.cloudflare.com/turnstile-ga/)

## 深度好文

- [《开源的隐性成本 - Vue.js Live 2023》](https://www.youtube.com/watch?v=HsjGAUU99f0)。 这个视频主要分享了作者从自己创业经历中发现开源软件虽然免费但需要频繁升级带来的维护成本，并提供了建立开源软件到期政策的五个步骤：1) 建立团队和检查更新的频率；2) 列出当前使用的开源软件清单；3) 根据关键性对开源软件进行排名；4) 确定每个关键开源软件的支持到期时间；5) 为每个开源软件升级制定计划。文章最后总结保持开源软件更新可以避免未来的大量技术债务和维护成本。
- [《你无需 "学习" Svelte》](https://kaviisuri.com/you-dont-need-to-learn-svelte)。 这篇文章介绍了 Svelte 框架的优点：编译式生成代码，语法简洁，内置状态管理，作用域样式，直接使用 JavaScript 生态系统，无需学习包装器。作者认为 Svelte 易学易用，学习曲线低，可以让开发者更专注于构建应用而不是框架本身。文章还提供了 React 和 Svelte 的对比实例，以及学习 Svelte 的建议。总体来说，文章认为 Svelte 是一个非常适合新手和专业开发者的 UI 框架。
- [《使用子域名》](https://chriscoyier.net/2023/09/21/use-subdomains/)。 本文建议个人不应为每一个小型项目或想法购买独立的顶级域名，而是应使用个人顶级域名下的子域名来托管这些项目。这样做具有成本效益、项目寿命更长且更方便进行升级或长期重定向。作者强调，个人域名是最长久的所有权，因此更适合用作子域名的基础。文中还提到，不同子域名可以使用不同的主机，如Cloudflare Pages和Netlify，一旦设置成功，通常能持续稳定运行。文章给出了两个实际的子域名项目作为例证。
- [《如何对工程师友好》](https://kind.engineering/)。
- [《Bun 炒作，为何我们从 Yarn 那里一无所获》](https://dev.to/thejaredwilcurt/bun-hype-how-we-learned-nothing-from-yarn-2n3j)。 这篇文章的主题是对编程工具Bun和Yarn的评价。作者提醒我们，由于全球程序员的数量每5年翻一番，这意味着50%的行业工作者具有不到5年的经验，这可能是为什么我们不断地重复犯错误，例如对Bun的盲目追求。Yarn和Bun 都声称自己的速度很快，并且目标是分裂生态系统。但这两个工具在向后兼容性支持上都不佳。尽管Yarn在刚开始比npm快，但不久后，npm的速度超过了Yarn。如今，npm已经比Yarn快很多年了。尽管Yarn提供了许多新功能，但随着时间的推移，npm也逐渐实现了这些功能。与Yarn不同，Bun只提供了速度和3个新功能。但这些功能可能会导致技术债务。作者特别担心Bun的bun.x API，因为这可能会强制所有使用你库的人也必须使用Bun。作者的结论是，尽管这些新工具可能带来一些新功能和速度提升，但长期来看，它们可能不如现有的工具。作者呼吁开发者在采纳新技术时应更加审慎，并考虑其长期影响。
- [《State of Vite（ViteConf 2023）》](https://docs.google.com/presentation/d/1oZnjsPBnb3OB2HxU88vYkZLa54GV-xNKrF8XkOIqLAU/edit#slide=id.p)。
- [《React 服务器组件：全面解析》](https://www.youtube.com/watch?v=VIwWgV3Lc6s)。视频。
- [《我如何将网站部署为 Docker 容器》](https://dev.to/paschalogu/how-i-deployed-my-website-as-a-container-3fje)。 这篇文章介绍了如何使用 Docker 将网站部署为容器。
- [《亲爱的，我缩小了 npm 软件包》](https://jamiemagee.co.uk/blog/honey-i-shrunk-the-npm-package/)。 文章探讨了npm（Node Package Manager）包的压缩策略，特别是目前广泛使用的gzip压缩方法与新型压缩算法Brotli和ZStandard的比较。作者发现Brotli和ZStandard在默认设置下都优于gzip，但Brotli在压缩比上更胜一筹。然而，在解压速度上，ZStandard更胜一筹。此外，作者还参考了之前的一个npm RFC提议，这个提议建议使用与gzip向后兼容的Zopfli压缩库，但由于缺乏原生JavaScript实现，该提议被放弃。为了引入Brotli作为npm的新压缩标准，作者提出了一系列的步骤和方案，以确保向后兼容性并允许早期用户选择性地使用Brotli。最后，作者表示需要对更多的npm包进行基准测试，并准备起草一个新的npm RFC，同时邀请社区给予反馈。
- [《Memoization 的艰苦斗争》](https://tkdodo.eu/blog/the-uphill-battle-of-memoization)。 本文主要讨论了在 React 中使用 `React.memo` 的问题。虽然 `React.memo` 可以通过比较 props 来避免不必要的渲染，但是它很容易被打破，因为它只能比较基本类型的 props，而不能比较函数、对象和数组等复杂类型的 props。此外，当组件接受 `children` 时，memoization 也会失效。因此，本文提出了一些替代方案，如使用外部状态管理器或改变组件的组合方式。最后，本文还提到了一些可能的解决方案，如 ECMAScript 提案 Records and Tuples 和 React 团队正在开发的编译器 React Forget。
- [《如何（不）申请软件工作》](https://benhoyt.com/writings/how-to-apply/)。 这篇文章是关于如何申请软件工程师岗位时需要避免的写作错误。文章首先强调，申请材料的读者是忙碌的招聘经理或工程师，他们希望看到与众不同、有经验和沟通能力强的申请者。以下是文章的主要观点：1. 不要使用ChatGPT，因为它使申请材料看起来机械和非个人化。2. 不要使用华丽的修辞，直接简洁地表达观点。3. 不要只告诉，要展示，即要展示你的具体成果而不是空洞的赞誉。4. 避免使用通用的回答，而应根据自己的经验给出具体细节。5. 不要过度使用行业术语，否则你的申请可能看起来空洞。总之，应聘者在写简历或申请材料时应该真实、具体，避免使用机械化工具或过于华丽的修辞。
- [《对 GPT-4V(ision) 的第一印象》](https://blog.roboflow.com/gpt-4-vision/)。 文章分享了对GPT-4V图像输入功能的第一印象。进行了一系列的实验来测试GPT-4V的功能，展示了模型在哪里表现良好，以及在哪里有困难。测试包括：1. 视觉问题回答，测试了电脑视觉模因、货币识别、流行电影图片、地点图片和植物图片。2. 光学字符识别（OCR），GPT-4V对于在图像中翻译单词为文本中的单个字符做得很好。3. 数学OCR，专门针对数学方程式。4. 对象检测，评估其执行对象检测任务的能力。
- [《Draggable objects》](https://www.redblobgames.com/making-of/draggable/)。 这是一篇关于如何实现网页中元素的拖拽效果的文章。作者详细讲解了鼠标事件、触摸事件和Pointer事件之间的区别,以及如何结合使用这些事件来实现拖拽功能。文章中提供了不同场景下的拖拽效果实现代码,并讨论了可能遇到的边界情况。作者还介绍了如何在Vue中封装一个可拖拽组件。总体来说,这是一篇非常全面和细致的网页拖拽效果实现指南。
- [《2023 年每个软件开发人员必须了解的有关 Unicode 的最基本知识（仍然没有任何借口）》](https://tonsky.me/blog/unicode/)。
- [《使用 View Transition API 在不同状态之间制作动画》](https://www.bram.us/2023/10/03/animate-between-states-with-the-view-transition-api-2023-09-27-devs-gent/)。
- [《在 Islands 架构中共享状态》](https://frontendatscale.com/blog/islands-architecture-state/)。 这篇文章讨论了在Islands架构中如何在不同的交互组件之间共享状态。作者通过一个交互式教程的例子进行说明,教程页面由静态内容和几个交互组件构成。作者首先提出直接把状态提升到共同的父组件的方法不太适合,然后探讨了使用自定义事件、共享的状态存储和组合使用事件与状态存储等方法来实现不同组件间的通信。文章总结认为使用共享状态存储是最常见的方法,但需要根据具体的使用场景选择最合适的方案。
- [《Next.js 13 与 Remix 深入案例研究》](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)。 本文通过对比 Next.js 13和Remix两个React框架,深入探讨了它们在布局,数据获取,流加载,数据变更,无限滚动等方面的实现原理及特点。Next.js通过引入服务器组件和服务端动作,提供了更精细的组合能力和确定性的包体积。Remix通过使用标准Web API和HTML表单,实现了全栈数据流程,并具有很强的无JavaScript支持。总体来说,这两者为构建复杂的全栈React应用提供了非常强大且易用的支持。
- [《Divan，快速、简单的 Rust 基准测试》](https://nikolaivazquez.com/blog/divan/)。 本文发布了 Divan,一个简单快速的Rust代码基准测试框架。作者设计了更简单的API,并通过样本大小缩放、延迟释放等技术来减小计时影响。文中详细介绍了Divan的功能和设计考量,包括基准测试注册、上下文、输入、吞吐量测量、线程争用检测等,并展望了未来的计划。作者希望Divan成为Rust标准基准测试工具,邀请读者参与贡献。
- [《Rust 与 Go：实战对比》](https://www.shuttle.rs/blog/2023/09/27/rust-vs-go-comparison)。 本文通过构建一个天气预报web服务,比较了Go和Rust两种语言的特点。Go标准库功能全面,上手快,写web服务很方便。Rust需要添加更多依赖,学习曲线更陡峭,但可以编写零成本抽象、健壮的代码。两种语言理念不同,但都能够编写高性能可靠的web服务。选择哪种语言取决于项目时间线和团队经验。如果想快速起步,Go可能更好;如果追求长期解决方案,不介意学习Rust的话,它也是一个不错的选择。
- [《自学成才的程序员能找到工作吗？这篇文章讨论了自学编程者是否能在编程和软件开发领域找到工作》](https://dev.to/codewithshahan/can-self-taught-programmers-get-jobs-4f4d)。 文章提到了一些成功的自学编程者的案例，以及自学编程的优势和学习资源，如在线课程、博客、论坛和编程网站。文章还强调了构建强大的作品集和建立人脉关系的重要性，并鼓励读者在面对挑战时保持毅力和决心。最后，文章强调了技能和能力的重要性，而不是学历。
- [《让难事变得简单》](https://jvns.ca/blog/2023/10/06/new-talk--making-hard-things-easy/)。 这是一篇讨论技术学习难点的分享。作者举了Bash、HTTP、SQL和DNS几个例子,分析了这些技术为何难以学习的原因,以及可以用什么方法来减轻学习难度。作者认为,理解这些基础技能为何难学非常重要,只有了解学习难点的根本原因,才能想出有效的解决方法。作者给出的一些建议包括:分享实用工具、分享可靠的参考资料、讲述事物发生的先后顺序、把大的列表化简为实际使用的小列表、展示隐藏的细节、演示易混淆的工具等。作者认为,减轻他人的学习负担是一项非常有价值的工作。
- [《网络服务器 "hello world "基准测试：Go vs Node.js vs Nim vs Bun》](https://lemire.me/blog/2023/10/07/web-server-hello-world-benchmark-go-vs-node-js-vs-nim-vs-bun/)。 这篇文章介绍了使用不同编程语言编写的最小化Web服务器的性能比较。作者使用了Go、JavaScript（Node.js）和Nim编写了相应的服务器，并使用bombardier命令进行了基准测试。测试结果表明，Nim在这个玩具示例上表现得非常好。作者还列举了其他博客文章的结论，这些文章都认为Go比Node.js更快。最后，作者提出了一个有趣的问题：是否可以通过使用完全用C、C++、Rust或Zig编写的服务器来获得更好的性能。
- [《.git 目录中有什么？》](https://blog.meain.io/2023/what-is-in-dot-git/)。 这篇文章详细探讨了git版本控制系统中的.git文件夹的内容和结构。作者从初始化一个新的git仓库开始，详细描述了当进行不同的git操作时（如初始化、添加文件、提交更改、创建和切换分支、合并和推送等）.git文件夹中的内容是如何变化的。这些变化帮助读者理解git是如何在内部跟踪和管理版本历史的。文章结尾列出了关于git内部工作原理的一些参考链接，并提供了相关的讨论链接。
- [《我们如何管理 200 多个开源软件仓库》](https://turbot.com/blog/2023/10/repo-management)。 文章描述了Turbot团队在管理200多个开源仓库时学到的七个关键经验。1）及时回应：使用GitHub动作每小时运行Steampipe查询并通过Slack通知团队。2）早期沟通至关重要：要对项目目标和期望非常明确。3）像团队成员一样对待贡献者：这意味着要尊重他们并与他们紧密合作。4）年龄报告保持诚实：使用每日年龄报告来确保系统地审查。5）必须进行清零：我们使用趋势图表来衡量进展。6）一致性是游戏的名字：自动执行一致性检查，确保一切都符合标准。7）文档为王：注重高质量的文档。文章的核心信息是，开放源代码项目的成功源于技术严谨性与人际关系的结合。


## 工具资源

- [Version Lens。](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) 您想轻松更新过时的 npm 软件包？使用 VS Code 的 Version Lens 扩展。它会在每个软件包旁边显示一个彩色图标。因此很容易看到过时的软件包。点击 "升级 "即可。
- [velocity.builder.io。](https://velocity.builder.io/) 这个和 v0.dev 结合下就无敌了。
- [macOS Containers。](https://macoscontainers.org/) 在 mac 上用 docker 跑 mac 镜像。
- [Sider。](https://chrome.google.com/webstore/detail/sider-chatgpt-sidebar-gpt/difoiogjjojoaoomphldepapgpbgkhkb) ChatGPT Sidebar, GPT-4 & Vision。
- [EditThisCookie。](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg)
- [ModHeader。](https://chrome.google.com/webstore/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj)
- [OpenAI Cookbook。](https://cookbook.openai.com/)

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 350 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 350 - 《Promise.resolve(fn) 和 Promise.resolve().then(() => fn) 有何不同》
- 349 - 《外包同学发展建议》
- 348 - 《v0.dev、GPT 4 Vision 和前端危机？》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i3/O1CN01uXTzxh23yu4A37EFF_!!6000000007325-0-tps-1170-910.jpg)
技术债是如何产生的。

![](https://img.alicdn.com/imgextra/i3/O1CN01UQ1H8e23LW0JHCLam_!!6000000007239-0-tps-1088-612.jpg)
也是一种解决问题的思路。
