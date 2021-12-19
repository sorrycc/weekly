# MDH 前端周刊第 33 期：Github Wrapped、Rails 7、CRA 5、structuredClone

**这是 「MDH：前端周刊」 第 0033 期，发表于：2021/12/20。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

![](https://img.alicdn.com/imgextra/i4/O1CN01qgrJVR24Evm5fuMEZ_!!6000000007360-0-tps-1920-1080.jpg)

封面图：sunx @ www.unsplash.com 。


❄️ TL;DR
------

👉 我的知识星球<br />
👉 12 Days of Web<br />
👉 Github Wrapped<br />
👉 Rails 7<br />
👉 Create React App 5<br />
👉 await.ops<br />
👉 structuredClone<br />
👉 qwik<br />
👉 react-router 6 完全指南<br />
👉 Rust for JavaScript peeps<br />
👉 molecule<br />

⚡ 展开讲讲
------

### 我的知识星球

![](https://lh3.googleusercontent.com/J5OORNenZgEeX4eX_jvOMwUVxwsHkkfL38mhxrmqa4Rc5_bRKwdYK0uegZhQfGg5C33DvpH8UoELy8D-BINa5mJ-O_1OtJiq8m2L0IMKMaPxIIpOuqzXP_9M_t6dKSmCs15hFtEc)

推广下我的知识星球，上周开通的。

如果每周的前端周刊看不过瘾，可以考虑订阅，周刊的 10 则信息是从 50-80 则信息里挑出来的，完整信息列表会以每日「简报」的形式出现在星球中。

另外，每个工作日晚上我会写一篇短文，选题参考前面图片介绍。以下是上周写的内容，第一周数量有点超...

* 前端流量密码
* 2022 前端会有什么新变化
* 我的面试套路
* 一个 React 渲染问题
* Umi 周会分享：新技术的启发 @ 2021.12.16
* 小贴士：别用「匿名 default 导出」
* 资源整理：「前端视角学 Rust」
* 「MDH 前端周刊」写作流程
* 我的信息流 2021.12

### 12 Days of Web

[https://12daysofweb.dev/](https://12daysofweb.dev/)

每年结束都会有这种日更数周的活动，内容包含 HTML、CSS 和 JavaScript，从已更 6 天内容来看，质量不错。

### Github Wrapped

[https://wrapped.run/](https://wrapped.run/)

![](https://lh6.googleusercontent.com/pwvZlz1z_6nq31Oxnx8z6_xbqcCyjefgjwJOJm6iIYWXDMK7lErW8jj4LuXeT-g12FJjqGA2Vsqemu4WL_x4lD55SDeLwAay4FemQkkMI6wCf5Ve3RjJ4o98nBNl7P68KhLQPNoW)

年末了，每个网站都在出总结报告。可以用 Github Wrapped 看看自己一年在 Github 上的贡献，上图是我的。

其中视频的动态生成是基于 remotion.dev。

### Rails 7

[https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision](https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision)

![](https://lh6.googleusercontent.com/AbhKNAdPKgvcifIcBmk9XSsrAk9oaixBBJwK4WhdGyv2SxC6TSwFpyv4VMms6s2xoDV0Sd6oNhaTdZ_HzoG8phO14nwg3VR7h69fs9OmUoreeaSRRlAPmvet7yTU6ly4aUwdjKqA)

为啥这里会出现 Rails 的新闻？因为 Rails 7 最大的卖点是前端改动。

由于 HTTP/2、ESM、ES6 的普及，使得既不依赖 node 工具，又能使用 npm 包等现在 JavaScript 功能成为可能。Rails 7 基于 importmaps、es-module-shims、jspm.io 实现，具体实现在 [importmap-rails](https://github.com/rails/importmap-rails)。

比如要使用 react 和 react-dom，通过工具把他们及其依赖的 importmaps 拿到即可，

```bash
$ ./bin/importmap pin react react-dom
Pinning "react" to https://ga.jspm.io/npm:react@17.0.2/index.js
Pinning "react-dom" to https://ga.jspm.io/npm:react-dom@17.0.2/index.js
Pinning "object-assign" to https://ga.jspm.io/npm:object-assign@4.1.1/index.js
Pinning "scheduler" to https://ga.jspm.io/npm:scheduler@0.20.2/index.js

$ ./bin/importmap json
{
  "imports": {
    "application": "/assets/application-37f365cbecf1fa2810a8303f4b6571676fa1f9c56c248528bc14ddb857531b95.js",
    "react": "https://ga.jspm.io/npm:react@17.0.2/index.js",
    "react-dom": "https://ga.jspm.io/npm:react-dom@17.0.2/index.js",
    "object-assign": "https://ga.jspm.io/npm:object-assign@4.1.1/index.js",
    "scheduler": "https://ga.jspm.io/npm:scheduler@0.20.2/index.js"
  }
}
```

令人意外的是，他们大胆地直接用 es-module-shims 把这套用在生产上。怪不得 es-module-shims 最近频繁发版。

### Create React App 5

[https://github.com/facebook/create-react-app/releases/tag/v5.0.0](https://github.com/facebook/create-react-app/releases/tag/v5.0.0)

终于发大版本了，没啥大变化。一是依赖库的大版本更新，包括 Webpack 5、Jest 27、ESLint 8、PostCSS 8；二是支持 Tailwind CSS。

### await.ops

[https://github.com/tc39/proposal-await.ops](https://github.com/tc39/proposal-await.ops)

await.ops 提案，刚发现，还挺喜欢这个语法糖，😎。比如可以用 await.all 代替 await Promise.all，示例如下。

```javascript
// before
await Promise.all(users.map(async x => fetchProfile(x.id)))

// after
await.all users.map(async x => fetchProfile(x.id))
```

### structuredClone

[https://web.dev/structured-clone/](https://web.dev/structured-clone/)

![](https://lh6.googleusercontent.com/vH3NgQaOoSyjMyNKB4WOQEo3ohwBI1GbXCa0ry1s8v0erxghcDAKhGITMB0UtD32DPtlOuTqMpD7MhHRxs6TKXN8YE5RkuSc0bZVtcSyf3dHpLev4KpaUBEwwyPZ4cWimNXT36PJ)

学习到一些奇怪的 deep clone 方法。

* shadow copy 用 Object assign 或 … 就好，比如 Object.assign({}, obj) 或 { …obj }
* deep copy 的方法就多了，分三大类，lodash.cloneDeep、JSON.parse(JSON.string(obj)) 和 structuredClone，同时他需要考虑各种边界场景，比如循环引用、函数、内置类型（Map、Set 等）、Class、prototype 等
* lodash.cloneDeep 应该是用地最多的，各种边界场景也处理地也最好
* JSON.parse(JSON.stringify(obj)) 性能最好，但只适用简单数据，不支持大部分边界场景
* structuredClone 的边界场景处理处于前二者中间，性能方面，小结构没 JSON 快，大结构和 JSON 差不多
* structuredClone 其实不算新出，因为之前很多场景的背后是通过他实现的，只不过这次露出给开发者使用，所以用一些 hack 的手法早就能用上其特性了，比如图中的 MessageChannel、History API 和 Notification API

```javascript
// 示例：用 Notification 实现 structuralClone
function structuralClone(obj) {
  return new Notification('', {data: obj, silent: true}).data;
}
```

### qwik

[https://github.com/BuilderIO/qwik](https://github.com/BuilderIO/qwik)

![](https://lh4.googleusercontent.com/--gyU2qPaNaN8a8g0f0S3zCdHDHImjh0qT2_ePxY7ebbVr31doDjbnKGhUlFeUGSiU2K9eWUnDec4egpzwRUVKRUs_EyGX0YNrux1h4D5YEFguIpTIxoTioO3pfnPf_g1K_prxhv)

又一个 0JS 框架，和 Astro 类似。不一定用他，但可了解背后的思想。

Qwik 两大特性是 HTML 的 Resumability 和 JavaScript 的 Fine-Grained Lazy-Loading。

与 Resumability（可恢复）相对的是 Replayable。现代框架大多是 Replayable，数据存与框架内部，SSR 拿到 HTML 后，此 HTML 仅是视图展现，不包含事件处理器及其绑定，所以客户端通常需要下载完整框架和模板代码，然后重新执行一遍，React 里很形象地叫做「注水」。

Resumability 需以 DOM 为中心设计框架，事件、绑定、状态等要可被序列化并能存于 DOM 结构中。这样 SSR 后拿到的 HTML 无需下载框架代码即可交互，对于提升 TTI 很有效。

Fine-Grained Lazy-Loading（细粒度懒加载）是其第二特性。主要是要「细」，现代框架通常可以实现路由或组件级的按需渲染，但粒度还不够细。细是啥意思？比如 <parent><middle><child /></middle></parent>，三级组件之间不耦合，如果只针对 middle 做 re-render，那 parent 和 child 的模板和事件代码就不应该被下载。

### react-router 6 完全指南

[https://ui.dev/react-router-tutorial/](https://ui.dev/react-router-tutorial/)

写地特别详细，推荐搭配官网文档一起阅读。

### Rust for JavaScript peeps

[https://github.com/yoshuawuyts/rust-for-js-peeps](https://github.com/yoshuawuyts/rust-for-js-peeps)

来自 ​yoshuawuyts 的 Rust 入门教程，解释从 JavaScript 开发者的角度看，Rust 是长什么样的。很喜欢这个作者，当初做 dva 就部分参考了他的 choo。

### molecule

[https://github.com/DTStack/molecule](https://github.com/DTStack/molecule)

![](https://lh4.googleusercontent.com/5zHh4b36modDvd3dvvuZjyS6IWat5SWgpFswhEza-D6ZllQc-5QOjx0zFVgYKa8EYWAopeBTa7fl-wmFw5d0fASfjoeBhsLccK0yrTc2fDWU3hNjFS6elxtlGMvclqeYRi5v22SB)

mumiao 投稿，轻量级的 Web IDE UI 框架。

核心功能，

* 内置 React 版本的 Visual Studio Code Workbench UI
* 基本兼容 Visual Studio Code 的 ColorTheme
* 支持使用 React 组件自定义 Workbench UI 样式
* 内置 Monaco Editor Command Palette、Keybinding等模块，并支持扩展
* 支持 i18n，内置简体中文、English 2 种语言
* 内置一个简单的 Settings 模块，支持在线编辑修改以及扩展
* 内置默认的 Explorer, Search 等组件，并支持扩展
* Typescript 支持

## 🕒 订阅

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
