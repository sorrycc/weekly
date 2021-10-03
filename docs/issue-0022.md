# MDH 前端周刊第 22 期：TypeScript 4.5、React 反模式、Vite 2.6、Partytown、miniflare

**这是 「MDH：前端周刊」 第 0022 期，发表于：2021/10/04。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01fVpTSj1fHnqGXutrM_!!6000000003982-0-tps-1920-1280.jpg)

封面图：willfrancis @ www.unsplash.com 。


## ❄️ TL;DR

👉 TypeScript 4.5 Beta<br />
👉 React Anti Patterns<br />
👉 Vite 2.6<br />
👉 Partytown<br />
👉 ct.css<br />
👉 miniflare<br />

## ⚡ 展开讲讲

### TypeScript 4.5 Beta
https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/

摘要，

* 支持 `moduleResolution: node12`，允许 import .mjs 和 .cjs，支持 package.json 里的 `"type": "module"` 和 `"exports"`，支持 CJS 文件里用 native `import()`
* 新增 `module` 类型 `es2022`，支持 top-level await，使用 `esnext` 自动拥有此特性
* 支持 type-only 的 import specifiers，比如 `import { a, type b } from 'foo'`

### React Anti Patterns
https://isamatov.com/react-antipatterns

一些常见的 anti-patterns，

* 不要把所有数据存在 Redux 里，只存真正的全局数据
* 不要把所有数据存 state 里，有些是可以动态推导出的，比如有 `users` 数组，就不需要有 `usersCount`
* 不要到处用 spread operator 传 props
* 不要在组件内声明组件，造成代码耦合，并且有潜在的性能问题，子组件在父组件每次渲染时都会生成一遍
* 不要传过多数据给组件
* 不要过度过早地优化性能，浪费时间
* 不要写巨型组件，合理拆分和提取子组件

### Vite 2.6
https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#260-2021-09-29

⏩ 默认用 esbuild 压缩，提速 20~40 倍
🌊 async script tag for streaming SSR
✅ 支持 0kb JavaScript
🔥 请求到 server 前做直接 import 的预编译，以进一步提升启动速度

### Partytown
https://github.com/Builderio/partytown

![](https://img.alicdn.com/imgextra/i1/O1CN01KVszrq1X9XlyqNAy0_!!6000000002881-2-tps-1000-420.png)

Partytown 是一个 6kb 的库，用于让三方库跑在 web worker 里，不影响主线程，从而达到提速的目的。

除了提速，还有安全上的考虑，通过沙箱和隔离可以做不少事，比如不允许访问 `document.cookie`，提供标准的 `navigator.userAgent`，不允许 `localStorage` 写入，用 noop 代替 `document.write()`，不允许请求其他 script 等。

### ct.css
https://csswizardry.com/ct/

![](https://img.alicdn.com/imgextra/i4/O1CN01M2mwL51soP2WHORaH_!!6000000005813-2-tps-1120-665.png)

Your `<head>` is the single biggest render-blocking part of your page—ensuring it is well-formed is critical. ct.css is a diagnostic CSS snippet that exposes potential performance issues in your page’s `<head>` tags.

### miniflare
https://github.com/cloudflare/miniflare

Fully-local simulator for Cloudflare Workers.

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
