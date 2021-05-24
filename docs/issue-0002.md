# MDH 前端周刊第 2 期：babel、deno、0kb JavaScript

**这是 「MDH：前端周刊」 第 0002 期，发表于：2021/05/17。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i3/O1CN011cTW8v1eTsdkp1ad5_!!6000000003873-0-tps-5952-3525.jpg)

封面图：2021.5.15，富阳树石村，摄影师：猪罐头。

## ⬆️ 头条

### 1. Babel 被数百万人使用，那我们为什么没钱了呢?
https://babeljs.io/blog/2021/05/10/funding-update

![](https://img.alicdn.com/imgextra/i2/O1CN01orqiZU1USpZnXdbSk_!!6000000002517-2-tps-1536-864.png)

在我看来 Babel 遇到的问题，

* **开发者感知力弱**，Babel 不是上层应用，开发者其实较少能感知到，特别是像 umi、next.js 等框架的封装，开发者的日程使用完全不需要感知 Babel 的存在
* **强有力的竞争者**，swc、esbuild 的出现，越来越多的框架倾向于选择非 JavaScript 的编译工具来实现提速，Babel 不再是此方向的唯一选择

但就蚂蚁而言，目前 Babel 在前端基建中的作用还是不可动摇的，应用包括，

* TypeScript 支持
* 高级语言特性
* 浏览器兼容
* 基于 babel-plugin-import 的按需编译
* 组件研发
* 自动 css modules 识别
* 约束、lint、代码校验
* 基于代码解析的自动化工具
* …

### 2. Deno 发布 v1.11
https://github.com/denoland/deno/releases/tag/v1.10.1

包括，

* Web Storage API 支持，服务端的 localStorage 和 sessionStorage，前者限 5M
* 重写 deno test，并行 runner、权限、优化输出等
* 支持远端 import map

### 3. 0kb 的 JavaScript 是未来吗？
https://dev.to/this-is-learning/is-0kb-of-javascript-in-your-future-48og

大家讨论 0kb 时候讨论的是什么？

* 渐进增强，Remix 和 SvelteKit 都可以 ssr 页面，然后不依赖 JavaScript 就拥有完整的表单能力
* React Server Components
* Islands Architecture
* Partial Hydration

## 📝 文章

### 1. 不要解决问题，去消灭问题
https://kentcdodds.com/blog/don-t-solve-problems-eliminate-them

全篇看下来更像是 Remix 的软文，但思路没错。我们遇到问题时通常最直接的反应是如何解决他，但换个思路会不会就没有这个问题了？比如 webpack 构建慢社区想了无数的方法，换个思路用非 JavaScript 语言实现，是否就能消灭这个问题呢？

### 2. Hello, Modules!
https://blog.sindresorhus.com/hello-modules-d1010b4e777b<br />
https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c （迁移步骤）

Node 10 已废弃，我们可以安心使用 esm 了。

esm 相比 cjs 有哪些优点？

* 浏览器兼容
* top-level await
* re-export 语法
* 一行代码同时 import default export 和 named exports

附迁移步骤。

### 3. 根据 visibility 懒加载 JS
https://codepen.io/jonneal/full/ZELvMvw

基于 Intersection Observer，是 Islands Architecture 的一种应用，文中给了代码和 DEMO，但触发事件可以不仅是元素的可见，还可以是 media query、container query、event、闲置状态等。

![](https://img.alicdn.com/imgextra/i4/O1CN01Yrsjt728jqvatL0qf_!!6000000007969-1-tps-632-419.gif)

### 4. 我给自己设立了每月 $20 的开源捐赠预算
https://lutaonan.com/blog/my-oss-donation-budget/

👍🏻

### 5. WebAssembly 入门
https://lencx.github.io/book/wasm/rust_wasm_frontend.html

使用 vite 快速开始一个 wasm 项目，vite + (rust -> wasm) + (vue/react)。

自荐人：lencx

### 6. Complete Intro to React, v6
https://btholt.github.io/complete-intro-to-react-v6/

### 7. 使用React 时应避免的10大错误
https://javascript.plainenglish.io/top-10-mistakes-to-avoid-when-using-react-1796711ad2a0

十大错误：

1. 组件拆分不够细
2. 直接修改 state 对象
3. props 里把 number 当 string 传
4. 组件列表不带 key
5. 不清楚 setState 是异步的
6. 过度使用 Redux
7. 写巨石组件而不拆
8. 目录结构不符合社区规范
9. 写惯了 HTML 啥属性都用 String 传
10. 组件名没有用大驼峰

## 🪓 代码

### 1. nuxt/vite
https://github.com/nuxt/vite

Nuxt 2 ❤️ Vite。

### 2. 专注于 React 的代码编辑器是什么样子?
https://codesandbox.io/s/ide-concept-ke6vz

![](https://img.alicdn.com/imgextra/i4/O1CN012WMj301xMWz0v91O7_!!6000000006429-1-tps-600-338.gif)

### 3. sinclairzx81/hammer
https://github.com/sinclairzx81/hammer

浏览器和 Node 应用的构建工具。基于 esbuild，看使用方式，类似 parcel？

### 4. dai-shi/excalidraw-animate
https://github.com/dai-shi/excalidraw-animate

转换 Excalidraw 图纸为动画。

![](https://img.alicdn.com/imgextra/i2/O1CN01kGAlVp1WaHFP64l76_!!6000000002804-1-tps-1244-936.gif)

### 5. microsoft/folio
https://github.com/microsoft/folio

微软出的测试框架，Jest 有竞品了。

```javascript
test('insert an entry', async ({ table }) => {
  await table.insert({ username: 'folio', password: 'testing' });
  const entry = await table.query({ username: 'folio' });
  expect(entry.password).toBe('testing');
});
```

### 6. hellodword/wechat-feeds
https://github.com/hellodword/wechat-feeds

给微信公众号生成 RSS 订阅源，可以使用 rsshub 的，`https://rsshub.app/wechat/feeds/%%bizId%%`，有内容抓取。

### 7. chanify/chanify
https://github.com/chanify/chanify

Chanify 是一个简单的消息推送工具。每一个人都可以利用提供的 API 来发送消息推送到自己的 iOS 设备上。

### 8. princefishthrower/react-use-please-stay
https://github.com/princefishthrower/react-use-please-stay

页面的焦点丢失时，实现标题或 favicon 动画的 React Hook。

![](https://img.alicdn.com/imgextra/i2/O1CN016J5m4Z1rsEhqcviCI_!!6000000005686-1-tps-572-75.gif)

### 9. bytedance/guide
https://github.com/bytedance/guide

基于 React 的新功能引导组件。

![](https://img.alicdn.com/imgextra/i2/O1CN010FjvP71PDByPFpktH_!!6000000001806-2-tps-2726-834.png)

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
