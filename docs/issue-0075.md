# MDH 前端周刊第 75 期：CSS-in-JS、Node 18、完美提交、ChiselStrike、Ultra

<img src="https://tva1.sinaimg.cn/large/008vxvgGly1h7vim0cehmj31900u0myx.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：clemy32 @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0075 期，发表于 2022/11/07。</p>

本周有这些内容想和你分享：

- 与 CSS-in-JS 决裂
- Node 18 新特性
- Node 18 Snapshot
- 完美提交
- ChiselStrike
- Ultra

## 与 CSS-in-JS 决裂
https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b

作者 Sam 是 Spot 的工程师，同时也是 Emotion 的第二大活跃维护者。这篇文章深入探讨了 CSS-in-JS 的优缺点，以及他和他团队的成员为啥决定放弃他。

优点：

1、默认局部样式（当然，css modules 也可以）  
2、组织上样式和组件放一起（当然，css modules 也可以，只是不在同一个文件里）  
3、可以在样式中使用 JavaScript 变量

缺点：

1、增加了运行时开销。因为必须把样式序列化为可以插入到 HTML 里的普通 CSS，但是这个影响大吗？  
2、增加了 bundle 尺寸。比如 Emotion 7.9 kB minzipped，styled-components 12.7 kB。  
3、让 React DevTools 变得混乱。比如用 Emotion 时会看到大量的 EmotionCssPropInternal 和 Insertion 组件。  
4、其他问题，包括 React 并发模式下的性能问题、SSR 问题、多实例问题、样式插入顺序问题、SSR 和 React 17 & React 18 的兼容问题、TypeScript 类型问题等。

性能问题：

1、序列化的过程中，还会计算出 CSS 类名的的哈希值，比如 `css-12nl2r3`  
2、序列化是在 React 渲染内还是外？默认是在渲染内，那每次渲染时都会重复执行，性能成本就很高；通过 `@emotion/react` 的 css 函数可将其挪到渲染外，在模块加载时做一次性的序列化，但要注意这种做法的缺点是，无法在样式中访问 props，损失 css-in-js 的一大优势  
3、额外的一点要注意的是，React 严格模式 + 渲染内，会让渲染时间翻倍  
4、作者用 sass 代替 emotion（渲染内）进行重写，让会员列表组件的单次渲染时间从 54.3ms 降低到 27.7ms，减少了 48%

那他们的选择是什么？

1、sass + css modules，除了不能满足优点 3，其他一切顺利

## Node 18 新特性
https://nodesource.com/blog/11-features-nodeJS-18-to-try

摘录一些我感兴趣的。

1、内置原生的 fetch 函数，不再需要各种 polyfill 了  
2、新增 `--watch` 参数，不再需要 nodemon 了  
3、支持 OpenSSL 3  
4、实验性的 `node:test` 模块，支持 sub test、skip、only、异步等常见场景，写完后可以用 `node --test` 来跑测试  
5、实验性的 Web Streams API  
6、升级 V8 到 10.1

## Node 18 Snapshot
https://blog.logrocket.com/snapshot-flags-node-js-v18-8/

Node 18.8 引入了 `--snapshot-blob` 和 `--build-snapshot` Flag。用于生成二进制的快照，同时包含初始化的 heap state。

4 步尝鲜。

1、确保 node 是 18.8 或以上  
2、新建 snapshot.js，内容如下

```ts
globalThis.firstArg = process.argv[2];
require("v8").startupSnapshot.setDeserializeMainFunction(() => {
  console.log('firstArg', this.firstArg);
});
```

3、生成快照，执行以下命令

```bash
$ node --snapshot-blob snapshot.blob --build-snapshot snapshot.js foo
```

4、使用快照，执行以下命令

```bash
$ node --snapshot-blob snapshot.blob --build-snapshot snapshot.js foo
firstArg foo
```

啥时候需要用到这个功能？为了性能。相同的程序基于快照运行会快很多（1 倍以内）。

![](https://tva1.sinaimg.cn/large/008vxvgGly1h7tfvvymd3j30ka03ywf2.jpg)

## 完美提交
https://simonwillison.net/2022/Oct/29/the-perfect-commit/

一个完美的 Commit 应该包含啥？

1、实现，只改一个功能  
2、测试，证明实现能 work  
3、文档，反应变化（按需）  
4、指向问题的链接，比如 Close #123

同时，文章中还写了如何描述问题。

1、背景，改变的原因  
2、变更前的状态  
3、参考链接  
4、代码片段  
5、决定，考虑之后你的决定是什么  
6、截图，之前咋样之后咋样，GIF 可以用 LICEcap 生成  
7、原型，用代码后截图

## ChiselStrike
https://github.com/chiselstrike/chiselstrike

![](https://tva1.sinaimg.cn/large/008vxvgGly1h7u48nxz49j30ys0r9tcr.jpg)

ChiselStrike 可以用于快速原型。我们只要通过 TypeScript 声明类似下方代码的 Model，ChiselStrike 就会为我们生成 curd 的 REST API。同时支持 Filter、Limit、Sort 等功能。场景上还有搜索、分页、授权、关系等功能也是支持的。

```ts
import { ChiselEntity } from "@chiselstrike/api"

export class BlogPost extends ChiselEntity {
  title: string
  cover: string
  content: string
  publishedAt: number = Date.now()
  updatedAt?: number 
}

export default BlogPost.crud();
```

## Ultra
https://github.com/nachoaldamav/ultra

![](https://tva1.sinaimg.cn/large/008vxvgGly1h7u4oh3iq3j30zs0cegmj.jpg)

Ultra 是个极轻量和快速的 package client 工具，使用和 pnpm 一样的安装机制，缓存到 .ultra-cache 目录，同时为每个依赖创建 hard link。据官方数据看，比 pnpm、npm、yarn 都快，只比 bun 慢一点。但我测下来却不是，如下图。

![](https://tva1.sinaimg.cn/large/008vxvgGly1h7u4pojh88g30p60hpb1m.gif)

由于其比较轻量，比较适合对 package client 工具感兴趣的阅读源码入门。


## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
