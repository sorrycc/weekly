---
title: "unplugin、SWR 1、zx 4、手写 Valtio、领域"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN014PujEY20lDCRHiSSQ_!!6000000006889-0-tps-1920-1280.jpg"
titleImageCaption: "sickle @ unsplash"
publishedAt: "2021/08/30"
---


## ❄️ TL;DR

👉 GitHub CLI 2.0<br />
👉 TypeScript 4.4<br />
👉 unplugin<br />
👉 JavaScript 标准库提案<br />
👉 SWR 1.0<br />
👉 zx 4.0<br />
👉 DiceBear<br />
👉 手写 Valtio 数据流<br />
👉 领域的定义、寻找和精进<br />

## ⚡ 展开讲讲

### GitHub CLI 2.0
https://github.blog/2021-08-24-github-cli-2-0-includes-extensions/

1.0 是一刀切的思路，并不能满足每个开发者的需要，所以 2.0 支持扩展，开发者可以开发扩展，也可以使用别人开发的扩展。扩展以 `gh-` 开头的仓库，可通过 `gh extension create` 创建项目，实现基于 go。

### TypeScript 4.4
https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/

学太多反正记不住，只写一个最有用的吧，在 `function test(a: string | undefined) {}` 里，之前 `if (a) a.trim()` 是正常的，而 `const b=a; if(a) a.trim()` 会报错，TypeScript 4.4 里支持这种 aliased condition 的判断，不再报错。

### unplugin
https://github.com/unjs/unplugin

为构建工具设计的统一（Unified）的插件系统，支持 Vite、Rollup 和 Webpack。用 Rollup 的方式写，unplugin 处理兼容。功能方面仅支持各构建工具的交集，不支持的部分通过 hooks 手动区分处理。

### JavaScript 标准库提案
https://github.com/tc39/proposal-built-in-modules

目前 stage 1，通过 `js` namespace 提供内置模块（或者叫标准库），比如 `import { stringify } from 'js:json'`。

### SWR 1.0
https://swr.vercel.app/blog/swr-v1

![](https://img.alicdn.com/imgextra/i4/O1CN01F9lr0U1SQQHp6LY1d_!!6000000002241-2-tps-2466-906.png)

新功能如下，

1. 功能不减尺寸减半，部分功能支持 path import，比如 `swr/infinite`
2. 支持 SSR、ISR、SSG 场景下使用 Fallback Data，也可用于测试时 MOCK API，缺点是两份数据，一份 html，一份 api 接口
3. 通过 `swr/immutable` 支持 Immutable Mode，此模式下会禁用 revalidation 且只请求一次
4. 自定义 Cache Provider，默认是空 Map，具体场景比如 mutate cache 里的多个 key，实现基于 LocalStorage 的长效缓存等
5. 支持中间件，允许在 SWR hooks 执行之前和之后进行扩展，具体场景比如给请求打日志、修改数据显示状态比如延迟更新、序列化 Object 类型的 key 等

### zx 4.0
https://github.com/google/zx/releases/tag/4.0.0

上了两个期待已久的特性，1) 支持 path，2) 支持 cjs 输出，这意味着可以用 esno 或 ts-node 直接跑 zx 脚本；但也有个不喜欢的改动，用 ts 写时 zx 的功能需要 import 才能用 。

### DiceBear
https://github.com/dicebear/dicebear

DiceBear is an avatar library for designers and developers. You can choose between simple identicons and lovely designed characters.

### 手写 Valtio 数据流
https://blog.axlight.com/posts/how-valtio-proxy-state-works-vanilla-part/

1. 基于 Proxy
2. 通过 set 记录变更，比如 `let version = 0; const foo = new Proxy({}, set() { version += 1; })` 然后 `foo.bar = 1` 就能记录了
3. 提供 snapshot 方法访问当前快照，version 有变时才生成新的
4. 提供 subscribe 方法，在 set 里执行注册的所有 listener
5. 通过 snapshot + subscribe 把 mutable state 连接到 react
6. 除此之外，还要支持嵌套对象、以及对象是数组的场景
7. 然后基本流程就 ok 了，但别高兴，这不是结束，而是开始，接下来需要面对的是大量的 edge case

代码，

```ts
let version = 0;
let lastVersion;
let lastSnapshot;
const listeners = new Set();

const p = new Proxy({}, {
  set(target, prop, value) {
    ++version;
    target[prop] = value;
    listeners.forEach((listener) => listener());
  },
});

const snapshot = () => {
  if (lastVersion !== version) {
    lastVersion = version;
    lastSnapshot = { ...p };
  }
  return lastSnapshot;
};

const subscribe = (callback) => {
  listeners.add(callback);
  const unsubscribe = () => listeners.delete(callback);
  return unsubscribe;
};

subscribe(() => {
  console.log('mutated!');
});

p.a = 10; // shows "mutated!"
console.log(snapshot());  // ---> { a: 10 }
p.b = 20; // shows "mutated!"
console.log(snapshot()); // ---> { a: 10, b: 20 }
```

### 领域的定义、寻找和精进
https://mp.weixin.qq.com/s/lFQhP9LvjN2BBxUkZl3YCg

> 每期一个非技术类的文章分享。

1. 努力很重要。更重要的是，你选择在什么领域努力。
2. 可是，什么是「领域」？它跟兴趣、项目有什么区别，又有什么联系？为什么你必须认真地思考，自己要往哪个方向发展？
3. 你所在领域，最重要的问题是什么，为什么你没有致力于其中之一？ -- Richard Hamming

