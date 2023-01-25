---
title: ": vs. ::、SSR 流式渲染、React 新手陷阱、Error Boundary"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01pHa8cu26xTbSfCplB_!!6000000007728-0-tps-1623-1080.jpg"
titleImageCaption: "nasa @ unsplash"
publishedAt: "2022/09/05"
---

本周有这些内容想和你分享：

- 一周新闻
- : vs. ::
- React 18 SSR 流式渲染
- useMemo + useCallback
- 10 个 React 新手陷阱
- Error Boundary 指南
- 现代 JS 库打包
- 禁用 Cookie 后会怎样

## 一周新闻
新增「一周新闻」栏目，一句话介绍本周内发现的前端资讯和发布。

* [Heroicons](https://heroicons.com/) 发布 2，从头绘制 260 个图标
* [bunchee 发布 2](https://github.com/huozhi/bunchee/releases/tag/v2.0.0)，用 SWC 编译，改进多 exports 支持
* [Rollup 发布 3 Beta](https://github.com/rollup/rollup/pull/4549)
* [clean-pkg-json](https://github.com/privatenumber/clean-pkg-json)，删除不需要的 package.json 字段，通常结合 prepack script 使用
* [ts-prune](https://github.com/nadeesha/ts-prune)，用于找到 TypeScript 项目未使用的 export 信息，消除 dead code
* [module-federation/typescript](https://github.com/module-federation/typescript)，Typescript Types Support For Module Federation
* [Cypress 发布 10.7](https://docs.cypress.io/guides/references/changelog#10-7-0)，新增可视化 cypress studio 自动生成测试脚本；实验性支持 svelte 组件测试等
* [create-rust-app](https://github.com/Wulf/create-rust-app)，一行命令创建 rust + react 项目
* [WebKit on GitHub!](https://webkit.org/blog/13140/webkit-on-github/)，WebKit 从 svn 切换到 git，并在 Github 上进行维护
* [React Router 6.4](https://reactrouter.com/en/6.4.0-pre.14) 将于下周发布
* [Github Trending](https://github.com/trending) 将于 2022.9.30 关闭，原因是没人用

## : vs. ::
https://whitep4nth3r.com/blog/pseudo-classes-and-pseudo-elements/

这是 CSS 中一个小知识，你知道 CSS 中 : 和 :: 的区别是什么吗？

1、前者是伪类，后者是伪元素。伪即假，伪类和伪元素都是假的，不存在于 HTML 或 DOM 元素的，他们是由 CSS 创建的。

2、[伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)用于表示元素的一种状态，比如 :hover、:visited、:checked 等，CSS 中差不多有 30+ 种伪类。[伪元素](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)用于选择元素的一部分，比如 ::first-letter、::first-line、::before、::after 等，CSS 中目前有 17 个伪元素。

## React 18 SSR 流式渲染
https://juejin.cn/post/7137976587047141407

React 18 SSR 流式渲染可基于 Suspense + Lazy、renderToPipeableStream 和 hydrateRoot 实现。Suspense + Lazy 在客户端用于代码拆分和懒加载，在服务端则用于流式渲染，renderToPipeableStream 用于流式返回数据，hydrateRoot 用于在流式返回后就开始注水而无需等到全部内容都返回。

以上完成了流式渲染，但还有个问题需要解，即「数据怎么获得」？并且需要同时考虑服务端和客户端。作者给的解是还处于实验阶段的 Data Fetching API。

```ts
const resource = fetchProfileData();

function Posts() {
  const posts = resource.posts.read();
  // render with posts
}
```

目前要支持 Data Fetching API，可将 Promise 包装成 Data Fetching API。

```ts
function wrapPromise(p) {
  let status = 'pending';
  let result;
  let suspensder = p.then(r => {
    status = 'success';
    result = r;
  }).catch(e => {
	  status = 'error';
	  result = e;
  });
  return {
    read() {
      if (status === 'pending') throw suspensder;
      else if (status === 'error') throw result;
      else if (status === 'success') return result;
    }
  }
}
```

Suspense 识别 Data Fetching 的 loading 状态是基于 read 方法的返回值。如果 throw promise 即还在 loading，如果 throw error 则出错，如果返回数据则完成 loading。

## useMemo + useCallback
https://www.joshwcomeau.com/react/usememo-and-usecallback/

![](https://img.alicdn.com/imgextra/i4/O1CN01IDmUdN1vntXsmq0Va_!!6000000006218-0-tps-1878-652.jpg)

这是一篇很好的 useMemo 和 useCallback 入门文章，但没有引入啥新知识，我就不展开了，感兴趣的可自行阅读。

## 10 个 React 新手陷阱
https://medium.com/@imranfarooq0306/10-react-traps-to-avoid-as-react-developer-5570808e346b

![](https://img.alicdn.com/imgextra/i2/O1CN01DQiZVL1XuGGwD54Fl_!!6000000002983-0-tps-1400-840.jpg)

React 是 unopinionated 的，同样的问题会存在许多不同的解法，这给开发者留下了大量的空间来用自己愚蠢的想法把事情搞砸。在今天的文章中，我们将看看 React 中的 10 个陷阱（反模式），以及改进我们代码的技巧和窍门，同时也可以为前端技术面试做准备。

1、巨型组件。就是一个组件内很大，通常是因为不知道如何组织代码，或者不想把时间浪费在组织代码上。这样的组件很难理解、重构和测试。通过 WebStorm 的「Refactor - Move」或者 VSCode 的 [Glean 插件](https://github.com/wix/vscode-glean)快速提速代码到文件，可以节省你不少时间。

2、嵌套陷阱。不要在组件内定义子组件，比如 `function Parent() { const Child = () => <div>Child</div>; return <><Child /></> }`，解法是把 Child 定义提到外面。

3、没有用 useMemo/useCallback。遇到重计算的点，每次 re-render 会重新执行导致性能消耗严重，比如 `const total = expensiveCal(count)`。解法是用 useMemo 避免重复计算，比如 `const total = useMemo(() => expensiveCal(count), [count])`。如果遇到函数，记得切换到 useCallback。

4、无意义的 div 元素。React 组件只能由一个根组件，当需要渲染多个相邻的元素时，你可能会引入 div 元素。但这不是必要的，不必要的 div 元素可能导致可访问性和 CSS 样式问题。更好的做法是用 Fragment 组件，比如 `<><Foo /><Bar /></>`。

5、混乱的文件。随着组件越来越多，在一个文件中导出多个组件是「诱人」的。但是这样，也会很快让事情变得复杂。更好的做法是有一套自己的文件组织规范，比如一个组件一个文件，或者一个组件一个文件夹，同时在文件夹下可能还会有自己的测试文件等。

6、巨大的 Bundle 产物。大型复杂应用的最大问题之一就是产物很大，这会让页面加载变慢，因为浏览器需要很长时间来下载、解析和执行 JavaScript Bundle 产物。解法是应用内置了 code splitting 功能的框架，或者使用 Suepense + React.lazy + import()。

7、Prop Drilling。当上层组件中持有 state，而一个深度嵌套的组件需要使用这个 state 时，一种做法是用 props 透过中间组件一层层往下传，而实际上中间组件并不需要他们，这就是 Prop Drilling。解法是用 Redux 或其他数据流工具，或者使用 Context。

剩下 3 个是 Prop Plowing、Try Some Curry 和 Code Smarter，感觉不太重要，是为了凑 10 个加的，我就不介绍了，有兴趣的可以查看原文。

## Error Boundary 指南
https://meticulous.ai/blog/react-error-boundaries-complete-guide/

![](https://img.alicdn.com/imgextra/i1/O1CN01usjRiv1QCZAvSruf9_!!6000000001940-0-tps-2043-1080.jpg)

虽然理想情况下是在生产之前捕获错误，但有些错误是会躲过测试的，比如网络错误，而如果没有正确处理，这些错误会导致 React 声明周期崩溃，导致白屏，并最终影响你的用户。正确的方式是提供适当的视觉反馈和潜在的行动指引（例如：重试机制）来优雅的处理这些错误。

你可能会有几个疑问。1）为啥会白屏？因为从 React 16 开始，没有被捕获的错误将导致整个 React 组件树的卸载。2）为啥 try.catch 不行？因为 React Hooks 执行是异步的，捕获不了。

解法当然就是用 React 官方提供的 [Error Boundary](https://reactjs.org/docs/error-boundaries.html) 了，通过 Error Boundary 把组件包起来，可以想象成是包了一层 try…catch，组件报错会到此为止，不会再往上报。一个简单的 ErrorBoundary 如下。

```tsx
class ErrorBoundarySimple extends React.Component {
  state = { hasError: false };
  componentDidCatch(error: unknown) {
    // report the error to your favorite Error Tracking tool (ex: Sentry, Bugsnag)
    console.error(error);
  }
  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) { return <p>Failed to fetch users.</p>; }
    return this.props.children;
  }
}
```

但是官方的 Error Boundary 其实有缺陷，他不支持以下场景的报错，包括 Event handlers、异步代码比如 setTimeout 或 requestAnimationFrame 回调、SSR、Error Boundary 自己抛的错。同时，我们可能还需要提供重试机制等行动指南。解法是用 [react-error-boundary](https://github.com/bvaughn/react-error-boundary) 这个库。

react-error-boundary 如何支持重试？他提供的 ErrorBoundary 组件可以配置 FallbackComponent 组件，而这个组件有 error 和 resetErrorBoundary 两个 props，后者用于重试。

```tsx
import { ErrorBoundary } from 'react-error-boundary';
function ErrorFallback({ error, resetErrorBoundary }) {
  return <>
    <pre>error.message</pre>
    <button onClick={resetErrorBoundary}>retry</button>
  </>
}
export default function App() {
  return <ErrorBoundary FallbackComponent={ErrorFallback}><Users /><ErrorBoundary>;
}
```

react-error-boundary 如何捕获 React 生命周期外的错误？比如 Event Handler 和异步代码。react-error-boundary 提供 useErrorHander hook，他会返回处理错误的函数。

```tsx
import { useErrorHandler } from 'react-error-boundary';
export default App() {
  const handleError = useErrorHandler();
  function handleSubmit(event) {
    fetch(xxx).then(...).catch(e => handleError(e));
  }
  // do render
}
```

## 现代 JS 库打包
https://github.com/frehner/modern-guide-to-packaging-js-library

这是一篇关于如何打包 JavaScript 库的现代化指南，介绍了维护 JavaScript 库的一些基础知识和最佳实践，推荐作为入门阅读。

## 禁用 Cookie 后会怎样
https://blog.tomayac.com/2022/08/30/things-not-available-when-someone-blocks-all-cookies/

![](https://img.alicdn.com/imgextra/i4/O1CN01RxksTO27O2ZoU2zpV_!!6000000007786-0-tps-1221-952.jpg)

会报错！

```ts
localStorage;
// Uncaught DOMException: Failed to read the 'localStorage' property from Window: Access is denied for this document.

sessionStorage;
// Uncaught DOMException: Failed to read the 'sessionStorage' property from 'Window: Access is denied for this document.

await caches.open('test');
// Uncaught DOMException: An attempt was made to break through the security policy of the user agent.

const openRequest = indexedDB.open('test', 1);
openRequest.onerror = function () {
  console.error(openRequest.error);
};
// DOMException: The user denied permission to access the database.

openDatabase('test', '1', 'test', 1);
// Uncaught DOMException: An attempt was made to break through the security policy of the user agent.

await navigator.serviceWorker.register('.');
// Uncaught DOMException: Failed to register a ServiceWorker for scope ('https://example.com/') with script ('https://example.com/'): The user denied permission to use Service Worker.

await navigator.storage.getDirectory();
// Uncaught DOMException: Storage directory access is denied.

webkitRequestFileSystem(
  window.PERSISTENT,
  1,
  () => {},
  (err) => console.error(err)
);
// DOMException: An ongoing operation was aborted, typically with a call to abort().

webkitRequestFileSystem(
  window.TEMPORARY,
  1,
  () => {},
  (err) => console.error(err)
);
// DOMException: An ongoing operation was aborted, typically with a call to abort().
```

解法很简单也很粗暴，就是加 `try…catch`。

