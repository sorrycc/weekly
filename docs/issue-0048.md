# MDH 前端周刊第 48 期：Remix Routes、ShadowRealms、Rome Formatter、Umi 4 RC 11

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h14q6p46zzj21900u0gyg.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">dnevozhai @ unsplash</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0048 期，发表于 2022/04/11。</p>

本期主要内容有这些：

- Remix Routes
- ShadowRealms
- Web Maker
- Rome Formatter
- Umi 4 RC 11
- Resumability
- Node 202203

## Remix Routes
https://www.smashingmagazine.com/2022/03/remix-routes-demystified/

非常好的 Remix 入门教程，路由是 Remix 区别于其他框架的重要因素之一，作者从路由的目录结构、各种功能，到数据的 load 和 mutate、Header 和 Meta 设置、资源路由，做了详细介绍。

路由匹配规则如下，包含 layout、不使用 layout、动态路由、fallback 路由。

```bash
+ routes/
  + posts
    # 匹配 /posts/xxx/edit
    - $postId.edit.jsx
    # 匹配 /posts/xxx
    - $postId.jsx
  # 匹配 /posts/foo，但不使用 posts.jsx 作为 layout
  - posts.foo.jsx
  # 作为 /posts 的 layout 组件
  - posts.jsx
  # 匹配不到适的 fallback
  - $.jsx
```

Remix 还有 Resource 路由的概念，类似 Next.js 的 API Routes，路由文件如果只导出 loader 函数，没导出 React 组件，即是 Resource 路由。

## ShadowRealms
https://2ality.com/2022/04/shadow-realms.html

ShadowRealm 可以想象成改进版的 eval，会为每个实例分配不同的全局环境，在在此执行的 JavaScript 不会影响到外部环境。

包含两个 API。evaluate 用于同步执行代码，注意代码中不能包含静态 import，但动态 import() 是允许的；importValue 用于导入外部文件中的方法，第二个参数是 specifier，当前提案中必须提供。

```js
const sr = new ShadowRealm();

// 执行代码
sr.evaluate(`'hello' + 'world'`); // helloworld

// 导入 foo.js 导出的 bar 函数 为 sum
const sum = sr.importValue('./foo.js', 'bar');
sum('hello', 'world'); // helloworld
```

importValue 在未来还可和 Module blocks 提案搭配使用，减少不必要的 reexport 临时文件，

```js
module insideCode {
 export { runTests } from 'test-framework';
 import './my-tests.js';
}

const sr = new ShadowRealm();
const runTests = await sr.importValue(insideCode, 'runTests');
```

适用于 ShadowRealm 的场景通常和沙箱、三方库有关。比如 Web IDE 或画图应用中装载三方插件，编程应用运行用户代码，服务端跑三方库代码，微前端沙箱，Test Runner，jsdom 等。同类方案有 eval/new Function、Web Worker、iframe、node 中的 Module vm。

ShadowRealm 目前尚未有落地的浏览器实现，可通过 [shadowrealms-polyfill 补丁](https://github.com/leobalter/shadowrealms-polyfill)尝鲜。需注意补丁背后通过 iframe 实现，所以只适用 Web，暂不具备跨平台能力。

## Web Maker
https://github.com/chinchang/web-maker

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h14o38urm8j20yi0k8tb4.jpg)

开源的 HTML、CSS、JS 在线 DEMO 工具，类似 CodePen 和 JSFiddle，特点是可离线工作。

## Rome Formatter
https://rome.tools/blog/2022/04/05/rome_formatter_release

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h14nzkwkoog21ec0j8b29.gif)

Rome Formatter 是基于 Rust 重写后的 Rome 的第一个版本，相比 Prettier，除了快 9-12 倍，还有个重要特点是如上图所示，就算代码里有错误，也能正确格式化，这是我使用 Prettier 经常遇到的问题。

两行命令尝鲜，

```bash
$ pnpm i rome@next
$ pnpm rome format .
```

搭配 [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=rome.rome) 使用效果更好。

## Umi 4 RC 11
https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.11

包含 4 项更新，

1、新增命令 umi lint，包含 eslint 和 stylelint 的规则和命令

lint 有两种用法，1）仅使用 umi 提供的规则配置，然后用项目里安装的 eslint 和 stylelint 执行，好处是对 IDE 友好 2）使用 umi 的 lint 命令。

用法 1 是在 .eslintrc 和 .stylelintrc里扩展 umi 的配置，

```js
{
  "extends": "umi/eslint"
}
```

```js
{
  "extends": "umi/stylelint"
}
```

用法 2 是直接执行 `umi lint` 命令，默认会用前面的配置，当然也可通过配置文件进行修改。

同时，Umi 提供的 eslint 规则我们有进行梳理，目前仅包含质量类的规则，因为我们觉得，风格类的规则应该交给 prettier 或其他同类工具。

注：由于尺寸问题，umi 没有包含 @umijs/lint（@umijs/max 内置了），使用时会提示你手动安装。

2、支持通过环境变量 SOCKET_SERVER 指定 socket 服务器，场景是 umi.js 和页面 url 不是同一个 server 时使用，比如

```bash
# 指向 socket 服务器到本地 umi dev 启动的服务器
$ SOCKET_SERVER=http://localhost:8000/ umi dev

# 打开开发服务器，这个页面里引用 http://localhost:8000/umi.js
$ open http://dev.prod.domain/
```

3、支持 node: 前缀的 import 语法和补丁

越来越多的库使用 node: 前缀的 import，比如 chalk、file-type 等 sindresorhus 提供的依赖。之前会报 UnhandledSchemaError 的错误，现在通过 NormalModuleReplacementPlugin 替换资源 request 进行了修复。

```js
import { join } from 'node:path';
join;
```

4、修复项目里指定 16 及以下版本的 react 时构建报错的问题

原因是，babel-preset-react 中的配置项 runtime 和 importSource 是要搭配使用的，比如 runtime 设置为 classic 而 importSource 设置为 react 时会报错。

```js
// 如果 react >= 17
runtime: 'automatic',
importSource: 'react',

// 如果 react < 17
runtime: 'classic',
importSource: undefined,
```

## Resumability
https://www.builder.io/blog/from-static-to-interactive-why-resumability-is-the-best-alternative-to-hydration

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h14ocoa6zqj21660r0taq.jpg)

Prerender 可以让 HTML 更快出来，通常的办法是 SSR 和 SSR。问题是，现在的应用通常是动态和富交互的，如何给 prerender 的 HTML 加上交互，现代框架的解法是 Hydration。

Hydration 需要加载完整的 JS Bundle、执行代码、关联 event hanlder、恢复应用 state、重建组件树，这一系列的步骤相对来说都是非常慢的，让 TTI 时间变慢。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h14oez3sfej21ht0u0mzo.jpg)

对于 Hydration 慢的问题，社区已在尝试其他解，比如序列化，通过解析 JSON 来恢复页面状态，让可交互时间变得很短。但问题是，状态可以序列化，而事件、组件树要做序列化的难度很大，因为要考虑闭包、Promise、资源引用等。

作者团队给的解是 Qwik 框架，通过框架让页面可恢复，从而让 TTI 时间降到最小。

## Node 202203
https://simonplend.com/whats-new-in-node-js-core-march-2022-edition/

以下是我觉得重要的部分，

1、Node 17.0 内置全局的 `structuredClone()` 方法，用于 deep clone

2、Node 16.14 和 Node 17.3 支持 `AbortSignal.timeout()`，可用于自动取消 fetch

```js
try {
  const signal = AbortSignal.timeout(2000);
  await fetch(url, { signal });
} catch(e) {
  if (e.name === 'AbortError') { ... }
}
```

3、Node 17.5 引入 Fetch API，其中 FormData 在 17.16 引入，需通过 `--experimental-fetch` Flag 开启

4、Node 17.1 和 Node 16.14 支持 ES Modules 里 import JSON 文件，需要 `--experimental-json-modules` 开启，17.5 之后不需要 Flag

```js
import x from './package.json' assert { type: 'json' };
```

## 发布

以下是上周社区的其他重要发布。

- [TypeScript 发布 4.7 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/)，终于把 ECMAScript Module 支持的 node12 和 nodenext 加回来了
- [webpack 发布 5.72.0](https://github.com/webpack/webpack/releases/tag/v5.72.0)，有个 module federation + hmr 的 BUGFIX，修复 `__webpack_modules__ is not defined` 的报错
- [GraphQL Yoga 发布 2](https://www.the-guild.dev/blog/announcing-graphql-yoga-v2)
- [RedwoodJS 发布 1](https://community.redwoodjs.com/t/redwood-1-0-is-now-available/2958)，类 Ruby on Rails 的框架
- [react-query 发布 4.0.0-beta.1](https://github.com/tannerlinsley/react-query/releases/tag/v4.0.0-beta.1)，支持 react 18
- [Node 18 将内置 test runner](https://fusebit.io/blog/node-testing-comes-to-core/)，通过提供 `node:test` 内置包的形式

## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

以上就是本期我的分享。如果需要文内资讯的链接，请点击「查看原文」进入语雀查看。持续更新不易，如果你喜欢本周刊，请转发给你的朋友，告诉他们到这里来订阅，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
