# MDH 前端周刊第 20 期：Nuxt 3、øJS、MUI 5、Snowpack 弃坑、astro-repl

**这是 「MDH：前端周刊」 第 0020 期，发表于：2021/09/20。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01iaBamD1D8opYCAp6K_!!6000000000172-0-tps-1920-1239.jpg)

封面图：jezael @ www.unsplash.com 。


## ❄️ TL;DR

👉 Deno 1.14<br />
👉 Nuxt 3 在路上<br />
👉 TypeScript unknown 和 any <br />
👉 Maps vs. Objects<br />
👉 øJS<br />
👉 Frontend Roadmap in-depth<br />
👉 MUI 5<br />
👉 Snowpack 弃坑<br />
👉 next-runtime<br />
👉 astro-repl<br />
👉 gremlins.js<br />

## ⚡ 展开讲讲

### Deno 1.14
https://deno.com/blog/v1.14

✅ More Web Crypto
✅ Config for lint and fmt
✅ URLPattern
✅ Stabilization of Deno.upgradeWebSocket
✅ Zero-copy transfers between workers
✅ File locking APIs
✅ Mutual TLS support in fetch
✅ V8 9.4
✅ TypeScript 4.4

### Nuxt 3 在路上
https://nuxtjs.org/v3/

![](https://img.alicdn.com/imgextra/i1/O1CN0105MpcK1SWNR2syQPA_!!6000000002254-2-tps-2450-1260.png)

1️⃣ Component level data fetching
2️⃣ Incremental Static Generation support
3️⃣ Faster builds and 75x smaller server deployments

### TypeScript unknown 和 any 
https://dmitripavlutin.com/typescript-unknown-vs-any/

相同的是 unknown 和 any 都可接收任意值，不同的是 unknown 的值必须 type check 或 type assertion 后才可使用，否则报错。 推荐用 any 的地方优先用 unknown，因为 unknown 至少类型安全。

```js
function invokeAnything(callback: unknown) {
  // you cannot operate on `unknown` type 
  // before doing a type check or type assertion
  if (typeof callback === 'function') {
    callback();
  }
}

invokeAnything(1);
```

### Maps vs. Objects
https://twitter.com/mgechev/status/1437997120263491590

![](https://img.alicdn.com/imgextra/i1/O1CN01L5jDmb1yht61SsObI_!!6000000006611-2-tps-1262-1800.png)

### øJS

用 astro 和 next.js 的对比
https://lightest.app/c/bPAK7DIY17
https://github.com/TheoBr/t3-astro

vitepress 0.18 的 mpa mode
https://blog.vuejs.org/
https://github.com/vuejs/vitepress/blob/master/CHANGELOG.md

### Frontend Roadmap in-depth
https://twitter.com/suprabhasupi/status/1436955245414813699

🤔：前端 2021 应该了解什么？LowCode、NoCode、WebAssembly、øJS、多端构建？还是和 2020 一样，HTML、CSS、JavaScript 、Framework、State Management、SSR、Bundle Tools、AST、... ？学长青的东西，还是追热点？

### MUI 5
https://mui.com/blog/mui-core-v5/

经过 400 多天的开发和 40 多个 canary 版本，MUI 发布了 V5 。

1. Material-UI 更名为 MUI
2. 样式方案从 JSS 切换到 emotion，使用 react 社区默认的 `styled` API，同时支持写 wrapper 切换到其他 inline-css 方案，比如用 `@mui/styled-engine-sc` 切换到 styled-component
3. 一些通过 `styled` 创建组件过于麻烦的场景，可通过 `sx` 属性提供原子化的样式，比如 `<Slider sx={{ my: 1 }} />` 会加上 `margin: 8px 0`
4. 主题支持扩展，比如新增一个颜色，同时扩展也支持 variants
5. 为有强定制需求的场景提供了 Unstyled components，或者叫 headless 组件，由 hooks 和没有样式的组件组成，目前是 alpha 阶段
6. DX 改进包含：测试工具从 Enzyme 切换到 Testing Library；兼容 React Strict Mode；等
7. 发布 MUI X，提供更多组件，付费

### Snowpack 弃坑
https://dev.to/fredkschott/5-more-things-i-learned-building-snowpack-to-20-000-stars-5dc9

![](https://img.alicdn.com/imgextra/i1/O1CN01TqTTja1OQBcaKEsjs_!!6000000001699-2-tps-1420-768.png)

![](https://img.alicdn.com/imgextra/i4/O1CN011nXGvL1tQsJ80hRha_!!6000000005897-2-tps-2622-1420.png)

![](https://img.alicdn.com/imgextra/i4/O1CN01Sqz3Md1PHlxbQg1Qi_!!6000000001816-2-tps-2626-1454.png)

2w star 的项目说不做就不做了。

### next-runtime
https://github.com/smeijer/next-runtime

With next-runtime, you'll handle get requests, post requests, and file uploads, in getServerSideProps.

Every handler double serves as api-route as well. No more context switching and different entry paths.

### astro-repl
https://astro.build/blog/astro-repl

![](https://img.alicdn.com/imgextra/i3/O1CN01nvEWUM1NwsH0kV8fJ_!!6000000001635-2-tps-958-649.png)

所见即所得的 astro 代码片段工具，其中 astro 文件编译基于 @astrojs/compiler，是基于 Go 写的 WASM 编译器。


### gremlins.js
https://github.com/marmelab/gremlins.js

![](https://img.alicdn.com/imgextra/i2/O1CN01KmFuHe20wCi7AM719_!!6000000006913-1-tps-689-626.gif)

有趣的库，看图就知道是做什么的了吧。


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
