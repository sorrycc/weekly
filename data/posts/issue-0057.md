---
title: "DX 辐射圈、Npm 库不需要 Bundler、Rustpad、qnm、Plasmo"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN01YQNfNk1hKDFs0Jit1_!!6000000004258-0-tps-1620-1080.jpg"
titleImageCaption: "lux17 @ unsplash"
publishedAt: "2022/06/13"
---

本周有这些内容想和你分享：

- DX 架构辐射圈
- Npm 库不需要 Bundler
- Rustpad
- 别用 LeetCode 面试
- qnm
- Plasmo

## DX 架构辐射圈
https://dx.tips/circles

![](https://img.alicdn.com/imgextra/i1/O1CN0103c4ME1go9WwcnKbo_!!6000000004188-0-tps-1333-516.jpg)

这张图是关于 DX（开发者体验）的辐射图，主要讲了三件事。

1、好的 DX 是方方面面的，不仅要把产品做好，还要关心文档、内容、社区。内容和社区可根据实际情况调整，但好文档是却是必不可少的。再但是，文档好到极致却是没有文档，通过约定或者使用时教给用户是更好的方式。

2、DX 要完整，不能只是一部分很好。有个易踩的误区是只关注「新手路径」，比如开发个 Hello World 然后部署上线，这肯定是很开心快乐的。但同时要关注「异常工程」的建设，关注用户使用时可能不快乐的场景。因为往往能走到不快乐路上的人才是你真正的用户。

3、这是辐射圈，由内向外，最里面的产品是最重要的。先有产品，再是文档，然后是内容，等等。产品越早，越应该强调内部圈子。

## Npm 库不需要 Bundler
https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler

作者的观点是，「只用 tsc」。

不用 microbundle、esno、unbuild、preconstruct、tsup、tsdx、vite library mode、packemon、ts-library-template、parcel、dts、pkgroll、mkdist 等，因为担心他们的维护，容易踩坑。

怎么用 tsc？配置合适的 tsconfig.json 然后执行 `tsc` 就好。注意 target 用 es2018，只做少量编译；moduleResolution 用 node，不要用 pure esm 方案；

```json
{
  "include": ["src"],
  "compilerOptions": {
    "target": "es2018",
    "outDir": "dist",
    "lib": ["dom", "esnext"],
    "declaration": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true
  }
}
```

还有学到的一点是，声明 `sourceMap: true` 在构建时产出 .map 文件，然后 npm 发包时带上 src 目录，这样可以方便库的用户基于 sourceMap 定位到源码。

## Rustpad
https://github.com/ekzhang/rustpad

![](https://img.alicdn.com/imgextra/i1/O1CN01WTYUEs1NXECAmpm9N_!!6000000001579-0-tps-1361-786.jpg)

Rustpad 是一个基于操作转换算法的高效和极简的开源协作式文本编辑器。它让用户在浏览器中写代码时进行实时协作。Rustpad 是完全自我托管的，适合放在一个小小的 Docker 镜像中，不需要数据库。

服务器是用 Rust 编写的，使用 warp 网络服务器框架和 operating-transform 库。使用 wasm-bindgen 将文本操作逻辑编译成 WebAssembly 代码，并在浏览器中运行。前端使用 React 和 TypeScript 编写，并与 Monaco 对接，后者是支持 VS Code 的文字编辑器。

在架构上，客户端代码通过 WebSocket 与存储内存数据结构的服务器进行通信。这使得编辑器的速度非常快，允许我们不用提供一个数据库，并使测试更容易。其代价是文件是瞬时的，在服务器重启或24小时不活动后会丢失。

## 别用 LeetCode 面试
https://fev.al/posts/leet-code/

如果我雇用一个园艺师，我不会要求他们告诉我斐济榕树的分类，或者西海岸花旗松的具体繁殖期。我要让他们修剪一棵树，看看结果是否适合我。

面试是为了找到能胜任工作的人，而市场上 99.9% 的工作都与 Leet Code 无关。作者有看到一些明显能胜任工作的人，却被 Leet Code 门槛刷掉。入职后每天都需要解决问题，而大多数问题的解法却不是算法。框架、库、Google、StackOverflow、书籍、文献、搜索、询问或其他东西，都能会比一个算法更能解决问题。同时，Leet Code 不能反映很多问题，包括代码质量、变量名、代码风格、代码组织、范式、测试、工程化等。

作者的做法是，1）找下候选人的 Github 代码，2）组织一个练习，考查候选人写代码的能力，比如要求发现一段代码中的问题（解模棱两可问题的能力），比如单元测试要求识别出来并补充（测试能力），比如要求写一段代码（编码能力），比如指导之后要求重新写（快速学习能力），等等。

## qnm
https://github.com/ranyitz/qnm

![](https://img.alicdn.com/imgextra/i3/O1CN0121stg224VsVWnNQi7_!!6000000007397-1-tps-1024-1024.gif)

当调试一个问题时，有时会需要检查 `node_modules` 目录下的模块的安装版本是什么。目前的解决方案，比如运行 `npm list`，不仅速度不够快，而且会打印出太多杂乱的信息。

qnm 可以快速获取这些信息，并试图只过滤出重要的部分，提供类 fuzzy 交互式搜索的体验（如上图），同时支持 yarn 和 npm。

## Plasmo
https://github.com/PlasmoHQ/plasmo

![](https://img.alicdn.com/imgextra/i3/O1CN01GamRsq1Sk7QAhpoAe_!!6000000002284-0-tps-1668-1080.jpg)

Plasmo 是 Slogan 是浏览器扩展界的 Next.js。构建你的产品，不再担心配置文件和构建浏览器扩展的奇怪的特殊性。支持所有主流浏览器。

三条命令快速上手。

```bash
$ pnpm dlx plasmo init example-dir
$ cd example-dir
$ pnpm dev
```
