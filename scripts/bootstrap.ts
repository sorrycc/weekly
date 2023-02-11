import 'zx/globals';
import dayjs from 'dayjs';
import assert from 'assert';

const weekly = require('../public/weekly.json');
const publishedAt = dayjs(weekly[0].publishedAt)
  .add(7, 'day')
  .format('YYYY/MM/DD');
const content =
  `
---
title: "WIP"
titleImage: ""
titleImageCaption: ""
publishedAt: "${publishedAt}"
draft: true
---

## 一周要事

。

## 一周新闻
> 本期一周新闻由 [YingCi](https://github.com/fz6m) 主笔，推荐关注他的 Telegram 频道[《咲奈的平行时空》](https://t.me/SakinaSpace)，更新频率很高，通过此可了解大部分前端相关资讯。也欢迎订阅我的 Telegrame 频道[《云谦的自说自话》](https://t.me/yqtalk)作为补充。

- 。

## 深度好文
> 好文推荐。以下是我全文阅读过的部分。

- 。

## Umi 和我
> 关于 Umi 和我最近的进展。

- 。

## 求职招聘
> 试运行，免费刊登。因为从一些朋友那了解到，目前工作并没那么好找，希望通过这个板块互通有无，能帮助到一些需要的同学们。有招聘需求的同学请在 https://docs.qq.com/form/page/DY0dZYlliZHFpdmdj 填写表单。

- 。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 260 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 。

## 每周一图

。

`.trim() + '\n';
const nextNum = weekly[0].number + 1;
const nextNumStr = nextNum.toString().padStart(4, '0');
const filePath = path.join('docs', 'weekly', `issue-${nextNumStr}.md`);
const absFilePath = path.join(__dirname, '..', filePath);
assert(!fs.existsSync(absFilePath), `File ${filePath} already exists`);
fs.writeFileSync(absFilePath, content, 'utf-8');
console.log(`Bootstrap ${filePath}`);
