---
title: "Umi 4、技术写作、Oh Shit Git、Defensive CSS、Taze"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01gCwKvw1Qk05RMbF02_!!6000000002013-0-tps-1619-1080.jpg"
titleImageCaption: "stephenleo1982 @ unsplash"
publishedAt: "2022/06/27"
---

本周有这些内容想和你分享：

- Umi 4
- 如何利用 Why、What、How 框架更好地写作
- Oh Shit, Git
- Defensive CSS
- Taze

## Umi 4
https://mp.weixin.qq.com/s/uLYTWgXoIEPPD-2xUntjEA

![](https://img.alicdn.com/imgextra/i4/O1CN01ddsEcD1PQvzCrZwPr_!!6000000001836-0-tps-1725-1080.jpg)

Umi 4 现在可以在 npm 上使用了！详见：umijs.org。

距离上一篇文章和大家介绍 Umi 4 RC 的发布已过去 5 个月，这段时间我们基本都保持了一周一个 RC 的节奏，目前是 RC.24。同时基于 Umi 4 的蚂蚁内网框架也已在 2 个月前发布，目前上线近 100 应用，Umi 4 的主体功能已非常稳定，这也是第一次我们先在内网发布后在社区正式发布。

## 如何利用 Why、What、How 框架更好地写作
https://eugeneyan.com/writing/writing-docs-why-what-how/

![](https://img.alicdn.com/imgextra/i1/O1CN014TVfAT1OfInM72d9D_!!6000000001732-0-tps-1470-770.jpg)

做项目时，要写三种类型的文档，单页文档、设计文档和 Review 文档，见图1，分别是写于启动前、实施前和完成后。单页文档写给老板看，介绍问题、预期结果、建议的解决方案和其他高层次的点；设计文档程序员可以理解为 RFC，写给同行或下属看，包含方法论、系统设计、实验结果等；Review 文档用于 Review 成功和失败的点。

文档怎么写？用「Why、What、How」的框架。听起来很简单，小学一年级老师也这么教，但作者的大部分文档都是用这个框架。Why 是让听众理解问题和背景，注意站在听众的角度，比如不要对着老板聊技术的 Why，也不要对着技术同学聊规划的 Why；What 讲解决方案是什么样子，以及可以做什么；How 讲如何实现 Why 和 What。

其中「Why」部分可以用 5 Why（https://en.wikipedia.org/wiki/Five_whys）的方法，连续问 5 个 Why，以便找出问题的根本原因。

此外还要注意「Who」，即你的听众是谁。为老板和为工程师写的文档差异会很大，因为不同人关注的点不同，前者更关心客户痛点、商业成果、投资回报率，后者更关心技术要求、设计选择、API 规范。

不同文档类型应用上述框架的例子见图 2。

文章内还有个金句，「Writing docs is expensive, but cheap.」文档很贵，需要花时间写、Review 和迭代，这些时间本可以花在写代码上。文档又很便宜，通过文档可以避免建立不靠谱的兔子洞项目，不靠谱的项目就算做出来也没人用，这个浪费是巨大的。所以，不要做「问题模糊、解决方案有争议」的项目。

## Oh Shit, Git
https://ohshitgit.com/

Git是很难的：搞砸了很容易，而找出如何解决你的错误是他妈的不可能的。Git 文档有一个鸡和蛋的问题，即你无法搜索如何让自己摆脱困境，除非你已经知道你需要知道的东西的名字，以解决你的问题。

因此，这里有一些作者自己陷入的糟糕情况，以及他最终是如何让自己摆脱困境的。（编者注：我觉得很实用）

1、如何找回不小心删除的东西<br />
2、提交后想在同一个 commit 里再加点东西怎么办<br />
3、如何修改最后一个 commit message<br />
4、提交代码到错误分支怎么办<br />
5、修改代码后执行 diff，为啥是空的<br />
6、如何 undo 近 5 个 commit<br />
7、如何 undo 某个文件的改动<br />
8、...<br />

## Defensive CSS
https://defensivecss.dev/

![](https://img.alicdn.com/imgextra/i1/O1CN01DZA5B31UWUsMG8rYr_!!6000000002525-0-tps-2000-950.jpg)

早在2021年12月，作者就写了一篇题为[防御性CSS](https://ishadeed.com/article/defensive-css/)的文章。作者想用一个术语来传达这样一个概念：编写的 CSS 可以防止意外的布局行为，或者至少可以减少这些行为。‌

目前，这个项目有超过 24 个防御性 CSS 提示。

## Taze
https://github.com/antfu/taze

![](https://img.alicdn.com/imgextra/i2/O1CN01AY1zXw1yHmclTN5Bb_!!6000000006554-0-tps-1032-1174.jpg)

一个让你的依赖保鲜的现代 cli 工具，支持定制、支持 monorepo。
