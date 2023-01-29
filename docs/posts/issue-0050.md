---
title: "Terminal 指南、Umi 支持 Vite、CSS Toggle、延寿指南"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01y6nJcT1oD4OIDDm3k_!!6000000005190-0-tps-1920-1080.jpg"
titleImageCaption: "tetrakiss @ unsplash"
publishedAt: "2022/04/25"
---

本期主要内容有这些：

- Terminal 指南
- Umi 支持 Vite
- CSS Toggle
- Mitosis 入门
- 延寿指南
- Redux Toolkit
- 超越库和框架
- StoryBook 懒编译
- 高效能人士的 24 个习惯

## Terminal 指南
https://www.joshwcomeau.com/javascript/terminal-for-js-devs/

![](https://img.alicdn.com/imgextra/i1/O1CN01CHF7yG1mUM6ba2g70_!!6000000004957-0-tps-1372-894.jpg)

现代 Web 开发都需要 Terminal 技能，而要真正擅长 Terminal 则需要很长时间。但如果限定了使用场景，就有捷径可以快速学会，因为 98% 的 Terminal 知识对于使用 React、Angular、Vue 等框架工具并不需要。

软件其实不重要，作者推荐了 Hyper 和 VSCode 内置的 Terminal 工具。

导航要学会 pwd + ls + cd + ~ + .. + .，还要会用 Tab 自动完成；命令可以理解为函数，Flag 可以理解为参数；结束命令可通过 ⌃+C 中断或 ⌃+D 结束 Session 或 ⌘+W 直接关闭窗口。

常用命令包括 npm install 安装依赖；npm run 执行脚本、code . 用 VSCode 打开项目；rm -rf node_modules 再 npm install 重装依赖；以及 git 的常见命令。

最后还有一些技巧。cd - 回到上一次的目录；⌘+K 清空 Terminal；定义别名；open . 在 Finder 中打开当前目录；学会用 && 链式调用；用 ⌘+D 或 ⌘+⇧+D 拆分窗口，用 ⌘+T 新开 Tab，推荐一个 Tab 一个项目。

## Umi 支持 Vue
https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.13

![](https://img.alicdn.com/imgextra/i2/O1CN01Xx3pbs1CYBFQ5eLsD_!!6000000000092-0-tps-1623-1080.jpg)

Umi 在 4.0.0-rc.13 中提供了 Vue 支持，记得我在 Umi 2 时画过一张架构图，其中就有 Vue 的一环，Umi 3 时也有过尝试，但那会 Vue 3 还不太成熟，接入时遇到一些坑，这个坑今天总算是补上了。

尝鲜指南如下。

```bash
$ pnpm i umi@next @umijs/preset-vue -D
$ vi .umirc.ts
export default { presets: ['@umijs/preset-vue'] };
$ mkdir pages
$ vi pages/index.vue
<template><h1>umi ♥︎  vue</h1></template>
$ npx umi dev
```

## CSS Toggle
https://toggles.oddbird.net/

Chromium 已开始[着手实现](https://groups.google.com/a/chromium.org/g/blink-dev/c/06dTetmFjEU/m/NdkJtoVYHAAJ) [CSS Toggle](https://tabatkins.github.io/css-toggle/) 的原型，我们提前了解下他是啥，可以做什么。

CSS Toggle 的原理是，1）在 HTML 层中增加了状态，2）基于状态可以自定义样式，3）HTML 元素（不限于 button、input 等表单元素）可触发状态变更。CSS Toggle 场景比如用于显示隐藏切换、Tab 切换、Tree 的显示隐藏、轮播、对话框、Popup、全局颜色切换等。

```html
<style>
html { toggle-root: mode [auto light dark]; }
html:toggle(mode light) { ... }
html:toggle(mode dark) { ... }
button { toggle-trigger: mode; }
</style>
<button>TOGGLE ME</button>
```

目前还没有浏览器实现，想试试的同学可以先通过 JS 补丁（[https://github.com/oddbird/css-toggles](https://github.com/oddbird/css-toggles)）尝鲜。

## Mitosis 入门
https://www.builder.io/blog/mitosis-a-quick-guide

![](https://img.alicdn.com/imgextra/i2/O1CN010euJmI24th6NocARb_!!6000000007449-0-tps-1920-1080.jpg)

Mitosis 读作 [maɪˈtoʊsɪs]，是编译时框架，允许我们用 JSX 写组件，然后编译到原生 JavaScript、Angular、React、Vue 及其他。由于使用的是 JSX 的子集（类似 [Solid JS](https://www.solidjs.com/)），所以可被解析成 JSON 格式，这样会比较容易被序列化成各种框架的不同实现。

Mitosis 解的问题写一遍组件，然后可以应用到不同的框架。这听起来和 Stencil 有点像，但 Stencil 的产物是 Web Components，而 Mitosis 的产物是符合各框架要求的 JavaScript 代码。和 Mitosis 类似的编译时框架还有 Svelte 和 SolidJS，SolidJS 也可以编译成 JSON，而 Mitosis 的优点是可以产出符合任意框架的代码。

作者来自 Builder.io，所以 Mitosis 其实也是他们 No Code 产品的一部分。（编者注：如果要实现 Low/No Code 平台，这也是个不错的选择，只要产出符合 Mitosis 要求的 JSON 结构，就可以有不同框架的产物）

## 延寿指南
https://github.com/geekan/HowToLiveLonger

有个术语叫 ACM（All-Cause Mortality），作者通过对学术文献的参考，整理了延长寿命的建议，直接看结论。

1、输入类。吃白肉（鸡鸭鹅鱼虾蟹贝）和果蔬为主，多吃辣，多吃坚果，少吃蛋黄，适量碳水，多吃植物蛋白；喝咖啡、牛奶、茶，少喝或不喝甜味饮料，少喝酒；不吸烟（少 11-12 年寿命）；多晒太阳。

2、输出类。多挥拍运动（每周 3 次 45 分钟），刷牙，泡澡或每天热水澡，睡眠保持在 7 小时（早睡 +43% ACM，睡眠时间长反而不好）。

3、减肥。

## Redux Toolkit
https://redux.js.org/introduction/why-rtk-is-redux-today

这周发布的 Redux 4.2 Deprecate 了 createStore 方法，推荐使用 Redux Toolkit（RTK） 来代替 Redux 的使用场景。在周下载量 7 百万的基础库里这么做感觉很不好，尤其是一些依赖 Redux 封装的库或者只希望使用 Redux 的简单场景，也会收到提醒，就很奇怪了。

RTK 在 Redux 的基础上提供了很多 Util 方法，包括设置 Store、创建 Reducer、immutable 更新、创建 state 切片等。

RTK 可以减少很多脚手架代码，比如创建 TODO。

```ts
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
```

## 超越库和框架
https://nilsnh.no/2022/04/09/innovating-beyond-libraries-and-frameworks/

先看定义。框架：别人（框架）调用你的代码，然后你的代码需要符合框架的约束。优点是效率高，缺点是遇到边界时，很难绕过；库：你调用别人的代码。通过组合的方式使用一个或多个库，复用别人的代码解决问题，相比使用框架会更灵活；模式：即设计模式，一种描述性、可重用的代码编写方法，比如 MVC、单例、观察者等；[原则](https://www.brandons.me/blog/libraries-not-frameworks)：一些帮助你写好代码的指导原则和理念，比如 DRY、SOLID、KISS、GRASP 等。

作者的观点是「原则 > 模式 > 库 > 框架」。

越往后，不确定性越大，库和框架变更和废弃的几率大，尤其是框架，框架要么废弃、要么做烂、要么重要更新，就可能让你之前习得的经验毫无用处；框架和库还考虑更新，如果不更新，可能遭遇漏洞攻击，如何无脑更新，又可能遭遇供应链攻击；框架会引入额外的概念，这些概念不具备可转移性。

要超越库和框架，作者觉得需要一本模式和原则的手册。投入时间建造模式与规则，不那么依赖库和框架，减少对于维护者的依赖，可以让程序更长久。

## StoryBook 懒编译
https://storybook.js.org/blog/storybook-lazy-compilation-for-webpack/

![](https://img.alicdn.com/imgextra/i4/O1CN01MU2zVa1qEYubxxJJM_!!6000000005464-1-tps-960-540.gif)

Storybook 6.5 在开发模式下引入 Webpack 5 的 Lazy Compilation（懒编译）功能，启动快 3X，热更快 2X。

编者注：懒编译目前应该还在 beta，之前有尝试，能跑但还有些 BUG；Umi 2 里其实就加过基于路由的懒编译，优点是能提速，缺点是跳转页面时需要等待，所以这功能我会有点存疑，这还涉及到人性，有人会更期望一开始等久一点，以换取后续的流畅性。

## 高效能人士的 24 个习惯
https://blog.superhuman.com/24-habits-for-productivity/

笔记如下。

早上，

1、不做不重要的决定，比如吃什么、穿什么，和上周一样就好
2、做计划
3、确定优先级，参考艾森豪威尔矩阵
4、委托或寻求帮助
5、Eat the frog，先做最大最恶心或最可怕的任务
6、只在指定的一两个时间内检查邮件，邮件和通讯软件一样，无可避免但又会让人低效
7、着手去做，比如写作不要等灵感

一天，

8、不要多任务并行
9、减少分心，远离手机，开启专注模式，使用类 [Freedom](https://apps.apple.com/us/app/freedom-block-distractions/id1269788228) 的 App 来阻断社交媒体
10、制定分心清单，用于保存工作时突然冒出来的想法
11、高效沟通，学会提问，减少 round-trip
12、适当休息，累了遇到问题了离开工作休息 10 分钟再回来
13、使用高效的 App 和工具
14、尽可能自动化
15、学会说不

长期，

16、找到舒适的环境，喜好不同，比如安静、白噪音或带音乐的环境，咖啡厅、厨房桌子或沙发
17、管理精力而不仅是时间
18、设定目标并迈出一小步
19、磨刀不误砍柴工
20、深度工作，心流状态下工作不费力
21、遵循 80/20 法则，80% 的结果来自 20% 的努力，找出那 20% 很重要
22、身体健康
23、正视失败与挫折
24、实践 WLB，通过休息给自己充电

## 发布

以下是上周社区的重要发布。

- [Umi 发布 RC.13](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.13)，支持 Vue 等 10 多项更新
- [Node 发布 18](https://nodejs.org/en/blog/release/v18.0.0/)，内置 fetch、node:test 等标准模块
- [Nuxt 3 发布 RC](https://nuxtjs.org/announcements/nuxt3-rc)
- [Parcel 发布 2.5.0](https://github.com/parcel-bundler/parcel/releases/tag/v2.5.0)，支持 Web Extension manifest v3、支持 __dirname 和 __filename、支持对 process.env 使用 in 表达式
- [Ember 发布 4.3](https://blog.emberjs.com/ember-released-4-3/)
- [WASM Core 2.0 上 W3C 草案](https://www.w3.org/TR/wasm-core-2/)
- [proxy-memoize 发布 1.0.0](https://github.com/dai-shi/proxy-memoize/blob/main/CHANGELOG.md#100---2022-04-13)
- [Valtio](https://github.com/pmndrs/valtio/releases/tag/v1.6.0) 发布 1.6.0
- [zustand 发布 4.0.0-rc.0](https://github.com/pmndrs/zustand/releases/tag/v4.0.0-rc.0)
- [react-query 发布 3.35.0](https://github.com/tannerlinsley/react-query/releases/tag/v3.35.0)
- [redux 发布 4.2.0](https://github.com/reduxjs/redux/releases/tag/v4.2.0)，deprecate createStore，推荐 RTK，其实感觉这种强行推广的做法不太好
- [ktor 发布 2](https://blog.jetbrains.com/ktor/2022/04/11/ktor-2-0-released/)，Kotlin 开发基础三剑客之一
