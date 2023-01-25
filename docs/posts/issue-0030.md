---
title: "Remix 1、Lightweight Deps、Anti Trojan Source"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01NQ1GT11SWpw5gVJTi_!!6000000002255-0-tps-1080-607.jpg"
titleImageCaption: "Find Me"
publishedAt: "2021/11/29"
---

## ❄️ TL;DR
👉 Remix 1<br />
👉 Prettier 2.5<br />
👉 React + TypeScript Cheat Sheet<br />
👉 Lightweight Deps<br />
👉 Anti Trojan Source<br />
👉 Parcel Roadmap<br />
👉 SVGcode<br />
👉 Automa<br />
👉 React 组件库研发<br />
👉 Modern CSS Reset


## ⚡ 展开讲讲

### Remix 1
https://remix.run/blog/remix-v1

![](https://img.alicdn.com/imgextra/i1/O1CN015DX0aV1eUnYwB4e5p_!!6000000003875-0-tps-1472-438.jpg)

摘要，

- Remix 刚发布时就付费支持了，今天终于发布了 1.0 正式版
- 作者同时是 react-router 的作者
- Remix 带来和现有社区框架完全不同的感受，专注最终用户体验，专注性能，构建纯基于 esbuild 等

- 尝鲜可以执行以下命令，

```bash
$ npx create-remix
$ npm i
$ vercel link
$ npm build
$ vercel
```
然后就可以查看部署了，我跑完的地址是 [https://my-remix-app-delta.vercel.app/](https://my-remix-app-delta.vercel.app/) 。



### Prettier 2.5
https://prettier.io/blog/2021/11/25/2.5.0.html

![](https://img.alicdn.com/imgextra/i1/O1CN01QhzOtp1GByVNorAbo_!!6000000000585-0-tps-1386-588.jpg)

摘要，

- 支持 TypeScript 4.5 的新语法，包含 type Modifier、Privite Field 和 Import Assertions
- 支持 .mts 和 .cts，当成 TypeScript 处理
- 支持 MDX 2 的注释语法 {/* A Comment */}

### React + TypeScript Cheat Sheet
https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe

![](https://img.alicdn.com/imgextra/i4/O1CN011iVv1A23yRasDj3Fu_!!6000000007324-0-tps-1012-506.jpg)

### Lightweight Deps
https://www.tinyverse.org/

摘要，

- 任何新增的依赖及其下层依赖都可能破坏你的项目
- 新增依赖需谨慎
- 尽量选 stable 的依赖，他会给你减少很多工作量

**人生苦短，不要依赖 unstable 的依赖。**

那如何识别依赖是否靠谱？

- Age，存在好多年且有活跃的使用和维护的依赖通常靠谱
- Size and scope，scope 越大，越难保证 stable
- Version history，基于 Semver 的历史版本如果经常更新大版本，通常不够 stable
- Upgrade guides，如果依赖没有升级指引，可能不靠谱

文中还提供了很多值得一读的关于依赖的讨论和文章。

### Anti Trojan Source
https://github.com/lirantal/anti-trojan-source

![](https://img.alicdn.com/imgextra/i2/O1CN01yvCHyu23CoP744C97_!!6000000007220-0-tps-1280-640.jpg)

用于检测源码中的 unicode bidi attacks，还有配套的 eslint 插件。原理是检查是否包含以下字符，

```ts
export const dangerousBidiChars = [
  '\u061C',
  '\u200E',
  '\u200F',
  '\u202A',
  '\u202B',
  '\u202C',
  '\u202D',
  '\u202E',
  '\u2066',
  '\u2067',
  '\u2068',
  '\u2069'
]
```

### Parcel Roadmap
https://github.com/parcel-bundler/parcel/discussions/7345

长期目标里，有计划用 Rust 重写 Parcel Core 的。同时看着这份 Roadmap，更让我感受到 Webpack 长期积累的的厚重，因为大量功能在 Webpack 中早已实现。就像最近大量用 google docs，写文字非常安心，完全不用担心他会出啥乱子。

### SVGcode
https://web.dev/svgcode/

![](https://img.alicdn.com/imgextra/i2/O1CN01Qyqhuw1s9BUVrcd2N_!!6000000005723-0-tps-1600-967.jpg)

摘要，

- PWA 应用，用于把位图转换为矢量图
- 基于 [Potrace](http://potrace.sourceforge.net/)，作者将其转换为 [wasm 格式](https://www.npmjs.com/package/esm-potrace-wasm)

App 地址在 [https://svgco.de/](https://svgco.de/) 。

### Automa
https://github.com/kholid060/automa

![](https://img.alicdn.com/imgextra/i4/O1CN01HSU3ZD1ZXwCJA1pz9_!!6000000003205-0-tps-1600-740.jpg)

Chrome 插件，可视化设计自动化的浏览器操作脚本。比如每三个月自动续签杭州汽车车牌摇号。

### React 组件库研发
https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

作者介绍了如何从 0 开始手动开发 React 组件库和发布，涉及每个环节的工程化思路，包含 Setup、TypeScript、Rollup 打包、发布、使用、CSS、Storybook、SCSS 等。

### Modern CSS Reset
https://www.joshwcomeau.com/css/custom-css-reset/

CSS Reset 是每个站点都需要的，最有名的应该是 Eric Meyer 的 [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)，但这也是 10 年前的版本了。作者整理了他的 CSS Reset 版本，包含 9 条规则，进而做了详细解释，说明每一条加的原因和他的考虑。

```css
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
```
