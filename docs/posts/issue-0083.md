---
title: "React Query、CSS 3D、JavaScript Wrapped 2022、React 新文档"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01UzT9I71lUWdO4AOvX_!!6000000004822-2-tps-1536-1024.png_1200x1200.jpg"
titleImageCaption: "卷饼兔"
publishedAt: "2023/01/16"
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- 成功的秘诀：Bun 作者每个周要工作 [95 小时](https://twitter.com/jarredsumner/status/1612153999624671238)，相当于每天编码 13 小时。
- Bun 下个版本将支持 [node:readline](https://twitter.com/jarredsumner/status/1612422785661558784) ，因为 Vite 依赖这个包，所以现在 Bun runtime 还没法把 Vite 跑起来。
- Tanstack 旗下 React Query 作者认为 Tanstack 正确的读音是：[10 step](https://twitter.com/TkDodo/status/1612172503002107904) (英文: ten step）。
- codepen 公布了 2022 年最受欢迎的 [100 个项目](https://codepen.io/2022/popular/pens/1)。
- 一份 GitHub 调查报告显示，国人最喜欢给仓库点 star ，有 [20%](https://ossinsight.io/2022/) 的 star 都是国人开发者点的。
- React Query 支持与 [svelte](https://github.com/TanStack/query/releases/tag/v4.21.0) 一起使用。
- Github 支持给 discussion [配置通用模板](https://github.blog/2023-01-09-github-discussions-just-got-better-with-category-forms/)。
- Github 支持了给组织级别配置通用的 [Actions 模板](https://github.blog/changelog/2023-01-10-github-actions-support-for-organization-wide-required-workflows-public-beta/)，而无需单独配置每个仓库。
- Github 支持了在 Actions 中[配置环境变量](https://github.blog/changelog/2023-01-10-github-actions-support-for-configuration-variables-in-workflows/)，但还只支持静态变量。
- pnpm v7.24.2 发布，支持了新的 [v6 版本](https://github.com/pnpm/pnpm/releases/tag/v7.24.2) lockfile 格式。
- zustand v4.3.0 发布，去除了所有的[默认导出](https://github.com/pmndrs/zustand/releases/tag/v4.3.0)，因为这与某些打包器不兼容。
- jotai v1.13.0 发布，新增了全新的 [jotai devtools](https://github.com/pmndrs/jotai/releases/tag/v1.13.0) 。
- State of js 2022 [调查报告结果](https://2022.stateofjs.com/en-us/)：React 继续做老大，Vite 最受欢迎。
- Chrome v109 [发布](https://developer.chrome.com/en/blog/new-in-chrome-109/)，performance 录制中函数映射优化等，没有 awesome 的变化。
- Turborepo v1.7.0 发布，现在必须[显示声明](https://turbo.build/blog/turbo-1-7-0)哪些产物被缓存。
- codesandbox 支持了在 [docker](https://codesandbox.io/post/introducing-docker-support-in-codesandbox) 中运行项目，对服务端项目更友好了。
- Swc 代码压缩 minify 功能取得新进展：产物体积等指标[已优于 Terser](https://twitter.com/swc_rs/status/1613406162673881089) ，参考 nextjs 的 issue 反馈，产物质量仍存在不少问题。
- 以 Vue.js team member 三咲智子为首要贡献者的 Mastodon 网页版客户端 [elk](https://github.com/elk-zone/elk) 开源。
- Chromium 将在 C++ 代码中[使用 Rust](https://security.googleblog.com/2023/01/supporting-use-of-rust-in-chromium.html) 。
- React native [0.71](https://reactnative.dev/blog/2023/01/12/version-071) 发布，默认创建新项目是 TS 模板等变化。

## 深度好文
> 好文推荐。这周好文真多，以下是我全文阅读过的部分。

- [《Type-safe React Query》](https://tkdodo.eu/blog/type-safe-react-query)，Dominik 的每篇文章都值得深入阅读。React Query 的类型可以定义在哪？1）`useQuery<Todos>`，2）`const queryFn: Promise<Todos>`，3）`axios.get<Todos>`，4）`res.data as Todos`，5）不定义。不定义怎么有类型？用 zod，然后定义 schema，schema 不仅可用于校验后端数据，还会返回类型。
- [《Data binding in React: how to work with forms in React》](https://www.joshwcomeau.com/react/data-binding/)，johnwcomeau 的每篇文章也值得阅读，这篇比较新手向，深入解答了面试必问问题「受控和不受控」。
- [《Clever Code Considered Harmful》](https://www.joshwcomeau.com/career/clever-code-considered-harmful/)，johnwcomeau 这周的另一篇文章。判断代码好不好的一个标准是，一个初级开发人员，一个职业生涯刚刚起步的人，会不会在理解这段代码时遇到困难？
- [《React JS Best Practices From The New Docs》](https://sebastiancarlos.medium.com/react-js-best-practices-from-the-new-docs-1c65570e785d)，Sebastian Carlos 阅读完 React 新官网文档后总结的 160 条笔记。我帮我节省了大量时间，我读完他的笔记后记了 20 多条笔记。但如果有空，还是应该完整阅读 React 的新文档。
- [《JavaScript Wrapped 2022》](https://vived.io/javascript-wrapped-2022-frontend-weekly-vol-119/)，作者整理了 TypeScript、React、Angular、Vue、SSR、Node|Deno|Bun 的 2022 发展和 2023 展望，建议熟读。
- [《3D in CSS》](https://garden.bradwoods.io/notes/css/3d)，交互式的 3D CSS 教程。主要是 4 个 CSS 属性，包括 perspective、perspectiveOrigin、translateZ 和 rotate3d。
- [《Building a fast, animated image gallery with Next.js》](https://vercel.com/blog/building-a-fast-animated-image-gallery-with-next-js)，Vercel 把 Next.js Conf 2022 的照片搬上网，同时把这套代码开源。技术栈包括 Cloudinary、Next.js 图像组件、imagemin、Framer Motion、以及用 ai 生成 alt 文本等。
- [《Our top Core Web Vitals recommendations for 2023》](https://web.dev/top-cwv-2023/)，本文 Google DevRel 团队认为在 2023 年提高 Core Web Vitals 性能的最有效方法的最佳实践集合。涉及的性能指标包括 LCP、TTFB、CLS、FID 和 INP，同时给出了每个指标提升的注意点和可执行操作。
- [《The hardest part of web dev》](https://alexvipond.dev/blog/the-hardest-part-of-web-dev)，关于 timing 的知识。其中 react 中，1）渲染函数在React更新DOM之前运行，2）useInsertionEffect回调在React更新DOM后运行，但在浏览器重新计算页面布局之前，3）useLayoutEffect回调在浏览器重新计算页面布局后运行（考虑到useInsertionEffect回调注入的任何CSS），但在浏览器重新绘制之前，4）useEffect回调在浏览器完成重绘后运行。
- [《Fixing a Memory Leak in a Production Node.js App》](https://kentcdodds.com/blog/fixing-a-memory-leak-in-a-production-node-js-app)，kentcdodds 在 production 中修复内存泄漏过程的记录。包括，1）通过 `v8.writeHeapSnapshot` 可创建 heap snapshots，然后[用 Chrome 进行分析](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/)，2）使用 lru-cache 确保 cache 不会太大。最后发现问题的根源是用 express-http-proxy 做图片代理导致的。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行[每周四发一版](https://github.com/umijs/umi/releases)，我觉得有趣的功能包括，1）新增 react-query 插件，2）优化 icons 方案，支持 hover、spin、rotate、flip、local icons、alias 等功能，3）升级 babel 和 webpack 相关依赖到最新。
- VSCode 下有个叫「Error Lens」插件非常好用，相见恨晚，可以在行内显示潜在出错信息，Intellij 系与之对应的插件叫「InlineError」。
- 花几小时理清了 Next.js 使用 Turbopack 的流程。
- 这篇周刊的整理耗时 4 小时，这周好文太多，大部分时间用于阅读。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 240 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 246 - 《装了啥 2023》，每年更新一版我在用的工具
- 245 - 《按需加载 PC 和 Mobile 资源》，一个实际业务问题的解法
- 244 - 《困难模式》，选择困难模式，人生会越来越简单
- 243 - 《Next.js x Turbopack》，理清 Next.js 如何使用 Turbopack
- 242 - 《“完美”体验的 TODO App》，写 Remote 数据的 TODO App 应该注意啥

## 每周一图

![](https://img.alicdn.com/imgextra/i4/O1CN01M4dPis1WC0O17OwMf_!!6000000002751-0-tps-579-431.jpg)

来源：https://vived.io/javascript-wrapped-2022-frontend-weekly-vol-119/
