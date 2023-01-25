---
title: "satisfies、JavaScript 框架、防挡弹幕、Mac 设置、npm 包最佳实践"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01W8I0Q11qrwyUfUOjV_!!6000000005550-0-tps-1795-1080.jpg"
titleImageCaption: "anniespratt @ unsplash"
publishedAt: "2022/09/26"
---

本周有这些内容想和你分享：

- TypeScript 4.9 satisfies
- 新一波 JavaScript 框架
- B 站防挡弹幕
- 设置 Mac 新电脑
- npm 包最佳实践
- cli 最佳实践
- 用 Node 写 Shell 脚本
- tauri 快速上手
- Ezno

## 一周新闻
* [Qwik 发布 1 Beta](https://www.builder.io/blog/qwik-and-qwik-city-have-reached-beta)
* [CoreJS 发布 3.25.2](https://github.com/zloirock/core-js/releases/tag/v3.25.2)，兼容 IOS 16
* [Remix 发布 1.7.1](https://github.com/remix-run/remix/releases/tag/remix%401.7.1)，回退 react-router 到 6.3，因为 6.4 可能不兼容
* [Nuxt 发布 3 RC 11](https://github.com/nuxt/framework/releases/tag/v3.0.0-rc.11)
* [Tan Query 发布 4.4](https://github.com/TanStack/query/releases/tag/v4.4.0)，支持 Solid
* [TypeScript 发布 4.9 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/)，新引入 satisfies 操作符
* [xterm.js 发布 5](https://github.com/xtermjs/xterm.js/releases/tag/5.0.0)，时间最长的一次发布，新增下划线和颜色支持、平滑滚动、canvas 扩展、VT 特性等

## TypeScript 4.9 satisfies
https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/#the-satisfies-operator

satisfies 是 TypeScript 4.9 新引入的操作符，用于只做校验但不改变表达式的类型结果。通常用于 Object 声明，因为既需要保留每个属性的类型，又需要做 key 值校验。

比如，

```ts
type Colors = 'red' | 'green' | 'blue';
const foo = {
  red: [1],
  green: true,
  blue: 'ok',
  black: {},
//~~~~~~~~~~ 既校验了 key，要求满足 Colors，这里的 black 会抛错
} satisfies Record<Colors, unknown>;

// 又让每个属性拥有完整类型
foo.red.at(0);
foo.blue.startsWith('o');
```

## 新一波 JavaScript 框架
https://frontendmastery.com/posts/the-new-wave-of-javascript-web-frameworks/

![](https://img.alicdn.com/imgextra/i4/O1CN01unUt6t1y3aLHC9z87_!!6000000006523-0-tps-2082-896.jpg)

作者从 Web 之初、CGI、PHP 开始讲起，讲 JavaScript 历史画卷一幅幅展开，既有 Ajax、jQuery、Backbone、YUI 等一代代的 JavaScript 库前辈，又有 Astro、Fresh、Remix 等新一波的 JavaScript 框架。推荐阅读，从中可以了解为什么会有这些库和框架，以及他们都是为了解什么而生的？

所以，既然每个框架都会被历史所代替，前端开发者应该如何保持竞争力？

## B 站防挡弹幕
https://juejin.cn/post/7141012605535010823

![](https://img.alicdn.com/imgextra/i3/O1CN015l3oLa1QhFiJCDxEB_!!6000000002007-0-tps-1919-1080.jpg)

我一直以为这和前端技术无关。没想到只要一行 CSS + 通过分割算法自动生成的遮罩图即可实现。

```css
.弹幕 {
  mask-image: url("mask.svg");
}
```

上图的遮罩图片如下。

![](https://img.alicdn.com/imgextra/i3/O1CN01rvLoND1LRc6u9T6EB_!!6000000001296-0-tps-718-352.jpg)

## 设置 Mac 新电脑
https://cpojer.net/posts/set-up-a-new-mac-fast

Jest 作者换了新 Mac 之后的快速配置方法，以下是一些记录。

1、Dotfile 用 github 管理维护  
2、用 [brew](https://brew.sh/) 安装命令行和 App  
3、用 [Syncalicious](https://github.com/zenangst/Syncalicious) 备份和恢复 App 设置  
4、推荐了如下 App：Dropbox、Syncalicious、Rectangle Pro、Alfred、Airflow、Archiver、Disk Inventory X、ProtonVPN 和 1Password

## npm 包最佳实践
https://snyk.io/blog/best-practices-create-modern-npm-package/

![](https://img.alicdn.com/imgextra/i1/O1CN01YMjeKd25o1omPX2ry_!!6000000007572-0-tps-2314-950.jpg)

简要流程如下，

1、初始化（创建 github 仓库、clone、npm init -y）  
2、设置 npm 账号（注册 npm 账号、开启 2FA、npm login）  
3、发布 npm 包（检查发布包文件 npx npm-packlist、发布预演 npm publish --dry-run、npm publish --access=public）

而如果要上生产，则还需做这些，

1、提供 cjs 和 esm 包产物（tsconfig.json、package.json exports）  
2、测试（单元测试、CI 测试、包测试）  
3、安全检查（Snyk）  
4、自动发布（代码合到 master 自动发布）

## cli 最佳实践
https://clig.dev/

![](https://img.alicdn.com/imgextra/i4/O1CN01GwpWsn1axPqZ57IM4_!!6000000003396-0-tps-2420-1080.jpg)

如果你有写命令行的需求，推荐阅读本文及其「Further reading」中推荐的文章。

## 用 Node 写 Shell 脚本
https://exploringjs.com/nodejs-shell-scripting/

![](https://img.alicdn.com/imgextra/i1/O1CN01bzyY3r1koOCSz8mB2_!!6000000004730-0-tps-525-750.jpg)

Dr. Axel Rauschmayer 的新书，HTML 版本免费。

## tauri 快速上手
https://blog.logrocket.com/tauri-electron-comparison-migration-guide/

![](https://img.alicdn.com/imgextra/i2/O1CN017IW9UC1ge4ohLPaOp_!!6000000004166-0-tps-730-570.jpg)

快速上手 3 命令。

```bash
$ npm create tauri-app
$ npm run tauri dev
$ npm run tauri build
```

## Ezno
https://kaleidawave.github.io/posts/introducing-ezno/

![](https://img.alicdn.com/imgextra/i3/O1CN01JDHPF61CWo3XquVfO_!!6000000000089-0-tps-1200-629.jpg)

一个 JavaScript 编译器，作者是年仅 21 岁的 UK 小哥。Ezno 内核是类型校验器，与 tsc 类似。

