# MDH 前端周刊第 77 期：Framer Motion 布局动画、Arrow JS、vanilla-extract 入门、antd 5、dumi 2

<img src="https://image-1256177414.cos.ap-shanghai.myqcloud.com/uPic/shawn-dearn-sgY1DaqB8AU-unsplash.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：shawndearn @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0077 期，发表于 2022/11/21。</p>

本周有这些内容想和你分享：

- Framer Motion 布局动画
- Arrow JS
- vanilla-extract 入门
- antd 5
- dumi 2

## Framer Motion 布局动画
https://www.nan.fyi/magic-motion

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/picgo/20221118232813.png)

这是一篇很好的互动式文章，解释了什么是布局动画。

为什么不用 CSS 动画实现？因为 CSS 动画有两个缺点。1）有些属性是不能做成动画的，比如 justify-content，2）做布局相关的动画时性能上相对较差。

那用什么实现？FLIP。Frame Motion 的布局动画基于此。FLIP 是啥？全称是 First, Last, Inverse, Play。它是一种技术，可以让你用 "快速 "的CSS属性（如transform）来为 "缓慢" 的布局变化制作动画。甚至支持不可动画的 CSS 属性（如 justify-content）。

实现位置变化的 FLIP 非常简单，但要涉及尺寸变化就会变得复杂。因为要考虑。1）尺寸的变化如何影响元素的移动距离，2）纠正由父元素中的变换引起的子元素的扭曲。一旦解决了这两个问题，我们就得到了一个相当可靠的自动布局动画的实现。

## Arrow JS
https://www.arrow-js.com/

![](https://image-1256177414.cos.ap-shanghai.myqcloud.com/picgo/20221119164127.png)

ArrowJS 是一个实验性的工具，零依赖性，尺寸为 3K min+gzip。他有两个功能，1）可观察的数据，2）声明式/反应式 DOM 渲染。他有 3 个接口，1）r 声明可观察的数据，2）w 跟踪函数内人可观察数据，3）t 模板渲染。

快速上手代码。

```ts
import { r, t } from '@arrow-js/core'
const data = r({
  clicks: 0
});
t`
  <button @click="${() => data.clicks++}">
    Fired ${() => data.clicks} arrows
  </button>
`
```

## vanilla-extract 入门
https://www.lekoarts.de/javascript/writing-performant-css-with-vanilla-extract

![oouyfS](https://image-1256177414.cos.ap-shanghai.myqcloud.com/uPic/oouyfS.png)

基于 vanilla-extract 编写高性能和类型安全的 CSS，这也是作者在新项目中首选的 CSS 方案，它结合了 TypeScript 和 CSS Modules 的优势，在 CSS in JS 和 CSS Modules 之间找了个很好的平衡点，不会像 CSS in JS 一样性能不好，写起来也没有传统 CSS 那么复杂。

作者的用法分三步。

1、定于全局样式 reset。作者推荐了 [Josh Comeau 的 CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)。写法是用 globalStyle API。

```ts
import { globalStyle } from "@vanilla-extract/css"
globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
})
```

2、设计主题。不需要多主题时也可以这么操作，适用于单主题，同时可以为未来的多主题留下扩展性。vanilla-extract 有 createThemeContract 和 createTheme 两个接口，前者用于创建主题合约，避免某个主题少实现了一些变量，后者是创建主题。

```ts
import { createThemeContract, createTheme } from "@vanilla-extract/css";
export const vars = createThemeContract({});
export const lightThemeClass = createTheme(vars, {});
export const darkThemeClass = createTheme(vars, {});
```

3、基于 style 和 styleVariants API 声明样式。

```ts
import { style } from "@vanilla-extract/css"
const base = style({ padding: 12 });
const wrapper = style([base, { background: `blue` }]);
```

```ts
import { style, styleVariants } from "@vanilla-extract/css"
const footerColors = {
  light: vars.colors.gray600,
  dark: vars.colors.gray400,
}
export const footer = styleVariants(footerColors, (color) => [
  footerBase,
  { color },
])
```

## antd 5
https://www.yuque.com/ant-design/ant-design/cy5nfvdo8oidvwmz

![LvnwbI](https://image-1256177414.cos.ap-shanghai.myqcloud.com/uPic/LvnwbI.png)

附 YingCi 的省留版介绍。

【 实际部分 】

1. 新增了组件（ Tour 用户引导、FloatButton 等几个新组件，时间选择器优化），自己去看，别伸手党。
2. 设计上的变化，省略几千字。
3. css in js ，自己用脑子想想能做啥吧。

【画饼部分】

1. 详情页画饼：2022 年 到 23 年大改版文档组件详情页，包括设计视角。
2. Kitchen 对齐画饼：设计资产自定义 + sketch 导出。
3. 快乐工作主题画饼：还没发，等年底，等通知。
4. 二维码组件、水印组件画饼：等通知，还没出
5. pro component 画饼：现在有 beta 版本可以用，但是你懂的。

## dumi 2
https://zhuanlan.zhihu.com/p/584551696

![tZqzNy](https://image-1256177414.cos.ap-shanghai.myqcloud.com/uPic/tZqzNy.jpg)

dumi 1.0 在 2020 年 3 月 2 日正式发布，到今天一共有 80+ 位 Contributor、提交 1100+ Commit、为近 4000 个开源项目提供了组件库/站点的文档方案；dumi 作为一个 GitHub 数亿开源项目中的渺小一粒，能有这么多人共同参与、能为这么多项目提供价值，无疑是十分幸运的。

与这份幸运一同到来的，还有许多体验问题的反馈、组件研发的思考、实际项目的场景，加上社区的底层技术栈也在飞速迭代，是时候给 dumi 做一次大升级了，所以我们在今年的 7 月 29 日正式启动了 dumi 2.0 的研发，而在今天，它终于与大家正式见面了！


## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
