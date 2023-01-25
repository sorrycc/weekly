---
title: "React Router 6.4、初高级程序员、单文件 Deno、二维码原理"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01lUj4jp25ONdbpPxUE_!!6000000007516-0-tps-1620-1080.jpg"
titleImageCaption: "agathadepine @ unsplash"
publishedAt: "2022/09/19"
---

本周有这些内容想和你分享：

- React Router 6.4
- 初级程序员 vs. 高级程序员
- 2022 JavaScirpt 新特性
- 单文件 Deno 网站
- 函数组合
- 二维码原理

## 一周新闻
* [preact 发布 10.11](https://github.com/preactjs/preact/releases/tag/10.11.0)，新增 useId Hook，对齐 React 18
* [React Router 发布 6.4](https://github.com/remix-run/react-router/releases/tag/react-router-dom%406.4.0)，大量新功能，包括数据加载/突变/重新验证、错误/中断/竞争条件处理以及支持 Suspense 的加载/骨架 UI 等
* dashi 发布 [jotai-signal](https://github.com/jotai-labs/jotai-signal)，类 preact signal，但实现方式不同，jotai-signal 底层基于 experiment_use
* [npm 发布 9-pre.0](https://github.com/npm/cli/releases/tag/v9.0.0-pre.0)，改进 workspace 的 semver 匹配规则，删除 bin、set-script、birthday 等命令
* [swc 发布 1.3](https://github.com/swc-project/swc/releases/tag/v1.3.0)，swc minify 功能已稳定
* [lightningcss 发布 1.15](https://github.com/parcel-bundler/lightningcss/releases/tag/v1.15.0)，inline source map，新增 preserveImports 和 transformStyleAttribute 配置项

## React Router 6.4
https://github.com/remix-run/react-router/releases/tag/react-router-dom%406.4.0

![](https://img.alicdn.com/imgextra/i4/O1CN01QSIXc01f7jE9AGWXY_!!6000000003960-0-tps-1888-952.jpg)

React Router 发布 6.4，大量新功能，包括数据加载/突变/重新验证、错误/中断/竞争条件处理以及支持 Suspense 的加载/骨架 UI 等。

1、路由创建方式变更，之前用 BrowserRouter + Routes，现在改用 createBrowserRouter 创建路由和 RouterProvider 渲染路由。

```ts
<RouterProvider router={createBrowserRouter([
  { path: '/', element: <Root /> }
])} />
```

2、路由级的数据流，基于 loader + action + Form，在路由配置中声明 loader 和 action，然后如下使用即可。

处理数据加载。

```ts
// 声明数据
export async function loader() {}
// 使用数据
useLoaderData();
```

处理数据提交。

```ts
// 使用定制表单元素
<Form />
// 处理表单提交
export async function action() {}
```

3、延迟数据加载方案，基于 defer + useAsyncValue/Await。由于考虑到 CLS（Content Layout Shift），默认没有做延迟数据加载，开发者可以手动开启。用哪种方式其实是需要权衡的，各有利弊。

```ts
// 1、loader 里延迟返回
export async function loader() {
  return defer({ count: 0 });
}

// 2、渲染时用 Await 延迟渲染，不阻塞 Suspense 的瀑布流
<Await resolve={data.count} errorElement={<p>error load count</p>}>
  {(count) => <p>{count}</p>}
</Await>
```

4、ScrollRestoration 可以模拟浏览器在加载器完成后位置变化时的滚动恢复，以确保滚动位置恢复到正确的位置，甚至跨域。

```ts
<ScrollRestoration />
```

## 初级程序员 vs. 高级程序员
https://codewithstyle.info/software-vs-systems/

![](https://img.alicdn.com/imgextra/i4/O1CN01Bt6zN91UvgelqgAJE_!!6000000002580-0-tps-461-461.jpg)

要分别初级程序员和高级程序员，其中一点是看他们关注的是「软件」还是「系统」。

**初级工程师关心编写软件的问题。** 他们重视代码质量，采用最佳实践，努力采用最先进的技术。他们在学习新技术方面投入了大量时间。对他们来说，最终的目标是创建优雅的、可执行的、可维护的软件。

**高级工程师关心的是建立系统。** 对他们来说，创建软件只是其中的一个步骤。首先，他们会质疑这个软件是否需要被建造。他们会问它能解决什么问题，为什么要解决这些问题。他们询问谁将会使用这个软件，在什么规模上使用。他们考虑软件将在哪里运行，以及他们将如何监测它是否正常工作。他们还决定如何衡量该软件是否真正解决了它应该解决的问题。

## 2022 JavaScirpt 新特性
https://olivernguyen.io/s/js2022/

![](https://img.alicdn.com/imgextra/i2/O1CN01r5GQCd1O5ZtwS200m_!!6000000001654-0-tps-1840-704.jpg)

1、私有属性，class 里以 # 开头的即私有属性或方法。

```ts
class Foo {
  name: 'foo';
  #count = 0;
  inc() { this.#count += 1 }
}
```

2、用 in 检测私有属性。

```ts
class Foo {
  #count = 0;
  static isFoo(obj) {
    return #count in obj;
  }
}
```

3、数组和字符串的 at 方法，相比用 `[]` 访问，at 可以用负数。

```ts
[1,2,3].at(-1);
'123'.at(-1);
```

在 at 之前我们通常会用 `.slice(index)[0]` 访问可能存在负数的 index，但性能看起来就不够好。

4、数组的 findLast 和 findLastIndex 方法用于从后往前找。

```ts
[1,2,3,4].findLast(v => v%2 === 1);
[1,2,3,4].findLastIndex(v => v%2 === 1);
```

5、用 hasOwn 代替 hasOwnProperty。

```diff
- const hasOwnProperty = Object.prototype.hasOwnProperty;
- hasOwnProperty.call(object, 'foo');
+ Object.hasOwn(object, 'foo');
```

6、error 有个新属性叫 cause，用于把 error 传给新的 error。

```ts
fetch('/foo').catch(e => {
  throw new Error('failed to fetch', { cause: e });
});  
```

## 单文件 Deno 网站
https://deno.com/blog/a-whole-website-in-a-single-js-file-continued

![](https://img.alicdn.com/imgextra/i1/O1CN01kF2FKc1vQzjwf5E0B_!!6000000006168-0-tps-1612-926.jpg)

Deno 更新了一篇文档，介绍如何在一个文件中完成网站。并且功能齐全，包含动态 API、动态渲染、动态路由、表单等。

## 函数组合
https://medium.com/javascript-scene/why-every-react-developer-should-learn-function-composition-23f41d4db3b1

![](https://img.alicdn.com/imgextra/i2/O1CN017Gn43U1k7Ky72kyOS_!!6000000004636-0-tps-1080-1086.jpg)

函数组合有很多场景，这篇文章介绍了如何把他用在 React 项目中，换一种代码组织方式，让代码更简洁、优雅和可扩展。

假如你有一个项目，项目里有这样的需求，1）检查用户登录状态，2）特性检测按需渲染，3）埋点日志需求，4）layout 渲染。你可能会这么写。

```tsx
const App = () => {
  useEffect(() => { if (!user.isLogin) signIn() }, []);
  useEffect(() => { log({ pageName, uid }) }, []);
  return user.isAdmin ? <AdminComponent />
    : <>{ features.includes('foo') && <Foo /> }<Conent /></>;
}
```

这里的 问题是，如果有多个组件都需要类似的逻辑，你可能就要复制粘贴了。解是用 Provider + HOC + Composition + Currying。

```tsx
const App = withProviders({ showFooter: false })(() => {
  return <Content />;
});
```

withProviders 如下。

```ts
const withProviders = (options) =>
  compose(
    withUser,
    withFeatures,
    withLogger,
    withLayout(options)
  );
```

withLogger 如下。

```ts
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => { log({ pageName, uid }) }, []);
    return <WrappedComponent {...props} />;
  };
}
```

## 二维码原理
https://typefully.com/DanHollick/qr-codes-T7tLlNi

![](https://img.alicdn.com/imgextra/i3/O1CN01TrtfVa1NaQy8kE8tT_!!6000000001586-0-tps-2024-1012.jpg)

这篇文章介绍了二维码的构成。

1、Finder pattern 用于定位二维码  
2、Alignment pattern 用于决定二维码的方向，即哪个方向是朝上的  
3、Timing pattern 用于决定二维码的大小  
4、Format info 保存二维码的格式信息，包括错误纠正等级、掩码类型、错误纠正格式  
5、Data 是二维码的字符数据，从右边开始  
6、Error correction 是 Data 用剩下的空间，用于存储纠正信息
