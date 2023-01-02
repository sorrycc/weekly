import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

function findIssueNum() {
  const dir = join(__dirname, '../docs/');
  const files = readdirSync(dir);
  let num = 0;
  files.forEach((file) => {
    const m = file.match(/issue-(\d+)\.md/);
    if (m && m[1]) {
      const currNum = parseInt(m[1], 10);
      if (currNum > num) {
        num = currNum;
      }
    }
  });
  return num;
}

const prevNum = findIssueNum();
const num = prevNum + 1;
const paddedNum = String(num).padStart(4, '0');
const fileName = `issue-${paddedNum}.md`;

writeFileSync(
  join(__dirname, '../docs/', fileName),
  `
# MDH 前端周刊第 ${num} 期：TODO

**这是 「MDH：前端周刊」 第 ${paddedNum} 期，发表于：2022/TODO。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

TODO

封面图：sergioxu @ www.unsplash.com 。


## ❄️ TL;DR

👉 node.new<br />

## ⚡ 展开讲讲

### node.new
https://twitter.com/stackblitz/status/1414617135616245761

DESC

## 🕒 订阅

本期刊有几种订阅方式，

1、本期刊已开通 **NewsLetter** 的订阅方式，方便不喜欢公众号阅读的朋友们，访问 **[https://mdhappy.substack.com/](https://mdhappy.substack.com/)** 或扫描下方二维码了解详情。

<img src="https://img.alicdn.com/imgextra/i3/O1CN01fgWXv11SlwvuAiz0i_!!6000000002288-2-tps-422-424.png" width="215" />

2、微信搜索 **「云谦和他的朋友们」** 或扫描下方二维码，在我的公众号订阅更新。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
  `.trim() + `\n`,
  'utf-8',
);

console.log(`bootstrap docs/${fileName}`);
