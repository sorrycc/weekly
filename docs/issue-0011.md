# MDH 前端周刊第 11 期：useContextSelector、react-gui、wrap、fre conf

**这是 「MDH：前端周刊」 第 0011 期，发表于：2021/07/19。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i1/O1CN01shZbgL1ZVBhr7ghIB_!!6000000003199-0-tps-1920-1080.jpg)

封面图：dayee @ www.unsplash.com 。

## ❄️ TL;DR

👉 useContextSelector<br />
👉 react-gui<br />
👉 wrap<br />
👉 Cancel Pending API Requests<br />
👉 Webpack Federation SSR<br />
👉 fre conf<br />

## ⚡ 展开讲讲

### useContextSelector
https://github.com/facebook/react/commit/a0bb10a86c1949f478aada58f790426b9e07435f

应该不少人都在等这个 Context Selector 功能，@acdlite 实现了**仅限内部实验使用**的 `unstable_useContextSelector`。

之前是这样，

```js
const context = useContext(Context);
const whatIReallyNeed = context.selectedField;
```

现在可以这样，

```js
const whatIReallyNeed = useContextSelector(Context, c => c.selectedField);
```

### react-gui
https://ixrvy.sse.codesandbox.io/

![](https://img.alicdn.com/imgextra/i2/O1CN011l0VGU1Etp53kLQrS_!!6000000000410-2-tps-1002-550.png)

React-GUI: 来自 Facebook @necolas 的新实验项目，用于构建 React 设计系统的无障碍工具包。

### wrap
https://www.warp.dev/

![](https://img.alicdn.com/imgextra/i2/O1CN01pfSxrj21gShJeisWo_!!6000000007014-1-tps-556-238.gif)

新出的 Terminal 工具，可以申请个 Early Access，

1. 主打速度，基于 Rust，GPU 加速，Native 应用，非 Electron
2. 支持 zsh 和 bash
3. 支持扩展、自定义快捷键和主题
4. 支持分享命令、sessions 和 history
5. Real-time collaboration

![](https://img.alicdn.com/imgextra/i1/O1CN01HMzwsU29AsJ8aeomE_!!6000000008028-2-tps-800-665.png)

### Cancel Pending API Requests
https://css-tricks.com/how-to-cancel-pending-api-requests-to-show-correct-data/

![](https://img.alicdn.com/imgextra/i4/O1CN01IeiCF31IMARKLZsTG_!!6000000000878-1-tps-1280-720.gif)

* 如果用户点击足够快，由于先前的网络请求已 resolve，短时间内会渲染不正确的过时数据
* debounce 能缓解，但治标不治本
* 解决方案是使用 AbortController，不仅可以取消请求，还可以取消 event listener

```js
const abortController = new AbortController();
const signal = abortController.signal;
fetch(url, { signal });

// 然后可随时取消
abortController.abort();
```

### Webpack Federation SSR
https://www.ebey.me/blog/webpack-federation-ssr

Using Webpack we can easily generate a pre-render service for our federated components if we don't have the ability to directly consume from a node build of the remote-entry. We can use this combined with React 18 lazy on the server to consume the latest deployed version of a remote at runtime with zero deployments of the host. This is all brought together with html-to-react to allow for recursive rendering and the children of the pre-rendered remote component to participate in the react tree and use things like context.

### fre conf
https://t.bilibili.com/546781918403455918

![](https://img.alicdn.com/imgextra/i2/O1CN01BrT5Zc1uiZD0OdVUC_!!6000000006071-2-tps-1932-1060.png)

周三（7.21）晚，我会分享 MFSU 相关内容，《Webpack 提速 10 倍の秘密》。

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）

