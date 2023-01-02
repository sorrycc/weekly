# MDH 前端周刊第 61 期：Bun 公测、React 状态管理新浪潮、前端趋势 2022、Turborepo

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h42asi548sj218z0u0zmd.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：whatispictureperfect @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0061 期，发表于 2022/07/11。</p>

本周有这些内容想和你分享：

- Bun 公测
- React 状态管理新浪潮
- 尤雨溪：前端趋势 2022
- Turborepo 两大特性
- skr canvas

## Bun 公测
https://bun.sh/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h425sgz1t1j20qq0ku3zr.jpg)

随着 Bun 的发布，算是凑齐了 JavaScript 三剑客：Node、Deno 和 Bun。Bun 的官方定义是「Bun is a fast all-in-one JavaScript runtime」。Fast、All-in-one 和 JavaScript Runtime。

## React 状态管理新浪潮
https://frontendmastery.com/posts/the-new-wave-of-react-state-management/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h427bsa3k4j218q0p677z.jpg)

这篇文章分析了全局状态库需要解的问题，以及梳理现代流行库对于这些问题的解法。

要解的问题主要是四个。1）能从组件树的任何地方读取存储的状态，存储状态可能来自 React runtime 内或者外，2）对存储状态的写入能力，注意心理模型的冲突，比如 redux 的不可变和 immer 的可变，3）提供优化渲染的机制，比如通过 selector 的手动优化和自动优化，4）提供优化内存使用的机制，利用 React 生命周期会更容易。

还有一些其他问题。1）与并发模式的兼容性，会导致 tearing，useSyncExternalStore 可以解此问题，2）数据序列化，用于保存和恢复状态，3）context 丢失问题，比如同时有 react-dom 和 react-three-fiber 时，4）stale props 问题，5）zombie child 问题。

## 尤雨溪：前端趋势 2022
https://juejin.cn/post/7117208851945881613

7.22 才有演讲，可以提前看大纲。

1、Hooks 开发范式已成社区共识，useEvent 是 React 官方的一次 Bugfix，React Forget 则是在编译层的一次尝试；基于编译的响应式系统，比如 Svelte 和 Vue Reactivity Transform

2、工具链大量基于原生语言，混合使用将成为常态

3、全栈框架的数据流方案不同于纯客户端方案；同时全栈也有代价，社区新冒出很多解，包括 RSC、Astro、Qwik、VitePress 等

## Turborepo 两大特性
https://www.maxpou.fr/turborepo

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h427xeo3wtj20ws0nxwga.jpg)

Turborepo 两大特性。1）Pipeline，解决任务依赖问题，尽可能并行和前置执行，2）缓存和远端缓存。

## skr canvas
https://github.com/Brooooooklyn/canvas

0 依赖的 node canvas 库。



## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**DEX 周刊**](https://newsletter.dex.group/)：关于产品、设计、前端、软件的精华资讯邮件列表
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
