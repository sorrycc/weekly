import 'zx/globals';
import assert from 'assert';
import getGitRepoInfo from 'git-repo-info';

(async () => {
  const { branch } = getGitRepoInfo();
  const pkgName = argv.pkg;
  assert(pkgName, `pkg name is required, specify with --pkg=xxx`);
  const pkgPath = path.join(__dirname, '..', pkgName);
  assert(fs.existsSync(pkgPath), `pkg ${pkgName} not exists`);
  await $`cd ${pkgPath} && npm run build`;
  await $`cd ${pkgPath} && npm version patch`;
  const newVersion = require(path.join(pkgPath, 'package.json')).version;
  await $`cd ${pkgPath} && npm publish`;

  // modify root pkg
  const rootPkgPath = path.join(__dirname, '..', 'package.json');
  const rootPkg = require(rootPkgPath);
  rootPkg.devDependencies[pkgName] = newVersion;
  fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2));
  await $`pnpm i`;

  await $`git commit -am "release: ${pkgName}@${newVersion}"`;
  await $`git tag ${pkgName}v${newVersion}`;
  await $`git push origin ${branch} --tags`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
