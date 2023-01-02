# MDH 前端周刊第 62 期：前端架构、Vite 3、CSS Variables 2、最伟大的程序员

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h48vnuqhfsj20sg0g0gna.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：https://www.barrywebbimages.co.uk/Images/Macro/Slime-Moulds-Myxomycetes/。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0062 期，发表于 2022/07/18。</p>

本周有这些内容想和你分享：

- 构建面向未来的前端架构
- Vite 3
- CSS Variables 2
- 最伟大的程序员
- DRY 过誉
- SolidJS
- ESM Main 检测

## 构建面向未来的前端架构
https://frontendmastery.com/posts/building-future-facing-frontend-architectures/

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h46g97c5jyj21ss0ry77i.jpg)

本文是关于前端架构的组件部分。如果有写过组件，可能都有遇到随着业务迭代而快速增加复杂度，最终写出臃肿不堪难以维护的组件。为啥别人写的代码简洁易懂？缺的是经验吗？不是，缺的是方法论。我觉得此方法同样适用非组件场景。

心智模型的重要性。心智模型会影响我们的决定，进而影响代码的整体结构。如果一直做错误的大大小小的决定，那代码很快就会变成屎山。每个人的心智模型不可能完全一样，所以注定会做出不同的决定。对于团队而言，用框架和工具约束，让大家不做或少做决定是个很好的策略，比如用 prettier 统一编码风格。

文中有个例子。你写了一个组件，过了一周，产品迭代，而之前写的组件不能很好满足新需求。这时你有两个选择，A）思考之前的抽象是否正确，如果不正确，分解了重新做，B）增加一个额外 props，组件里加一些恶心的条件判断。你会如何选择？你会在乎之前投入的沉没成本还是面向未来考虑更多？其实没有对错，注意 By Scene。

自上而下 vs. 自下而上。「你可以自上而下或自下而上地构建。也就是说，你可以从构建层次结构中较高的组件开始。在比较简单的例子中，通常自上而下更容易，而在较大的项目中，自下而上更容易，并在构建过程中编写测试。」

自上而下是直观的、能快速出货的，大家通常也会这么干。当涉及到分解用户界面时，在功能区域周围画上方框，然后成为你的组件。这种功能分解的过程是自上而下的，通常会直接导致创建具有特定抽象性的专门组件。需求会改变。而在几个迭代过程中，这些组件很容易迅速变成单体巨石组件。

```
<SideNavigation items={[{label,to}, {label,to}, …]} />
```

单体巨石组件有不少问题，包括 1）不容易复用子组件 2）包变大，比如 SSR 场景可能只希望渲染第一时间被用户看到的组件从而提速 3）rerender 问题导致运行时性能不好，也会让代码复杂，出现很多不必要的 memo 调用 4）不好的抽象导致项目复杂，迭代困难。「敏捷软件开发最重要的经验之一是迭代的价值；这在软件开发的各个层面都是正确的，包括架构。」

自下而上不那么直观，最初可能比较慢。因为这种方式会产生很多小组件，而实际中不是每个小组件在最初都需要可复用。所以前期需要花更多时间和努力，让复杂性被封装在每个小组件里。好处是长远看会更快，因为适应性更强。同时避免了单体巨石组件和前面介绍的他会带来的大量问题。

```
<SideNavigation>
  <NavItem to="/home">Home</NavItem>
  <NavItem to="/settings">Settings</NavItem>
</SideNavigation>
```

## Vite 3
https://vitejs.dev/blog/announcing-vite3.html

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h46g9omfoij21o00u0q67.jpg)

Vite 发展好快。周 npm 下载量超 100 万次（虽然和 webpack 的 2100 万+ 还是差不少）。今年开始有大量框架基于 Vite，包括 Nuxt 3、SvelteKit、Astro、Hydrogen、SolidStart 和 Laravel，还有 [Vite Ruby](https://vite-ruby.netlify.app/)，Storybook 也有[基于 Vite 的 Builder](https://github.com/storybookjs/builder-vite)。vitejs.dev 新文档基于 VitePress。

变动点是：

* 默认端口号变更为 5173 和 4173
* 改进有 Proxy 场景的 dev server 连接方案，详见 [vite-setup-catalogue](https://github.com/sapphi-red/vite-setup-catalogue)
* 冷启动如果有依赖缺失时（比如被插件注入）可以避免完全重新加载
* 重写 `import.meta.glob`，支持数组，支持 Negative Pattern，支持指定 Named Imports、支持 Eager Import 作为 flag 形式传入、支持 custom query
* 修改 WASM 的引入方式，和未来的标准一致
* SSR 使用 ESM 作为默认构建产物
* 支持相对 base，比如部署到 IPFS
* 支持在 build 阶段也使用 esbuild 构建依赖，以避免使用 @rollupjs/plugin-commonjs，从而让 dev 和 build 保持一致。实验性，配置开启
* HMR Partial Accept，实验性支持
* Install 尺寸减少 7%，从 19.1M 到 17.8M。减少的方式是把大部分人不需要的依赖变成可选依赖，比如 terser、node-forge
* 大量 Bugfix，issue 从 770 减少到 400
* 不再支持 Node 12，至少要 Node 14.18+
* 以 ESM 形式发布，为了兼容，同时带了 CJS Proxy
* 浏览器基线调整为支持 es module、es dynamic import 和 import.meta 功能的浏览器
* Vite 本身的工程化部分。测试基于 Vitest、VitePress 构建加入 CI、升级到 pnpm 7、插件用 unbuild 进行打包
* 通过 [vite-ecosystem-ci](https://github.com/vitejs/vite-ecosystem-ci) 确保生态 CI 正常

## CSS Variables 2
https://www.bram.us/2022/07/08/the-future-of-css-variable-units-powered-by-custom-properties/

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h46g9zve3yj20v40m9758.jpg)

最近，CSS Working Group 已批准开始 `css-variables-2` 规范的工作，第一个计划增加的是对于「自定义单位」的支持。

比如，

```
:root {
	--size: 8px;
}
```

现在我们可以这么用，

```css
elem {
	width: calc(4 * (var(--size)));
}
```

之后可以直接将 `--size` 属性作为一个单位，简单很多，

```css
elem {
  width: 4--size;
}
```

然后还可以和 `@property` 结合使用，

```css
@property --fem {
	syntax: "<length>";
	initial: clamp(10px, 1vw + 1vh, 1rem);
	inherits: true;
}

.fluid-type {
	font-size: 1.2--fem; /* 不会比 12px 小，或者比 1.2 rem 大 */
}
```

## 最伟大的程序员
https://swizec.com/blog/what-makes-a-great-software-engineer/

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h48lb5r4w8j210m0f4djb.jpg)

公司想要雇佣和留住优秀的工程师，大学想要培养优秀的工程师，而年轻的工程师想要成为优秀的工程师。但是，关于什么是优秀的工程师，却没有一个好的定义。

微软的朋友为此整了个论文，梳理了 53 个特质，共四类，见图 1。包含内在的「个人特质」和「决策能力」，以及外在的「团队协作」和「软件产品」（编码能力）。

## DRY 过誉
https://gordonc.bearblog.dev/dry-most-over-rated-programming-principle/

DRY（Don't Repeat Yourself）可能是最简单的原则，也是大家学编程遇到的第一个原则。这个原则本事没问题，但过度 DRY，遇到重复代码反应过度就不好了，因为这可能会导致不必要的复杂性或者错误的抽象。

## SolidJS
https://blog.startifact.com/posts/solidjs-fits-my-brain/

SolidJS = React + MobX。

## ESM Main 检测
https://2ality.com/2022/07/nodejs-esm-main.html

小贴士，可以检测是否为主模块。CJS 中通过 `require.main === module` 即可判断，ESM 中复杂一些。

```
import * as url from 'node:url';

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) 
    // Main ESM module
  }
}
```



## 周刊一锅端

- [**早早聊的 18 个成长宝藏库**](https://mp.weixin.qq.com/s/3yLbUwqzSy2gFHXkO0PICg)：前端早早鸟，前端早早跑
- [**云谦和他的朋友们**](https://mp.weixin.qq.com/s/NGux3r0P1JJH_z4-vfeksQ)：Umi、Dva 等库作者
- [**DEX 周刊**](https://newsletter.dex.group/)：关于产品、设计、前端、软件的精华资讯邮件列表
- [**前端食堂**](https://mp.weixin.qq.com/s/86Cz3KUWqutu9J0V4tyabQ)：你的前端食堂，吃好每一顿饭

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600)，这是对我最大的帮助。下期见！

<p style="color:#b5495b;">MDH，让开发者有笑容 :)</p>
