---
title: "ChatGPT、Vite 4、SWR 2、Intl.Segmenter"
titleImage: "https://img.alicdn.com/imgextra/i3/O1CN010xZp1Z1hBy7qd3C3a_!!6000000004240-2-tps-2846-1576.png_1200x1200.jpg"
titleImageCaption: "prompt: illustration. A fantasy adventure set in a world where the three body problem has been solved, allowing for incredible feats of space travel and exploration"
publishedAt: "2022/12/12"
---

## 新闻
> 推荐下 YingCi 的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯，也是本文新闻的重要渠道之一。也可订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

* [Ruby 3.1](https://github.com/ruby/ruby/pull/6353) 增加了一个新的核心类，叫做 Data，用来表示简单的不可变的值对象。
* Vant [发布 4](https://zhuanlan.zhihu.com/p/589088487)。在本次迭代中，Vant 支持了深色模式，增加五个新组件，改善工具函数 API 并重构 Picker 等组件，同时继续在轻量化和易用性方面做出改进。
* Vite [发布 4](https://vitejs.dev/blog/announcing-vite4.html)。几个改进，1）升级到 Rollup 3，2）新增 @vitejs/plugin-react-swc，支持在 dev 时使用 swc，3）plugin 包挪出 core 仓库，4）默认浏览器兼容切换到 safari14，这意味着产物补丁更少尺寸更小，5）CLI 快捷键，6）Vite 安装尺寸从 18.3M 减少到 14.1M。
* esbuild [发布 0.15.18](https://github.com/evanw/esbuild/releases/tag/v0.15.18)，CSS 提速 1.7 倍，JS 提速 1.1 倍。
* npm 网站[支持查看包内容](https://github.blog/changelog/2022-12-06-explore-the-content-of-your-npm-packages-with-the-new-code-explorer/)，我之前都是用 unpkg 处理这个需求，npm 官网要是再加个版本切换的功能就完美了。
* Rome [发布 11](https://rome.tools/blog/2022/12/06/rome11/)，带来很多有意思的特性。支持 TS 4.9 的 satisfies 操作符，支持分号可选，4 个新的 Lint 规则，将 Lint 规则分成性能、正确性、可疑三类，试验性地支持 Import 排序。我记得 Rome 10 好像才发布没多久。
* Cypress [发布 12](https://www.cypress.io/blog/2022/12/06/announcing-cypress-12/)，正式支持 Cross-Origin，基于此可实现跨域的登录认证。
* State of CSS 2022 [公布统计结果](https://2022.stateofcss.com/en-US/)，。
* SWR [发布 2](https://swr.vercel.app/zh-CN/blog/swr-v2)，包括新的突变 API、改进的乐观 UI 功能、新的 DevTools 以及对并发渲染的更好支持。
* Bun [发布 0.3](https://bun.sh/blog/bun-v0.3.0)，内存占用减少 3-5 倍，提升了和 Node.js 的兼容性，自动安装 npm 包依赖等。
* [OpenAI 的 Whisper 模型被移植到 C/C++](https://github.com/ggerganov/whisper.cpp)，语音识别技术，不再需要依赖 PyTorch，可以跑在各个平台，同时有 WASM 版本，可以在浏览器里直接跑。

## 好文
* 看到一篇文章[《Split JS strings into sentences, words or graphemes with Intl.Segmenter》](https://www.stefanjudis.com/today-i-learned/how-to-split-javascript-strings-with-intl-segmenter/)，原来浏览器已原生支持分词，用 Intl.Segmenter 可以把字符串按句子、单词或字形切分，比如切分 emoji 用 `emojis.split('')` 或 `[…emojis]` 都不能拿到期望结果，换成 `(new Intl.Segmenter('en', granularity: 'grapheme'})).segment(emojis)` 则可以。
* 看到一篇文章[《Schedule Cron Jobs With GitHub Actions》](https://scribe.citizen4.eu/schedule-cron-jobs-with-github-actions-d279e8519cec)，花 5 分钟学下简单的 github action 语法，即可让 github 跑 cron 定时任务，免费账户有 2000 分钟的时长。
* Addy Osmani 写了一篇文章[《First Principles Thinking for Software Engineers》](https://addyosmani.com/blog/first-principles-thinking-software-engineers/) 介绍第一原则思维。第一原则思维是解决复杂问题的有力工具，他把问题分解成核心要素，然后系统地建立解决方案。可以分≤ 4 步。1）识别和解构问题，最重要的部分是什么，2）问为什么（合理利用 5Why），列出障碍，3）质疑你的假设，假设是解决方案的基础，他可能正确也可能错误，4）专注于你的目标，不要被细节所干扰。
* TanStack Query 维护者 Dominik 写了篇文章[《Inside React Query》](https://tkdodo.eu/blog/inside-react-query)，介绍 React Query 的内部运行机制，并详细介绍了其不同元素之间的关系。QueryClient、QueryCache、Query、Persister、QueryObserver 等都不依赖 React，所以 TanStack 可以轻松支持其他框架。
* 前 Twitter 员工写了一篇文章[《Lessons learned: how I’d rebuild a social web app like Twitter today》](https://paularmstrong.dev/blog/2022/11/28/lessons-learned-how-i-would-rebuild-twitter-today/)，讲述如果他重写 Twitter 会怎么选择技术栈。1）不用 ReactNativeWeb，因为 Twitter 没有 RN 应用，并没有发挥出其跨平台的优点，2）用 SolidJS 或 Preact signals 而不是 React，响应式更新会让性能更好，3）用 Tailwind CSS 而不是 CSS in JS，原因没看懂，出于性能？4）用 Vite 或 Turbopack，不用 webpack，5）使用 Module Federation 拆分应用，5）用 Deno + Oak 而不是 Node + express。
* Jest 作者 Christoph Nakazawa 写了一篇文章[《Frontend Engineer Archetypes》](https://cpojer.net/posts/frontend-engineering-archetypes)，他把前端工程师分成 4 种，1）产品工程师，2）UI 基建工程师，3）Designer，4）工具基建工程师，你属于哪一种？

## Umi 和我
> 关于 Umi 和我最近的进展。

* Umi 例行在周四更新了一版。部分更新如下，1）新增 styled-components 插件，2）自动载入 code splitting 之后的 chunk，3）routes 变更后热更而无需重启 dev server，4）新增 useSelectedRoutes 接口。
* 完成了 Umi/内网 Bigfish 框架的第 7 个最佳实践《CSS 方案》，最终我们的选择是 styled-components，决定是简单的，推导过程比较有意思。
* 写了几个自用的脚本然后组成 API Server，部署在 [replit.com](https://replit.com/)，$7/M 可以有 Private Repo 和 5 个 Always On 的 Repo。3 个脚本包括，1）微信订阅全文输出，基于 Feeddd 和 Phantomjs Cloud 实现，Phantomjs Cloud 有每天 500 的免费额度，2）Deepl Translate Server，3）Chatgpt Server，基于 chatgpt npm 包。
* Obsidian 预览版的[无限画布](https://forum.obsidian.md/t/obsidian-release-v1-1-0-insider-build/48954)功能非常惊艳，花 $25 买了 Catalyst 会员，可提前安装内部预览版。
* 这周花了不少时间在 ChatGPT 上。几点感受，1）问问题的能力至关重要，就算有 AI，问不出好问题自然也得不到好答案，2）ChatGPT 是写代码的另一个途径，但是得自己把 80% 的场景想清楚，剩下 20% 交给 ChatGPT，而不能想了 5% 就找 ChatGPT，3）人通常会被经验束缚，而经验是有限的，ChatGPT 相比人会有更好的视野。
* 借着 ChatGPT 和 MidJourney 的机会，开始关注 AI 领域的咨询。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 200 多篇文章，包含了我们最新的观点和见解。以下是近两周的星球更新，访问「q.sorrycc.com」了解更多。

* 229 - 《用 Whisper + Deepl 给 Youtube 视频加中文字幕》
* 228 - 《5 种 ChatGPT 的扩展方法》
* 227 - 《一年写 220 多篇文章是什么体验》
* 226 - 《有了 ChatGPT + Replit，普通人也可借助程序解决问题》

