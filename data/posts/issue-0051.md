---
title: "手写 Bundler、Contentlayer、Jest Preview、click-to-component"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN013wcE4v1DFgs8XPeqT_!!6000000000187-0-tps-1624-1080.jpg"
titleImageCaption: "drewpatrickmiller @ unsplash"
publishedAt: "2022/05/02"
---

本期主要内容有这些：

- 手写 Bundler
- Contentlayer
- Jest Preview
- click-to-component
- JavaScript 框架四时代

## 手写 Bundler
https://cpojer.net/posts/building-a-javascript-bundler

这是作者一个系列里的第 4 篇，等了 1 年了，上一篇更新的时间是在 2021.6.2。作者也是 Jest 的作者，所以过程中用了大量 jest 的底层库，包括 jest-haste-map、jest-resolve、jest-worker 等。

Bundle 是 File 到 Dependency Graph 再做 Serialize 的过程。File 到 Dependency Graph 可以用 jest-haste-map，可以 track 文件，生成 module graph，且支持监听和更新；注意 jest-haste-map 拿到的依赖是裸路径，要找到真实路径作者推荐用 jest-resolve + jest-resolve-dependencies，其实也可以用 webpack 的 [enhanced-resolve](https://github.com/webpack/enhanced-resolve)；序列化的过程就是怎么把零散的文件合成一个可运行的 bundle，有多个选择，比如 rollup 风格的内联式，比如 webpack 风格的带 runtime 的，包含模块的注册和使用，等等。

做完以上事情就能跑了，但要做完善，还有非常多事情可以做。比如要支持进阶语法，可以加入 babel 做文件的 transform；比如要考虑性能，可以用 jest-worker 支持多核并行 transform。以及还可以考虑压缩、SourceMap、Tree Shaking、Code Splitting、Import Maps、FS Cache、dev 模式、Hot Reloading 等，甚至可以用 Rust 重写这一套。

## Contentlayer
https://www.contentlayer.dev/blog/beta

![](https://img.alicdn.com/imgextra/i1/O1CN01jDo8VT1Zi0uiA02XB_!!6000000003227-0-tps-1400-506.jpg)

Contentlayer 在 Markdown、Notion、Contentful 等类型的内容层和应用之间架了个桥梁，让开发者可以更容易地完成内容接入。功能上支持 TypeScript、增量编译、缓存以提升性能、内容校验、Markdown 编译、内容热更新等。

```ts
import { allPosts, type Post } from 'contentlayer/generated'
 
export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h1>All posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.url}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

Contentlayer 是通用方案，可以和任意框架对接，目前已提供 Next.js 的集成方案。Contentlayer 作者同时也是 Prisma 的作者。

## Jest Preview
https://github.com/nvh95/jest-preview

![](undefined)

Jest Preview 可用于测试 UI 组件。UI 组件通常比较难在脑子里形成视觉的印象，Jest Preview 可以解这个问题，通过启动 server 并提供 html 渲染。推荐和 jest + react-testing-library 搭配使用。

上手指南如下：

1、安装依赖

```bash
$ npm i jest-perview
```

2、测试代码中在 render 后引入

```ts
import { preview } from 'jest-preview';
preview();
```

3、启动 jest 之外，单独再启动 jest-preview

## click-to-component
https://github.com/ericclemmons/click-to-component

![](undefined)

见名知意，如上图，点击组件后在编辑器中打开源码。同类实现有 [react-dev-inspector](https://github.com/zthxxx/react-dev-inspector)，以及蚂蚁内网也有个叫 findCode 的 umi 插件。click-to-component 的有点是接入简单，只要使用了 [babel-plugin-transform-react-jsx-source](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source) 的项目都可通过组件一键接入。

```js
import { ClickToComponent } from 'click-to-react-component';
<ClickToComponent />
```

编辑器支持 vscode 和 [vscode-insiders](https://code.visualstudio.com/insiders/)，intellij 的在路上，已看到有 [PR](https://github.com/ericclemmons/click-to-component/pull/35)。

框架仅支持 React，不支持 Vue 和 Angular。

## JavaScript 框架四时代
https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks

作者给 JavaScript 框架分了四个时代，

1、上古时期，无框架。

2、框架初期，2000 到 2010，出现了第一批框架，包括 Backbone.js、Angular 1、Knockout.js、SproutCore、Ember.js 和 Meteor.js 等。

3、以组件为中心时代，包括 React、Vue、Svelte 和 Polymer.js 等。

4、全栈框架时代，包括 Next.js、Nuxt.js、Remix、SvelteKit、Gastby 和 Astro。

## 发布

以下是上周社区的重要发布。

- [Umi 发布 RC.14](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.14)，支持 React 18、改进 dev 启动动画、路由支持 wrapper 等 19 项更新
- [Jest 发布 28](https://jestjs.io/blog/2022/04/25/jest-28)
- [Remotion 发布 3.0](https://www.remotion.dev/blog/3-0)，引入 Remotion Lambda，基于 AWS Lambda 的分布式视频渲染器，大幅提升渲染速度
- [React 发布 18.1](https://github.com/facebook/react/releases/tag/v18.1.0)，大量 Bugfix
- [Deno 发布 1.21](https://deno.com/blog/v1.21)
- [Macaca DataHub 发布 4.0](https://zhuanlan.zhihu.com/p/495413662)
- [vitest 发布 0.10](https://github.com/vitest-dev/vitest/releases/tag/v0.10.0)
- [antd 发布 4.20.0](https://github.com/ant-design/ant-design/releases/tag/4.20.0)，支持 react 18 和严格模式

