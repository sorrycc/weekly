import 'zx/globals';
import dayjs from 'dayjs';
import assert from 'assert';
import {parseDoc} from "docaid";

(async () => {
  const file = argv._[0];
  assert(file, 'File is required');
  const filePath = path.join(__dirname, '..', file);
  assert(fs.existsSync(filePath), `File ${filePath} does not exist`);
  const data = await parseDoc(filePath, {});
  const { title, titleImage, titleImageCaption, publishedAt, content } = data;
  const basename = path.basename(file, '.md');
  const no = basename.split('-')[1];
  console.log(`
<p style=${argv.wechat ? `{{textAlign:'center'}}` : `"text-align: center"`}><img src="${titleImage}" /></p>
<p style=${argv.wechat ? `{{color:'rgb(102, 102, 102)',textAlign:'center'}}` : `"color:rgb(102, 102, 102);text-align: center;"`}>题图：${titleImageCaption}。</p>

${argv.wechat ? `
<span style=${argv.wechat ? `{{fontWeight:'bold',color:'blue'}}` : `"font-weight: bold;color:blue;"`}>⚡ Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 ${no} 期，发表于 ${publishedAt}，将为您带来最新的资讯和分享。</span>

注意：本文带有大量链接，推荐点击「查看原文」在 MDH 周刊官网上查看。
`.trim() : ``}

${content}

## 小结

如果你喜欢 MDH 前端周刊，请转发给你的朋友，告诉他们[到这里来订阅](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484802&idx=1&sn=caa84339125510680d435a40280a6600#wechat_redirect)，这是对我最大的帮助。下期见！ 
<span style=${argv.wechat ? `{{color:'rgb(181, 73, 91)'}}` : `"color:rgb(181, 73, 91)"`}>MDH，让开发者有笑容 :)</span>

  `);
})().catch(e => {
  console.error(e);
  process.exit(1);
});