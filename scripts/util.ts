import 'zx/globals';

export function getInfo() {
  const cwd = process.cwd();
  const dir = path.join(cwd, 'docs', 'weekly');
  const files = fs
    .readdirSync(dir)
    .filter((f) => {
      return (
        f.endsWith('.md') &&
        f.startsWith('issue-') &&
        !fs.readFileSync(path.join(dir, f), 'utf-8').includes('draft: true')
      );
    })
    .sort((a, b) => {
      const aNum = parseInt(a.replace('issue-', '').replace('.md', ''));
      const bNum = parseInt(b.replace('issue-', '').replace('.md', ''));
      return bNum - aNum;
    });
  const latestDoc = files[0];
  const latestDocContent = fs.readFileSync(path.join(dir, latestDoc), 'utf-8');
  // e.g. title: "MSW 2、Yarn 4、Next.js 14、useFormSate、WinterJS"
  const re = /title: "(.*)"/;
  const match = latestDocContent.match(re);
  const title = match![1];
  const latestDocNum = parseInt(
    latestDoc.replace('issue-', '').replace('.md', ''),
  );
  return {
    latestDoc,
    latestDocNum,
    title,
    releaseTitle: `MDH 前端周刊第 ${latestDocNum} 期：${title}`,
    nextDocNum: latestDocNum + 1,
  };
}
