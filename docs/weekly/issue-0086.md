---
title: "WIP：吐槽 React、React 清依赖小技巧、Darkmode、霞鹜文楷"
titleImage: ""
titleImageCaption: ""
publishedAt: "2023/02/06"
draft: true
---

## 一周要事

关于 docaid。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- [Astro 官方](https://houston.astro.build/)和 [Remix 社区](https://remix.polymath.chat/)推出了自己的 AI 文档，基于 OpenAI 智能解答。
- 代码编写 PPT 工具 Slidev 支持了幻灯片一样的[切换动画](https://twitter.com/antfu7/status/1619536044311089154)。
- [PS5 的用户界面](https://twitter.com/syke/status/1619413099861413889)由 React Native 编写。
- 现在 CSS 属性已经有 [570](https://www.w3.org/Style/CSS/all-properties.en.html) 个了。
- [Import maps](https://caniuse.com/import-maps) 即将获得跨浏览器平台的支持性。
- 模块联邦作者 Zack Jackson 近几周在投入 [Rust Webpack](https://twitter.com/ScriptedAlchemy/status/1619951813687660544) ，30 天内会[开源](https://twitter.com/ScriptedAlchemy/status/1621220073192189952)。
- Nextjs 原生支持配置页面级 [SEO](https://twitter.com/leeerob/status/1619743437577912321) 属性。
- [Nextjs](https://github.com/vercel/next.js) 有 100k stars 了，高于 CRA 的 98k stars 。
- Dan 表示 [CRA](https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741) 将变成一个 React 项目启动器，本身不再和某个框架强绑定。
- Tailwind v4 的[愿景](https://twitter.com/adamwathan/status/1620261896611061760)是在 css 中完成配置，无需 js 配置文件。
- Jotai [v2.0.0](https://github.com/pmndrs/jotai/releases/tag/v2.0.0) 发布，API 推陈出新，支持 React 外修改数据。
- Bun [v0.5.2](https://bun.sh/blog/bun-v0.5.2) 发布，支持运行 Webassembly 等。
- Astro 获得 [StackShare](https://stackshare.io/posts/top-developer-tools-2022#new) 技术工具奖第一名。
- [Apple music](https://music.apple.com/cn/browse) 站点由 [svelte](https://svelte.dev/blog/whats-new-in-svelte-february-2023) 编写。
- Instagram 旗下新产品 [Artifact](https://artifact.news/) 由 sveltekit 编写。
- Nextra [v2](https://the-guild.dev/blog/nextra-2) 发布，体系化的 mdx 支持。
- Nodejs [v19.6.0](https://nodejs.org/en/blog/release/v19.6.0/) 发布，内置 npm v9.4.0 支持符号链接安装依赖策略。
- [Github](https://github.blog/changelog/2023-02-02-add-more-social-links-to-your-user-profile/) 个人资料支持添加更多社交媒体链接。
- Netlify [收购](https://www.gatsbyjs.com/blog/gatsby-is-joining-netlify/) Gatsby 。
- Alibaba Chengzhong Wu 同学的 tc39 提案 [async context](https://github.com/tc39/proposal-async-context) 进入 stage 1 。
- Vscode [v1.75](https://code.visualstudio.com/updates/v1_75) 发布，多配置文件预设化，可打包导入导出等。
- TC 39 最新一次[会议](https://twitter.com/robpalmer2/status/1621234674327605248)推进了 Change Array by Copy 等提案。

## 深度好文
> 好文推荐。这周好文真多，以下是我全文阅读过的部分。

- [《React I Love You, But You're Bringing Me Down》](https://marmelab.com/blog/2022/09/20/react-i-love-you.html)。骂得好，哈哈，爱之深，责之切啊。如果你想吐槽 React，照着念就完了。1）表单没有稳定官方方案，一路用社区库过来，目前相对好的是 [Formik](https://formik.org/) 和 [React-hook-form](https://react-hook-form.com/)，看看人家 Svelte，2）Context 太敏感，一碰就 re-render，为了性能而拆大量的 Provider 瀑布流组件，太难看了，提供一个 useContextSelector 有那么难吗？3）关于 DOM 和 ref，React.forwardRef + TypeScript 写通用组件太难了，同时 ref 不仅仅是 关于 dom，每次用 ref 都是因为 useEffect API 太奇怪，换句话说，refs 是对 react 创造的问题的一种解决方案，4）关于 useEffect，需要阅读一篇 [61 页](https://t.me/yqtalk/164) 的论文才能用好也太难了，看看人家 Solid.js，5）关于 Hooks 规则，[Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) 不容易记住，6）关于老父亲 Facebook，略。那作者为啥还留下？因为「It's the ecosystem, stupid.」
- [《Why React isn't dying》](https://tkdodo.eu/blog/why-react-isnt-dying)。来自 TkDodo，有点像是对前一篇文章的回应，解释为啥 React 不会挂（或者短期不会挂）。其实前一篇文章已经给出答案了，是「生态」。1）React 有人，React 占据了大部分前端工作，2）React 有库，React 社区拥有大量最好的三方库。的确，现在已经有一些解决方案在某些方面 "比React更好"。更现代，更高性能，不同的范式，"真正的反应式"，… 但是要打败 React，让大量开发者和生态迁移过去，需要有比 React 「好地多」的东西，现在的这些优点还不够。同时，React 虽然不是最好的，有更好的方案，但对于现在的大部分项目来说，React 已经「足够好」。
- [《Little React Things: Cleaning up dependencies - Zeke Hernandez》](https://www.zekehernandez.com/posts/cleaning-up-dependencies)。Zeke Hernandez 介绍了一个减少列表项 rerender 的小技巧，虽然对用户来说性能提升不明显，但至少打开 react devtool 的「Highlight Updates」时会看起来很爽，这就够了。方法是，event handler 用 useCallback 包一下，同时清空依赖，没有依赖就不会触发 event handler 生成新的了。那依赖怎么清？1） setState 无需写入依赖，2）setState 用 function 的形式。
- [《4 Common Mistakes Made by Node.js Developers》](https://amplication.com/blog/4-common-mistakes-made-by-nodejs-developers)。文章介绍了 4 个 Node 开发的常见错题。1）没有明确定义的日志级别，可尝试 winston, pino, morgan 等库，2）无脑选择 Docker 基础镜像，又大又耗性能，比如 node:18 300M+，选 slim 或 alpine 就够了，slim 70M，alpine 50M，3）签署 JWT 时不使用非对称加密，对称加密不够安全，4）Storing passwords without unique salting。
- [《Forking Chrome to render in a terminal》](https://fathy.fr/carbonyl)。在 Terminal 里跑 Chrome，没看懂，不明觉厉。
- [《Learn Images》](https://web.dev/learn/images/)。web.dev 出品的 Image 学习课程，推荐收藏，用到时再看。
- [《A Theory of Web Relativity - HTMHell》](https://www.htmhell.dev/adventcalendar/2022/21/)。rel 属性详解，肯定有你不会的，推荐收藏，用到时再看。
- [《Darkmode》](https://typefully.com/DanHollick/UceA0ne)。Dan Hollick 关于暗黑模式的文章。即使两组颜色的数学对比度相同，但人们对于对比度的感知也会不一样，所以并不是简单地将色阶颠倒过来就可以了。作者的解法是根据 [APCA](https://twitter.com/DanHollick/status/1468958644364402702?s=20) 对比度来创建灰度尺，这更能反映出人类的感知。WCAG 3 也会用 APCA (Advanced Perceptual Contrast Algorithm) 作为新的颜色对比度方法。
- [《learning-zone/nodejs-basics: Node.js Basics ( v18.x )》](https://github.com/learning-zone/nodejs-basics)。Node 基础，看起来是好资源，但是太长没看，推荐收藏。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行[每周四发一版](https://github.com/umijs/umi/releases)，我觉得有趣的功能包括，1）增加 prepare 阶段，大功能，这个阶段会用 esbuild 跑一遍源码文件的编译，以此来拿到各种源码信息，幽灵依赖检测、icons 方案、mfsu 依赖分析、esmi 依赖分析都会基于此，2）优化了 Umi 的启动速度，方法就是通过懒加载模块，那怎么知道哪些地方慢呢？我们做了个功能可以收集每个插件的每个 hook 的执行时间，3）更新 did you know 数据，提供更多 Tips。
- 冲着[把 Umi 排在 Next.js 之前](https://t.me/yqtalk/158)，买了一本卡颂的「React 设计原理」，到了但还没拆。
- 做了一段时间的[心理建设](https://t.me/yqtalk/155)后买了[新的 MBP](https://t.me/yqtalk/157)，这几天每天都要查一遍发货了没，预计生产力 +1。
- 把 Obsidian、mdhweekly 官网、语雀的字体都[换成霞鹜文楷](https://t.me/yqtalk/163)，生产力瞬间 +1。
- 买了刘飞的 [Midjourney进阶创意库｜2023](https://xiaobot.net/p/MJ2023)，有收获，Prompt 水平 +1。
- GMTC 2023 北京的专题被合到其他专题，出品人经验 -1。
- 调整了时间安排，把读书时间挪到中午，然后晚上挤出 1 个小时把英语学习安排进去，向 pigcan 请教了学习方法，他说要「read aloud」，我想到了李阳，目前已开始实施。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单，有求职需求的请在 https://docs.qq.com/form/page/DY291a3BOdGR3TnRT 填写表单。

- 「浩鲸科技」：招聘 React 前端开发，base 地「福建福州」，要求「熟悉 Umi 全家桶，并对低代码平台有一定的了解，能独立研发组件资产」，薪资范围「10-18k」，联系方式「448627663@qq.com」或「18050322490 加微信」。
- 「重庆腾讯CSIG全资子公司」：招聘智慧零售前端开发工程师，base 地「重庆渝北」，要求「计算机或相关专业本科及以上，掌握前端相关技能」，此岗位为腾讯集团旗下全资子公司编制岗位，薪资范围「15-25k*14」，联系方式「微信号：lishuzuishuai」。
- 「美餐网」：招聘「前端开发工程师」，base 地「北京-朝阳区-酒仙桥」，做「做基建/DX/提效相关的工作，面向内部开发人员，23年有计划做内部开源（github）」，薪资「20k-40k」，联系方式「zhaodonghao586@outlook.com」。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 250 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 255 - 《Bigfish Checker》
- 254 - 《关于语法高亮》
- 253 - 《工作目标 2023》
- 252 - 《读书笔记：李诞脱口秀工作手册》
- 251 - 《新文档方案 Docaid》
- 250 - 《Mock 方案调研》

## 每周一图

![](https://img.alicdn.com/imgextra/i2/O1CN01NURoCS1i4TGGrA3Pr_!!6000000004359-0-tps-1150-680.jpg)
