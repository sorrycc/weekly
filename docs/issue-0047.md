# MDH 前端周刊第 47 期：React 18、Chrome 100、TypeScript String Literal、Case Police、异步代码 Lint 规则

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h0v8qno3q6j21qg0u0qjp.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：欧洲叠石头大赛 2019 冠军。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0047 期，发表于 2022/04/04。</p>

本期主要内容有这些：

- React 18
- Chrome 100
- TypeScript 字符串字面量类型
- Case Police
- 异步代码 Lint 规则
- GitLanding
- 20 个程序员高效贴士

## React 18
https://reactjs.org/blog/2022/03/29/react-v18.html

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0waqyc0wdj20zk0jq0u8.jpg)

React 18 真的发布了。注意，这不是演习！

**React 18 带来了自动批处理、Transitions、新 Suspense、新的客户端和服务端 API、新的严格模式。**

**自动批处理**是指将多个状态的更新，处理到单一的渲染工作中，以获得更好的性能。之前只支持 React 事件处理程序内的更新；现在支持 Promise、setTimeout、native event handlers 等。

**Transitions** 区分紧急更新和非紧急（过渡、Transition）更新，减少由于 rerender 引起的页面卡顿，这里有个 [DEMO](https://codesandbox.io/s/starttransition-demo-o59ld2)。通过 useTransition 或 startTransition 可切换到非紧急模式，前者可额外获取 pending 状态，后者可在非 hooks 环境下使用。从 DX 角度考虑，一个输入应该同时触发一个紧急更新和一个非紧急更新。比如下拉列表的筛选器，单击后，筛选器按钮立即响应，实际结果走 Transition。

**Suspense** 在上个版本就可以和 React.lazy 结合使用做 code splitting，React 18 起开始支持任意异步操作，比如代码、数据、图像等的加载。同时 Suspense 支持与 Transition 结合使用，如果 Transition 暂停，已可见的内容不会被 fallback 取代，而是做延迟的渲染，等有足够数据时才渲染。

**API 变更部分。** client 部分从 react-dom/client 导出，用 createRoot 和 hydrateRoot 代替之前的 render 和 hydrate，render 和 hydrate 虽然能用，但会抛警告，并且不会具备并发功能；server 部分从 react-dom/server 导出，支持 streaming Suspense。API 包含 renderToPipeableStream 和 renderToReadableStream。renderToString 继续工作，但不鼓励使用。

**新的严格模式**是为未来支持 Offscreen 组件准备，由于 Offscreen，所以组件需要支持多次挂载和销毁。比如大家在写 useEffect 时通常会假设他们只被挂载或销毁一次。开启新严格模式后将自动卸载并挂载每个组件。

## Chrome 100
https://developer.chrome.com/en/blog/new-in-chrome-100/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0wiyohscdj218g0dc0wt.jpg)

Chrome 迎来 100 的三位数版本号，两个重要变化。

1、支持 Multi-Screen Window Placement API，可以检测是否有接多个屏幕，获取屏幕详细信息，请求开启全屏等，适用场景比如文稿演示。

```js
// 特性检测
'getScreenDetails' in window;

// 获取权限
const { state } = await navigator.permissions.query({ name: 'window-placement' });
state === 'granted';

// 是否有接入多个屏幕
window.screen.isExtended;

// 获取屏幕详情
const screens = await window.getScreenDetails();

// 请求全屏
elem.requestFullscreen({ screen: screens[0] });

// 监听屏幕变化
screens.addEventListener('screenschange', (e) => {});
```

2、Chrome 100 是最后一个试验 User Agent 缩减的版本，Chrome 101 开始将逐渐正式缩减 UserAgent，减少信息量，保护用户隐私。

## TypeScript 字符串字面量类型
https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0wja8248qj213y0c0tal.jpg)

这篇文章教你如何从字符串字面量类型一步步推导出请求参数类型，即从 `/users/[userId]/[postId]/[...args]` 推导出 req.params.userId 等，从而成为合格的「类型体操运动员」。

真实场景比如 react-router，其中 Route 的 render 方法也有类似实现，

```js
<Route path="/user/:username" render={(props) => {
  // Type 'foo' does not exist on type '{ username: string }'
  const { foo } = props.match.params;
}} />
```

以下是加了简单注释的最终版本，

```ts
// '[userId]' > 'userId'
type IsParameter<Part> = Part extends `[${infer ParamName}]`
  ? ParamName
  : never;
// 'a/b/c' > 'a' | 'b' | 'c'
type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? IsParameter<PartA> | FilteredParts<PartB>
  : IsParameter<Path>;
// ...args ? string[] : number
type ParamValue<Key> = Key extends `...${infer Anything}` ? string[] : number;
// ...args > args
type RemovePrefixDots<Key> = Key extends `...${infer Name}` ? Name : Key;
// 'a' | 'b' | 'c' > { a, b, c }
type Params<Path> = {
  [Key in FilteredParts<Path> as RemovePrefixDots<Key>]: ParamValue<Key>;
};
type CallbackFn<Path> = (req: { params: Params<Path> }) => void;

function get<Path extends string>(path: Path, callback: CallbackFn<Path>) {
  // TODO: implement
}

get('/docs/[chapter]/[section]/args/[...args]', (req) => {
  // 👍🏻，拥有类型提示了
  req.params.chapter;
});
```

注意：字符串字面量类型是从 TypeScript 4.1 开始支持的。

## Case Police
https://github.com/antfu/case-police

站住别动！你的大小写需要纠正下。

Git**H**ub, not Github
Type**S**cript, not Typescript
**m**acOS, not MacOS
**VS C**ode, not Vscode
...

## 异步代码 Lint 规则
https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/

摘录其中一些规则和错误用法。

```js
// Promise executor 不要加 async，原因是 async 内的错误会被吃掉
new Promise(async (resolve, reject) => {});

// 迭代 + await 是串行的，通常可以改用 Promise.all 做并行处理
for (const url of urls) {
  const response = await fetch(url);
}

// Promise 构造器中不要用 return，改用 resolve，因为前者无效
new Promise((resolve, reject) => {
  return result;
});

// 不要把 await 和赋值一起用，因为可能导致 Race Condition，。
let totalPosts = 0;
totalPosts += await getPosts(userId);

// reject 里始终用 new Error 包起来，Error 会包含堆栈信息，这样就可以知道错误来自那里
Promise.reject('An error occurred');
```

## GitLanding
https://github.com/thieryw/gitlanding

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0wmhbyl6nj21kn0u00xq.jpg)

适用于 Landing Page 的垂类 React 组件库。

## 20 个程序员高效贴士
https://medium.com/actiresults/20-productivity-tips-from-developers-to-developers-138f8ec6200c

虽然有些不是和高效相关，而且后面几条有凑的成分，但很多建议都是不错的。我整理了下标题如下。

1、学习 IDE
2、学习命令行
3、不要着急写代码，送给身边的好多朋友，哈哈，有时候拦都拦不住
4、避开金锤子，不要因为熟悉而用一个工具、语言、平台去解所有的问题，应该调研，然后选择最合适的
5、Push 代码前记得 Review，你会自己发现很多 Bug
6、学工作需要的知识，不追热点，因为你不可能精通所有事
7、搞搞业余项目，可以加速学习，培养创造力，把社区新技术全部用进去
8、写可读性好的代码，而不是复杂、花哨的代码，以后你会感谢自己的
9、记录时间，尤其是你觉得效率不够高的时候
10、评估工作时加 Buffer，别把自己搞太累，同时增加项目风险
11、培养软技能，只会写代码是不够的
12、尽可能多地自动化，写博客前先写个博客系统不是丢脸的事
13、长期主义，眼光放远点，有些近期可能拖累你的工具，长期可能是有益的
14、在办公用品上舍得花钱，比如降噪耳机、站立式办公桌、人体工学椅
15、知道自己什么时候累了，累了就休息，疲劳驾驶可能给未来留坑
16、写日记
17、适时休息，长时间工作效率反而更低
18、记录日常成就
19、别害怕犯错
20、不要跳过文档

## 发布

以下是上周社区的重要发布。

- [Umi 发布 4.0.0-rc.10](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.10)，包含等自动 https 证书、开发者工具初版、MFSU Cache Invalidate 机制等 6 项更新
- [react-router 发布 6.3.0](https://remix.run/blog/react-router-v6.3.0)，新增 react-router-dom-v5-compat 兼容包，方便 react-router 5 的用户升级
- [pnpm 发布 7.0.0-rc.1](https://github.com/pnpm/pnpm/releases/tag/v7.0.0-rc.1)
- [Electron 发布 18](https://www.electronjs.org/blog/electron-18-0)，升级 Chromium 100、V8 10、Node 16.3.2
- [webpack 发布 5.71](https://github.com/webpack/webpack/releases/tag/v5.71.0)
- [VSCode 发布 March 2022 更新](https://code.visualstudio.com/updates/v1_66)
- [Node.js Core 发布 March 2022 更新](https://simonplend.com/whats-new-in-node-js-core-march-2022-edition/)
- [@testing-library/react 发布 13](https://github.com/testing-library/react-testing-library/releases/tag/v13.0.0)，支持 react 18
- [Astro 将于 4.4 发布 Beta](https://astro.build/blog/launch-week/)
- [React Native 发布 0.68](https://reactnative.dev/blog/2022/03/30/version-068)
- [Valtio 发布 1.5.0](https://github.com/pmndrs/valtio/releases/tag/v1.5.0)，使用 React 18 的 useSyncExternalStore
- [Vite 发布 2.9.0](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#290-2022-03-30)
- [react-three-fiber 发布 8](https://docs.pmnd.rs/react-three-fiber/tutorials/v8-migration-guide)，兼容 react 18，支持 react native
- [MailDev 发布 2](http://maildev.github.io/maildev/)，SMTP server & web interface for viewing and testing emails during development

## 推广

我在知识星球开了个专栏，付费的那种。专栏名叫[「云谦和他的朋友们」](https://mp.weixin.qq.com/s/_23bA1R4t8KiIjCwmr83OQ)。截止 2022.04.04 已有 300+ 朋友加入，写了 90 篇日更，69 篇每日前端资讯简报，还有大量问题回复。

以下是上周的 8 篇日更。

- 90 - 《Bigfish 4 特性 02：React Router 6 和新路由》
- 89 - 《Bigfish 4 特性 01：MFSU V3》
- 88 - 《最近新收获的工具、技巧和经验 02》
- 87 - 《Umi 近期想做的事（二）》
- 86 - 《分析 import 和 export 的 6 种方式》
- 85 - 《手写 Umi 三：极简脚手架》
- 84 - 《手写 Umi 二：路由和 SPA》
- 83 - 《如何入坑老头环》

<p style="color:#b5495b;"><a style="color:#b5495b;" href="https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247484448&idx=1&sn=3195bb82d2d2b7d58305c4f1aeae5e0d">点击此处查看详情</a>或扫下方二维码加入。</p>

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h08blrtribj20sr12rgpn.jpg)

## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

以上就是本期我的分享。如果需要文内资讯的链接，请点击「查看原文」进入语雀查看。持续更新不易，如果你喜欢本周刊，请转发给你的朋友，告诉他们到这里来订阅，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
