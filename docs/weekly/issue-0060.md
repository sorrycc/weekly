---
title: "Fresh 1、SPA、框架流行度、1X 工程师、Father 4 RC"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01EkcYkp1ftMQ3H65FW_!!6000000004064-0-tps-1621-1080.jpg"
titleImageCaption: "stephenleo1982 @ unsplash"
publishedAt: "2022/07/04"
---

本周有这些内容想和你分享：

- Fresh 1.0
- 逃离 SPA
- 框架流行度
- 1X 工程师
- Remix 数据流
- Father 4 RC
- ES2022

## Fresh 1.0
https://deno.com/blog/fresh-is-stable

![](https://img.alicdn.com/imgextra/i2/O1CN017MTDaf1bFjgu076pi_!!6000000003436-0-tps-221-186.jpg)

Fresh 发布 1.0 了，比想象中快，感觉 RC 才没多久。

Fresh 使用了一种不同的模式：在这种模式下，你默认向客户端提供 0KB 的JS。大部分的渲染是在服务器上完成的，而客户端只负责重新渲染小型的交互性岛屿。这是一种是开发者明确选择对特定组件进行客户端渲染的模式。这种模式早在2020年就被 Jason Miller 在他的 [Islands Architecture 博文](https://jasonformat.com/islands-architecture) 中介绍过。

## 逃离 SPA
https://nolanlawson.com/2022/05/21/the-balance-has-shifted-away-from-spas/

![](https://img.alicdn.com/imgextra/i3/O1CN01nCGIIP1vx3Ss2rarM_!!6000000006238-0-tps-1802-764.jpg)

SPA 已有 10 年的历史，现在回头再看，他是否还是那么酷😎？随着 Astro、Qwik 和 Elder.js 这样的新框架出现，他们基于 MPA，默认 0JS，这让 SPA 的统治地位似乎正在慢慢被撼动。

「浏览器免费给你提供了大量的东西，直接内置，开箱即用。SPA 打破了这一切，并迫使你用 JavaScript 重新创建它。」这是 MPA 派对于 SPA 的抱怨。当然，也是因为 SPA 本身存在着不少问题，比如臃肿的前端框架、浏览器历史管理、焦点管理、滚动恢复、Cmd/Ctrl 点击、内存泄漏、SEO 问题等。

同时，近年来浏览器环境也发生了一些变化，让 MPA 在对抗 SPA 时有了更多底牌。比如 Chrome 的 [Paint Holding](https://developer.chrome.com/blog/paint-holding/) 让 MPA 页面跳转时不再有白屏；比如 [Back-Forward](https://web.dev/bfcache/) Caching 可以让来回浏览时是即时的；比如 ServerWorker 已 [100% 可用](https://caniuse.com/serviceworkers)，允许离线导航，不再需要客户端的路由器；比如 [Shared Element Transitions](https://github.com/WICG/shared-element-transitions/)，可以实现 MPA 页面跳转时的元素动画。

此外，除了 MPA 和 SPA，或者还可以尝试[过渡性应用](https://www.youtube.com/watch?v=860d8usGC0o)。他综合 SPA 和 MPA 所长，默认不使用 JS，由服务端渲染输出，同时和 SPA 一样，提供快速导航、持久化元素和客户端状态管理。

## 框架流行度
https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190

![](https://img.alicdn.com/imgextra/i4/O1CN01MK9eM81g6duA7UcUt_!!6000000004093-0-tps-1600-1042.jpg)

从作者的图上看，「React 一骑绝尘，Vue 已开始走下坡」。

## 1X 工程师
https://1x.engineer/

相比 10X 工程师，1X 工程师是比较正常的不太卷的工程师。

## Remix 数据流
https://remix.run/blog/remix-data-flow

![](https://img.alicdn.com/imgextra/i1/O1CN01NTNPSM1WaHNQ2oWPj_!!6000000002804-0-tps-1560-1080.jpg)

React 第一次和大家见面时，最引人注目的特点之一是他的「单向数据流」。这在官方文档 [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) 里仍有介绍。用一句话概况即：UI 是状态的函数，或者叫 `ui=fn(state)`。

而后有不少遵从这种思想的数据流方案，比如 Redux、MobX 等，`以` View -> Action -> State 这种循环的单向数据流方式进行。他们的缺点是这个数据流只在客户端运转，而一个应用通常还需要持久化数据和同步数据，这意味着还要有另一条数据流来和服务端做交互。

![](https://img.alicdn.com/imgextra/i1/O1CN019aRn6F1SPVbJsdnyJ_!!6000000002239-0-tps-1800-900.jpg)

那有没有贯穿服务端和客户端的单向数据流？Remix！哈哈。Remix 将这一理念延伸到持久化数据的 API 层，通过 Loader 和 Action 把数据流串了起来，形成 Loader > Component > Action 的单向数据流。所以在 Remix 中，开发者也无需使用 Redux 等其他数据流方案。

![](https://img.alicdn.com/imgextra/i4/O1CN01zEBD7a1MnsyyVVTwB_!!6000000001480-0-tps-1440-1080.jpg)

## Father 4 RC
https://zhuanlan.zhihu.com/p/535698336

![](https://img.alicdn.com/imgextra/i1/O1CN01Yh805k1cn04bqsyKF_!!6000000003644-0-tps-1226-613.jpg)

father 是面向 npm 库研发的工具，这周会发了 4 的 rc。虽然全程参与了设计，但源码是由 dumi 作者辟起操刀的。

father 4 有啥卖点？

1、基于 @umijs/core 的工具实现。所以和 umi 的代码组织、插件体系、配置方式都是一脉相承，这意味着你也可以给 father 写插件了。如果你看过 umi 的源码，看 father 的源码会非常熟悉。除了 @umijs/core，father 还用了 @umijs/bundler-webpack、@umijs/utils 和 @umijs/babel-preset-umi 等底层库。如果你有写工具的需求，并且需要插件体系、配置读取等，这一套可能也适合你。

2、全功能的 npm 包打包工具。支持 umd、esm、cjs，支持 browser 和 node，支持 dts。umd 基于 @umijs/bundler-webpack（背后是 webpack）；esm 和 cjs 是 bundless 的方式，即 src 下的每个文件在 output 目录都会产生一个对应的文件，这个 rfc 时讨论了好久，选择 bundless 是因为相比 bundle 的方式更通用，实现是基于 babel 或 esbuild，esbuild 针对 node 平台产物。

3、prebundle 依赖预打包。这是源于 umi 的功能，这个功能已经帮我们拦截了多次 babel 的 bug 和社区中有问题的包更新。我们把这个功能提取到 father 以让更多人可以实现依赖预打包，让工具更稳定。

4、changelog、release、doctor、deploy、generate 等。这些还没有实现，预期是让 father 成为 all in one 的工具集，所有和 npm 包相关的操作，均可通过 father 完成。

## ES2022
https://2ality.com/2022/06/ecmascript-2022.html

![](https://img.alicdn.com/imgextra/i1/O1CN01vGw6wJ2AH7RCxY7F6_!!6000000008177-0-tps-1000-420.jpg)

趁着 ES2022 正式发布，再来学习一遍新特性。

1、可索引的值增加 .at(index) 方法，和之前用 [index] 方式的区别是，.at() 还支持负证书，比如 .at(-2) 会返回倒数第二个项的值。

2、Object.hasOwn(obj, propKey)，之前不是有 Object.prototype.hasOwnProperty() 吗？二者功能一致，但之前的 hasOwnProperty 是有缺陷或者说不够严谨的，比如 `const obj = { hasOwnProperty: true }` 对象上有 hasOwnProperty 时就不对了。

3、error.cause 为 error 增加更多线索，通常由于出错时抛一个新的错时把老的错误信息传过去，这样老的错误也会显示在堆栈里，比如 `try { } catch(e) { throw new Error('msg', { cause: e }));` 。

4、RegExp match indices。当我们给正则加 `/d` flag 时，可以通过 `.indices` 拿到匹配 group 的索引范围。比如 `const m = /(a+)(b+)/d.exec('aaaabb'); m[1] === 'aaaa'; m.indices[1] === [0,4]`。

5、Top-level await。没啥好说的，就是让 await 可以在 module 的顶层运行，无需加 async 包裹。

6、class private slots。可以通过 `#` 前缀声明成员为私有，比如 `class Foo { #bar = 1; static #hoo = 2; }`

