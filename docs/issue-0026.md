# MDH 前端周刊第 26 期：Next.js 12、Umi 4 Beta 1、UnoCSS、Modern.js

**这是 「MDH：前端周刊」 第 0026 期，发表于：2021/11/01。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i3/O1CN01ReGXhM1ifZFQdWMiW_!!6000000004440-0-tps-1920-1278.jpg)

封面图：joz_big @ www.unsplash.com 。


## ❄️ TL;DR

👉 Next.js 12<br />
👉 Safari 15<br />
👉 Umi 4 Beta1<br />
👉 Framer Motion 5<br />
👉 DX<br />
👉 UnoCSS<br />
👉 PhotoShop Web Beta<br />
👉 Yarn 3.1<br />
👉 Modern.js<br />
👉 Babel 7.16<br />

## ⚡ 展开讲讲

### Next.js 12
https://nextjs.org/blog/next-12

![](https://img.alicdn.com/imgextra/i2/O1CN01wHqTLO1XnqdPHaKHy_!!6000000002969-2-tps-2628-891.png)

摘要，

* 使用 Rust 编译器 SWC，Fast Refresh 提速 3x，build 提速 5x
* 支持 AVIF，比如 webp 小 20%
* Edge Functions runtime 和 Middleware (beta)
* SSR Streaming 和 React Server Components (alpha)
* Native ESM 和 URL imports (alpha)
* Bot-aware ISR

### Safari 15
https://webkit.org/blog/11989/new-webkit-features-in-safari-15/

摘要，

* Web Extensions 支持 iOS 和 iPadOS，带来扩展能力
* 通过 `<meta name="theme-color"` 可声明状态栏、Tab Bar、滚动区域背景的颜色，支持针对 light 和 dark 模式区分设置
* CSS 方面。支持 `aspect-ratio`；色彩语法支持 `lab()`、`lch()` 和 `hwb()`，提供更丰富的表达方式；列表样式支持 `list-style-type`
* Web Inspector 部分支持 CSS Grid 检查的 Overlay 工具
* JavaScript 方面。Worker 和 ServiceWorker 支持 ES6 Modules；支持 Top Level Await、`Error.cause`、private class methods and accessors、`BigInt64Array`、`BigUint64Array`
* Web API 方面。支持 WebGL 2、Web Share level 2 等

### Umi 4 Beta1
https://github.com/umijs/umi-next

值得关注的五件事，

* MFSU 3（迭代中）并可独立运行，比如接入 Create React App
* Webpack 5 + Vite 双构建引擎，比如可以选择 Dev Vite + Build Webpack 的模式
* 默认快，包含 Fast Refresh、SWC Compiler、ESBuild Minifier、ESBuild Register 等
* 基于 react-router 6 的新路由体系，react-router 这个版本因为 remix 花了不少篇幅处理集中式配置路由，正好给 Umi 用上，删除了大量之前相对 Hack 的代码
* 最新依赖，react 18、react-router 6、node 14+、postcss 8、mini-css-extract-plugin 2、jest 27、eslint 8 等

### Framer Motion 5
https://www.framer.com/docs/guide-upgrade/

摘要，

* 删除 `AnimateSharedLayout` 组件，改用声明 `layoutId` 在 layout 之间移动
* 新增 `LayoutGroup`，子组件 render 时会检测，但不会强制其他子组件 rerender
* 新增 `Reorder` 组件，用来实现拖拽排序动画
* 产物改用 ES Modules 格式，目的是适配 Framer 的 Handshake 能力，让 Framer 组件可以直接被 import 到代码中

### DX
https://dx.phodal.com/

![](https://img.alicdn.com/imgextra/i3/O1CN01bPXala1aKwU3JKJyg_!!6000000003312-2-tps-1496-582.png)

摘要，

* 关注开发者体验之前，应该确保核心功能：完善 + 稳定
* DX 六要素：错误呈现、文档体验、易用性、交互性、触点、支持，见上图
* 度量 DX 的方法包括，1）首次运行所需时间，2）文档触达速度

### UnoCSS
https://antfu.me/posts/reimagine-atomic-css-zh

![](https://img.alicdn.com/imgextra/i2/O1CN016ifIJ41YJRxqO1VY7_!!6000000003038-2-tps-1423-586.png)

摘要，

* 原子化 CSS 是指提供小的单一目的的 util 类的 CSS 架构方式，Tailwind CSS 和 Windi CSS 都属于此类
* Tailwind 会生成了数 MB 的 CSS，使得加载与更新 CSS 成为性能瓶颈
* Windi 通过按需生成的方式可以解 Tailwind 的问题，效果上快 20-100 倍，然后 Tailwind 用相同的技术推出 JIT 按需 Compile 引擎
* Tainwind 和 Windi 虽然用起来是简单，但如果遇到没覆盖的需求，所需的配置和代码量会比直接写 CSS 更复杂，比如 `border-10` 或新增额外的 util 类
* 作者退出 UnoCSS 来解此问题，UnoCSS 是一个引擎，而非一款框架，因为它并未提供核心工具类，所有功能可以通过预设和内联配置提供
* UnoCSS 的定制方式可以是静态，也可以是动态（动静一体，^_^）
* UnoCSS 支持 Variants、Presets 等
* UnoCSS 不支持 Preflight，用户需自行决定用啥 reset 库
* 性能方面，UnoCSS 比 Tailwind JIT 快 200 倍，因为不走 AST，直接用的字符串拼接，并且做了类名和生成字符串缓存，以及不做文件系统预扫描而是直接利用 Vite 的 transform 钩子
* UnoCSS 目前是 Vite Only

### PhotoShop Web Beta
https://web.dev/ps-on-the-web/

![](https://img.alicdn.com/imgextra/i4/O1CN01T8quY71wdeCublCee_!!6000000006331-2-tps-1600-1000.png)

摘要，

* Why Web？Web 相比传统软件有独特的优势，比如可链接、容易访问、可分享、可协作、只要浏览器 + URL、无需安装
* 在 PhotoShop 之前，Adobe 还用 Web 实现过 Spark 和 Lightroom，但都遇到性能问题
* WebAssembly 及其 C++ 工具链 Emscripten 是解此问题的关键，同时 Photoshop 之前是用 C++ 写的，这种方式可复用之前代码，而不是用 JavaScript 从 0 开始实现
* 除了编译出 WASM，Emscripten 还可以编译 POSIX API 为 Web API，转换 OpenGL 到 WebGL，提供虚拟文件系统等等
* PhotoShop 包含大量 UI 元素，他们由不同团队的不同技术栈完成，然后需要合在一起使用，解法是用 Web Components + Lit

### Yarn 3.1
https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak

![](https://img.alicdn.com/imgextra/i4/O1CN01H4pDrx1WSwwgwxGvX_!!6000000002788-2-tps-1404-596.png)

大量功能是在追赶 pnpm，以下是摘要，

* 支持与 Node.js 官方的 Corepack 集成
* PnP 支持 ESM，声明 `type: "module"` 的会自动开启，也可通过 `pnpEnableEsmLoader: true` 手动开启或关闭
* 支持通过 `nodeLinker: pnpm` 切换到基于软链的 pnpm 模式
* 支持 `optionalDependencies`，安装 esbuild、swc 这类依赖可以只下载指定平台的包了
* 支持 `workspace:^` 语法

### Modern.js
https://zhuanlan.zhihu.com/p/426707646

![](https://img.alicdn.com/imgextra/i1/O1CN01fDUPtT1jFI8npQzSX_!!6000000004518-2-tps-2412-978.png)

### Babel 7.16
https://babeljs.io/blog/2021/10/29/7.16.0

摘要，

* 💜 `@‍babel/eslint-parser` 支持 ESLint 8
* 🔋 支持 TypeScript 4.5 的 type Specifier，比如 `import { type a, b } from 'c'`
* 🔀 支持 `.mts` 和 `.cts`，分别采用 `module` 和 `script` 的 source type
* 🌴 默认开启已到 Stage 4 的 `Class static blocks`


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
