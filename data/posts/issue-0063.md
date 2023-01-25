---
title: "迁移最佳实践、程序员成长路径、Story 7 新设计、React Query 4"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01aXjeGH1nOgp3LhHu2_!!6000000005080-0-tps-1732-1080.jpg"
titleImageCaption: "seefromthesky @ unsplash"
publishedAt: "2022/08/01"
---

本周有这些内容想和你分享：

- 迁移最佳实践
- 构建你自己的框架
- 程序员成长路径
- :has 选择器
- Storybook 7 新设计
- React Query 4

## 迁移最佳实践
https://frontendmastery.com/posts/frontend-migration-guide/

作为一个有几年经验的前端，你应该多少都有经历过涉及迁移的项目，可能是框架的迁移（比如从 Vue 到 React），可能是工具或者库的迁移。引入新的更有效率的东西长期看可以改善代码环境和提高工作幸福度，但迁移过程往往是痛苦的。你可能会遇到没写注释没写测试的边界场景代码，你的项目在迁移过程中可能无法承接新的需求，或者可能由于优先级的原因迁移一半之后被停掉。

文中介绍了几种迁移时可以考虑的策略。第一个维度是大爆炸式 vs. 渐进式。大爆炸式是一次性完成更新，好处是可以避免长时间的过渡性状态，缺点是风险较高；渐进式是长期的，优缺点和前者相反，但要注意别长期出于过渡状态里。

渐进式也有两个选择，由上到下和由下到上。由上到下指先迁移外壳然后再一层层地迁移路由层；由下到上是指先从最下面的原子组件和路由迁移做起，最后迁移外壳。通常来说，由上到下会更合适，一开始比较困难，后面会变得简单。

迁移过程是痛苦的，通过一些策略可以减少这种痛苦。包括拆分里程碑、对外获得对迁移计划的支持、跟踪进度、投入时间到 codemod 等自动化工具中、通过 eslint 规则强制执行规则、文档，等等。

## 构建你自己的框架
https://vercel.com/blog/build-your-own-web-framework

![](https://img.alicdn.com/imgextra/i1/O1CN01KNnlAk1JBSuUqn7Ja_!!6000000000990-0-tps-1443-953.jpg)

基于 Vercel 提供的能力和新的 Build Output API，可以轻松构建你自己的 Web 框架，部署到 Edge 和 Serverless 服务上，支持静态文件、ISR（增量静态文件生成）、Edge 函数、Serverless 函数、自动图片优化、Edge 缓存等。

## 程序员成长路径
http://www.engineeringladders.com/

![](https://img.alicdn.com/imgextra/i3/O1CN014QV18U1sgcP0a3Vve_!!6000000005796-0-tps-750-608.jpg)

主要是上面这张雷达图，包含技术、系统、人、过程、影响力五个维度，不同的岗位角色和职级对能力雷达有不同要求。角色包含开发者、Tech Lead、Technical Program Manager 和 Engineering Manager，参考的是美国科技行业的角色和层级，也可以对标国内大厂的 Job Model。大家可以找找自己所在的位置和考虑之后的成长方向。

以下内容为通过 DeepL 机翻所得，供参考。

**技术。** 1）采用：积极学习和采用团队定义的技术和工具 2）专业：是一个或多个技术的首选，并主动学习新技术 3）传播：研究、创建概念证明并向团队介绍新技术 4）大师级：对系统的整个技术栈有非常深入的了解 5）创造：设计和创造新技术，被内部或外部团队广泛使用。

**系统。** 1）增强：成功推送新的功能和错误修复，以改善和扩展系统 2）设计：设计和实现大中型功能，同时减少系统的技术债务 3）运营：拥有系统的生产运营和监控，并了解系统的SLA 4）发展：发展架构以支持未来的需求，并定义其服务水平协议 5）领导：领导系统的卓越技术，并制定计划以减少故障。

**人** 1）学习：迅速向他人学习，并在需要的时候始终挺身而出 2）支持：积极主动地支持其他团队成员，帮助他们取得成功 3）指导：指导他人加速他们的职业成长，并鼓励他们参与 4）协调：协调团队成员，提供有效的反馈并主持讨论 5）管理：管理团队成员的职业、期望、业绩和快乐程度。

**‌过程** 1）遵循：遵循团队的流程，向生产提供一致的功能流 2）执行：执行团队的流程，确保每个人都明白其中的好处和权衡 3）挑战：挑战团队的流程，寻找改进的方法 4）调整：调整团队流程，听取反馈意见并指导团队进行改变 5）定义：为团队的成熟度定义正确的流程，平衡敏捷性和纪律性。

**影响力** 1）子系统：对一个或多个子系统产生影响 2）团队：对整个团队产生影响，而不仅仅是对其特定部分产生影响 3）多个团队：不仅对他/她的团队产生影响，也对其他团队产生影响 4）公司：对整个技术组织产生影响 5）社区：对技术社区产生影响。

## `:has` 选择器
https://blog.logrocket.com/advanced-guide-css-has-selector/

`:has` 是 Level 4 选择器，关系型伪类，是用于检查一个元素是否包含某些子元素，将在 Chrome 105 上完全支持，预计其他浏览器也会跟上，Chrome 101 到 104 可在 chrome://flags 里手动开启「Experimental Web Platform features」支持。

![](https://img.alicdn.com/imgextra/i3/O1CN01KctL6l1KijIOoYWsP_!!6000000001198-0-tps-717-290.jpg)

```css
.selector:has(#id) {}
// 支持链式
.selector:has(div):has(.class):has(#id) {}
// 支持选择多个
.selector:has(div, .class, #id) {}
```

特性检测方面。CSS 里通过 `@supports (selector(:has(*))) {}` 或 `@supports not (selector(:has(*))) {}` 实现，JS 里通过 `if(CSS.supports('selector(html:has(body))'))) {}` 实现。

## Storybook 7 新设计
https://storybook.js.org/blog/storybook-7-0-design-sneak-peek/

![](https://img.alicdn.com/imgextra/i4/O1CN01i2wVFc1XjjA53Q9fT_!!6000000002960-0-tps-2250-1080.jpg)

Storybook 7 还在开发中，新的设计有更大的布局，重新组织的工具栏，更新的图标集，完善的表格元素，已经性能提升。其性能提升的点是针对 Storybook 的 Manager 做预打包，随着工具一起发布，这样启动 Storybook 时就需要做这部分的打包。

## React Query 4
https://tanstack.com/blog/announcing-tanstack-query-v4

React Query 更名为 Tan Query，除了 React，还支持 Vue、Svelte 和 Solid 框架。实现上基于独立的 core，然后分别为不同框架开发特定的框架适配器，让不同框架共享 Tan Query 的 core 逻辑。

V4 变更包括。1）定位变更为「异步状态管理器」，支持任意 Promise；2）完善持久化能力，提供 SyncStoragePersister 和 AsyncStoragePersister 两个接口；3）支持 React 18，使用 useSyncExternalStore 重写 store 绑定逻辑；4）默认做 Queries 跟踪，对于渲染性能有很大提升；5）精简 API。
