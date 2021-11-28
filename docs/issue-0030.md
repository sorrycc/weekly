# MDH 前端周刊第 30 期：Remix 1、Lightweight Deps、Anti Trojan Source

**这是 「MDH：前端周刊」 第 0030 期，发表于：2021/11/29。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**<br />​

![](https://lh4.googleusercontent.com/RGvV2IfRY54h1DEdqWdpfBKiJMQB2jxpu9qh4d_7gAiOSW8Oj_YTkBAHJ3xE_Uw1aEQItZ3Vz2eA-j6x8hepRJVsaPZ35Vo9szVDRiFkJgEf4sFu2uahxwrWlJRHiXHWncFGn7zQ#crop=0&crop=0&crop=1&crop=1&from=url&id=pCrGj&margin=%5Bobject%20Object%5D&originHeight=607&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)​<br />封面图：Find Me。<br />​<br />
<a name="Vpiqx"></a>
## ❄️ TL;DR​
<br />👉 Remix 1<br />👉 Prettier 2.5<br />👉 React + TypeScript Cheat Sheet<br />👉 Lightweight Deps<br />👉 Anti Trojan Source<br />👉 Parcel Roadmap<br />👉 SVGcode<br />👉 Automa<br />👉 React 组件库研发<br />👉 Modern CSS Reset

<a name="ROjRF"></a>
## ⚡ 展开讲讲
<a name="xrpfq"></a>
### Remix 1
[https://remix.run/blog/remix-v1](https://remix.run/blog/remix-v1)<br />![](https://lh5.googleusercontent.com/7yCMUpFmM1GHeuFbQ3FAMgb8D5ifRe4bT1Nn2rWz_9AIyIT5GAM_2kwFYpUBdlFZp22P_CwqoopUN_X_Cd0GMpoSIybFf0XzycELp1PpzE1vt4OJFbIrZZMTufxoE9ZdiluMbFac#crop=0&crop=0&crop=1&crop=1&from=url&id=N6Pvv&margin=%5Bobject%20Object%5D&originHeight=438&originWidth=1472&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />​

摘要，<br />​<br />

- Remix 刚发布时就付费支持了，今天终于发布了 1.0 正式版
- 作者同时是 react-router 的作者
- Remix 带来和现有社区框架完全不同的感受，专注最终用户体验，专注性能，构建纯基于 esbuild 等

​

尝鲜可以执行以下命令，
```bash
$ npx create-remix
$ npm i
$ vercel link
$ npm build
$ vercel
```
然后就可以查看部署了，我跑完的地址是 [https://my-remix-app-delta.vercel.app/](https://my-remix-app-delta.vercel.app/) 。<br />​<br />
<a name="kImKl"></a>
### Prettier 2.5
[https://prettier.io/blog/2021/11/25/2.5.0.html](https://prettier.io/blog/2021/11/25/2.5.0.html)<br />![](https://lh6.googleusercontent.com/aeM7Hz3AwKMeMgmnYtfK5IVbchK_YyuOJLJpfg_cDFuqfYSvlc1xb7KovT1p_Ke-eFUwNno66RttVx6jHSW_n91X4Wnup3az413xDcMvL8Mlxri-OR_jHst-JVAJZqoOyvJFvYhK#crop=0&crop=0&crop=1&crop=1&from=url&id=kUi1D&margin=%5Bobject%20Object%5D&originHeight=588&originWidth=1386&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />摘要，

- 支持 TypeScript 4.5 的新语法，包含 type Modifier、Privite Field 和 Import Assertions
- 支持 .mts 和 .cts，当成 TypeScript 处理
- 支持 MDX 2 的注释语法 {/* A Comment */}

​<br />
<a name="kgBN0"></a>
### React + TypeScript Cheat Sheet
[https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe](https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe)<br />![](https://lh6.googleusercontent.com/ddA-kEOwOOwn38fMGgRlKNn-u6Jfb3u4bsdN68En7es6dWshE4RRREqH2ppFkxgbowbIUPK87XiWrgXBfpX97tyQUJiy-5zm7OXn4QT3UdAGlFbRUi5gGVYdoIsKgWZoojSob2Th#crop=0&crop=0&crop=1&crop=1&from=url&id=APXVq&margin=%5Bobject%20Object%5D&originHeight=506&originWidth=1012&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
<a name="hrmaE"></a>
### Lightweight Deps
[https://www.tinyverse.org/](https://www.tinyverse.org/)

摘要，

- 任何新增的依赖及其下层依赖都可能破坏你的项目
- 新增依赖需谨慎
- 尽量选 stable 的依赖，他会给你减少很多工作量

​

**人生苦短，不要依赖 unstable 的依赖。**

那如何识别依赖是否靠谱？<br />​<br />

- Age，存在好多年且有活跃的使用和维护的依赖通常靠谱
- Size and scope，scope 越大，越难保证 stable
- Version history，基于 Semver 的历史版本如果经常更新大版本，通常不够 stable
- Upgrade guides，如果依赖没有升级指引，可能不靠谱

​

文中还提供了很多值得一读的关于依赖的讨论和文章。<br />​<br />
<a name="O1143"></a>
### Anti Trojan Source
[https://github.com/lirantal/anti-trojan-source](https://github.com/lirantal/anti-trojan-source)<br />![](https://lh3.googleusercontent.com/soxWSU9jNe3Ns7kzhpPaiorsp0PrfRogtM8SjZQf20uFUb7mfFgKOHNS9pEh9JbuMKrl-aly6Zo76Ga3S-HmB1sd8q8pUpU4_DjY8QUMuHuUBZ3fnZOPySyqFemVZ5vMcv5YLLNE#crop=0&crop=0&crop=1&crop=1&from=url&id=dXzgr&margin=%5Bobject%20Object%5D&originHeight=640&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />用于检测源码中的 unicode bidi attacks，还有配套的 eslint 插件。原理是检查是否包含以下字符，<br />​<br />
```javascript
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
​<br />
<a name="U1Z4k"></a>
### Parcel Roadmap
[https://github.com/parcel-bundler/parcel/discussions/7345](https://github.com/parcel-bundler/parcel/discussions/7345)<br />​

长期目标里，有计划用 Rust 重写 Parcel Core 的。同时看着这份 Roadmap，更让我感受到 Webpack 长期积累的的厚重，因为大量功能在 Webpack 中早已实现。就像最近大量用 google docs，写文字非常安心，完全不用担心他会出啥乱子。<br />​<br />
<a name="WGiq4"></a>
### SVGcode
[https://web.dev/svgcode/](https://web.dev/svgcode/)<br />![](https://lh6.googleusercontent.com/r_e-7R_8bVSFfEx3QQ0ttem-EIXm9tvxkZT9C5JyIyfYhPFRFrskvaStMpxcX9oqSwJZ_-xs_POvzayDh3edqesqxxknb65R_6rNdj4ilIRW98hOQN-3TzLo4_Ejat_uPRsICu1y#crop=0&crop=0&crop=1&crop=1&from=url&id=g6nTI&margin=%5Bobject%20Object%5D&originHeight=967&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />​

摘要，

- PWA 应用，用于把位图转换为矢量图
- 基于 [Potrace](http://potrace.sourceforge.net/)，作者将其转换为 [wasm 格式](https://www.npmjs.com/package/esm-potrace-wasm)

​

App 地址在 [https://svgco.de/](https://svgco.de/) 。<br />​<br />
<a name="iBssK"></a>
### Automa
[https://github.com/kholid060/automa](https://github.com/kholid060/automa)<br />![](https://lh4.googleusercontent.com/FGpiav5_HpeeVaubHUSFoz7LVmFUOFFS3OoqH9n-o5vFhh8b8vkz7w-9HK-ZnjIDwtJKZ3dP7o-WEk9bLatkZ8PP8VLI3Z5S2SEXSUMwzKzF_nrmEM_yjdhwQukflLyy5h0Lt6w2#crop=0&crop=0&crop=1&crop=1&from=url&id=EieBk&margin=%5Bobject%20Object%5D&originHeight=740&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

Chrome 插件，可视化设计自动化的浏览器操作脚本。比如每三个月自动续签杭州汽车车牌摇号。<br />​<br />
<a name="Oa1TK"></a>
### React 组件库研发
[https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)<br />​

作者介绍了如何从 0 开始手动开发 React 组件库和发布，涉及每个环节的工程化思路，包含 Setup、TypeScript、Rollup 打包、发布、使用、CSS、Storybook、SCSS 等。<br />​<br />
<a name="NNzNX"></a>
### Modern CSS Reset
[https://www.joshwcomeau.com/css/custom-css-reset/](https://www.joshwcomeau.com/css/custom-css-reset/)<br />​

CSS Reset 是每个站点都需要的，最有名的应该是 Eric Meyer 的 [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)，但这也是 10 年前的版本了。作者整理了他的 CSS Reset 版本，包含 9 条规则，进而做了详细解释，说明每一条加的原因和他的考虑。<br />​<br />
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
​<br />
<a name="9fb67bc1"></a>

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
