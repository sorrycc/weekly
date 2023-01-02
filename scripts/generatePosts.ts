import 'zx/globals';
import fm from 'front-matter';

const sourceDir = path.join(__dirname, '../data/posts');
const targetFilePath = path.join(__dirname, '../public/posts.json');

const posts = fs
  .readdirSync(sourceDir)
  .map((file) => {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
      const { attributes } = fm(content);
      const numberStr = file.match(/issue-(\d+)\.md/)![1];
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
console.log('generate posts.json');

fs.copySync(sourceDir, path.join(__dirname, '../public/posts'));
console.log('copy posts to public/posts');
