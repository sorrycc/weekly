---
title: "可扩展的 CSS、TanStack Router、Solid Start Beta、npm query、Rome 10"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01UBOASE1juVsSjAjby_!!6000000004608-0-tps-1920-1273.jpg"
titleImageCaption: "封面图：saahthay @ unsplash"
publishedAt: "2022/11/14"
---

本周有这些内容想和你分享：

* 可扩展的 CSS
* TanStack Router
* Solid Start Beta
* npm query
* Stately.ai
* Rome 10
* Gastby 5
* React Router 6 延迟 Fetch

## 可扩展的 CSS
https://frontendmastery.com/posts/the-evolution-of-scalable-css/

![](https://img.alicdn.com/imgextra/i3/O1CN01adNlFU1WEklA58kyn_!!6000000002757-2-tps-1658-762.png)

传统 CSS 为啥难以维护？有几大难题。1）全局命名空间，任何东西都可能影响到其他东西，（注：[CSS Cascade Layers](https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/) 是这个问题的解之一）2）命名困难，需要为每个 class 和 id 想个名字，3）重构 CSS 困难，维护到后期只做样式添加而不敢删除，也可能由于不清楚依赖关系而存在大量的无用代码，4）调试 CSS 困难，需要在脑子里模拟 CSS 的定位、对齐、背景、边界等。

面对这些问题，社区出现了一些 CSS 架构方案，以工程的角度来解这些问题。流行过的有 OOCSS、SMACSS、BEM、ITCSS、Cube CSS。

再往现代看，如今的 CSS 上有 3 个流行方向。

1、CSS in JS。老一代的有 Styled Component、Emotion 等，能解大部分问题，到也导致了新问题，比如 SSR 效率、运行时效率，水化时需要多次渲染等，值得注意的是，新一代的 Vanilla extract、Linaria 和 Compiled 改在编译时从组件里提取样式，解了一部分问题。

2、CSS Modules。在传统 CSS 和 CSS in JS 之间找了个很好的中间值。

3、原子化 CSS。这和最早我们推行的最佳实践背道而驰，但却又非常实用。比如 ACSS、Tachyons 和 WindiCSS 都是这一领域的。另外不得不说的就是 Tailwind CSS，把原子化 CSS 做到了极致。

## TanStack Router
https://tanstack.com/router/v1

![](https://img.alicdn.com/imgextra/i2/O1CN01voT0ho1hvljVqSWZH_!!6000000004340-2-tps-1526-788.png)

Tanner 公布了他的新项目：一个 100% 类型安全、与框架无关的路由路由方案。100% 的类型安全意味着路由器从路由定义到渲染都是完全推断的，所以你在任何地方都能得到自动完成，你不必担心编写不安全的路由。

1、URL状态管理  
2、内置缓存  
3、搜索参数模式/验证  
4、自动 prefetch  
5、加载器/动作  
6、异步元素+代码拆分

乍一看，它似乎从 Remix 或 React-Router 获得了一些灵感，但 API 非常不同，不是基于 JSX 的，这可能有助于使解决方案不受影响和类型安全。目前只有 React 适配器，而且文档也不完整，但它看起来很有潜力。

注：RanStack Router 就是之前的 React Location，这次直接从 0.0.1-beta 开始重新发版，操作有点迷。

## Solid Start Beta
https://www.solidjs.com/blog/introducing-solidstart

![](https://img.alicdn.com/imgextra/i4/O1CN01eAYQwL1pL8zDKLca9_!!6000000005343-2-tps-2534-1166.png)

SolidStart 已进入 Beta 阶段。

1、还是 SolidStart 会做人，在发布文章里把 remix、nuxt、hydrogen、sveltekit、tanstack query 感谢了个遍，大家就都不好意思说他抄袭了。

2、构建基于 Vite，平台无关 Session 参考 Remix，嵌套式文件路由来自 Nuxt，自定义 FileRoutes 组件来自 Hydrogen，API 路由风格来自 SvelteKit，路由数据和 Action 参考了 Remix 和 Tanstack Query。

3、虽然学习了不少框架的，但我个人很喜欢这个框架的设计，觉得学地恰到好处。

尝鲜命令如下。

```bash
$ npm init solid
```

相比 Solid Beta，我其实对他们最后提到的还在试验阶段的「Hybrid Routing」功能更感兴趣。我喜欢 Islands 架构带来的性能提升，但不喜欢 MPA 的体验，比如 MPA 就不能实现 Hackernews 的递归评论功能。「Hybrid Routing」通过额外 1.3K 的 JavaScript，通过 ajax 实现 SPA 风格的跳转。期待他和 Islands 架构的组合。

## npm query
https://pawelgrzybek.com/a-few-practical-use-cases-for-npm-dependency-queries/

有时候，我们需要对项目使用的依赖有一些了解。例如，依赖的软件许可证是什么？特定软件包的版本是什么？有多少依赖是由 Sindre Sorhus 创建的？手动翻阅 node_modules 听起来就很麻烦，但幸运的是，有一个更好的方法。

npm 8.16 新增了 query 命令，接收类似 CSS 选择器的查询，返回过滤后的 JSON 格式的依赖列表。比如。

```bash
# 所有依赖
npm query "*"
# name 为 react 的依赖
npm query "[name*=react]"
# 非 MIT license 的依赖
npm query ":not([license=MIT])"
# 依赖为空的依赖
npm query ":empty"
# 寻求 funding 的依赖
npm query ":has([funding])"
# 作者为 sorrycc 的依赖
npm query ":attr(author, [name=\"sorrycc\"])"
```

由于只产出 json 格式，结合 jq 可以做更多事。

```bash
# 用 jq 格式化 JSON
npm query "*" | jq '.'
# 只列出 name 属性
npm query ":attr(author, [name=\"sorrycc\"])" | jq '.[] | .name'
# 卸载依赖
npm query "[name*=gulp]" | jq 'map(.name)|join("\n")' -r | xargs -I {} npm uninstall {}
```

## Stately.ai
https://swizec.com/blog/when-your-brain-is-breaking-try-stately-ai/

![](https://img.alicdn.com/imgextra/i3/O1CN01aqRf6U1LJMyuj919u_!!6000000001278-2-tps-1312-664.png)

作者觉得，当你的大脑已经容不下复杂的逻辑时，试试 xstate 和 stately.ai 吧。xstate 是处理状态机的库，可以避免我们写出下面这种大量三元表达式的代码；后者是前者的可视化工具，先画出状态机，合作完成它，然后再导出到代码中，将其插入 xstate，与喜欢的 UI 库结合使用。

```ts
return (
  <div>
    {isLoading && <Spinner />}
    {!isLoading && !data && <NotFound />}
    {!isLoading && isError && <Ooopsies />}
    {!isLoading && data && (
      <>
        <List data={data} count={10} />
        {!showMore && <Button onClick={onShowMore} />}
      </>
    )}
    {!isLoading && data && showMore && (
      <>
        <List data={data} count={data.length} />
        <Button onClick={onHideMore} />
      </>
    )}
  </div>
)
```

## Rome 10
https://rome.tools/blog/2022/11/08/rome-10.html

![Ewf4Yc](https://img.alicdn.com/imgextra/i2/O1CN018zbhXx1nLwRjwBxyw_!!6000000005074-0-tps-4081-2000.jpg)

Rome 发布 10，这是用 Rust 重写依赖的第一个稳定版本。Rome是一个雄心勃勃的项目，旨在将几十个前端语言工具统一到一个从零开始的、易于使用的工具中。这个版本包含 linter 和 formatter 两个工具，用于代替 eslint 和 prettier，内置支持 JavaScript 和 TypeScript。

Rome 包尺寸为 8.7M，我本地尝试用 Rome Format 代替 Prettier 执行格式化，100+ 文件只要 20ms，重要的是稍微配置后和 Prettier 的功能完全一致。配置如下。

```ts
{  
  "formatter": {  
    "enabled": true,  
    "indentStyle": "space",  
    "lineWidth": 80  
  },  
  "javascript": {  
    "formatter": {  
      "quoteStyle": "single"  
    }  
  }
}
```

重点是快，以下是和 prettier 的对比。

![f1f20eIeRqLJnLLU](https://img.alicdn.com/imgextra/i1/O1CN01hrA6An1I6b5PzMqYN_!!6000000000844-1-tps-900-360.gif)

最后说下我理解的 Rome 目前的缺点。1）IDE 支持差，比如 WebStorm 还不能方便地支持，2）不支持扩展，比如除了 prettier 内置规则，我还会用 package.json 排序和 import 语句排序，3）可配置的功能点少，对比下配置文档就能感受到，4）暂不支持 TS 4.9 的 satisfies 语法。

## Gastby 5
https://www.gatsbyjs.com/blog/gatsby-5/

![](https://img.alicdn.com/imgextra/i4/O1CN01Df4g4O1YGhg0WHcti_!!6000000003032-2-tps-1200-600.png)

Gatsby 5.0 正式发布。包括 Gatsby Slice API，允许在修改布局元素（页眉、页脚……）时改善构建时间，并在测试版中支持服务器组件，允许部分水化。还有新的 Head/Script 组件，GraphiQL v2，等等。

## React Router 6 延迟 Fetch
https://dev.to/infoxicator/react-router-6-deferred-fetch-4k68

React Router 6 提供了 deferred API，让我们可以区分页面的关键数据和可选数据。可选数据不应该影响页面渲染，比如博客文章的评论、购物车中的推荐产品、最近的搜索等。用法如下。同时可选数据加载报错不会让整体路由渲染报错。

```ts
const critical1Promise = fetch('/xxx').then(res => res.json);
const critical2Promise = fetch('/xxx').then(res => res.json);
const lazy1Promise = fetch('/xxx').then(res => res.json);
const lazy2Promise = fetch('/xxx').then(res => res.json);
export const loader = async () => {
  return defer({
    critical1: await critical1Promise,
    critical2: await critical2Promise,
    lazy1: lazy1Promise,
    lazy2: lazy2Promise,
  });
}
```

可达到的瀑布流如下。

![](https://img.alicdn.com/imgextra/i2/O1CN01VmdYI31gWkTqcmfoR_!!6000000004150-1-tps-880-368.gif)

这和在组件里用 useEffect 有啥区别？useEffect 的方式，不能做到所有请求并行发起，相比之下会慢一些。「The earlier you initiate a fetch, the better, because the sooner it starts, the sooner it can finish.」
