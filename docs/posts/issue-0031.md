---
title: "Fleet、Sandpack、MFSU、SVGR 6、Floating UI"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01dQgKlK1L9IGVmU71p_!!6000000001256-0-tps-1600-1066.jpg"
titleImageCaption: "GMTC @ 2021.12.5"
publishedAt: "2021/12/06"
---


## ❄️ TL;DR

👉 Fleet<br />
👉 Sandpack 开源<br />
👉 MFSU + Webpack<br />
👉 SVGR 6<br />
👉 Nextra 2 Beta<br />
👉 useRef lazy<br />
👉 Vite 生态<br />
👉 Rethink Modal Management<br />
👉 Floating UI<br />

## ⚡ 展开讲讲

### Fleet
https://blog.jetbrains.com/blog/2021/11/29/welcome-to-fleet/

![](https://img.alicdn.com/imgextra/i2/O1CN01BtpPra1W63Ek5QQoa_!!6000000002738-0-tps-1600-1038.jpg)

摘要，

- JetBrains 下一代轻量级编辑器
- 支持一键开启强大的 IDE 功能
- 支持 TypeScript、Go、Rust、Python 等主流语言
- Fleet 是分布式的，可以在 [JetBrains Space](https://www.jetbrains.com/zh-cn/remote-development/space-dev-environments/) 中运行，支持自定义 Dockerfile
- Fleet 支持多人协作

感兴趣的可在 [https://www.jetbrains.com/zh-cn/fleet/](https://www.jetbrains.com/zh-cn/fleet/) 填表加入早期预览的排队列表。<br /><br />

### Sandpack 开源
https://codesandbox.io/post/sandpack-announcement

![](https://img.alicdn.com/imgextra/i2/O1CN01QCTmR01TPL4KVy7or_!!6000000002374-0-tps-1200-627.jpg)

摘要，

- in-browser bundler
- 支持 npm dependencies、hot module reloading、caching 等
- 场景比如 build a student course with live tests，build a no-code editor with a live preview
- 开源两个包 @codesandbox/sandpack-client 和 @codesandbox/sandpack-react，前者用于加载 sandpack 并与之通讯，后者是前者的 react 实现，其他语言的实现可基于前者自行封装

![](https://img.alicdn.com/imgextra/i2/O1CN01k3MoHf1PCHJLCqWbk_!!6000000001804-0-tps-1600-573.jpg)

试验了一把 sandpack，依赖请求会先走 jsdelivr 再走 codesandbox 自己的服务，比如 lodash，

- [https://data.jsdelivr.com/v1/package/npm/lodash](https://data.jsdelivr.com/v1/package/npm/lodash)
- [https://prod-packager-packages.codesandbox.io/v2/packages/lodash/4.17.21.json](https://prod-packager-packages.codesandbox.io/v2/packages/lodash/4.17.21.json)

可以看到，他们开源了 Client 并没有开源 Server，所以有私域内网包要求，或者要求高可用的目前还不可用，可以先拿来做文档演示啥的。

### MFSU + Webpack
https://github.com/sorrycc/example-webpack-mfsu

![](https://img.alicdn.com/imgextra/i3/O1CN013t2u9o1vK7nddh2jQ_!!6000000006153-0-tps-1204-378.jpg)

为 GMTC 分享准备的小例子，mfsu 不再和 umi 强绑，可用于任意 webpack 5 项目。示例项目使用 antd 等库后，项目首次空缓存启动也只要 1 分钟不到。

### SVGR 6
https://github.com/gregberge/svgr/releases/tag/v6.0.0

SVGR 用于将 SVG 转化为 React 组件。注意和 SVGO 的区别，SVGO 全面 SVG Optimize，用于优化 SVG 尺寸。SVGR 基于 SVGO。<br />

摘要，

- 大量新功能，SVGO 2、JSX Runtime、icon sizes、CSS variables、simplified templates 等
- 基于 TypeScript 重写
- 不再支持 Webpack 5 之前的版本

### Nextra 2 Beta
https://github.com/shuding/nextra/tree/v2.0.0-beta.2

![](https://img.alicdn.com/imgextra/i2/O1CN01psjMnz1ZgBKPr04J6_!!6000000003223-0-tps-1600-1380.jpg)

摘要，

- 基于 Next.js，文件系统路由
- 支持 MDX
- 自动生成 sidebar 和 anchor links
- 内置语法高亮、图片优化、i18n 等
- 支持主题，内置 doc 和 blog 两个主题

### useRef lazy
https://thoughtspile.github.io/2021/11/30/lazy-useref/

作者介绍了四种 lazy 初始化 useRef 值的方法，其实还有个选择是 use-constant（[https://github.com/Andarist/use-constant](https://github.com/Andarist/use-constant)）。

### Vite 生态
https://patak.dev/vite/ecosystem.html

长文，作者非常全面地介绍了 Vite 生态。

### Rethink Modal Management
https://medium.com/@ebaytechblog/rethink-modals-management-in-react-cf3b6804223d

![](https://img.alicdn.com/imgextra/i3/O1CN01GHNNeg1VzBIQ1AMJv_!!6000000002723-0-tps-1400-787.jpg)

React 组件里的 Modal 部分，应该写在哪，怎么管理其状态，应该困扰过不少朋友。ebay 的开发者提供了一套方案，包含创建、注册和使用 Modal。使用 Modal 提供了多种形态，命令式直接调、结合 hooks 用 useModal 等，并且可以和 redux 结合，方便在 redux devtool 中查看 modal 状态。

```ts
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import HelloModal from './HelloModal';
// ...
const modal = useModal(HelloModal);
// Show the modal and pass arguments as props
modal.show({ name: 'Nate' });
// ...
```
想到去年做的一个项目中有十几个 Modal，并且 Modal 之间还有依赖、分支等关系就头疼，至少用这套方案可以更优雅地解我们之前的那个问题。

### Floating UI
https://www.floating-ui.com/

![](https://img.alicdn.com/imgextra/i3/O1CN01gXZbaa1sEgFEZphf5_!!6000000005735-0-tps-1274-490.jpg)

摘要，

- Low Level 库
- 处理各种浮动元素的定位，包含 Tooltips, popovers, dropdowns, menus 等
- 足够小，内核库仅 0.6K，新增功能时增量添加尺寸，支持 TreeShaking

比如：

```ts
import {computePosition} from '@floating-ui/dom';

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');
const {x, y} = await computePosition(button, tooltip, {
  placement: 'left-end'
});
Object.assign(tooltip.style, {
  left: x + 'px',
  top: y + 'px'
});
```
