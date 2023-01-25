---
title: "Umi 2.5 Beta、ES2021、SWR 1 Beta"
titleImage: "https://img.alicdn.com/imgextra/i1/O1CN01PUHDkm27AIZjami7i_!!6000000007756-0-tps-1920-1007.jpg"
titleImageCaption: "sxy_selia @ unsplash"
publishedAt: "2021/06/28"
---

## ❄️ TL;DR

👉 Umi 2.5 Beta<br />
👉 ES2021 获批<br />
👉 Mitt 3<br />
👉 Storybook for Vite<br />
👉 SWR 1 Beta<br />
👉 Less ModifyVars Example<br />
👉 Styled Components 解密<br />


## ⚡ 展开讲讲

### Umi 2.5 Beta
https://github.com/umijs/umi/issues/6766

![](https://img.alicdn.com/imgextra/i1/O1CN01X9yWC41GreQfBOBQG_!!6000000000676-2-tps-1234-453.png)

Umi 2.5 Beta 新增 MFSU（Module Federation based Speed Up solution）提速功能，MWFA（Make Webpack Fast Again），经验证，Ant Design Pro 模板项目二次启动 1-3s，热更新 500ms 左右。

* 基于 Webpack
* 适用于生产
* 支持多人协作（复用团队编译好的依赖）
* 通用方案
* Developer eXperience（DX）Optmized

Beta 测试群好评如潮！

![](https://img.alicdn.com/imgextra/i1/O1CN01KlcAov1PVVpGgcEq4_!!6000000001846-2-tps-1094-974.png)

### ES2021 获批
https://h3manth.com/ES2021/

ES2021 已获 Ecma General Assembly 批准，包含：

* Logical Assignment Operators (&&= ||= ??=)
* Numeric Separators (1_000)
* Promise.any & AggregateError
* String.prototype.replaceAll
* WeakRefs & FinalizationRegistry


### Mitt 3
https://github.com/developit/mitt/releases/tag/3.0.0

Mitt 发布 3.0

* 支持删除某个 type 的所有事件
* 改善类型提示，event 的参数类型可通过推导得出
* 使用 Package Exports

### Storybook for Vite
https://storybook.js.org/blog/storybook-for-vite/

![](https://img.alicdn.com/imgextra/i4/O1CN01NADNxO22euyTkVbxX_!!6000000007146-1-tps-1830-1152.gif)

Storybook 最近动作频频，自 6.2 支持 webpack 5 后，6.3 又通过扩展的方式支持了 Vite。

### SWR 1 Beta

https://github.com/vercel/swr/releases/tag/1.0.0-beta.7

包含，

* 使用 bunchee 打包工具
* 自定义 Cache Provider
* 支持中间件

### Less ModifyVars Example
https://codepen.io/seven-phases-max/details/dPYxzR

![](https://img.alicdn.com/imgextra/i2/O1CN01AdWlpY1Ma8z0JRonv_!!6000000001450-1-tps-453-153.gif)

利用 less modifyVars 动态修改 less 变量的例子，利用这个扩展下可实现动态换肤。

### Styled Components 解密
https://www.joshwcomeau.com/react/demystifying-styled-components/

![](https://img.alicdn.com/imgextra/i3/O1CN01oDk4Ya1nQ3tO31nHv_!!6000000005083-2-tps-1000-500.png)

文章介绍 `styled.x` 定义是如何转换为 css 的，通过探究原理，介绍如何构建一个 toy 版的 styled-component。
