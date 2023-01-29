---
title: "Hey、浏览器里跑 Vite、Container Query 补丁、Parcel CSS"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01PwuGdW1Q6bxHw6B71_!!6000000001927-2-tps-2500-1500.png"
titleImageCaption: "开端"
publishedAt: "2022/01/17"
---

## ❄️ TL;DR

👉 Hey + import maps<br />
👉 浏览器里跑 Vite <br />
👉 Container Query 补丁<br />
👉 Parcel CSS<br />
👉 Relay 13<br />
👉 配置和依赖的 codemod<br />
👉 GSAP 动画实践<br />
👉 Umi 4 设计思路文字稿<br />
👉 tnpm rapid 模式<br />


## ⚡ 展开讲讲

### Hey + import maps
https://world.hey.com/dhh/hey-is-running-its-javascript-off-import-maps-2abcf203

![](https://img.alicdn.com/imgextra/i4/O1CN01GwM3Y21YJuS4vAtMv_!!6000000003039-2-tps-1600-601.png)

DHH 在 Hey 的部分页面里试验了 import maps 上生产的想法。找了一遍，最终在[登录页面](https://app.hey.com/sign_in)里看到了 import maps 的试点，这个页面比较简单，但总共 66 个请求里也有 57 个 JS 请求，如果换个复杂点的页面，肯定更夸张。虽然有 HTTP/2，但以我们的经验，请求量大了后，比如 100+ 并发，浏览器还是会 pending 后续请求，对页面性能造成影响。

### 浏览器里跑 Vite 
https://divriots.com/blog/vite-in-the-browser

![](https://img.alicdn.com/imgextra/i4/O1CN01FF85WP1n3ACophalG_!!6000000005033-2-tps-1456-588.png)

作者 patch 了 vite，让其可以跑在浏览器里，详见 [https://github.com/divriots/browser-vite](https://github.com/divriots/browser-vite) 。

原理有几部分组成，用 ServiceWorker 拦截 HTTP 请求，在 Web Worker 里跑 Browser Vite，构建虚拟的文件系统访问，针对非 JS 文件的实时编译，同时注意 Client 是跑在 IFrame 里的。

BrowserVite 基于 Vite 有一些调整。为减少文件系统访问的复杂度，BrowserVite 不处理 glob、配置读取和 watch；由于 node\_modules 走虚拟文件太大，BrowserVite 删除 node resovler 和依赖预编译，所以依赖的处理需要在方案外自行接入；修改 lookbehind 正则，使之兼容 Safari；HMR 部分从 websocket 改成发往 iframe 的 post message。

编者按：BrowserVite 场景应该是 LowCode 和 Code Snippet 场景，有场景需要的可以看看。但缺点也很明显，1）不支持依赖，依赖处理本应是这方案中最复杂的部分，开发者直接绕过了 2）不支持上生产，抛开产物性能之类的不说，ServiceWorker + iFrame 也直接放方案限制在了 dev 阶段。

### Container Query 补丁
https://css-tricks.com/a-new-container-query-polyfill-that-just-works/

可以提前用上 Container Query 了。该补丁依赖 ResizeObserver、MutationObserver 和 :is()。因此，Chrome/Edge 88+、Firefox 78+ 和 Safari 14+ 的浏览器都可以用上。

```ts
const supportsContainerQueries = "container" in document.documentElement.style;

if (!supportsContainerQueries) {
  import("container-query-polyfill");
}
```

在此之前，还有一个叫 cqfill 的 Container Query 补丁，但使用相对更复杂，除了引入脚本外，还需借助 postcss 插件。

### Parcel CSS
https://parceljs.org/blog/parcel-css/

![](https://img.alicdn.com/imgextra/i1/O1CN01AAWL0L1NJUJc0ueRy_!!6000000001549-2-tps-1332-534.png)

Parcel 组织的新产品，可以用于 Parcel，也可以和其他工具集成使用。基于 Rust，速度比 cssnano 快 100 倍，比 esbuild 快 4 倍，同时产物尺寸也更小。

实现上基于 Mozilla 创建用于 Firefox 的 [cssparser](https://github.com/servo/rust-cssparser)。

### Relay 13
https://github.com/facebook/relay/releases/tag/v13.0.0

Compiler 基于 Rust 实现。

### 配置和依赖的 codemod
https://survivejs.com/blog/how-to-tame-dev-deps/

我们通常会用 jscodeshift 或 codemod 写 js 和 ts 的 codemod，本文作者介绍了一个适用于配置文件 codemod 的工具 mrm，可以用来管理配置和依赖，因为依赖存于 package.json 的配置中。

以下是新增 prettier 依赖和配置的示例，

```ts
const { json, packageJson } = require("mrm-core");
const prettierConfig = require("./.prettierrc.json");

module.exports = () => {
  json(".prettierrc.json").merge(prettierConfig).save();
  packageJson().setScript("format", "prettier --write .").save();
};
```

### GSAP 动画实践
https://blog.bitsrc.io/practical-guide-to-getting-started-with-gsap-greensock-animation-platform-21ff9638ea70

![](https://img.alicdn.com/imgextra/i3/O1CN010LTiHz1Q9ongRQnSp_!!6000000001934-1-tps-1265-674.gif)

文章一步步介绍了如何使用 Tweens、ScrollTrigger 和 Timelines 来实现上图的效果，适合产品的 Landing Page 场景。演示站点见 [https://abeg-clone-gsap.netlify.app/](https://abeg-clone-gsap.netlify.app/) 。

### Umi 4 设计思路文字稿
https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247484533&idx=1&sn=9b15a67b88ebc95476fce1798eb49146

![](https://img.alicdn.com/imgextra/i4/O1CN01Du7C1l1zT3zgWbqUg_!!6000000006714-2-tps-1080-518.png)

本文为 2022.1.8 在 SEE Conf 分享的文字稿，介绍了 Umi 4 的一些设计思路，时间原因，只聊 4 个，包含编译时框架、依赖预打包、默认快、约束与开放。这几天 colors 和 faker.js 闹得前端社区沸沸扬扬，但 Umi 却能独善其身，希望其中「依赖预编译」的部分能给大家一些启发。

### tnpm rapid 模式
https://zhuanlan.zhihu.com/p/455809528

![](https://img.alicdn.com/imgextra/i3/O1CN01g55DOU201PhShD284_!!6000000006789-2-tps-1232-594.png)

作为一名老前端，不得不感慨，前端变得越来越复杂，依赖安装的速度很慢很慢。前几天我们也在 蚂蚁 SEE Conf 2022 发表了主题演讲：《一种秒级安装 npm 的黑科技》。本文从另一个角度来阐述下关于前端依赖安装提速 整个优化工作的背景、思考、结果以及未来。

