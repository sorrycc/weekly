# MDH 前端周刊第 60 期：Fresh 1、SPA、框架流行度、1X 工程师、Father 4 RC

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3u6l02z45j21910u0gpx.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：stephenleo1982 @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0060 期，发表于 2022/07/04。</p>

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

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3sgdw9c9gj20650560sl.jpg)

Fresh 发布 1.0 了，比想象中快，感觉 RC 才没多久。

Fresh 使用了一种不同的模式：在这种模式下，你默认向客户端提供 0KB 的JS。大部分的渲染是在服务器上完成的，而客户端只负责重新渲染小型的交互性岛屿。这是一种是开发者明确选择对特定组件进行客户端渲染的模式。这种模式早在2020年就被 Jason Miller 在他的 [Islands Architecture 博文](https://jasonformat.com/islands-architecture) 中介绍过。

## 逃离 SPA
https://nolanlawson.com/2022/05/21/the-balance-has-shifted-away-from-spas/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3sgujt55aj21e20l87b5.jpg)

SPA 已有 10 年的历史，现在回头再看，他是否还是那么酷😎？随着 Astro、Qwik 和 Elder.js 这样的新框架出现，他们基于 MPA，默认 0JS，这让 SPA 的统治地位似乎正在慢慢被撼动。

「浏览器免费给你提供了大量的东西，直接内置，开箱即用。SPA 打破了这一切，并迫使你用 JavaScript 重新创建它。」这是 MPA 派对于 SPA 的抱怨。当然，也是因为 SPA 本身存在着不少问题，比如臃肿的前端框架、浏览器历史管理、焦点管理、滚动恢复、Cmd/Ctrl 点击、内存泄漏、SEO 问题等。

同时，近年来浏览器环境也发生了一些变化，让 MPA 在对抗 SPA 时有了更多底牌。比如 Chrome 的 [Paint Holding](https://developer.chrome.com/blog/paint-holding/) 让 MPA 页面跳转时不再有白屏；比如 [Back-Forward](https://web.dev/bfcache/) Caching 可以让来回浏览时是即时的；比如 ServerWorker 已 [100% 可用](https://caniuse.com/serviceworkers)，允许离线导航，不再需要客户端的路由器；比如 [Shared Element Transitions](https://github.com/WICG/shared-element-transitions/)，可以实现 MPA 页面跳转时的元素动画。

此外，除了 MPA 和 SPA，或者还可以尝试[过渡性应用](https://www.youtube.com/watch?v=860d8usGC0o)。他综合 SPA 和 MPA 所长，默认不使用 JS，由服务端渲染输出，同时和 SPA 一样，提供快速导航、持久化元素和客户端状态管理。

## 框架流行度
https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3srkc5184j218g0sydjs.jpg)

从作者的图上看，「React 一骑绝尘，Vue 已开始走下坡」。

## 1X 工程师
https://1x.engineer/

相比 10X 工程师，1X 工程师是比较正常的不太卷的工程师。

## Remix 数据流
https://remix.run/blog/remix-data-flow

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3smrnskf5j217c0u0dh7.jpg)

React 第一次和大家见面时，最引人注目的特点之一是他的「单向数据流」。这在官方文档 [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) 里仍有介绍。用一句话概况即：UI 是状态的函数，或者叫 `ui=fn(state)`。

而后有不少遵从这种思想的数据流方案，比如 Redux、MobX 等，`以` View -> Action -> State 这种循环的单向数据流方式进行。他们的缺点是这个数据流只在客户端运转，而一个应用通常还需要持久化数据和同步数据，这意味着还要有另一条数据流来和服务端做交互。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3sqbf8y8zj21e00p0wfm.jpg)

那有没有贯穿服务端和客户端的单向数据流？Remix！哈哈。Remix 将这一理念延伸到持久化数据的 API 层，通过 Loader 和 Action 把数据流串了起来，形成 Loader > Component > Action 的单向数据流。所以在 Remix 中，开发者也无需使用 Redux 等其他数据流方案。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3sqh2guogj21400u0wht.jpg)

## Father 4 RC
https://zhuanlan.zhihu.com/p/535698336

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3sqiphwp0j20y20h1myc.jpg)

father 是面向 npm 库研发的工具，这周会发了 4 的 rc。虽然全程参与了设计，但源码是由 dumi 作者辟起操刀的。

father 4 有啥卖点？

1、基于 @umijs/core 的工具实现。所以和 umi 的代码组织、插件体系、配置方式都是一脉相承，这意味着你也可以给 father 写插件了。如果你看过 umi 的源码，看 father 的源码会非常熟悉。除了 @umijs/core，father 还用了 @umijs/bundler-webpack、@umijs/utils 和 @umijs/babel-preset-umi 等底层库。如果你有写工具的需求，并且需要插件体系、配置读取等，这一套可能也适合你。

2、全功能的 npm 包打包工具。支持 umd、esm、cjs，支持 browser 和 node，支持 dts。umd 基于 @umijs/bundler-webpack（背后是 webpack）；esm 和 cjs 是 bundless 的方式，即 src 下的每个文件在 output 目录都会产生一个对应的文件，这个 rfc 时讨论了好久，选择 bundless 是因为相比 bundle 的方式更通用，实现是基于 babel 或 esbuild，esbuild 针对 node 平台产物。

3、prebundle 依赖预打包。这是源于 umi 的功能，这个功能已经帮我们拦截了多次 babel 的 bug 和社区中有问题的包更新。我们把这个功能提取到 father 以让更多人可以实现依赖预打包，让工具更稳定。

4、changelog、release、doctor、deploy、generate 等。这些还没有实现，预期是让 father 成为 all in one 的工具集，所有和 npm 包相关的操作，均可通过 father 完成。

## ES2022
https://2ality.com/2022/06/ecmascript-2022.html

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3sr5vmzq0j20rs0bogm0.jpg)

趁着 ES2022 正式发布，再来学习一遍新特性。

1、可索引的值增加 .at(index) 方法，和之前用 [index] 方式的区别是，.at() 还支持负证书，比如 .at(-2) 会返回倒数第二个项的值。

2、Object.hasOwn(obj, propKey)，之前不是有 Object.prototype.hasOwnProperty() 吗？二者功能一致，但之前的 hasOwnProperty 是有缺陷或者说不够严谨的，比如 `const obj = { hasOwnProperty: true }` 对象上有 hasOwnProperty 时就不对了。

3、error.cause 为 error 增加更多线索，通常由于出错时抛一个新的错时把老的错误信息传过去，这样老的错误也会显示在堆栈里，比如 `try { } catch(e) { throw new Error('msg', { cause: e }));` 。

4、RegExp match indices。当我们给正则加 `/d` flag 时，可以通过 `.indices` 拿到匹配 group 的索引范围。比如 `const m = /(a+)(b+)/d.exec('aaaabb'); m[1] === 'aaaa'; m.indices[1] === [0,4]`。

5、Top-level await。没啥好说的，就是让 await 可以在 module 的顶层运行，无需加 async 包裹。

6、class private slots。可以通过 `#` 前缀声明成员为私有，比如 `class Foo { #bar = 1; static #hoo = 2; }`

## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**DEX 周刊**](https://newsletter.dex.group/)：关于产品、设计、前端、软件的精华资讯邮件列表
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
