# MDH 前端周刊第 34 期：Vitest、设计模式、Milkdown、防御性 CSS

**这是 「MDH：前端周刊」 第 0034 期，发表于：2021/12/27。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01aJnNa61gmmGbwcHfl_!!6000000004185-0-tps-1920-1280.jpg)

封面图：lyndaann1975 @ www.unsplash.com 。


❄️ TL;DR
------

🎄 Vitest<br />
🎄 设计模式<br />
🎄 Milkdown<br />
🎄 防御性 CSS<br />
🎄 Web 最好的时光<br />
🎄 TDesign<br />
🎄 svemix<br />
🎄 HTTP/3<br />
💵 我的知识星球<br />


⚡ 展开讲讲
------

### Vitest

[https://github.com/vitest-dev/vitest](https://github.com/vitest-dev/vitest)

​​![](https://lh5.googleusercontent.com/2wHmmLxZAS7xYmceQOHtFf5CwOtPefCMXEp0ZLk4hupyq_VtZsVJ5C0s1v3MVItVMm7ywBjY4W1b1Jr0GhaB0xeYmcpouPUbfV6RCEDW8DE6eJ8dMy5Nq1LT7OtJ3-Xctj38Kkw_)

Vitest 开源了，今天翻了翻，做一些摘要。感兴趣的可以用 [stackblitz.com](https://stackblitz.com/edit/node-xifxdq) 先跑个 DEMO。

Vitest 顾名思义是 Vite + Test。作为测试工具，对标的是 Jest，解的问题是 Vite 项目用 Jest 的配置复杂度和功能冗余问题。因为像文件编译、Module Graph、热更新等 Vite 里已做过一遍，Jest 再有单独一套就重复了。按这个思路，感觉可能还会有基于 Vite 的 Linter 工具出现。

说下优点。Vitest 因为基于 Vite，不安装 Vite 时包尺寸仅有 2.81M；速度方面还没具体体感，因为 jest + esbuild 也可以很快；有个未发布的 [UI 功能](https://github.com/vitest-dev/vitest/tree/main/packages/ui)还挺期待的。

缺点还是太新和缺乏积累，我个人比较喜欢用「厚重」的有长期积累的工具，暂不会使用 Vitest。基于 Vite 的项目可以尝试下，否则建议观望。

技术栈是方面调研过程中最有趣的事，看 Vitest 的技术栈基本上可了解测试相关的各种底层库。比如 tinypool 用于基于 worker 的多线程，chai 用于断言，tinyspy 用于 mocking，jsdom 或 happy-dom 用于 DOM mocking，c8 用于代码覆盖率。

### 设计模式

[https://www.patterns.dev/](https://www.patterns.dev/)

![](https://lh4.googleusercontent.com/A7kIrYGO4jdBPKc14A14J6_v2SHRFbOs7x5xdI_5DvAmQ7sN-tiuvGzGhYy1Ly_XT894rIBgqA4T9uUaPx0DppRUFsEdeUT6hizp6Nhu8Rq8QFpbbnmv_wNhW0EK9xCK-HPmYPjR)

Addy Osmani 出品，免费电子书。

设计模式是软件开发中很基础的一部分。过去几年 Web 开发生态发展很快，一些以前有名的设计模式可能没那么有价值，同时也有新设计模式加入，用新技术解决现代问题。

过去 5 年，React 发展迅猛，是目前下载量最多的框架，见上图。基于 React 的流行，以及新版本 React 引入的 Hooks，传统设计模式需要修改、优化，同时也需要新的设计模式来解决相关问题。

### Milkdown

[https://github.com/Saul-Mirone/milkdown](https://github.com/Saul-Mirone/milkdown)

![](https://lh3.googleusercontent.com/5E74Hvhs0ngWsin2L-ahUjry91fn7tSw7egBLsM1MofEHJ4FrCToc5L7PHe5rgIK5uebcPd4ihh3Vfu9OEgokLhK0Y4R0JpkvYiMyGNFghS3_ZhEzBzkIhRKhNG7eJ-qMw2zylSl)

插件驱动的 WYSIWYG Markdown 编辑器框架。

### 防御性 CSS

[https://ishadeed.com/article/defensive-css/](https://ishadeed.com/article/defensive-css/)

![](https://lh6.googleusercontent.com/2RzKdagO5ZPOT1vq7K76_jpGsLhs2-JCyTlNZACxaU05rRdaboSONJdGF9WFHMBr3rIAXuE3yTKemUsfW4HllGie5E9awQoPYo1aJy16QUv_9VdLajANt1u1Y31SfVsMJt1aNX0Z)

CSS 是静态的，但 HTML 内容是动态的，所以虽然当时是正常的，但未来可能随时有 CSS 问题，这就需要这篇文章介绍的防御性 CSS 片段，让未来尽可能地少出问题。文中包含的片段涉及各个方面，从 flex、spacing、长内容、到水平 media queries、图上文本、图片最大宽等。

我个人的想法是这些点是否可以通过工程化的方式解决，因为要每个开发者都去记那么多细碎的点，DX 实在不怎么样。

### Web 最好的时光

[https://www.simeongriggs.dev/there-has-never-been-a-better-time-to-build-websites](https://www.simeongriggs.dev/there-has-never-been-a-better-time-to-build-websites)

![](https://lh4.googleusercontent.com/nPSPbFhlL50SJp0ntFmekuiFhaH2mmV1FuHjrp2bZMF2nmokmxajg0AI_MMt7hphmts9vLay71wfZSU_3wWAv4fdJgmM1r_B5rl73eW_dvj_leet8Qobl72ihMAwoHD-Se0MJt07)

作者有 25 年的 Web 经验。25 年前，要周末才能申请 30 分钟的图书馆网络访问，然后用软盘 copy 网页和图片回家，用 Notepad 离线编程。而现在，基于现代 Web 开发，让想法和实现的距离非常短。

作者的组合是 Google + YouTube + Remix + Tailwind.css + Github Copilot + Sanity。Google + Youtube 用于学习；Remix 和 Next.js 框架交相辉映，虽然作者更推崇 Remix，但新项目还是用了 Next.js；Tailwind.css 用于根治 CSS 问题；Github Copilot 解手动上 Stack Overflow 搜索 + Copy 的问题；Sanity 是作者认为最好的 CMS。

### TDesign

[https://github.com/Tencent/tdesign](https://github.com/Tencent/tdesign)

![](https://lh4.googleusercontent.com/74LFfcV2etV3Jj-OmvqJMCsF3d_FnN3hYZh48zCdLufzwIMHreLXWNoXRxMMsf5Q-RiU7_ObygSkEoXjaL02xk3jmsSpxQeyUO65p7qqk5T9plGCzZdYD97aM6KDjkl91XSKrO1O)

TDesign 是来自腾讯内部近 300 名设计师与开发者共同打造，经由 500+ 项目使用、验证和锤炼过的企业级设计体系， 秉承包容、多元、进化、连接的价值观，TDesign 期望与用户、行业及合作伙伴等一起打造具有竞争力的产品体验。

### svemix

[https://github.com/svemix/svemix](https://github.com/svemix/svemix)

The Full-Stack addition to SvelteKit. Write your server code inside svelte files, handle sessions, forms and SEO easily.

Remix 的 Svelte 版本。

### HTTP/3

[https://requestmetrics.com/web-performance/http3-is-fast](https://requestmetrics.com/web-performance/http3-is-fast)

![](https://lh4.googleusercontent.com/wDtOkFNoXMDe_qsqyaauuHMMYQy668uhW8Siw3xpKQHq4dY6v4RViRQcYueaKtyiTWHgRHvy8J58kGYAfavdA_g2sfv6S_pvjdvNHgi2gDu83OcGIotvrfy2degoAsMJQOMWuS73)

上图是作者在同一个浏览器里，用不同版本 HTTP 协议，访问同一个网站 20 次的 benchmark 数据，可以看出 HTTP/3 提升明显。快主要是因为 Real Multiplexing 和 0-RTT。

### 我的知识星球

我在知识星球开了个专栏，付费的那种。专栏名叫「云谦和他的朋友们」。我会写一些关于前端、代码、框架、面试、趋势、工作和方法论相关的观点，新技术调研笔记，MDH 前端周刊的扩展日报等等。

感兴趣的朋友可以关注。

![](https://img.alicdn.com/imgextra/i1/O1CN01jok7yi21bQNgJeNQJ_!!6000000007003-2-tps-1200-1517.png)

以下是最近两周更新：

🍀 前端流量密码<br />
🍀 2022 前端会有什么新变化<br />
🍀 我的面试套路<br />
🍀 一个 React 渲染问题<br />
🍀 Umi 周会分享：新技术的启发 @ 2021.12.16<br />
🍀 小贴士：别用匿名 default 导出<br />
🍀 资源整理：前端视角学 Rust<br />
🍀 MDH 前端周刊写作流程<br />
🍀 我的信息流 2021.12<br />
🍀 MDH 前端周刊和知识星球<br />
🍀 ESM Bundless 方案<br />
🍀 新出的 Vitest<br />
🍀 评委和待定<br />
🍀 Umi 4 Test RFC<br />
🍀 Low Import 开发模式<br />
🍀 2021 总结极简版<br />
🍀 约束与开放<br />
🍀 esbuild 最新两个插件特性<br />


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
