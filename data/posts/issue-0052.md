---
title: "你不需要 UI 框架、useEvent、useTilg、wireit"
titleImage: "https://img.alicdn.com/imgextra/i2/O1CN01ekUd1C1sDJ3Z8X6Lc_!!6000000005732-0-tps-1629-1080.jpg"
titleImageCaption: "tents_and_tread @ unsplash"
publishedAt: "2022/05/09"
---

本期主要内容有这些：

- 你不需要 UI 框架
- useEvent
- useTilg
- wireit
- React 面试题

## 你不需要 UI 框架
https://www.smashingmagazine.com/2022/05/you-dont-need-ui-framework/

现有 UI 框架（包括 Bootstrap、Material UI 等）并不适用所有场景，尤其是对 C 的业务。原因包括，1、使用 UI 库像搭积木，但搭这件事也需要有专业的设计基础，比如只有 Google 才能让 Material Design 应用长得好看，2、UI 库能在 80% 场景下节省时间，但遇到 20% 和需求不符的场景时，反而需要花相比自己写更长时间去解，长期看效率反而低，3、可访问性和可用性，这没啥好说的，但如果是出于这个原因，会有其他更好的选择。

作者的推荐是不包含样式的 Headless UI 组件，2022 年大家写一个 Modal 组件已经没有必要重头开始写了，因为从逻辑和功能上基本上都是差不多的。这部分的社区库比如 React Router 和 Remix 作者维护的 Reach UI、Tailwind team 维护的 Headless UI、Radix Primitives、React ARIA 等。

同时，介于有样式和无样式之间的也有选择。比如 Chakra UI，他是 UI 库，但仅提供基础样式。

## useEvent
https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md

有了 useEvent，和 useEffect 说再见吧。

React 团队发布一个 RFC，提供 useEvent hook，解 hooks 存在的闭包陷阱问题。主要应该是代替 useEffect。useEffect 里的每个值都是依赖，依赖变了 useEffect 重新执行，但一些场景下从需求上来看并不需要重新执行。现在虽然结合 useMemo、useRef 和 useCallback 也能解，但比较繁琐。

简化版实现。

```js
function useEvent(handler) {
    const handlerRef = useRef(null);
    // 视图渲染前及每次 shouldUpdate 时更新 handlerRef.current
    useLayoutEffect(() => {
        handlerRef.current = handler;
    });
    // 用 useCallback + 空依赖，确保返回函数的引用一致
    return useCallback((...args) => {
        const fn = handlerRef.current;
        return fn(...args);
    }, []);
}
```

## useTilg
https://github.com/shuding/tilg

![](https://img.alicdn.com/imgextra/i3/O1CN01LdI4Qx1F3RVot6Z3z_!!6000000000431-0-tps-1300-500.jpg)

React 组件调试用的 hooks 工具，可记录谁在哪里为什么更新。实现上用 `React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current` 拿到 name 和 id，用 new Error 的堆栈拿到 path 和 logPath 信息，然后利用 useEffect 和 useLayoutEffect 在不用阶段 log 信息。

## wireit
https://github.com/google/wireit

![](https://img.alicdn.com/imgextra/i4/O1CN01XRb1mA1D59lFfnyrI_!!6000000000164-0-tps-300-83.jpg)

google 出的 npm script 增强工具，和 zx 一样有给人眼前一亮的感觉。相比竞品 turborepo、nx、chomp 和 bazel，wireit 的优点包括是，

1、支持本地和 Github Action 缓存
2、支持 watch 文件变更后重新执行
3、同时支持 single repo 和 mono repo
4、不改变使用习惯，依旧使用 npm run xxx 的方式执行命令
5、支持命令之间的依赖，并支持依赖不同包下的命令

## React 面试题
https://blog.bitsrc.io/frequently-asked-questions-react-7d54078e58a7

收集了一波面试题，如何你对以下题目感兴趣，可以一看。

1、什么是虚拟 DOM？
2、什么是 key？
3、什么是 prop driling？如何避免？
4、什么是受控组件和非受控组件？分别在什么时候使用？
5、useEffect 及其 clean up 函数的执行时机？
6、什么是闭包陷阱？
7、如何做 props 的类型校验？
8、什么是严格模式？
