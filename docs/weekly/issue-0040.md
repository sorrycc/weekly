---
title: "Chrome 工作原理、高性能 Hydration、次世代图片格式、渐进式 Favicon"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01WDz7TO1YjYdEoOqPY_!!6000000003095-0-tps-1149-646.jpg"
titleImageCaption: "师父（SIFU）"
publishedAt: "2022/02/14"
---

本期主要内容有这些：

- Chrome 工作原理
- 高性能 Hydration
- 次世代图片格式
- SVG Icon 最佳实践
- 渐进式 Favicon
- Web Components 入门
- 发布

## Chrome 工作原理
https://developers.google.com/web/updates/2018/09/inside-browser-part1

![](https://img.alicdn.com/imgextra/i2/O1CN01OBXkvS1lq3Fcd3S90_!!6000000004869-0-tps-1200-675.jpg)

前端必读，面试必考。作者分了 4 篇文章介绍现代浏览器是如何工作的。

## 高性能 Hydration
https://dev.to/this-is-learning/why-efficient-hydration-in-javascript-frameworks-is-so-challenging-1ca3

![](https://img.alicdn.com/imgextra/i4/O1CN01yn3Vsd1KDaMcDIotQ_!!6000000001130-0-tps-880-226.jpg)

并不是有了 SSR 就能有更好的 SEO 和性能。因为简单的 SSR 不能解决问题，反而让可交互时间相比纯 CSR 变得更长。其中一个原因是注水后的代码更大，包含两份模板、两份数据，分别在 HTML 和 JavaScript 中。这个问题可以称呼为 Double Template Problem 和 Double Data Problem。

作者整理了社区的多种解法，

1、静态路由。比如 Remix、SvelteKit 和 SolidStart。对于静态站点而言，无需 JavaScript、额外的网络请求、数据序列化、注水等。

2、渐进式注水或者叫懒注水。比如 Astro。JavaScript 不是不加载，而是不立即加载，有交互时比如点击时才加载。一个冲突的点是现代框架比如 React 和 Svelte 都只支持自上而下的注水，从 root 节点开始，这就会带来大量的性能消耗。所以这种方式虽能带来更好的 Lighthouse 分数，但对于用户来说体验不一定好。

3、从 HTML 提取数据。比如 Prism Compiler。

4、部分注水或者叫 Islands，见下图。比如 Astro 和 Marko。HTML 中大部分其实不用交互，只有小部分的 Islands 需要交互，所以只要针对 Islands 注水即可。此方案有个缺点，页面回归到 MPA，不再是 SPA，没有 Client Side 切换，也不能在跳转时保持客户端状态。

5、乱序注水。比如 Qwik。是「解法 2 懒注水」的升级版。

6、Server Components。比如 React Server Components。在部分注水的基础上，在服务端做静态部分的 re-render 就是 Server Components。优点是在部分注水的基础上，保留页面切换时的客户端数据。

![](https://img.alicdn.com/imgextra/i4/O1CN01vRVZGI1QiAVFZqi5V_!!6000000002009-0-tps-700-247.jpg)

## 次世代图片格式
https://moonvy.com/blog/post/2022/next-generation-Image-format-2022/

![](https://img.alicdn.com/imgextra/i2/O1CN01Pi6EZY1b2SCl5tU9b_!!6000000003407-0-tps-1498-920.jpg)

作者非常看好 JPEG XL ，虽然它的有损压缩不如 AVIF，但比起 JPEG 来说有了非常大的进步，而其无损压缩又有优势，并且在最大图像尺寸、色彩深度上有决定性的优势（在传统的摄影、印刷领域）。另外还是唯一可以无损转换旧有 JPEG 图片到新格式的格式，迁移旧数据不需有所顾虑。只待浏览器支持度能赶上 AVIF 了。

## SVG Icon 最佳实践
https://benadam.me/thoughts/react-svg-sprites/

最早使用 SVG 是这样，带来的问题是会闪屏，以及。

```html
<img src='icon.svg'>
```

后来改用 Inline SVG，代码如下。缺点是会重复，每使用一次就重复一次。

```ts
const icon = (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <path d="...">
  </svg>
)
```

作者给的解法是 Inline SVG + SVG Sprites，然后 sprite.svg 再通过 link + preload 预加载来避免闪屏问题。

```ts
const icon = (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <use href="sprite.svg#icon" />
  </svg>
)
```

## 渐进式 Favicon
https://web.dev/building-an-adaptive-favicon/

![](https://img.alicdn.com/imgextra/i2/O1CN01jmkmOv1lUWdcutL97_!!6000000004822-0-tps-1600-900.jpg)

实现的效果是 Dark 模式下切换 Favicon 样式。背后原理是因为浏览器支持 SVG，然后 SVG 里可以写样式，样式里又可以写 media query。

```css
@media (prefers-color-scheme: dark) {
  .favicon-stroke { stroke: #343a40 }
  #skull-outline { fill: #adb5bd }
  #hat-outline { fill: #343a40 }
  #eyes-and-nose { fill: #343a40 }
}
```

## Web Components 入门
https://www.abeautifulsite.net/posts/a-web-components-primer/

![](https://img.alicdn.com/imgextra/i3/O1CN01QFP5Nd1tCg89f5U0J_!!6000000005866-0-tps-1600-900.jpg)

作者简洁明了地介绍了 Custom Element、Shadow DOM、Light DOM、Slots 这些概念分别是啥意思。

Custom Element 即自定义元素，是现代浏览器的内置功能，用在 HTML 中，使用前需先注册，命名是 a-z 并且至少包含一个 - 间隔符，比如 <my-button>。

Shadow DOM 是 web components 的一个能力，可以封装样式，和外部 DOM 的互不影响，实现方式是添加一个隐藏的单独的 DOM 到 Custom Element，这个 DOM 就是 Shadow DOM。

Slots 用于 Custom Element 的嵌套，默认的是 `<slot></slot>`，可以声明 name，`<slot name="header"></slot>`，使用时带上 name，比如 `<my-element><h2 slot="header">foo</h2></my-element>`。

用于渲染 Custom Element 的 DOM 叫 Light DOM。

## 发布

以下是上周社区的重要发布。

- [jotai 发布 1.6](https://github.com/pmndrs/jotai/releases/tag/v1.6.0)，引入 unstable_createStore
- [TypeScript 发布 4.6 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6-rc/)，两个主要功能，1）Control Flow 分析支持变量析构，2）target 支持 es2022
- [zx 发布 5](https://github.com/google/zx/releases/tag/5.0.0)，新增内置 YAML 支持，但删除了 cjs 输出，不能配合 esno 使用了...
- [vite 发布 2.8](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#280-2022-02-09)，publish size 减少 75%，精益求精
- [Parcel 发布 2.3](https://github.com/parcel-bundler/parcel/releases/tag/v2.3.0)，减少 60% 依赖，方案是预打包依赖，按需安装 node 补丁、babel、postcss 等依赖
- [react-query 发布 4-alpha](https://tkdodo.eu/blog/offline-react-query)，引入方案解 3 不能解的 offline-first 问题
- [Flutter for Windows 发布](https://medium.com/flutter/announcing-flutter-for-windows-6979d0d01fed)
- [font awesome 发布 6](https://fontawesome.com/docs/changelog/)，7000+ 新 icon
- [Babel 发布 7.17](https://babeljs.io/blog/2022/02/02/7.17.0)，正式的 decorator proposal、RegExp v flag、@babel/register 重写
- [vue devtools 发布 6](https://github.com/vuejs/devtools/releases/tag/v6.0.0)
