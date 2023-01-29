---
title: "Markdoc、Module Federation 提速、Umi Client Loader、Solidjs 1.4"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01tlDBWP264yTQY2ZtI_!!6000000007609-0-tps-1734-1080.jpg"
titleImageCaption: "acharki95 @ unsplash"
publishedAt: "2022/05/16"
---

本周有这些内容想和你分享：

- Markdoc
- Module Federation 提速
- Umi Client Loader
- Solidjs 1.4

## Markdoc
https://github.com/markdoc/markdoc

![](https://img.alicdn.com/imgextra/i1/O1CN01HR1rMA1NDXAGp12rG_!!6000000001536-0-tps-1734-796.jpg)

Markdoc 是 Stripe 刚出的文档工具，吸引了不少眼球。他和其他文档工具不同，引入了一种新的 markdown 方言（编写方式），同时可以和任意语言结合使用，目前内置实现了 react 和 html。

那 Markdoc 和 MDX 有啥区别？MDX 只针对 react，并且自定义内容的接入方式只能是组件；markdoc 理论上可接入任意语言，接入方式除了组件（tag），还有函数、attriubte、variable、表达式等。以下分别是 Markdoc 和 MDX 的语法例子。

```
# Hello Umi
{% image src="/logo.svg" /%}
{% callout type="check" %}
Umi is yet another React Framework.
{% /callout %}
```

```
import { Image, Callout } from './components';
# Hello Umi
<Image src="/logo.svg" />
<Callout type="check">
Umi is yet another React Framework.
</Callout>
```

## Module Federation 提速
https://nx.dev/module-federation/faster-builds

![](https://img.alicdn.com/imgextra/i4/O1CN01fewGaT1SohNpdes7X_!!6000000002294-0-tps-818-412.jpg)

Nx 14 起支持利用 Module Federation 提速，和 Umi 的 MFSU 类似，都是基于 Module Federation，但思路不同，粒度也不同。

Nx 的方案是把一个大的 SPA 拆成 Host + 多个 Remote，然后就可以在 Remote 上加缓存，利用缓存让 dev、build、ci、cd 提速。注：缓存和 Nx Cloud 结合效果会更佳。比如上图，把 Host 拆除 about、cart 和 shop 三个 Remote，通常是基于路由。项目大了之后，修改时可能只改其中一部分，就可复用之前构建过的静态产物。

尝鲜命令如下，

```bash
$ pnpm i nx -g
$ pnpx create-nx-workspace acme --preset=empty
$ cd acme
$ pnpm i @nrwl/react -D
$ nx g @nrwl/react:host host --remotes=shop,cart,about
$ nx serve host —open
```

## Umi Client Loader
https://next.umijs.org/

![](https://img.alicdn.com/imgextra/i2/O1CN01yzmUwd2AJPQ22MXZT_!!6000000008182-1-tps-1920-1080.gif)

如上图，这是 Umi 4 的 Client Loader 特性。

如果大家了解 Remix，应该听到过他的 loader 概念。开发者在 loader 中写代码，然后框架负责协调，在合适的时间触发 loader 发起请求，从而达到理论最快请求的效果。而 Umi 的 Client Loader 就是把其 loader 的功能搬到了 CSR（客户端渲染）的场景。

## Solidjs 1.4
https://github.com/solidjs/solid/releases/tag/v1.4.0

![](https://img.alicdn.com/imgextra/i3/O1CN01xIfqsS1adGQEc6sUw_!!6000000003352-1-tps-443-179.gif)

Solidjs 关注一段时间了，属于「叫好不叫座」类的框架。但其 1.4 引入的几个特性也还是挺亮的。

1、createStore 支持 Top Level 的数组。之前不能传数组，只能嵌套在一个对象里才能正常使用，这会让人感到困惑。

```ts
const [todos, setTodos] = createStore([
  { id: 1, title: "Thing I have to do", done: false },
  { id: 2, title: "Learn a New Framework", done: false }
]);

// set at an index
setTodos(1, done, true);
```

2、createResource 支持通过 resource.latest 访问旧的值，可用来实现上图的效果。有些场景的数据切换效果，会希望在新数据加载到之前，先显示旧的数据。

```ts
const [resource] = createResource(source, fetcher)
// 正常访问
resource()
// 读取最新的值（有值之后不挂起）
resource.latest
```
