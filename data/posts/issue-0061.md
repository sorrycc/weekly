---
title: "Bun 公测、React 状态管理新浪潮、前端趋势 2022、Turborepo"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01ATJTdU1TBbBb62XE1_!!6000000002344-0-tps-1619-1080.jpg"
titleImageCaption: "whatispictureperfect @ unsplash"
publishedAt: "2022/07/11"
---

本周有这些内容想和你分享：

- Bun 公测
- React 状态管理新浪潮
- 尤雨溪：前端趋势 2022
- Turborepo 两大特性
- skr canvas

## Bun 公测
https://bun.sh/

![](https://img.alicdn.com/imgextra/i4/O1CN01O7Y3cJ1lk66Zn8wCZ_!!6000000004856-0-tps-962-750.jpg)

随着 Bun 的发布，算是凑齐了 JavaScript 三剑客：Node、Deno 和 Bun。Bun 的官方定义是「Bun is a fast all-in-one JavaScript runtime」。Fast、All-in-one 和 JavaScript Runtime。

## React 状态管理新浪潮
https://frontendmastery.com/posts/the-new-wave-of-react-state-management/

![](https://img.alicdn.com/imgextra/i4/O1CN01XiOAKJ1FKOAMvX5eu_!!6000000000468-0-tps-1610-906.jpg)

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

![](https://img.alicdn.com/imgextra/i3/O1CN01Pepngr25ZN8xoW7UJ_!!6000000007540-0-tps-1180-861.jpg)

Turborepo 两大特性。1）Pipeline，解决任务依赖问题，尽可能并行和前置执行，2）缓存和远端缓存。

## skr canvas
https://github.com/Brooooooklyn/canvas

0 依赖的 node canvas 库。
