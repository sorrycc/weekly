# MDH 前端周刊第 19 期：prettier 2.4、命名速查表、资源引用、React 18、Corepack

**这是 「MDH：前端周刊」 第 0019 期，发表于：2021/09/13。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i3/O1CN01iVGJtG1Xr3OfHUmXa_!!6000000002976-0-tps-1920-1080.jpg)

封面图：hadijasaidi @ www.unsplash.com 。


## ❄️ TL;DR

👉 prettier 2.4<br />
👉 tiny-sass-compiler<br />
👉 命名速查表<br />
👉 资源文件引用的昨天、今天和明天<br />
👉 react-render-tracker<br />
👉 Node.js core 新鲜货<br />
👉 React 18 的 4 个更新<br />
👉 my room in 3d<br />
👉 Corepack<br />

## ⚡ 展开讲讲

### prettier 2.4
https://prettier.io/blog/2021/09/09/2.4.0.html

支持 TypeScript 4.4 的 Class Static Blocks 语法，Stage 4；配置项 jsxBracketSameLine 重命名为更通用的 bracketSameLine，可同时作用于 HTML、Angular、Vue 和 JSX。

### tiny-sass-compiler
https://github.com/wizardpisces/tiny-sass-compiler

一个简单的 SASS 编译器，支持模块化，变量，嵌套，继承，@mixin，插件系统，SourceMap生成等。

### 命名速查表
https://github.com/kettanaito/naming-cheatsheet

![](https://img.alicdn.com/imgextra/i2/O1CN01dGIaUm266LYfIqIYn_!!6000000007612-2-tps-1436-382.png)

摘录如下，

1. 函数命名公式，`prefix? + action (A) + high context (HC) + low context? (LC)`，如上图，Action 是函数名里的动词，Context 是函数要操作的领域，Prefix 用于增强含义，较少用于函数名，更多用于变量
2. shouldComponentUpdate 和 shouldUpdateComponent 是不同的，试着理解其区别
3. 命名遵循 S-I-D 原则，Short（简短）、Intuitive（直观）、Descriptive（达意），直观指用自然语言描述而不要文绉绉，达意指要能表达其含义
4. 避免缩写，缩写没其他用，反而会降低代码可读性，比如 `onItmClk` 应该写成 `onItemClick`
5. 避免上下文重复，比如在 `MenuItem` class 里就不需要用 `handleMenuItemClick`，用 `handleClick` 就好

试着搜了下，没找到更好的手册和文档，有兴趣的可以翻翻《代码整洁之道》第二章和《代码精进之路：从码农到工匠》第一章。

### 资源文件引用的昨天、今天和明天
https://web.dev/bundling-non-js-resources/

![](https://img.alicdn.com/imgextra/i1/O1CN01LpHt9J1G9gQJedBC5_!!6000000000580-2-tps-1600-993.png)

1. 昨天，`import ... from './image.png` 或 `import ...from 'asset-url:./image.png'`
2. 今天，`new URL('./image.png', import.meta.url)`
3. 明天，`await impiort.meta.resolve('./image.png')`

### react-render-tracker
https://github.com/lahmatiy/react-render-tracker

![](https://img.alicdn.com/imgextra/i3/O1CN01fM9DoC1cNoBassmRh_!!6000000003589-2-tps-2638-1074.png)

A tool to discover performance issues related to unintended re-renders. STATUS: MVP / proof of concept. 基于 rempl 。

### Node.js core 新鲜货
https://simonplend.com/whats-new-in-node-js-core/

摘要，

1. uuid 生成不需要借助外部库，`crypto.randomUUID()` 即可
2. 支持用 `AbortController` 和 `AbortSignal` 取消异步请求
3. 引用 node 原生库可以加 `node:` 前缀，比如 `import url from "node:url"`
4. 除 `util.promisify()` 可封装 callback-based API 为 Promise 外，node 还为 fs、dns、timers 和 stream 提供了 promises 的接口，比如 `import { setTimeout } from 'timers/promises'; await setTimeout(5000, 'some value')`

### React 18 的 4 个更新
https://dev.to/codewithtee/are-you-ready-for-react-18-4ip1

摘要，

1. 优化 Automatic batching，之前只支持 event handler 里的同步，不支持异步，比如 `fetch().then(...)` 里做的事，React 18 之后支持
2. Server-Side Rendering 改进了两点，1 是 Streaming HTML，不用等 HTML 全部返回回来就可以渲染，遇到 `<Suspense fallback={<Spinner />}>{children}</Suspense>` 这种，会先渲染 `Spinner`，等数据好了后再通过行内 script 的方式动态添加；2 是选择性 Hydration，不用等所有 JavaScript 加载完一次性 Hydration
3. UI 更新分紧急和不紧急，给不紧急的加 `startTransition(() => {})`，剩下更多资源留个紧急更新，可以让渲染更顺畅
4. Root API 更新，之前是 `ReactDOM.render(<App />, container)`，React 18 之后改成 `ReactDOM.createRoot(container).render(<App />)`

### my room in 3d
https://my-room-in-3d.vercel.app/

![](https://img.alicdn.com/imgextra/i2/O1CN017QCZYh1i1imTaF8gk_!!6000000004353-2-tps-2000-1356.png)

### Corepack
https://nodejs.org/en/blog/release/v16.9.0/

Node 16.9 开始提供 corepack，可不安装 yarn 或 pnpm 而直接使用，就像 npm 一样。

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
