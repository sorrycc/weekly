---
title: "re-render、Resumable React、ESLint 性能、监控"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01B3wSrC28JI5bpyIii_!!6000000007911-2-tps-1536-1024.png_1200x1200.jpg"
titleImageCaption: "Bigfish x 情人节"
publishedAt: "2023/02/13"
draft: true
---

## 一周要事

。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- [WebStorm](https://astro.build/blog/astro-webstorm-support/) 现在支持开发 Astro 。
- [CodeSandbox](https://twitter.com/codesandbox/status/1621542331349454848) 已有 200 万注册用户。
- 使用 eslint 的用户中有[超过 70%](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-3/) 为 TypeScript 开发者。
- pnpm [v7.27.0](https://github.com/pnpm/pnpm/releases/tag/v7.27.0) 发布，以正则匹配并发启动多命令等。
- NextUI [v2](https://github.com/nextui-org/nextui/discussions/1035) 的 css 方案由 Stitches 迁移至 Tailwind 。
- Vercel [Edge Config](https://vercel.com/templates/next.js/maintenance-page) Beta 可用，一个边缘 KV 存储。
- Nodejs 正在向新的 URL 解析器 [ada](https://github.com/ada-url/ada) 迁移。
- Shopify [官网](https://www.shopify.com/)迁移至 remix 。
- Chrome [v110](https://developer.chrome.com/en/blog/new-in-chrome-110/) 发布，支持配置画中画伪类等。
- [Volar](https://github.com/volarjs) 将独立出组织，研发框架无关的嵌入式语言服务。
- React 团队核心成员 [Andrew](https://twitter.com/acdlite/status/1623353741750546439) 加入 Vercel 。
- Github [Team Discussions](https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/) 即将弃用。
- Electron [v23](https://www.electronjs.org/zh/blog/electron-23-0) 发布，自带 Chromium 110 等。
- IOS [在未来](https://www.theregister.com/2023/02/07/mozilla_google_apple_webkit/)可能允许使用非 Webkit 的浏览器引擎，Google 进行了 Blink 的[相关探索](https://www.theregister.com/2023/02/03/googles_chromium_ios/)。
- 在 2022 年，[Safari](https://wpt.fyi/interop-2022) 是 Interop 实现程度最高的浏览器。
- lighthouse [v10](https://developer.chrome.com/en/blog/lighthouse-10-0/) 发布，移除 TTI 指标等。
- Chrome [v111](https://developer.chrome.com/en/blog/chrome-111-beta/) 计划增强 css 函数计算，包括 Color Level 4 、数学函数等。
- Vue 3 使用 [esbuild](https://github.com/vuejs/core/commit/124373db50eafb46c59b362dda1bdb18c3bfc5e4#diff-47407fecafdf5f5cd55403c3de457833ddf9b6fab45253c04e1dc4c7cb4495b1R13) 替换了 rollup 进行构建。
- Nuxt [v3.2.0](https://github.com/nuxt/nuxt/releases/tag/v3.2.0) 发布，配套信息全面的 devtools 等。
- Bun [v0.6.5](https://bun.sh/blog/bun-v0.5.6) 发布，提供 docker 镜像。
- Github 公测多 PR 时的[分组 CI](https://github.blog/changelog/2023-02-08-pull-request-merge-queue-public-beta/) 能力，无需排队等待资源。
- Vue Amsterdam 2023 本周举行，现场[反照](https://elk.zone/m.webtoo.ls/@Akryum)与[视频](https://twitter.com/themarcba/status/1624350244258422788)。

## 深度好文
> 好文推荐。以下是我全文阅读过的部分。

- [《React recursively re-renders child components, but there is a nuance》](https://alexsidorenko.com/blog/react-render-children-prop/)。Alex Sidorenko 的 React 可视化渲染系列文章 +1。通过可视化的方式告诉你为啥通过 children 渲染子组件，能避免 state 变更时子组件 re-render。
- [《Resumable React: How To Use React Inside Qwik》](https://www.builder.io/blog/resumable-react-how-to-use-react-inside-qwik)。关于如何在 Qwik 内使用 React，你可以建立 React 应用程序，而无需在用户的浏览器中加载 React。当然，在你需要交互的时候，还是需要动态加载 React（感觉不一定是件好事，没解决问题，只是把问题转移了，可能在交互时会卡一下）。
- [《Speeding up the JavaScript ecosystem - eslint》](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-3/)。Speeding up 系列的第三篇。1）检测方法是 --cpu-prof + Speedscope（通常还可以用上 hyperfine 跑多次做 benchmark），2）解析器从 @typescript-eslint/parser 换成 @babel/eslint-parser + @babel/preset-typescript 可以节省不少时间，从 2.1s 到 0.6s，缺点是不支持 type-aware 的 linting 规则（我们通常也不会用他们），3）[rslint](https://github.com/rslint/rslint) 值得关注。
- [《Vite with ESLint》](https://www.robinwieruch.de/vite-eslint/)。手把手教你如何在 Vite 项目中加上和 Vite 集成的 ESLint，基于 vite-plugin-eslint。但个人感觉 ESLint 不应该集成（因为会影响构建速度），而应该单独用，同时编辑器里也有提示了，所以在提交和 CI 里做校验就够了。
- [《Custom React Hooks and When to Use Them》](https://thoughtbot.com/blog/custom-react-hooks)。关于自定义 Hooks，是什么、可复用的提取、不可复用的提取、提取数量等，最后还是要注意抽象的代价，抽象不是免费的，有时适当重复反而更好，推荐下 Dan 的 [The Wet Codebase](https://www.youtube.com/watch?v=17KCHwOwgms) 分享。
- [《Interop 2023: continuing to improve the web for developers》](https://web.dev/interop-2023/)。在 2023 年，所有主要的浏览器供应商和其他利益相关者再次合作，以解决顶级浏览器的兼容性问题，包含 26 个重点领域。
- [《2022大前端总结和2023就业分析》](https://mp.weixin.qq.com/s/SicYTABGjXcJJTqYEbL5dQ)。来自狼叔的年度大作，推荐。
- [《基于 Next.js 建立文档站点 - oldj's blog》](https://oldj.net/article/2023/02/03/docs-site-based-on-nextjs/)。感觉 Docaid 的机会，哈哈，完全可定制化、数据与渲染分离。
- [《字节前端监控实践》](https://juejin.cn/post/7195496297150709821)。感觉含金量挺高的，摘录其中错误报警的部分。1）sourcemap 结果可以用 mozila 的 sourcemap 库进行反解，2）为了保密，sourcemap 不会传到公网，而是传给后端存在内部，Sentry 有类似工具（注：sourcemap 构建慢怎么办？并发多跑一次带 sourcemap 的），3）要做堆栈聚合，合并同类错误，4）通过记录 commit + git blame 可以直接分配报错信息到人。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）纯类型体操实现的 [history.push 和 history.replace 的完整路由的类型提示](https://github.com/umijs/umi/pull/10417)，2）新增 confetti 插件，唯一的作用就是在 dev/build 后给你[撒个花](https://t.me/yqtalk/176)。
- MacBook Pro 到货了，花几个小时从 0 开始做配置，再花几个小时把过程整理成文章[《如何从 0 开始配置 Mac》](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247486068&idx=1&sn=ad5bc7fabbcc23b3f022b72170202f34&chksm=a68090e291f719f4149d896924e9776c305a0c20d22b093432a1579bf05689db8574a1f1c2b2&scene=178&cur_album_id=2199691505051729920#rd)，并在周六晚做了一次 B 站直播。
- 上周六在 B 站做了次直播，主题是「Mac 配置方法」，错过的朋友们可以看[录播](https://www.bilibili.com/video/BV1e14y1c7aJ/)。准备尝试每周六晚 9:00 - 11:00 在 B 站直播会，固定时间，这周的主题是「TODO」，感兴趣的请预约。
- Mac Mini +1，还没想好用他来干啥…
- 读完《营销笔记》，读书 Flag 完成率 5/24，感觉定少了。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单。

- 「浩鲸科技」：招聘 React 前端开发，base 地「福建福州」，要求「熟悉 Umi 全家桶，并对低代码平台有一定的了解，能独立研发组件资产」，薪资范围「10-18k」，联系方式「448627663@qq.com」或「18050322490 加微信」。
- 「重庆腾讯CSIG全资子公司」：招聘智慧零售前端开发工程师，base 地「重庆渝北」，要求「计算机或相关专业本科及以上，掌握前端相关技能」，此岗位为腾讯集团旗下全资子公司编制岗位，薪资范围「15-25k*14」，联系方式「微信号：lishuzuishuai」。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 260 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 260 - 《我的读书方法》
- 259 - 《程序员高效工作法》
- 258 - 《读书笔记：营销笔记》
- 257 - 《如何从 0 开始配置 MacBookPro》
- 256 - 《Bigfish Doctor》

## 每周一图

![](https://img.alicdn.com/imgextra/i3/O1CN01j9xr3E1pvKHFbixJO_!!6000000005422-2-tps-1198-1100.png_1200x1200.jpg)
