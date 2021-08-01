# MDH 前端周刊第 13 期：Yarn 3、React Re-rendering、Just JavaScript

**这是 「MDH：前端周刊」 第 0013 期，发表于：2021/08/02。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN015auNSV1QPqY9B0l1D_!!6000000001969-0-tps-1920-1277.jpg)

封面图：rayhennessy @ www.unsplash.com 。


## ❄️ TL;DR

👉 Yarn 3<br />
👉 React Re-rendering<br />
👉 Suspense vs. React Query<br />
👉 Airbnb server-driven UI<br />
👉 ES Modules Cli<br />
👉 useUnmountSignal<br />
👉 Just JavaScript<br />
👉 WebStorm 2021.2<br />

## ⚡ 展开讲讲

### Yarn 3
https://dev.to/arcanis/yarn-3-0-performances-esbuild-better-patches-e07

Yarn 2 步子太大，Yarn 3 的变更相比更温和一些，

* 支持 exports field
* install 性能提升，某些场景下比 pnpm 更快
* 两个新的 node_modules linker，hardlinks-local 和 hardlinks-global，后者类似 pnpm 的方式
* 改进 scripts 脚本的 shell 支持
* 支持 esbuild，提供 @yarnpkg/esbuild-plugin-pnp
* yarn 自身打包切换到 esbuild，速度提升 6 倍
* 命令行框架切换到 Clipanion 3

### React Re-rendering
https://alexsidorenko.com/blog/react-render-always-rerenders/

![](https://img.alicdn.com/imgextra/i4/O1CN011OEajw1RjpRiMHAca_!!6000000002148-2-tps-1452-1036.png)

作者用 GIF 图解释了 React 组件何时重新渲染以及如何用 memo() 减少渲染，适合初学者，5 分钟阅读量。一个 Tip 是 Provider 下的一级组件应该都 memo 下，减少 rerender。

意犹未尽的话还可以看看这篇，https://alexsidorenko.com/blog/react-list-rerender/ 。

### Suspense vs. React Query
https://swizec.com/blog/react-18-and-the-future-of-async-data/

![](https://img.alicdn.com/imgextra/i1/O1CN01nFvTYE23ga28P7FXq_!!6000000007285-1-tps-800-709.gif)

It just hit me that idiomatic `<Suspense>` for data fetching means there's no async, await, or promise anywhere. Shit just works 🤯

### Airbnb server-driven UI
https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5

![](https://img.alicdn.com/imgextra/i1/O1CN01aMAqwa1qlXJSHqJO0_!!6000000005536-2-tps-1600-946.png)

通过发送 UI 展示的元数据，来控制应用的 UI。一些优点: 灵活性，更小...

### ES Modules Cli
https://www.bram.us/2021/07/28/execute-es-modules-on-the-cli/

验证效果，

```js
":" //#;exec /usr/bin/env node --input-type=module - $@<$0

import process from 'process'
const { argv } = process
console.log(argv)
```

1. vi ./foo，填入以上代码
2. chmod +x ./foo
3. ./foo


### useUnmountSignal
https://github.com/expo/use-unmount-signal

useUnmountSignal is a React Hook to cancel promises when a component is unmounted. It uses the W3C-standard AbortSignal API to notify compatible promises when the calling component is unmounted.

```js
import useUnmountSignal from 'use-unmount-signal';

function Example() {
  // useUnmountSignal returns an AbortSignal object that APIs like fetch accept
  const unmountSignal = useUnmountSignal();
  return (
    <button
      onClick={() =>
        fetch('https://ping.example.com', { signal: unmountSignal })
      }>
      Ping
    </button>
  );
}
```

### Just JavaScript
https://justjavascript.com/

![](https://img.alicdn.com/imgextra/i2/O1CN01OCqfRV1G1RHgBNOvI_!!6000000000562-2-tps-1316-614.png)

Dan 新出的 JavaScript 基础教程。

### WebStorm 2021.2
https://blog.jetbrains.com/webstorm/2021/07/webstorm-2021-2/

![](https://img.alicdn.com/imgextra/i2/O1CN01Jce8ue1D0ZgjNQ5bd_!!6000000000154-1-tps-1400-700.gif)

看了一遍，比较有用的就这个 rename react useState 的功能。


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
