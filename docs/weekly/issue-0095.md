---
title: "-10x 工程师、Next.js、WebGPU、Chakra UI、写作"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01oVK5W11FifB6TjCaM_!!6000000000521-2-tps-1456-816.png_1200x1200.jpg"
titleImageCaption: "an asian city, in the style of japanese traditional art influence"
publishedAt: "2023/04/10"
draft: true
---

## 一周要事

。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。

 - remix [v1.15.0](https://github.com/remix-run/remix/releases/tag/remix%401.15.0) 发布，API 更名等。
 - valtio [v2](https://github.com/pmndrs/valtio/discussions/703) RFC，设计更改等。
 - Vue 3 新增 [defineSlots](https://github.com/vuejs/core/pull/7982) 。
 - Node [v20](https://github.com/nodejs/release#release-schedule) 将于 4.18 发布。
 - Angular 支持 [hyration](https://github.com/angular/angular/pull/49666) 。
 - [contentlayer](https://github.com/contentlayerdev/contentlayer/releases/tag/v0.3.1) 支持 RSC 。
 - Github 开启[组织赞助](https://github.blog/2023-04-04-whats-new-with-github-sponsors/)。
 - Electron [v24](https://www.electronjs.org/zh/blog/electron-24-0) 发布，API 更改等。
 - Bun [v0.5.9](https://bun.sh/blog/bun-v0.5.9) 发布，测试功能改进等。
 - Angular Signals [RFC](https://github.com/angular/angular/discussions/49685) 。
 - Chrome [v112](https://developer.chrome.com/en/blog/new-in-chrome-112/) 发布，CSS 嵌套支持等。
 - Unocss [10k](https://github.com/unocss/unocss) stars 。
 - [WebGPU](https://developer.chrome.com/en/blog/webgpu-release/) 在 Chrome 113 默认启用。
 - 暂停 Chrome 扩展 Manifest [v2](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/zQ77HkGmK9E/m/HjaaCIG-BQAJ) 的淘汰。
 - Vercel [Edge Config](https://vercel.com/blog/vercel-edge-config-is-now-generally-available) 已普遍可用。
 - Nextjs [v13.3](https://nextjs.org/blog/next-13-3) 发布，新路由约定等。
 - Vue v3.3 新增 [`defineModel`](https://github.com/vuejs/core/pull/8018) 。
 - AWS Lambda 支持[流式](https://aws.amazon.com/cn/about-aws/whats-new/2023/04/aws-lambda-response-payload-streaming/)响应。
 - Vite [v4.3](https://twitter.com/sapphi_red/status/1644647019661893633) 比 Turbopack 启动快。

## 深度好文
> 好文推荐。好文总结部分基于 ChatGPT 总结 + 人工微调的方式实现，好处是量大、客观和低成本。欢迎通过 https://mdhweekly.com/articles.xml 订阅「深度好文」的实时更新。

- [《如何成为一名 -10x 工程师》](https://taylor.town/-10x)。本文指出，虽然 “10 倍工程师” 可能是神话，但确实存在 “-10 倍工程师”。为了成为一名 “-10 倍工程师”，可以采用以下策略：使 10 个工程师的输出无效；尽可能在开发过程中更改需求以避免责任；创建 400 小时的忙碌工作；让团队执行类似于工作的任务；创建毫无意义的仪式等。此外，还可以浪费 400 小时的编译 / 构建时间，编写毫无意义的测试，将 10 个工程师困在技术讨论中等等。
- [《程序员被打断：中断和上下文切换的真正成本》](https://contextkeeper.io/blog/the-real-cost-of-an-interruption-and-context-switching/)。编程中的中断和上下文切换是直接影响程序员日常生产力的两个最昂贵因素。虽然没有永久避免它们的方法，但有一些有趣的策略可以最小化它们的影响。根据各种科学研究，经过中断后需要至少 10-15 分钟才能重新进入 “区域”（Parnin:10，vanSolingen:98）。基于任务的复杂性和你的精神能量，肯定需要更多的时间。当你有很多未完成的代码时，中断发生时，返回到流状态可能会更具挑战性。
- [《Next.js 13.3》](https://nextjs.org/blog/next-13-3)。Next.js 13.3 发布，新增了社区请求的流行功能，包括：基于文件的元数据 API、动态 Open Graph 图像、应用程序路由器的静态导出、并行路由和拦截等。其中，基于文件的元数据 API 可以方便地自定义页面以改善 SEO 和 Web 共享；动态 Open Graph 图像可以使用 JSX、HTML 和 CSS 生成 OG 图像；应用程序路由器的静态导出支持完全静态导出，可避免在客户端加载不必要的 JavaScript 代码，减小捆绑大小并实现更快的页面加载；并行路由和拦截可以同时在同一视图中呈现一个或多个页面，如复杂的仪表板或模态框。
- [《Chrome 推出 WebGPU》](https://developer.chrome.com/blog/webgpu-release/)。Chrome 团队宣布，WebGPU 现在默认在 Chrome 113 中可用，目前处于 Beta 渠道。WebGPU 是一种新的 Web 图形 API，提供了显著的优势，例如相同图形的 JavaScript 工作量大大减少，机器学习模型推断提高了三倍以上。这是由于更灵活的 GPU 编程和访问 WebGL 无法提供的高级功能。此次 WebGPU 的首次发布可在 ChromeOS、macOS 和 Windows 上使用，其他平台的支持将在今年晚些时候推出。
- [《Chakra UI 的未来》](https://www.adebayosegun.com/blog/the-future-of-chakra-ui)。该项目的创建者 Segun Adebayo 宣布计划将 Chakra UI 转变为"设计系统基础设施"，以满足对组件库不断变化的期望。该计划包括将单体代码库分解为较小的独立项目，这些项目与框架无关，易于维护。其中一些新项目包括 Panda，一个零运行时的 CSS-in-JS 系统；Zag，一个用于构建 Chakra UI 中所有组件的低级状态机库；Ark，一个基于 Zag.js 的无头组件库；以 Ultra，一个用于创建、管理和分发设计代币的SaaS平台。
- [《为什么你今天应该写一篇博客文章》](https://dzone.com//articles/why-you-should-write-blog-post)。本文列举了维护博客的几个原因，包括技术备忘录、分享知识、职业简历、记录人生和保持联系等。博客可以成为你未来自己的技术备忘录，也可以与他人分享你的发现，同时也是展示你职业能力和价值观的一个平台。此外，博客还可以成为记录你人生的一部分，帮助你保持与远方朋友的联系。无论如何，开始写博客吧，即使你认为自己没有什么好写的或者不够好的写手。
- [《2023 年从两个角度学习 React》](https://www.robinwieruch.de/learning-react/)。本文讨论了如何在 2023 年学习 React，提出了两种不同的方法：作为一个库或者作为一个框架。新版 React 文档建议使用完全集成的框架（例如 Next.js）而不是像 Vite 或 Parcel 这样的打包工具来使用 React。作者认为，在完全转向框架之前，仍然推荐使用其他 React 入门工具。最后，作者建议初学者既要学习 React 的基础知识，也要学习如何将其应用于框架中。可以先从框架开始，但遇到 React 的基础知识时，需要回到 React 的文档中去学习。
- [《从 Webpack 迁移到 Remix》](https://remix.run/blog/migrate-from-webpack)。Remix 宣布推出基于 Webpack 的编译器和开发服务器，以帮助使用 Webpack 的应用程序逐步迁移到 Remix。这个版本可以让用户从第一天开始使用所有的 Webpack 加载器和插件，并逐渐将每个路由迁移到 Remix。Remix 还提供了一个迁移指南，以帮助 Webpack 用户更容易地进行迁移。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 偷懒了，每周未发版。
- 制作了[几个 Twitter List 的 RSS 订阅源](https://t.me/yqtalk/320)，包含前端、AI，欢迎订阅。功能有两个，1）把 twitter list 转成 rss，可以加各种 filter 提升信噪比，比如只包含带链接和 Fav 数大于 200 的，2）把标题用 DeepL 翻译成中文。
- 受邀成为 [GIAC 2023 深圳](https://giac.msup.com.cn/2023sz/home)的出品人，梳理了前端方向，并确定一些方向、团队和同学做分享，都是我自己也想听的内容，哈哈。
- 梳理了一些 SOP，包括币安转账 SOP、MDH 周刊写作和发布 SOP、日更写作 SOP 等，不再需要把这些内容记录在脑子里了，感觉换个人也能完成 MDH 周刊的写作了。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 280 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 285 - 《MiniCC 和 OpenAI Embedding》
- 284 - 《手写 Toy Bundler》
- 283 - 《前端方向和出品人选题》

## 每周一图

![](https://img.alicdn.com/imgextra/i1/O1CN01naZcT81LhBaxkXm3i_!!6000000001330-0-tps-500-621.jpg)
