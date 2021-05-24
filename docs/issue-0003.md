# MDH 前端周刊第 3 期：WebContainer、Parcel 2 Beta 3、Sublime Text 4


**这是 「MDH：前端周刊」 第 0003 期，发表于：2021/05/24。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01TA2ShI1I2TOdhCsP9_!!6000000000835-2-tps-1610-906.png)

封面图：2021.5.21，上海。

## ⬆️ 头条

### 1. 介绍 WebContainers：在浏览器里跑 Node.js
https://blog.stackblitz.com/posts/introducing-webcontainers/<br />
https://stackblitz.com/fork/nextjs （尝鲜链接）

![](https://img.alicdn.com/imgextra/i2/O1CN01CUFstl1OIOreLm2Wa_!!6000000001682-1-tps-988-573.gif)

Why WebContainer：

1. 本地环境初始化慢
2. 开源作者复现用户代码存在潜在风险

WebContainer 特点：

1. **比本地环境快**，Build 快 20%，依赖安装快 5 倍
2. **在浏览器里 debug Node.js**，基于 Chrome DevTools，无需安装插件
3. **默认安全**，代码跑在浏览器安全沙箱中，而不是远程服务器

### 2. Parcel 发布 2.0 beta.3
https://v2.parceljs.org/blog/beta3/<br />
https://github.com/parcel-bundler/parcel/pull/5537

![](https://img.alicdn.com/imgextra/i3/O1CN01qkI5uT1Nv2f2qJN0i_!!6000000001631-2-tps-1240-336.png)

包含：

1. 用 Rust 重写了 Compiler 的部分，我理解是在 SWC 的基础上，用 Rust 加了 Parcel 1 功能的适配
2. 支持 Dynamic Import 和 CSS Modules 的 Tree Shaking
3. 支持 dev 模式下的按需编译
4. 更少依赖，Parcel 是唯一一个做依赖按需加载的构建工具？

虽然比 webpack 快，但离 esbuild 还是差很多，

![](https://img.alicdn.com/imgextra/i2/O1CN01kMzkIP1sbZvDQTpAD_!!6000000005785-2-tps-1920-1086.png)

### 3. Sublime Text 4
https://www.sublimetext.com/blog/articles/sublime-text-4

Sublime Text 回来了，开发者还认账吗？优点：支持 TypeScript、JSX、TSX，比 VSCode 快很多，支持 GPU 渲染，UI 支持 8K 分辨率，支持 Tab 多选，支持 Apple M1 和 Linux ARM64；缺点：不支持 Terminal、Git 等。

![](https://img.alicdn.com/imgextra/i4/O1CN01emtHzf1Vslcf3AMgf_!!6000000002709-1-tps-2000-1000.gif)


## 📝 文章

### 1. Rethinking JavaScript Infrastructure
https://cpojer.net/posts/rethinking-javascript-infrastructure

以下是作者的三个观点，

1. **devDependencies 是个错误**，如何区分 dependencies 和 devDependencies？ui 库应该是哪个？作者的观点是应该分开存放，dependencies 产品相关，devDependencies 工具相关
2. **dependencies 部分的三方库代码应该纳入版本控制**，缺点：太大、难以维护、checkout 慢；优点：review 变更、减少对三方的依赖和风险
3. **构建 0 开销的工具**，为啥？1）安装慢 2) 打开慢；如何构建？编译成二进制文件；社区示例：1) deno compile 2) next compiled；如何部署？1) 维护私有的 homebrew tap 2) 继续用 node_modules 但存的是二进制产物

基于以上思路，作者把项目流程从 7 分钟减少到 6 秒钟。

### 2. TypeScript 中六个不可靠因素
https://effectivetypescript.com/2021/05/06/unsoundness/

作者介绍了一些虽然类型对但运行时却出问题的原因，

1. **any**
2. **类型断言**，比如 `alertNumber(x1 as number)`
3. **对象和数组查看**，比如访问不存在的成员类型不报错但运行时报错
4. **不准确的类型定义**，比如依赖声明的类型不对，尤其是 src 和类型定义分开写的场景
5. **The thing with variance and arrays**
6. **Function calls don't invalidate refinements**

### 3. Vite，下一代 Web 工具
https://mp.weixin.qq.com/s/4No218FR5wqGPjs6Df4PgQ

Vue Conf 2021 分享内容。来自字节的李奎。

![](https://img.alicdn.com/imgextra/i2/O1CN01jPc0i31XioEwLnnIl_!!6000000002958-2-tps-774-342.png)

### 4. Chrome 支持识别用户笔迹
https://web.dev/handwriting-recognition/

目前只支持英文。

![](https://img.alicdn.com/imgextra/i2/O1CN01R1jmSP1qdIAbjHsri_!!6000000005518-1-tps-657-300.gif)

### 5. 都 2021 了你居然还在用 WebStorm ？是的！
https://mp.weixin.qq.com/s/7Ro3jLoDUu8s2MNGM3-lMQ

到底 WebStorm 更香在哪儿，周末花了个下午写篇文章来开一个 “历史倒车轮“，给大伙介绍一下「如何用上 WebStorm 最新正版？」「如何让 WebStorm 好用不卡？」，以及「WebStorm 香的地方在哪里？」。

![](https://img.alicdn.com/imgextra/i1/O1CN01qxqn651yzI7e5UgJU_!!6000000006649-1-tps-1080-675.gif)

### 6. web.dev 的 css 教程
https://web.dev/learn/css/

An evergreen CSS course and reference to level up your web styling expertise.

推荐人：jiweiyuan

### 7. 《JavaScript 二十年》出版啦！
https://juejin.cn/post/6963241181358587911
https://cn.history.js.org/ （电子版）

推荐人：海康-8-xx

### 8. 关于 Yak Shaving
https://antfu.me/posts/about-yak-shaving-zh

同类人，😄，写公众号前我会先写个公众号的工具。。

### 9. VueConf 21 视频
https://space.bilibili.com/388510269/video

![](https://img.alicdn.com/imgextra/i2/O1CN019EMTAM1ESnhQNZcFo_!!6000000000351-2-tps-1782-976.png)

## 🪓 代码

### 1. alephjs/aleph.js
https://github.com/alephjs/aleph.js

基于 deno 的 react 框架，支持 ssr。

推荐人：segmentfault - 6 - robin

### 2. pmndrs/use-gesture
https://github.com/pmndrs/use-gesture

和组件绑定的 mouse/touch 手势的 util 方法。

![](https://img.alicdn.com/imgextra/i4/O1CN01f89Ppt1p6UBY9n6uS_!!6000000005311-1-tps-400-300.gif)

### 3. npm/lint
https://github.com/npm/lint

Lint the npmcli way.

### 4. juggle/resize-observer
https://github.com/juggle/resize-observer

ResizeObserver API 补丁。

### 5. Turkyden/react-darkreader
https://github.com/Turkyden/react-darkreader

一个能让你的网站自如切换 🌜/🌞 (黑夜/白天)模式的 React Hook！

![](https://img.alicdn.com/imgextra/i3/O1CN014hb3ze1f2ELYcE99f_!!6000000003948-1-tps-775-308.gif)

自荐人：Turkyden

### 6. mswjs/msw
https://github.com/mswjs/msw

Seamless REST/GraphQL API mocking library for browser and Node.js. 基于 Worker 实现，在网络层拦截。

![](https://img.alicdn.com/imgextra/i3/O1CN01m1QLEN1v0QdtxjliT_!!6000000006110-2-tps-2538-1814.png)

## 🕒 订阅

<p>&nbsp;</p>

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
