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

**这是 「MDH：前端周刊」 第 ${paddedNum} 期，发表于：2021/TODO。本期刊开源（GitHub: sorrycc/weekly），欢迎 issue 区投稿，推荐或自荐项目。**

TODO

封面图：sergioxu @ www.unsplash.com 。


## ❄️ TL;DR

👉 node.new<br />

## ⚡ 展开讲讲

### node.new
https://twitter.com/stackblitz/status/1414617135616245761

DESC

## 🕒 订阅

本周刊已开放 **「飞书话题群」** ，用飞书扫码即可加入。

<img src="https://img.alicdn.com/imgextra/i4/O1CN01Pokf0R1mYTZgqt2Vc_!!6000000004966-0-tps-1140-1332.jpg" width="215" />

本周刊每周一发布，同步更新在语雀 **「mdh/weekly」** 和微信公众号。

微信搜索 **「云谦」** 或者扫描二维码，即可订阅。

<img src="https://img.alicdn.com/imgextra/i1/O1CN01jmrjUx1yw5LcPFMx0_!!6000000006642-0-tps-430-430.jpg" width="215" />

（完）
  `.trim() + `\n`,
  'utf-8',
);

console.log(`bootstrap docs/${fileName}`);
