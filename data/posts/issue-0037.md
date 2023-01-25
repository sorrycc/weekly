---
title: "Remix vs. Next、Electron 迟暮、Vitekit、多租户"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN0133XIbD1DZqEDuIjHZ_!!6000000000231-0-tps-1920-1440.jpg"
titleImageCaption: "sigmund @ unsplash"
publishedAt: "2022/01/24"
---

## ❄️ TL;DR

👉 Remix vs. Next.js<br />
👉 Webpack 支持 CSS<br />
👉 CLAY.CSS<br />
👉 Vitekit<br />
👉 TypeScript 4.6 Beta<br />
👉 多租户模板<br />
👉 开源金字塔<br />
👉 Electron 迟暮<br />
👉 The New Vue<br />


## ⚡ 展开讲讲

### Remix vs. Next.js

[https://remix.run/blog/remix-vs-next](https://remix.run/blog/remix-vs-next)

![](https://img.alicdn.com/imgextra/i1/O1CN01HtWout1NmnfAiFhJ9_!!6000000001613-2-tps-1200-627.png)

一篇介绍 Remix 和 Next.js 区别的文章，由于是 Remix 团队所写，可以辩证地看。

摘要，

1、不管是 serve 静态内容还是动态内容，remix 都更快<br />
2、网速不好时，remix 更快<br />
3、remix 自动处理错误、终端、race condition，而 next.js 没有<br />
4、next.js 推荐用 client side 脚本处理动态内容，而 remix 不用<br />
5、next.js 需要 client side 脚本做 data mutation，而 remix 不需要<br />
6、数据增加时，next.js 构建时间会线性增加，而 remix 基本不受数据影响<br />
7、remix 的抽象让应用代码更优雅<br />

### Webpack 支持 CSS

[https://github.com/webpack/webpack/issues/14893](https://github.com/webpack/webpack/issues/14893)

webpack 5.66 终于开始支持 native css，通过 experiments.css 开启，之后将不再需要 mini-css-extract-plugin 和 css-loader，由于没有使用 postcss，性能也会更好，同时还支持 HMR 和按需加载。

### CLAY.CSS

[https://codeadrian.github.io/clay.css/](https://codeadrian.github.io/clay.css/)

![](https://img.alicdn.com/imgextra/i2/O1CN01bWSICa1oBEnxJvPvC_!!6000000005186-2-tps-1600-869.png)

实现可爱黏土风的 CSS 库。

### Vitekit

[https://egoist.sh/building-vitekit-1](https://egoist.sh/building-vitekit-1)

作者计划 14 天手写 Vitekit，其 kit 命名来自 SvelteKit。对于这个话题还挺感兴趣，但是到第二天貌似就断更了。

为啥不是 remix？作者给了 3 个理由。1）react only，不支持 vue 和 svelte 2）基于 esbuild 实现，从而有一些限制，比如不支持 hmr 3）框架风格不像 next.js 这类前端框架，更像 rails 这类全栈全栈框架。

「No framework is better than another, it's all perferences and trade-offs.」认同这句话。

记录一些特点。ESM-only package；类 remix 的文件系统路由；SSR；基于 vue-router 的路由功能；插件分三类，plugin、adapter 和 framework，adapter 用于平台支持，framework 区分框架比如 react 和 vue；import all from kit，英雄所见略同，两年前在 umi 里加的 import all from umi 功能，如今在 remix、prisma 等库里均有使用。

### TypeScript 4.6 Beta

[https://devblogs.microsoft.com/typescript/announcing-typescript-4-6-beta/](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6-beta/)

其中一个特性是 constructor 构造函数中，允许在调用 super 前写非 this 代码。这是由于 JavaScript 的限制，super 前不能调用 this，TypeScript 之前出于实现的原因，规定不能执行所有代码。

```js
class Foo {
  constructor() {
    // 之前会报错
    doSomeThing();
    super();
  }
}
```

### 多租户模板

[https://demo.vercel.pub/platforms-starter-kit](https://demo.vercel.pub/platforms-starter-kit)

![](https://img.alicdn.com/imgextra/i1/O1CN019g5Cil28BxkRBe5qO_!!6000000007895-2-tps-1600-837.png)

vercal 的多租户模板，适用于 Blog 平台、NoCode 平台、B2B2C 平台等，示例模板基于 next.js、tailwindcss、prisma、planetscale、nextauth 和 vercal 实现。

### 开源金字塔

[https://daniel.haxx.se/blog/2022/01/17/enforcing-the-pyramid-of-open-source/](https://daniel.haxx.se/blog/2022/01/17/enforcing-the-pyramid-of-open-source/)

![](https://img.alicdn.com/imgextra/i2/O1CN01lh9fJP1Q17H0voRsq_!!6000000001915-2-tps-1600-900.png)

### Electron 迟暮

[https://12ft.io/proxy?q=https://medium.com/geekculture/the-end-of-electron-is-near-310467d6415](https://12ft.io/proxy?q=https://medium.com/geekculture/the-end-of-electron-is-near-310467d6415)

​​![](https://img.alicdn.com/imgextra/i1/O1CN01ziedud1wmLpJXXhOb_!!6000000006350-2-tps-560-560.png) 

作者有点标题党，但 Electron 确实让人又爱又恨。

Electron 非常流行，也被大量公司使用，也有很多成功软件，比如 VSCode、Facebook Messager、Twitch、Microsoft Teams 等。Electron 虽然上手容易，但问题也很明显，就是慢、吃内存和大，Electron 吃内存是因为打包的 Chromium 吃内容，同时一个 Hello World 编译后就要 120M+ 。

那不用 Chromium 用啥呢？作者给的答案是用 Webview。但纯用 Webview 肯定没 Electron 好用，所以就有了 Tauri。

介绍下 Tauri。Tauri 包含两个组件，wry 和 tao。前者是类 webview 的渲染库，后者用于管理窗口和系统栏。Tauri 虽然用 Rust 写，但使用它不需要了解 Rust，使用 JavaScript API 也可以的。从 [benchmarks](https://tauri.studio/benchmarks/) 看，依赖简单的项目尺寸只需 2M 多，内存占用也只有 Electron 的一半。

### The New Vue

[https://www.youtube.com/watch?v=2KBHvaAWJOA](https://www.youtube.com/watch?v=2KBHvaAWJOA)

![](https://img.alicdn.com/imgextra/i3/O1CN01O7RLya1mLCBTxvTDU_!!6000000004937-2-tps-1600-863.png)

尤大在 VueToronto 的分享，一些摘要，

1、VueCli ➡ Vite，1.4M+ 月下载<br />
2、Vetur ➡ Volar，IDE 支持方案迭代，支持 TypeScript<br />
3、vue-tsc，用于 Vue SFC 和 TS 文件的 type check<br />
4、Vuex ➡ Pinia，新的数据流方案<br />
5、Vue Devtools 6<br />
6、New Vue SFC Playground<br />
7、vuejs.org 新官网，暗黑模式，基于 VitePress，默认版本切到 Vue 3<br />
8、几个新 RFC。1）Ref Transform，用 $ 转换 ref 到 var，用 $$ 反之 2）Props Destructure Transform<br />

