import 'zx/globals';
import { getInfo } from './util';

(async () => {
  const { latestDoc, latestDocNum, releaseTitle } = getInfo();
  console.log(releaseTitle);
  console.log('https://editor.runjs.cool/create');
  console.log('https://mp.weixin.qq.com/cgi-bin/home');
  console.log(`https://mdhweekly.com/weekly/issue-0${latestDocNum}`);
  await $`pnpm esno scripts/markdown.ts docs/weekly/${latestDoc} --wechat | pbcopy`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
