# MDH 前端周刊第 1 期：rome、slidev、zx

**这是 「MDH：前端周刊」 第 0001 期，发表于：2021/05/10。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01Q93IFG1zkvJLH40c6_!!6000000006753-2-tps-2560-1440.png)

封面图：基于下文介绍的 RH12503/triangula 生成的三角艺术图。

## ⬆️ 头条

### 1. Rome Tools 成立公司
https://rome.tools/blog/announcing-rome-tools-inc/
https://drive.google.com/file/d/1gOUJshwbJpxmrqLjOmrpTCKjBWT6dp7Y/view

创始人是 babel、flipper、yarn、prepack 和 lerna 的作者，同时有的 Jamie Kyle 加入，种子轮 $4.5 million，大一统的工具，但更新比较慢，期待成立公司后的后续发力。

![](https://img.alicdn.com/imgextra/i2/O1CN019GicjK1XWtwZFAH4m_!!6000000002932-2-tps-450-146.png)

### 2. slidev: markdown 转 PPT 工具
https://github.com/slidevjs/slidev

作者是 vue 核心成员 antfu。基于 Vite、Markdown，功能挺全，支持 Vue 组件、摄像头和 PPT 录制、分步高亮、导出 PDF 和 SPA、vscode 辅助插件等，要是能支持 React 组件就更好了。
个人精读了文档和源码，主要学习如何基于 Vite 封装一个工具。同时出于个人兴趣，整理了其使用到的技术栈：

* **tsup** -- 编译 ts 到 cjs 和 esm，注意 client 包没有编译，是交给 Vite 在运行时处理的
* **vitepress** -- 文档服务
* **pnpm** -- 依赖安装
* **bumpp** -- 交互式更新依赖版本
* **esno** -- TypeScript runtime，基于 esbuild，用于运行 ts 格式的项目脚本，建议搭配下面介绍的 zx 一起用
* **playwright** -- 微软出的 e2e 测试工具，看了下风评，比 cypress 和 puppeteer 都好，sli.dev 用其导出 pdf、png 和 spa 格式
* **RecordRTC** -- 浏览器侧的录制，支持屏幕、摄像头、声音
* **kolorist** -- 颜色 util 工具，相比 color 有 ts 定义以及 esm 格式导出
* **sirv** -- 静态服务中间件
* **jiti** -- TypeScript runtime，基于 babel，用于实时读取 ts 格式的主题或用户配置文件
* **windicss** -- css util 工具
* **prism** + **shiki** + **monaco editor** -- 语法高亮和编辑器
* **typeit** -- 地球上最多才多艺的输入效果动画库，用于 sli.dev 首页展示

### 3. zx: 写更好的 shell 脚本
https://github.com/google/zx

google 出的工具，通过 JavaScript 的方式编写 shell 脚本，同时提供 fetch、chalk、fs 等辅助库，正在 umi 中尝鲜，搭配 esno 使用更佳，直接用 TypeScript 编写脚本。

```javascript
#!/usr/bin/env node

import { $ } from 'zx';
await $`date`;
```

## 📝 文章

### 1. 你不知道的 10 个依赖管理技巧
https://cpojer.net/posts/dependency-managers-dont-manage-your-dependencies

好文，强烈推荐！每个点都很实用，比如 `du -sh ./node_modules/* | sort -nr | grep '\dM.*'` 命令用于查看依赖尺寸并排序，
![](https://img.alicdn.com/imgextra/i1/O1CN01n0Z2Ql225eSvViSjt_!!6000000007069-2-tps-1280-582.png)

我来补一个 cnpm/tnpm 的， `cat node_modules/.recently_updates.txt` 可查看最新更新的包，用于出问题时排查是哪个依赖引起的，
![](https://img.alicdn.com/imgextra/i2/O1CN018sImET1RgAGAAzcd9_!!6000000002140-2-tps-1324-446.png)

### 2. 一天学习一个 npm 轮子，十天后变成轮子哥
https://github.com/Haixiang6123/one-day-one-npm-lib<br />
https://twitter.com/dan_abramov/status/1372395035342295042<br />
https://pomb.us/build-your-own-react/<br />

作者来自腾讯。Dan 说，“造轮子才是学代码的正确方式。”

![](https://img.alicdn.com/imgextra/i2/O1CN01v3nm531SaUyVDSG0a_!!6000000002263-2-tps-1154-372.png)

附我个人的精读步骤，

1. 通读文档，做笔记
2. 写理解与感受
3. 在 Umi、Next.js 等库的 examples 中添加使用方式（部分库合适）
4. 阅读源码，做笔记，理解原理
5. 产出笔记或文章《精读 xxx》
6. 写一个 toy 版本

### 3. React 框架大比拼：Gatsby, Next.js, Blitz, Redwood
https://www.youtube.com/watch?v=dfMhRYOtglg

### 4. 更好的代码块
https://ped.ro/blog/code-blocks-but-better

每个点做深了都有不少东西。作者的产品对代码块有着强需求，于是做了深入探索，以下是他的功能需求，

* 语法高亮
* 主题
* 高亮指定行
* 高亮指定字词
* 修改内容
* 字词链接
* 显示行号
* 展开收起
* 预览

### 5. 实现一个 Debugger: Code Analysis
https://nan.fyi/debugger

基本思路是在 DebuggerStatement 里把上下文变量存起来，基于 Babel。文章写的很用心，包括图和代码的实时编辑功能，另外个人觉得把 debugger 加上段。

```javascript
export default ({ types: t }) => {
  return {
    visitor: {
      DebuggerStatement(path) {
        const variables = Object.keys(path.scope.getAllBindings())
        path.replaceWith(createSnapshot(t, variables))
      },
    },
  }
}
```

### 6. 建立元数据驱动的前端架构
https://github.com/xufei/blog/issues/56

在广义的前端领域，模型驱动视图已经不是什么新鲜话题了，“低代码”和“搭建”也炙手可热，而这些概念都是以增强应用系统的可配置性为前提的。在这个大前提下，建立元数据驱动的前端架构就变得很重要了。

推荐人：海康 - 8 - xx。

## 🪓 代码

### 1. RH12503/triangula
https://github.com/RH12503/triangula

基于图像生成高质量的三角艺术，竞品有 esimov/triangle，见封面图。

### 2. raunofreiberg/inspx
https://github.com/raunofreiberg/inspx

显示元素尺寸和位置信息，像素完美强迫症必备，基于 React。

![](https://img.alicdn.com/imgextra/i1/O1CN01iHaEVb1vWUMeEPHql_!!6000000006180-2-tps-706-396.png)

### 3. jsxtools/cqfill
https://github.com/jsxtools/cqfill

CSS Container Queries 补丁。

### 4. Bhupesh-V/ugit
https://github.com/Bhupesh-V/ugit

undo 历史 git 操作，功能很全了，除了 tag、rebase、cherry-pick 和 worktree remove 都支持。

![](https://img.alicdn.com/imgextra/i1/O1CN01Bg6MMR1qQT51EE4hA_!!6000000005490-1-tps-736-482.gif)

### 5. mantinedev/mantine
https://github.com/mantinedev/mantine

React UI 库，包含组件和 Hooks。问：ui 库应该包含 hooks 吗？

### 6. starship/starship
https://github.com/starship/starship

极快的 shell prompt 工具，基于 Rust。

### 7. smeijer/unimported
https://github.com/smeijer/unimported

查找并修复项目中未使用的文件和依赖。

### 8. fregante/github-issue-link-status
https://github.com/fregante/github-issue-link-status

为 issue 和 PR 链接着色，快速识别他们的打开、关闭、合并状态。

![](https://img.alicdn.com/imgextra/i3/O1CN01mRfzXG1kB00KfQzPU_!!6000000004644-2-tps-1280-800.png)

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）

