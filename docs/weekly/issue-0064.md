---
title: "Docusaurus 2、React Re-render 指南、避免屎山代码、独立 transform 属性、ugit"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01phirsu1r7ypqy7hTi_!!6000000005585-0-tps-1920-1080.jpg"
titleImageCaption: "dotzero @ unsplash"
publishedAt: "2022/08/08"
---

本周有这些内容想和你分享：

- Docusaurus 2
- React Re-render 指南
- 避免屎山代码
- 独立 transform 属性
- ugit

## Docusaurus 2
https://docusaurus.io/blog/2022/08/01/announcing-docusaurus-2.0

![](https://img.alicdn.com/imgextra/i3/O1CN01oULWsW24I8cpPB5iU_!!6000000007367-0-tps-760-160.jpg)

Docusaurus 是一个静态网站生成器，它可以帮助你在短时间内开发漂亮的文档网站。同时除文档之外，还可用于博客、知识库或 Landing Page。Prettier、Figma Developer、Supabase、StackBliz、Gulp、Tauri、Babel、React Native 等网站都基于 Docusaurus。

Docusaurus 2 带来了一些新能力，

1、React 不仅用于模板层，还用于客户端<br />
2、支持插件体系，比如本地搜索插件和基于 Shiki + TwoSlash 的高亮插件<br />
3、主题定制更灵活，包括自定义 CSS 变量、提供额外样式、手写主题和覆写内置的 React 组件等<br />
4、文档版本基于快照，更易于理解<br />
5、MDX<br />
6、约定式文件系统<br />

访问 https://docusaurus.new/stackblitz 尝鲜。

## React Re-render 指南
https://www.developerway.com/posts/react-re-renders-guide

![](https://img.alicdn.com/imgextra/i3/O1CN01peVMKE1WiWVO2rGVD_!!6000000002822-0-tps-2584-938.jpg)

什么是 re-render？什么是必要的 re-render 和不必要的 re-render？如果你对这些问题还模模糊糊的，在这篇文章中可以找到答案。

有四个原因可以让一个组件重新渲染自己：状态变化、父级（或子级）重新渲染、上下文变化和 hooks 变化。

通过 composition（组合）可以避免 re-render。有几种方式，1）把状态下移，避免上层组件 re-render，让 re-render 保持在一个很小的范围之内，2）children as props，作为 props，子组件不会受 state 变更的影响，3）component as props，避免 component re-render。

通过 React.memo 可以避免 re-render，被 memo 的组件只在 props 变更时会 re-render。有几种方式，1）对于带 props 的 component，需对非原始值的 props 做 memo，2）components as props or children，对子组件做 memo 而不要对父组件做 memo。

什么时候应该用 useMemo/useCallback？1）React.memo 过的组件的 props 应该用，因为他们只有 props 变更时才会 re-render，所以反之非 React.memo 过的组件的 props 无需使用，因为都会 re-render，用了也白用，2）useEffect、useMemo、useCallback 中非原始值的依赖应该用，3）重消耗（比如生成渲染树）的部分应该用，反之轻消耗不要用，因为 useMemo/useCallback 本身也有消耗。

如何防止 Context 引起的 re-render？1）memo context value，避免父级组件 re-render 导致 value 变更从而让依赖 context 的地方全部 re-render，2）拆分 data 和 API（getter 和 setter），这样 getter 变更时依赖 setter 的部分不会 re-render，3）把数据拆小，4）使用 context selector 比如 [use-context-selector](https://github.com/dai-shi/use-context-selector)。

## 避免屎山代码
https://www.danielsieger.com/blog/2022/07/25/your-code-doesnt-have-to-be-a-mess.html

你的代码不一定要变成屎山，随着时间推移，保持软件的简单性是个挑战。「傻瓜们忽视了复杂性。实用主义者要承受它。有些人可以避免它。天才们则会消除它。」作者整理了如下建议。

1、定义明确的目标，把它们写下来。只做一件事，并且把它做好。不要试图在同一时间解决无数的问题。遵循基本的 Unix 哲学。<br />
2、定义你的非目标，明确知道你的软件不解决什么问题。设置技术约束并坚持下去，在约束范围内发挥创造力。<br />
3、学会说「不」至关重要。这很困难甚至完全不可能，但即使如此，做需要的事情，但不要更多。但也要注意何时说「不」是不合理的。<br />
4、定期毫不留情地删减代码。删除未使用的功能、死代码、调试代码和开发中使用的原型代码。依赖版本控制。<br />
5、谨慎对待依赖，代码复用没那么重要。依赖可能会消失、中断、变成垃圾，或者引入安全风险。如果有关功能对你的核心业务至关重要，考虑自己做。<br />

## 独立 transform 属性
https://web.dev/css-individual-transform-properties/

![](https://img.alicdn.com/imgextra/i4/O1CN01Vf4Su11UvEGHZ4nkG_!!6000000002579-0-tps-1600-480.jpg)

独立 transform 属性已在 Chrome 104、Safari 和 Firefox 已支持（Edge 暂不支持）。

比如要平移 50%，旋转 30 度，最后放大到 120%。之前需要这样，

```css
.target {
  transform: translateX(50%) rotate(30deg) scale(1.2);
}
```

现在是，

```css
.target {
  translate: 50% 0;
  rotate: 30deg;
  scale: 1.2;
}
```

这带来的好处主要是动画方面的。1）编码时只需要写上变化的属性，之前通过 transform 需要把所有属性都写一遍，2）使用 @keyframes 时无需计算复杂的中间值，同时更容易做动画的模块化。

## ugit
https://github.com/Bhupesh-V/ugit

![](https://img.alicdn.com/imgextra/i4/O1CN01HdF3xh1FJTNHZkwcB_!!6000000000466-1-tps-1920-1026.gif)

git 界的 Command + Z，支持 19+ git 命令的撤销。

## 推广

我在知识星球开了个专栏，付费的那种。专栏名叫[「云谦和他的朋友们」](https://mp.weixin.qq.com/s/_23bA1R4t8KiIjCwmr83OQ)。截止 2022.08.08 已有 500+ 朋友加入，写了 163 篇日更，134 篇每日前端资讯简报，还有大量问题回复。

以下是上周的 4 篇日更。

- 163 - 《手撕源码 22：changelogen》
- 106 - 《ESMi》
- 105 - 《问题那些事》
- 104 - 《数据流 2022》

<p style="color:#b5495b;"><a style="color:#b5495b;" href="https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247484448&idx=1&sn=3195bb82d2d2b7d58305c4f1aeae5e0d">点击此处查看详情</a>或扫下方二维码加入。</p>

![](https://img.alicdn.com/imgextra/i3/O1CN01OL18Gq1NiDhRr1gSt_!!6000000001603-0-tps-1035-1395.jpg)
