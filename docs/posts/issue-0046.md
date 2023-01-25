---
title: "Remixing React Router、Umi Blog Stack、Ladle、monorepo、pnpm"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01VYosG11LJMytczuT1_!!6000000001278-0-tps-1620-1080.jpg"
titleImageCaption: "uyilman @ unsplash"
publishedAt: "2022/03/28"
---

本期主要内容有这些：

- Remixing React Router
- JSON 技巧
- UMI Blog Stack
- Ladle
- typesVersions
- monorepo 实践
- pnpm 技巧

## Remixing React Router
https://remix.run/blog/remixing-react-router

![](https://img.alicdn.com/imgextra/i1/O1CN01Vk74Nb1TbhlMT246H_!!6000000002401-0-tps-1667-425.jpg)

Remix 团队计划将 remix 的 loader 和 action 能力带入 react-router，在 loader 中定义初始数据，在 action 中处理 form 提交数据，通过 useLoaderData 获取数据，通过 useTransition 获取表单提交状态等。

开发者要关心的是，在 react-router 层增加两个配置项，loader 和 action，分别处理上述任务，还是非常友好的。

```js
<Route path="/" element={<App />} loader={} action={} />
```

带来的好处是初始请求更快（见下图），以及处理数据提交时更优雅，无需 useEffect，无需处理 error/success 状态，无需 cache，无需返回 clean 函数等等。

![](https://img.alicdn.com/imgextra/i3/O1CN017rokWE1lVRQlgiljs_!!6000000004824-0-tps-1668-465.jpg)

但真实项目中，直接把请求逻辑放在路由配置里是不合适的，这就需要框架的支持，比如 Remix 和 Umi。

React 18 带来了很多新特性，Suspense、React Server Components 和 Steaming 等，他们定义了如何在数据 ready 时渲染的 how 和 where，但没有定义如何做数据请求。react-router 的新数据请求方案正好弥补了这一点。

最后，还有个变更是 react-router 仓库会更名为 remix，同时包含 remix、react-router 和 history 等包。

## JSON 技巧
https://dev.to/siddharthshyniben/5-secret-features-of-json-you-didnt-know-about-5bbg

直接上代码。

```js
// 正常用
JSON.stringify(foo)
JSON.stringify(foo, null, 2)
// 空格用 lol 代替
JSON.stringify(foo, null, 'lol')
// 不输出 password
JSON.stringify(foo, (key, value) => {
  if (key === 'password') return;
  return value;
});
// 只输出 name 和 age
JSON.stringify(foo, ['name', 'age'])
// class 到 str 的来回转换，比如用于持久化缓存
class Foo {
  toJSON() { return 'foo' }
  static fromJSON(key, value) { return new Foo() }
}
JSON.stringify(new Foo())
JSON.parse(str, Foo.fromJSON)
// parse 也可以隐藏部分信息
JSON.parse(str, (key, value) => {
  if (key === 'password') return;
  return value;
});
```

## UMI Blog Stack
https://next.umijs.org/docs/tutorials/blog

![](https://img.alicdn.com/imgextra/i2/O1CN01O2rskv1i5O3HkWxO9_!!6000000004361-0-tps-1698-1080.jpg)

基于 Umi 4，手把手教你写一个基于 Serverless 的 Blog 应用，以下是技术栈。

- Umi：框架
- PlanetScale：MySQL 服务（免费版够用）
- Prisma：MySQL 客户端
- TailwindCSS：样式
- Upstash：Redis 服务
- Vercel：部署平台

## Ladle
https://www.ladle.dev/blog/introducing-ladle/

![](https://img.alicdn.com/imgextra/i1/O1CN01S6sSnm21GMEre7kNF_!!6000000006957-0-tps-1688-1080.jpg)

Uber 工程师开发的 Storybook 竞品，支持 [Component Story Format（CSF）](https://storybook.js.org/docs/react/api/csf)，可直接替换 Storybook。

Uber 有大量应用 Storybook，但由于构建性能、dev 性能、bundle 产物、测试等方面的不好表现，他们决定基于 Vite 重写了一份，性能提升如下。

![](https://img.alicdn.com/imgextra/i4/O1CN01wlQ9Bi1LYU39X7QPC_!!6000000001311-0-tps-667-407.jpg)

有需要的可通过以下命令 1 分钟上手体验。

```bash
$ mkdir my-ladle
$ cd my-ladle
$ pnpm init -y
$ pnpm i @ladle/react react react-dom
$ mkdir src
$ echo "export const World = () => <p>Hey</p>;" > $ src/hello.stories.tsx
$ pnpm ladle serve
```

![](https://img.alicdn.com/imgextra/i1/O1CN01iwxDaw23vhDYXURFY_!!6000000007318-0-tps-1806-838.jpg)

## typesVersions
https://antfu.me/notes#types-for-sub-modules

一个小 Tip。

```
+ dist
  - index.js
  - index.d.ts
  - foo.js
  - foo.d.ts
+ src
  - index.ts
  - foo.ts
- package.json ("name": "bar")
```

比如上述这个 name 为 bar 的 npm 包，发布之后希望可以通过 import('bar') 和 import('bar/foo') 分别访问到 dist 下的两个文件，同时类型提示准确。

由于根目录下没有 foo.js 和 foo.d.ts，需要做隐射。package.json 中的 exports 属性可以做 export 的隐射，但不会覆盖类型；类型隐射可通过 [typesVersions](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions) 配置实现。

最终配置如下。

```
{
  "exports": {
    ".": "./dist/index.js",
    "./foo": "./dist/foo.js"
  },
  "typesVersions": {
    "*": {
      "*": [
        "./dist/*"
      ]
    }
  }
}
```

## monorepo 实践
https://www.yuque.com/docs/share/69ee97ff-42cc-46cf-a409-31967339a9cf

![](https://img.alicdn.com/imgextra/i1/O1CN01h4vA9C2563nQfMtnn_!!6000000007476-0-tps-1334-798.jpg)

Umi 周会上社区同学 yingci 的分享，基于 pnpm、turborepo、mfsu、qiankun 等的大型项目 monorepo 实践，一个 repo 包含了 60+ 项目。

## pnpm 技巧
https://twitter.com/jaredpalmer/status/1506634640509083649

Turborepo 作者分享了 5 个 pnpm 技巧。

1、通过 --filter 参数指定安装 workspace 下某个 package 的依赖，比如 `pnpm i --filter my-app...`

2、通过 package.json 中的 peerDependencyRules.allowedVersions 配置可通过 peerDependencies

```
{
  "pnpm": {
    "peerDependencies": {
      "allowedVersions": { "react": "17" }
    }
  }
}
```

3、通过 `pnpm env use` 可切换 pnpm 使用的 node 版本，无需 nvm、fnm 或volta，比如 `pnpm env use --global 16`

4、pnpm 可作为 server 运行，比如 `pnpm server start`，https://glitch.com/ 就基于此

5、通过 `.pnpmfile.cjs` 定义 hooks，可在安装前动态修改依赖的 package.json

## 发布

以下是上周社区的重要发布。

- [Umi 发布 4.0.0-rc.9](https://github.com/umijs/umi-next/releases/tag/v4.0.0-rc.9)，包含等 @umijs/max cli 更名、umi cli 启动 5 倍提速、mfsu 完善、权限插件功能补全等13 项更新
- [Boa 发布 0.14](https://boa-dev.github.io/posts/2022-03-15-boa-release-14/)，Boa 是用 Rust 编写的 JavaScript 引擎
- [WebStorm 发布 2021.3.3](https://blog.jetbrains.com/webstorm/2022/03/webstorm-2021-3-3/)
- [react-runner 发布 1.0](https://github.com/nihgwu/react-runner/releases/tag/v1.0.0)
- [Motion 发布 Developer Tools](https://motion.dev/tools)，Motion One 动画调试工具，目前 Sponsor only
- [阿里低代码引擎 LowCodeEngine 正式开源](https://github.com/alibaba/lowcode-engine)
- [Parcel 发布 2.4](https://parceljs.org/blog/v2-4-0/)，默认开启 Parcel CSS
- [Vercel 支持 pnpm](https://vercel.com/changelog/projects-using-pnpm-can-now-be-deployed-with-zero-configuration)，有 pnpm-lock.yaml 时自动切换到 pnpm 做依赖安装
- [Chromium WebContainers 结束 Beta 测试](https://blog.stackblitz.com/posts/webcontainers-out-of-beta/)
- [Firebase Blog 改版](https://firebase.blog/)，基于 astro.build 实现，速度极快
