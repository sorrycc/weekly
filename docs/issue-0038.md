# MDH 前端周刊第 38 期：Umi 4 RC、HTTPie 3、Deno 2021

**这是 「MDH：前端周刊」 第 0038 期，发表于：2022/01/31，每周一上午 9 点更新，包含前端的趋势和好文，欢迎订阅。**

![](https://img.alicdn.com/imgextra/i2/O1CN015IDTVY1aLOu4ZCsua_!!6000000003313-2-tps-1080-607.png)

封面图：僵尸校园。


❄️ TL;DR
------

👉 Umi 4 RC<br />
👉 TSC 的 Go 移植版<br />
👉 prettier-plugin-tailwindcss<br />
👉 HTTPie 3<br />
👉 React Server Component 详解<br />
👉 monorepo.tools<br />
👉 别绕过直接改<br />
👉 Deno 2021<br />
👉 重写 swyx.io<br />
👉 RepoTracker<br />


⚡ 展开讲讲
------

### Umi 4 RC

[https://zhuanlan.zhihu.com/p/462930831](https://zhuanlan.zhihu.com/p/462930831)

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/igeZMWv_a6MpmZ6FugIFw_-MNxoKDQuSFd5LHzzx4Dh6AKjqzbZ16oT-d9RWRaHiFzKXxAOlX61x8f6x-J27yUlTSDo-efehMMT-kyWmtLkhOgPFLmEEgXALF37TO9P-3iqY3gSE.png)

Umi 4 经过几个月的开发，终于要和大家见面了。相比 Umi 2 到 3，3 到 4 的变化是巨大的，开发时间也更长，但我们尽量把对于开发者的影响降低到最小。文中列了 16 个改进点，具体这里不展开。欢迎感兴趣的同学尝鲜，RC 阶段提供手把手微信群服务。

### TSC 的 Go 移植版

[https://kdy1.dev/posts/2022/1/tsc-go](https://kdy1.dev/posts/2022/1/tsc-go)

SWC 作者 Fork TypeScript 的类型检查器 tsc 到 Go 语言，解类型检查慢的问题。TypeScript 编译速度问题可以用 esbuild 或 swc 来解，但 tsc 目前还无解，已逐渐成为日常开发和 CI/CD 中最慢的一环。非常期待这个项目，预计可提速百倍。

### prettier-plugin-tailwindcss

[https://tailwindcss.com/blog/automatic-class-sorting-with-prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/nZDdD25BoxE_X5toD6kX5v-A8ZpsGAcLKHxA3YJAtE81Uypp2SMFMrYIDd-5luu2_JPjxROtbWf88lnCH_W3b6CSBUZGyaU9znvlPL0WPL22CKdkFJmuidPEMbs1A2UYd3FBTpMO.png)

tailwindcss 增加了一个 prettier 插件来对 class name 做排序，弥补了 prettier 在这一垂直领域的空缺。排序规则是按 tailwindcss 产出 css 的顺序来的，这意味着 base 类的肯定在前，并且不提供排序规则的配置，这也符合 prettier 主观武断的传统，有时给选择反而不是好选择。

\# 安装即启用

npm install -D prettier prettier-plugin-tailwindcss

### HTTPie 3

[https://httpie.io/blog/httpie-3.0.0](https://httpie.io/blog/httpie-3.0.0)

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/V48sFIPkDoTgStv6uKOTl6GXCATOnUG1SNc2JpEPWoJeyEMXpKXrVFY5KEAUhri4VJRIkY4a8f6UJg9O5QI923sJSELli4rm7F-2Rqm4X---DlwORWieGjhzVqnqTqpYucC3QXjq.png)

HTTPie 是 HTTP 请求的命令行，目标是让 web service 在命令行中的交互更友好，支持测试、Debug 和交互。他从命令行起步，目前 6W+ Star，发展了 Web、Desktop 和 Mobile 应用，还有 Newsletter 等，有自己的团队，已初见规模。

mac 下可以这样快速上手。

// 1、安装

brew install httpie

// 2、发请求

http --offline pie.dev/post hello=offline

HTTPie 3 支持了 Nested JSON、Plugin Manager、响应元数据、提速等。Nested JSON 适用于处理复杂的 JSON 结构，基于现有的 HTML JSON Form 规范，用 \[\] 表示嵌套，比如 platform\[apps\]\[\]=Mobile 等于 { platform: {apps: \['Mobile'\]} }；Plugin Manager 提供命令行式的插件管理，比如 http plugins list、http plugins install plugin-name 等。

### React Server Component 详解

[https://blog.plasmic.app/posts/how-react-server-components-work/](https://blog.plasmic.app/posts/how-react-server-components-work/)

Plasmic.app 的工程师写了一篇关于 RSC 的文章，推荐阅读。

### monorepo.tools

[https://monorepo.tools/](https://monorepo.tools/)

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/gE6Df4GrWF-4ASuBJgqP8N6pjJP6p_MA4UZXPnlSdmvv-8L9ktNYYP4gKHOG9osKbfOoxfprPRjK61nnPvmYRLc1jsovQNmtsl33EslOcYw0Ai3HRS1UwVMIRQxF4Mb4qw06nBtt.png)

Nx 团队很用心的整理，你想知道的所有关于 monorepo 及其工具对比、文章、视频、书籍都能在此找到。

文章先解答了三个问题。什么是 Monorepo，为什么用 Monorepo，Monorepo 有啥特点？以及 Monorepo、Polyrepo 和 Monolith 的区别。然后介绍 Monorepo 工具的对比，见上图，不出意外，Nx 全绿。由于是 Nx 团队整理，阅读时需注意对比的维度是否足够客观。最后推荐了一些文章、视频和书。

### 别绕过直接改

[https://catern.com/change\_code.html](https://catern.com/change_code.html)

这篇文章的精华全在标题里了，「改代码，别绕过」。

遇到问题，很多同学第一个想法是怎么绕过，尤其是需要改其他人写的代码时，会更容易打退堂鼓。绕过是最省力的方式，但却容易给未来留坑。可以找到很多绕过的理由，比如没权限改、不知道怎么改、不知道源码在哪、不会跑测试、不会执行构建、环境有问题等等。尽可能别给自己找借口，也不要给自己设限。

### Deno 2021

[https://deno.com/blog/deno-in-2021](https://deno.com/blog/deno-in-2021)

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/w9zfhtv1uKChlMKhHb8ZK_8JLFccQG9ub35icJhmAcLA2hAAdjySKTevuD4SAsP_6_DdkuRdJ7aJ7nhCJWRxR_wWhvGtvT-JJgP-rzfTzMKSVAPy4ZygZpbiu8y6NOxO2mHQFh5I.png)

一些摘要如下。

发布 Deno Deploy，允许部署 TypeScript 和 WASM 等的 serverless 云；1.9 引入 native HTTP server binding，允许创建基于 hyper 的高性能 HTTP 服务器；2021.8 Deno 加入 MDN 兼容表；Deno 1.13 引入 Foreign Function Interface API，允许使用基于 C calling convention 的语言来写扩展，代替之前的 unstable 插件系统；Deno 1.15 中引入 Node 兼容模式的首个预览版，允许 Deno 无需修改直接跑 node 应用和 npm 包；Deno 2 讨论中，很快会有 Deno 2 的 Roadmap，预计年中发布。

### 重写 swyx.io

[https://www.swyx.io/rewrite-2022/](https://www.swyx.io/rewrite-2022/)

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/qrUk5f69_tPs7tXvnfDg7FXfxi974jkgUY4yuEnppeyOU1owinnX0fqj0pmBlLGRNnh78A9bJ-YMcl9euOUTklVdWhnCg2xDpDGxySo2oeQ9Ve0N6bPx0MvZ_M06r605vVG_o7f7.png)

作者遇到两个问题，1）每次构建需要全量编译所有 Blog 2）Dev.to 走下坡路，API 不稳定而且增加了很多限制，使用它作为 Headless CMS 已不太合适。解法分别是用 SvelteKit 重写，然后用 Github Issues 作为 CMS。此外还有用到 TailwindCSS 3。

### RepoTracker

[https://repo-tracker.com/](https://repo-tracker.com/)

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/yX1eTbUaEKrA_m34MsZMV7JVFa3YaHTGZWEASSY1jNfRuPXfyN8JN94TiAXBtllPm4YQyvde0VkiN9t7Ym3cAiz0ZEERGolVPTWdK0Wd-WwrBakZfB9L2Mrq2j1gvp7HYsJKgPtD.png)

可以跟踪 repo 数据的简单应用。基于 nuxt 3，部署在 vercel。

## 🕒 订阅

本期刊有几种订阅方式，

1、本期刊已开通 **NewsLetter** 的订阅方式，方便不喜欢公众号阅读的朋友们，访问 **[https://mdhappy.substack.com/](https://mdhappy.substack.com/)** 或扫描下方二维码了解详情。

<img src="https://img.alicdn.com/imgextra/i3/O1CN01fgWXv11SlwvuAiz0i_!!6000000002288-2-tps-422-424.png" width="215" />

2、微信搜索 **「云谦和他的朋友们」** 或扫描下方二维码，在我的公众号订阅更新。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
