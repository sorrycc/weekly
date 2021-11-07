# MDH 前端周刊第 27 期：Bun、coa、React Router 6、CSS in React

**这是 「MDH：前端周刊」 第 0027 期，发表于：2021/11/08。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01zLokPV27xIz06flj3_!!6000000007863-2-tps-1080-606.png)

封面图：国王排名。

## ❄️ TL;DR

👉 比 esbuild 快 3x 的 Bun<br />
👉 coa 和依赖绑定<br />
👉 React Router 6<br />
👉 狼叔评 Next.js<br />
👉 TypeScript 4.5 RC<br />
👉 How to React<br />
👉 Next.js Middleware<br />
👉 CSS in React<br />
👉 ICE 2<br />
👉 React Hooks 常见问题<br />
👉 现代 Web 开发困局<br />

## ⚡ 展开讲讲

### 比 esbuild 快 3x 的 Bun
https://discord.com/invite/W3KceTE2uy

![](https://img.alicdn.com/imgextra/i3/O1CN01jgIRHc1t28vhQyAaA_!!6000000005843-2-tps-2048-1004.png)

加入 Discord Group，回复「I want Bun」即可收到源码访问权。

```bash
$ curl -fsSL https://bun.sh/install | bash
$ bun --help
```

Bun 基于 Zig 实现，内含多个功能。1）作为 JavaScript/TypeScript/JSX 的 transpiler 2）JavaScript & CSS bundler 3）JavaScript Runtime Environment 4）package.json script runner。

他内置了阉割版 next.js 功能的脚手架，依赖变更需重新执行 `bun bun --use next`，通过 `bun` 命令启动。我试着添加 antd 依赖，但报错了；支持 bundle css 和 javascript，比如用 `bun bun ./src/index.jsx` 打包文件，速度极快；还可以用来做 task runner，比如 `bun run build`，npm、pnpm 等启动时间需要 170ms，bun 只需 6ms。

能明显感受到 task runner 启动快多了，已设置 `alias br="bun run"` 作为日常使用。
bun 提速 next.js 和 cra 的方式除了二进制 bin 快以为，还做了一件类似预编译依赖的事，通过 `bun bun` 会生成一份 `node_modules.bun` 文件，内容是依赖的打包产物。

### coa 和依赖绑定
https://mp.weixin.qq.com/s/KbmpzvoB1yJlNDEO1p_fJQ

![](https://img.alicdn.com/imgextra/i1/O1CN01jl8m4h1iSkA0JTDaK_!!6000000004412-2-tps-385-489.png)

周下载量 700w+ 的 npm 包 coa 昨晚（2021.11.4）让大片前端社区挂了，比如我们受影响的依赖链是 `老框架 > \@svgr/webpack > \@svgr/plugin-svgo > svgo@1.3.2 > coa`。应该是被黑客偷了发布权限，针对不同的 major 和 mirror 分别发布带问题的版本，其新增版本在 preinstall hook 里执行 `start /B node compile.js & node compile.js`。

### React Router 6
https://remix.run/blog/react-router-v6

摘要，

* Automatic layout handling with nested routes 🐣
* Route ranking，路由配置无需再关注顺序问题 📊
* 相对路径的 routing and links ⛓
* 基于 React hooks 全新重写 🎣
* minified + gzipped 后 4K 不到，比如 v5 小 50%+ 📉

### 狼叔评 Next.js
https://mp.weixin.qq.com/s/5Ir7EoHLo37bs6W5WNa-Tw

包含，

* next.js 是什么？有哪些优点？为啥狼叔觉得它看起来像一个海王？
* 对比 cra，umi 和 next.js，它们之间的差异是什么？
* next.js 生态除了vercel，还有 rust 和 blitzjs，你都了解吗？
* 实现一个框架有哪 4 方面的思考？
* 在服务端渲染领域，对比 next.js 和 ykfe/ssr，有何异同？

### TypeScript 4.5 RC
https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-rc/

自 4.5 Beta 后，最大的变更是延迟了 Node 12 ESM 的支持，目前可通过 `moduleResolution:nodenext` 和 `module:nodenext` 开启。

### How to React
https://kentcdodds.com/blog/how-to-react

怎么学 React 最合适？每个人都有不同的答案。

作者整理了学习 React 的路线，包含 JavaScript、React、npm、框架、状态管理和样式。正确的路线可以避免走弯路，避免学习不必要的方案，避免一下子太多东西摆在前面不知从何学起。

### Next.js Middleware
https://www.ctnicholas.dev/articles/how-to-use-nextjs-middleware

利用 Next.js 12 的 Middleware 和 Vercel Edge Function 可以做啥？作者给了一些例子，包括重定向、Rewriting、权限控制、访问统计、基于地理位置信息的访问过滤、基于当地时间的亮暗主题切换。

```javascript
// /pages/swede-feels/_middleware.js
import { NextResponse } from 'next/server';
	
export function middleware (request) {
  // request.geo.country is undefined in dev mode, 'US' as backup
  const country = request.geo.country || 'US';
	
  // If visited from Denmark
  if (country === 'DK') {
    return new Response(null, { status: 403 });
  }
}
```

### CSS in React
https://css-tricks.com/the-css-in-react-landscape/

![](https://img.alicdn.com/imgextra/i4/O1CN01dzTbpn1GL8KxhlF4k_!!6000000000605-2-tps-2284-1228.png)

作者对比了一些 React 社区的 CSS 方案，包括 styled-components、CSS Modules、Emotion、Stitches、vanilla-extract、JSS、Linaria、Styled JSX 和 Goober。

styled-components 最流行，但不是 Zero Runtime；emotion 和 styled-component 类似；css modules 最简单，还支持 sass；Linaria 是 Zero Runtime 的元老，支持 Critical CSS；vanilla-extract 虽然作者没说，但能感觉出是他最喜欢的，Zero Runtime、SSR Support、TypeScript 支持、Variants，还有基于 Sprinkles 的原子化 CSS 方案。

### ICE 2
https://zhuanlan.zhihu.com/p/429417769

ice 2 记得 2 个月前就发了，这篇是最近的发布文案，

* 支持 Vite，感觉除了拥有豪华阵容的 next.js，支持 Vite 已经是框架的标配了
* 支持 swc 代替 babel，支持 esbuild 代替 terser
* 最佳实践，包含状态管理、请求库、环境配置、微前端、SSR、SSG（新增）、PWA（新增）、keep-alive（新增）等
* 全新文档，基于 Docusaurus

### React Hooks 常见问题
https://blog.bitsrc.io/common-react-hooks-mistakes-every-developer-should-avoid-defd47d09d8c

摘要，

1. 大家可能都知道不要在分支、循环里调用 hooks，同时也不要在 hooks 调用前 return，比如 `if (!id) return; useEffect(() => {}); return <div />`
2. 没有 rerender 需求的不要用 useState，会导致不必要的 rerender，请改用 useRef，比如 `const counter = useRef(0); function clickHandler() { cmounter.current += 1 }`
3. 不要在一个 useEffect 里发请求，然后在另一个 useEffect 里处理回调
4. 多次修改 useState 时，用函数，比如 `setCount(count+1); setCount(count+1)` 应该改成 `setCount(count => count + 1); setCount(count => count + 1);`
5. 不要忘记给 useEffect 加依赖

### 现代 Web 开发困局
https://mp.weixin.qq.com/s?__biz=Mzg2ODQ1OTExOA==&mid=2247494459&idx=1&sn=6b134dbac8fa8de0542653458bd48a6c

![](https://img.alicdn.com/imgextra/i3/O1CN01JQbaBi1grobrN0E6U_!!6000000004196-2-tps-1080-684.png)

2021 年，Web 开发整体上仍然处于比较低效的状态，各种开发，部署工具仍未很好的收敛，开发者仍然要面对选择框架，选择各种库，选择部署方式，沟通前后端接口等，一个完整的 Web 应用开发会牵扯很多不同的工种，而不同分工之间的协作却是很低效的，本文旨在能够很好的梳理当下 Web 开发的 "困局"，以及我们通过何种方式，能够走出这些困局，解放生产力，希望能给未来的工具发展给出一定的预测和启发。

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
