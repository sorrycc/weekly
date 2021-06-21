# MDH 前端周刊第 7 期：Next.js 11、Jotai 1

**这是 「MDH：前端周刊」 第 0007 期，发表于：2021/06/21。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i4/O1CN01QttfqN1mbgK1WWTcZ_!!6000000004973-0-tps-1920-1272.jpg)

封面图：ryland_dean @ www.unsplash.com 。

## ⬆️ 发布

### 1. Next.js 发布 v11
https://nextjs.org/blog/next-11<br />
https://github.com/vercel/next.js/releases/tag/v11.0.0

![](https://img.alicdn.com/imgextra/i4/O1CN019uWx6j1FC8uwEf2RQ_!!6000000000450-2-tps-982-428.png)

个人对 Next.js Live 更感兴趣，技术栈 Service Workers, WebAssembly, ES Modules, Sucrase, Tailwind JIT 和 replicache.dev，暂没有更多细节，后续会开源。

![](https://img.alicdn.com/imgextra/i3/O1CN01LdgQkj1Cmpnaw7zBV_!!6000000000124-2-tps-1920-1343.png)

特性，

* Ready In Seconds
    * 不需要 build
    * 提前编译好了依赖？那新增依赖如何处理？
    * 手动试了添加 antd 无效
* In-browser Editing
    * 基于 ES Modules, ServiceWorkers, and WebAssembly
    * 个位数毫秒级热更新
    * 编辑器用了 MonacoEditor
* Invite Your Whole Team
    * 可以多人协作编程
    * 文件级冲突处理，有人编辑相同文件时提示“This file is being edited by chencheng”
    * 修改后会推送文件内容给所有人，并更新
* Frictionless
    * 仅需要一个浏览器
* Secure by Default
    * 代码跑在浏览器，不是本地，也不是虚拟机
* Faster than Local Dev
    * 所有内容跑在浏览器
    * server responses 延迟比 localhost 更小

### 2. Announcing Jotai 发布 v1
https://github.com/pmndrs/jotai/releases/tag/v1.0.0

![](https://img.alicdn.com/imgextra/i4/O1CN01iC2dbt1euRcffcQa1_!!6000000003931-2-tps-1232-406.png)

Yet another contender for the state management space, this one is based on “an atomic model inspired by Recoil”.

## 📝 文章

### 1. SourceMap 与前端异常监控
https://mp.weixin.qq.com/s?__biz=MzkxNDIzNTg4MA==&mid=2247484211&idx=1&sn=1fe17b3d2f8d74267bb20c61fcf8204d

我们从事 Web 开发工作中，异常监控系统已经是我们朝夕相处的好助手，但是这些异常处理工具通常都是建立在 Web 生态，或者是假定运行在浏览器环境下的，但是当我们需要给一套跨端系统搭建一套类似的异常监控系统，并且期望该系统兼容 Web 生态，现有的工具很可能就不满足我们的需求了，因此我们需要考虑一套完整的异常监控系统整个链路将会涉及到哪些工具链，以及如何修改这些工具链来适配我们的跨端系统。

tl;dr

1. Sentry 结合 SourceMap 上传能定位问题源码
2. SourceMap 格式、原理、如何定位源码
3. SourceMap 的验证可以用 https://evanw.github.io/source-map-visualization/
4. 手动 SourceMap 合并可以用 @ampproject/remapping
5. eval and anonymous function is bad，可能导致反解失败

### 2. 玉伯：开源有带给我什么
https://mp.weixin.qq.com/s/B2gfoxnPo0P0dY1DaIjehQ

总结一下，如果说开源带给我什么，首先第一个就是高效工作的习惯，让我受益终身；第二个是在这个过程中，学会了怎么去做产品；第三个是非常感谢自己有兴趣参与一些开源项目之后，从中感受到什么叫热爱，从而改变了我对人生的很多看法。

### 3. A better React 18 startTransition demo
https://swizec.com/blog/a-better-react-18-starttransition-demo/<br />
https://react-fractals-git-react-18-swizec.vercel.app/ （DEMO）

![](https://img.alicdn.com/imgextra/i1/O1CN010MlTIe1xDpT9AJRip_!!6000000006410-1-tps-794-480.gif)

Demoing startTransition is hard. Modern computers are too fast 😅

### 4. 为什么说用 babel 编译 typescript 是更好的选择
https://zhuanlan.zhihu.com/p/376867546

tl;dr

作者考虑的原因，

1. 产物体积小，主要是补丁？
2. 支持的语言特性，TypeScript 不支持还在草案阶段的特性
3. 编译速度，因为有类型检查？

我的一些不同想法，

1. 考虑编译速度，换 esbuild 可能更快
2. 补丁有很多种方案的选择，和编译关联不大

### 5. 插件式可扩展架构设计心得
https://segmentfault.com/a/1190000040002834

我们的软件系统往往是要面向持续性的迭代的，在开发之初很难把所有需要支持的功能都想清楚，有时候还需要借助社区的力量去持续生产新的功能点，或者优化已有的功能。这就需要我们的软件系统具备一定的可扩展性。插件模式就是我们常常选用的方法。

### 6. 狼叔：聊聊 Node.js
https://mp.weixin.qq.com/s/zP1K-K4FjeS5gaILFk2ySg

狼叔是如何做的？

1. egg-react-ssr
2. iMove，面向开发者的逻辑编排工具
3. 通过 ESM 改善开发者体验
4. 《狼书》卷三

### 7. 120 行代码帮你了解 Webpack 下的 HMR 机制
https://mp.weixin.qq.com/s?__biz=Mzg2ODQ1OTExOA==&mid=2247491058&idx=1&sn=05b0ddcc20627c46931bafce4d4a745f

在使用Webpack Dev Server以后 可以让我们在开发工程中 专注于 Coding， 因为它可以监听代码的变化 从而实现打包更新，并且最后通过自动刷新的方式同步到浏览器，便于我们及时查看效果。但是 Dev Server 从监听到打包再到通知浏览器整体刷新页面 就会导致一个让人困扰的问题 那就是 无法保存应用状态 因此 针对这个问题，Webpack 提供了一个新的解决方案 Hot Module Replacement。

### 8. ▶ What’s new in React 18
https://www.youtube.com/watch?v=bpVRWrrfM1M

![](https://img.alicdn.com/imgextra/i1/O1CN01dDrP7M1ptwy48lf0K_!!6000000005419-2-tps-1580-554.png)

Understand the top new features coming to React 18, explained simply.

### 9. React Cheat sheet (Updated June 2021)
https://dev.to/ericchapman/react-cheat-sheet-updated-may-2021-1mcd

入门向的 Cheat Sheet。

## 🪓 代码工具

### 1. HTTP/3 Check
https://http3check.net/

检查 HTTP/3 和 QUIC 的支持情况。

### 2. Prestige
https://prestigemad.com/

![](https://img.alicdn.com/imgextra/i3/O1CN01mMGejz1OIOs3uaut7_!!6000000001682-2-tps-2000-890.png)

文本式的 HTTP 客户端工具，Command + Enter 执行。

### 3. Ethan-Arrowood/undici-fetch
https://github.com/Ethan-Arrowood/undici-fetch

A WHATWG Fetch implementation based on @nodejs/undici.

### 4. mathjax/MathJax-src
https://github.com/mathjax/MathJax-src

![](https://img.alicdn.com/imgextra/i2/O1CN01fGzj2u23AWIkDDU5I_!!6000000007215-0-tps-1280-207.jpg)

在浏览器里显示数学公式，支持 LaTeX、MathML 和 AsciiMath。

### 5. antfu/vscode-vite
https://github.com/antfu/vscode-vite

![](https://img.alicdn.com/imgextra/i2/O1CN01PoaldL1wBi1H278kn_!!6000000006270-2-tps-2384-1676.png)

Vite 的 VS Code 插件。

### 6. airyland/we-extract
https://github.com/airyland/we-extract

解析微信公众号文章元信息。

### 7. ai/nanostores
https://github.com/ai/nanostores

A tiny (152 bytes) state manager for React/Preact/Vue/Svelte with many atomic tree-shakable stores.

### 8. gaearon/react-lag-radar
https://github.com/gaearon/react-lag-radar<br />
https://mobz.github.io/lag-radar/

![](https://img.alicdn.com/imgextra/i4/O1CN01M38I7A1jqOC6fcXuu_!!6000000004599-2-tps-1212-546.png)

Lag Radar developed by Ben Birch, wrapped into a React component for convenience.

### 9. maykbrito/mini-video-me
https://github.com/maykbrito/mini-video-me

![](https://img.alicdn.com/imgextra/i4/O1CN017ZnqXv1Usw9pDH8uF_!!6000000002574-2-tps-1584-618.png)

📹 A small webcam player focused on providing an easy way to add and control your webcam during recordings.

### 10. ctripcorp/wean
https://github.com/ctripcorp/wean

🍀 小程序编译器前端。

### 11. transitive-bullshit/nextjs-notion-starter-kit
https://github.com/transitive-bullshit/nextjs-notion-starter-kit

![](https://img.alicdn.com/imgextra/i2/O1CN01HWXSyH1WOpLxh5QuV_!!6000000002779-2-tps-2438-1086.png)

Deploy your own Notion-powered website in minutes with Next.js and Vercel.

## 🎁 代码之外

### 1. An incomplete list of skills senior engineers need, beyond coding
https://skamille.medium.com/an-incomplete-list-of-skills-senior-engineers-need-beyond-coding-8ed4a521b29f<br />
https://book.douban.com/subject/26997855/

译：

* 如何主持一个会议，但不是说要成为会议中说话最多的那个人
* 如何在合理的时间内编写设计文档，获取反馈并将其转化为解决方案
* 如何指导职业早期的队友，职业中期的工程师和需要技术建议的新经理
* 如何容忍想谈论自己并不真正了解的技术问题的高级经理，不翻白眼或让他们觉得自己很蠢
* 如何关起门来向不愿公开承认自己不懂的资深人士解释技术概念
* 如何推动其他团队使用你的方案，而不是编写他们自己的方案
* 如何通过寻求帮助，让另一个工程师感到被赏识，从而为你做一些事情
* 如何领导一个项目，即使你没有管理这个项目的任何人
* 如何让其他工程师听取您的想法而又不使他们感到威胁
* 如何倾听其他工程师的想法而不让自己觉得受到威胁
* 如何放弃那个你曾经做过的伟大项目，这样你就能做别的事情
* 如何教其他工程师去关心你真正关心的东西(操作、正确性、测试、代码质量、性能、简单性等)
* 如何向利益相关者反馈项目状态
* 如何说服管理层投资一个不平凡的技术项目
* 如何在构建软件的同时实现增值
* 如何制定项目提案，推广，并获得执行的认可
* 如何把自己重复的足够多以至于人们开始倾听
* 如何选择你的战斗
* 如何帮助他人获得晋升
* 如何获得真实信息(如何八卦，如何交际)
* 如何自己找到有趣的工作，而不是等别人把它带给你
* 如何告诉别人他们错了，同时不让他们感到羞耻
* 如何优雅地接受负面反馈

### 2. Jim Keller在指令集上辩论是一件悲哀的事情
https://mp.weixin.qq.com/s?__biz=MzU3OTA0MjQ3Mg==&mid=2247599958&idx=2&sn=c0d4fdc19b7f5091c589d00acf0bd9a2

### 3. 🎬 叛逆者 ☆☆☆☆
https://movie.douban.com/subject/34949767/

### 4. 🎮 They Are Billions ☆☆☆☆
http://www.vgtime.com/game/11920.jhtml

### 3. 女友电脑私存撕葱帅照，我用python偷梁换柱...
https://mp.weixin.qq.com/s/4m3KFR5cB8jl9O4MX0GHGA

![](https://img.alicdn.com/imgextra/i4/O1CN01D99QCh29Z9IOdMG2b_!!6000000008081-2-tps-640-434.png)

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）

