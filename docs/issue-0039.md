# MDH 前端周刊第 39 期：MDX 2、React 2022、Notion API Blog、Sponsor Only 仓库、upgit

**这是 「MDH：前端周刊」 第 0039 期，发表于：2022/02/07。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://tva1.sinaimg.cn/large/008i3skNly1gz2w4bgv8lj318u0u0wkk.jpg)

封面图：kasiape @ www.unsplash.com 。


## ❄️ TL;DR

👉 MDX 2<br />
👉 React 2022 趋势<br />
👉 手写 Schema 表单<br />
👉 Notion API Blog<br />
👉 Sponsor Only 仓库<br />
👉 React 故事<br />
👉 upgit<br />

## ⚡ 展开讲讲

### MDX 2
https://mdxjs.com/blog/v2/

MDX 可以给静态站点带来交互式的内容，这也是 Umi 4 新官网的选择。

MDX 2 最主要是 MDX 语法的改进。1）支持 JSX 中嵌 Markdown 语法，这是 MDX 1 中遇到最多的问题之一；2）支持 JavaScript 表达式，比如 `{2 * Math.PI}` 会转成 6.283185307179586。

然后是性能上的改进。借助 esbuild，让编译快 25%，同时产物运行速度提升 100%，@mdx-js/mdx 包小 250%。

### React 2022 趋势
https://www.chakshunyu.com/blog/what-you-should-definitely-look-out-for-in-react-in-2022/

作者给了几个，包括 Remix、SSR、Concurrent Rendering、Behaviour Testing。

Remix 之前已经聊过很多遍，特点是性能、渐进增强、嵌套路由、平行数据加载、自定义错误处理、路由级 CSS 装载和卸载等；SSR 虽然借由 Next.js 和 Gastby 已经可以做，但 React 18 带来的 Suspense、HTML streaming 和 selective hydration 会在这领域带来很多机会；Concurrent Rendering 是 React 18 另一个大惊喜，我们需要任务之间有优先级和紧迫性的差异，而现在的 React 状态更新是同步的；Behaviour Testing 是相对于单测来说的，对用户行为进行测试，比如点了按钮之后会发生什么，主要是借助 React Testing Library。

### 手写 Schema 表单
https://www.taniarascia.com/schema-based-form-system/

![](https://tva1.sinaimg.cn/large/008i3skNly1gz1miulag9j30rs0jg3zs.jpg)

觉得手写表单麻烦吗？试试 Schema 表单吧。

作者手写了基于 Schema 的表单系统，提供 DEMO 和源码。实现上主要是把 JSON 格式的 schema 转化为 react 组件。表单处理基于 Formik 和 Yup，前者用于表单数据和提交，后者用于校验。

想要现成的 Schema Form 方案？可以试试 react-jsonschema-form、formily、jsonforms 或 sula。

### Notion API Blog
https://www.coryetzkorn.com/blog/how-the-notion-api-powers-my-blog

![](https://tva1.sinaimg.cn/large/008i3skNly1gz2vb6aw7nj31c00u0q76.jpg)

技术栈基于 Next.js、TypeScript 和 Notion API，然后主要是 3 步。

1、创建 Notion DataBase
2、Next.js 中通过 getStaticProps 分别获取 posts（列表） 和 post（文章），基于 Notion API
3、部署

有个坑点是 Notion Block 返回的文件（含图片）只有 1 小时有效时间，需特殊处理。虽然作者给了 3 个方案，但要么损失静态性能，要么太花时间，需自行评估。(编者注：基于 Notion 文件失效问题，也可以考虑换 Github ISSUE、语雀、Google Sheet 等作为 CMS 数据源)

此外，基于 Notion 搭建站点还有省时间但费钱的方案，比如 potion.so 和 super.so。

### Sponsor Only 仓库
https://github.blog/2022-02-02-new-sponsors-only-repositories-custom-amounts-and-more/

![](https://tva1.sinaimg.cn/large/008i3skNly1gz2waxt28ej318g0nmq44.jpg)

Github 支持 Sponsor Only 仓库，就是某些仓库只有 Sponsor 才能访问。个人感觉 Github 官方开这个功能不太好，会带出一种风气，导致大量私库的出现，和开源的风气背道而驰。

之前其实大家也有非官方的路子，把 Sponsor 拉到一个 organization 下，然后在此建私库，比如 slidev 和 motion.dev 就是如此。现在这个功能官方化了。

### React 故事
https://www.youtube.com/watch?v=Wm_xI7KntDs

![](https://tva1.sinaimg.cn/large/008i3skNly1gz2uty7onlj319s0jqgmq.jpg)

想知道 React 是如何一步步走到现在的？作者用视频的方式简单幽默做了回顾，从 jQuery 和 Backbone 到 Next.js 和 Remix。对于 React 初学者来说应该挺有意义的。

### upgit
https://github.com/pluveto/upgit

![](https://tva1.sinaimg.cn/large/008i3skNly1gz3l5mlj1yj306a021web.jpg)

内置在 Typora 中的图片上传工具，目前支持上传到 github 或 sm.ms。Typora 之前用 PicGo，但由于太臃肿，Typora 自己实现了一个轻量版的，基于 Go。

我基于这个做了个简单的 ShortCuts，基本可以代替 iPic 的功能了。


## 🕒 订阅

本期刊有几种订阅方式，

1、本期刊已开通 **NewsLetter** 的订阅方式，方便不喜欢公众号阅读的朋友们，访问 **[https://mdhappy.substack.com/](https://mdhappy.substack.com/)** 或扫描下方二维码了解详情。

<img src="https://img.alicdn.com/imgextra/i3/O1CN01fgWXv11SlwvuAiz0i_!!6000000002288-2-tps-422-424.png" width="215" />

2、微信搜索 **「云谦和他的朋友们」** 或扫描下方二维码，在我的公众号订阅更新。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
