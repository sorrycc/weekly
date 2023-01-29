---
title: "软技能、Moon、tauri 1、Fresh、DX、组件库"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01Mi8GEL1KIAK9oo145_!!6000000001140-0-tps-1511-1080.jpg"
titleImageCaption: "pizbern @ unsplash"
publishedAt: "2022/06/20"
---

本周有这些内容想和你分享：

- 软件工程之软技能
- Moon
- tauri 1
- Fresh
- 什么造就了伟大的开发者体验
- 面试面试官
- MICROVIUM
- React 组件库维护经验

## 软件工程之软技能
https://addyosmani.com/blog/software-engineering-soft-parts/

![](https://img.alicdn.com/imgextra/i4/O1CN01IoiinF1HMnTvF9Zgs_!!6000000000744-0-tps-1843-1080.jpg)

Google 工程师 Addy Osmani 的一篇万字长文，分享他从在谷歌浏览器的第一个 10 年中所学到软件工程软技能，这些都是作者记忆犹新的一些教训。我读完一遍之后有不少收获，推荐反复阅读。

## Moon
https://moonrepo.dev/

![](https://img.alicdn.com/imgextra/i3/O1CN01KbIny91ed2gw8C5Ts_!!6000000003893-1-tps-800-358.gif)

moon 是一个用 Rust 编写的用于基于 JavaScript 项目的版本库管理、组织、编排和通知工具。Moon 中的许多概念在很大程度上受到 Bazel 和其他流行的构建系统的启 发，但为 JavaScript 生态系统量身定做。

在 JavaScript 生态系统中工作可能是非常复杂的，特别是当涉及到有效地管理存储 库时。要使用哪个软件包管理器？使用哪个 Node.js 版本？如何导入node模块？如何构建软件包？等等。 Moon 旨在简化这整个过程，提供一流的开发者体验。

## tauri 1
https://tauri.app/v1/guides/

![](https://img.alicdn.com/imgextra/i3/O1CN01bqvkKc1NBFBUR6jDa_!!6000000001531-0-tps-1232-486.jpg)

tauri 是基于 web 和轻量级的 rust 后端构建桌面应用的工具包。

JavaScript 开发者过去十年一直在尝试建立跨平台应用的完美方案，而 Electron 一直是这一领域的领导者，他提供了 node.js 的后端和 chrome 浏览器的前端。Electron 的主要问题是，他会产出一个非常大的可执行文件，同时消耗大量内存。tauri 采取不同的解法，用 rust 代替 node，用 tau 和 rye 代替 chromium 提供一个轻量级的 webview。最终的结果是更好的 bundle 尺寸和更高效的内存消耗。

同时 tauri 非常注重安全问题，提供了隔离模式，防止不受信任的脚本从 webview 中访问后端。tauri api 提供了一种安全的方式来访问文件系统、http 和系统通知等本地功能。他默认是安全的，只有在开发者明确允许的情况下，前端才会回调和编码。

## Fresh
https://fresh.deno.dev/

![](https://img.alicdn.com/imgextra/i3/O1CN01KG4nDb1DJM2alEsry_!!6000000000195-1-tps-470-750.gif)

@denoland core team 出的框架，类 next.js 的文件系统路由、无构建步骤、TypeScript 开箱即用等。

Fresh 是一个面向 JavaScript 和 TypeScript 开发者的全栈式现代 Web 框架，旨在使创建高质量、高性能和个性化的 Web 应用变得轻而易举。你可以用它来创建你的主页、博客、像 GitHub 或 Twitter 这样的大型网络应用，或者其他你能想到的东西。

Fresh 的核心是一个路由框架和模板引擎的组合，在服务器上按需渲染页面。除了在服务器上的这种及时（JIT）渲染之外，Fresh 还提供了一个接口，用于在客户端无缝渲染一些组件，以获得最大的互动性。该框架在服务器和客户端都使用 Preact 和 JSX 进行渲染和模板制作。

Fresh 没有构建步骤。你写的代码直接是在服务器上运行的代码，以及在客户端执行的代码。任何必要的 TypeScript 或 JSX 到普通 JavaScript 的转换都是在需要的时候即时完成的。这使得迭代循环快得惊人，部署也非常快。

两步尝鲜，

```bash
# 1、初始化项目
$ deno run -A --no-check https://raw.githubusercontent.com/lucacasonato/fresh/main/init.ts my-app

# 2、进入项目目录并启动
$ cd my-app
$ deno task start
```

## 什么造就了伟大的开发者体验
https://leerob.io/blog/developer-experience-examples

一些笔记。

**关于框架和库。** 要为「快速上手」进行优化，让开发者能尽快开始工作；大版本要控制变更的“爆炸半径”，让使用者容易更新依赖升级，同时提供 codemod；在错误信息中通过「超链接」提供更多关于如何解决问题的信息，反馈要尽量早，在运行或编译错误之，比如类型检查和 lint 工具；提供主观而强大的默认值和约定，80% 的场景下用默认值就好，同时为剩下 20% 的场景提供“逃生舱”；减少依赖风险，next.js 只有 13 个依赖，未来更是希望变成单一二进制。

**关于文档。** 以代码为起点；文档要能解决开发者的问题；尝试自动文档，比如 vercel 的 API 文档是基于 [OpenAPI 规范](https://swagger.io/specification/)自动生成；不仅仅提供快乐路径，同时也提供各种错误的解法；面向略读优化，开发者会优先看文档中的代码，所以在代码块里加注释提供更多有用信息；要精确；逐步暴露复杂性。

## 面试面试官
https://github.com/readme/guides/technical-interviews

面试是个双向的过程，作者准备了 5 个问题来问面试官。

1、我如何会失败？了解招聘精力是否知道这个角色的盲点。
2、你如何激励你的团队？比如是否会因为发送代码的数量和频率而得到奖励？人们是通过交付KPI和采用指标来激励的吗？关闭最多的支持票？
3、你能分享一个例子，说明团队所做的事情不顺利，你做了什么来纠正？了解团队的原则和价值观是什么。
4、内部工作流程是怎样？
5、对于减少工程化团队的摩擦有多少了解？

## MICROVIUM
https://coder-mike.com/blog/2022/06/11/microvium-is-very-small/

用于微控制器的 Microvium JavaScript 引擎在空闲时每个虚拟机需要大约 8.5 kB 的 ROM 和 34字节 的 RAM，这可能是迄今为止最小的 JavaScript 引擎，其语言功能却比 5 倍于它的引擎还要多。

## React 组件库维护经验
https://www.gabe.pizza/notes-on-component-libraries/

作者是 [DigitalOcean](https://www.digitalocean.com/) UI 基础设施团队成员，负责维护内部组件库 Walrus。本文是作者对维护一个组件库的想法，保留大量软件工程和 social 挑战方面的。
