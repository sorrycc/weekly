import 'zx/globals';
import { Feed } from 'feed';
import { parseFrontMatter } from '../src/utils/mdUtils/parseFrontMatter';
import { Post } from '@/types';

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

const feed = new Feed({
  id: 'https://mdhweekly.com/',
  link: 'https://mdhweekly.com/',
  title: 'MDH Weekly 前端周刊',
  description: 'MDH Weekly 前端周刊',
  image:
    'https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png',
  favicon:
    'https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png',
  copyright: 'MDH Weekly since 2021',
  feedLinks: {
    atom: 'https://mdhweekly.com/rss.xml',
  },
  author: {
    name: 'Chen Cheng',
    email: 'sorrycc@gmail.com',
    link: 'https://sorrycc.com/',
  },
});
posts.slice(0, 20).forEach((post: any) => {
  const title = `第 ${post.number} 期：${post.title}`;
  const link = `https://mdhweekly.com/weekly/issue-${post.numberStr}`;
  const content = `
<div>Hi，第 ${post.number} 期的周刊发布了。</div>
<div><a href="${link}">点击查看</a></div>
<div>${post.publishedAt}</div>
  `;
  feed.addItem({
    title,
    id: link,
    link,
    description: title,
    content,
    date: new Date(post.publishedAt),
    author: [
      {
        name: 'Chen Cheng',
        email: 'sorrycc@gmail.com',
        link: 'https://sorrycc.com/',
      },
    ],
  });
});
fs.writeFileSync(
  path.join(__dirname, '../public/rss-for-test.xml'),
  feed.atom1(),
  'utf-8',
);
console.log('Write rss to public/rss.xml');
