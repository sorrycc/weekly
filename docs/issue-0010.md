# MDH 前端周刊第 10 期：Gatsby 3.9、zx 2、npm audit、petite-vue

**这是 「MDH：前端周刊」 第 0010 期，发表于：2021/07/12。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01QaWCSq1h1Qu1F0N1m_!!6000000004217-0-tps-1920-1280.jpg)

封面图：ethanrobertson @ www.unsplash.com 。

## ❄️ TL;DR

👉 Gatsby 3.9<br />
👉 Vite 2.4<br />
👉 2021 New Mac Setup<br />
👉 The State Of Web Workers In 2021<br />
👉 Goodbye Enzyme.js<br />
👉 zx 2<br />
👉 npm audit 设计上就是错的<br />
👉 export default 和 export { X as default } 的区别<br />
👉 petite-vue<br />

## ⚡ 展开讲讲

### Gatsby 3.9
https://www.gatsbyjs.com/docs/reference/release-notes/v3.9/

Gatsbyjs 发布 3.9，包含，

* 基于 React 18 的 Suspense SSR 架构，使用 pipeToNodeWritable renderer，可在服务端使用 Suspense 和 React.lazy
* Shopify app for Gatsby Cloud
* 完善 gatsby-source-contentful

### Vite 2.4
https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#240-2021-07-05

Vite 发布 2.4，包含，

* 支持 new URL(url, import.meta.url)

### 2021 New Mac Setup
https://www.swyx.io/new-mac-setup-2021/

![](https://img.alicdn.com/imgextra/i4/O1CN01R67h951SMl6fYc6PN_!!6000000002233-2-tps-1164-598.png)

SWYX WANG 最新的 Mac 设置，可以查漏补缺。

### The State Of Web Workers In 2021
https://www.smashingmagazine.com/2021/06/web-workers-2021/

The web is single-threaded. This makes it increasingly hard to write smooth and responsive apps. Workers have a bad rep, but can be an important and useful tool in any web developer’s toolbelt for these kinds of problems. Let’s get up to speed on Workers on the Web!

### Time to say goodbye - Enzyme.js
https://www.piotrstaniow.pl/goodbye-enzyme

![](https://img.alicdn.com/imgextra/i3/O1CN01IhEvw61c1MlVdmcRR_!!6000000003540-2-tps-1030-520.png)

Enzyme.js 弃坑，推荐使用 React Testing Library。敢于公开弃坑，也是需要勇气，👍🏻👍🏻。

### zx 2
https://github.com/google/zx/releases/tag/2.0.0

zx 发布 2，包含，

- 使用 fs-extra 扩展 fs
- 新增 minimist 扩展全局参数，通过 argv 获取

非常喜欢这个库，新增 JavaScript 脚本基本都是基于 zx 编写。

### npm audit 设计上就是错的
https://overreacted.io/npm-audit-broken-by-design/

![](https://img.alicdn.com/imgextra/i4/O1CN01XJpxZA24ckKXvJiIX_!!6000000007412-2-tps-1318-502.png)

作者列举了安装 CRA 脚手架项目 npm 报的五个漏洞，

1. browserslist 传入错误正则配置导致执行缓慢
2. webpack-dev-server > chokidar > glob-parent 传入精心准备的错误路径会导致执行缓慢
3. 同上
4. @svgr/webpack > @svgr/plugin-svgo > svgo > css-select > css-what，传入精心准备的 svg 可控制电脑
5. 同上

这些算安全问题吗？其实不一定，如果黑客能控制你本地的 svg 或开发配置，那他为何不直接放个矿机呢？

### export default 和 export { X as default } 的区别
https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/

不太有用的冷知识，主要是的区别，

1. export default
2. export { X as default }
3. export default function

以上 import 后拿到的是值还是引用，都是不同的。一个例子如下，

```javascript
// module.js
export let thing = 'initial';

setTimeout(() => {
  thing = 'changed';
}, 500);

// main.js
import { thing as importedThing } from './module.js';
const module = await import('./module.js');
let { thing } = await import('./module.js');

setTimeout(() => {
  console.log(importedThing); // "changed"
  console.log(module.thing); // "changed"
  console.log(thing); // "initial"
}, 1000);
```

### petite-vue
https://mp.weixin.qq.com/s?__biz=MzI3NTM5NDgzOA==&mid=2247498317&idx=1&sn=206a8e3b63810c9d1700cb8e22c2fd94

转：petite-vue 是Vue对于渐进增强进行优化的一种 distribution。它提供了与标准Vue相同的模板语法和响应式性心智模型，它是专门为在由服务器渲染具有少量交互的页面而存在的。服务端渲染一般会有注水（hydrate）过程，而在petite-vue要做的事情比较简单，被称为"洒水（sprinkling）"。


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）

