---
title: "Docusaurus 3、Remix ❤️ Vite、D2、React Forget"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01v382cd1IjWq63RYmq_!!6000000000929-0-tps-1920-1282.jpg_1200x1200.jpg"
titleImageCaption: "benwhitephotography @ unsplash"
publishedAt: "2023/11/06"
---

## 一周新闻

- [Docusaurus 发布 3。](https://docusaurus.io/blog/releases/3.0) 
- [Deno 发布 1.38。](https://deno.com/blog/v1.38) 
- [Remix ❤️ Vite。](https://remix.run/blog/remix-heart-vite) Remix v2.2.0 现已支持 Vite 的不稳定版本，提供了 Vite 出色的开发体验。Vite 的主要优势包括快速的模块热替换、优化的构建速度和对构建框架的特定设计。现在，Remix 不再是一个编译器，而是一个 Vite 插件，允许开发者利用 Vite 插件生态系统的全部功能。尽管 Remix 最初没有使用 Vite，但随着 Vite 的发展和其对服务端渲染、非 Node 运行时支持等的增强，Remix 决定采纳 Vite。现在，Remix 团队与 CloudFlare 核心团队合作，期望在 Remix Vite 插件稳定之前提供最佳的 CloudFlare 支持。Remix 鼓励用户反馈，目前有一些已知的问题。Remix 也向 Vite 团队表示感谢，并宣布 Remix 和 Shopify 现在将赞助 Vite。同时，Remix 社区对 Vite 的支持进行了探索，并感谢其他框架如 Astro、SolidStart 和 SvelteKit 为 Vite 支持提供的启示。
- [12ft 被 vercel ban 掉。](https://twitter.com/thmsmlr/status/1718663563353755982) 
- [Are We Turbo Yet？ 还没，5249 of 5697 next dev tests passing。](https://areweturboyet.com/) 
- [Supabase 现已与 Next.js 14 兼容。](https://supabase.com/blog/supabase-is-now-compatible-with-nextjs-14) 
- [eslint-stylistic 发布 1。](https://github.com/eslint-stylistic/eslint-stylistic/releases/tag/v1.0.0) 由于维护成本高昂，ESLint 和 typescript-eslint 团队决定放弃核心中与格式化/风格相关的规则，因此启动了该项目。此 repo 移植了这些规则，并将它们作为独立的软件包发布，并将由社区进行维护。
- [nextjs-use-php。](https://github.com/bufferhead-code/nextjs-use-php) 哈哈。
- [TypeScript 发布 5.3 RC。](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3-rc/) 这是 TypeScript 5.3 release candidate 的公告。主要新增功能包括:import attributes、resolution-mode 稳定支持、switch (true) 缩小类型、instanceof 通过 Symbol.hasInstance 缩小类型、检测 super 对实例字段的访问、交互式类型嵌入提示、优先使用 type 自动导入、通过跳过 JSDoc 解析进行优化、通过比较非标准化交集进行优化、tsserverlibrary.js 和 typescript.js 的合并、lib.d.ts 变更、对 super 访问实例属性的检测等。未来两周将收集反馈，预计不会有重大变更，主要针对新特性和关键问题进行低风险更新。希望尽快试用该 RC 版本并提供反馈。
- [时隔三年的线下D2，邀你一起技术会友。](https://mp.weixin.qq.com/s?__biz=Mzg4MjE5OTI4Mw==&mid=2247503104&idx=1&sn=b790194b8148d2c83e3666c174d8b032&chksm=cf58d29cf82f5b8a50999a85bcb883546735511d92028c47842c4028ea4a5914295d91a01b7c&mpshare=1&scene=1&srcid=1030xukglTjznnZ6lA4O0EdO&sharer_shareinfo=a7e902241324985d79eb19d0236bd042&sharer_shareinfo_first=f21e503d5ae13873576f9360629ea6ee#rd) 

## 深度好文

- [《新版 React 文档中的九项最佳建议》](https://blog.testdouble.com/posts/2023-10-16-react-docs-recommendations/)。 这篇文章总结了 React 文档中的九条代码风格建议：1) 在循环中给元素设置 key 时，使用稳定唯一标识符，不要使用索引；2) 定义组件时放在文件顶层，不要嵌套；3) state 中只存储计算所需的最小数据；4) 除非性能问题明显，否则推迟使用缓存；5) 提取的共享函数只有调用 hook 才加 use 前缀；6) 根据 prop 改变 state 时直接在组件函数中设置，不要在 effect 中；7) 数据获取首选第三方库，不要只用 useEffect;8) 响应事件时用事件处理函数，不要用 useEffect;9) effect 依赖引起不必要重渲染时，去掉函数里的依赖，不仅是数组里的。
- [《2023年工程师的 Mac 工具箱》](https://juejin.cn/post/7292428123849293887)。 
- [《辟殊 - Rust 在前端构建高性能前端打包工具》](https://www.bilibili.com/video/BV15c411d7FZ/)。 
- [《Use React Forget TODAY》](https://www.youtube.com/watch?v=pSQjU3GB23E)。 本文讲述了作者在 React Advanced 会议上听到有关 React Forget 的新编译器技术后，对 React 应用性能优化的见解和实践建议。React Forget 是一个专门为 React 项目设计的新编译器，能自动记忆组件，提供更精细的性能优化，比如自动管理 useMemo 和 useCallback，但目前尚未发布。作者通过实例展示了在没有 React Forget 的情况下，如何手动通过 useMemo 对 JSX 进行优化，提高组件的渲染效率。文中还详细解释了 JavaScript 的对象和数组是如何通过内存引用来比较的，这对于理解 React 组件的性能优化至关重要。最后，作者提到了这种手动优化的代码可能更难阅读和维护，是一种权衡选择。
- [《加速 JavaScript 生态系统 - Tailwind CSS》](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-8/)。 这篇文章总结了关于Tailwind CSS的性能优化探讨。作者首先提到了Tailwind CSS作为一种流行的网页样式工具，并计划分析其性能，但面临了一些挑战。文章中详细介绍了Tailwind CSS的工作原理，包括扫描CSS文件中的@tailwind规则，提取潜在的Tailwind类名，解析这些类名并生成相应的CSS规则，最后替换原始CSS文件中的@tailwind规则。作者在优化性能方面提出了一些方法，包括使用正则表达式快速查找@tailwind规则，减少搜索空间以提高效率，以及优化解析过程以更快速地判断类名的有效性。通过这些优化，作者成功将Tailwind CSS的性能从原来的388毫秒降低到98毫秒，并最终完成了自己的性能优化项目。
- [《CSS Selectors: A Visual Guide》](https://fffuel.co/css-selectors/)。 
- [《CSS 又好玩了》](https://pdx.su/blog/2023-10-25-css-is-fun-again)。 这篇文章主要讨论了CSS的发展历程和最新的功能。作者首先回顾了CSS的历史，从90年代的内联属性到CSS 2的出现，使得开发者可以更灵活地定位和调整页面元素。然后，作者讨论了CSS的静默复兴，CSS慢慢地增加了新的功能，如:is和:where选择器，Flexbox和CSS Grids，以及变量或自定义属性。最近，新功能的推出速度加快，如CSS嵌套，color-mix，Containment和Style queries等。此外，还有一些小的改进，如Transform属性被分解为单独的属性，display的重新审视，新的三角函数等。最后，作者预测了CSS的未来，包括Relative Colors特性和Native CSS scoping等。总的来说，作者认为CSS正在经历一个复兴期，新的功能使得编写样式更加方便和强大。
- [《ECMAScript Decorators 十年历史》](https://dev.to/what1s1ove/ecmascript-decorators-the-ones-that-are-real-g96)。 
- [《无缝切换构建系统》](https://engineering.atspotify.com/2023/10/switching-build-systems-seamlessly/)。 Spotify从2017年开始试验Bazel构建系统，经过几年的发展，为了满足多语言、多平台和大量代码的需要，他们决定完全用Bazel来构建他们的iOS应用。构建系统用于简化构建过程，以前Spotify依赖Xcode构建系统，但随着移动应用的增长，现代构建系统变得更为重要。为了平稳过渡，Spotify让两种构建系统同时运行，直到Bazel得到完全验证。结果显示，使用Bazel大大提高了构建速度和开发者的效率。但迁移过程中也存在挑战，如维护多个构建系统的成本和IDE的集成问题。最终，为了确保发布的质量，Spotify对比了Bazel和Xcode构建的版本，并设计了一套逐步发布策略。结论是，通过与开源社区的合作，Spotify成功地用Bazel完全构建了其iOS应用。
- [《React Advanced London 2023》](https://www.youtube.com/watch?v=hn_L56ypX1A)。 
- [《Next.js Conf 2023》](https://www.youtube.com/playlist?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY)。 
- [《组织多重 Git 身份》](https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities)。 文章讲述了如何管理多个Git身份（例如个人、工作、客户1、客户2等）。作者使用三级目录来组织Git仓库：第一级是个人和工作项目的总目录（~/sources和~/work），第二级是不同客户的目录（如~/work/client1），第三级则是具体项目的仓库（如~/work/client1/foo-api）。文章的重点是利用Git的全局配置文件（~/.gitconfig）的“条件性包含（conditional includes）”功能。这允许用户根据仓库的位置自动切换Git配置，从而解决了因为忘记更改电子邮件地址而收到客户请求的问题。
- [《使用 CSS @scope 限制选择器的使用范围》](https://developer.chrome.com/articles/at-scope/)。 文章讨论了如何在CSS中精细控制选择器，尤其是在需要权衡特定选择与易于重写选择器之间的需求时。它介绍了@scope关键字，允许你限制选择器的作用范围，只针对DOM的一个子树。@scope可以设置一个上限（scoping root）和一个下限（scoping limit），因此你可以非常精确地控制哪些元素被选中。
- [《每天只工作 3 小时，但天天如此》](http://plumshell.com/2016/03/10/work-for-only-3-hours-a-day-but-everyday/)。 独立iPhone开发者通过每天工作3小时的方式，持续近两年找到了自己的高效工作模式。这个想法最初受到DHH（Rails创造者）和Taleb（《反脆弱》作者）的影响，强调短时间内的高效工作比长时间的劳动更为生产力高效。作者试验了多种工作模式后，放弃了每周工作40小时的方式，改为每天只工作3小时。这不仅提高了工作质量，还让他在决策时更加慎重。短时间工作还有助于编程问题的解决，即使有时难以在当天解决问题，第二天往往能以全新的视角找到解决方案。该方法的挑战包括“进入状态”时不想停下来，以及可能影响一些长期项目的进度。尽管如此，该方法不仅提高了短期和长期的工作效率，还让作者觉得可以持续工作，而不是早日退休。
- [《加快你的 VSCode 项目设置》](https://axemsolutions.io/blog/vs-code-configuration-export-import.html)。 根据2023年的Stackoverflow调查，Visual Studio Code依然是73.71%开发者首选的IDE。VS Code以其轻巧且强大的代码编辑器著称，但搭配合适的扩展则更显其潜能。文章探讨了如何增强VS Code体验，特别是在新项目中。文章强调了统一的开发环境的优势，如简化入职流程、标准化的调试和代码格式化设置等。VS Code支持将安装的插件列表导出为文件并在另一设备上复制。文章列出了如何显示和保存已安装扩展的命令，并提供了如何共享和在另一设备上复制的指南。此外，还介绍了VS Code的settings.json配置文件的位置和常见的自定义设置，并给出了一个警告建议在进行大的更改前备份settings.json文件。文章的结论是，通过VS Code的扩展配置的导入和导出功能，可以确保团队中的每个人都使用相同的工具和设置，从而节省宝贵的时间并优化工作流程。
- [《如何利用 AI 加速学习》](https://www.youtube.com/watch?v=p9PK4zQE0Ak)。 视频内容是关于如何使用AI，特别是ChatGPT，来更有效地学习和准备技术面试。视频中的主讲者分享了她如何在日常生活中，如去杂货店的路上，使用ChatGPT来学习复杂的技术主题。她特别强调了使用语音命令与ChatGPT进行交互的好处，这使得学习变得更为便捷。此外，她还展示了如何使用ChatGPT进行模拟面试，并从AI那里获得有关回答的反馈，以更好地为实际的技术面试做准备。最后，她鼓励观众利用这些技术来加速学习。
- [《Youtube 的反广告屏蔽和 uBlock Origin》](https://andadinosaur.com/youtube-s-anti-adblock-and-ublock-origin)。 近期，YouTube 加强了反广告拦截工具的努力。以往，广告拦截工具通过修改 YouTube 的 API 响应来屏蔽广告。但今年，YouTube 开始模拟请求检测广告拦截工具的干扰。YouTube 和广告拦截工具之间的对抗已成为 “猫捉老鼠” 的战争。但不是所有人都受到 YouTube 的这种策略影响，这取决于用户的账户、浏览器和 IP 地址。此外，YouTube 不仅仅针对广告拦截工具，其他防跟踪工具和浏览器设置也可能导致被标记。同时，Reddit 上的 uBO 团队发布了一篇关于如何应对 YouTube 反广告拦截的详细帖子，但很多用户并未真正按照其建议操作，导致技术支持困难。有人尝试使用自定义过滤器来隐藏广告，但这种方法并不有效。YouTube 每次调整脚本时，部分 URL 都会改变，而用户对此产生了误解。由于压力和负面评论，uBO 团队的一些成员选择离开。考虑到 uBO 团队的志愿者状态，不断的对抗和用户压力可能导致他们最终放弃，这或许是 YouTube 赢得这场消耗战的方式。
- [《如何从资深到领导》](https://swizec.com/blog/how-to-go-from-senior-to-lead/)。 首先，与经理沟通你的晋升意愿是第一步。好的经理会为你制定成长计划，并在1对1的会议中提供指导。此外，文章解释了不同级别的工程师应具备的能力，从初级到高级，再到领导。为了获得晋升，你应该先展示出领导能力，而不仅仅是获得头衔。文章列出了一些无需正式头衔即可做的事情，这有助于战略性思考并开始在该级别做出贡献，例如参加所有冲刺演示，与其他团队进行1对1的会议，与产品经理沟通，注意代码中的摩擦点，提出驱动业务结果的想法等。最后，作者强调，技术领导需要在继续做出强大的个人贡献的同时，完成上述所有工作。
- [《Embeddings: What they are and why they matter》](https://simonwillison.net/2023/Oct/23/embeddings/)。 
- [《基于荷尔蒙开发的开源项目》](https://www.eaimty.com/2023/opensource-project-based-on-hormone/)。 
- [《React Suspense 指南：从代码分割到数据获取》](https://hackernoon.com/the-evolution-of-react-suspense-from-code-splitting-to-data-fetching)。 本文介绍了 React 中的 Suspense 组件的使用，它可以在数据加载过程中展示 fallback 组件。use 钩子可以简化 Suspense 的数据获取。Suspense 可以用于懒加载组件，提升服务端渲染性能。我们还可以利用 use 钩子实现类似 lazy 加载和 Offscreen 的功能。
- [《与Zig的一天》](https://www.pierrebeaucamp.com/a-day-with-zig/)。 作者之前因工作方便选择了Go语言进行侧项目的数据库开发。但由于Go不适合某些底层任务，作者决定转向其他编程语言。经过一番考虑，作者选择了Zig。Zig给作者带来了全新的体验，令其充满期待和乐观，就像2013年他首次发现Go时的感觉。Zig在某种程度上像是更低级的Go，正是作者所期待的。但Zig也存在问题，如文档不够成熟，资料更新较快，解决问题的答案经常隐藏在Reddit或Github的议题中。作者最不满意的是Zig的文件组织方式，每个文件都需要明确的导入，这鼓励创建很大的源文件。此外，Zig的测试与源代码同在一个文件，使文件更难阅读。总体上，尽管有些小问题，作者还是对Zig持积极态度，并计划将其Go的解析器迁移到Zig。如果一切顺利，应用程序的其余部分也会很快迁移过来。
- [《如何让自己成为学习机器》](https://every.to/superorganizers/how-to-make-yourself-into-a-learning-machine/)。 这篇文章介绍了Simon Eskildsen通过大量阅读和构建自己的知识管理系统来提高工作和生活技能的方法。他使用Kindle进行阅读并利用Readwise整理关键要点,通过Anki卡片复习记忆,并构建自己的Zettelkasten笔记系统来整合概念。他还通过Things进行GTD时间管理,并设定了多个长期个人发展项目。Simon认为记忆是被低估的,广泛的知识可以帮助整合信息。他推荐的书是《好想法从何而来》。
- [《为什么要编写自己的静态网站生成器》](https://arne.me/articles/write-your-own-ssg)。 作者在过去使用过多种静态网站生成器，每种都有自己的特点。但自从昨天，这个网站开始使用作者自己开发的静态网站生成器，专为这个特定网站设计。主要动机是不想依赖他人的决策或追求他不关心的版本升级。用自己的生成器，可以选择任何技术堆栈，不用阅读文档或试图理解他人的决策，只需要开始编写代码。为了构建这个生成器，作者选择了Rust语言，并使用了一系列工具，如comrak、maud、grass等，来进行Markdown解析、模板渲染、CSS编译、RSS生成和站点地图生成。最后，作者希望这篇文章能给读者一些启示，无论是继续使用现有框架，还是尝试自己的解决方案，最重要的是选择一个令人兴奋的技术堆栈并享受其中的乐趣。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 360 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 368 - 《我的小技巧集合 05》
- 367 - 《webpack externals 里用 React 和 window.React 有何区别》
- 366 - 《完蛋！我带的外包转正了！》
- 365 - 《Mako 开发日志（5） - Why Mako》
- 364 - 《作为前端开发者，到底有没有必要学 Rust》
- 363 - 《Apple TV 心得》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i2/O1CN01f6DjBM1mZqweAvqHN_!!6000000004969-0-tps-968-940.jpg)

![](https://img.alicdn.com/imgextra/i3/O1CN01MShHJc27ngqCEqhzS_!!6000000007842-0-tps-972-754.jpg)

![](https://img.alicdn.com/imgextra/i2/O1CN01Mf52Eg1ZX1UdPrbDM_!!6000000003203-0-tps-1050-1050.jpg)
