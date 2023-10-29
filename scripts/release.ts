import 'zx/globals';
import { getInfo } from './util';

(async () => {
  const { latestDocNum, nextDocNum } = getInfo();
  await $`git commit -am '${latestDocNum}'`;
  await $`npm run build`;
  await $`npm run bootstrap`;
  await $`git add ./`;
  await $`git commit -am 'bootstrap ${nextDocNum}'`;
  await $`git push`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
