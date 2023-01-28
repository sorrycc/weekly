import 'zx/globals';
import { Feed } from 'feed';
import { parseDocs } from 'docaid';

const sourceDir = path.join(__dirname, '../docs/posts');
const targetPostPath = path.join(__dirname, '../public/posts.json');
const targetPostsDir = path.join(__dirname, '../public/posts');
fs.mkdirpSync(targetPostsDir);

const docs = parseDocs(sourceDir, {
  ignoreDraft: process.env.NODE_ENV === 'production',
  sort: {
    key: 'number',
  },
  transform(doc, context) {
    const numberStr = context.file.match(/issue-(\d+)\.md/)![1];
    return {
      ...doc,
      number: parseInt(numberStr, 10),
      numberStr,
    };
  },
});

docs.forEach((doc: any) => {
  fs.writeFileSync(
    path.join(targetPostsDir, `issue-${doc.numberStr}.json`),
    JSON.stringify(doc, null, 2),
    'utf-8',
  );
});
console.log('Write posts to public/posts');

fs.writeFileSync(
  targetPostPath,
  JSON.stringify(
    docs.map((doc) => {
      const newDoc = { ...doc };
      delete newDoc.content;
      delete newDoc.toc;
      return newDoc;
    }),
    null,
    2,
  ),
  'utf-8',
);
console.log('Generate posts.json');

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
docs.slice(0, 20).forEach((post: any) => {
  const title = `第 ${post.number} 期：${post.title}`;
  const link = `https://mdhweekly.com/weekly/issue-${post.numberStr}`;
  const content = `
<div>Hi，第 ${post.number} 期的周刊发布了。</div>
<div><a href="${link}">点击查看</a></div>
<div>&nbsp;</div>
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
  path.join(__dirname, '../public/rss.xml'),
  feed.atom1(),
  'utf-8',
);
console.log('Write rss to public/rss.xml');
