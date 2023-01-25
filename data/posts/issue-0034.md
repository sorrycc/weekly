---
title: "Vitest、设计模式、Milkdown、防御性 CSS"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01aJnNa61gmmGbwcHfl_!!6000000004185-0-tps-1920-1280.jpg"
titleImageCaption: "lyndaann1975 @ unsplash"
publishedAt: "2021/12/27"
---


## ❄️ TL;DR

🎄 Vitest<br />
🎄 设计模式<br />
🎄 Milkdown<br />
🎄 防御性 CSS<br />
🎄 Web 最好的时光<br />
🎄 TDesign<br />
🎄 svemix<br />
🎄 HTTP/3<br />


## ⚡ 展开讲讲

### Vitest
https://github.com/vitest-dev/vitest

![](https://img.alicdn.com/imgextra/i4/O1CN010lGoZN2AM9nJnm108_!!6000000008188-0-tps-330-330.jpg)

Vitest 开源了，今天翻了翻，做一些摘要。感兴趣的可以用 [stackblitz.com](https://stackblitz.com/edit/node-xifxdq) 先跑个 DEMO。

Vitest 顾名思义是 Vite + Test。作为测试工具，对标的是 Jest，解的问题是 Vite 项目用 Jest 的配置复杂度和功能冗余问题。因为像文件编译、Module Graph、热更新等 Vite 里已做过一遍，Jest 再有单独一套就重复了。按这个思路，感觉可能还会有基于 Vite 的 Linter 工具出现。

说下优点。Vitest 因为基于 Vite，不安装 Vite 时包尺寸仅有 2.81M；速度方面还没具体体感，因为 jest + esbuild 也可以很快；有个未发布的 [UI 功能](https://github.com/vitest-dev/vitest/tree/main/packages/ui)还挺期待的。

缺点还是太新和缺乏积累，我个人比较喜欢用「厚重」的有长期积累的工具，暂不会使用 Vitest。基于 Vite 的项目可以尝试下，否则建议观望。

技术栈是方面调研过程中最有趣的事，看 Vitest 的技术栈基本上可了解测试相关的各种底层库。比如 tinypool 用于基于 worker 的多线程，chai 用于断言，tinyspy 用于 mocking，jsdom 或 happy-dom 用于 DOM mocking，c8 用于代码覆盖率。

### 设计模式
https://www.patterns.dev/

![](https://img.alicdn.com/imgextra/i2/O1CN01bNA00T1DgFqQaEFrf_!!6000000000245-0-tps-1600-730.jpg)

Addy Osmani 出品，免费电子书。

设计模式是软件开发中很基础的一部分。过去几年 Web 开发生态发展很快，一些以前有名的设计模式可能没那么有价值，同时也有新设计模式加入，用新技术解决现代问题。

过去 5 年，React 发展迅猛，是目前下载量最多的框架，见上图。基于 React 的流行，以及新版本 React 引入的 Hooks，传统设计模式需要修改、优化，同时也需要新的设计模式来解决相关问题。

### Milkdown
https://github.com/Saul-Mirone/milkdown

![](https://img.alicdn.com/imgextra/i4/O1CN01iFczPy1fdmx9TiHMu_!!6000000004030-1-tps-880-447.gif)

插件驱动的 WYSIWYG Markdown 编辑器框架。

### 防御性 CSS
https://ishadeed.com/article/defensive-css/

![](https://img.alicdn.com/imgextra/i3/O1CN01fSqDqJ1nwa8E9H0h9_!!6000000005154-0-tps-1600-497.jpg)

CSS 是静态的，但 HTML 内容是动态的，所以虽然当时是正常的，但未来可能随时有 CSS 问题，这就需要这篇文章介绍的防御性 CSS 片段，让未来尽可能地少出问题。文中包含的片段涉及各个方面，从 flex、spacing、长内容、到水平 media queries、图上文本、图片最大宽等。

我个人的想法是这些点是否可以通过工程化的方式解决，因为要每个开发者都去记那么多细碎的点，DX 实在不怎么样。

### Web 最好的时光
https://www.simeongriggs.dev/there-has-never-been-a-better-time-to-build-websites

![](https://img.alicdn.com/imgextra/i3/O1CN01A6ZrFu1bjVR30EP05_!!6000000003501-0-tps-1176-394.jpg)

作者有 25 年的 Web 经验。25 年前，要周末才能申请 30 分钟的图书馆网络访问，然后用软盘 copy 网页和图片回家，用 Notepad 离线编程。而现在，基于现代 Web 开发，让想法和实现的距离非常短。

作者的组合是 Google + YouTube + Remix + Tailwind.css + Github Copilot + Sanity。Google + Youtube 用于学习；Remix 和 Next.js 框架交相辉映，虽然作者更推崇 Remix，但新项目还是用了 Next.js；Tailwind.css 用于根治 CSS 问题；Github Copilot 解手动上 Stack Overflow 搜索 + Copy 的问题；Sanity 是作者认为最好的 CMS。

### TDesign
https://github.com/Tencent/tdesign

![](https://img.alicdn.com/imgextra/i1/O1CN01fu6R771IFIc1N250N_!!6000000000863-0-tps-1600-900.jpg)

TDesign 是来自腾讯内部近 300 名设计师与开发者共同打造，经由 500+ 项目使用、验证和锤炼过的企业级设计体系， 秉承包容、多元、进化、连接的价值观，TDesign 期望与用户、行业及合作伙伴等一起打造具有竞争力的产品体验。

### svemix
https://github.com/svemix/svemix

The Full-Stack addition to SvelteKit. Write your server code inside svelte files, handle sessions, forms and SEO easily.

Remix 的 Svelte 版本。

### HTTP/3
https://requestmetrics.com/web-performance/http3-is-fast

![](https://img.alicdn.com/imgextra/i3/O1CN01Rx9XPV1yhtCDDjpyR_!!6000000006611-0-tps-1144-353.jpg)

上图是作者在同一个浏览器里，用不同版本 HTTP 协议，访问同一个网站 20 次的 benchmark 数据，可以看出 HTTP/3 提升明显。快主要是因为 Real Multiplexing 和 0-RTT。

