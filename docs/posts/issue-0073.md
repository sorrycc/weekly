---
title: "TypeScript 10 年、最快前端模板、whyframe、template 元素"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01PfgvCg1OlFwbPpEYg_!!6000000001745-0-tps-1920-1031.jpg"
titleImageCaption: "封面图：filmazzarino @ unsplash"
publishedAt: "2022/10/17"
---

本周有这些内容想和你分享：

* TypeScript 10 年
* 最快前端模板
* whyframe
* 手写 React 渲染器
* 吐槽 React
* template 元素
* lazygit
* knip

## TypeScript 10 年
https://devblogs.microsoft.com/typescript/ten-years-of-typescript/

来看下 TypeScript 是如何经受住考验的。

1、TypeScript 制定了[设计目标](https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals/53ffa9b1802cd8e18dfe4b2cd4e9ef5d4182df10)并保持得很好，设计目标比如。

"对发射的程序不施加任何运行时的开销。"  
"与当前和未来的ECMAScript提案保持一致。"  
"保留所有JavaScript代码的运行时行为。"  
"避免增加表达式级别的语法。"  
"使用一致的、完全可擦除的结构类型系统。"

2、TypeScript 没有试图成为工具箱中的每一个工具。我们的一个非目标是不 "提供一个端到端的构建管道。相反，使系统具有可扩展性，以便外部工具可以使用编译器来实现更复杂的构建工作流程"。

## 最快前端模板
https://cpojer.net/posts/fastest-frontend-tooling-in-2022

Jest 作者梳理了他认为最快的 2022 最快前端工具集以及与之配套的 [github 仓库模板](https://github.com/cpojer/vite-ts-react-tailwind-template)，结论是 **Vite + tailwind + pnpm + eslint & prettier + TypeScript + React**。我觉得这里的快有两个含义，1）速度快，2）用于快速启动项目的最小模板。

1、Vite 无需多说  
2、Tailwind 也无需多说，但如果你有自己的 Design System，作者推荐用 emotion  
3、pnpm 除了快，对 monorepo 的支持也很好  
4、ESLint & prettier 有一些注意点，1）要分开用，别在 eslint 规则里加 prettier 规则，会慢，2）prettier 和 eslint 都有 --cache 参数，要开启，3）推荐用 @trivago/prettier-plugin-sort-imports 和 prettier-plugin-tailwindcss 对 import 和 tailwindcss 类进行排序，4）期待 rome 的 formatter 和 lint  
5、npm-run-all 用于并行执行多个命令  
6、NodeJS 脚本编写，基于 native esm，使用 ts-node + @swc/core + nodemon 的依赖组合实现，没有用基于 esbuild 方案比如 tsx，因为测下来在一些场景会莫名其妙地慢  
7、TypeScript 无需多说  
8、VSCode，作者推荐了 4 个插件

大家可能会好奇，作为 Jest 作者，测试工具他选的啥？虽然文章里没提，但从代码里可以看到，用的是 Vitest，哈哈。

## whyframe
https://whyframe.dev/

![](https://img.alicdn.com/imgextra/i4/O1CN01xCljXE1a2cjkPO3fN_!!6000000003272-0-tps-1732-950.jpg)

whyframe 是基于构建工具改进 iframe 编写方式的方案。适用于给组件库写文档，或者给文章写 example 的场景。支持 vue、react、svelte、webpack、vite 等。

比如这样。

```ts
<iframe data-why>
  Hello world!
</iframe>
```

然后，其背后的构建工具会提取 iframe 的内容，为此构建单独的 js 和 html，同时生成改下 iframe 内容，添加 src 属性指向生成的 html 地址。

## 手写 React 渲染器
https://www.markcodes.dev/posts/build-react-custom-renderer-part-1

![](https://img.alicdn.com/imgextra/i3/O1CN01kzZqGS1Rup3sVgZBU_!!6000000002172-0-tps-1999-820.jpg)

由于有 react-reconciler，让自定义 React 渲染器变地相当简单。

```ts
import ReactReconciler from "react-reconciler";

const reconciler = ReactReconciler({
  // ... configuration options ...
  // 启用突变模式
  // Reconciler 有两种不同的渲染模式，1）突变模式，2）持久模式
  supportsMutation: true,
  
  createInstance(type, props) {
	  const element = document.createElement(type);
    Object.keys(props).forEach((prop) => {
      // Filter out non-HTML attributes like:
      if (!["children", "onClick", "key"].includes(prop)) {
        // Appends each html attribute to the element
        element[prop] = props[prop];
      }
    });
    // return the HTML element
    return element;
  },
  createTextInstance: (text) => {
    return document.createTextNode(text);
  },
  getRootHostContext: () => null,
  getChildHostContext: () => null,
  shouldSetTextContent: () => null,
  prepareForCommit: () => null,
  clearContainer: () => null,
  resetAfterCommit: () => null,
  appendInitialChild: () => null,
  appendChildToContainer: () => null,
  finalizeInitialChildren: () => null,
  removeChildFromContainer: () => null,
});

const render = (element, container) => {
  const root = reconciler.createContainer(container, false, false);
	reconciler.updateContainer(element, root, null, null);
};

export { render };
```

然后就可以拿这个 `render` 方法进行渲染了。

```ts
render(<App />, document.getElementById('root'))
```

## 吐槽 React
https://dinosaurs-with-jetpacks.com/posts/react-problems

![](https://img.alicdn.com/imgextra/i2/O1CN01iqV1691LeRCNfoHY9_!!6000000001324-0-tps-334-302.jpg)

作者吐槽了基于 React 开发项目的问题，感觉比较激进，但有些又是值得思考的。

1、**不要写 React 应用，不要用 React 内置的状态工具，不要在 Hooks 里存储业务逻辑，不要在 React 组件里写逻辑…** 我理解说的应该是同一件事，把逻辑提取出来，和 UI 分离。这就需要用到数据流了，数据流作者推荐的是 Mobx。

2、**避免使用框架闪亮的玩具。** 作者吐槽了 Suspense 的兼容性。

3、**忽略写框架的人。** 他们没有 100K LOC 屎山项目的肮脏经验，也没有把逻辑散落在 200 +个 useEffect 里的项目经验。

## template 元素
https://kittygiraudel.com/2022/09/30/templating-in-html/

![](https://img.alicdn.com/imgextra/i3/O1CN01QIPOop1Xl6Lt3Yt7B_!!6000000002963-0-tps-2608-1080.jpg)

这是我遗漏的知识点。`<template>` 元素用于保存 HTML 模板，同时他里面的内容是不可见的。

```html
<template id="burger-template">
  <button type="button" aria-expanded="false" aria-label="Menu" aria-controls="mainnav">
    <svg width="24" height="24" aria-hidden="true">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
    </svg>
  </button>
</template>
```

声明后可通过 JS 访问里面的内容，复制或渲染。

```ts
const template = document.querySelector('#id-of-template')
const content = template.content.cloneNode(true)
container.append(content)
```

兼容性上除了 IE11，大部分浏览器已支持。特性探测方法如下。

```ts
if ('content' in document.createElement('template')) {
  // `<template>` is supported.
}
```

## lazygit
https://github.com/jesseduffield/lazygit

![](https://img.alicdn.com/imgextra/i1/O1CN01DXZSmK1HK36Si5KJL_!!6000000000738-1-tps-1000-616.gif)

git 命令的 terminal UI 工具，基于 Go 实现。对于不够熟悉 git 的同学来说，由于启动非常快，某些场景下可代替 Sourcetree 使用。

## knip
https://github.com/webpro/knip

又一个废代码检测工具，支持检测未使用的文件、依赖和 exports。

```bash
$ knip --reporter codeowners
--- UNUSED FILES (2)
@org/team src/chat/helpers.ts
@org/owner src/components/SideBar.tsx
--- UNUSED DEPENDENCIES (1)
@org/admin moment
--- UNLISTED DEPENDENCIES (1)
@org/owner src/components/Registration.tsx react
--- UNUSED EXPORTS (4)
@org/team src/common/src/string/index.ts: lowercaseFirstLetter
@org/owner src/components/Registration.tsx: RegistrationBox
@org/owner src/css.ts: clamp
@org/owner src/services/authentication.ts: restoreSession, PREFIX
--- UNUSED TYPES (3)
@org/owner src/components/Registration/registrationMachine.ts: RegistrationServices, RegistrationAction
@org/owner src/components/Registration.tsx: ComponentProps
@org/owner src/types/Product.ts: ProductDetail
--- DUPLICATE EXPORTS (2)
@org/owner src/components/Registration.tsx: Registration, default
@org/owner src/components/Products.tsx: ProductsList, default
```
