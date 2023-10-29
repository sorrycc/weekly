import 'zx/globals';
import { getInfo } from './util';

(async () => {
  const { latestDoc, releaseTitle } = getInfo();
  console.log(releaseTitle);
  console.log('https://www.yuque.com/chencheng/mdh-weekly');
  await $`pnpm esno scripts/markdown.ts docs/weekly/${latestDoc} | pbcopy`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
