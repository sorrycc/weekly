---
title: "Astro 3.3、桶文件、软技能、推和拉、程序员健康、No Build"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01HGLmvV1YIzjsxNaNs_!!6000000003037-0-tps-1920-1282.jpg_1200x1200.jpg"
titleImageCaption: "benwhitephotography @ unsplash"
publishedAt: "2023/10/16"
---

## 一周新闻

- [pnpm 发布 8.9。](https://github.com/pnpm/pnpm/releases/tag/v8.9.0) 值得关注的部分，1) 在 macOS 和 Windows Dev Drives 上默认使用 reflinks 而非硬链接以提高性能；2) 允许在单独的配置文件中提供允许运行安装脚本的软件包列表，并在 package.json 中通过 pnpm.onlyBuiltDependenciesFile 字段指定该文件的路径。
- [github copilot voice。](https://githubnext.com/projects/copilot-voice) 用嘴写代码，可以加个 waitlist。
- [Fresh 发布 1.5。](https://deno.com/blog/fresh-1.5) Fresh 1.5是一个快速的Deno本地框架，用于构建全栈Web应用程序。它引入了一个名为Partials的新方法，用于客户端导航，可以使用HTML属性配置Fresh应用程序，以使用服务器呈现的标记替换已加载页面中的HTML，而无需重新加载页面。此外，Fresh 1.5还包含了一些改进和错误修复，旨在支持复杂的UI开发模式。您可以通过运行命令"deno run -Ar https://fresh.deno.dev" 开始一个新的Fresh项目。
- [stackblitz 的 WebContainers 中支持原生语言。](https://blog.stackblitz.com/posts/announcing-wasi/) WebContainers宣布完全整合WASI（WebAssembly系统接口），这标志着浏览器开发的一个新篇章，可以在不考虑多种不同架构的情况下运行大量的原生应用程序。WASI为WebAssembly代码提供了一个标准化的接口，使其能够安全地与系统接口进行交互。这一改变对开发者来说意义重大，因为它结合了接近原生的速度与安全的沙盒环境，且支持多种编程语言。此外，WebContainers中增加了用于执行WebAssembly或WASI编译模块的wasm命令。作为展示，WebContainers还实验性地引入了Python支持，尽管这一集成目前仍处于实验阶段。此外，他们还在Shell中增加了对原生命令行JSON处理器jq的支持，并计划未来添加更多这样的工具。例如，现在可以在WebContainers内部运行整个Wordpress堆栈。
- [ESLint 9 会默认用 Flat Config。](https://eslint.org/blog/2023/10/flat-config-rollout-plans/) ESLint计划在v9.0.0中默认使用称为"flat config"的新配置系统，并在此版本中弃用但不移除当前的"eslintrc"配置系统。新功能只会为flat config添加。v9.0.0发布后，CLI用户会默认寻找eslint.config.js文件，而不是.eslintrc.\*文件。规则开发者、可分享配置作者、插件开发者和API用户都需要相应地进行一些更新以适应新系统。当ESLint v10.0.0发布时（可能在2024年底或2025年初），eslintrc配置系统将被完全移除。
- [React Query 发布 5.0.0-rc.10。](https://github.com/TanStack/query/releases/tag/v5.0.0-rc.10)
- [Astro 发布 3.3。](https://astro.build/blog/astro-330/) Astro 3.3版本带来了全新的实验性<Picture />组件，用于生成包含多个<source>元素的<picture>元素，以优化图像处理。此外，该版本还对语法高亮进行了改进，从shiki迁移到了更便于维护和打包的shikiji库。
- [Visual Copilot 简介：更好的从 Figma 到代码的工作流程。](https://www.builder.io/blog/figma-to-code-visual-copilot) 这篇文章介绍了 Visual Copilot，一个全新的 Figma-to-code 插件，旨在节省开发者将 Figma 设计转换为代码所需的 50-80% 的时间。该插件使用专门训练的 AI 模型和特定的编译器，能够实时一键将 Figma 设计转换为多种前端框架和样式库的代码。该工具还支持自动响应性调整和代码结构的自定义。此外，Visual Copilot 还有一些即将推出的功能，包括 AI 对现有组件的使用和 Figma 与 Builder 之间的自动同步。该插件特别适用于有严格设计准则和多个组件的团队。
- [Python 发布 3.12。](https://pythoninsider.blogspot.com/2023/10/python-3120-final-now-available.html) 主要新特性包括更灵活的f-string解析、在Python代码中支持缓冲协议、新的调试/分析API、支持隔离的子解释器以及更多改进的错误消息。此外，还引入了对Linux的perf分析器的支持、多项性能提升和估计的整体性能提升约5%。在类型注解方面，引入了新的类型注解语法和新的方法重写修饰符。此版本还删除了一些已弃用的功能，如wstr和wstr_length成员、smtpd和distutils模块，以及其他一些旧的、损坏的和已弃用的功能。

## 深度好文

- [《加速 JavaScript 生态系统 - 桶形文件的失败》](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7/)。 “桶文件”（barrel files）是指仅导出其他文件的文件，不包含自己的代码。在JavaScript项目中，大量使用桶文件可能会导致工具的运行变慢。这是因为它会增加模块图的大小，每个模块加载的时间虽然很短，但累加起来会非常显著。尤其当使用如Jest这样的测试运行器时，每个测试文件都会在其自己的子进程中执行，每次都要构建模块图，增加了总体时间。为了提高工具的性能，建议尽量减少或消除项目中的桶文件。
- [《让你成为更好的开发人员的软技能书籍》](https://addyosmani.com/blog/soft-skills-books/)。 该文章强调了程序员和管理者除了技术技能外，还需要注意软技能的发展。作者列出了多本书籍的主要观点，这些建议可以帮助程序员和管理者在领导力、生产力、团队动力等方面进行提升。这些书籍的内容不仅仅关于编码或系统设计，而是关于如何成为一个更好的工程师领导者。书籍中的建议包括：深入工作、建立良好习惯、高效执行、挑战团队成员、快速思考和慢思考、完成任务、团队文化建设、真诚的建议和批评、团队功能的五大障碍、创新的挑战、经常重新思考、管理团队的调试、高产出管理、精益创业、习惯的力量、决策、心态、如何赢得朋友和影响人、关键对话、极端所有权和管理者之路。此外，还有5本书的详细内容，包括：从为什么开始、从好到伟大、首要任务、精益产品手册。作者鼓励读者探索不同领域的知识，以增强编程和软技能。
- [《推和拉》](https://kellanem.com/notes/push-and-pull)。 工程流程中的"推（Push）"和"拉（Pull）"模型对于获取团队买入至关重要。推是告诉团队成员必须按照某种方式做事，而拉是创造工作的价值感，使团队成员感到他们的工作是有价值的。文章中用"每周状态更新"为例，刚开始时大家参与积极，但随着时间的推移，参与度减少，因为感觉没有人在读。这是因为有推但没有拉。要想建立数据和仪表盘的文化，就要使数据成为完成的定义，并要求人们在关键时刻提供数据，这是拉。团队如何提交和审查PR也是一个例子。大多数团队对提交PR有明确的推和拉，但对审查PR只有推。如果要推出新的系统、流程或工具，建议考虑其推和拉。
- [《如何像 GitHub 工程师一样交流：我们的原则、实践和工具》](https://github.blog/2023-10-04-how-to-communicate-like-a-github-engineer-our-principles-practices-and-tools/)。 GitHub工程团队公开分享了他们的沟通指导方针“如何沟通”。GitHub自成立以来一直是远程工作优先，他们的远程沟通风格最初受到开源社区的启发。GitHub不仅用于代码托管和审查，还用于计划、讨论和记录工作。为了提高跨团队沟通的效率，他们创建了一套沟通期望。此外，他们定义了八大沟通原则并为其制定具体实践。其中一个挑战是如何管理大量的通知。为此，他们借助GitHub Discussions分享信息，并采用“魔法标签”来标记重要信息。他们使用GitHub Actions自动创建内容摘要，并利用Azure的OpenAI服务为帖子提供摘要。
- [《提高 React 应用程序的内存效率｜Million.js 超越速度》](https://dev.to/ricardonunezio/millionjs-beyond-speed-making-react-apps-memory-efficient-2amn)。 这篇文章主要讨论了Million JS如何优化React应用程序的性能和内存效率。传统的React应用程序通过virtual DOM管理组件，这会导致大量的内存使用和CPU操作。虽然现代浏览器进行了优化，但在持续地为对象分配和回收内存时，应用仍可能面临性能问题。Million是一个编译器，它可以静态分析React代码并自动编译为高效的高阶组件，减少内存使用和增强性能。它使用了与Solid JS类似的细粒度反应技术，减少了virtual DOM的使用。然而，对于高度动态的组件，如频繁改变的数据，Million可能不是最佳选择。但对于静态或接近静态的组件，如博客、着陆页或CRUD操作，Million可以提供显著的优化。总的来说，虽然Million不适用于所有场景，但它为React开发者提供了另一种提高性能和内存效率的工具。
- [《编程四十年》](https://fabiensanglard.net/40/index.html)。 这篇文章讲述了作者在四十年编程经历中如何处理和预防身体疼痛的经验。作者原先使用传统的电脑设备，但由于长时间编程导致手臂和肩膀疼痛。为此，他转向了垂直鼠标和魔力触控板，以减少手的不适。在键盘选择上，他尝试了几种人体工学键盘，最终选择了Ergodox EZ键盘，并进行了个性化配置。此外，为了避免使用鼠标，作者使用VIM模式进行编程。他还建议了一个电动站立办公桌，并定期进行伸展运动。为了缓解工作压力，作者选择了攀岩作为放松方式。
- [《使用自定义 Hooks 为 React 项目增效》](https://habr.com/en/articles/746760/)。 这篇文章介绍了 20 多个自定义 React hooks, 包括使用数组、异步操作、点击检测、复制文本、暗黑模式、防抖、Geolocation、悬停检测、长按检测、媒体查询、在线状态、元素在屏幕内检测、Previous 状态、渲染计数、加载脚本、历史状态、有校验的状态、存储、定时器、切换状态、翻译、更新效果等 hooks, 这些 hooks 封装了常用的交互逻辑，可以提高代码的复用性和可读性。
- [《React 渲染的未来》](https://prateeksurana.me/blog/future-of-rendering-in-react/)。 有更新。
- [《我严重误解了单一责任原则》](https://www.sicpers.info/2023/10/ive-vastly-misunderstood-the-single-responsibility-principle/)。 文章讨论了“单一职责原则”(Single Responsibility Principle, SRP)的误解。作者最初以为每个类应只有一个改变的原因。但在阅读Parnas的文章后，作者认为这样的理解导致软件架构信息在独立模块中存在是荒谬的。后来，作者发现Robert Martin（SRP的提出者）对此有不同的解释：一个模块的行为应由单一的参与者负责。这意味着，模块不是只有一个改变的原因，而是只有一个实体会请求改变。这与Parnas的模块化观点更容易融合。尽管Martin的这一观点已在Wikipedia上提及，但仍有许多人误解了SRP，这反映了软件工程中知识传递的问题。
- [《接受更少信息，但用它做更多的事情》](https://www.dsebastien.net/take-less-information-in-but-do-more-with-it/)。 本文强调了在我们日常生活中过滤信息的重要性，作者认为大部分信息对我们来说是无用的或是垃圾信息，因此我们需要学会如何过滤这些噪音，集中精力处理对当前有价值或有用的信息。作者分享了他的信息过滤方法，强调了清晰的目标和优先级的重要性，并给出了他的信息筛选步骤。同时，文章还探讨了如何更好地使用那些被认为有价值的信息，包括确保你处于正确的环境，使用正确的工具，并积极参与地学习，如做笔记、连接想法和分享你的知识。
- [《没有比 "不打包" 更快的了》](https://world.hey.com/dhh/you-can-t-get-faster-than-no-build-7a44131c)。 David Heinemeier Hansson最近在开发一个新的Rails应用，而不使用任何前端构建步骤。他使用原生的ES6和import maps为Hotwire编写，以及使用nesting和variables的原生CSS进行样式化。这一切都在一个名为Propshaft的新简单资产管道上运行。这种方法简单且非常快速。他在上周的Rails World主题演讲中分享了这种无构建过程。尽管有些人可能更倾向于使用esbuild或bun，但Hansson指出，现代的技术趋势不再是寻找更复杂的方式来构建JavaScript或CSS，而是依赖HTTP/2和现在普遍支持的import maps来避免打包。他鼓励那些不完全依赖React、Vue等工具的开发者尝试使用Hotwire和No Build，以享受更简洁的技术堆栈。
- [《1 小时快速入门 Framer 保姆级教程》](https://www.bmms.me/blog/first-framer-landing-page)。 这篇教程主要教授如何使用Framer工具创建一个苹果百科的落地页。首先，作者引导读者如何在Framer官网注册账号并激活。接着，详细解析了Framer的操作界面，包括导航区、页面图层区、主编辑区和属性控制区，并通过示意图帮助读者理解。在实战部分，作者以苹果公司百科为素材，指导如何利用Framer的模板和组件快速搭建落地页，包括添加文字、图片、Icon和模块等。完成后，介绍了如何发布并分享制作好的落地页。
- [《我为什么喜欢 Remix》](https://alemtuzlak.hashnode.dev/why-i-love-remix)。 这篇文章详细描述了作者如何通过使用Remix.run框架快速并高效地开发和部署Web应用程序。作者从Laravel转到Remix，并欣赏它如何简化前后端的集成。Remix的主要优势包括：快速的设置过程、代码的紧密耦合与解耦、同构编程、简化的部署、高度的灵活性和广泛的工具集成。
- [《为什么命名是 Clean Code 的一号技能？本文讨论了为编程中的函数、变量等命名的重要性》](https://dev.to/wasp/why-naming-is-1-skill-for-writing-clean-code-4a5p)。 作者认为好的命名能清楚表达代码的本质,避免误导和歧义,是编写整洁代码的关键,占整洁代码技能的90%。通过两个例子说明了好的命名如何改进代码的可读性,以及糟糕的命名往往隐藏了糟糕的代码结构。作者还介绍了判断一个名字好坏的标准,给出了如何找到一个好名字的技巧和步骤,并建议在代码审查中关注命名。文章最后推荐了《整洁代码》一书中关于命名的章节。
- [《防止 Tailwind CSS 混乱的 5 个最佳做法》](https://evilmartians.com/chronicles/5-best-practices-for-preventing-chaos-in-tailwind-css)。 本文总结了 5 个使用 Tailwind CSS 的最佳实践，包括：尽量减少使用实用类的数量；合理分组设计标记并采用语义命名；采用一致的类排序和 linter 确保代码整洁；最小化捆绑包大小；在组件中尽量定义一组预定义样式变体等。遵循这些建议可以确保长期高效地使用 Tailwind CSS, 获得其优势而不会造成项目混乱。
- [《CSS 相对颜色语法》](https://developer.chrome.com/blog/css-relative-color-syntax/)。 这篇文章介绍了CSS颜色的相对语法,可以基于已有颜色方便地生成新的颜色变体,如提高或降低亮度、饱和度、色相旋转等,从而实现颜色的变化和生成调色板,简化了颜色操作与管理。
- [《Angular 和 Qwik 创作者谈 JS 框架如何处理反应性》](https://thenewstack.io/angular-qwik-creator-on-how-js-frameworks-handle-reactivity/)。 Miško Hevery，在国际JavaScript大会上预测，JavaScript框架下一个竞争领域将是启动性能。他通过评估主要JavaScript框架的反应性来为Qwik建立了案例。Hevery解释了反应性的三种方式：值、信号和可观察对象，并对不同框架（Angular、React、Vue、Svelte、Qwik和Solid）如何处理反应性进行了比较。他认为，更精细颗粒度的框架在值发生变化时需要做更少的重新渲染或重新计算工作。尤其在Qwik中，由于它使用的是"可恢复性"而非"水合"，因此只有与按钮相关的点击监听器会出现在客户端，其他任何应用特定的代码都不需要。总体而言，Hevery认为启动性能将是框架之间下一个关键的竞争点。
- [《不受欢迎的观点：比以往任何时候都更难成为一名优秀的软件工程师》](https://juraj.hashnode.dev/unpopular-opinion-its-harder-than-ever-to-be-a-good-software-engineer)。 这篇文章探讨了成为一名优秀软件工程师在当前环境中的困难。作者首先定义了什么是“好的”工程师，强调价值创造而非仅仅是编程能力。文章进一步讨论了技术市场的快速演变和竞争对工程师施加的压力，以及新技术和趋势如何导致工程师偏离核心价值。同时，文章也指出了快节奏和高期望会产生的压力，以及这种压力如何影响工程师的心理和生理健康。最后，作者给出了如何提高效率和做得更好的建议，强调了公司文化和个人价值观的重要性。
- [《编写整洁的 React 代码的最佳实践》](https://dev.to/amritapadhy/best-practices-for-writing-clean-react-code-59fm)。 文章强调了React代码组织和清晰性的重要性，因为这样的代码易于理解和维护。文章建议遵循一致的编码风格，使用ESLint和Prettier等工具进行代码检查。组件应遵循单一职责原则，并组织在清晰的目录结构内。推荐使用函数式组件和Hooks来管理状态，并避免复杂的组件层次结构。文章还强调了创建可复用组件和使用属性解构来提高代码可读性。如果需要进行更高级的状态管理，可以使用Redux或React Context API。性能优化方面，可以使用React.memo或React.PureComponent。最后，添加合适的注释和文档以帮助其他开发者理解代码，并尽量使用无状态组件来简化代码逻辑和测试。
- [《44 个 React 前端面试问题》](https://dev.to/m_midas/44-react-frontend-interview-questions-2o63)。
- [《我如何为《每周话题》寻找链接》](https://www.thingelstad.com/2023/10/07/how-i-find.html)。 这篇文章详细介绍了作者 Jamie Thingelstad 如何通过 RSS 订阅、时事通讯和阅读列表收集感兴趣的链接，然后 filtration 筛选、阅读、标记和策划这些链接，最终发布到他的博客《每周一物》中。他多年来一直在做类似的工作，这不仅帮助他发现有趣的内容，也使他成为了终身学习者。

## 工具资源

- [AI Emoji 生成器。](https://emojis.sh/)
- [AI 生成高质量 GIF。](https://hotshot.co/)
- [NEXT.NAV。](https://www.next-nav.com/) VSCode 插件，Navigate and Create routes easily in your Next.js application。
- [GPT-4 Vision 可以根据视觉稿提可用性改进建议。](https://twitter.com/levie/status/1712882032290807835)
- [GPT-4 Visition 可以把数学公式转成代码。](https://twitter.com/AlphaSignalAI/status/1713243769762349448)
- [成为高效软件工程师的 10 个关键特质。](https://twitter.com/addyosmani/status/1712589573547848109)

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 350 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 353 - 《VPS、宝塔、Blog》
- 352 - 《Mako 开发日志（4）：Less》
- 351 - 《面试造火箭，工作拧螺丝，开发的意义在哪》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i4/O1CN01KBQHx51XCIKSQP4Mf_!!6000000002887-2-tps-866-866.png)

![](https://img.alicdn.com/imgextra/i2/O1CN01sVbt5H1KcmE703qPp_!!6000000001185-0-tps-1536-1536.jpg)
