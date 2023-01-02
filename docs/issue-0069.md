# MDH 前端周刊第 69 期：10x 工程师、别用默认导出、Preact Signals、CSR 最佳实践

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h61lmeh3mvj21hc0shaar.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：countchris @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0069 期，发表于 2022/09/12。</p>

本周有这些内容想和你分享：

- 人手 10x 工程师
- 别用默认导出
- Preact Signals
- CSR 最佳实践
- SWR vs. TanStack Query
- Monocraft
- JavaScript 时间线

## 一周新闻

* [Babel 发布 7.19](https://babeljs.io/blog/2022/09/05/7.19.0.html)，decoration 提案进入 stage-3，通过 version: '2022-03' 开启，同时正则支持重复命名捕获，通过额外插件 @babel/proposal-duplicate-named-capturing-groups-regex 开启
* [Next.js 发布 12.3](https://nextjs.org/blog/next-12-3)，Fast Refresh 支持 .env 和 tsconfig.json，检测到 ts 或 tsx 文件自动完成 TypeScript 配置、SWC Minifier Stable
* [Nuxt 发布 3.9-rc.9](https://github.com/nuxt/framework/releases/tag/v3.0.0-rc.9)，默认开启 vite-node 所以 ssr dev 更快？app.config.ts 支持 HMR
* [Fresh 发布 1.1](https://deno.com/blog/fresh-1.1)，automatic JSX, plugins, DevTools 等
* [Rome 发布 0.9](https://github.com/rome/tools/blob/main/CHANGELOG.md#090)
* [React Native 发布 0.70](https://reactnative.dev/blog/2022/09/05/version-070)，启用 Hermes 作为默认引擎
* Meta 开源 [shumai](https://github.com/facebookresearch/shumai)，基于 Bun + Flashlight 的 JavaScript 机器学习库
* [Styled Components 发布 6 Beta 2](https://github.com/styled-components/styled-components/releases/tag/v6.0.0-beta.2)
* Parcel CSS 更名为 [Lightning CSS](https://lightningcss.dev/)
* [module-federation/nextjs-mf](https://github.com/module-federation/nextjs-mf)，让 Next.js 支持 Module Federation，目前 CSR Only
* [alyssaxuu/motionity](https://github.com/alyssaxuu/motionity)，基于 Web 的动效编辑器
* [huacnlee/autocorrect](https://github.com/huacnlee/autocorrect)，盘古之白 linter 和 formatter
* [upscayl/upscayl](https://github.com/upscayl/upscayl)，开源的 AI 图片放大器
* [gradejs/gradejs](https://github.com/gradejs/gradejs)，GradeJS 无需源码即可分析生产阶段的 webpack 产物构成，包括潜在问题，依赖了哪些包，等等

## 人手 10x 工程师
https://typeofnan.dev/10x-engineering-for-the-rest-of-us/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h60pyjbue2j20in0ac756.jpg)

你是不是以为一辈子也不可能成为传说中的 10x 工程师？不，你可以的！

先看两种 10x 工程师。1）写 10x 代码的工程师，但这类工程师对于负责 Review 他代码的同学会很有挑战，2）能评估复杂问题，站在技术前沿，先人一步拿出优雅解决方案的工程师，这类工程师一个团队通常没有几个。

你可能会觉得这两种都比较遥远，别灰心，还有一种 10x 工程师。他关注开发体验（dx）和团队健康，关注小但有倍增效应的事。比如添加缓存以加快持续集成，比如定期修复项目 setup 说明，比如增加 precommit 或加快自动化测试后让故障发生在本地而不是 CI 环境。这些变化随着时间推移所产生的累积效应，虽然不是你自己做了 10x 的工作，但通过提高一群工程师的生产力也能达到 10x 提效。

## 别用默认导出
https://www.lloydatkinson.net/posts/2022/default-exports-in-javascript-modules-are-terrible/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h60qvl80jjj21900u079q.jpg)

ESM 模块系统中有两种导出方式，默认导出和具名导出。

```ts
// math.js

// 具名导出
export const add = (a, b) => a + b;
// 默认导出
export default subtract = (a, b) => a - b;
```

为啥说别用默认导出，他有啥危害呢？

1、比如上面的代码，如何决定哪个是默认哪个不是默认是个问题，同时在使用一个库时，要知道哪个是默认导出通常得去翻源码  
2、IDE 提示中只能看到具名导出，而看不到默认导出，见下图  
3、默认导出在使用时可以乱命名，比如使用上面的模块把 subtract 标成 add 也没人知道，`import add from './math';add(2,2); // 0`，同时一个项目里使用同一个模块的默认导出可能会用不同的名字，或者同一个模块使用不同风格的命名方式，这些都会带来不必要的困扰  
4、重构代码时，具名导出很好通过重构工具重命名，而默认导出则不行

感觉都好有道理啊！

但是有些真实场景下，比如一些框架，会要求你导出默认的函数或组件，有解法吗？有！可以参考[「You Should be Using Folder Components」](https://medium.com/bootstart/you-should-be-using-folder-components-b30b7d165c39)，新建 index.js 做默认导出，而 index.js 的内容则来自真实组件或函数文件的具名导出。

## Preact Signals
https://preactjs.com/blog/introducing-signals/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h61jp0xt5mj213m0u0q8g.jpg)

Preact Signal 是啥？1）Preact 框架官方据流方案，2）拥有 .value 属性的对象，3）值更新时，访问 Signal 值的组件会自动更新，4）可以在组件内或组件外使用，5）仅 1.6kB，6）Signal 值变更时 Signal 保持不变（类似 ref），所以可以跳过 Virtual DOM Diffing，从而避免中间经过组件的渲染，参考上图，右边是基于 Signal。

```ts
import { signal, computed } from "@preact/signals";
const count = signal(0);
const double = computed(() => count.value * 2);
function Counter() {
  return (
    <button onClick={() => count.value++}>
      {count} x 2 = {double}
    </button>
  );
}
```

如果要在 react 中使用，用 `@preact/signals-react` 代替 `@preact-signal` 即可，但需要注意的是，react 集成包的实现里有用到 [SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED](https://github.com/preactjs/signals/blob/main/packages/react/src/index.ts#L6)。

注：基于 Preact 实现的 Fresh 已[发布 1.1 支持 Preact Signals](https://deno.com/blog/fresh-1.1#preact-signals-support)。

## CSR 最佳实践
https://github.com/theninthsky/client-side-rendering

随着 Next.js 和 Remix 的流行，SSR 看似已成为 React 社区的首选。但如果你用 SSR 是为了性能和 SEO，那可能可以重新考虑下，因为 CSR 也能做到。

**关于性能。**

1、减少尺寸。1）少用依赖，2）选择轻量级的依赖，比如用 day.js 代替 moment，用 zustand 代替 redux toolkit。

2、缓存。利用 webpack 的 cacheGroups 设置，提取依赖，当依赖没有变更时，hash 值不变，提高缓存利用率。推荐配置如下，让每个依赖拥有单独的文件和 hash，这样单个依赖变更时不会影响其他依赖。

```ts
optimization: {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'initial',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        // 加这句可以避免异步 chunk 的 vendor 重复问题，比如 a 和 b 都依赖 moment，不加这句 moment 会被打两遍而不是被提取出来
        chunk: 'all',
        // 让每个依赖拥有单独的文件和 hash
        name: ({ context }) => (context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) || [])[1]
      }
    }
  }
}
```

3、Code Splitting。通常有两种，1）基于路由的 Code Splitting，当用户访问页面 A 时无需加载页面 B、C、D 的脚本，2）大依赖 Code Splitting，让整体页面更快出来，让大依赖的部分不影响页面渲染速度。

4、预加载异步 Chunk。主要避免出现下图中最后一个资源文件的瀑布流现象，思路是生成和路由对应的 assets 表，然后在 HTML 最前面加入「匹配路由生成 link preload 标签」的脚本。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h61avjt0zlj20yz0633z8.jpg)

5、生成静态数据。在 build 阶段从 CMD 或服务器上把数据拉下来，存成 json 或其他格式，用户请求时就只需从本地读取即可，访问本地或就近的 CDN 肯定比访问远程服务器更快。如果要重新生成数据，重新跑 build 或者重新执行脚本就好。

6、预加载数据。这和「4」类似，4 预加载的是 JS，这里需要预加载数据。做法也和「4」类似，把数据请求和路由做关联，然后运行时「匹配路由生成针对数据请求的 link preload 标签」。

7、预加载其他页面的数据。当 hover（desktop）或进入 viewport（mobile）时，做的对应 Link 的 preload as fetch。

8、避免序列化的渲染。比如一个应用有 Nav 导航 + 主内容，是应该先出导航再出主内容，还是应该导航和主内容都好了之后一起出？作者觉得应该是后者，实现方法是通过调整 Suspense 元素的位置。这一点其实我是有疑问的，我觉得前一种渲染方式也挺好，避免长时间的白屏。

9、Transition 切换页面（依赖 React 18）。当我们切换页面时，有两个选择。1）切过去，等 loading，渲染；2）等 loading，切过去+渲染。基于 React 18 的 useTransition 可以实现后者，代码如下。

```ts
const n = useNavigate();
startTransition(() => n(to));
```

10、预加载异步页面。作者介绍了个方法，把 React.lazy 封一下，在 window load 事件之后延迟自动执行。

```ts
const lazyPrefetch = chunk => {
  window.addEventListener('load', () => {
    setTimeout(chunk, 200)
  }, { once: true });
  return React.lazy(chunk);
}
```

11、Module Federation。略。

**关于 SEO。**

1、Google 自 2018 之后就可以索引 CSR 应用，包含使用 react-helmet 设置的 title 等属性都可以。但，不完全可靠，Googlebot 为了节约算力，有时不会等页面完全加载完成。

2、除 Google 外的搜索引擎，比如 Bing、Baidu 等并不支持 CSR 应用的渲染，这时推荐的方案是为爬虫专门提供预渲染好的 HTML。可以用类似 [prerener.io](https://prerender.io/) 或 [seo4ajax](https://www.seo4ajax.com/) 的服务，或者自己用开源的 [Prerender](https://github.com/prerender/prerender) 或 [Rendertron](https://github.com/GoogleChrome/rendertron) 部署一个。如果有使用 CSS-in-JS 方案，记得禁用速度优化功能，（这是为啥？我没深入研究，有懂的请留言）代码如下。

```ts
import { sheet } from '@emotion/css';
if (navigator.userAgent.includes('Prerender')) sheet.speedy(false);
```

3、CSR 还有个好考虑的场景是社区分享预览。比如分享到 Facebook、Twitter、钉钉、微信等，涉及到的元素有 title、description 和 image。解法是比如通过 [Meta 组件](https://github.com/theninthsky/frontend-essentials/blob/main/src/components/Meta.tsx)把 title、description 和 image 加上即可，其背后会额外加上 og 前缀的属性，比如 og:title 等。（注：我看到有些地方是有加其他前缀的，比如 twitter:titile、weibo:webpage:create_at、weibo:webpage:update_at 等）

```ts
<Meta 
  title="Client-side Rendering" 
  description="This page demonstrates a large amount of components that are rendered on the screen."
  image={`${window.location.origin}/icons/og-icon.png`}
/>
```

## SWR vs. TanStack Query
https://blog.logrocket.com/swr-vs-tanstack-query-react/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h61kgvpk4zj20u01bjjyn.jpg)

作者分别用 SWR 和 TanStack Query 库创建了一个 React 应用示例，然后根据 DX 和功能对它们进行了比较，详见上图。

## Monocraft
https://github.com/IdreesInc/Monocraft

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h5zc7vpivvj21780p4q65.jpg)

一款模拟 Minecraft UI 的字体，非官方。

## JavaScript 时间线
https://blog.risingstack.com/history-of-javascript-on-a-timeline/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h61km61ul0j21pi0u0jue.jpg)

如果你对 JavaScript 历史感兴趣，这篇应该是非常全面了。


## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**DEX 周刊**](https://newsletter.dex.group/)：关于产品、设计、前端、软件的精华资讯邮件列表
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
