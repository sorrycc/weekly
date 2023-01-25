import 'zx/globals';
import { parseFrontMatter } from '../src/utils/mdUtils/parseFrontMatter';

const sourceDir = path.join(__dirname, '../data/posts');
const targetFilePath = path.join(__dirname, '../public/posts.json');

const contents: Record<string, string> = {};
const posts = fs
  .readdirSync(sourceDir)
  .map((file) => {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
      const { attributes, body } = parseFrontMatter(content);
      if ((attributes as any).draft && process.env.NODE_ENV === 'production') {
        return false;
      }
      const numberStr = file.match(/issue-(\d+)\.md/)![1];
      contents[numberStr] = body;
      return {
        ...(attributes as object),
        number: parseInt(numberStr, 10),
        numberStr,
      };
    } else {
      return false;
    }
  })
  .filter(Boolean)
  .sort((a: any, b: any) => (b.number > a.number ? 1 : -1));
fs.writeFileSync(targetFilePath, JSON.stringify(posts, null, 2), 'utf-8');
console.log('Generate posts.json');

fs.mkdirpSync(path.join(__dirname, '../public/posts'));
posts.forEach((post: any) => {
  const content = contents[post.numberStr];
  fs.writeFileSync(
    path.join(__dirname, '../public/posts', `issue-${post.numberStr}.json`),
    JSON.stringify({ content, ...post }, null, 2),
    'utf-8',
  );
});
console.log('Write posts to public/posts');
