---
title: "stitches 1、ultra、7GUIs、Clean 架构"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01qviG801rgmpf6baUl_!!6000000005661-0-tps-1920-824.jpg"
titleImageCaption: "chen1909 @ unsplash"
publishedAt: "2021/09/06"
---

## ❄️ TL;DR

👉 stitches 1.0<br />
👉 terser-webpack-plugin 5.2<br />
👉 ultra<br />
👉 7GUIs<br />
👉 Clean Architecture on Frontend<br />
👉 学会提问<br />

## ⚡ 展开讲讲

### stitches 1.0
https://github.com/modulz/stitches

![](https://img.alicdn.com/imgextra/i2/O1CN01yEyvF721zEwhnoOoN_!!6000000007055-2-tps-1460-730.png)

翻了遍文档，

* **near-zero runtime**，尺寸为 ~4.7kb gzipped，不做不必要的 runtime props 插值，所以相比其他库性能更好（但和 zero runtime 还是有本质区别）
* **ssr**，难点应该在 variants 和响应式样式部分
* **variants**，支持 Stitches 组件的多态，支持组合、推导、布尔值、默认值和响应式
* **tokens**，通过 token 实现设计风格的原子化
* **theming**，主题的定义和使用
* **overrides**，通过 `css` prop 覆盖 Stitches 组件样式

### terser-webpack-plugin 5.2
https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.2.0

terser-webpack-plugin 除了 terser，额外支持 esbuild、swc 和 uglify-js 作为压缩器。就是放 terser-webpack-plugin 里实现感觉有点怪。

### ultra
https://github.com/exhibitionist-digital/ultra

![](https://img.alicdn.com/imgextra/i1/O1CN01RHa2Qf1tKSlAxPdqx_!!6000000005883-2-tps-440-440.png)

deno + react: no build, no bundle, all stream. esbuild 用于 transpile、swc 用于分析 import 做替换（其实可以换 es-module-lexer）、react 18 suspense + swr 用于数据流、支持 ssr、1.5 的 wouter 作为路由。

### 7GUIs
https://eugenkiss.github.io/7guis/

![](https://img.alicdn.com/imgextra/i1/O1CN01aOSuoq29YguklCRW3_!!6000000008080-2-tps-404-257.png)

7GUIs 是用于验证 GUI 编程的基线，包括 7 个小任务。

* **计数器**，点一次按钮 +1
* **温度转换器**，做摄氏度和华氏度的互转，挑战点是双向数据流
* **机票预定**，支持单程和双程，挑战点是约束，比如选单程不能设置返程日期，比如去的日期必须比回的日期早
* **计时器**，可实时调整时间的时间沙漏，挑战点是并发、race condition 和实时性
* **CURD**，挑战点是数据模型和 UI 分离，
* **Circle Drawer**，用 Canvas 画圆，支持调整直径，挑战点是 undo/undo，绘图和对话框控制
* **单元格**，实现 excel 的简单可用版，支持公式，相对复杂而实际的任务，辅助评估方案是否适合大型应用

jotai 作者最近用 jotai 完成了 7GUIs 的挑战，详见 https://twitter.com/dai_shi/status/1433804219828490241 。

### Clean Architecture on Frontend
https://dev.to/bespoyasov/clean-architecture-on-frontend-4311

![](https://img.alicdn.com/imgextra/i3/O1CN01OojvZt1xKhQNa0HIy_!!6000000006425-2-tps-772-567.png)

作者介绍了 Clean 架构，包含 Domain、Application 和 Adapter 三层架构，以及他们的依赖规则，然后介绍带来的好处和成本，而从实用主义的角度出发，作者又觉得完全遵守可能反而有害，所以把必须遵守的规则减少到两条，1) 提取 domain 2) 遵守依赖规则。然后根据他的理论实践了一个 Cookie Store 项目。

如果用 MVC 类比，mode 是 Domain 实体，controller 包含 Domain 的转换和 Application 层，view 是 Adapter 层。

### 学会提问
https://m.weibo.cn/status/4677350521832901

比如请求类提问，「我正在尝试A，但是遇到了困难。到目前为止，我已经试过B，结果是C；试过D，结果是E；但现在我走不下去了，想问问你能否给我提出相关的建议？」

