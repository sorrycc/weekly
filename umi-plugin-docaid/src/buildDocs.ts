import fs from 'fs';
import path from 'path';
import { parseDocs, generateRSS } from 'docaid';
import { chokidar, winPath } from 'umi/plugin-utils';

type IRSS = {
  default?: boolean;
  feedOpts?: any;
  limit?: number;
  transform?: (data: any, opts: { doc: any }) => any;
};

type IOpts = {
  output: string;
  config: {
    title: string;
    siteUrl: string;
    rss?: Record<string, IRSS>;
    transform?: (doc: any) => any;
  };
  watch?: boolean;
};

export async function buildDocs(root: string, opts: IOpts) {
  for (const dir of fs.readdirSync(root)) {
    if (
      fs.statSync(path.join(root, dir)).isDirectory() &&
      dir.charAt(0) !== '.'
    ) {
      await buildDoc(path.join(root, dir), opts);
    }
  }
  if (opts.watch) {
    console.log('Start watching...');
    chokidar
      .watch(root, {
        ignoreInitial: true,
      })
      .on('all', async (_event, file) => {
        console.log('File changed: ', file);
        const dir = winPath(file)
          .replace(addSlash(winPath(root)), '')
          .split('/')[0];
        const targetDir = path.join(root, dir);
        if (fs.existsSync(targetDir) && fs.statSync(targetDir).isDirectory()) {
          buildDoc(targetDir, opts).catch((e) => {
            console.error(e);
          });
        }
      });
  }
}

function addSlash(path: string) {
  return path.endsWith('/') ? path : `${path}/`;
}

export async function buildDoc(root: string, opts: IOpts) {
  const name = path.basename(root);
  const outputDir = path.join(opts.output, name);
  fs.mkdirSync(outputDir, { recursive: true });
  const docs: any[] = await parseDocs(root, {
    ignoreDraft: process.env.NODE_ENV === 'production',
    sort: {
      key: 'number',
    },
    transform: opts.config.transform || ((doc) => doc),
  });
  docs.forEach((doc: any) => {
    const fileWithoutExt = path.basename(doc.file, path.extname(doc.file));
    fs.writeFileSync(
      path.join(outputDir, `${fileWithoutExt}.json`),
      JSON.stringify(doc, null, 2),
      'utf-8',
    );
  });
  fs.writeFileSync(
    path.join(opts.output, `${name}.json`),
    JSON.stringify(
      docs.map((doc) => {
        const newDoc = { ...doc };
        delete newDoc.content;
        delete newDoc.html;
        delete newDoc.file;
        delete newDoc.toc;
        return newDoc;
      }),
      null,
      2,
    ),
    'utf-8',
  );
  fs.writeFileSync(
    path.join(opts.output, `${name}.full.json`),
    JSON.stringify(docs, null, 2),
    'utf-8',
  );
  console.log(`Build docs for ${name}`);

  const rssOpts = opts.config.rss?.[name];
  if (rssOpts) {
    const rssFileName = rssOpts.default ? 'rss.xml' : `${name}.rss.xml`;
    const rss = generateRSS({
      feedOpts: {
        link: opts.config.siteUrl,
        title: opts.config.title,
        feedLinks: {
          atom: `${opts.config.siteUrl}${rssFileName}`,
        },
        ...rssOpts.feedOpts,
      },
      docItems: docs.slice(0, rssOpts.limit || 20).map((doc) => {
        const ret = {
          title: doc.title,
          link: `${opts.config.siteUrl}${name}/${doc.file.replace(
            /\.md$/,
            '',
          )}`,
          // TODO: support full content by default
          content: '',
          date: new Date(doc.publishedAt),
        };
        return rssOpts.transform ? rssOpts.transform(ret, { doc }) : ret;
      }),
    });
    const output = path.join(opts.output, rssFileName);
    fs.writeFileSync(output, rss, 'utf-8');
    console.log(`Build rss for ${name}`);
  }
}
