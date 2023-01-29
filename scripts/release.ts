import 'zx/globals';
import assert from 'assert';

(async () => {
  const pkgName = argv.pkg;
  assert(pkgName, `pkg name is required, specify with --pkg=xxx`);
  const pkgPath = path.join(__dirname, '..', pkgName);
  assert(fs.existsSync(pkgPath), `pkg ${pkgName} not exists`);
  await $`cd ${pkgPath} && npm run build`;
  await $`cd ${pkgPath} && npm version patch`;
  const newVersion = require(path.join(pkgPath, 'package.json')).version;
  await $`cd ${pkgPath} && npm publish`;
  await $`git commit -am "release: ${pkgName}@${newVersion}"`;
  await $`git tag ${pkgName}v${newVersion}`;
  await $`git push --tags`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
