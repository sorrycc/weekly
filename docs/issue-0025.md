# MDH 前端周刊第 25 期：vscode.dev、Aura Theme 2、Node 17、useId

**这是 「MDH：前端周刊」 第 0025 期，发表于：2021/10/25。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i4/O1CN01ZEZsTQ1TiZbiELZ8I_!!6000000002416-0-tps-4032-3024.jpg)

封面图：仙居永安溪 @ 2021.10.23。


## ❄️ TL;DR

👉 vscode.dev<br />
👉 MDX 2<br />
👉 Aura Theme 2<br />
👉 TypeScript 4.4 Cheat Sheet<br />
👉 3 TypeScript Tricks<br />
👉 useId<br />
👉 beta.reactjs.org<br />
👉 Node 17<br />
👉 Webpack 包分析工具集<br />
👉 Gatsby 4<br />

## ⚡ 展开讲讲

### vscode.dev
https://code.visualstudio.com/blogs/2021/10/20/vscode-dev

跑在浏览器中的轻量级 VSCode，

🗂 支持本地文件查看和编辑
💻 支持 HTML、JavaScript 和 CSS  等
🐞 支持 Debug
🔋 在 Chromebooks & iPads 下消耗较少电量
☁️ 支持 GitHub

### MDX 2
https://v2.mdxjs.com/blog/v2/

📝 语法兼容性更好
🧑‍💻 支持 JavaScript 表达式，比如转换 `{2 * Math.PI}` 为 `6.283185307179586`
🔌 新增 esbuild、Rollup、Node.js 的集成方式，比如 `@mdx-js/esbuild` 用于 esbuild
⚛️ 支持任意的 JSX runtime，包括 React, Preact, Vue, Emotion 等
🌳 改进 AST 提供更详细信息
🏃‍♀️ 编译速度至少快 25%

### Aura Theme 2
https://dev.to/daltonmenezes/aura-theme-v2-0-0-is-out-now-565h

![](https://img.alicdn.com/imgextra/i3/O1CN01ebaAgb1XLS4n6RRlB_!!6000000002907-2-tps-2784-1660.png)

全平台主题，支持 VSCode、iTerm、Google Chrome 等，唯一可惜的是不支持 WebStorm。

### TypeScript 4.4 Cheat Sheet
https://www.sitepen.com/blog/typescript-cheat-sheet

TypeScript 4.4 备忘录，文中通过表格方式较清晰地展示了 TypeScript 的一些使用方式，如平时我们不常用的 &&= 等，值得看看。如果想看比较详细的介绍，可以看 [TypeScript 权威指南](https://www.sitepen.com/blog/update-the-definitive-typescript-guide) 这篇文章。

### 3 TypeScript Tricks
https://www.cstrnt.dev/blog/three-typescript-tricks

摘要，

1. `Readonly<T>` ，给不希望被修改的数组或对象加上 `Readonly` Tag，被修改则报错，减少「惊喜」的发生，比如 `function sort(arr: Readonly<Array<number>>) {}`，`arr.sort()` 时就会报错，可改用 `[...arr].sort()`
2. Any vs Unknown，建议用 any 前优先考虑用 unknown。Any 是直接躺平；Unknown 是你知道不确定有哪些类型的值，用之前必须先检查类型以确保类型安全，比如 `if (typeof foo === 'function') foo()`
3. 优先用 `Record` 声明对象类型。有两种声明方式，`interface Foo { [key: string]: unknown }` 和 `Record<string, unknown>`，后者会更灵活些，比如需求变更后，key 只允许 foo 和 bar，可改成 `Record<'foo'|'bar', unknown>`，前者则不行

### useId
https://github.com/reactwg/react-18/discussions/111

摘要，

1. `useId` 即完善后的 `useOpaqueIdentifier`，用于生成唯一 id，支持 SSR，支持 hydration
2. 应用场景比如可访问性中 label 的 htmlFor，`const id = useId(); <label htmlFor={id+'firstName'} />`

```javascript
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input type="checkbox" name="react" id={id} />
    </>
  );
);
```

### beta.reactjs.org
https://github.com/reactjs/reactjs.org/pull/3965

![](https://img.alicdn.com/imgextra/i3/O1CN01apDQGM24ze9iwNdMp_!!6000000007462-2-tps-1544-812.png)

🌵 React 的新文档网站，Beta 阶段
📙 包含 Hooks 学习资料
💬 基于 CodeSandBox 的互动示例和挑战任务
📊 可视化剖析 Hooks 如何工作
🖼 利用插图和图表介绍 React 如何工作

### Node 17
https://medium.com/the-node-js-collection/node-js-17-is-here-8dba1e14e382

摘要，

1. `readline` 支持 Promisified API，比如 `import * as readline from 'node:readline/promises';`
2. OpenSSL 从 1.1.1 升级到 3.0
3. V8 从 9.4 升级到 9.5
4. 错误堆栈中显示 Node 版本，见下图

![](https://img.alicdn.com/imgextra/i1/O1CN0161em1d284Av5dr2Xy_!!6000000007878-2-tps-800-260.png)

### Webpack 包分析工具集
https://blog.bitsrc.io/6-tools-and-techniques-to-analyze-webpack-bundle-size-817337f8cf91

![](https://img.alicdn.com/imgextra/i3/O1CN01QJLH3S24HDjnt33fi_!!6000000007365-1-tps-1632-892.gif)

包含 Webpack Visualizer、Webpack Analyzer、Webpack Bundle Analyzer、Source Map Explorer 和 Bundlephobia，其中用地最广的是 Webpack Bundle Analyzer。

### Gatsby 4
https://www.gatsbyjs.com/docs/reference/release-notes/v4.0/

摘要，

1. 支持并行查询运行 - 构建时间减少多达 40%
2. 使用 lmdb-store 提供高效数据访问 - Nodejs >=14.15.0
3. 支持服务器端渲染 (SSR) - 使用用户访问页面时获取的数据预渲染页面
4. 支持延迟静态生成 (DSG) - 将页面生成推迟到用户请求，加快构建时间
5. 依赖 Nodejs 14 及以上环境

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
