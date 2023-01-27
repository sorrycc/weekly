---
title: "WIP"
titleImage: ""
titleImageCaption: ""
publishedAt: "2023/01/30"
draft: true
---

## 一周要事

![](https://img.alicdn.com/imgextra/i2/O1CN01SbWUv61JsW93lDr8w_!!6000000001084-2-tps-1990-1274.png_1200x1200.jpg)

MDH 前端周刊终于有自己的官网了，地址是 mdhweekly.com ！新年在家花了一些时间做完善，以及花了数个小时把往期周刊的数据补充完整，终于可以拿出来和大家见面了。同时，之后在微信公众号上的「查看原文」功能会链接到官网。

为啥要做官网？1）自己研发的，体验会更好一些，当然目前还有不少瑕疵和功能缺漏，还会持续完善；2）数据和网站掌握在自己手里，相比依赖平台会更安心一些；3）额外的功能，比如 RSS、全文搜索（待定）、新闻或文章合集（待定）等。

技术栈是什么？自然是 Umi，哈哈。目前是 SPA + CSR，之后可能会加下 SSG，但优先级较低，因为我希望借此项目做下 CSR 项目优化的最佳实践。除了 Umi，用到的还有 styled-components、react-query、markdown-it 等。

做了什么，还缺什么？做了，1）极简风，样式「借鉴」了 [Randy's Blog](https://lutaonan.com/blog/)，2）RSS 功能，3）所有 84 期周刊的数据整理。还缺什么？1）全文搜索，2）暗色主题，3）og 分享 meta，4）sitemap，5）比心功能，6）响应式，7）题图锁定宽高比以避免，8）全文 RSS。

希望大家做什么？有 RSS 订阅需求的可以通过官网订阅，可以第一时间收到更新。

除此之外，还新「设计」了 Logo。说是设计，其实是通过 midjounery 生成 Logo 图片 + remove.bg 删除背景白色底来实现的，10 分钟搞定。

<img src="https://img.alicdn.com/imgextra/i2/O1CN01CJvYj21hotnIOEO31_!!6000000004325-2-tps-500-500.png_200x200.jpg" width="200" height="200" />

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- 。

## 深度好文
> 好文推荐。这周好文真多，以下是我全文阅读过的部分。

- [《10 Web Development Trends in 2023》](https://www.robinwieruch.de/web-development-trends/)，ROBIN WIERUCH 分析了 2023 年 Web 开发的 10 个趋势，推荐一读。10 个领域包括元框架、应用和渲染模式、Edge ServerLess、数据库复兴、JavaScript Runtime、MonoRepo、Utility-First CSS、类型安全、构建工具、AI 驱动开发。
- [《Introducing Content Collections》](https://astro.build/blog/introducing-content-collections/)，Content Collections 是 Astro 2 的新功能（之前好像也在哪个框架里看到过），主要是让 Markdown 也类型安全。实现上基于 zod，所以在提供类型的同时，还可对 Markdown 的内容做校验。
- [《20 Things I've Learned in my 20 Years as a Software Engineer》](https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/)，一篇老文，讲述 20 年工作经验工程师的 20 条 Tips，我读完很有收获，推荐一读。
- [《Capture heap snapshots in Node.js》](https://pawelgrzybek.com/capture-heap-snapshots-in-node-js/)。作者介绍了关于捕获堆快照的 3 个方法，1）`node --inspect index.mjs` 或 `--inspect-brk`，2）借助 Node 12 支持的 [--heapsnapshot-signal flag](https://nodejs.org/api/cli.html#--heapsnapshot-signalsignal)，`node --heapsnapshot-signal=SIGUSR1 index.mjs`，3）用 [`v8.writeHeapSnapshot() method`](https://nodejs.org/api/v8.html#v8writeheapsnapshotfilenameoptions) 手动写。
- [《Things I want to see in JavaScript and Frontend development in 2023》](https://paularmstrong.dev/blog/2023/01/20/javascript-and-frontend-things-to-see-in-2023/)，Paul Armstrong 关于 2023 年期望发生的变化。1）axios 别发展了，因为用浏览器原生支持的 fetch 可以省去 7-11kB 的尺寸，2）CSS 方案更少分歧，主要是 tailwind 和 css in js 之间，3）少一些资本支持的开源，因为当资本进入时，同时意味着他们期望得到巨大的金钱回报，4）少 eslint 规则和配置，自动帮你改代码或能解实际错误的规则除外，5）react 要不振作起来要不就 gg 吧，作者吐槽了好多都在点上，主要是发货太慢。
- [《Improving readability with React Wrap Balancer》](https://vercel.com/blog/react-wrap-balancer)。介绍了 React Wrap Balancer，以 React 组件组件的形式，解的问题是「有些文字在排版上难以阅读，比如最后一行的一个悬空的字」，我把他用到了 mdhweekly.com 上。
- [《GIF vs PNG, JPEG, WEBP - Complete Guide to Image Formats》](https://www.svgator.com/blog/gif-vs-png-jpeg-webp-image-formats-guide/)，一篇关于图像格式的科普文，推荐收藏。
- [《CLI tools you won't be able to live without》](https://dev.to/lissy93/cli-tools-you-cant-live-without-57f6)，作者推荐了 50 个开发必备的 CLI 工具。文章很长，看完感觉我在用的不少命令都应该迭代一遍了。
- [《Tyler’s CSS Wish List for 2023》](https://cloudfour.com/thinks/tylers-css-wish-list-for-2023/)，Tyler 2023 年的 CSS 愿望清单。2022 年对于 CSS 来说是个大年，包括 CSS Layers、subgrid 支持、`:has` 选择器、container queries 等。2023 年作者期望看到的有，1）[View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)，2）[Relative Color Syntax](https://www.w3.org/TR/css-color-5/#relative-colors)，3）Firefox 支持 [Container Queries](https://caniuse.com/css-container-queries) 和 [:has](http://developer.mozilla.org/en-US/docs/Web/CSS/:has)，4）Chrome 支持 [Subgrid](https://chromestatus.com/feature/5663795354533888)，5）[@property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) 支持自定义属性动画。
- [《What I Like About Astro》](https://www.macarthur.me/posts/what-i-like-about-astro)，作者表达了对 Astro 的喜爱，包含以下 4 个原因。1）支持无偏见的数据来源，2）有官方集成做那些无聊的事，比如 RSS、Sitemap、图片优化、SEO 等，3）很难写出不合格的网站，4）大部分 API 建立在标准之上。

## Umi 和我
> 关于 Umi 和我最近的进展。

- 本周休假，Umi 无发布。
- $199 入了 Josh W Comeau 的新课「[The Joy of React](https://www.joyofreact.com/)」，还没看内容，感觉又买贵了，1）据说有区域价格折扣，我没看到，2）老用户有折扣码，忘记用了。
- 打磨 mdhweekly.com，已基本可用，极简风、基于 Umi + styled-components + react-query 等、SPA + CSR，同时花了几个小时把往期的 Markdown 数据全部补充完整了。
- 给我的知识星球做了一次促销，新加入 100+，感谢大家！

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单，有求职需求的请在 https://docs.qq.com/form/page/DY291a3BOdGR3TnRT 填写表单。

* 「浩鲸科技」招聘 React 前端开发，base 地「福建福州」，要求「熟悉 Umi 全家桶，并对低代码平台有一定的了解，能独立研发组件资产」，薪资范围「10-18k」，联系方式「448627663@qq.com」或「18050322490 加微信」。

## 每周一图

![](https://img.alicdn.com/imgextra/i4/O1CN01PIm0dR1rVL2BV5PxE_!!6000000005636-0-tps-1179-843.jpg)
