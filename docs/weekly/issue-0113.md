---
title: "Angular.dev、Angular 17、pacquet、设计模式、Rust Prettier 悬赏"
titleImage: "https://img.alicdn.com/imgextra/i4/O1CN01zjBFzp1nWw2aUOZeH_!!6000000005098-0-tps-1920-1282.jpg"
titleImageCaption: "benwhitephotography @ unsplash"
publishedAt: "2023/11/13"
---

## 一周新闻

- [Angular.dev 发布。](https://t.sorrycc.com/Xjo1Pq) Angular 将在本周发布其 v17 版本，并启动新的开发者网站 Angular.dev，作为未来 Angular 开发者的主要站点。新网站将提供更新的教程和文档，并计划未来几个月通过收集反馈进行改进。虽然 Angular.io 将作为旧版文档资源继续支持，但在 v18 版本后，Angular.dev 将成为所有 Angular 开发的正式网站。新网站的一大亮点是嵌入式教程，这是一种直接在浏览器中学习 Angular 的新方法。除此之外，新网站还推出了 Angular.dev/playground ，供开发者在浏览器中探索最新的 Angular 概念。Angular 团队还更新了其公开的路线图，并开源了新网站的源代码，以供其他开发者学习和贡献。
- [Introducing GPTs。](https://t.sorrycc.com/pd2Io2) OpenAI 正在推出一种新的定制版本的 ChatGPT—— GPTs。用户可创建专门用途的 GPT，无需编程知识，方便在日常生活、工作或学习等各种场景中使用，甚至可以和他人分享。用户可以在 chat.openai.com/create 上进行创建试用。ChatGPT Plus 和企业版用户今天就可以试用，包括 Canva 和 Zapier AI Actions。此外，本月晚些时候，OpenAI 将推出 GPT 商店，展示被认证的开发者的作品。在未来几个月，GPT 使用者也将有机会通过使用频率赚钱。OpenAI 表示，GPT 的所有措施都考虑到了隐私和安全，用户完全可以控制自己的数据。此外，开发者也可以将 GPT 连接到真实世界，定义自定义动作，连接到数据库，插入电子邮件，或者使用购物助手等。企业版用户也可以部署仅限内部的 GPT，满足特定使用场景，部门或具有专有数据集的需求。
- [Deno 发布 1.38。](https://t.sorrycc.com/40p1Nt) Deno 的 1.38 版本提供了更多增强功能，包括静态网站文档生成、模块热替换、Node.js 兼容性改进、JSX 转换等。运行 Deno doc --html 命令可生成项目文档的静态网站，新标志 --unstable-hmr 可在保存更改后自动刷新服务器；而使用 npm 包管理器能更简单地从 Node 迁移到 Deno。该版本还包含针对 WebSockets 的多项改进，支持 RFC8841 中的 WebSockets over HTTP/2，以及 VSCode 扩展和语言服务器的各种生活质量改进。此外，Deno API 的更改包括增加 window.name 和 EventSource，还有对标准库的更新。另外，新版本还提供了针对特定不稳定特性的粒度特性标志，并引入了新的 Rust/v8 fast op 系统以改进性能。最后，新版本还包含 V8 12.0，该版本增加了 Array.fromAsync 和 Promise.withResolvers 两个新的 JavaScript 特性。
- [Angular 发布 17。](https://t.sorrycc.com/3ipszH) Angular 宣布其版本 17 的发布，这个可以为网页体验提供支持的 JavaScript 框架推出了新的特性和改进，包括提供更高性能和开发体验的可延迟视图、内置控制流和新的交互式学习之旅等。此外，它还介绍了用于提高 SSR 和 SSG 性能的新生命周期钩子，以及用于全新应用程序的 Vite 和 esbuild。在设计方面，Angular 的图标也进行了更新，以反映其面向未来的特性。预计在下一个发行周期中，Angular 的信号基反应性、混合渲染和学习体验将有很大的进展。
- [Vue design patterns guide。](https://t.sorrycc.com/vB4TkM) Vue是一个流行的用于构建用户界面的渐进式JavaScript框架。与其他的全功能框架不同，Vue被设计为可逐步采用，这意味着其入门易如jQuery，但与现代化工具和支持库结合使用时，有潜力支持复杂的应用程序。理解和利用Vue的模式可以大大帮助编写清晰、高效和可维护的代码。本站将详细讲解Vue的特定模式和行为，包括可组合函数、脚本设置、状态管理、提供/注入、动态组件等概念。无论你是初学者，还是希望更好地理解一些有用的模式，这里都能提供帮助。
- [tsx 发布 4。](https://t.sorrycc.com/1LWmtZ) 此次更新进行了错误修复，新增功能，提升性能以及一些突破性改变。修复了通过标准错误输出转换警告的问题。新增功能包括：在导入说明符中允许查询，取消对过时的Node.js版本的支持，将环境变量重命名为使用TSX前缀，支持tsx和jsx扩展名。
- [Automerge-Repo 发布。](https://t.sorrycc.com/7tCvBf) 用于构建本地优先应用程序的工具包。
- [Ai Pin。](https://t.sorrycc.com/GWUBnn) 美国科技公司 Humane 近日推出一款名为 "人工智能别针" 的可穿戴设备，这款设备可以与用户进行语音对话，实现包括电话呼叫、实时面对面翻译、拍照、提供上周四对方发给你的短信内容等功能。该设备潜在的使用范围之广，引起了业界的广泛关注。据悉，该设备的操作系统使用了大型语言模型，包括 OpenAI 的 GPT-4 等。这款设备由两位前苹果公司高管领导开发，他们曾经参与了 iPhone 和 iPad 等产品的设计工作。尽管该设备在大多数情况下可以很好地与用户进行自然语言交流，但仍然存在一些 bug，例如无法完美写出五七五音节的日式短诗。在保护用户隐私方面，Humane 表示，设备默认不会收集音视频数据，只有在用户要求的时候才会收集，并且用户的私人信息 "永远不会被出售给第三方，或用于公司利润或用于训练我们的 AI 模型"。设备售价 699 美元，还需支付每月 24 美元的订阅费。
- [悬赏 $22.5K 做 Rust 版 Prettier。](https://t.sorrycc.com/GnUVnj)
- [Github 推出新的字体。](https://t.sorrycc.com/Fm8UsA) 
- [pacquet。](https://t.sorrycc.com/I0I3AB) pnpm 基于 Rust 重写。
- [Rust 在 nightly 版本中通过并行前端技术加速编译过程。](https://t.sorrycc.com/5h1wtm) Rust 编译器的前端现在可以使用并行执行功能，以大大缩短编译时间。用户可以通过使用 - Z threads=8 选项在夜间编译器上尝试此功能。这项功能现在还处于实验阶段，预计将在 2024 年的稳定版编译器中进行发布。通过使用 Rayon 实现细粒度的并行任务，新的前端可以并行执行许多编译任务。用户可以通过 - Z threads 选项打开多线程模式。测试结果表明，编译时间可以减少多达 50%，但结果取决于代码的特性和构建配置。尽管并行前端运行在单线程模式下，编译时间一般仅慢 0% 到 2%。因此，用户应几乎不会注意到增加的延迟。此外，Rust 编译器的实现遵循 jobserver 协议，将创建的线程数量限制在内核数量以内，因此不会出现效率低下的情况。

## 深度好文

- [《htmx、Rust 和 Shuttle：新型快速原型开发堆栈》](https://t.sorrycc.com/YEReNk)。 本文主要介绍了如何使用 Shuttle、htmx 和 Axum 等工具来提升使用 Rust 进行开发的效率。Shuttle 是一种服务，能够通过添加宏或函数参数来轻松部署应用；htmx 是一种 JavaScript 库，可以通过 HTML 元素来调用端点，通过结合 HTML 模板引擎，可以快速进行原型开发；而 Axum 则是一个 Web 框架。文章还详细介绍了如何结合 Rust 中的 HTML 模板引擎 Askama 来使用 htmx 做 API 调用和实现流操作、服务器发送事件等，最后提供了相关的 GitHub 代码链接。
- [《你为什么需要 React Query》](https://t.sorrycc.com/g8MY92)。 文章主要讨论了 React Query 的实用性和特性，反驳了一些声称不需要 React Query 进行数据获取的观点。作者认为，尽管像 fetch-in-useEffect 这样的标准例子看似简单，但在处理边界情况和状态管理时，会引入诸多复杂性和问题。反观 React Query，它能解决这些问题并简化开发。优点包括自动防止竞态条件，免费获得加载、数据和错误状态，显然分离没有数据的状态，根据需要获取前一个类别的数据或错误等。作者最后挑战读者在下一个项目中尝试使用 React Query，他认为这不仅可以使代码更加易于维护和扩展，而且可以提供更强大的功能。
- [《Cloudflare incident on October 30, 2023》](https://t.sorrycc.com/3rfohK)。 2023 年 10 月 30 日，Cloudflare 的多项服务在 37 分钟内无法使用，原因是 Workers KV 的部署工具配置错误。Incident 导致 KV 返回了错误的 HTTP 401（未授权）状态码，而非要求的键值对。受影响的服务包括 Workers KV、页面、访问、WARP / Zero Trust、图像、缓存清除（单文件）、Workers、AI 网关、等候室和门闸页面、挑战页面等。Cloudflare 团队手动切换生产线路到上一个可工作的 Workers KV 版本，立即消除了失败的请求路径，从而解决了 Workers KV 部署的问题。Cloudflare 将加强部署工具的复杂性，并提高产品级别的控制以减小对关键依赖的影响。
- [《简化服务端组件》](https://t.sorrycc.com/TaBLPO)。 马克・达格利什分享了 React 服务器组件的原理和应用。React 的服务器组件主要用于向浏览器客户端传递虚拟 DOM，以此来移除在客户端运行的代码，同时可以实现动态获取新的服务器标签。服务器组件只有在存储在网络树中的组件中的 props 可被序列化时才可以工作，例如 click handlers 就不能序列化。而服务器组件尤其适用于大量静态页面和少量交互式内容的网站，因为这种网站类型无需下载大量代码和处理 hydration 工作。而在调试服务器组件方面，马克建议通过实践来理解服务器组件，并运用序列化的概念理解 React。
- [《编写出色评论的技巧》](https://t.sorrycc.com/cHmsil)。 本文是一份在线评论的指南，目标是帮助读者提高他们的写作技巧，提高辩论质量。给出的建议包括：明确你写作的目的；了解你所在的平台的规则和风格；保持简洁，避免过长的文字；明智地选择你的回应目标，有时是要说服对方，有时是面向广大读者；适时放弃，不必总要争取最后一句话；注意措辞，避免言辞过激或者讽刺；适当问问题，有助于揭示对方立场的空洞；保持冷静，不要情绪化；设身处地为他人考虑；避免使用过度网络化的语言；不要滥用个人经验；接受他人部分正确的观点。
- [《ChatGPT 游戏开发：愤怒的南瓜》](https://mp.weixin.qq.com/s/hfze-zZrY7yD1ZfWgdep8w)。 本文主要探讨如何使用 GPT-4 和 DALL-E 3 结合其他编辑工具开发游戏。作者以开发 "愤怒的小鸟" 类游戏 "愤怒的南瓜" 为例，详述 GPT-4 如何通过指令生成游戏逻辑，DALL-E 3 生成游戏素材，结合 Photoshop 等工具进行图片剪裁和背景剔除。此过程需要多次迭代、持续反馈，对错误进行修复。最终作者成功地开发出了愤怒的南瓜游戏，并提供了相关源码。
- [《React 服务器组件，无需框架？本文章介绍了使用 React Server（RSC）进行应用开发的一种概念和模型，包括服务端和客户端操作，互动 Ajax 请求和表单处理等》](https://t.sorrycc.com/r3vzcm)。 同时，作者也深入探讨了 RSC 模型的优势与局限性，并分享了他如何使用 RSC 将一个笔记应用从无框架迁移到 RSC 的过程。文章还介绍了一种优雅的 SSR 实现，使用 React Flight API 进行数据流控制和优化。作者表示，RSC 是一个非常强大的模型，不过鉴于当前 RSC 的复杂性以及相关文档的欠缺，建议个人和开源贡献者积极尝试和创新，但不推荐产品或平台团队实施自己的 RSC 框架。
- [《如果我想做个网站，应该怎么进行 ICP 备案？本文主要讲解了在中国开设网站需要进行 ICP 备案的相关问题》](https://t.sorrycc.com/deMmNU)。 需要备案的是 “域名”，判断是否需要备案则看 “网站是否指向中国大陆的服务器”。几种不需要备案的情况包括：只用 IP 地址访问的服务器、单买的域名、未做好的网站、域名解析指向非中国大陆的服务器。但以上几种情况，除海外服务器外，都无法正常提供服务，正常提供网页服务的网站需要进行 ICP 备案。本期还介绍了如何批量导入卡片到 Anki，如何用工具识别打鼾磨牙，如何备份 DEVONthink 文件，如何生成随机头像和占位图片，如何生成和抓取 HTML 表格等有用的信息和实用工具。
- [《高效的工程团队》](https://t.sorrycc.com/vDAxzk)。 Google的项目Aristotle研究发现，心理安全是最重要的团队效能因素，其中包括团队成员对风险的承接能力和无破坏性负面回应的情况。同时，其他重要因素包括团队成员的可靠性，工作角色、流程和绩效结果的清晰理解，工作或其结果对个人的重要性，以及工作对组织目标的有意义贡献。Google的研究还发现，许多直观上看似和团队效能相关的因素实际上在Google的框架内并不显著，例如成员的物理接近性、以达成一致意见为目标的决策制定、团队成员的外向程度、独立完成的工作、工作量大小、成员的职级或在组织中的地位、团队规模以及团队成员在团队或公司中的任职时间。
- [《Bundler 的设计取舍：为什么要开发 Rspack》](https://mp.weixin.qq.com/s/WS28QgKniN4fOya_ikoYkA)。 文章讲述了字节跳动自研 Web 构建工具 Rspack 的开发过程。在开发 Rspack 前，字节尝试了多款构建工具和框架，如webpack、Vite、esbuild、rollup等，并对其优劣有深入理解。Rspack 的早期开发遇到许多问题，包括模块转换和 AST 复用的问题，在不断地探索和改进中，字节决定采用更适合其需求的 webpack 架构。虽然 Rspack 的目标是成为 webpack 的替代方案，但字节也明白 webpack 同样存在许多局限，比如开发体验差和缺乏必要的调试工具等。未来字节会继续深化Rspack的开发，提升用户体验，包括提供开箱即用的解决方案，优化运行性能，提高调试体验，支持分布式构建缓存共享等。
- [《re-re-reselct - 简化 React 状态管理》](https://t.sorrycc.com/foD0St)。 Causal 博客文章介绍了他们设计和实现的状态管理解决方案——Causal Selectors。文章先分析了管理复杂网页应用中状态数据的挑战，然后解释了两种类型的 Causal Selectors —— 叶子选择器和组合选择器的工作原理。文章还阐述了它们如何优化性能，减少不必要的重渲染，并与React进行整合。但新框架的初步效果并不理想，所以他们通过优化选择器的性能和订阅管理，最终使其性能回到原始水平，同时使状态管理更容易使用。他们计划完成所有组件的迁移，缓存拓扑排序以增加速度，并将状态从Redux移出，以便更好地管理后端查询的状态。
- [《不要按照常规思路构建 AI 产品》](https://t.sorrycc.com/M8ZkQT)。 本文主要讨论了构建 AI 产品时的一些常见问题和解决方案。作者首先指出，大部分 AI 产品都是对其他模型的封装，这种易被复制的技术并没有区别性。此外，大型语言模型（LLM）的使用也存在费用高、运行慢和定制性不足等问题。为了解决这些问题，作者推荐创造自己的工具链，将初步调整的 LLM、自定义编译器和自定义训练模型结合起来，构建出更快、更可靠、更廉价、更具区别性的产品。在构建 AI 产品时，不应仅依赖于现有的模型，而应尽可能地避免使用 AI，直至遇到标准编码解决不了的特定问题时，才使用专门定制的 AI 模型。
- [《利用 NextJS、Trigger.dev 和 GPT4 打造一款简历制作工具》](https://t.sorrycc.com/2Emij8)。 本文教你如何使用 NextJS、Trigger.dev、Resend 和 OpenAI 创建一个简历生成器。内容包括基本信息（如名字、姓氏以及最后工作的地方），生成和创建 PDF， 最后发送给你的邮箱。我们使用 NextJS 创建一个简单的表单，使用 react-hook-form 进行字段验证和表单信息保存，利用 NextJS 提供的路由处理网络请求。我们利用 Trigger.dev 进行后台任务处理，例如用 ChatGPT 生成内容，创建 PDF 和通过邮件发送。然后通过 OpenAI 构建 ChatGPT，通过 jsPdf 库创建 PDF，最后通过 Trigger.dev 的 Resend 集成包实现邮件发送。 完整的源代码可以在 Github 上找到。
- [《React 设计模式》](https://t.sorrycc.com/Gl7LPW)。 本文介绍了 React 设计模式，包括容器和演示模式，钩子组件组合，使用 Reducer 的状态管理，使用 Provider 的数据管理，使用 HOCs（高阶组件）进行组件增强，复合组件，属性组合，受控输入以及使用 fowardRefs 管理自定义组件等。通过运用这些设计模式和最佳实践，可以提升代码质量，推动团队协作，并让你的应用变得更加可扩展、灵活、可维护。

## 工具资源

- [sshx。](https://sshx.io/) sshx 可让你在一个多人的无限画布上，通过链接与任何人共享终端。它具有实时协作、远程光标和聊天功能。它还采用 Rust 编写的轻量级服务器，速度快、端到端加密。只需一条命令即可安装 sshx。将其用于教学、调试或云访问。基于 Svelte + Rust 实现。
- [inshellisense。](https://github.com/microsoft/inshellisense) 这个微软出的命令行自动提示工具不错，推荐下。需要注意的是，inshellisense bind 后记得修改 ~/.inshellisense/key-bindings.zsh 里的 ^A 为其他的，^A 是跳转光标到行首，和默认习惯冲突，我改成了 ^I。
- [vimGPT。](https://github.com/ishan0102/vimGPT) Browse the web with GPT-4V and Vimium。
- [MyHeyGen。](https://github.com/AIFSH/MyHeyGen) HeyGen 平民版。
- [next-billing。](https://github.com/lmsqueezy/nextjs-billing) A Next.js billing app with Lemon Squeezy。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 370 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 371 - 《React 资料 2023》
- 370 - 《Mako 开发日志（6） - 未使用的 import 语句》
- 369 - 《如何开发构建工具》

## 每周烂梗

![](https://img.alicdn.com/imgextra/i2/O1CN01olzxnB1SK0voThMfq_!!6000000002227-0-tps-554-554.jpg)

![](https://img.alicdn.com/imgextra/i1/O1CN011K6POz1qmSJDWjdLK_!!6000000005538-0-tps-1016-1048.jpg)
