# MDH 前端周刊第 65 期：Suspense、React Query 转 RTK、NodeParty、gum

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h56okbmqymj21e60u0wgb.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：vheath @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0065 期，发表于 2022/08/15。</p>

本周有这些内容想和你分享：

- Suspense
- React Query 转 RTK
- NodeParty
- gum
- cmdk
- Fluent Emoji

## Suspense
https://blog.6nok.org/the-suspense-is-killing-me:-part-2/

作者在一年前写了第一篇，这是第二篇。时隔一年，这篇是他几个月的研究成果。

这段时间发生了什么？1）React 团队创建 [React 18 工作小组讨论区](https://github.com/reactwg/react-18/discussions)，提供更多深入的信息，同时用于收集反馈，2）[React 18 稳定版发布](https://reactjs.org/blog/2022/03/29/react-v18.html)，3）一篇 [React Labs 的帖子](https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html)，介绍 React 团队正在探索的内容。

React 18 有啥新特性？1）[没有并发模式](https://github.com/reactwg/react-18/discussions/64)，取而代之的是并发功能，仅在子树中启用，原因是为了向后兼容，2）[Transition](https://github.com/reactwg/react-18/discussions/41) 允许将不紧急的更新标记为过渡（未来可能成为默认行为），3）基于 Suspense 的 [Streaming SSR](https://github.com/reactwg/react-18/discussions/37) 允许在所有 HTML 被渲染之前进行流化，并且在 HTML 被完全流化之前就可以开始水化（目前需搭配 React.lazy 使用），4）[选择性水化](https://github.com/reactwg/react-18/discussions/130)，5）新 Hooks，比如 [useId](https://github.com/reactwg/react-18/discussions/111) 可用来生成在客户端和服务端稳定的 ID，6）[自动批处理](https://github.com/reactwg/react-18/discussions/21) 让多个 setState 只导致单一渲染。

React 下一步做什么？1）Cache 组件，允许请求库做与 Suspense + 并发渲染兼容的数据缓存，这是 Suspense 目前缺的一环，2）React Server Component，3）用于 Assets 资源加载的 Suspense，比如字体、CSS 和字体等会在加载时导致布局偏移和混乱，4）React 编译器优化，React 慢的原因之一是因为有大量不必要的 re-render，自动插入 memo hook 可以提升性能，这在 [React Conf 2021](https://www.youtube.com/watch?v=lGEMwh32soc) 中有过介绍，5）SuspenseList，在处理 Suspense 列表时有用，比如文章、评论或消息，允许协调子节点，决定他们显示的顺序，6）Offscreen API，允许保留 unmount 组件的状态，或者预先渲染用户可能会执行的 transition，比如做基于路由的预渲染。

跳出 React 从整体社区角度看。1）流式服务端渲染是为了提高响应速度，所以尽可能早地 flush，[MarkoJS](https://markojs.com/) 在 [2014 年开始支持](https://tech.ebayinc.com/engineering/async-fragments-rediscovering-progressive-html-rendering-with-marko/)，更早一些 Facebook 在 2009 年也有一门叫 [BigPipe](https://www.facebook.com/notes/10158791368532200/) 的技术，2）SSR 在网络方面会更快，但同步水化依旧会成为大型项目的性能瓶颈，[Islands architecture(群岛架构）](https://jasonformat.com/islands-architecture/) 可以解这个问题，3）细粒度响应式，「React 虽然叫 react，但实际上不是 react」，响应式是框架中很流行的一种优化方法，比如 [SolidJS](https://www.solidjs.com/)，React 团队也有考虑过这个问题，但选择不追求，Dan 早[在 2019 年就写过这个话题](https://overreacted.io/react-as-a-ui-runtime/#raw-models)，4）Transition API 不算新技术，[谷歌地图也有类似实现](https://github.com/WICG/scheduling-apis/blob/c0d033ce2352fa78dfc061242ebb04dc33223ab5/misc/userspace-schedulers.md#case-study-1-maps-job-scheduler)，同时 Scheduling（调度）问题[正在通过标准的方式](https://github.com/WICG/scheduling-apis)解决，5）SRC（服务端渲染组件）也不是新想法，2018 年就有 [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view) 的实现，通过服务端状态和渲染实现 0 JS 的交互功能。

最后，作者还发现，React 项目内部子项目代号均是以 F 开头。比如 Fiber 是实现了异步渲染的重写的核心代号；Fizz 是新的服务器端渲染架构的代号、Flight 是服务器组件的代号、Fire、Flare 等。

## React Query 转 RTK
https://www.basedash.com/blog/why-we-had-to-move-away-from-react-query

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h559hji89uj20xc0pjgov.jpg)

本文是作者和 React Query 斗争了一年之后，最终弃 React Query 投 RTK 的故事。

React Query 处理了复杂的缓存，并根据需要重新加载数据。用户使用 useQuery 调用 API 时，数据被存储在 React Query 的缓存中。缓存的数据可通过 getQueryData 读取。如果要更新数据，使用 useMutation 会更新服务群上的数据，同时在 onSuccess 或 onMutate 中更新 React Query 缓存中的数据。更新的最简单方法是调用 invalidateQueries。而缓存失效正是作者觉得 React Query 难以驾驭的主要原因。

然后作者在对比之后选择了 Redux + Redux Toolkit（RTK）。作者希望选择全局 store 的数据流，同时还对比了竞品比如 Valtio（见上图）。Redux 的优点是社区、文档、明确的数据结构，缺点是更多脚手架代码、需要用 reselect 或其他来做渲染优化、尺寸比较大（18K）。

编者注：如果我是作者，在需要全局 store 的前提下，会更倾向于选择 valtio 或 zustand。1）脚手架代码少，这一点对外来说很关键，2）性能更好（valtio 基于使用决定 re-render），3）redux 的单 store 在未来可能成为瓶颈，比如要做组件提取时，多 store 会更灵活一些。

## NodeParty
https://www.yuque.com/antfe/featured/gi7ker

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h5527w92u4j210l0kk75m.jpg)

支付宝体验科技举办的 NodeParty 已于 8 月 8 日 在线直播。本次 NodeParty 上，CNCF OpenTelemetry 维护者， Node.js、 V8 贡献者吞吞、蚂蚁集团 Node.js 工程师零弌、蚂蚁集团 Node.js 工程师天玎、蚂蚁集团 Node.js 基建负责人天猪、字节跳动 Node.js 基建负责人段潇涵、蚂蚁集团 Node.js 工程师一君多位 Node.js 领域专家带来了 4 个主题分享。

## gum
https://github.com/charmbracelet/gum

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h4zekkoevxg20xc0go78z.gif)

迷人的 shell 脚本工具库，基于 go。

比如，

```bash
$ gum choose "fix" "feat" "docs" "style" "refactor" "test" "chore" "revert"
$ gum spin --spinner dot --title "Buying Bubble Gum..." -- sleep 5
```

## cmdk
https://github.com/pacocoursey/cmdk

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h4zqlo4el3j20xc0hidgr.jpg)

⌘K 是一个命令菜单 React 组件，也可以作为可访问的组合框使用。你渲染 items，它会负责自动过滤和排序。⌘K 支持完全可组合的 API，所以你可以将项目包装在其他组件中，甚至作为静态 JSX。

## Fluent Emoji
https://github.com/microsoft/fluentui-emoji

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h552x8pvk0j21d10m8tdd.jpg)

Fluent Emoji 是微软提供的熟悉、友好和现代的表情符号集合。黏土风。



## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**DEX 周刊**](https://newsletter.dex.group/)：关于产品、设计、前端、软件的精华资讯邮件列表
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
