---
title: "React 18 Alpha、Vue 3.1"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01Rjp1r023WxhwQhBTI_!!6000000007264-0-tps-1920-1278.jpg"
titleImageCaption: "Marek Okon @ unsplash"
publishedAt: "2021/06/14"
---

## ⬆️ 发布

### 1. The Plan for React 18
https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html<br />
https://zhuanlan.zhihu.com/p/379072979<br />
https://swizec.com/blog/trying-out-react-18-alpha/<br />
https://dev.to/cassidoo/react-18-alpha-is-out-now-what-2apj<br />
https://github.com/reactwg/react-18/discussions/9<br />
https://github.com/reactwg/react-18/discussions/37<br />
https://github.com/reactwg/react-18/discussions/21<br />
https://github.com/reactwg/react-18/discussions/41<br />
https://github.com/reactwg/react-18/discussions/46<br />
https://github.com/reactwg/react-18<br />
https://mp.weixin.qq.com/s?__biz=MzkzMjIxNTcyMA==&mid=2247486504&idx=1&sn=c5730b20edef8b7af37902247697be93

React 团队写了一篇文章，概述了即将到来的 React 18 Roadmap 上令人兴奋的事情：

* 普通 React 用户不需要关心，修改点主要针对库作者
* Alpha 版已可用，但不要用于生产环境
* 全新的 Suspense-based 服务端渲染架构
* 自动批处理以减少不必要的渲染
* Transitions API 让应用在大更新期间也能保持响应
* React 18 Working Group

### 2. Vue v3.1.0 Pluto
https://github.com/vuejs/vue-next/releases/tag/v3.1.0

### 3. Vueuse v5.0.0
https://github.com/vueuse/vueuse/releases/tag/v5.0.0

### 4. RTK Query v1.6.0
https://github.com/reduxjs/redux-toolkit/releases/tag/v1.6.0

改动点，

* 添加数据查询接口
* createAsyncThunk 添加数个新的参数
* 升级依赖 Redux 4.1 和 Immer 9
* 重写 build 工具链

### 5. VSCode May 2021 (version 1.57)
https://code.visualstudio.com/updates/v1_57<br />
https://code.visualstudio.com/blogs/2021/06/10/remote-repositories<br />
https://marketplace.visualstudio.com/items?itemName=github.remotehub

最动心的改动是 **Remote Repositories**，可在不 clone 仓库的状态下浏览和编辑代码，vscode 还专门为此写了篇文章。

![](https://img.alicdn.com/imgextra/i2/O1CN01Swkikw1HcMpAsK1TM_!!6000000000778-2-tps-922-233.png)


## 📝 文章

### 1. Simplify React state management with Hookstate
https://blog.logrocket.com/simplify-react-state-management-with-hookstate/

We’ve learned how to use Hookstate for state management in React applications. We’ve also seen why Hookstate is not just another state management solution, but a tool that takes the idea of simplifying state management in React apps to a whole new level.

### 2. Journey of Improving React App Performance by 10x
https://medium.com/technogise/journey-of-improving-react-app-performance-by-10x-9195d4b483d4

![](https://img.alicdn.com/imgextra/i1/O1CN01NGHyTt1SxrBBdudcy_!!6000000002314-2-tps-1600-729.png)

To improve the performance of your React app,

* Avoid inline functions as much as possible. If your application is small, it will not affect you much but once you develop more and more features, this will bite you for sure.
* Remember that Immutability is the key to avoid unnecessary re-renders.
* Always render hidden components like Modals and Dropdowns conditionally. These components are not visible until triggered, but are affecting your application’s overall performance.
* Always call multiple APIs parallelly. Sequential calls affect load time.

### 3. 【手写简易浏览器】html parser 篇
https://mp.weixin.qq.com/s/ku6yNZqIKH9wBSGbUdhW0A

### 4. Introducing Astro: Ship Less JavaScript
https://astro.build/blog/introducing-astro

This new approach to web architecture is called islands architecture. We didn't coin the term, but Astro may have perfected the technique. We are confident that an HTML-first, JavaScript-only-as-needed approach is the best solution for the majority of content-based websites.

### 5. TuanNguyen2504/javascript-tips
https://github.com/TuanNguyen2504/javascript-tips

JavaScript Tips & Tricks.

### 6. Why I studied full-time for 8 months for a Google interview
https://www.freecodecamp.org/news/why-i-studied-full-time-for-8-months-for-a-google-interview-cc662ce9bb13/

It’s true. I’ve spent thousands of hours reading books, writing code, and watching computer science lectures, all to prepare for the Google software engineer interview.

## 🪓 代码

### 1. gooey-react
https://github.com/luukdv/gooey-react

![](https://img.alicdn.com/imgextra/i4/O1CN01nvTVe924GlJT35ezh_!!6000000007364-1-tps-260-260.gif)

The gooey effect for React, used for shape blobbing / metaballs (0.5 KB).

### 2. avkonst/hookstate
https://github.com/avkonst/hookstate

The simple but very powerful and incredibly fast state management for React that is based on hooks.

### 3. GoogleChromeLabs/squoosh
https://github.com/GoogleChromeLabs/squoosh<br />
https://squoosh.app/

Make images smaller using best-in-class codecs, right in the browser.

### 4. antfu/esbuild-node-loader
https://github.com/antfu/esbuild-node-loader

Transpile TypeScript to ESM with Node.js loader.

### 5. storybookjs/addon-measure
https://github.com/storybookjs/addon-measure

![](https://img.alicdn.com/imgextra/i2/O1CN01rEppCQ1x7sJmji0iW_!!6000000006397-1-tps-800-600.gif)

Storybook addon for inspecting layouts and visualizing the box model.

### 6. jwasham/coding-interview-university
https://github.com/jwasham/coding-interview-university

A complete computer science study plan to become a software engineer.

### 7. transitive-bullshit/nextjs-notion-starter-kit
https://github.com/transitive-bullshit/nextjs-notion-starter-kit

Deploy your own Notion-powered website in minutes with Next.js and Vercel.


## 🎁 代码之外

### 1. 思考的刻意练习
https://mp.weixin.qq.com/s?__biz=MzAxNDE0MjA2OQ==&mid=2650422756&idx=1&sn=ea7c90305123a0e0fac76678ef1ffd2c

### 2. 自制我把自行车做成了自动驾驶，硬核！
https://www.bilibili.com/video/BV1fV411x72a/<br />
https://github.com/peng-zhihui/XUAN-Bike<br />

![](https://img.alicdn.com/imgextra/i3/O1CN01DOpaeH27O2S2ytFgo_!!6000000007786-2-tps-1456-793.png)

推荐人：海康-8年-xx

