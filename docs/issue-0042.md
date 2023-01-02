# MDH 前端周刊第 42 期：手写 Babel、手写文本编辑器、阅读 ES 规范

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1gzqwermsnjj21900u0qc6.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：good_citizen @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0042 期，发表于 2022/02/28。</p>

本期主要内容有这些：

- 手写 Babel 之 Tokenizer
- 手写文本编辑器
- 如何阅读 ES 规范
- React component as Props
- gti
- pnpm + monorepo

## 手写 Babel 之 Tokenizer
https://www.nan.fyi/tokenizer

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzqrc9hmiej212i09e0tl.jpg)

编译器的步骤是 Tokenizer、Parser、Transform 和 Generate，上一步的结果是下一步的输入，源码进，修改后的代码出。这篇只介绍第一部分：Tokenizer。

Tokenizer 是把代码转化为一系列机器友好的记号，变成更结构化的数据格式，见下图，把源码转化为区分 keyword、identifier、string 等的 token。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzqrnkfcmmj20u00w8dhs.jpg)

token 包含单字符 token（比如点、括号、大括号、分号等）、identifier、关键词（function、const 等）、字符串等。实现的方式是逐个字符循环判断，实现详见 156 行的 TypeScript 代码，https://github.com/narendrasss/compiler/blob/main/src/tokenizer.ts 。

除了 tokenizier，作者仓库里其实实现了全套，想深入的可以直接看源码。

## 手写文本编辑器
https://www.smashingmagazine.com/2022/02/develop-text-editor-web/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzqpu90u7wj21gn0u0abw.jpg)

基于 Textarea 的文本编辑器，摘要如下，

1、input 和 textarea 虽然能处理输入，但不支持富文本。要开启富文本编辑有两种方式，1）设置 contenteditable，2）嵌入 iframe，然后设置 document.designMode = on

2、除了基础的字体、样式、颜色、修饰外，我们还可以通过 font-feature-settings 修改 OpenType 字体特性，通过 font-variation-settings 修改字体变量

3、可以为隐藏字符比如回车、不间断空格添加样式，通过 span:before + 图片的形式

4、⌘/Ctrl + V 会复制带样式的文本，⌘/Ctrl + ⇧ + V 会复制纯文本，也可在 paste 事件里通过 `e.clipboardData.getData('text/plain')` 和 `e.clipboardData.getData('text/html')` 拿到不同格式的文本

5、文本选择和聚焦。文本编辑通常会有工具栏，我们选中工具栏之后，会让文本操作区失去焦点和文本选择。如何让一个页面有多个选择和焦点？作者给了个方案是用 iframe 把文本框包起来，见上图

6、文本编辑要注意性能，可通过检测 FPS 拿到，思路是综合使用 requestAnimationFrame 和 requestIdleCallback API，前者在屏幕刷新时调用，后者在浏览器空闲时调用

## 如何阅读 ES 规范
https://timothygu.me/es-howto/

为什么要读 ES 规范？

```
> Array.prototype.push(42)
1
> Array.prototype
[ 42 ]
> Array.isArray(Array.prototype)
true
> Set.prototype.add(42)
TypeError: Method Set.prototype.add called on incompatible receiver #<Set>
    at Set.add (<anonymous>)
> Set.prototype
Set {}
```

假如你在试 ES 语法，但遇到问题，怎么办？虽然 google 能解部分问题，但要追根究底，还得看 ES 规范。ES 规范是 JavaScript 的可信来源，各浏览器厂商和客户端均是基于此实现。

## React component as Props
https://www.developerway.com/posts/react-component-as-prop-the-right-way

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzqudl6t96j21n40u0wgz.jpg)

React 中，做一件事通常都有很多方法，把组件作为 props 往下传也不例外，通常有三种方式：

1、传 Element，比如 `<Button icon={<Icon />} />`
2、传 Component，比如 `<Button Icon={Icon} />`
3、传 Function，比如 `<Button renderIcon={() => <Icon />} />`

作者比较了 3 种方式，但没能给出推荐，因为每种方式都能解 99% 的问题。你喜欢哪种？

## gti
https://r-wos.org/hacks/gti

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzqq1blmv3g20fr054qdb.gif)

给你的 git 命令加个 ASCII 动画的 Loading 效果。

## pnpm + monorepo
https://egoist.sh/pnpm-monorepo

作者给了用 pnpm 管理 monorepo 一些有用的 Tips，其中提到 pnpm 的 --filter 参数，我深入看了下，非常强大，以下是摘要，

1、--filter foo 用于精确匹配一个包，可以用 `*`
2、--filter foo... 用于匹配 foo 及其依赖包，并且依赖包先执行
3、--filter foo^... 用于匹配 foo 的所有依赖包
4、--filter ...^foo 用于匹配所有依赖 foo 的包
5、--filter ./foo 用于匹配所有 foo 目录下的包
6、--filter {foo} 同上，但可和 ... 结合选择依赖和被依赖，也可和 [] 结合选择改动过的包，比如 --filter {packages}[origin/master]...
7、--filter "...[origin/master]" 用于匹配相比于某个 Commit 或分支有过改动的包

## 发布

以下是上周社区的重要发布。

- [Umi 发布 4.0.0-rc.3](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.3)，新官网、test 支持、CSS 压缩支持 Parcel CSS 等
- [Express 发布 5.0-beta.1](https://github.com/expressjs/express/blob/5.0/History.md?file=History.md)，删除好多 API，变地更简单了
- [Dashi Kato 发布他的新书](https://www.amazon.com/Micro-State-Management-React-Hooks-ebook-dp-B09P5QRJ79/dp/B09P5QRJ79/)：Micro State Management with React Hooks，已于 2.25 上线
- [Ant Design Mobile 发布 5.0](https://zhuanlan.zhihu.com/p/470189883)，一年磨一剑，终于发布了
- [Solid 发布 1.3](https://blog.logrocket.com/whats-new-solidjs-v1-3/)，主要改进了 SSR，包括 HTML Streaming、服务端 Error Boundary、createReaction 等
- [React 新增 onRecoverableError API](https://github.com/facebook/react/pull/23207)，hydration 出错时会 fallback 到客户端渲染，可以正常渲染，但错误却被隐藏了，现在通过 onRecoverableError 可以取到错误信息
- [pnpm 发布 6.32](https://github.com/pnpm/pnpm/releases/tag/v6.32.0)，支持 onlyBuiltDependencies，只允许白名单的依赖执行 install scripts
- [Chrome 99 DevTools 更新](https://developer.chrome.com/blog/new-in-devtools-99/)，WebSocket 请求支持慢速比如 Slow 3G、Chrome 插件支持 sourcemap、更好看的 console 样式和格式等
- [Parcel CSS 发布 1.4](https://twitter.com/devongovett/status/1496516023775903745)，一些具体样式规则的支持与改进
- [History 发布 5.3](https://github.com/remix-run/history/releases/tag/v5.3.0)，支持所有 export 的 Native ESM 消费方式

## 我的知识星球

我在知识星球开了个专栏，付费的那种。专栏名叫「云谦和他的朋友们」。截止 2022.2.28 已有 200+ 朋友加入，写了 62 篇日更，44 篇每日前端资讯简报，还有大量问题回复。

以下是上周的 5 篇日更。

- 62 - 《高效使用 Chrome 收藏夹》
- 61 - 《包管理器：npm、yarn、cnpm 和 pnpm（上）》
- 60 - 《找到依赖：node 和 webpack 的 resolve 机制》
- 59 - 《App 推荐：Tot》
- 58 - 《TypeScript 格式配置的 AOT 和 JIT》

<p style="color:#b5495b;"><a style="color:#b5495b;" href="https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247484448&idx=1&sn=3195bb82d2d2b7d58305c4f1aeae5e0d">点击此处查看详情</a>或扫下方二维码加入（新增立减 100 的优惠券，截止到周五）。</p>

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzs8wwdt4tj20g40nimyz.jpg)

## 小结

以上就是本期我的分享。如果需要文内资讯的链接，请点击「查看原文」。持续更新不易，如果你喜欢本周刊，请转发给你的朋友，告诉他们到这里来订阅，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
