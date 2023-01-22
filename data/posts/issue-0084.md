---
title: "tRPC、Zod、慢 Jest、React Debounce、SSSVG"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01GEitub1gygdrUnDsx_!!6000000004211-0-tps-7008-4672.jpg"
titleImageCaption: "小娃放烟花，㊗️大家新的一年扬眉兔气、前兔似锦、大展宏兔"
publishedAt: "2023/01/23"
draft: true
---

## 广告

<strong>半年没做优惠活动了，新年给我的知识星球打个折，优惠 ￥100，史低，￥199 除了看已有的 240+ 日更，还有今年的 230+ 日更，时间截止到初七晚 24 点，限前 100 人，感兴趣的可以考虑入了。微信识别二维码，付费即可加入，如不满意，72 小时内可在 App 内无条件自助退款。</strong>

访问 q.sorrycc.com 了解更多。

<img src="https://img.alicdn.com/imgextra/i3/O1CN01BBwP1T1gQnKgTgzQW_!!6000000004137-2-tps-580-958.png" width="300" />

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- 为什么我们不谈论 Angular ？因为 Angular 自傲的最新改进是：[支持写自闭合标签](https://twitter.com/t3dotgg/status/1614125827054260224)。
- Angular 的[新路线](https://angular.io/guide/roadmap)三大关键词：SSR、水合、esbuild。
- Chrome 110 beta 发布，你知道 [:picture-in-picture](https://developer.chrome.com/en/blog/chrome-110-beta/) 画中画伪类吗？
- Tailwind 尝试将正则提取部分改造为 Rust ，发现最快可以[提速 20 倍](https://twitter.com/adamwathan/status/1614076275068633091)，目前仍在开发中。
- Github 私有库也支持配置创建 [issue 的表单模板](https://github.blog/changelog/2023-01-12-github-issues-january-12th-update/)了。
- Github Dependabot 一直是大量不必要的 PR 创建来源，现在 90 天以上不活跃的仓库将不被 [Dependabot](https://github.blog/2023-01-12-a-smarter-quieter-dependabot/) 视为目标对象。
- Safari 已经 [20 周年](https://www.apple.com/newsroom/2003/01/07Apple-Unveils-Safari/)了。
- valtio [v1.9.0](https://github.com/pmndrs/valtio/releases/tag/v1.9.0) 发布，新增更好用的 `useProxy` 。
- [某果山大圣](https://twitter.com/shengxj1/status/1614971488234528768)透漏，在直播中说 Tailwindcss 有可能触发检测被封号。
- esbuild [v0.17.0](https://github.com/evanw/esbuild/releases/tag/v0.17.0) 发布，对 watch 的重构带来了较大的语法 Breaking change 。
- 近一周在国际上围绕 Tailwind 引发了规模庞大的[争论](https://www.youtube.com/watch?v=lHZwlzOUOZ4)，有人[战败](https://twitter.com/ThePrimeagen/status/1615094281890406400)并道歉，但 Tailwind 作者表示他已经在[泡温泉](https://twitter.com/adamwathan/status/1614691113377607680)了。
- FireFox [109 发布](https://www.mozilla.org/en-US/firefox/109.0/releasenotes/)，默认启用 Manifest v3 等。
- [Vue Nation 2023](https://vuejsnation.com/) 将于 1 月 25-26 日举行。
- Remix 获得 Product hunt 网站的 2022 [Golden Kitty](https://twitter.com/ryanflorence/status/1615500307399872513) 奖项。
- Nuxt 一把手现在调整为 [danielcore](https://twitter.com/_jessicasachs/status/1615471291712118793) ，同时仓库迁移到 [nuxt/nuxt](https://github.com/nuxt/nuxt) 。
- MDX Vscode 插件 [v1.1.0](https://github.com/mdx-js/vscode-mdx/releases/tag/v1.1.0) 发布，实验性支持识别 mdx 中的组件。
- Bun [v0.5.0](https://bun.sh/blog/bun-v0.5.0) 发布，支持 monorepo 但是阉割版。
- Remix [v1.11.0](https://github.com/remix-run/remix/releases/tag/remix%401.11.0) 发布，移植 React Router v6.4 Await + defer 支持等。
- swr [v2.0.1](https://github.com/vercel/swr/releases/tag/v2.0.1) 发布，更好的类型提示。
- codesandbox [支持 rust](https://codesandbox.io/blog/announcing-rust-support-in-codesandbox) 编码。
- [structura.js](https://github.com/GiuseppeRaso/structura.js) 是比 immer 快 22 倍的新替代方案，immer 也提出了 [v10 RFC](https://github.com/immerjs/immer/issues/1015) 提案。
- astro [v2.0.0-beta.3](https://github.com/withastro/astro/releases/tag/astro%402.0.0-beta.3) 发布，v1 都没用上，v2 就要来了吗。

## 深度好文
> 好文推荐。这周好文真多，以下是我全文阅读过的部分。

- [《6 Common SVG Fails (and How to Fix Them)》](https://css-tricks.com/6-common-svg-fails-and-how-to-fix-them/)，出自 CSS Tricks。作者梳理了 6 种常见错误（编者注：后几种感觉不常见），包括 viewbox 错误、width 和 height 缺失、无意 fill 或 stroke 的颜色、id 缺失、clipping 和 masking 冲突、命名空间缺失，并给出了针对这些问题的解法。
- [《为何开发人员开始喜欢tRPC啦？》](https://linux-china.davao.page/blog/2023-01-14-why-trpc/)。tRPC 的优点包括：1）无需再次封装，直接使用函数调用远程服务，2）与Zod深度结合，可以直接使用Zod进行数据校验，3）使用非常简单，可以用在任何框架中，4）tRPC over HTTP协议非常简单，无论客户端还是服务端实现都非常简单。
- [《Zod: The Next Biggest thing after Typescript》](https://dev.to/jareechang/zod-the-next-biggest-thing-after-typescript-4phh)。看完这篇文章后，你可能不想再使用任何其他的验证库了！
- [《Why Is My Jest Test Suite So Slow? 》](https://blog.bitsrc.io/why-is-my-jest-suite-so-slow-2a4859bb9ac0)。除了可以学会如何排查 Jest 性能问题（作者给了 6 个排查方向）之外，还可以学习如何用 Chrome DevTools Profile 测试性能。
- [《How to Learn to Code & Get a Developer Job in 2023》](https://www.freecodecamp.org/news/learn-to-code-book/)。这是一本书的体量了，没时间细看。
- [《How We Rebuilt React DevTools with Replay Routines》](https://blog.replay.io/how-we-rebuilt-react-devtools-with-replay-routines)，出自 replay.io。即时对 Replay 不感兴趣，也可以从中学习到 RDT（React DevTools）是如何工作的。
- [《Speeding up the JavaScript ecosystem - module resolution》](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-2/)，出自 marvinhagemeist。构建、测试、Lint 时有个性能大户是 module resolution，即如何找到文件，虽然规范层有规范层的解法（ESM 引用文件要带后缀），但在规范没大范围落地之前，也可以有一些解法。作者总结了几点，1）尽量避免对文件系统的调用，2）尽可能多的缓存以避免调用文件系统，3）当你使用 `fs.stat` 或 `fs.statSync` 时，总是设置 `throwIfNoEntry: false`，找不到文件时不抛错而是给 undefined，4）尽可能地限制向上的遍历行为。看完这篇，[我给 umi 提了个 pr](https://github.com/umijs/umi/pull/10326)，调整了 webpack 配置里 extensions 的顺序。
- [《Rethinking the Component API》](https://blog.excalidraw.com/redesigning-editor-api/)，来自 Excalidraw Blog。Excalidraw 设计了新的组件 API，之前是用的 render props，现在改用组装式 API + React Children 的方式进行定制，个人更喜欢现在的。
- [《How to debounce and throttle in React without losing your mind》](https://www.developerway.com/posts/debouncing-in-react)，作者是 NADIA MAKAREVICH，必读作者系列。关于如何在 React 中做 debounce 和 throttle 而不失去理智。作者先介绍了 debouce 和 throttle 的区别，以及各自的场景是什么，比如 throttle 的场景是拥有自动保存功能的编辑器，及时保存用户输入，以减少因意外情况可能导致的数据丢失。然后介绍了在 React 中使用 debouce 有多困难，你会面临 re-render、陈旧的 state、陈旧的闭包等问题，最终解法是 useRef + useEffect + 保存函数到 ref.current，因为 ref 是 mutable 的，不会有闭包数据陈旧问题。
- [《Optimize Time to First Byte》](https://web.dev/optimize-ttfb/)，出自 web.dev。一些优化方向包括，1）选择合适的 Host，2）使用 CDN，3）避免多重重定向，4）Stream markup to browser，5）使用 Service Worker，对 assets 做 swr、[streams](https://developer.chrome.com/docs/workbox/faster-multipage-applications-with-streams/)、[app shell model](https://developer.chrome.com/blog/app-shell/)，6）对关键资源使用 103 Early Hints。
- [《SSSVG: An Interactive SVG Reference》](https://fffuel.co/sssvg/)，制作精良的交互式 SVG 参考手册。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行[每周四发一版](https://github.com/umijs/umi/releases)，我觉得有趣的功能包括，1）修复 qiankun 父子应用 core-js 可能冲突的问题，2）优化 create-umi，simple app 模板换成配置式路由，3）修复 hmr 时 process undefined 报错的问题。
- 年前几天无心工作就做各种收尾，包括把拖了好久的 antd 官网[「项目实战」](https://ant.design/docs/react/practical-projects-cn)文档[更新到了 Umi 4](https://github.com/ant-design/ant-design/pull/40292)。
- 新的一年准备写小册，于是[梳理了几个课程的介绍、受众、更新频率、收益和时效](https://t.me/yqtalk/141)等，大家可以给点建议我应该先写哪个。
- 知识星球年终报告说我[一年写了 75W 字](https://t.me/yqtalk/142)，这肯定没有剔除代码块吧。
- 用 Zerotier 把家里所有电脑和手机都连起来，回老家后也可以无缝连回家里的 NAS 和 Windows 电脑。
- 读完今年第二本书《终身学习：哈佛毕业后的六堂课》。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单，有求职需求的请在 https://docs.qq.com/form/page/DY291a3BOdGR3TnRT 填写表单。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 240 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 249 - 《读书笔记：终身学习》，2023 年读完的第二本书
- 248 - 《Flag 2023》，虽然 2022 的好多没完成，但 2023 了该立还得立
- 247 - 《Zod 学习笔记》，工具箱工具 +1

## 每周一图

![](https://img.alicdn.com/imgextra/i1/O1CN01hBnWnn1IVKTUhffuS_!!6000000000898-2-tps-957-838.png)
