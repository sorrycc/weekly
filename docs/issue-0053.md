# MDH 前端周刊第 53 期：Markdoc、Module Federation 提速、Umi Client Loader、Solidjs 1.4

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h296t9h7inj21c60u0aas.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：acharki95 @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0053 期，发表于 2022/05/16。</p>

本周有这些内容想和你分享：

- Markdoc
- Module Federation 提速
- Umi Client Loader
- Solidjs 1.4

## Markdoc
https://github.com/markdoc/markdoc

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h27pjsa486j21c60m441n.jpg)

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

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h27x7oowcyj20mq0bgt91.jpg)

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

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h280nw2zrog21hc0u0x6q.gif)

如上图，这是 Umi 4 的 Client Loader 特性。

如果大家了解 Remix，应该听到过他的 loader 概念。开发者在 loader 中写代码，然后框架负责协调，在合适的时间触发 loader 发起请求，从而达到理论最快请求的效果。而 Umi 的 Client Loader 就是把其 loader 的功能搬到了 CSR（客户端渲染）的场景。

## Solidjs 1.4
https://github.com/solidjs/solid/releases/tag/v1.4.0

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h290f9yraog20cb04zab2.gif)

Solidjs 关注一段时间了，属于「叫好不叫座」类的框架。但其 1.4 引入的几个特性也还是挺亮的。

1、createStore 支持 Top Level 的数组。之前不能传数组，只能嵌套在一个对象里才能正常使用，这会让人感到困惑。

```js
const [todos, setTodos] = createStore([
  { id: 1, title: "Thing I have to do", done: false },
  { id: 2, title: "Learn a New Framework", done: false }
]);

// set at an index
setTodos(1, done, true);
```

2、createResource 支持通过 resource.latest 访问旧的值，可用来实现上图的效果。有些场景的数据切换效果，会希望在新数据加载到之前，先显示旧的数据。

```js
const [resource] = createResource(source, fetcher)
// 正常访问
resource()
// 读取最新的值（有值之后不挂起）
resource.latest
```

## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**DEX 周刊**](https://newsletter.dex.group/)：关于产品、设计、前端、软件的精华资讯邮件列表
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
