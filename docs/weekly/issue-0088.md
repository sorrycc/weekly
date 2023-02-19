---
title: "错误处理、CSS 嵌套、应用模块化、useWorker"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01umTRxx1ag0niuNStz_!!6000000003358-2-tps-1536-1024.png_1200x1200.jpg"
titleImageCaption: "背影"
publishedAt: "2023/02/20"
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

 - Volar 将有更好的[代码提示](https://twitter.com/johnsoncodehk/status/1624926235725004801)说明。
 - Vercel 将支持 [cron](https://twitter.com/leeerob/status/1625249090932994051) 定时作业。
 - React 实现了[下发服务器端函数的引用](https://twitter.com/wongmjane/status/1625166863062958081)，类似 RPC 。
 - Lightning css [v1.19.0](https://twitter.com/lightningcss/status/1625163399272202241) 发布，支持自定义 at-rule 实现。
 - Safari Preview 162 支持[声明式 Sahdow DOM](https://webkit.org/blog/13851/declarative-shadow-dom/) 。
 - core-js 作者[呼吁](https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md)社区提供更多的开源赞助经费。
 - Firefox [v110](https://www.mozilla.org/en-US/firefox/110.0/releasenotes/) 发布，支持容器查询等。
 - CodeSandbox 提升了 [Vue](https://twitter.com/CompuIves/status/1625553753993519105) 项目的开发体验。
 - CodeSandbox 发布了 webcontainer 的竞品 [nodebox](https://codesandbox.io/blog/announcing-sandpack-2) 。
 - Apple 官网[导航部分](https://twitter.com/preactjs/status/1625617091733643264)由 Preact 编写。
 - Github Copilot [企业版](https://github.blog/2023-02-14-github-copilot-for-business-is-now-available/)推出，更强大的模型。
 - 经统计，使用 React 和 Vue 的网站只占全网的 [5%](https://andy-bell.co.uk/the-extremely-loud-minority/) 。
 - [容器查询](https://web.dev/cq-stable/)已在三大浏览器可用。
 - Stackblitz 发布了公开版 [Webcontainer](https://webcontainers.io/) 。
 - Remix [v1.13.0](https://github.com/remix-run/remix/releases/tag/remix%401.13.0) 发布，原生实验性支持 tailwind 等。
 - Angular 围绕 [Signal](https://github.com/angular/angular/discussions/49090) 开始探索细粒度优化。
 - React Native [年度报告](https://results.stateofreactnative.com/monorepo-tools/)显示 Turborepo 是最受欢迎的 monorepo 工具。
 - iOS 16.4 beta 1 已支持 [Web push](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/) 。
 - Chrome [v111](https://developer.chrome.com/en/blog/new-in-devtools-111/) 将支持更完善的错误捕获、调试等。
 - Nextjs 新增了 Api routes 的替代品 [route handler](https://beta.nextjs.org/docs/routing/route-handlers) 。
 - [Firefox Android](https://support.mozilla.org/en-US/kb/whats-new-firefox-android) 支持使用 Tampermonkey 。
 - React 正在计划 [signal](https://twitter.com/acdlite/status/1626590880126889984) 功能。
 - React [仓库](https://github.com/facebook/react) star 数已和 [Vue 2](https://github.com/vuejs/vue) 持平。
 - React Hook Form [支持跨框架使用](https://github.com/react-hook-form/core)了，建议更名为 @tanstack/hook-form，哈哈。
 - HomeBrew 发布 [4.0.0](https://brew.sh/2023/02/16/homebrew-4.0.0/)，改用 JSON 方式，以后 update 再也不需要更新一个很大的 git 仓库了。

## 深度好文
> 好文推荐。以下是我全文阅读过的部分。

- [《How to handle errors in React: full guide》](https://www.developerway.com/posts/how-to-handle-errors-in-react)。直接 try…catch 会有不少限制，但使用 React 官方的 ErrorBoundary 也有不少限制。这个限制是，React生命周期之外的错误不捕获，比如 resolved promises, async code with setTimeout, various callbacks and event handlers。怎么解？dan 给了个 [Hack 方案](https://github.com/facebook/react/issues/14981#issuecomment-468460187)，简单说就是 `try {} catch(e) { setState(() => throw e) }`。基于此，我们可以稍微封装下，比如 `useThrowAsyncError` 或 `useCallbackWithErrorHandling`，这样就不需要每次声明一个新的 setState 了。同时也可以考虑用 [bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary) 。
- [《Try out CSS Nesting today | WebKit》](https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/)。[Safari Technology Preview 162](https://webkit.org/blog/13703/release-notes-for-safari-technology-preview-162/) 已支持 CSS 嵌套，需要尝鲜的可以下载测试。Safari 和 Google Chrome 都将遵循同一套 CSS 嵌套规范，其中有个注意点是，比如不能 `main { div {} }`，需要加 `&`，改用 `main { & div {} }` 。
- [《TypeScript Brand type with Zod》](https://linux-china.davao.page/blog/2023-02-16-ts-brand-with-zod/)。Brand Type 可以用来创建一个新类型，比如把 string 包装成 Email。然后结合 Type Guards，即可确保类型安全，又能做数据校验。Type Guards 的部分可以用 zod 。
- [《Modularizing React Applications with Established UI Patterns》](https://martinfowler.com/articles/modularizing-react-apps.html)。好文，作者通过案例教你如何用成熟的 UI 模式把 React 应用模块化。说人话就是，把大组件拆小。几个思路，1）提取子组件以拆分视图，2）提取非视图逻辑到 hooks，3）提取领域模型以封装逻辑。但是也要注意别过度优化。
- [《React Component Composition》](https://punits.dev/jargon-free-intros/react-component-composition/)。图解 Composition。
- [《Multi-threaded React App using useWorker》](https://dev.to/nilanth/multi-threaded-react-app-using-useworker-gf8)。基于 @koale/useworker 实现。何时应该用 worker？作者给了几个场景，包括图像处理、对大型数据集进行排序或处理、用大数据导出CSV或Excel、Canvas 绘制、任何CPU密集型的任务。
- [《Ditch google analytics now: 7 open-source alternatives》](https://blog.thoughtspile.tech/2023/02/12/open-source-analytics/)。作者介绍了 7 个可用于代替 Google Analytics 的开源方案，前三个分别是 [Matomo](https://matomo.org/)、[Plausible](https://plausible.io/) 和 [Umami](http://umami.is/)。
- [《一个程序员决定写代码到60岁》](https://mp.weixin.qq.com/s/-91Z76WGF6O0uxyyGEcHMg)。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）基于 @clack/prompts [优化 create-umi 界面](https://github.com/umijs/umi/pull/10508)，2）优化命令行执行速度，该 lazyImport 的 lazyImport，同时优化了 @ant-design/icons 集合的读取方式，3）新增 legacy 模式支持做产物的 es5 校验，4）升级 Vite 到 4.1。
- Umi 新增 [Roadmap 2023](https://github.com/umijs/umi/issues/10423)，是 Umi 团队每周迭代的一部分，每周四更新，有兴趣共享的同学欢迎直接回 issue 认领。一个非 docs PR 即可加入 Umi Contributor 群。
- Umi 团队新增一条规则，每人每周需共享 1-2 个想法，每周三开 Discussion 征集，这是试运行第一周的 [Discussion 链接](https://github.com/umijs/umi/discussions/10516)。
- 上次直播时花 10 分钟上线了自己的[个人网站](https://sorrycc.com/)，欢迎围观和订阅 RSS。我会找时间把历年写的公开文章都整理到这。
- 原计划周六直播 ChatGPT，临时有事推迟到周日晚，和大家说声抱歉。家有两娃感觉随时可能有事要处理。为准备直播，这周花了周六 1 天 + 周五 1 晚深入看 ChatGPT 的各种资料，太多了，感觉完全看不过来。
- [跑通 ChatGPT + Telegram Bot 流程](https://t.me/yqtalk/212)，非 GPT-3 API 的方式。
- 体验了下[八方旅人 2 体验版](https://t.me/yqtalk/203)，战斗模式和 1 差不多，胜在故事，已被打动，正式版出了肯定入。
- Mac Mini 周三就到了，一直没时间开箱。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单。

- 「浩鲸科技」：招聘 React 前端开发，base 地「福建福州」，要求「熟悉 Umi 全家桶，并对低代码平台有一定的了解，能独立研发组件资产」，薪资范围「10-18k」，联系方式「448627663@qq.com」或「18050322490 加微信」。
- 「重庆腾讯CSIG全资子公司」：招聘智慧零售前端开发工程师，base 地「重庆渝北」，要求「计算机或相关专业本科及以上，掌握前端相关技能」，此岗位为腾讯集团旗下全资子公司编制岗位，薪资范围「15-25k*14」，联系方式「微信号：lishuzuishuai」。
- 「即时设计」：招前端工程师、前端实习生，base 地「北京朝阳区达美中心」，技术栈要求「React、TypeScript、WASM，专注图形学」，薪资范围「15k——30K * 15」，联系方式「shenchen.shao@js.design」。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 260 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 263 - 《ChatGPT》
- 262 - 《Nuxt Devtool、Umi UI》
- 261 - 《我的读书方法》

## 每周一图

![](https://img.alicdn.com/imgextra/i2/O1CN01FH6vTs1jYWsDsXGRn_!!6000000004560-2-tps-500-719.png)
