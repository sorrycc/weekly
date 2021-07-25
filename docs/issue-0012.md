
# MDH 前端周刊第 12 期：node.new、win 11 with react、手写 React、微前端

**这是 「MDH：前端周刊」 第 0012 期，发表于：2021/07/26。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01AGDCcR1QTy748Rll8_!!6000000001978-0-tps-1920-1080.jpg)

封面图：sergioxu @ www.unsplash.com 。


## ❄️ TL;DR

👉 node.new<br />
👉 win11 with react<br />
👉 then(s, f) vs then(s).catch(f)<br />
👉 浏览器 47 张图<br />
👉 手写 React<br />
👉 vitesse-webext<br />
👉 你可能并不需要微前端<br />
👉 How To Learn Stuff Quickly<br />

## ⚡ 展开讲讲

### node.new
https://twitter.com/stackblitz/status/1414617135616245761

![](https://img.alicdn.com/imgextra/i3/O1CN012qL9hH1U3doBivFTf_!!6000000002462-2-tps-2262-1440.png)

用于快速验证框架或工具，以 umi 为例，

1. 访问 node.new
2. npm i umi -D
3. umi g page index
4. umi dev

然后就能看到上面截图的效果了。

### win 11 with react
https://github.com/blueedgetechno/windows11

![](https://img.alicdn.com/imgextra/i4/O1CN01AB1TgO28mbJrYUgva_!!6000000007975-2-tps-2470-1686.png)

This open source project is made in the hope to replicate the Windows 11 desktop experience on web, using standard web technologies like React, CSS (SCSS), and JS.

### then(s, f) vs then(s).catch(f)
https://dmitripavlutin.com/javascript-promises-then-vs-then-catch/

![](https://img.alicdn.com/imgextra/i3/O1CN012TZvhG1IKKrAbLMn5_!!6000000000874-2-tps-720-399.png)

常见面试题，主要区别是 s 返回 reject promise 时，只有后者才会 catch 到。

### 浏览器 47 张图
http://mp.weixin.qq.com/s?__biz=Mzg4MTYwMzY1Mw==&mid=2247498898&idx=1&sn=ebaf9400c31ab92ce448c240d8783c6e

![](https://img.alicdn.com/imgextra/i1/O1CN01OROl9124smCJPzRbI_!!6000000007447-2-tps-1080-288.png)

每个开发者（尤其是前端工程师）或多或少会跟浏览器打交道，那么你们有没有想过去深入了解浏览器呢？无论是因为好奇还是为了面试，相信你们一定在网上搜过不少关于浏览器相关的知识和文章，或者也买过不少的课程。但很少有文章能生动形象地带你去了解浏览器的点点滴滴。

本文用47张图带你了解「浏览器的发展史」、「浏览器的架构」、「浏览器的基本原理」以及 「浏览器的其它小知识」。

### 手写 React
http://mp.weixin.qq.com/s?__biz=MzIxMzExMjYwOQ==&mid=2651896816&idx=1&sn=cd685d3f4ab5b4b9375552f9980ef3ff

手写一个东西最好的方式之一，就是写一个他的玩具版本。本文基于 https://pomb.us/build-your-own-react/ 实现简单版 React，模拟 React 16.8 的功能，包含：

- createElement（虚拟 DOM）
- render
- 可中断渲染
- Fibers
- Render and Commit Phases
- 协调（Diff 算法）
- 函数组件
- hooks

### vitesse-webext
https://github.com/antfu/vitesse-webext

![](https://img.alicdn.com/imgextra/i3/O1CN01vX180g1Yblmeruh8L_!!6000000003078-2-tps-1310-974.png)

基于 Vite 的 Chrome/Firefox 插件脚手架。

### 你可能并不需要微前端
https://zhuanlan.zhihu.com/p/391248835

![](https://img.alicdn.com/imgextra/i1/O1CN01sIu5wq1Hzj2Brzbym_!!6000000000829-2-tps-562-548.png)

qiankun 作者告诉你，什么时候需要微前端？什么时候不需要？

### How To Learn Stuff Quickly
https://www.joshwcomeau.com/blog/how-to-learn-stuff-quickly/

摘录一些，

1. **Making intentional mistakes**，跟随教程时故意犯一些错误，比如少写一行看看会怎么样
2. **Extending tutorials**，教程之外发散性地扩展，发挥自己的想象力
3. **Building related projects**，比如教程教你写了 webpack clone，可以自行写个 vite clone
4. **Learning in public**，公开告诉别人你在学某个东西，比如通过博客的形式，好处多多


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
