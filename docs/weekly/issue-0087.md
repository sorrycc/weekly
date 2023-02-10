---
title: "WIP"
titleImage: ""
titleImageCaption: ""
publishedAt: "2023/02/13"
draft: true
---

## 一周要事

。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- 。

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

- 。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单，有求职需求的请在 https://docs.qq.com/form/page/DY291a3BOdGR3TnRT 填写表单。

- 。

## 每周一图

。
