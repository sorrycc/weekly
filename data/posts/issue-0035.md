---
title: "SEE Conf、手写 Valtio、Turborepo、Chrome 97"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01m0K3nl1Pqa5hMQ5O4_!!6000000001892-0-tps-2400-1600.jpg"
titleImageCaption: "我在 SEE Conf 的分享"
publishedAt: "2022/01/10"
---


## ❄️ TL;DR

👉 SEE Conf<br />
👉 Monorepo 工具集<br />
👉 手写 Valtio 的 React 部分<br />
👉 2022 首个大趋势：TurboRepo<br />
👉 pnpm 6.25<br />
👉 Chrome 97<br />
👉 nx vs. turborepo<br />
👉 2021 JavaScript Rising Stars<br />
👉 从实现原理看低代码<br />
👉 pnpm 2021<br />


## ⚡ 展开讲讲

### SEE Conf

[https://seeconf.antfin.com/](https://seeconf.antfin.com/)

![](https://img.alicdn.com/imgextra/i1/O1CN01TUcOKM1Gvm2Pd36CU_!!6000000000685-2-tps-1600-802.png)

今年第一场前端技术大会，由于疫情的原因，只能线上，有点遗憾。偌大的报告厅里空荡荡的，孙教授说，这是他第一次对着这么空的场子做分享，🤣。

这也是我第一次对着镜头分享，看不到观众反馈的感觉有点奇妙，只能脑补大家的热情。

### Monorepo 工具集

[https://turborepo.org/docs/guides/complimentary-tools](https://turborepo.org/docs/guides/complimentary-tools)

包含 turporepo 推荐的 monorepo 工具集，在此可以找到每个子领域的推荐方案和备选方案。多看别人的依赖推荐开阔下思路，还可以避免自己造低级轮子。

比如用 changesets 做版本和 changelog 管理，用 husky + lint-staged 管理 linting，用 cypress + github action + playwright 做测试，用 mrm、codemod 和 jscodeshift 做 codemod，用 plop 做 codegen，用 pulumi 做 Infrastructure as Code，用 yalc 替换 npm link，用 verdaccio 当私有 npm registry。

### 手写 Valtio 的 React 部分

[https://blog.axlight.com/posts/how-valtio-proxy-state-works-react-part/](https://blog.axlight.com/posts/how-valtio-proxy-state-works-react-part/)

Valtio 教你手写 Valtio 的第二篇，关于 React。

由于 Valtio 是 external store 方案，所以关联 store 和 react 用 react 18 提供的 useSyncExternalStore 会方便很多，useSyncExternalStore(subscribe, snapshot) 即可，可以封装一个 hooks 以方便使用，注意别忘了加上 useCallback。

有个要考虑的点是 automatic render optimization。比如 obj = { count: 0, text: 'hello' }，而组件 A 只依赖 obj.text，此时 obj.count++ 了，最理想的情况下组件 A 是不应该触发 rerender 的。基础解法是在 proxy 的 getter 里记录访问过的属性，从而知道是否应该触发 rerender。Valtio 这部分的实现在 [proxy-compare](https://github.com/dai-shi/proxy-compare) 里。

```javascript
const obj = new Proxy(originObj, {
  get: (target, property) => {
    accessedProperties.push(property);
    return target[property];
  },
});
```

以上是基础实现，进阶的点比如要考虑嵌套对象的访问。还有一些限制，比如不能记录检测 Map 的更新，不能检测 Object.keys 的访问等。

Valtio 对此还有个 useSnapshot 的上层封装，包含 useSyncExternalStore 和 proxy-compare。用 proxy 定义数据，用 useSnapshot 访问和修改数据，这就是 Valtio 对外提供的极简 API。

```javascript
import { proxy, useSnapshot } from 'valtio';
// 定义数据
const state = proxy({ nested: { count: 0, text: 'hello' }, others: \[\] });
const TextComponent = () => {
  // 使用数据
  const snap = useSnapshot(state);
  return <span>{snap.nested.text}</span>;
};
```

### 2022 首个大趋势：TurboRepo

[https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj](https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj)

作者在文中详细介绍了 TruboRepo 的 WHY、What 和 HOW，还有 FUTURE。

TurboRepo 解的是 Monorepo 慢的问题，这是大家关心的点，但除了之外，更多是可以用作 monorepo 的工具集，包含任务的并行、串行和依赖，Profiling 等。另外还有个突出的功能是 Remote Caching，利用 Vercel 提供的服务，只要 turbo login + turbo link 即可享受远程提速功能，不能更简单了。

TurboRepo 提速的基本思路是利用缓存，让做过的事不做第二遍。并且他会计算 package 之间的依赖关系，生成依赖图谱，自动做任务的并行和串行，让任务更快完成执行，package 越多效果越好。

TurboRepo 74% 的代码基于 Go 实现，这也说明「用 JS 写 JS 工具」的时代已经过去，为了更好的性能，大家更愿意选择高门槛的其他语言。

### pnpm 6.25

[https://github.com/pnpm/pnpm/releases/tag/v6.25.0](https://github.com/pnpm/pnpm/releases/tag/v6.25.0)

支持配置 node-linker，可选 isolated、hoisted 和 pnp。isolated 是 pnpm 现有方式，hoisted 是 npm & yarn 那种拍平的目录结构，pnp 是 yarn 2 的 pnp 结构。

之所以支持其他类型，从 issue 中可以看到是因为针对一些特殊场景，比如 expo 和 react-native，isolated 形式通过 link 方式链接库的方式并不适用。

此外有趣的是，yarn 3.1 也支持了 pnpm 的 linker 方式。

### Chrome 97

[https://developer.chrome.com/zh/blog/new-in-devtools-97/](https://developer.chrome.com/zh/blog/new-in-devtools-97/)

![](https://img.alicdn.com/imgextra/i4/O1CN01f39i3m1sEDm63f5Y0_!!6000000005734-2-tps-1600-1081.png)

Chrome 97 有两个值得关注的更新。

一是 WebTransport，基于 HTTP/3 支持双向通信的 API，支持基于 datagram API 的不可靠通信和基于 streams API 的可靠通信，应用场景比如游戏、流媒体、视频会议、服务端消息推送等低延迟场景。

二是 Record 面板的更新，包含 Record、Replay 和 Measure 三大功能，更好用了，此外还能导出 puppeteer 脚本。想到的一个场景是用户遇到问题时可以引导他通过这个功能导出 puppeteer 脚本给开发者 replay，会非常有价值。

### nx vs. turborepo

[https://nx.dev/guides/turbo-and-nx](https://nx.dev/guides/turbo-and-nx)

![](https://img.alicdn.com/imgextra/i4/O1CN01x6dz5J1FhHtfp4uAH_!!6000000000518-1-tps-1920-1080.gif)

作者从性能、技术、性能和社区等方面进行了对比，抛开对比结果，也可以从中了解到一个 monorepo 工具所涉及的方方面面。同时这篇从 nx 角度做的对比，可以辩证地看。

nx 和 yarn workspace 是互补的关系，可以一起用；而 turborepo 目前是 nx 的子集，并且从 nx 里「学习」了不少功能，没有一起用的意义。turborepo 目前还是个小项目，仅 5K 行代码，很多 nx 支持的功能 turborepo 并不支持。nx 还有配套的 nx cloud，可以做分布式的缓存和任务执行，分布式缓存和 turborepo 的 remote caching 是同一个功能。等等。

### 2021 JavaScript Rising Stars

[https://risingstars.js.org/2021/en](https://risingstars.js.org/2021/en)

摘要，

1、zx，全局新增 Star TOP 1，实至名归，我最爱的脚本组合就是 zx + esno<br />
2、Tauri，electron 竞品，也是用 web 写 desktop application，基于 rust，但不包含 node runtime，所以小<br />
3、Astro 虽不在 TOP 10 内，但今年非常瞩目，0JS 方案让页面加载更快，和 SSG 类似，但关键的不同是 astro 按需可以引入动态交互的部分，这个「需」可以是多种策略的，比如页面载入、页面闲置或者基于 Intersection Observer 的页面可见<br />
4、Svelte 今年新增 Star 数超过 Angular<br />
5、Solid 也值得关注，和 React 一样用 JSX 写组件，但不依赖 Virtual DOM；同类的有 Mitosis，可以把组件编译后兼容四大主流框架<br />
6、Remix 框架同样不得不提，slogon 是 "Web Fundamentals, Modern UX"，其 API 大量遵从 web 标准<br />
7、框架部分的还有，Nest 引领服务端 Node 框架，而 Strapi 则引领 headless CMS<br />
8、构建部分两大变化，1 是 Native ES Module，以 Vite 为代表的，2 是大量非 JS 写的 JS 工具，包含 SWC、esbuild、Bun、Turborepo、Parcel 2 等<br />
9、CSS in JS 部分，vanilla-extract 增长最快，也是我非常喜欢的一个方案<br />

### 从实现原理看低代码

[https://zhuanlan.zhihu.com/p/451340998](https://zhuanlan.zhihu.com/p/451340998)

![](https://img.alicdn.com/imgextra/i2/O1CN01HFxTx723Kb3tWet67_!!6000000007237-2-tps-1600-799.png)

作者在低代码领域探索了很多年，从2015 开始研发低代码前端渲染（amis），从 2018 年开研发后端低代码数据模型，发布了爱速搭低代码平台，这些年调研过了几乎所有市面上的相关技术和产品，发现虽然每家产品细节都不太一样，但在底层技术上却只有少数几种方案，因此我们认为不同产品间的最大区别是实现原理，了解这些实现原理就能知道各个低代码平台的优缺点，所以本文将会介绍目前已知的各种低代码实现方案，从实现原理角度看低代码。

### pnpm 2021

[https://pnpm.io/blog/2021/12/29/yearly-update](https://pnpm.io/blog/2021/12/29/yearly-update)

![](https://img.alicdn.com/imgextra/i2/O1CN01B1NGje20jNdziJ8HD_!!6000000006885-2-tps-585-498.png)

pnpm 2021 的年报非常精彩。下载相比 2020 多 3 倍，大部分用户来自美国和中国，Github Stars +5000，最大的新用户是字节，大量社区框架和工具切换到 pnpm。

