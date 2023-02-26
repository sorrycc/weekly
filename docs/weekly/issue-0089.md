---
title: "HTML-first、Node 调试、Dead 组件探测、框架鹰鸽博弈、useSyncExternalStore、沙箱"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01iIBk7G1dNdlU3wQny_!!6000000003724-0-tps-2580-1719.jpg"
titleImageCaption: "Connect"
publishedAt: "2023/02/27"
draft: true
---

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- [parcel](https://github.com/parcel-bundler/parcel/issues/4155) 支持了 exports map 。
- babel [v7.21.0](https://babeljs.io/blog/2023/02/20/7.21.0) 发布，TypeScript v5 支持等。
- CodeSandbox 支持了 [Python](https://codesandbox.io/blog/introducing-python-support-in-codesandbox) 、[Deno](https://twitter.com/CompuIves/status/1628038056618991618) 开发。
- Chrome devtools 提出修改 response header 的 [RFC](https://twitter.com/ChromeDevTools/status/1627654304180981762) 。
- esbuild [v0.17.10](https://github.com/evanw/esbuild/releases/tag/v0.17.10) 发布，支持捆绑含有嵌套语法的 css 。
- pnpm [v8.0.0-alpha.0](https://github.com/pnpm/pnpm/releases/tag/v8.0.0-alpha.0) 发布，默认安装对等依赖项等。
- [Turborepo](https://twitter.com/anthonysheww/status/1628116626506907648) 周下载量近 100w 次。
- Node [v19.7.0](https://nodejs.org/en/blog/release/v19.7.0/) 发布，增强 url 解析等。
- Netflix TV [界面](https://twitter.com/sebastienlorber/status/1628391651835011076)基于 React 。
- [SvelteKit](https://svelte.dev/blog/streaming-snapshots-sveltekit) 新增 snapshot 等功能。
- React Native [v0.72](https://twitter.com/robjhogan/status/1628460899714449416) 发布，实验性支持符号链接等。
- Vercel [cron](https://vercel.com/blog/cron-jobs) 作业已正式可用。
- Turborepo [v1.8.0](https://turbo.build/blog/turbo-1-8-0) 发布，支持项目粒度配置等。
- msw [v1.1.0](https://github.com/mswjs/msw/releases/tag/v1.1.0) 发布，支持 Node fetch 。
- Next.js [v13.2](https://nextjs.org/blog/next-13-2) 发布，Turbopack 改进等。
- unocss [v0.50.0](https://github.com/unocss/unocss/releases/tag/v0.50.0) 发布，实验性支持 postcss 插件方式使用。
- Nodejs 实现了部分[细粒度权限](https://github.com/nodejs/node/pull/44004)。
- TypeScript 部分代码降级到 [var](https://github.com/microsoft/TypeScript/issues/52924) 声明变量。
- Vue 文档新增 [signal](https://vuejs.org/guide/extras/reactivity-in-depth.html#connection-to-signals) 部分。
- Deno [v1.31](https://deno.com/blog/v1.31) 发布，增强 npm 支持等。
- [Marko](https://twitter.com/MarkoDevTeam/status/1629248515930030083) 支持 TypeScript 。
- Expo [v48](https://blog.expo.dev/expo-sdk-48-ccb8302e231) 发布，使用 Hermes 引擎等。
- Vitest [v0.29.0](https://github.com/vitest-dev/vitest/releases/tag/v0.29.0) 发布，支持依赖优化等。
- Bun [新文档](https://bun.sh/docs)上线。

## 深度好文
> 好文推荐。以下是我全文阅读过的部分。

- [《Debugging Node.js, The Right Way》](https://www.builder.io/blog/debug-nodejs)。作者介绍了如何使用 Node.js 进行调试，而不是依赖于 `console.log()`。首先需要使用 `--inspect-brk` Flag 启动Node.js进程，然后打开浏览器的开发工具，连接到 Node 进程。通过使用调试器语句和添加断点，可以方便地调试代码，并且可以通过添加条件断点来跳过不感兴趣的迭代。文章还介绍了如何在 VS Code 中直接调试，以及如何调试通过 `NODE_OPTIONS` 启动的 Node 脚本。
- [《Self hosting in 2023》](https://grifel.dev/decentralization/)。作者介绍了如何将静态页面托管在树莓派上，以及如何设置自己的 DDNS，从而将域名连接到本地服务器。作者通过购买一个二手的树莓派、安装 [Coolify](https://coolify.io/) 和 DDClient 等简单的步骤，仅花费了大约一个小时的时间便将博客部署在了自己的本地服务器上。这样做不仅节约了成本，而且提供了更好的开发体验。文章还提到了一些可能的运营成本，如一次性成本、电费、域名费用等。
- [《React Hooks: Compound Components》](https://kentcdodds.com/blog/compound-components-with-react-hooks)。一篇老文，作者介绍了复合组件的概念，以及如何使用 React Context 来创建具有良好表达性和实用性的组件 API 。它使用一个例子来展示复合组件 API 的好处，以及如何使用 React.cloneElement 和 React Context 来实现它。
- [《Maximising performance with React code splitting techniques》](https://edvins.io/react-code-splitting-techniques)。React 是一个流行的 JavaScript 库，用于构建用户界面，但随着应用程序规模的增长，JavaScript 包的大小会变得很大，导致加载时间慢和性能差。为了解决这个问题，React 提供了多种代码分割技术，允许你将代码分割成更小的块，减少初始 JavaScript 捆绑的大小，提高应用程序的性能。这篇文章介绍了 React 的代码分割技术，包括动态导入、带 Suspense 的 React Lazy、可加载组件、基于路由的代码拆分、预加载、嵌入关键的 CSS 和动态块。
- [《Detecting unnecessarily mounted React components in a large app by Gajus Kuizinas》](https://contra.com/p/EEUr7sRc-detecting-unnecessarily-mounted-react-components-in-a-large-app)。这篇文章讲述了作者在重构代码库时，如何判断哪些页面使用了 Modal 。为此，他使用了一个简单的技术，即添加一个信标，以在 Modal 被加载时注册。作者写了一个工具，利用 RequestBin 来记录每一次 Modal 的渲染，然后通过运行集成测试来看请求日志中的信息，从而找出哪些页面加载了模态。这个技术让作者节省了数小时的调试时间。
- [《Improved type safety in Storybook 7》](https://storybook.js.org/blog/improved-type-safety-in-storybook-7/)。本文介绍了 Storybook 7 中的类型安全改进。Storybook 7为组件 Story 格式（CSF）3和新的TypeScript（4.9+）满足操作者的组合实现了增强的类型安全。新的 Meta 和 StoryObj 类型可以自动推断出组件道具的类型。通过使用 satisfies 操作符，TypeScript现在能够更好地显示这些警告。Storybook 7 测试版中已经可以使用新的 Meta 和 StoryObj 类型。
- [《The case for frameworks》](https://seldo.com/posts/the_case_for_frameworks)。本文探讨了 JavaScript 框架的使用和开发者的自我利益，其中涉及了进化博弈论中的鹰鸽博弈概念。文章指出，即使 JavaScript 框架的性能不佳，但由于其在经济层面的优势，它们仍然非常受欢迎。「当71%的开发者已经在使用React时，招聘React开发者就变得容易了，从经济角度来看，这是一个巨大的优势。」React 作为一个具体的JS框架被讨论，并且指出单页应用程序的开发对于某些网站是很有用的，而 React 可以帮助开发者省去时间和成本。「开发人员是昂贵的。他们的工资最终是由客户支付的。但并不是所有的客户都同样有价值。」
- [《useSyncExternalStore First Look》](https://julesblom.com/writing/usesyncexternalstore)。关于 useSyncExternalStore 的介绍。1）useSyncExternalStore 主要是用于库，但不只是用于库。 它是用来订阅外部状态的，但意义比我想象的要广，浏览器是一个外部存储，你可能想在你的 React 应用中与之同步 它是并发安全的，所以可以避免 UI 中的视觉不一致，2）如果订阅函数参数不稳定，React 会在每次渲染时重新订阅到 Store，3）getSnapshot 函数参数必须返回不可变的值，4）其可选的第三个函数参数 getServerSnapshot 是为了支持 SSR 它必须在初始客户端渲染时返回与服务器上完全相同的数据，这意味着你不能在服务器上读取浏览器的API。 如果你不能在服务器上提供一个初始值，通过在服务器上抛出一个错误并将其包裹在边界中来显示一个回退，使该组件只在客户端使用。
- [《Sandboxing JavaScript Code》](https://healeycodes.com/sandboxing-javascript-code)。作者介绍了几种 JavaScript 沙箱技术。1）vm，但有安全问题，比如 [Sandbox Breakout in VM2 · Issue #467 · patriksimek/vm2 · GitHub](https://github.com/patriksimek/vm2/issues/467#issuecomment-1247515828)，2）[Firecracker](https://jvns.ca/blog/2021/01/23/firecracker--start-a-vm-in-less-than-a-second/)，缺点是部署成本较高，3）[V8 Isolates](https://v8docs.nodesource.com/node-0.8/d5/dda/classv8_1_1_isolate.html)，结合默认安全的 Deno 食用效果更佳，4）[WebAssembly](https://webassembly.org/docs/security)，可能是运行不安全代码的未来。作者选的是方案 3 。
- [《React Libraries for 2023》](https://www.robinwieruch.de/react-libraries/)。
- [《Intro to HTML-first Frontend Frameworks》](https://www.sitepen.com/blog/intro-to-html-first-frontend-frameworks)。本文介绍了 HTML 优先的前端框架，这种框架可以最大限度地减少交付和执行的代码量，提供尽可能好的页面性能。文章列举了一些 HTML 优先的框架，如 Marko 和 Qwik 。这些框架通过使用 Islands、渐进式增强等方法，将页面的一部分交付为完全静态的 HTML ，另一部分为独立的互动应用程序，可以在现有的框架中开发。文末对于[各个 HTML-first 的对比图](https://img.alicdn.com/imgextra/i3/O1CN01QsbMfQ22vrkuI464u_!!6000000007183-2-tps-1666-1034.png)还挺有价值的。

## Umi 和我
> 关于 Umi 和我最近的进展。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）新增 umi ui 基础架子，umi ui 今年可能要回来了，2）约定式路由支持通过 routeProps 声明路由组件的额外属性，3）修复 esbuild 压缩时潜在的命名空间冲突问题，通过配置 esbuildMinifyIIFE 开启。
- 本周围绕 ChatGPT 做了好多事，1）跑通 [hey siri + chatgpt plus 的流程](https://twitter.com/chenchengpro/status/1627837720889528321)，但是没这个使用习惯，用完一天后就没再用，2）为我的知识星球的用户搭了个基于 ChatGPT Plus 机器人的 Telegram 群，3）用 ChatGPT 优化长文阅读的流程，[先让 ChatGPT 总结](https://t.me/yqtalk/221)，然后发现不少文章其实看总结就够了，看需求可能会把这个步骤封装成工具或服务，4）ChatGPT 还可以帮我[修改文章的错别字](https://t.me/yqtalk/217)。
- 点亮了 AI 答疑机器人的技能书，[基于 UMI 文档实现了个 POC](https://t.me/yqtalk/218)。发现这个技能树入门只要几分钟，但深入还是要花不少时间的。
- 体验结果出炉，所有异常指标都下降了，应该和这几个月的每天 1 小时运动有关。
- 把上周到的 Mac Mini 开箱了，然后用之前整理的[《如何从 0 开始配置 MacBook Pro》](https://www.sorrycc.com/posts/macbook-pro-configuration-from-zero)配置了一遍。他的第一个任务是 24 小时跑 ChatGPT Telegram 机器人服务。
- [八方旅人2](https://store.steampowered.com/app/1971650/_II/?l=tchinese) 发售，[已入坑](https://t.me/yqtalk/223)。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单。

- 「重庆腾讯 CSIG 全资子公司」：招聘智慧零售前端开发工程师，base 地「重庆渝北」，要求「计算机或相关专业本科及以上，掌握前端相关技能」，此岗位为腾讯集团旗下全资子公司编制岗位，薪资范围「15-25k\*14」，联系方式「微信号：lishuzuishuai」。
- 「即时设计」：招前端工程师、前端实习生，base 地「北京朝阳区达美中心」，技术栈要求「React、TypeScript、WASM，专注图形学」，薪资范围「15k——30K * 15」，联系方式「shenchen.shao@js.design」。
- 「字节跳动-懂车帝」：招Web前端，base 地「字节跳动-懂车帝」，要求熟悉React、TS、小程序等，有汽车/ToB行业经验者优先，薪资范围「(18-36K)\*15」，联系方式「微信号：bukasy」。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 260 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 266 - 《依赖预打包》
- 265 - 《绩效》
- 264 - 《本地 ChatGPT Telegram 机器人》

## 每周一图

![](https://img.alicdn.com/imgextra/i1/O1CN01M0SQZ31djANZJoxh8_!!6000000003771-0-tps-1079-1155.jpg)
