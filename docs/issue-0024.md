# MDH 前端周刊第 24 期：Parcel 2、React Router 6、Nuxt 3、Better Log

**这是 「MDH：前端周刊」 第 0024 期，发表于：2021/10/18。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i4/O1CN01XEd7gT1epPI24ozll_!!6000000003920-0-tps-1920-1151.jpg)

封面图：sadmink @ www.unsplash.com 。

## 🙋‍♂️ 交流群和志愿者征集

### 交流群

本周刊已开放**「飞书话题群」**，用飞书扫码即可订阅。

<img src="https://img.alicdn.com/imgextra/i4/O1CN01Pokf0R1mYTZgqt2Vc_!!6000000004966-0-tps-1140-1332.jpg" width="215" />

### 征集志愿者

1. 征集 5-10 名 MDH：前端周刊志愿者，报满即止
2. 加入方式：加入交流群，然后在置顶的征集贴中回复「+1」
3. 每周需解读 1 篇或以上文章，完成 tl;dr
4. 采纳的文章发布后在标题署名「编辑：XXX」
5. 可访问共享的精选文章池

## ❄️ TL;DR

👉 Parcel 2<br />
👉 React Router 6<br />
👉 Nuxt 3 Beta<br />
👉 Remix 种子轮<br />
👉 Web 3<br />
👉 WashingCode<br />
👉 微前端 + Vite<br />
👉 Better Log<br />
👉 Better PR<br />
👉 Sapling<br />

## ⚡ 展开讲讲

### Parcel 2
https://parceljs.org/blog/v2/

![](https://img.alicdn.com/imgextra/i3/O1CN01zpYRbK1RNO3Qqog5I_!!6000000002099-2-tps-1559-915.png)

Parcel 发布全新重写的 2.0，由于用了 SWC + Rust，性能上有很大提升，比 rollup + terser 还快一些。个人觉得 Parcel 本身定位还是有些尴尬，Bundle 界很难赶上 Webpack，概念上不如 Vite，不过源码值得一读，实现细节亮点多。

以下是改动点，

* 🗺️ **Ground up Rewrite**
* 🔌 **全新的插件体系**
* 🌳 **默认开启 Tree Shaking**，支持 ESM、CJS、Dynamic Import 和 CSS Modules
* 🚀 **性能提升**，Rust 版 JS Compiler、并行架构
* 🖖 **自动基于 Native ES modules 的差异化构建**
* ✂️ **自动 Code Splitting**
* 🖼 **图片的尺寸转换、格式转换和优化**，支持 AVIF 和 WebP，JPG 和 PNG 的无损压缩
* 💵 **提升缓存可靠性**，机器无关，自动跟踪配置、插件、依赖的变更
* 🔥 **改进 Hot Reloading**，支持 React Fast Refresh
* 🪆 **支持 Bundle Inlining**，比如 inline 图片为 data url
* 📚 **支持组件库打包**，输出 ESM、CJS 和 TypeScript 定义
* 🧘 **懒开发模式**，请求时才 build，提升 dev server 冷启动速度
* 👷 **改进 Web Worker 支持**，支持 Native ESM Worker、Worklets、Server Worker Manifests 等
* 🚨 **Better diagnostics**
* 👀 **更可靠的 File Watcher**
* 🗺 **更快和精确的 Source Maps**，基于 Rust，相比 Parcel 1 提速 20 倍

### React Router 6
https://github.com/remix-run/react-router/tree/dev/docs

![](https://img.alicdn.com/imgextra/i3/O1CN01DG0xYn1xiW1u24jvm_!!6000000006477-2-tps-530-648.png)

据说是最后一个 beta 版了，在 React Router 6 发布前翻了遍文档和源码，以下是你需要了解的一些变化，

* 花了不少篇幅为 remix 实现中心配置式路由，`<Router>` + `useRoutes` 的组合，Umi 4 已切到这个版本
* 提供 `<Outlet />` 渲染子路由，不能用 `props.children` 了
* 全面支持相对路径，子路由不用写父路由路径
* 用 `useNavigate()` 进行编程式跳转
* 不再提供 `<Switch />`，用 `<Routes />` 代替
* `<Route index />` 表示 Index 路由
* `<Route />` 不能被封装，比如封装一个 `<PrivateRoute />` 用于权限，取而代之的是 `<Route element />`  的方式
* `<Routes />` 可以嵌套，嵌套在 `<Route />` 下的 `<Routes />` 会基于前者的 path，注意前者的 path 加 `*` 后缀，否则后者不匹配时会不显示
* 不再提供 `<Redirect />`，推荐服务端判断了直接跳，小成本升级也可用 `<Navigate replace to="/home" />`，缺点是不支持服务端渲染

### Nuxt 3 Beta
https://nuxtjs.org/announcements/nuxt3-beta/

![](https://img.alicdn.com/imgextra/i2/O1CN01KcGgfi1riA1oRCPTT_!!6000000005664-2-tps-864-540.png)

Nuxt 发布 3.0 Beta，以下是摘要，

* 新的 Server Engine「Nitro」，可直接部署到现有的多个云平台，支持 Node.js、Serverless、Workers、Edge-side 渲染、纯静态
* 关键词：Webpack 5、Vue 3、Nitro Engine、Vite、UnJS、Nuxt Bridge、Nuxt Devtools、ESM support、TypeScript、Auto Imports

除了 Nuxt 3，配套的 un 系列依赖库发布也很有意思，比如 untyped、unbundle 等。

### Remix 种子轮
https://remix.run/blog/seed-funding-for-remix

摘要，

1. 种子轮融资 300W 美金
2. 创始人是 React Router、Reach Router 和 Reach UI 的作者，同时维护了 React Training 培训机构
3. 据说 10 个安装 react-dom 的人会同时安装 react-router
4. Remix 作为首个 React 社区的付费框架，当时很多人不看好，还能这么操作
5. Remix 有啥优势？Web Fundamentals + Modern UX. Web Fundamentals 指浏览器、HTTP 等，Remix 在设计上充分利用了他们的特性、缓存等；Modern UX 指路由、Code Splitting、Resource Prefetching 等

### Web 3
https://future.a16z.com/why-web3-matters/

![](https://img.alicdn.com/imgextra/i3/O1CN013eYmWx1Hw3sooiXA0_!!6000000000821-2-tps-1179-532.png)

Web3 is the internet owned by the builders and users, orchestrated with tokens.

### WashingCode
https://github.com/sapegin/washingcode-book

![](https://img.alicdn.com/imgextra/i3/O1CN01CpF1G525o1iksRm1I_!!6000000007572-2-tps-500-646.png)

这是一本关于如何写更清晰代码的书，推荐里面 Avoid 系列的章节。

### 微前端 + Vite
https://mp.weixin.qq.com/s?__biz=MzI5NjM5NDQxMg==&mid=2247494512&idx=1&sn=cce6c9b65493ab4888f0721bd997932e

摘要，

1. 实现 Vite + 微前端，需要做两件事，1）esm 子应用声明生命周期，2）cjs 主应用能加载 esm 子应用
2. 声明生命周期就是导出 mount 和 unmount 方法，主应用在创建和销毁他时会调用，路子很多，作者提供了 vite-plugin-index-html，结合 Vite 的解析能力，将入口修改为静态资源的入口
3. cjs 加载 esm 简单看就一行代码 `const dynamicImport = new Function('url', 'return import(url)');`，出自 dynamic-import-polyfill，通常是够用的，但需注意他不支持 import.meta 和 importmaps 等高级特性，如有需要，可考虑 es-module-shims

### Better Log

https://tuhrig.de/my-logging-best-practices/

摘要，

* **事后 Log，而非事前**，比如 `foo(); log.info('foo');`，更符合常识，并且在 `foo()` 报错时，自然会出相关报错而不会出这条日志，让日志更清晰
* **分离 Message 和参数**，先 Message 后参数，不要混在一起，混在一起的比如 `log.info('send url ' + url + ' to server')`，一是加参数麻烦需要改句子，二是在参数比较长时 Message 可能跑到屏幕外
* **区分 WARNING 和 ERROR**，WARNING 是可以工作，但有问题，不够完美；ERROR 是不可工作
* **区分 INFO 和 DEBUG**，INFO 解释 What，包含业务逻辑；DEBUG 解释 How，包含技术细节

### Better PR
https://www.chakshunyu.com/blog/6-concrete-tips-that-will-make-your-react-pull-requests-easier-to-review/

虽然作者的标题是关于 React Pull Request，其实给的都是通用的建议，多想几步，多想几步，让 reviewer 更轻松，PR 也会更容易 review 和 merge，对于代码、团队、reviewer 和你自己，是多赢的局面。

1.  除了说明改了什么（What），**还要说明为什么改（Why）**，让 reviewer 理解你的意图，没有原因的改动是无意义的
2. 如果改了样式、日志、交互等，**提供截图或动图**，reviewer 很难从代码中想象视觉变化
3. **提供需求来源**，没有需求支撑，一些看起来奇怪的代码就只是奇怪的代码
4. **介绍新引入的依赖**，为什么用这个而不是另一个，前端库太多，如何选依赖考量很多，和 reviewer 说明你的想法
5. **避免复杂的 JavaScript 结构**，比如 .reduce、&&、?? 等，会需要 reviewer 有比较重的心智负担或者学习新知识才能继续 review
6. **额外写一些步骤引导 reviewer 如何 review**，尤其是对于大改动来说，reviewer 可能无从看起

### Sapling
https://scribe.rip/codex/introducing-sapling-a-vs-code-extension-for-traversing-your-react-component-hierarchy-3ac94d95887e

![](https://img.alicdn.com/imgextra/i1/O1CN01btBlfX1pqHp4yyedK_!!6000000005411-1-tps-960-662.gif)

摘要，

1. VSCode 插件，在侧边栏显示组件树形结构，提供另一种形式的导航方式
2. 实现上基于 VS Code Extension API 和 VS Code Webview API
3. 在你选择 root 文件后，会用 `@babel/parser` 分析语法树，找到依赖组件，递归分析，得出组件树


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
