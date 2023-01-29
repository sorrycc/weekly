---
title: "Next.js 11.1、DHH 不打包不编译的愿望、图解 useMemo、Vue 3.2"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01x6oo6N1H2dwiaRALe_!!6000000000700-0-tps-1920-1280.jpg"
titleImageCaption: "zayyerrn @ unsplash"
publishedAt: "2021/08/16"
---

## ❄️ TL;DR

👉 Next.js 11.1<br />
👉 DHH 不打包不编译的愿望<br />
👉 mitosis<br />
👉 图解 useMemo<br />
👉 Vue 3.2<br />
👉 Sprinkles v1<br />
👉 CSS 嵌套入规范<br />
👉 居中元素的 7 种办法<br />

## ⚡ 展开讲讲

### Next.js 11.1
https://nextjs.org/blog/next-11-1

包含，

* ES Modules support
* Rust-based tooling to replace JS (Babel and Terser)
* 2x faster data with HTTP `keep-alive`
* 70% faster builds, 67% less memory with source maps
* ESLint and `next/image` improvements (Sharp support)

Next.js 要接 swc，就直接把 swc 作者招进去了。。加上之前的 Webpack 作者和 Parcel Contributor，简直是 Bundle 界的明星阵容了。同时有个疑问，换 swr 后，还支持 babel 插件的扩展配置吗？

### DHH 不打包不编译的愿望
https://world.hey.com/dhh/modern-web-apps-without-javascript-bundling-or-transpiling-a20f2755

tl;dr

1. DHH 觉得应该用最原始的方式写 JavaScript，不需要用任何 Bundle 和 Transpile，他们都是毒瘤，切掉后浑身舒坦
2. 技术方案是 ES6（主要是 ESM） + HTTP/2 + Import Maps
3. ES6 是因为除 IE11 外的主流浏览器都已支持，同时微软宣布 2022/6 后不再维护 IE11，所以用 ES6 写就好，不需要 Transpile
4. HTTP/2 意味着 Bundle 大文件（Single-Big-Bundle 范式）不再有优势，但 Tree-Shaking 除外
5. Single-Big-Bundle 除了打包慢，同时带来缓存的问题，缓存更新时只能失效大文件，不能精准更新有变更的文件，对于用户来说，重新下载和解析都是不必要的消耗
6. Import Maps 是整个方案非常重要的最后一块拼图，让显示的文件引用变成逻辑引用（logical references），可以解上一条描述的精准更新缓存的问题
7. Import Maps 虽然兼容性不好，但有 es-module-shim 补丁，只要支持 ES6 的浏览器都可以上
8. 上述方案是理想情况，实际还有一些场景未解，1) React 的 JSX 需要 Transpile 2) 生态的问题，依赖包需要提供 esm 输出，现实是大量包并没有，这方面 skypack.dev 能缓解部分

### mitosis
https://github.com/BuilderIO/mitosis

![](https://img.alicdn.com/imgextra/i1/O1CN015qDWDE1I0BQx0qfk4_!!6000000000830-2-tps-2000-1050.png)

React/JSX 的子集，可以编译为 Vue、React、Solid、Angular、Svelte 等。很有意思的一个方向，写一遍组件然后在任意主流框架里使用。但是想了想，没想到具体可以应用在哪，就像 web components 一样，看起来很有价值，却找不到地方落地。另外，子集通常意味着有坑。

### 图解 useMemo
https://alexsidorenko.com/blog/react-render-usememo/

tl;dr

作者这一系列的文章都很不错，浅显易懂，还有配套动图。

1. props 的子项值为 object 时，比如 `props: options={{showSideBar:boolean}}`，会始终 rerender，因为值不是 Primitive（原始值）而是引用，而比较时用的是 Shallow Compare，所以每次都不同，导致 rerender
2. 解法 1 是拍平，比如 `props: showSIdeBar=boolean`
3. Dependencies List 也是 Shallow Compare，遇到每次不同的引用值，也会发生变化，比如 `useMemo(fn, [user])` 且其中 `user` 为每次 render 都新生成的对象
4. 上一条的解法是 Dependencies List 里用值为 Primary Value 对象的子项，比如 `useMemo(fn, [user.role])`

### Vue 3.2
https://blog.vuejs.org/posts/vue-3.2.html

包含，

* `<script setup>` 稳定
* 支持通过 defineCustomElement 创建 Web Components
* 性能提升
* @vue/server-renderer 不再依赖 node 内置包，目的是可跑在 CloudFlare Workers、Service Workers 等非 node 环境里

### Sprinkles v1
https://github.com/seek-oss/vanilla-extract/tree/master/packages/sprinkles

来自 css modules 的作者 @markdalgleish，提取自 vanilla-extract。

* 配置一组自定义 util 类，然后组装他们
* 可在 build 阶段静态地用，也可在 runtime 阶段动态地用
* 可用于构建自己的 0 runtime、typesafe 的 Tailwind、Styled System

### CSS 嵌套入规范
https://drafts.csswg.org/css-nesting/

![](https://img.alicdn.com/imgextra/i1/O1CN01lFXDB01CXik2Fpuzl_!!6000000000091-2-tps-1720-920.png)

CSS 嵌套的首个 Editor Draft 公开，虽然这不意味我们快能在浏览器里直接用 css nesting，但还是可以期待未来可以不再依赖 pre-processtor。

### 居中元素的 7 种办法
https://blog.suprabha.me/46-center-element-using-css

常见面试题，文章介绍了 7 中方法，

* Using Flex
* Using Grid
* Using position absolute
* Using Table
* Using writing-mode
* Using Table tag
* Using margin auto
