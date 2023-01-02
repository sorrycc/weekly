# MDH 前端周刊第 67 期：一周新闻、Father 4、选择你的框架、Tauri vs. Electron

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h5mk42uuedj21hc0u0wtf.jpg" style="margin:0;padding:0;vertical-align:middle;" />

> <p style="color:gray;text-align:center;margin-bottom:3em;">封面图：House of the Dragon。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0067 期，发表于 2022/08/29。</p>

本周有这些内容想和你分享：

- 一周新闻
- Father 4
- 选择你的框架
- Tauri vs. Electron
- React + TypeScript 最小知识集
- React 组件 composition 进阶

## 一周新闻
新增「一周新闻」栏目，一句话介绍本周内发现的前端资讯和发布。

* [新一代 NPM 包研发工具 father 4 发布](https://zhuanlan.zhihu.com/p/558192063)
* [Bun 融资 $7m](https://oven.sh/)，本以为是玩具，感觉能开辟一片天地了
* [Deno 发布 1.25](https://deno.com/blog/v1.25)，新增 deno init 命令，试验性的 npm 支持，可以 import from npm:express 了，新增 HTTP Server API
* [TypeScript 发布 4.8](https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/)
* [Remix 发布 1.7](https://github.com/remix-run/remix/releases/tag/remix%401.7.0)，使用 esbuild 的 automatic jsx transform，MetaFunction 可以从 route loader 推导 data 和 parentData
* [Heroku 在 11.28 之后不再提供免费服务](https://blog.heroku.com/next-chapter)
* [Jest 发布 29](https://jestjs.io/blog/2022/08/25/jest-29)，不支持 node 12 和 17，snapshot 格式变更
* [Vercel 支持在 Edge 跑 WebAssembly](https://vercel.com/blog/introducing-support-for-webassembly-at-the-edge)
* [ESLint 发布 8.23 发布](https://github.com/eslint/eslint/releases)，支持 cli 层使用 Flat Config
* [Vercel 支持通过 turbo-ignore 仅部署有代码改动的 Monorepo 中的一部分](https://vercel.com/changelog/intelligent-ignored-builds-using-turborepo)
* [Node 发布 18.8](https://nodejs.org/en/blog/release/v18.8.0/)，新增 npm query 查包和 snapshot 持久化
* [Needle Engine](https://needle.tools/) 开启 Beta

## Father 4
https://zhuanlan.zhihu.com/p/558192063

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h5mh8q12axj20y20h1wfk.jpg)

约两个月前，我们发布了 father 4 的 RC 版本，在 RC 阶段我们收到了不少尝鲜用户的反馈建议，也持续对 father 4 做了不少优化；今天，终于可以满怀喜悦地和大家分享 father 4 的第一个正式版本了！

作为一款全新的 NPM 包研发工具，father 4 的具备如下核心特性：

- **双模式构建：** 支持 Bundless 及 Bundle 两种构建模式，ESModule 及 CommonJS 产物使用 Bundless 模式，UMD 产物使用 Bundle 模式
- **多构建核心：** Bundle 模式使用 Webpack 作为构建核心，Bundless 模式使用 esbuild 及 Babel 两种构建核心，可通过配置自由切换
- **类型生成：** 无论是源码构建还是依赖预打包，都支持为 TypeScript 模块生成 `.d.ts` 类型定义
- **项目体检：** 对 NPM 包研发常见误区做检查，让每一次发布都更加稳健
- **微生成器：** 为项目追加生成常见的工程化能力，例如使用 jest 编写测试
- **依赖预打包：** 开箱即用的依赖预打包能力，帮助 Node.js 框架/库提升稳定性、不受上游依赖更新影响（实验性）

除了 RC 发布时 为大家隆重介绍的双模式构建、多 Bundless 构建核心 及 依赖预打包之外，正式版还带来了 项目体检 及 微生成器 两个新特性。

## 选择你的框架
https://www.chooseyourframework.dev/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h5mh9p9p9yj214c0qgac5.jpg)

你是否曾觉得选择一个 JavaScript UI 框架很像挑选一个初始的口袋妖怪？ 我们中的大多数人都没有深刻理解它们之间的比较。 我们挑选了一个，并在接下来的几年里确信它是最好的选择。

所以，你的选择是？

## Tauri vs. Electron
https://www.levminer.com/blog/tauri-vs-electron

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h5mhjqm1a7j20xc0hitbv.jpg)

作者分别用 Tauri 和 Electron 实现了 [Authme](https://authme.levminer.com/)，然后从打包、启动时间、性能、后端、应用渲染、安全、自动更新、开发体验共 8 个维度进行了对比。

1、「打包」Tauri 完胜。1）尺寸上 Tauri 2.5M vs. Electron 85M，2）Tauri 的产物是二进制的，反编译解码逻辑所需成本相比 Electron 会高很多。

2、「启动时间」Tauri 胜。Tauri 2s vs. Electron 4s。

3、「性能」Tauri 完胜。

4、「后端」Electron 胜。因为 Electron 后端基于 Node，而 Tauri 基于 Rust。当然如果你会 Rust 则是另一回事。另外，Tauri 的 Roadmap 里有支持其他后端绑定的计划，比如 Deno，届时就又可以用 JavaScript/TypeScript 写后端了。

5、「应用渲染」Electron 胜。Electron 使用 Chromium，所以你的用户在 Windows、Linux 和 macOS 上看到的东西是一样的。Tauri 使用系统的 WebView，Windows 上使用 Edge Webview2（Chromium），Linux 上使用 WebKitGTK，macOS 上使用 WebKit。这里的问题是 Webkit 的支持总是落后一点，所以你可能会需要额外的补丁。

6、「安全」Tauri 胜。Tauri 内置大量安全功能，可以明确启用或禁用某些 API。Electron 中则可以完全访问 Node 的 API，所以相比来说更容易被黑客利用。

7、「自动更新」Electron 胜。Tauri 和 Electron 都内置了自动更新器，而 Tauri 的相对简单，同时需要维护依赖并手动更新 JSON，而 Electron 可基于 electron-updater 并直接从 Github 发布的二进制文件中提取，要方便很多。

8、「开发体验」Tauri 胜。基于 Tauri CLI 就会包含热重载、为所有平台构建你的应用程序、生成应用程序图标等全部功能，而 Electron 啥都没有提供，只有框架本身。

## React + TypeScript 最小知识集
https://ente.io/blog/tech/typescript-for-react/

TypeScript非常棒，但 TypeScript 也有一个学习曲线。社区上较少有这种将 TypeScript 引入 JavaScript 项目的知识最小集文章，这篇就是。

```tsx
import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface HelloProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
}

const Hello: React.FC<PropsWithChildren<HelloProps>> = ({
    name,
    children,
    ...rest}) => {
    return (
        <div>
            <div {...rest}>{`Hello, ${name}!`}</div>
            {children}
        </div>
    );
};
```

只有 3 个知识点，有眼就能学会。1）`React.FC` 表示 Function Component 函数式组件，2）`PropsWithChildren` 让 `props.children` 带类型，3）`HTMLAttributes<HTMLDivElement>` 让 `props` 可以使用 html 属性比如 `className`。

## React 组件 composition 进阶
https://frontendmastery.com/posts/advanced-react-component-composition-guide/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h5mjimtw2ej21i40ny0v6.jpg)

在这篇文章中，作者深入探讨了用于分解组件和设计可组合 API 的主要原则。


## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**DEX 周刊**](https://newsletter.dex.group/)：关于产品、设计、前端、软件的精华资讯邮件列表
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
