---
title: "JavaScript 类型提案、Turborepo、Headless 组件、Solid.js、依赖管理"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01xS4vAW1PJbeEpaduU_!!6000000001820-0-tps-1676-1080.jpg"
titleImageCaption: "masamasa3 @ unsplash"
publishedAt: "2022/03/14"
---

本期主要内容有这些：

- JavaScript 类型提案
- Monorepos & Turborepo
- Headless 组件
- Solid.js 是理想的 React
- 依赖管理的真相
- Parcel 支持 Library

## JavaScript 类型提案
https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/

![](https://img.alicdn.com/imgextra/i1/O1CN01z4uo711x7Q2km4Vl4_!!6000000006396-0-tps-1986-1080.jpg)

提案目前 Stage 0，预计 2022 年 3 月会提交 Stage 1。目的是让 JavaScript 拥有类型，比如可以写下面的代码。

```ts
function add(a: number, b: number) {
  return a + b;
}
```

JavaScript 的静态类型大家期待了很多年，终于有望实现。目前另一个流行的方案是[通过 JSDoc 注释的方式在 JavaScript 中使用 TS 类型](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)。

![](https://img.alicdn.com/imgextra/i4/O1CN01A28RCd1UzLpCwDHlB_!!6000000002588-0-tps-950-428.jpg)

提案中类型语法和 TypeScript 兼容，除了基础的类型，还包含 Interface、Type、as、Generic 等高级类型。注意类型检测的时机不是在浏览器运行时，而是在开发阶段，比如编辑器、CLI 工具等，浏览器引擎要做的是完全忽略类型语法，比避免性能问题。

此提案的好处是，1）标准意味着统一，工具领域也会更一致，2）不需要 .d.ts，3）不需要 source-map 4）不需要工具编译 ts 为中间文件。

此提案的坏处是，1）增加浏览器和工具的复杂度和性能消耗，比如浏览器虽然只要忽略即可，但也需先把他们解析出来，2）很多库会带着类型发到 npm，对于不熟悉 TypeScript 的同学来说会有上手成本。

最后，都有静态类型了，JSX 和 DOM Diffing 还会远了。

## Monorepos & Turborepo
https://vercel.com/blog/monorepos-are-changing-how-teams-build-software

![](https://img.alicdn.com/imgextra/i3/O1CN01NKYdGj1y1klCxN80X_!!6000000006519-0-tps-1327-829.jpg)

Monorepo 有不少优点。比如：1）方便跨 package 更新，2）方便协作和调试，3）方便本地开发。但是有个缺点是代码和依赖多了之后，build、ci、test 等会变慢，而 Turborepo 可以解这个问题。

这篇算是 Turborepo 的推广文，但试用过之后也确实好用，比如 umi-next 仓库的 test 有缓存时只要 3-5 秒。

## Headless 组件
https://medium.com/@nirbenyair/headless-components-in-react-and-why-i-stopped-using-ui-libraries-a8208197c268

![](https://img.alicdn.com/imgextra/i3/O1CN01FMRb5Y1RorunjMZJR_!!6000000002159-0-tps-1044-782.jpg)

作者来自 Gloat，介绍了把 UI 库从 MUI 迁到 headless 组件的过程。

最早用 react-bootstrap，而后觉得 MUI 不错花了 6 个月迁到 MUI，然后随着业务越来越复杂，对 MUI 组件做了很多 hack，虽然能跑，很有点脏，并且复杂，决定自研，但是功力不够，自研组件有大量 BUG 和可访问性问题，然后放弃准备转投 MUI。感觉好熟悉，这条路应该很多同学都走过。

转投 MUI 之前作者遇到了 Headless 组件。

Headless 组件是啥？他们包含完整功能的组件，但把设计部分留给开发者处理，适用于希望有自己的设计系统但又没精力或能力维护组件功能的团队。比如 [Radix UI](https://www.radix-ui.com/)、[Reach UI](https://reach.tech/)、[Headless UI](https://headlessui.dev/)、[Downshift](https://github.com/downshift-js/downshift)、[react-table](https://react-table.tanstack.com/)等。

编者注：[MUI 5 也提供了 alpha 阶段的 Headless 组件](https://mui.com/blog/mui-core-v5/#unstyled-components-alpha)，包括 Autocomplete、Button、Modal、Pagination、Slider 和 Switch。

由于没有包含设计元素，以上 Headless 组件可组合、按需使用，然后由于按需，Bundle 尺寸也不会太大，通常比使用主流的大型 UI 库小。

## Solid.js 是理想的 React
https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/

传统 React 的 class component 太繁琐，而现代 React 的 Hooks 又容易出错，Hooks 复杂和容易出错的背后是因为其响应式的假的。然后 Solid.js 是真响应式，所以更简单且符合直觉。

比如计数器。

```ts
// react
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <div>The count is: {count}</div>;
}

// solid.js
function Counter() {
  const [count, setCount] = createSignal(0);
  setInterval(() => {
    setCount(count() + 1);
  }, 1000);
  return <div>The count is: {count()}</div>;
}
```

详见[中文翻译](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng%3D%3D&mid=2247513757&idx=1&sn=a828aa97c450b90c13ef0bd4a6fdbb5a#rd)。

## 依赖管理的真相
https://mp.weixin.qq.com/s?__biz=MzI5NjM5NDQxMg%3D%3D&mid=2247495463&idx=1&sn=591c5b3bfcf78f10c718153fe2dc8228#rd

![](https://img.alicdn.com/imgextra/i4/O1CN01ZqXd4p1LSWtsXPE2m_!!6000000001298-0-tps-858-472.jpg)

作者非常详细地从发展的角度历数了 npm、yarn、pnpm 的 deno 的包管理机制。

虽然目前还没有完美的依赖管理方案，但纵观包管理器的历史发展，是库与开发者互相学习和持续优化的过程，并且都在不断推动着前端工程化领域的发展，我们期待未来会出现更好的解决方案。

作为 pnpm 爱好者，关于「pnpm 局限性」部分我有一些不同看法。

- 「忽略了 package-lock.json」，这应该是 feature，pnpm 兼容 package-lock.json 反而比较奇怪
- 「符号链接兼容性」，pnpm 6.25 之后可设置 node-linker 为 hoisted，拍平 node_modules 并不用软链
- 「子依赖提升到同级的目录结构」，没理解问题
- 「修改覆盖问题」，+1

## Parcel 支持 Library
https://parceljs.org/getting-started/library/

Parcel 最新版支持了 Library 开发，基于 package.json 中的约定式配置。

```ts
{
  "name": "my-library",
  "version": "1.0.0",
  "source": "src/index.js",
  "main": "dist/main.js",
  "module": "dist/module.js",
  "types": "dist/types.d.ts",
  "scripts": {
    "watch": "parcel watch",
    "build": "parcel build"
  },
  "devDependencies": {
    "parcel": "latest"
  }
}
```

如上，在 package.json 中分别添加 source、main、module、types，然后调用 `parcel build`，parcel 会依次生成 cjs、esm 格式的产物，以及 ts 类型文件。

## 发布

以下是上周社区的重要发布。

- [Umi 发布 4.0.0-rc.6](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.6)，包含支持 api routes（见[示例](https://github.com/umijs/umi-blog-example)）、vite 打包模式瘦身、monorepo 支持等 13 个改进
- [React 发布 18 RC](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html)，附官方升级文档
- 可沙箱运行 JavaScript 的 [ShadowRealms 提案已到 Stage-3](https://fjolt.com/article/javascript-shadowrealms)
