---
title: "Million 自动模式、Fresh、公开写作、Suspense 节流"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01ZY5uA31jLhq3Jy4MU_!!6000000004532-0-tps-1456-816.jpg"
titleImageCaption: ""
publishedAt: "2023/08/21"
draft: true
---

## 一周新闻

- [Million（React 的 VDOM 替代品）推出自动模式。](https://twitter.com/aidenybai/status/1689773623827943424)使用 npm i million 让你的 React 项目「快达 70%」，支持 Next.js、RSC、Vite、Astro 等。
- [CodeGeeX：一款开源的国产 AI 辅助编码工具。](https://github.com/THUDM/CodeGeeX)
- [zod 发布 3.22。](https://twitter.com/colinhacks/status/1691172205516984322)支持 .readonly()，背后基于 Object.freeze() 实现。
- [Firebase 迁移 Blog 到 Astro。](https://astro.build/case-studies/firebase/)Lighthouse 评分提升，部署时间从小时级减少到分钟级。
- [Rollup 计划切换解析器从 acorn 到 swc 。](https://github.com/rollup/rollup/pull/5073) 方案是直接使用 swc 的 Rust 绑定，将 AST 转换为二进制格式，然后再作为（Array）Buffer 传递给 JavaScript这相比直接传 AST 的 JSON 格式会快很多技术栈是 Rust + SWC + napi-rs + wasm-pack。
- [Fresh 发布 1.4。](https://deno.com/blog/fresh-1.4) 主要是改进 Fresh 的开发者体验，以及让使用共享布局和特定路由的模块等更加容易。
- [Chrome 发布 117 Beta。](https://developer.chrome.com/blog/chrome-117-beta/)新增 6 个 CSS 特性。

## 深度好文

- [公开写作的一些策略。](https://jvns.ca/blog/2023/08/07/tactics-for-writing-in-public/) 作者提到了一些策略，包括讨论事实、分享故事、提出技术问题、修正错误、寻求经验和例子而非意见、提供背景信息、避免无聊的对话、预防常见建议、设定界限以及不与人争论作者还强调了从负面评论中获取有价值的东西，并解释了自己如何应对批评。
- [神奇的闭包以及如何在 React 中找到它们。](https://www.developerway.com/posts/fantastic-closures) 文章首先介绍了 JavaScript 中的闭包概念，并解释了闭包是如何形成的然后，文章讨论了在 React 中常见的导致陈旧闭包问题的场景，包括 useCallback、Refs 和 React.memo最后，文章介绍了一种通过使用 Refs 来避免闭包陷阱的技巧这种方法可以确保回调函数始终具有对最新状态的访问权限，同时保持性能优化。
- [自己编写函数与使用开源模块之间的界限。](https://paularmstrong.dev/blog/2023/08/14/the-line-between-writing-functions-yourself-and-using-open-source-modules/)
- [我如何制作带注释的演示文稿。](https://simonwillison.net/2023/Aug/6/annotated-presentations/)
- [React Suspense 的节流问题。](https://andreigatej.dev/blog/on-react-suspense-throttling/) 首先，文章解释了为什么被挂起的组件会抛出错误，这是因为 Suspense 模拟了错误边界的行为然后，通过一个基本示例，展示了 Suspense 组件的工作原理接着，讨论了嵌套 Suspense 组件的情况，并详细说明了当一个 Suspense 组件恢复渲染时，如何延迟显示其子组件的 fallback
- [React 服务器操作能否最终修复表单？本文以构建一个允许用户上传视频到 Mux 的应用程序为例，介绍了如何使用 React Server Actions 进行数据提交。](https://www.mux.com/blog/what-are-react-server-actions)
- [Firebase 和 Supabase 有什么区别？。](https://blog.bitsrc.io/firebase-vs-supabase-6434980664d8)
- [与 Astro 一起升空。](https://remotesynthesis.com/blog/lifting-off-with-astro/) 介绍 Astro 的 Why 和 How。
- [我们如何将 JavaScript 捆绑程序的大小减少 33%。](https://dropbox.tech/frontend/how-we-reduced-the-size-of-our-javascript-bundles-by-33-percent) 简单说就是 Code Splitting 和 Tree Shaking，基于 Rollup。
- [使用 Bun 构建类 Next.js 的应用。](https://blog.logrocket.com/build-fast-next-js-like-app-bun/)
- [构建第一个LLM应用程序所需的所有知识。](https://towardsdatascience.com/all-you-need-to-know-to-build-your-first-llm-app-eb982c78ffac)

## 工具资源

- [Apple TV 作为代理工具。](https://twitter.com/pengchujin/status/1691846009197056126)
- [Whisper JAX，支持 Youtube 和音频的转录和翻译。](https://huggingface.co/spaces/sanchit-gandhi/whisper-jax)
- [Web Check。](https://web-check.xyz/)
- [Sprite your SVGs。](https://sprite-your-svgs.vercel.app/)
- [中文 Newsletter 导航。](https://www.notion.so/kfang/Newsletter-68ee46c0a4574f659fb8a873ead438c6)
- [让你的阿里云盘文件下载速度起飞，解决限速（待验证）。](https://steamzg.com/32592/)
- [通识千书书单-聪明的阅读者。](https://docs.qq.com/sheet/DY2RmcVVMVE9Qd3JV)

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegram 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- 8.19 开始 9 日的例行暑假带娃旅行，行程是杭州、成都、松潘古城、九寨沟、若尔盖、红原、古尔沟、成都、杭州。
- [听同事推荐，买了《陈天 · Rust 编程第一课》这个专栏，查漏补缺。](https://time.geekbang.org/column/intro/100085301?tab=catalog)
- [买了 2023-09-10 周日的核聚变（北京），上一次开已经是好多年前了，准备带小娃去逛逛。](https://show.bilibili.com/platform/detail.html?id=75650)
- [再推荐下博德之门3 ，评分比王国之类还要高，今年的黑马。](https://store.steampowered.com/app/1086940/Baldurs_Gate_3/?l=schinese) 第一次接触这种 CRPG（回合制角色扮演）类型的游戏，出之前没想到会这么好玩，最近每晚睡前都至少玩 1h 推推进度，要不是年假所剩无几，肯定得请几天假通关后再去上班了。
- [一个上时代的文字游戏，适合摸鱼。](https://adarkroom.doublespeakgames.com/?lang=zh_cn)想不到的是，玩到最后，JavaScript 报错了。
