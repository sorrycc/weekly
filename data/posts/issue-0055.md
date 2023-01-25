---
title: "Mini Next.js、react-query 源码解析、Master Styles、Next.js Layouts"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01jI0wBM1qQTD7GWlRE_!!6000000005490-0-tps-1920-1080.jpg"
titleImageCaption: "modeze @ unsplash"
publishedAt: "2022/05/30"
---

本周有这些内容想和你分享：

- Mini Next.js
- react-query 源码解析
- Master Styles
- Next.js Layouts
- React Router 6.4 Pre

## Mini Next.js
https://hire.jonasgalvez.com.br/2022/may/18/building-a-mini-next-js/

作者也是 fastify-vite 的作者，介绍了如何手写 mini 版 Next.js，实现约定式路由、SSR、getServerSideProps，基于 Vite 和 Fastify。

约定式路由的实现是先利用 `import.meta.globEager('/pages/**/*.jsx')` 拿到所有路由，然后做一些 sort 和 map 支持动态路由和删除 index，并且绑定 getServerSideProps 到路由对象中，然后有 getServerSideProps 的路由会增加一个 `/json` 后缀的同名后端路由。

路由基于 react-router。SSR 时用 StaticRouter，CSR 时用 BrowserRouter。SSR 时会带上 getServerSideProps 的数据一起回来，交给客户端注水；CSR 时初次加载会直接用 SSR 给的数据，然后在路由跳转时加 `/json` 后缀接口请求服务端拿 getServerSideProps 的数据。

作者还实现了 fetchWithSuspense。作为 Vue 的忠实用户，作者觉得 Suspense 场景下需要通过 throw Promise 来阻断 Component 渲染非常反人类。

编者注：这是个很好的 SSR 入门文章，推荐深入阅读和理解。但也有一些明显的缺陷，如果要用于生产环境时是需要注意的。1）不支持嵌套路由，Server 不支持，Client 也不支持，因为每次 Page 渲染时会清空 window.hydration，2）客户端数据加载的时机偏后，在路由组件里处理，意味着需要先加载组件代码才会加载数据，这是典型的 Fetch on Render 瀑布流，3）getServerSideProps 没有从客户端代码中剔除，意味着如果有一些 node 侧依赖，也会打包进去，不仅尺寸大，还可能导致打包失败。

## react-query 源码解析
https://alexkondov.com/reading-source-code-react-query/

![](https://img.alicdn.com/imgextra/i4/O1CN01kXHay41zmId5nPlmP_!!6000000006756-0-tps-1547-1080.jpg)

这篇文章的作者也是 Tao of React 的作者。巧的是，这周我也在翻 react-query 的源码。但是印象更深的是源码之外的，如上图，「写个流行库，然后卖个课，Wow！80000x119x6.7378=64143856」。

React Query 和 SWR 给人感觉完全不同。React Query 像 Google Docs，给人一种厚重的感觉，功能全而稳，用起来非常放心，但偶尔会有些繁琐；SWR 给人的感觉是非常前卫，API 设计也很优雅，而且轻，这在特定领域下非常好用，但会有边界和场景的限制。

React Query 的源码组织上把 core 和 react 拆开。core 部分是框架无关的，理论上课支持除 react 之外的其他框架；react 部分很轻，包含大量 hooks，通过 hook 这个桥梁把 react 和 core 串起来。

```
├── src
|   ├── react
|   ├── core
|   ├── ...
|   ├── index.ts
```

其他点都比较细，感兴趣可以直接翻文章。包含入口 Hook 使用重载支持各种参数类型、把 Options 当 Context 用减少参数传递复杂度、使用观察者模式监听和管理所有查询、类 redux 的 dispatch 和 reducer 模式等。

## Master Styles
https://styles.master.co/

![](https://img.alicdn.com/imgextra/i4/O1CN01p9qBqR1paiSGDvIhn_!!6000000005377-0-tps-2212-1080.jpg)

首页做地很精美！也是吃自己的狗粮，用 Master Styles 实现的。

Master Styles 提供了另一种写样式的方法。这和 tailwind 有点像，都是在 html 中通过 util 形式组装样式。但这些 util 浏览器是不认的，所以需要一个编译的过程。现有方案中，tailwindcss、windicss、unocss 等都是编译时处理，而 Master Styles 是运行时通过 MutationObserver 监听 html 的变化处理。

原理是，`MutationObserver` > `querySelectorAll('[class]')` 收集样式 > 添加汇总后的内联样式到 `<head>` 中。

这是个大胆的想法，这个网站也是基于此方案搭建。但个人不推荐使用，建议观望，原因是，1）性能，放在运行时做肯定有性能损耗，尤其是项目大了之后，之前就有具体项目用到过，2）扩展性，比如不支持 SSR，要支持 SSR 还是得回归到编译时，那和 tailwindcss 等方案就没啥区别了。

用法如下。

```
// 第一步：页头引入需要的样式和 JS 引用
<link href="https://unpkg.com/@master/normal.css" rel="stylesheet">
<script src="https://unpkg.com/@master/style"></script>
<script src="https://unpkg.com/@master/styles"></script>

// 第二步：在 HTML 元素中按规则写样式
<h1 class="font:40 font:heavy font:italic m:50 text:center">Hello World</h1>
```

## Next.js Layouts
https://nextjs.org/blog/layouts-rfc

![](https://img.alicdn.com/imgextra/i4/O1CN01RaAvWh1UpH74YWVTL_!!6000000002566-0-tps-2802-1080.jpg)

Next.js 终于要支持 Layout 或者说是嵌套路由了，同时还做了相关的渲染优化，但感觉没啥新东西，该做的 Remix 都已经做过一遍了。

## React Router 6.4 Pre
https://github.com/remix-run/react-router/releases/tag/v6.4.0-pre.2

React Router 这个版本引入了一套 Data API，和 react-query、swr 是竞品，但是是不同维护的实现，基于路由。这一套方案是从 Remix 框架中挪过来的纯 Client 实现。

Data Loading 是在路由上新增 loader 配置，然后通过 useLoaderData hook 在组件内使用。

```jsx
// 第一步：定义 loader
<Route loader={() => fetch(API).then(res => res.json)} />

// 第二步：使用 loader 数据
import { useLoaderData } from 'react-router-dom';
const data = useLoaderData();
```

Data Mutation 是在路由上新增 action 配置，通过提供封装过的 Form 组件代理表单提交的请求处理。

```jsx
// 第一步：定义 action
<Route action={({ request }) => {}} />

// 第二步：通过 Form 使用表单
import { Form } from 'react-router-dom';
<Form><button type="submit">GO</button></Form>
```
