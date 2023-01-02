---
title: "Next.js 13.1、Bun 0.4、WASM napi、React Query"
titleImage: "https://image-1256177414.cos.ap-shanghai.myqcloud.com/uPic/CZSsBU.jpg"
titleImageCaption: ""
publishedAt: "2023/01/02"
---

## 一周新闻
> 推荐下 YingCi 的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯，也是本文新闻的重要渠道之一。也可订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- Next.js [发布 13.1](https://nextjs.org/blog/next-13-1)，包括 app 目录改进、内置 next-transpile-modules 的能力、支持 babel-plugin-transform-imports 的能力、内置 Edge Runtime 可稳定运行 API 路由、Turbopack 大量改进等。
- Bun [发布 0.4](https://github.com/oven-sh/bun/releases/tag/bun-v0.4.0)，引入了极快的 bunx。
- Ant Design [发布 5.1](https://github.com/ant-design/ant-design/releases/tag/5.1.0)，新增 App 包裹组件、QRCode 二维码组件和 Watermark 水印组件。
- 发现有人用一个网站来整理 [WASM 的时间线](https://wasm5.org/)。
- devongovett 实现了 [WASM 版的 napi](https://github.com/devongovett/napi-wasm)，让 native node 依赖可以跑在浏览器里，已跑通大部分 napi_rs 的测试用例。
- Josh W Comeau 的新课《The Toy of React》[将于 2023.1.23 发布](https://www.joshwcomeau.com/email/jor-updates-006-launch-date/)。
- 发现一个[开源版的 ChatGPT](https://github.com/lucidrains/PaLM-rlhf-pytorch)，但是基于 PaLM 实现的 PLHF。
- Tamagui [发布 1.0](https://tamagui.dev/blog/version-one)，让你可以构建跨平台的 React 应用，支持 Web 和 RN。
- Jotai 2 将[支持在 React 外读写 atom 值](https://twitter.com/dai_shi/status/1608790364181377025)，同时在 Jotai 1.11 中也支持，期待已久的功能。
- 发现一个库 [mdxjs-rust](https://github.com/wooorm/mdxjs-rs)，用 Rust 实现 MDX 到 JavaScript 的编译，对于文档站的 SSG 部署来说会更快。
- 来自 Remotion 的 [Github Unwrapped](https://www.githubunwrapped.com/)，输入 github id 即可得到一个个性化的年度 Review 视频。
- [GitHub Contributions Chart Generator](https://github-contributions.vercel.app/) 可以生成历年的 Github 贡献热力图。
- 一个开源的建立编辑器 [Reactive-Resume](https://github.com/AmruthPillai/Reactive-Resume)，推荐给有需要的同学。

## 深度好文
> 好文推荐，但是感觉最近好文好少。

- 对性能方向感兴趣的可以关注 [《Web Performance Calendar 2022》](https://calendar.perfplanet.com/2022/)，每年 12 月份会写 31 篇性能相关的文章。
- Lee Robinson 写了一篇[《Why I'm Optimistic About JavaScript's Future》](https://leerob.substack.com/p/why-im-optimistic-about-javascripts) 表达对 JavaScript 未来的看好。1）浏览器部分有 IE 时代的终结和浏览器引擎标准对齐，现在的 img 已可无需 JavaScript 实现 lazy loading、宽高比、基于 CSS/SVG 的模糊图像占位符等能力，2）Server 部分，像 Fetch、Request、Response 等 100+ API 在 Node 和 Browser 之间无缝无补丁使用，3）Edge 里的 JavaScript runtime 通常是 Node.js API 的子集。
- Ryan Carniato 通过一篇[《JavaScript Frameworks - Heading into 2023》](https://dev.to/this-is-learning/javascript-frameworks-heading-into-2023-nln)带我们回顾 2022 年的 JavaScript 框架。一些趋势包括，1）2022年框架思想领袖之间最大的一致，那就是路由属于服务器，2）TypeScript从一个选项变成了许多元框架CLI的默认选项，以及类型安全 API 的 tRPC 和类型安全路由的 TanStack Router，3）水化将成为过去，取而代之的是 Resumable，4）绝大多数元框架支持 Edge Function。
- 看到一篇[《Why You Should Use Islands Architecture》](https://scribe.froth.zone/why-you-should-use-islands-architecture-b4f291708a02)，详细介绍了岛屿架构的来龙去脉及其解的问题。
- 看到一篇[《9 Best Digital Transformation Tools for 2023》](https://scribe.privacydev.net/9-best-digital-transformation-tools-for-2023-207e73088a2f)，除了第一个是明显广告外，其他工具大部分开发者应该都会接触到。
- 看到一篇[《State Management In React With Jōtai》](https://blog.openreplay.com/state-management-in-react-with-jotai/)，有余力的同学可以赶在 Jotai 2 发布之前入门 Jotai。
- 推荐一篇技术无关的文章[《How To Get Luck》](https://www.swyx.io/create-luck/)。运气虽随机发生，但你可以把自己挪到可以捕捉到更多运气的地方。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行每周四发一版，有趣的功能包括，1）新增 phantomDependency 配置，用于检测幽灵依赖的使用，对于一些项目来说是可以救命的功能，2）完善 dev 启动提示，无网络连接时提示 Network Unavaiable，3）支持 antd 5 的预设算法配置。
- 这两周阳过了，在家办公 6 天，家有两娃，一个上网课，一个提早寒假放飞，于是工作效率略低，后面几天每天早上测抗原盼望着去上班。
- 写了个程序[自动捞前端资讯](https://t.me/yqtalk/67)，已运行 4 天，稳定后会免费放出。
- 完整调研完一遍 React Query、SWR、use-request，分别用了两下午、3 小时、半小时，最终确定 React Query 为我们中台请求方案的选择。
- 花 59$ 买了 [React Query 的官方课程](https://ui.dev/react-query)，看了 50%，看的时候顺手用 yt-dlp 下视频到本地，并用 ffmpeg + whisper-cpp 加上英文字幕。
- 如果你在做答疑，要注意[答疑的不同方式的杠杆率](https://t.me/yqtalk/39)，相比之下，「记录答案并分享链接且后续可被搜索到」是其中相对更好的方式。
- 周五下班前拍脑袋出了个[「前端计划交换」计划](https://docs.qq.com/form/page/DY3F5a3NaUXhib0Z4#/fill)，已征集到 100+ 反馈。2023 年，你有啥想做的前端领域的事情吗？填入你的计划，1-3 项即可，你将会收获所有填写这份表单同学的计划。截止 2023.1.5。
- 2022 年最后一天梳理了 2022 年终总结，2023 年第一天脑暴了目标并确定了一些，然后整理了其中一些目标的 Roadmap。新的一年尝试用 [Lex Fridman 的方法](https://www.youtube.com/watch?v=0m3hGZvD-0s)组织自己的时间，多 Deep Work。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 230 多篇文章，包含了我们最新的观点和见解。以下是近两周的星球更新，访问「q.sorrycc.com」了解更多。

- 236 - 《2022 年终总结》
- 235 - 《Telegram 机器人》
- 234 - 《极简交互的极致体验》
- 233 - 《SWR 调研笔记》
- 232 - 《2022 年度产品、游戏、硬件和付费服务》
- 231 - 《React Query 笔记：下》
- 230 - 《React Query 笔记：上》

## 每周一图
![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/uPic/telegram-cloud-photo-size-5-6104664484024005124-x.jpg)

