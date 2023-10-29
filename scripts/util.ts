import "zx/globals";

export function getInfo() {
  const cwd = process.cwd();
  const dir = path.join(cwd, 'docs', 'weekly');
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f.startsWith('issue-'))
    .sort((a, b) => {
      const aNum = parseInt(a.replace('issue-', '').replace('.md', ''));
      const bNum = parseInt(b.replace('issue-', '').replace('.md', ''));
      return bNum - aNum;
    });
  const latestDoc = files[0];
  const latestDocNum = parseInt(
    latestDoc.replace('issue-', '').replace('.md', ''),
  );
  return {
    latestDoc,
    latestDocNum,
    nextDocNum: latestDocNum + 1,
  }
}
