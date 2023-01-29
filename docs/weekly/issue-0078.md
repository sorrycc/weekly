---
title: "技术文档框架、CSS Architecture、Tailwind 抽象泄漏、调试战术、Mid Journey"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01axhuvH1LBaFRSXX6K_!!6000000001261-2-tps-1024-1024.png_1200x1200.jpg"
titleImageCaption: "Bigfish 群 Logo with MidJourney"
publishedAt: "2022/12/05"
---

这周开始把周刊换了一种形式来写，之前是好文笔记，改成新闻+好文推荐+关于我。主要原因是感觉没那么多好文章值得深入看，又不想拿资讯和低质量文章来凑，也可能是我的阈值变高了，索性就把新闻也加回来，然后文章改成推荐的形式而不是笔记。本文带有大量链接，推荐点击「查看原文」在语雀上查看。

## 新闻
> 推荐下 YingCi 的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯，也是本文新闻的重要渠道之一。

* Cloudflare 宣布了 [Workers Browser Rendering API](https://blog.cloudflare.com/introducing-workers-browser-rendering-api/)，目前是内测阶段，这意味着你现在可以在 CF workers 上运行 Puppeteer（以前由于尺寸和其他限制，不可能）。
* Meta 公司开源了 [Sapling](https://engineering.fb.com/2022/11/15/open-source/sapling-source-control-scalable/)（小树苗），这是一个兼容 Git 的源码控制客户端，适用于大型 Monorepo 项目。
* Nx 背后的公司 Narwhal [筹集了 860 万美元的种子资金](https://techcrunch.com/2022/11/17/with-8-6m-in-seed-funding-nx-wants-to-take-monorepos-mainstream/)。
* Craro [发布 7.0](https://github.com/dilanx/craco/releases/tag/v7.0.0) 终于支持了 CRA 5，来的有点晚，CRA 都快没人用了。
* [Tea](https://github.com/teaxyz/cli) 是统一的打包基础设施，来自 Brew 的创造者。Tea 是一个独立的、适用于所有平台的二进制下载，将整个开源生态系统置于你的指尖。
* 今年的 [State of JavaScript](https://stateofjs.com/zh-hans/) 调研开始了，JavaScript 生态的年度开发者调查项目。
* tRPC [发布 10](https://trpc.io/blog/announcing-trpc-10)，似乎正在成为越来越多人的选择，不仅是 T3 App 技术栈的选择，同时 Bison 团队也写了文章介绍他们[《为啥舍弃 GraphQL 而选择 tRPC》](https://echobind.com/post/why-we-ditched-graphql-for-trpc)。
* ESLint 自 2013 年发布以来已快满 10 年，ESLint TSC 决定[让 ESLint 彻底重写](https://github.com/eslint/eslint/discussions/16557) 以面对下一个十年的挑战。
* Prettier [发布 2.8](https://prettier.io/blog/2022/11/23/2.8.0.html)，支持 TypeScript 4.9 的 satisfies。社区跟进是真的快，还有谁不支持 satisfies 的吗？
* Stable Diffusion [发布 2](https://stability.ai/blog/stable-diffusion-v2-release)，除了增加的缩放、图像修补和深度引导功能外，还有 FID 和 CLIP 分数曲线的改进。
* Nextra [发布 2.0](https://twitter.com/shuding_/status/1598730026685534213)，包括全新 UI、全文搜索、构建时代码高亮、MDX 2 等，可以用于搭建文档站或博客。
* [git-bug](https://github.com/MichaelMure/git-bug) 是一个分布式的 bug 跟踪器，基于 git，让 git 仓库即 Bug Tracker，这样你就算离线也能处理 bug，一下子感觉有点悲哀。。
* esbuild [发布 0.15.16](https://github.com/evanw/esbuild/releases/tag/v0.15.16)，支持 alias，但不支持嵌套 alias。
* Sanna Jammeh 创建了 [TW Classed](https://github.com/sannajammeh/tw-classed)，把 CSS-in-JS 和 Tailwind 结合起来，同时确保类型安全。他的竞品我知道的有 [twin](https://github.com/ben-rogerson/twin.macro)。
* [Docus](https://docus.dev/) 是基于 nuxt 3 的文档方案，我很喜欢他内置的 50+ 文档相关的组件。
* Chrome [发布 108 稳定版](https://developer.chrome.com/en/blog/new-in-chrome-108/)，引入新的 viewport 单位。
* [第 5 届 Vue.js 开发者大会](https://vue.w3ctech.com/) 将于 2022.12.10 在线举办。

## 好文
* Preact 核心团队成员 Marvin Hagemeister 写了一篇文章[《Speeding up the JavaScript ecosystem, one library at a time》](https://marvinh.dev/blog/speeding-up-javascript-ecosystem/)，相比切换到 Rust 或 Go 重写 JavaScript 工具，现有工具生态中也有不少小的性能问题值得解。
* Jake Lazaroff 写了一篇文章[《Tailwind is a Leaky Abstraction》](https://jakelazaroff.com/words/tailwind-is-a-leaky-abstraction/)，通过 3 个例子指出 Tailwind 实现背后的抽象泄漏，一旦遇到还是挺糟心的，尤其是第三个选择器重复写的例子。
* Addy Osmani 写了一篇文章[《Debugging Tactics》](https://addyosmani.com/blog/debugging-tactics/)，包含他的一些「调试战术」，有些更有效，有些更常用，但常用的并不一定有效。「提出正确的问题，你会更快地达到你的目标。」
* Bramus 分享了他在 Web Directions Summit 2022 上分享的[《CSS Architecture》](https://www.bram.us/2022/12/02/css-architecture-2022-12-01-web-directions-summit/)，新的一年有大量新的 CSS 功能涌出，他选了其中 4 个做深入分享，包括 CSS Layers、CSS 嵌套、Scoped Style 和 :has 伪类。
* 如果你有文档需求，可能会对[《Diátaxis》](https://diataxis.fr/)感兴趣。这是一个「技术文档框架」，名字来自于古希腊语 δῐᾰ́τᾰξῐς，意思是 dia（"跨越"）和 taxis（"安排"）。他把[技术文档分 4 类](https://t.me/yqtalk/15)，教程、操作指南、技术参考和解释。不同类型的结构不同，满足不同的用户需求，达到不同的目的，并需要不同的创作方法。

## Umi 和我
> 关于 Umi 和我最近的进展。

* Umi 例行更了两个版本（每周一版），大部分是 bugfix。此外，值得一提的是梳理了[《CSS 方案 2022》](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247485944&idx=1&sn=bf14fc6a9fd926e63dbe17a4949489ce&cur_album_id=2199691505051729920#rd)，同时对比了 styled-components 和 emotion 之间的差异，发现从下载量、api、尺寸、性能、工具支持方面都相差无几，最终选择了前者。
* 新建了个 Telegram 频道[《云谦的自说自话》](https://t.me/yqtalk)，欢迎订阅。
* 趁黑五的机会花 $139 入手了 Josh W Comeau 的 [《CSS for JavaScript Developers》](https://courses.joshwcomeau.com/css-for-js)，虽然自觉地 CSS 水平非常可以，但看完后还是收获颇丰。推荐给星球的同学后，发现切地区可以用 $50 左右拿下… 黑五还 5 折入了[《Three.js Journey》](https://threejs-journey.com/)。
* 用 [Mid Journey](https://www.midjourney.com/) 入门了 prompt engineer，$30/M 每月即可无限制使用。有点上瘾，分别给 Umi 和 Bigfish 生成了一些奇怪的 Logo，还玩了下自己的照片。。上瘾的点在于他有 Discord 社区，这里可以其他人的 Prompt 以及出的图，看到好的又会给自己新的灵感。
* 试了下 OpenAPI [新发布的 ChatGPT 模型](https://openai.com/blog/chatgpt/)，以对话的形式互动，有上下文所以可以回答后续问题，可以用来快速生成废话文学（或者公众号文章）。但需要注意的是，他可能会[一本正经地胡说八道](https://t.me/yqtalk/23)。中国区不能注册，淘宝上花 9 块钱买个账号切日本代理即可，门槛极低。
* 了解了下 [T3 App 架构](https://create.t3.gg/)。T3 App 是一套全栈的技术栈，一个脚手架，包含客户端的 Next.js、Tailwind，服务端的 Prisma、Next Auth，API 侧的 tRPC。主打类型安全，所以 T3 的 T 即 Typed（类型安全）。3 个 T 分别是 React 前端、数据库客户端和 API 调用端的类型安全。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 200 多篇文章，包含了我们最新的观点和见解。以下是近两周的星球更新，访问「q.sorrycc.com」了解更多。

* 217 - 《CSS 技巧》
* 218 - 《价值 399 美元的 CSS 课程是啥体验》
* 219 - 《T3 App》
* 220 - 《CSS 方案 2022》
* 221 - 《Git 技巧》
* 222 - 《styled-components vs. emotion》
* 223 - 《Mid Journey》
* 224 - 《CSS 新特性：Layers、嵌套、Scoped、has 伪类》
* 225 - 《React + TypeScript 最小知识集》

