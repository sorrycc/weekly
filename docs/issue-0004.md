# MDH 前端周刊第 4 期：Chrome 91、Jest 27、TypeScript 4.3

**这是 「MDH：前端周刊」 第 0004 期，发表于：2021/05/31。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i1/O1CN013aF1IR1sTKnGa0IBm_!!6000000005767-0-tps-1280-853.jpg)

## ⬆️ 发布

### 1. Chrome 91
https://developer.chrome.com/blog/new-in-chrome-91/<br />
https://blog.chromium.org/2021/04/chrome-91-handwriting-recognition-webxr.html<br />
https://v8.dev/blog/v8-release-91<br />
https://v8.dev/features/simd<br />
https://web.dev/webtransport/<br />
https://mp.weixin.qq.com/s/iyx7-yfTTc_sPvMdWxr1dg

![](https://img.alicdn.com/imgextra/i4/O1CN01qn0EZu211hRA6IULo_!!6000000006925-2-tps-1600-900.png)

改动，

* 升级 V8 到 9.1，默认开启 Top-level await
* 默认开启 WebAssembly SIMD
* 支持 WebTransport，WebSockets 之外的又一种双向通讯方式，UDP-like datagrams，可取消
* WebSockets 支持 HTTP/2，可以和其他请求复用一个 TCP 连接，不用单独建一个，从而提升速度
* ServiceWorker 支持 ES Modules
* File System Access API 更新，showSaveFilePicker 支持 suggestedName，showOpenFilePicker 支持 startIn
* Clipboard 接口支持读文件，通过 paste 事件加 e.clipboardData.files 获取
* 新增 GravitySensor 接口，用于手机游戏研发
* 禁用端口 10080
* 支持关联站点共享凭据，通过在 `/.well-known/assetlinks.json` 声明实现

### 2. Jest 27 发布: New Defaults for Jest, 2021 edition ⏩
https://jestjs.io/blog/2021/05/25/jest-27

改动，

* 交互模式支持 step through 失败用例
* Snapshots 支持没有 prettier 时用 Inline 模式
* native ESM 支持牵涉面太广，做了一部分，custom runner、reporters、watch plugins 等也将支持 esm
* 支持 link 过来的 test 文件
* transform 支持异步，可以更好地支持 esbuild、snowpack 和 vite 等
* 默认测试环境从 jsdom 改为 node，因为 jsdom 性能差，而很多人测 node 也用了他

### 3. TypeScript 4.3
https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/

![](https://img.alicdn.com/imgextra/i4/O1CN01uuQrCw1qSl43wPpCy_!!6000000005495-1-tps-1910-1550.gif)

* get/set 支持不同类型
* Smarter Narrowing
* 'override' Checks
* `#private` Elements
* 修复 ‘—incremental' and '--watch’ 开启时会明显降低初始启动速度的问题，同时大幅减少 .tsbuildinfo 文件尺寸
* 自动 Import 改进，主要是顺序问题，import 先写方法，而不是先写库名
* 注释里可通过 '@link' Tags 做链接

### 4. CodeSandbox 收购 playdotjs，后者是 iOS 上的 JavaScript IDE
https://twitter.com/codesandbox/status/1397548056426553346

![](https://img.alicdn.com/imgextra/i3/O1CN01jOreT71iWPIEGg9pv_!!6000000004420-2-tps-1516-1134.png)

## 📝 文章

### 1. 迁移 15w 行代码的 Webpack 项目到 Vite + ESBuild
https://dev.to/noriste/migrating-a-150k-loc-codebase-to-vite-and-esbuild-why-part-1-3-2idj

![](https://img.alicdn.com/imgextra/i4/O1CN0165vb7L254gTzyBKgC_!!6000000007473-0-tps-880-769.jpg)

Vite 的优点应该都了解过无数遍了，大家可以主要看看迁移到 Vite 有啥坑。

速度方面，

* 启动和热更新都是 Vite 快，尤其是热更新
* 有缓存时刷浏览器，vite（11s）也比 webpack（7s) 慢
* vite 构建其实不够快，webpack + esbuild-loader（42s） 会比 Vite（58s） 快

![](https://img.alicdn.com/imgextra/i4/O1CN01S46OlU1Ksnsh7FWBc_!!6000000001220-2-tps-1374-1118.png)

其他，

* 保存多次后，DevTool 的源码 Panel 会包含一个文件的多个版本，影响选择
* 浏览器前进后退会载入旧的缓存文件，但又不能禁用缓存，因为会慢很多
* Vite 比 Webpack 消耗更少的内存，但工作都移到浏览器里了，风扇可以作证
* 大量 Hot Reload 之后，最好完整刷下页面
* 部分文件在 Devtools 里设置断点，原因未知
* dev 应用比 build 应用慢非常多

### 2. Deep dive in CORS: History, how it works, and best practices
https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/

![](https://img.alicdn.com/imgextra/i3/O1CN01eHQNOL29nLZA9CTiX_!!6000000008112-2-tps-2342-2100.png)

### 3. 帮助 Babel 迁移到 ES Modules
https://bigbinary.com/blog/helping-babel-move-to-esm

大家都在迁 ESM，Babel 8 其中一个目标是发布为 ESM 格式。

### 4. VSCode 的 16 个快捷键
https://dev.to/basecampxd/16-vs-code-shortcuts-for-faster-coding-4k5a

有用！

![](https://img.alicdn.com/imgextra/i2/O1CN01yt8xi31wY9QDnuJN2_!!6000000006319-1-tps-880-495.gif)

### 5. 尤雨溪：做技术哪有什么两全之策，都是取舍和平衡
https://mp.weixin.qq.com/s/_q_SnCbGyXrNnXA876tXbA

### 6. 极简 React 入门配置
https://kentcdodds.com/blog/super-simple-start-to-react

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
    <script type="text/babel">
      ReactDOM.render(<div>Hello World</div>, document.getElementById('root'))
    </script>
  </body>
</html>
```

## 🪓 代码

### 1. react-hookz/web
https://github.com/react-hookz/web

react-use 维护者弃坑后新挖了一个。

### 2. Zettlr/Zettlr
https://github.com/Zettlr/Zettlr

A Markdown Editor for the 21st century.

### 3. epicmaxco/vuestic-ui
https://github.com/epicmaxco/vuestic-ui

![](https://img.alicdn.com/imgextra/i2/O1CN01HptFFp28Omi802bcF_!!6000000007923-2-tps-3456-1674.png)

新出的 Vue3 UI 库。

### 4. azu/commonjs-to-es-module-codemod
https://github.com/azu/commonjs-to-es-module-codemod

转换 cjs 代码到 esm，基于 jscodeshift 的 codemod。

### 5. antonk52/why-npm-i-so-long
https://github.com/antonk52/why-npm-i-so-long

![](https://img.alicdn.com/imgextra/i1/O1CN01182KdO1SzEMklpw7s_!!6000000002317-2-tps-1449-1297.png)

检查项目依赖尺寸。

### 6. jonluca/vite-typescript-ssr-react
https://github.com/jonluca/vite-typescript-ssr-react

基于 Vite + React + TypeScript + SSR 的脚手架。

### 7. yisar/labor
https://github.com/yisar/labor

Simple implementation of Web Container.

### 8. Tencent/secguide
https://github.com/Tencent/secguide

腾讯开源的代码安全策略文档。

推荐人：自创-4.7年-奶斯

## 🎁 代码之外

### 1. 如何不花钱，让人工智能帮你视频抠图？
https://sspai.com/post/66759

### 2. 黄河石林百公里越野赛到底发生了什么
https://mp.weixin.qq.com/s/LN45sMAsUFlPHx65ilVqrQ

### 3. 声东击西：#164 社交媒体时代的「我爱你」
https://www.xiaoyuzhoufm.com/episode/60a5df10e9bfa0e42e7214fb

在 520 这一天，谈谈社交媒体时代的爱情。

### 4. 展开讲讲：26.温柔是一种人设，还是真实存在的？从《御赐小仵作》看男性形象的变化
https://www.xiaoyuzhoufm.com/episode/60adeef7fc45ae56ca571f23

### 5. 御赐小仵作 ☆☆☆☆
https://movie.douban.com/subject/32581207/

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
