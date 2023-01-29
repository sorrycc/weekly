---
title: "中国前端开发者、React Re-Renders、fetchpriority=high、Marta"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01mgKVEO1oVqcvyUNOS_!!6000000005231-0-tps-1620-1080.jpg"
titleImageCaption: "kevin_w_ @ unsplash"
publishedAt: "2022/08/22"
---

本周有这些内容想和你分享：

- 中国前端开发者
- React Re-Renders
- fetchpriority=high
- Marta
- TL 沟通
- 浏览器插件开发

## 中国前端开发者
https://github.com/sorrycc/chinese-f2e-developer

为什么会有这个仓库？前几日转了 Yingci 的文章「国内 FE 圈常见用语方法论」 到我的公众号，发现大家对这个还挺感兴趣，因为这篇是我的公众号留言最多的一篇。。与此同时，发现遗漏了不少同学，以及一些描述可能不准确，所以在 Github 上整理一份，可以大家一起协同维护更新，也方便更多同学了解前端社区。

什么样的同学可以加入到这个列表？暂定是「活跃、有一定社区影响力、关注后能带来收获的开发者」，不再活跃的开发者会定期挪到「不活跃」标题下。同时介绍部分可以贴上链接宣传下自己的作品、书或服务。如有不准确的描述或者不希望出现在这个列表上，也可 PR 删除。

个人视野有限，请不吝 PR！缓慢施工 🚧 中。

## React Re-Renders
https://www.joshwcomeau.com/react/why-react-re-renders/

通过这篇文章，我学到了「两个误解」、「一个比喻」和「一个技巧」。

两个误解是，1）state 变更会让整个 app re-render？不是，state 变更只会让当前组件及其子组件 re-render，2）组件 re-render 是因为 props 变更？也不是，props 往上可以追溯到 state 变更，是 state 变更导致了子组件 re-render，而不是由 props 变更引起。

上述误解 2 的一个例外是 React.memo，应用 React.memo 后的组件只有 props 变更才会触发 re-render。你可能会想：为什么这不是默认行为？因为作为开发者，我们往往高估了重新渲染的成本。对于 props 很多且没有很多子组件的组件来说，相比 re-render，检查 props 是否变更带来的消耗可能更大。因此，如果对每个组件都进行 React.memo，可能会产生反效果。

一个比喻是，每次渲染都是由照相机拍摄的快照，React 通过玩「找不同」的游戏找出两张照片之间的差异，然后决定是否 re-render。而 React.memo 则是懒惰的摄影师，如果你要求他为完全相同的东西拍 5 张照片，它会拍 1 张照片并给你 5 份。只有当你的指令改变时，他才会拍下一张新的照片。

一个技巧是，借助 React Devtools Chrome 插件，在「设置 > Profiler」里开启「Record why each component rendered while profiling」，再通过录制的方式排查，就能知道每个 re-render 的原因。

![](https://img.alicdn.com/imgextra/i4/O1CN01CZMeYN1vyQeey6xaB_!!6000000006241-1-tps-1920-1080.gif)

## fetchpriority=high
https://addyosmani.com/blog/fetch-priority/

![](https://img.alicdn.com/imgextra/i1/O1CN01UNfsoh1GM3DfpMJAm_!!6000000000607-0-tps-1920-1080.jpg)

给 LCP（最大内容渲染）图片加上 `fetchpriority="high"` 可以让图片更快加载，Etsy 基于此让 LCP 速度提升 4%，还有其他站点能提升 20% 到 30%。除了图片，fetchpriority 还可作用于 CSS、字体、脚本 和 iframe。

fetchpriority 和 Preload 有啥区别？Preload 用于发现不可见的资源，比如背景图片、依赖脚本加载才能发现的资源文件等。而 fetchpriority 只负责调整优先级，和「发现」无关。

fetchpriority 和 loading=eager 有啥区别？设置了 eager 的图片和 iframe 优先级也没有 fetchpriority 高。

## Marta
https://marta.sh/

![](https://img.alicdn.com/imgextra/i3/O1CN01RPp66t1d4P7gDknSy_!!6000000003682-0-tps-1744-1080.jpg)

Marta 是一个双窗格文件管理器。用了一周，感觉比原生 Finder 好用不少。大多数时候，你在工作中使用两个并排放置的目录面板。它允许你以快速和有效的方式进行基本的文件操作，如复制或移动文件，因为你可以看到源目录和目标目录，你可以直接复制或移动文件，而不是复制粘贴。

Marta 是以键盘为中心的：大多数操作是通过键盘完成的。所有的键绑定都是可配置的。你可以在 "键绑定" 部分阅读如何设置热键。

## TL 沟通
https://addyosmani.com/blog/communication-tech-lead/

![](https://img.alicdn.com/imgextra/i3/O1CN012CggOG1J4ayEOTAYw_!!6000000000975-0-tps-2108-1040.jpg)

Addy Osmani 的新作，从 Simplify、Be concise and on point、Communicating with executives、Listen、Be proactive、Be thorough 和 Take notes 7 个维度介绍作为 TL 时如何高效沟通。

## 浏览器插件开发
https://daily-dev-tips.com/tags/browser-extensions/

![](https://img.alicdn.com/imgextra/i3/O1CN01tPza2T1yBpTSQNpg5_!!6000000006541-0-tps-1588-640.jpg)

简短有用的一系列浏览器插件开发教程。
