
# MDH 前端周刊第 5 期：Lighthouse 8、Chrome 92、手写测试框架、Unbundled 开发工具

**这是 「MDH：前端周刊」 第 0005 期，发表于：2021/06/07。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i1/O1CN01iUtNIF1XiLqkT20eZ_!!6000000002957-0-tps-1920-1272.jpg)

封面图：Sergi Ferrete @ www.unsplash.com 。

## ⬆️ 发布

### 1. Lighthouse 8
https://github.com/GoogleChrome/lighthouse/blob/master/changelog.md

Lighthouse 8 会随 Chrome 93 一起发布。

### 2. Chrome 92 Beta
https://blog.chromium.org/2021/06/chrome-92-web-apps-as-file-handlers-new.html<br />
https://developer.chrome.com/blog/new-in-devtools-92/

![](https://img.alicdn.com/imgextra/i3/O1CN01cxAVZh29CFUGw0f9R_!!6000000008031-2-tps-1600-972.png)

以下是 DevTools 的改动，

* CSS grid 编辑器
* Console 里 const 声明的变量可以重新声明
* 改进 CORS 调试
* Network 过滤重命名 XHR 为 Fetch/XHR，添加 Wasm 过滤
* Lighthouse 7.5
* 试验：Puppeteer Recorder


## 📝 文章

### 1. Building a JavaScript Testing Framework
https://cpojer.net/posts/building-a-javascript-testing-framework

手写一个测试框架需要几步？

1. 快速找到测试文件
2. 并行运行所有测试
3. 使用断言框架编写测试和报告结果
4. 让测试互不影响

此外，基于 jest 的 50 个 package 会让你事半功倍。

### 2. 渐进式 Unbundled 开发工具探索之路
https://mp.weixin.qq.com/s/735yMXZr3GNafaS3mEy8lA

![](https://img.alicdn.com/imgextra/i2/O1CN01igZisD1XQ20VcTxWl_!!6000000002917-2-tps-974-588.png)

得益于现代浏览器内置了模块处理系统(ESM), 业界新兴开发工具 Snowpack、WMR、Vite 等直接将模块解析加载过程直接交给浏览器， Dev Server 能够秒级启动。和传统开发工具编译时解析加载模块最终打包到 JS Bundle 中相比，本地开发体验提升明显。

作者借鉴 Vite 的思路实现了一个 Unbundled Dev Server，不直接用 Vite 的原因是：

1. 依赖预处理过程需要深度定制
2. 深度定制需求
3. 后续维护与发展

依赖预处理用 CJS 转 ESM 的线上服务是亮点。

### 3. Writing Custom REPLs in Node.js
https://nathan.vegas/blog/post/1/

### 4. How to Find and Remove Dead CSS
https://blog.testdouble.com/talks/2021-06-03-how-to-find-and-remove-dead-css/

### 5. 如何给你的代码祝寿？
https://mp.weixin.qq.com/s/nLlZjMan0mMT0QWAM2jYWA

![](https://img.alicdn.com/imgextra/i1/O1CN011hGkgO1sSsOgdSxn0_!!6000000005766-2-tps-3496-1860.png)

生成的视频很酷，所以 FateRiddle 是机器人？

### 6. [万字总结] 一文吃透 Webpack 核心原理
https://xie.infoq.cn/article/ddca4caa394241447fa0aa3c0

### 7. 畅销书《深入浅出Vue.js》作者，在阿里淘系1年的收获成长
https://mp.weixin.qq.com/s/EF86vmJfZJ-hUReFHM8HDw

好多不错的 Tip，

* 把一些平时做事的时间换成什么都不做，坐在那“思考”，想一些东西
* 复杂的事哪来？“思考得来”
* 技术与业务两条腿走路
* 发挥稳定型（线性增长）选手比阶段性发挥波峰波谷选手更有优势
* 贝利体系
* 不要担心“做的不好”或“不完美”而不敢同步进展和风险，因为“差的信息”比“没有信息”要好很多
* 不要把自己当做唯一的资源
*  “悲观”态度给答复

### 8. Making JavaScript run fast on WebAssembly
https://bytecodealliance.org/articles/making-javascript-run-fast-on-webassembly

### 9. Svelte for the Experienced React Dev
https://css-tricks.com/svelte-for-the-experienced-react-dev/

### 10. 前端项目负责人在项目初期需要做什么？
https://juejin.cn/post/6968874442554343455

### 11. Love, Death & React
https://www.youtube.com/watch?v=YtcINOj2w5g<br />
https://github.com/wcandillon/love-death-react

### 12. React 18 不远啦
https://mp.weixin.qq.com/s?__biz=MzkzMjIxNTcyMA==&amp;mid=2247486364&amp;idx=1&amp;sn=3eed2aa5775a27ab7d256575be16f2e5

![](https://img.alicdn.com/imgextra/i3/O1CN01nj6cqL1sKdGg5V8Dz_!!6000000005748-2-tps-1620-936.png)

### 13. 2021 年你可能不知道的 CSS 特性 (上)
https://mp.weixin.qq.com/s/rEhGzBrkRyY_E250hpFLSQ

### 14. How To Add Prettier and ESLint Automation to a React Codebase
https://www.swyx.io/prettier-eslint-react/

### 15. 如何使用 React 创建视频和动画
https://mp.weixin.qq.com/s?__biz=MzI5MDU2MDY0Mw==&mid=2247494359&idx=1&sn=bb6eeac547c2e980e7066dc0113f554c

### 16. Getting Started With Webpack
https://www.smashingmagazine.com/2021/06/getting-started-webpack/

### 17. An Introduction to WebAssembly for JavaScript Developers
https://pascalpares.appspot.ovh/webassembly-for-javascript-developers/


## 🪓 代码

### 1. 纯 CSS 实现 Typing 效果
https://codepen.io/denic/pen/GRoOxbM

![](https://img.alicdn.com/imgextra/i1/O1CN012QdX6M1LTRZJ4e2GI_!!6000000001300-1-tps-463-239.gif)

```css
animation: typing 2s steps(22), blink .5s step-end infinite alternate;
```

### 2. devongovett/dprint-node
https://github.com/devongovett/dprint-node

A node API for the dprint TypeScript and JavaScript code formatter.

### 3. kucherenko/jscpd
https://github.com/kucherenko/jscpd

检测代码重复度。

### 4. sorrycc/toy-vite
https://github.com/sorrycc/toy-vite

手写一个 Vite。

### 5. danger/danger
https://github.com/danger/danger

提供一些 code review 相关工具，包含各个语言。

### 6. daybrush/moveable
https://github.com/daybrush/moveable

![](https://img.alicdn.com/imgextra/i1/O1CN01ZCFHDi21P3deMbykj_!!6000000006976-1-tps-210-210.gif)

Moveable! Draggable! Resizable! Scalable! Rotatable! Warpable! Pinchable! Groupable! Snappable!

### 7. sablejs/sablejs
https://github.com/sablejs/sablejs

使用 JavaScript 编写的更快更安全的 JavaScript 解释器，其可以用来：

1. 执行沙盒(类似于Figma的插件沙盒，但是更易于使用)
2. 小游戏/小程序的动态执行
3. 通过将 JavaScript 编译为 opcode 进行代码保护

已覆盖约 95% 的 test262 es5-tests cases。

### 8. tree-sitter/tree-sitter
https://github.com/tree-sitter/tree-sitter

An incremental parsing system for programming tools.

### 9. chilllab/react-nice-avatar
https://github.com/chilllab/react-nice-avatar

![](https://img.alicdn.com/imgextra/i3/O1CN01bt3MAu1YoaraIwmcW_!!6000000003106-2-tps-1026-318.png)

基于 Option 生成 avatar 头像。


## 🎁 代码之外

### 1. 一群北京高薪90后决定集体裸辞：花光积蓄同住1000㎡、不买菜不吃外卖，变穷也开心！
https://mp.weixin.qq.com/s?__biz=MzAwNjE2NzMyNg==&mid=2650984881&idx=1&sn=0ae79e7fceaa5e2178093312cd1d5095

### 2. 🎬 猎狼者 ☆☆☆☆
https://movie.douban.com/subject/35133009/

### 3. 🎮 双人成行 ☆☆☆☆☆
http://www.vgtime.com/game/11835.jhtml

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
