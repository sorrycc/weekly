# MDH 前端周刊第 31 期：Fleet、Sandpack、MFSU、SVGR 6、Floating UI

**这是 「MDH：前端周刊」 第 0031 期，发表于：2021/12/06。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://lh4.googleusercontent.com/ghwwQrLwrHVE6WXi0gWOsZJZ1VpzPfM8y0BOnKl5wi--9wq3zeuBPbYFRAEYTrLfKR-aDU07WPAuP75h_5jjZlazwPksDtbOceuwrG0Y5Cc2AZErgzULLz1uA81VQCu36zeAwbrN#crop=0&crop=0&crop=1&crop=1&from=url&id=YxsdD&margin=%5Bobject%20Object%5D&originHeight=1066&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />封面图：GMTC @ 2021.12.5。

<a name="ewdXS"></a>
## ❄️ TL;DR
​

👉 Fleet<br />👉 Sandpack 开源<br />👉 MFSU + Webpack<br />👉 SVGR 6<br />👉 Nextra 2 Beta<br />👉 useRef lazy<br />👉 Vite 生态<br />👉 Rethink Modal Management<br />👉 Floating UI<br />​<br />
<a name="Ys3kF"></a>
## ⚡ 展开讲讲
<a name="pMQct"></a>
### Fleet
[https://blog.jetbrains.com/blog/2021/11/29/welcome-to-fleet/](https://blog.jetbrains.com/blog/2021/11/29/welcome-to-fleet/)<br />![](https://lh4.googleusercontent.com/ftICs8Y7vBrPR20_W5cunINUaavYC6DOHRkzEpb197IQb32ErteBa-rKrPd9zXtdn66O7j6GLQvkzFeTM9u3drWHo6tEnLY2n3_6hYWXpF_3331VPQUsSusbOKsGe0P0DF4tXdtt#crop=0&crop=0&crop=1&crop=1&from=url&id=c1aXd&margin=%5Bobject%20Object%5D&originHeight=1038&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />​

摘要，<br />​<br />

- JetBrains 下一代轻量级编辑器
- 支持一键开启强大的 IDE 功能
- 支持 TypeScript、Go、Rust、Python 等主流语言
- Fleet 是分布式的，可以在 [JetBrains Space](https://www.jetbrains.com/zh-cn/remote-development/space-dev-environments/?_gl=1*n5qrbw*_ga*MTYxMjczNTE5OC4xNjI3NDQwNTYw*_ga_0WQ2ZF5VGT*MTYzODIwMDAyNi4xMy4xLjE2MzgyMDA1MjcuNjA.&_ga=2.212457948.997218870.1638200026-1612735198.1627440560) 中运行，支持自定义 Dockerfile
- Fleet 支持多人协作

​

感兴趣的可在 [https://www.jetbrains.com/zh-cn/fleet/](https://www.jetbrains.com/zh-cn/fleet/) 填表加入早期预览的排队列表。<br />​<br />
<a name="F0Oiz"></a>
### Sandpack 开源
[https://codesandbox.io/post/sandpack-announcement](https://codesandbox.io/post/sandpack-announcement)<br />![](https://lh3.googleusercontent.com/qF6ylKq3Kgg-IIEXFEI6ttI3FfDXgBrMGyb79r-R3GrrfcMtAoL3wn-5nr6_RtBDCzzMBocB-EEReLhrGUYJVBLVgn2M7GSh11eF97rQM6wHTVCnzcFGGgCWFywrUEAcw5l5SmUq#crop=0&crop=0&crop=1&crop=1&from=url&id=BvnlR&margin=%5Bobject%20Object%5D&originHeight=627&originWidth=1200&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />摘要，<br />​<br />

- in-browser bundler
- 支持 npm dependencies、hot module reloading、caching 等
- 场景比如 build a student course with live tests，build a no-code editor with a live preview
- 开源两个包 @codesandbox/sandpack-client 和 @codesandbox/sandpack-react，前者用于加载 sandpack 并与之通讯，后者是前者的 react 实现，其他语言的实现可基于前者自行封装

![](https://lh6.googleusercontent.com/MD7FkQ7f3l-e3QdwS-UrVWh8rxjbvs3sjxQa2xFXdPoxzhoKW5qmL_H5ZdZ6IDbTLhRrWiJNGbbjDfglxITd6FXp_snQDd-EdRSAEOKDOlVvxiDC74T8JxS8DnTwwLyfoupkbdHI#crop=0&crop=0&crop=1&crop=1&from=url&id=w9jS5&margin=%5Bobject%20Object%5D&originHeight=573&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />试验了一把 sandpack，依赖请求会先走 jsdelivr 再走 codesandbox 自己的服务，比如 lodash，

- [https://data.jsdelivr.com/v1/package/npm/lodash](https://data.jsdelivr.com/v1/package/npm/lodash)
- [https://prod-packager-packages.codesandbox.io/v2/packages/lodash/4.17.21.json](https://prod-packager-packages.codesandbox.io/v2/packages/lodash/4.17.21.json)

​

可以看到，他们开源了 Client 并没有开源 Server，所以有私域内网包要求，或者要求高可用的目前还不可用，可以先拿来做文档演示啥的。

<a name="HBBA8"></a>
### MFSU + Webpack
[https://github.com/sorrycc/example-webpack-mfsu](https://github.com/sorrycc/example-webpack-mfsu)<br />![](https://lh6.googleusercontent.com/n5jwEcbi5kM0UzYmVmQIUweTxCkBRwg13tY5BSojFG7RfL8CnkGyafNFUmCN-FSeG5CczTnCBsbMzsiZo1-0433szOBH_KRY50rZjILHKSJoPootekaKE_4kktB8AAWAtUjrI4JR#crop=0&crop=0&crop=1&crop=1&from=url&id=Yffk4&margin=%5Bobject%20Object%5D&originHeight=378&originWidth=1204&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />为 GMTC 分享准备的小例子，mfsu 不再和 umi 强绑，可用于任意 webpack 5 项目。示例项目使用 antd 等库后，项目首次空缓存启动也只要 1 分钟不到。<br />​<br />
<a name="JnEI6"></a>
### SVGR 6
[https://github.com/gregberge/svgr/releases/tag/v6.0.0](https://github.com/gregberge/svgr/releases/tag/v6.0.0)<br />​

SVGR 用于将 SVG 转化为 React 组件。注意和 SVGO 的区别，SVGO 全面 SVG Optimize，用于优化 SVG 尺寸。SVGR 基于 SVGO。<br />​

摘要，<br />​<br />

- 大量新功能，SVGO 2、JSX Runtime、icon sizes、CSS variables、simplified templates 等
- 基于 TypeScript 重写
- 不再支持 Webpack 5 之前的版本

​<br />
<a name="khybi"></a>
### Nextra 2 Beta
[https://github.com/shuding/nextra/tree/v2.0.0-beta.2](https://github.com/shuding/nextra/tree/v2.0.0-beta.2)<br />![](https://lh3.googleusercontent.com/OwffzrRxOproKeWp38ulSAr5YerXjaS5gq069AR2x1cOVJayy3M_Q7vOwNUiDzOAA0TVb3J-iUJ-gqyLDtCksSqaYkI1Lfo1lYN1ElseuAPvv5MPps4RA05uqd_aBf-tSGimaEEN#crop=0&crop=0&crop=1&crop=1&from=url&id=gTlnH&margin=%5Bobject%20Object%5D&originHeight=1380&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

摘要，

- 基于 Next.js，文件系统路由
- 支持 MDX
- 自动生成 sidebar 和 anchor links
- 内置语法高亮、图片优化、i18n 等
- 支持主题，内置 doc 和 blog 两个主题

​<br />
<a name="uChUY"></a>
### useRef lazy
[https://thoughtspile.github.io/2021/11/30/lazy-useref/](https://thoughtspile.github.io/2021/11/30/lazy-useref/)

作者介绍了四种 lazy 初始化 useRef 值的方法，其实还有个选择是 use-constant（[https://github.com/Andarist/use-constant](https://github.com/Andarist/use-constant)）。<br />​<br />
<a name="JeLmW"></a>
### Vite 生态
[https://patak.dev/vite/ecosystem.html](https://patak.dev/vite/ecosystem.html)

长文，作者非常全面地介绍了 Vite 生态。<br />​<br />
<a name="DAG0W"></a>
### Rethink Modal Management
[https://medium.com/@ebaytechblog/rethink-modals-management-in-react-cf3b6804223d](https://medium.com/@ebaytechblog/rethink-modals-management-in-react-cf3b6804223d)<br />![](https://lh4.googleusercontent.com/qdf25ES1sjelAGoQ7YhKSyuaRQeLxkbY_HS4Ujws3z2d4YaIwdRznDMn7eu9HYKkSTysLEeoEUqxX8564q9jLbh7qQrhRBabRwPD05sjeuEKt7JFDI7UONiIAcCBl4UlaH4FaRE2#crop=0&crop=0&crop=1&crop=1&from=url&id=Uq42t&margin=%5Bobject%20Object%5D&originHeight=787&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />React 组件里的 Modal 部分，应该写在哪，怎么管理其状态，应该困扰过不少朋友。ebay 的开发者提供了一套方案，包含创建、注册和使用 Modal。使用 Modal 提供了多种形态，命令式直接调、结合 hooks 用 useModal 等，并且可以和 redux 结合，方便在 redux devtool 中查看 modal 状态。

```javascript
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import HelloModal from './HelloModal';
// ...
const modal = useModal(HelloModal);
// Show the modal and pass arguments as props
modal.show({ name: 'Nate' });
// ...
```
想到去年做的一个项目中有十几个 Modal，并且 Modal 之间还有依赖、分支等关系就头疼，至少用这套方案可以更优雅地解我们之前的那个问题。<br />​<br />
<a name="S6HEO"></a>
### Floating UI
[https://www.floating-ui.com/](https://www.floating-ui.com/)<br />![](https://lh3.googleusercontent.com/GYN2NOizoT815CB3Rm-PHG-q7Eo8PwmjSbW68i9XkSmjIbcClt60dsLlRWoQ6zlM9IBqT_lcy-NnhOA_ONsToSJkDCfOym3tj8FZQP3IClB6r9c1P4ASLb0HY9ph-_mNxX7fy9Em#crop=0&crop=0&crop=1&crop=1&from=url&id=O4gSf&margin=%5Bobject%20Object%5D&originHeight=490&originWidth=1274&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)​<br />摘要，

- Low Level 库
- 处理各种浮动元素的定位，包含 Tooltips, popovers, dropdowns, menus 等
- 足够小，内核库仅 0.6K，新增功能时增量添加尺寸，支持 TreeShaking

​

比如：
```javascript
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
​<br />

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
