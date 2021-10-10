# MDH 前端周刊第 23 期：Astro 0.21、ESLint 8、vite-node、Sanitizer API、Lattice

**这是 「MDH：前端周刊」 第 0023 期，发表于：2021/10/11。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i2/O1CN01VK8VIp1atIBU6fjej_!!6000000003387-0-tps-1920-1281.jpg)

封面图：huguesdb @ www.unsplash.com 。


## ❄️ TL;DR

👉 Astro 0.21<br />
👉 ESLint 8<br />
👉 vite-node<br />
👉 Sanitizer API<br />
👉 Hurl<br />
👉 React-Redux 8 Alpha<br />
👉 微前端 Lattice<br />
👉 Remix 将开源<br />
👉 好测试无需重写<br />
👉 Stripe Press<br />

## ⚡ 展开讲讲

### Astro 0.21 Preview
https://astro.build/blog/astro-021-preview

摘要，

* 切换 snowpack 到 Vite
* 新版 `@astrojs/compiler` ，基于 go，用 WASM 分发，比如用于 https://astro.build/play
* 支持 Markdown 格式的组件，在 frontmatter 的 `setup` 里可声明 import 语句
* 支持 .astro 文件的 HMR

### ESLint 8
https://eslint.org/blog/2021/10/eslint-v8.0.0-released

支持 ES2022，

* Top-level await
* Class public and private instance and static fields
* Class private instance and static methods and accessors
* RegExp match indices

### vite-node
https://github.com/antfu/vite-node

摘要，

* 利用 vite 跑 node，`npx vite-node index.ts`
* 又一种执行 node 代码的方式，竞品是 esno、tsm 等
* 优势是 Vite 的插件体系，但目前没啥插件是给 node 的

### Sanitizer API
https://web.dev/sanitizer/

前端经常需要处理不可信的字符串，然后渲染到 HTML，一不小心就会触发 XSS 问题，比如 `<img onerror=alert(0) />` 的 onerror handler。Sanitizer API 提案就是解的这个问题。

```javascript
const $div = document.querySelector('div');
const user_input = `<em>hello world</em><img src="" onerror=alert(0)>`;

// before
$div.innerHTML = user_input;

// after
$div.setHTML(user_input, new Sanitizer());
```

目前还没有浏览器支持，Chrome 93+ 可在 `about://flags` 里搜索开启，也可以用 sanitizer-polyfill 补丁，此补丁基于 DOMPurify 。

### Hurl
https://hurl.dev/index.html

![](https://img.alicdn.com/imgextra/i2/O1CN01pWh2Yd1kkivtQYBeO_!!6000000004722-2-tps-704-183.png)

纯文本格式的描述型 HTTP Client，可添加断言用于测试，基于 Rust 。

```bash
$ vi input.hurl
GET http://httpbin.org/get
HTTP/1.1 200

$ hurl input.hurl
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "hurl/1.3.1",
    "X-Amzn-Trace-Id": "Root=1-615e5f48-39ebb777482e0b162bbe5cc0"
  },
  "origin": "115.205.195.170",
  "url": "http://httpbin.org/get"
}
```

### React-Redux 8 Alpha
https://github.com/reduxjs/react-redux/releases/tag/v8.0.0-alpha.0

摘要，

* 用 TypeScript 重写，不再需要 `@types/react-redux`
* 基于 React 18 的新 Hook `useSyncExternalStore`
* 5 行代码让 react-redux 的 binding 实现回归到 react，代码如下，
* `useSyncExternalStore` 目前 Level 2，并且不用等 18 发布，可以先用 use-sync-external-store，兼容 React 16、17 和 18
* 产物 target 为 ES2017，不再支持 IE11，如有 ES5 需求，需要手动编译这部分依赖

```javascript
import { useSyncExternalStoreExtra } from 'use-sync-external-store/extra';

// React-Redux v8 alpha code in useSelector()
const selectedState = useSyncExternalStoreExtra(
  store.subscribe, 
  store.getState,
  // TODO Need a server-side snapshot here
  store.getState,
  selector, 
  equalityFn
);https://netflixtechblog.com/how-we-build-micro-frontends-with-lattice-22b8635f77ea
```

### 微前端 Lattice
https://netflixtechblog.com/how-we-build-micro-frontends-with-lattice-22b8635f77ea

![](https://img.alicdn.com/imgextra/i4/O1CN01754O8Y1Oc5vNslsoc_!!6000000001725-1-tps-1200-514.gif)

摘要，

* Netflix 团队画了个微前端的大饼
* 通过微前端的方式处理依赖，依赖可以有很多渠道，比如来自其他应用，或者来自其他同事的电脑
* 元数据驱动，通过 `useFetchPluginConfiguration(appName)` 加载
* 依赖有不同的加载方式，通过 Module Federation、ES Modules、自定义加载的方式加载远程模块
* 提供一套插件体系，Pluggable 扩展子组件，usePluggableState 扩展属性，PluginHost 加载子模块，...
* 目前还在设计阶段，未谈到是否有开源计划

```javascript
import { Pluggable, PluginHost, usePluggableState } from '@netflix-internal/rgt-components/lib/lattice';
import { getDefaultRoutes } from '../routes';
import { Content, Header, Router } from './components';
import { useFetchPluginConfiguration } from './hooks';

export const App = ({ appName }: { appName: string }) => {
  // 获取当前应用的元信息
  const config = useFetchPluginConfiguration(appName);

  // hooks 类型的插件体系，允许插件扩展 routes
  const routes = usePluggableState('AppRoutes', null, getDefaultRoutes());

  return (
    <PluginHost {...config}>{/* Host will load remote modules */}
      <Router routes={routes}>
        <Header appName={appName} links={routes} />
        <Pluggable identifier="AppContent">{/* 允许插件扩展子组件 */}
          <Content />
        </Pluggable>
      </Router>
    </PluginHost>
  );
};
```

### Remix 将开源
https://github.com/remix-run/remix

预计本周开源，大家可以期待一下。

### 好测试无需重写
https://owengage.com/writing/2021-10-09-good-tests-dont-change/

摘要，

* 人们抱怨测试成本高是因为经常需要重写，为什么重写？通常有两类原因：1）测试了实现细节，然后实现方式一变，就得改测试 2）测试没有做足够抽象
* 实现细节是有上下文的，同一个 case 在场景 A 是实现细节，在场景 B 下可能不是，区分是否实现细节可以从目标用户的角度来判断
* 测试为什么要抽象？因为不做抽象，改起来可能需要改上百个测试用例。那抽象什么？how 和 what 都可以抽象。how 比如请求的发起，build 的发起；what 比如数据的准备

### Stripe Press
https://press.stripe.com/

推荐几本书，

* 《Working in Public》: 开源软件维护
* 《Get Together》: 社区管理
* 《High Growth》: 创业
* 《An Elegant Puzzle》: 工程师管理


## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
