# MDH 前端周刊第 74 期：use、htmx、Stately Studio、TypeRunner、画中画

<img src="https://tva1.sinaimg.cn/large/008vxvgGly1h7fk6btttzj31900u0qa5.jpg" style="margin:0;padding:0;vertical-align:middle;" />

<p style="color:gray;text-align:center;margin-bottom:3em;">封面图：charlespostiaux @ unsplash。</p>

<p style="color:blue;font-weight:bold;">Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 0074 期，发表于 2022/10/24。</p>

本周有这些内容想和你分享：

* use
* htmx
* Stately Studio 1
* TypeRunner
* 错误提示
* 两步实现画中画

## use
https://github.com/reactjs/rfcs/pull/229

React 在「First class support for promises and async/await」中新增了一个叫「use」的 Hook，用于在客户端消费 Promise。除 Promise 之外，use 未来还可能用于消费 [Context](https://twitter.com/acdlite/status/1581401077915975680)、store、observable 等。

```tsx
function Note({ id }) {
  const note = use(fetchNote(id));
  return <div>{note.title}</div>;
}
```

值得注意的是，use 和其他 hook 不同，他可以在条件语句、block 和循环里使用。

```ts
function Note({ id }) {
  let title = defaultTitle;
  if (shouldFetchTitle) {
    title = (use(fetchTitle(id)));
  }
  return <div>{title}</div>;
}
```

## htmx
https://htmx.org/

![](https://tva1.sinaimg.cn/large/008vxvgGgy1h7cza7myx3j30z60c83z7.jpg)

htmx 在 DjangoCon 2022 的分享《Moving From React to htmx，代码行数减少 67%，依赖从 255 降到 9》之后引发了一些关注和讨论。

这是一个新的框架，他扩展了 html 的属性，通过声明属性来实现 JavaScript 交互能力，同时增量请求传递的不是 JSON 而是 HTML。

比如。

```html
<script src="https://unpkg.com/htmx.org@1.8.2"></script>
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>
```

点击按钮之后，会发送到 `/clicked` 的 post 请求，请求会响应一段 HTML，然后这段 HTML 会替换掉 button。

这个框架从前端开发者的角度来看，感觉会很奇怪。但对于讨厌写 JavaScript 的后端开发者来说，可能又正好是合适的。无需写 JavaScript，只要拼 HTML 就能完成交互。但也存在不少缺点。比如，1）和网络更耦合，2）用户界面的逻辑和后端是耦合在一起的，3）要实现移动端和 Web 端，相比 JSON 数据，HTML 数据可能会需要写两份。

## Stately Studio 1
https://stately.ai/blog/introducing-stately-studio-10

![](https://tva1.sinaimg.cn/large/008vxvgGgy1h7cyb4mt2kj31e50u0ae0.jpg)

Stately Studio 1 发布，作者是 David K. Piano，他也是 XState 的作者。Stately Studio 除了让应用逻辑可视化，把加入了团队协作的功能。这让我想到了狼叔的 [imove](https://github.com/i5ting/imove)。

## TypeRunner
https://github.com/marcj/TypeRunner

![](https://tva1.sinaimg.cn/large/008vxvgGgy1h7cyj2nmbej31ck0u0gnc.jpg)

TypeRunner 解两个问题，1）TSC 慢，2）跨语言类型计算。作者写了 30K LoC 来验证概念。实现方式是先基于 TypeScript-to-bytecode 编译器，然后在自定义的虚拟机中运行字节码。数据显示，这种方法相比 tsc 提高一百到几千倍。

注：该项目仅完成概念验证，一旦通过社区获得资金，开发将继续。

## 错误提示
https://wix-ux.com/when-life-gives-you-lemons-write-better-error-messages-46c5223e1a2f

我们分别对比下不好的和好的错误提示。

![](https://tva1.sinaimg.cn/large/008vxvgGgy1h7czuuw4jzj30zk0m8ab7.jpg)

先看不好的。

1、不恰当的语气。比如「Whoops！」。用户已经不开心了，不是装可爱的时候。  
2、技术术语。比如「无法获取到数据」。技术性的内容对用户来说不重要，他们只想知道出了什么问题以及如何解决。  
3、推卸责任。比如「无法连接到三方服务」。尽量把重点放在问题上，而不是导致问题的行动上。  
4、太官方的说辞。比如「稍后尝试」。知道原因而不告诉用户，是不好的。

![](https://tva1.sinaimg.cn/large/008vxvgGgy1h7bjkc4hpaj30zk0m8406.jpg)

再看好的。

1、发生了什么和为什么。比如「由于技术上的原因，暂时无法连接到你的账户」。  
2、提供保证。比如「你的修改已被保存到草稿」。  
3、有同情心。比如用「请」。  
4、帮助他们解决。比如「了解如何解决这个问题」，并附加一篇知识库文章和链接。  
5、总是给一条出路。比如「如果依旧能解决，请联系客服」。

## 两步实现画中画
https://www.matuzo.at/blog/2022/100daysof-day17/

![](https://tva1.sinaimg.cn/large/008vxvgGgy1h7aeetn2ijj30uk0jr0uj.jpg)

没想到这么简单。

1、通过 JS 切换画中画模式（注：Firefox 不支持）

```ts
if (document.pictureInPictureElement) {
  document.exitPictureInPicture();
} else if (document.pictureInPictureEnabled) {
  video.requestPictureInPicture();
}
```

2、给切换了画中画的视频加样式（注：兼容性和 MDN 上的数据不符，实测下来只有 Safari 支持）

```css
:picture-in-picture {
  opacity: 0.3;
  filter: blur(5px);
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
