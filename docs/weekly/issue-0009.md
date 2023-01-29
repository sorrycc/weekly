---
title: "GitHub Copilot、Temporal、TypeScript 4.4 Beta"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01M88lNS1bcAyih1haj_!!6000000003485-0-tps-4032-3024.jpg"
titleImageCaption: "千岛湖 @ 2021.7.4"
publishedAt: "2021/07/05"
---

## ❄️ TL;DR

👉 Umi 3.5<br />
👉 Github Copilot<br />
👉 Mini CSS Extract Plugin 2<br />
👉 Temporal<br />
👉 TypeScript 4.4 Beta<br />
👉 迈入现代 Web 开发<br />
👉 程序员的酒后真言<br />

## ⚡ 展开讲讲

### Umi 3.5 发布
https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247484015&idx=1&sn=bf539cfbd77b20dd1c77ce80c98feead

![](https://img.alicdn.com/imgextra/i1/O1CN01nZatRF1YyfaFaFBzk_!!6000000003128-2-tps-1602-970.png)

补充介绍下 MFSU（Module Federation based Speed Up solution) 的 V1、V2 和 V3。**V1 是去年做的内网 MFSU**，在线做依赖预编译，不仅二次快，首次也快，缺点是有不少坑；**V2 是上周发布的 Umi 3.5 包含的 MFSU**，本地化预编译，功能通用化，V1 的坑全解，预编译匹配度拉满所以效果稳定，支持生产和协作，能完美支持组件开发、h5、微前端、chair、sff 等 V1 不支持或支持不完善的场景，并且在 DX（Developer eXperience）上增益不少，唯一的缺点是首次编译速度没有提升；**V3 是未来一两个月要做的版本**，在预编译速度方面（同时提升首次编译速度、比肩 Vite）、产物尺寸（export 级 tree-shaking）和开发生产体验（请求合并）方面再做进一步提升。

### Github Copilot
https://copilot.github.com/

AI Completion 工具，没收到邀请的还可以先试试 tabnine、codota、aixcoder 和 kite，tabnine 风评还不错。

![](https://img.alicdn.com/imgextra/i2/O1CN01akPNts1vF5KLjs38h_!!6000000006142-1-tps-1280-720.gif)

### Mini CSS Extract Plugin 2.0
https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v2.0.0

主要是 publicPath 相关的改进，如果没有用 cdn，建议用默认的 auto。

### Temporal，新的 date/time API
https://2ality.com/2021/06/temporal-api.html

![](https://img.alicdn.com/imgextra/i3/O1CN01uv3ZaK1VPSHeq44rQ_!!6000000002645-2-tps-1262-376.png)

包含，

* Immutable 设计
* Moment 风格的日期计算
* 支持时区
* 支持范围（比如计算两个 date 之间的时差）

### TypeScript 4.4 Beta
https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/

最好用的功能是 Control Flow Analysis of Aliased Conditions，

```ts
function foo(arg: unknown) {
    if (typeof arg === "string") {
        // TypeScirpt 4.4 之前会报错
        // TypeScript 4.4 之后知道这是字符串
        console.log(arg.toUpperCase());
    }
}
```

### 迈入现代 Web 开发
https://mp.weixin.qq.com/s?__biz=MzkxNDIzNTg4MA==&mid=2247484407&idx=1&sn=c3706cdacefe4fd0ee372804ce53b4ce

![](https://img.alicdn.com/imgextra/i2/O1CN01tWiZQ41bFHB2aadft_!!6000000003435-2-tps-1080-608.png)

GMTC 2021 演讲《字节跳动的现代 Web 开发实践》全文，期待 Modern.js 的开源。

### 程序员的酒后真言
https://www.ruanyifeng.com/blog/2021/06/drunk-post-of-a-programmer.html
