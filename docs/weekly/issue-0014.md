---
title: "Babel 7.15 const enum、Parcel 2 RC、webpack buildHttp"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN017IqX5R24PvFLqUNNV_!!6000000007384-0-tps-1920-1281.jpg"
titleImageCaption: "vorosbenisop @ unsplash"
publishedAt: "2021/08/09"
---

## ❄️ TL;DR

👉 Babel 7.15<br />
👉 Parcel 2 RC<br />
👉 Vite 2.5.0-beta.0<br />
👉 pnpm v7 WIP<br />
👉 webpack 5.49 支持 buildHttp<br />
👉 优秀前端的工具修养<br />
👉 手写 Vue<br />

## ⚡ 展开讲讲

### Babel 7.15
https://babeljs.io/blog/2021/07/26/7.15.0

包含，

* 默认开启 top level await
* 支持 Hack-style pipeline operator，见下述代码块
* 支持 TypeScript 里使用 const enum 和 namespace alias

```ts
// Input
"World"
  |> `Hello, ${#}!`
  |> alert(#);

// output
var _ref, _ref2;
_ref2 = (_ref = "World", `Hello, ${_ref}!`), alert(_ref2);
```

### Parcel 2 RC
https://v2.parceljs.org/blog/rc0/

* Automatic differential bundling
* 38% faster（在 beta 版的基础上）
* New JSX runtime
* Better worker support
* Library build improvements
* Glob imports
* Plugin API consistency
* Easier image transformer
* Lady beetle
* Tons of bug fixes

### Vite 2.5.0-beta.0
https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#250-beta0-2021-08-03

* 替换 css 压缩为 esbuild，虽然尺寸增加 1%，但性能提升 6x
* 新增 modulepreload 补丁
* ...


### pnpm v7 WIP
https://twitter.com/pnpmjs/status/1423402048008110089

* 每个命令快 0.2s
* 安装不再依赖 node 环境
* 删除 pnpx，换成 pnpm dlx（类似 yarn dlx）

### webpack 5.49 支持 buildHttp
https://github.com/webpack/webpack/releases/tag/v5.49.0

和 deno 有点像，多了一种消费 http import 的选择。node 侧目前还不能运行时消费 http import，打包时消费看来是唯一的选择；browser 侧打包 http import 也能让 build 产物更稳定可控，同时减少 http 请求数，消灭串行请求问题。

* 默认不打包 http(s) import
* 配置 `experiments.buildHttp` 会打包，并生成 webpack.lock 和 webpack.lock.data 缓存文件，后者缓存的是文件内容
* dev 阶段远程文件有变更时会更新 lock 文件，配置 `experiments.buildHttp.upgrade: false` 禁用更新
* prod 阶段直接使用 lock 文件且不更新和不发 http 请求，除非设置了 `Cache-Control: no-cache` 缓存头
* 通过 `experiments.buildHttp.cacheLocation: false` 可禁用 webpack.lock.data 缓存
* webpack cache 在这里的作用是缓存请求响应

类比 deno，

```bash
$ DENO_DIR=./webpack.lock.data
$ development: deno --lock=webpack.lock --lock-write --reload
$ production: deno --lock=webpack.lock --cached-only
```

### 优秀前端的工具修养
https://www.yuque.com/surfacew/fe/uqr4ug

工欲善其事必先利其器。

### 手写 Vue
https://juejin.cn/post/6992018709439053837

源码也是同理，我们按照电磁轨道炮的思路一步步来，先搞清楚最核心的基础部分，慢慢的再一步步去进阶。这样的学习方法比我们肯定一上来就去拆解一个完整版的电磁轨道炮要强得多。
