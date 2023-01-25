---
title: "Lightning CSS、Tailwindcss、HTTPie AI、chalk-next 投毒"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01YIpZt11HjhHgKYa6O_!!6000000000794-2-tps-1536-1024.png_1200x1200.jpg"
titleImageCaption: "赛博朋克版的托马斯"
publishedAt: "2023/01/09"
---

## 一周新闻
> 推荐下 YingCi 的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯，也是本文新闻的重要渠道之一。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- Qwik 用 rust 借助 swc [写了优化器](https://github.com/BuilderIO/qwik/pull/2545)，随着会 rust 的人越来越多，swc 的 rust 扩展在社区的应用越来越广了，umi 这周也完善了 mfsu + swc 的场景。
- StyleX [更新 Beta 版](https://stylex-docusaurus-nmn.vercel.app/)，但依旧没放出源码。这是在吊胃口，还是对代码没信心？
- 新 nodejs 官网[开发中](https://github.com/nodejs/nodejs.dev)，技术栈是 Gasby + React + TypeScript + Stackblitz。
- 之前还在说 markdown rs 不能 js 调用，nextjs 已经把他[打包成 wasm 集成进去](https://nextjs.org/docs/advanced-features/using-mdx#using-rust-based-mdx-compiler-experimental)了。
- Lightning CSS [发布 1.18](https://github.com/parcel-bundler/lightningcss/releases/tag/v1.18.0)，支持[用 JavaScript 调用的 visitor API](https://lightningcss.dev/transforms.html)，比 postcss 快 6 倍。
- proxy-memoize [发布 2](https://github.com/dai-shi/proxy-memoize/blob/main/CHANGELOG.md#200---2023-01-05)，valtio 背后的响应式基础库，你也可以发挥想象将他用于其他场景。
- React 官网（Beta）[更新 useEffectEvent 相关文档](https://beta.reactjs.org/learn/separating-events-from-effects#declaring-an-effect-event)。
- VitePress 项目可以 [0 配置部署到 Vercel](https://vercel.com/changelog/vitepress-projects-can-now-be-deployed-with-zero-configuration) 了。
- React Native [即将发布 0.71](https://github.com/facebook/react-native/releases/tag/v0.71.0-rc.5)。
- Roadmap [更新 2.0](https://roadmap.sh/)，技术栈是 astro + tailwindcss。
- Tailwindcss 刚刚超越 Bootstrap 成为 [npm 下载量最大的 css 框架](https://npmtrends.com/bootstrap-vs-tailwindcss)。
- HTTPie [发布 HTTPie AI](https://httpie.io/blog/ai)，用人类语言发送请求，实现基于 OpenAI 的 GPT-3 模型。ai 都可以发请求了，感觉 ai 写页面也快了。
- 又[有 npm 包投毒了](https://twitter.com/ewind1994/status/1610868861976604673)，这次是「[vabjs](https://www.npmjs.com/~vabjs)」的「chalk-next」，你的项目锁版本了吗？
- React Native [将 TypeScript 作为一等公民](https://reactnative.dev/blog/2023/01/03/typescript-first)来支持，文档也是 TypeScript First。
- Next.js 脚手架将支持[使用 Bun 作为 Package Manager]()。
- pnpm [发布 7.23](https://github.com/pnpm/pnpm/releases/tag/v7.23.0)，支持 resolve-peers-from-workspace-root 配置，顾名思义，就是用根路径来 resolve peerDependencies。
- Jamiebuilds 实现了一个[现代版的 Redux + RTK](https://twitter.com/buildsghost/status/1590924907546021888)，MVP 阶段，暂未开源。
- 微软计划[将 ChatGPT 整合到 Bing 的搜索结果](https://www.theinformation.com/articles/microsoft-and-openai-working-on-chatgpt-powered-bing-in-challenge-to-google)里，Google 感受到危机了吗？
- [OpenAI 估值 290 亿美元](https://www.wsj.com/articles/chatgpt-creator-openai-is-in-talks-for-tender-offer-that-would-value-it-at-29-billion-11672949279)，比 1 年前的 140 亿增长了一倍以上。
- 苹果公司有一个[新的有声读物服务](https://authors.apple.com/support/4519-digital-narration-audiobooks)，使用人工智能来叙述书籍。现在，它只适用于英语的爱情和小说书籍，而且只有两种声音，即麦迪逊和杰克逊。
- [RustScan](https://github.com/RustScan/RustScan)，看名字就感觉很快了，可以在 3S 内检测 65K 个端口。
- [Sailboat UI](https://sailboatui.com/) 是基于 Tailwind CSS 的 UI 框架，包含 150+ 开源 CSS 组件。不过这 150+ 的计算方式比较奇特，比如 Pagination 的不同类型是算 5 个的。
- [publint](https://publint.dev/) 是用于检测 package.json 有没有问题的服务，@PeachScript，father doctor 的新需求来了。
- [Mafs](https://mafs.dev/) 是一套关于数学的交互式 React 组件。
- [superdiff](https://github.com/DoneDeal0/superdiff) 可以用于对比数组或对象，然后返回完整的可读的 DIFF。听着像是超级英雄的名字，但估计还是打不过 Rust 实现的 Diff 工具。
- [react-ts-form](https://github.com/iway1/react-ts-form)，看名字就知道，这是个主打 TypeScript 类型安全的表单库。
- [Type-Level TypeScript](https://type-level-typescript.com/)，新出的付费 TypeScript 课程，只卖 $39（我没收广告费）。
- [Doppio](https://doppio.sh/) 是一个 Headless Browser 服务，今天（2023.1.7）早上收到的推广邮件，还没尝试。

## 深度好文
> 好文推荐。

- [《Zustand vs. Signals》](https://medium.com/@kevinschaffter/zustand-vs-signals-e664bff2ce4a)，作者从 DX、性能和 Devtool 三个方面了对比这两个「小众」的状态管理库，简单说就是，1）Zustand 生态和周边更好，而 Signals 性能更好和更自动，2）作者下一个大型项目的选择还是 Zustand，因为对 Signals 的实践以及用的 React 内部 API 不太方向。
- Evan You 写了一篇 [《2022 Year In Review》](https://blog.vuejs.org/posts/2022-year-in-review.html)，介绍 2022 总结和 2023 规划。2022 主要是默认 Vue 3、Volar 1、Vue Npm 下载量 x2、回传 Vue 3 功能的 Vue 2.7；2023 则是细粒度 Mirror 版本、类 Solid 的 Vapor Mode 编译模式等。
- [《2023年，这9个项目助你成为前端高手》](https://mp.weixin.qq.com/s/ivZzXb0XpOYGTcN2rU3e-g)，如果你不知道写点啥来练手，可以从这里找找灵感，包括电影搜索 App、聊天 App、天气 App、TODO List App、购物车 App、多语言博客、音频播放器等。
- [《How to ship》](https://www.industrialempathy.com/posts/how-to-ship/) 包含了 4 个关于产品如何准时发布的 Tips，1）明确 MAVP（最小实际可行产品）的边界，注意不是偏 DEMO 类的 MVP，2）在前者的基础上削减范围，3）搭配可灵活调整的 Deadline，4）别让自己成为团队卡点。
- [《Compress An Image Before Upload With JavaScript》](https://pqina.nl/blog/compress-image-before-upload)，作者介绍了一个方法，在上传图片之前用 JavaScript 压缩图片，避免上传文件太大时间过长。方法是，1）用 createImageBitmap 读取文件数据，2）用 canvas 把数据画出来，3）通过 toBlob 方法返回压缩后的 JPEG 格式的文件（也可以要求 webp，但 safari 不支持）。此外，也可以试试作者一个 13k star 的 [filepond](https://github.com/pqina/filepond) 库做图片上传。
- [《React ref Callback Use–Cases》](https://julesblom.com/writing/ref-callback-use-cases)，你可能不知道 ref 除了是 object 以外，还可以是 function，即 ref callback。ref callback 有一些应用场景，比如 mount 时（新增一个 list item 时）做滚动或聚焦、计算 DOM 尺寸或滚动位置、传递 DOM 给多个消费者等。
- [《A React Developer’s First Take on Solid》](https://jakelazaroff.com/words/a-react-developers-first-take-on-solid/)，一个 React 开发者对 Solid 的第一印象。1）Solid 的优点是小和快，2）同时也有一些由于引入 Proxy 以及 Solid 不同的组件渲染机制后的缺点，比如 prop 不能在函数参数里析构等，3）SolidStart 是一个测试软件，有大量粗糙的边界场景，4）会在真实项目中用吗？不会！
- [《Getting started with SolidStart》](https://blog.logrocket.com/getting-started-solidstart-solid-js-framework/)，SolidStart 入门文章，手把手教你写一个旅行 App。注：SolidStart 是基于 Solid 的元框架。
- [《JavaScript Rising Stars 2022》](https://risingstars.js.org/2022/zh)，一年一期，这是第 7 期，可以了解 2022 JavaScript 社区的变化，但是以 Github Star 为衡量标准，并不能完全代表其流行度。
- [《The 5% Rule》](https://jonpauluritis.com/articles/5-percent-rule/)，5% 的人不管你怎么对待他们，都会很糟糕。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行[每周四发一版](https://github.com/umijs/umi/releases)，我觉得有趣的功能包括，1）新增 icons 方案，这是我目前能想到最好的使用 Icon 的方式，2）build 时增加构建进度条，3）public 目录新增删除支持热更，无需重启 dev server，4）MFSU 支持 SWC 作为编译器。
- 花了两个下午（4hx2）完成 Umi 新的 Icons 方案，还有大量细节待完善，技术栈是 esbuild + svgr + iconify。
- 接了个其他团队的周会分享介绍我的工作流和信息流，于是先[画了张关于「我的信息流」的图](https://t.me/yqtalk/104)，有点丑，大概是这意思。
- 一个新的脚本习惯是，先 `touch test.ts`，写点代码，然后 `bunx esno test.ts`，bunx 真是太快了，感觉 esno 是本地包一样。
- 学到一个 [Bash 技巧](https://twitter.com/wesbos/status/1610707465473081347)，让 touch 和 take 可以自动创建目录。
- 收到[颜海镜的新书《现代 JavaScript 库开发》](https://t.me/yqtalk/89)，写的文字第一次出现在纸质书上，但是是以推荐语的形式，希望下次是自己出版的书。
- 这篇周刊的整理耗时 116 分钟，希望能减少到 1h。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 230 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 241 - 《我的信息流 2023.1》
- 240 - 《简繁转换的 3 个方案》
- 239 - 《Umi 新 Icon 方案的介绍和实现》
- 238 - 《幽灵依赖》
- 237 - 《2023 年应该如何做事》

## 每周一图
![](https://img.alicdn.com/imgextra/i4/O1CN01oOPptT1jydRXvVSpK_!!6000000004617-2-tps-721-660.png)

ChatGPT 在反压缩 JS 的同时，还能加上一些有意义的变量名。
