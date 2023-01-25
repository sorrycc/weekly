---
title: "React Conf、TailwindCSS 3、Turborepo、ahooks 3"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01lPGkvm1p6wd45vEGn_!!6000000005312-0-tps-1920-1282.jpg"
titleImageCaption: "anniespratt @ unsplash"
publishedAt: "2021/12/13"
---

## ❄️ TL;DR

👉 React Conf<br />
👉 TailwindCSS 3<br />
👉 Peeky<br />
👉 Turborepo<br />
👉 React 支持 Web Components<br />
👉 Sandpack Theme Builder<br />
👉 Remix vs. RSC<br />
👉 ahooks 3<br />
👉 happydom<br />

## ⚡ 展开讲讲

### React Conf

[https://www.youtube.com/watch?v=FZ0cG47msEk&list=PLNG\_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa](https://www.youtube.com/watch?v=FZ0cG47msEk&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa)

时间少的推荐看《Keynote》和《React without memo》。其中 React Forget 印象比较深，通过编译时解决问题的典范，可以让开发者不用写 useMemo、useCallback 和 React.memo。

我看了几个做了一些笔记，供参考，感兴趣的关注公众号并回复「react conf 2021」。

### TailwindCSS 3

[https://tailwindcss.com/blog/tailwindcss-v3](https://tailwindcss.com/blog/tailwindcss-v3)

![](https://img.alicdn.com/imgextra/i2/O1CN012PchKI1ugjjqt5bAr_!!6000000006067-0-tps-1600-515.jpg)

摘要，

* 默认使用 JIT 引擎，10ms 内完成增量编译
* 支持全部 color 值，因为换 JIT 后不再有尺寸的问题
* 支持 box shadow color，比如 shadow-blue-500/50
* 支持 column 布局，类似报纸的排版
* 支持配置 Native 表单元素的样式，比如 <input type="file" />
* 支持 print 修饰器，比如在打印时显示或隐藏一些元素
* 支持 aspect-ratio 属性，用于设置元素的横宽比，比如视频的
* 支持下划线样式，比如 underline decoration-indigo-500
* 支持 ltr 和 rtl 修饰器
* 支持 portrait 和 landscape 修饰器
* 提供 Play CDN，通过 script 引入即可使用，无需 build，dev only

### Peeky

[https://peeky.dev/](https://peeky.dev/)

![](https://img.alicdn.com/imgextra/i4/O1CN019armMT1XP7LEEq0tV_!!6000000002915-0-tps-921-573.jpg)

摘要，

* 提供另一种跑 test 的方式
* 不仅有命令行，还提供 GUI 界面的交互方式
* 基于 Vite 生成 Module Graph，所以能实时 reload 测试用例

此外，这周还有看到 vitest，感觉也是相同的思路。

### Vercel 收购 Turborepo

[https://vercel.com/blog/vercel-acquires-turborepo](https://vercel.com/blog/vercel-acquires-turborepo)

![](https://img.alicdn.com/imgextra/i2/O1CN01iJQuqh1Gt1jp9vxr0_!!6000000000679-0-tps-1600-534.jpg)

收购后 Turborepo 开源了，借这个机会仔细看了下，做一些摘要，

* 基于 go 实现
* 作者 Jared Palmer，同时是 Formik 和 TSDX 的作者
* 解 monorepo 构建慢的问题，由于把多个仓库放在一起，在带来便利的同时，成本也随之增加，其中比较显著的是构建速度问题
* 支持增量编译、Content Hashing、任务的并行和依赖等
* 最亮的功能是 Remote Caching，用于切换单人模式到多人模式，结合 Vercel 或其他自定义服务可上传本地 Cache 到服务器，然后用于团队其他同学或 CI/CD 环节，目前 Beta 中，我跑了遍没跑通

### React 支持 Web Components

[https://codesandbox.io/s/shy-tdd-8b4tq?file=/src/App.js](https://codesandbox.io/s/shy-tdd-8b4tq?file=/src/App.js)

3 年的 RFC 终于实现了，虽然我对 Web Components 的场景比较存疑，RFC 详见 [https://github.com/facebook/react/issues/11347](https://github.com/facebook/react/issues/11347)

### Sandpack Theme Builder

[https://sandpack.codesandbox.io/theme](https://sandpack.codesandbox.io/theme)

![](https://img.alicdn.com/imgextra/i3/O1CN01JeK1nS1pbAqiG48t1_!!6000000005378-0-tps-1600-738.jpg)

支持通过 GUI 的方式配置 sandbox 的色盘，可以导出使用。

### Remix vs. RSC

[https://remix.run/blog/react-server-components](https://remix.run/blog/react-server-components)

![](https://img.alicdn.com/imgextra/i4/O1CN010BDcrm1sPDM3TNM82_!!6000000005758-0-tps-1600-709.jpg)

摘要，

* 通过网络请求 Tab 可以大致看出页面性能如何，如果请求很乱，页面渲染通常也很乱

作者先介绍了三种请求模式，

* **Render-Fetch 瀑布流**。通常流程是 Load modules → render (spinner) → fetch → render children (more spinners) → fetch in children → etc，之所以说瀑布流，因为 children 的 load 和 render 也会走相同流程；fetch 只要在 useEffect 里就会走这套，比如 useSWR、Apollo Client 和 react-query 都是
* **Fetch, Then Render**。先获取所有数据，然后做页面的整体渲染，这是 Web 的原始形态，这是 Remix 的默认方式
* **Render As You Fetch**。在 Fetch, Then Render 的基础上，不等所有数据返回即开始渲染，哪个好了渲染哪个

RSC（React Server Component）是 Render-Fetch，通过 DEMO 对比可以看出，初始页面加载速度上，Remix 相比 RSC 快 100%，相比开启了 SSR Streaming 的 Next.js + RSC 也快 100% 多。

首次加载后，用户点击页面交互时，Remix 相比 RSC 快 73%，其中一个原因是 RSC 会下载 34 倍以上的 JavaScript。所以 RSC 的 Zero Bundle 是首次加载时少，后续交互时则需要按需下载不少。RSC 因为每次都需要返回重复的 JSX 模板，而不仅仅是数据。Zero-Bundle for JavaScript，Infinite Bundle for subsequent。

### ahooks 3

[https://zhuanlan.zhihu.com/p/442434871](https://zhuanlan.zhihu.com/p/442434871)

![](https://img.alicdn.com/imgextra/i3/O1CN01943VH41aAPT86plfX_!!6000000003289-0-tps-327-125.jpg)

摘要，

* 全面支持 SSR
* 全新的 useRequest
* 所有的输出函数引用是固定的，避免闭包问题
* DOM 类 Hooks 支持 target 动态变化
* …

### happydom

[https://github.com/capricorn86/happy-dom](https://github.com/capricorn86/happy-dom)

A jsdom alternative with support for server side rendering of web components.
