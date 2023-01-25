---
title: "React 目录结构、Remix 技术栈、Node 之道、HTTPS、Mintlify"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01F9VnQ11d79UwSkxL7_!!6000000003688-0-tps-1473-802.jpg"
titleImageCaption: "艾尔登法环，刚入坑"
publishedAt: "2022/03/21"
---

本期主要内容有这些：

- React 目录结构
- Remix 技术栈
- Node 之道
- 本地开发 HTTPS
- execa 详解
- react 要不要 import
- Mintlify

## React 目录结构
https://www.joshwcomeau.com/react/file-structure/

![](https://img.alicdn.com/imgextra/i4/O1CN01rcGK3p22Rdbr6HHKy_!!6000000007117-0-tps-1512-1080.jpg)

目录结构有两个大流派，按特性（Feature）组织和按功能（Function）组织？按特性组织比如把搜索相关的组件、hooks、helper、model 全部放在 search 下，以此类推；按功能组织是在 src 下建 components、hooks、helpers，然后所有组件存 src/components，所有 hooks 存 src/hooks，以此类推。

作者的倾向是按功能。因为按特性有几个问题，1）边界模糊，比如创建给 user 的 search 功能，是放 user 下还是 search 下？2）产品迭代，产品变更后可能需要连带调整目录结构，带来大量 diff。

至于一个 Component 下的文件怎么组织，作者给的建议是，

```
+ Widget
  - Widget.js
  - Widget.helpers.js
  - SubComponentA.js
  - SubComponentB.js
  - index.js
```

其中 `index.js` 是为了引用时只需要写 Widget，而不需要 Widget/Widget；但主要内容写在 Widget.js 中，index.js 只是做转发，原因是避免编辑器中出现大量的 index.js 标签而不好识别。

![](https://img.alicdn.com/imgextra/i3/O1CN011v4vCD1RF91KATqNF_!!6000000002081-0-tps-610-50.jpg)

作者还有提 helpers 和 utils 的区别，相信很多同学都是不区分直接用 utils 的。作者做了区分，觉得 helpers 是面向当前产品但不通用的，而 utils 是可以完成一项抽象任务的通用方法。

## Remix 技术栈
https://remix.run/blog/remix-stacks

![](https://img.alicdn.com/imgextra/i1/O1CN01fW3JQB1OqIIS7aoaC_!!6000000001756-0-tps-1920-1055.jpg)

如果大家做过业务开发，会发现除了研发，还有很多流程上的事，其实是更花时间的。因为要让一个产品上线，除了框架，还有 CI & CD 流程、数据库、Hosting 平台、测试、MOCK、UI 库、样式库等都需要考虑。

为此，Remix 团队提供了 3 套生产可用的模板（技术栈），分别是 blue、indie 和 grunge，面向不同的场景。前两个基于 server，最后一个基于 serverless。

通过模板，开发者可以完善走完流程，把项目部署到线上，从而让有限的精力可以更多专注在业务研发上。

## Node 之道
https://alexkondov.com/tao-of-node/

![](https://img.alicdn.com/imgextra/i4/O1CN01gqiw7n1mCx3TSkNOs_!!6000000004919-0-tps-1920-1080.jpg)

Tao of React 作者的新小册，介绍在 Node 领域他对于组织、代码结构、工具、测试和性能的看法，以下是一些摘录。

1、锁版本，别依赖 semver

2、使用 Snyk 在 CI 阶段做安全门禁，但只报告 critical 和 severe 的漏洞，避免太多噪音

3、给配置分层，比如 `const user = { name, email }` 会比`const user = { userName, userEmail }` 更好

4、使用结构化日志，把日志存起来，方便排查，推荐 winston 和 pino

5、基于领域模型组织项目，而不是基于功能（比如 controllers、models、utils、tests）（编者注：这和前面「React 目录结构」那篇是持相反的观点，所以见仁见智了，个人觉得是应该 by scene，小项目应该基于功能，大项目在此基础上增加 domain model 的组织）

6、分层，不要在一个 handler 里塞太多逻辑，比如提取数据操作逻辑到 server 层，让 request handler 只处理 http 请求

7、监听 process signals，响应系统给的信息，最常见的是处理退出信号 `process.on('SIGTERM'), () => {})`

## 本地开发 HTTPS
https://auth0.com/blog/using-https-in-your-development-environment/

对于本地开发服务器为啥用和怎么用 HTTPS 这件事，作者做了深入解释。

用 HTTPS 的原因有几个。1）让 dev 和 prod 尽量保持一致，这也是 [12 factor 中的一条](https://12factor.net/dev-prod-parity)，比如可以提早发现 http & https 混用问题，2）使用高级浏览器特性，比如 service workders、secure cookies 和 prefixed cookies 都要求有 https；3）开启 HTTP/2 让开发环境更快。

使用 HTTPS 也很简单，列下 mac 下的，

```bash
# 1、安装
$ brew install mkcert
# 如果用 Firefox 需要额外安装 nss
$ brew install nss

# 2、安装本地证书机构
$ mkcert -install

# 3、生成证书
$ mkcert localhost 127.0.0.1
```

然后让 server 使用生成的私钥和公钥即可。

## execa 详解
https://blog.logrocket.com/running-commands-with-execa-in-node-js/

作者详细介绍了 execa 的使用，execa 周下载有 5000w，是用于子命令执行非常流行的基础库。

内容包括如何在 cjs 和 esm 中引入 execa；stdout 和 stderr 的捕获；错误处理；子进程的取消；输出日志的 piping；输出日志到文件。

## react 要不要 import
https://www.chakshunyu.com/blog/why-did-and-dont-you-need-to-import-react/

一个小但有用的知识点。

React 组件第一行总是会带上 `import React from 'react'`，不管 React 变量是否在下方有被使用，这是为啥？因为 JSX 被转换之后会依赖 React，比如 `<div />` 会被转换为 `React.create('div', {}, null)`，如果没有前置引入局部的 React 变量，会报 React undefined 的错误。

那自 React 17 之后为啥又不需要了？因为 JSX 转换后的格式换了，比如 `<div />` 会转换为 `_jsx("div", { children })`，并且编译器会自动加上 `import {jsx as _jsx} from 'react/jsx-runtime'` 的 import 语句，所以也就不需要 React 的 import 了。

## Mintlify
https://www.mintlify.com/

![](https://img.alicdn.com/imgextra/i4/O1CN01RRTgJW1E8eOu94Hkt_!!6000000000307-1-tps-1280-750.gif)

Mintlify 可以让 AI 帮你写注释，支持接入 VSCode 和 WebStorm。安装后，比如 Webstorm，选中代码后按 `⌘+⇧+.` 即可生成注释。

## 发布

以下是上周社区的重要发布。

- [Umi 发布 4.0.0-rc.7](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.7)，更名 @umijs/pro 为 @umijs/max、dva 插件完善、defineConfig 类型、微生成器等 10 项改进
- [CodeSandbox 发布 Projects](https://codesandbox.io/post/announcing-codesandbox-projects)，支持项目研发，可以先请求个 Early Access
- [Remix 发布 1.3](https://github.com/remix-run/remix/releases/tag/v1.3.0)，两项改进，Remix Stacks 和试验性的 Deno 支持
- [Prettier 发布 2.6](https://prettier.io/blog/2022/03/16/2.6.0.html)，支持 TypeScript 4.6，Single Attribute Per Line
- [pnpm 发布 7 beta.0](https://github.com/pnpm/pnpm/releases/tag/v7.0.0-beta.0)
- [Deno 发布 1.20](https://deno.com/blog/v1.20)，新增 bench、task 命令，支持 AboutSignal.timeout()，支持配置文件里声明 importmaps 等
- [OpenAI Codex Private Beta](https://openai.com/blog/openai-codex/)，Codex is the model that powers GitHub Copilot，可以先加到 WAITLIST
- [Mantine 发布 4](https://mantine.dev/changelog/4-0-0/)
- [MDX 发布 2.1](https://github.com/mdx-js/mdx/releases/tag/2.1.0)
- [zx 发布 6](https://github.com/google/zx/commits/main)
- [Vite 发布 2.9 Beta](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#290-beta1-2022-03-14)，优化冷启动速度，从 1s 到 500ms
