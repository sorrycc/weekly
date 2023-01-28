import path from 'path';
import fs from 'fs';
import fm from 'front-matter';
// @ts-ignore
import toc from 'markdown-toc';

// ref: https://github.com/valeriangalliat/markdown-it-anchor/blob/master/index.js#L3
const slugify = (s: string) =>
  encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));

export function parseDocs(
  dir: string,
  opts: {
    sort?: {
      key: string;
    };
    ignoreDraft?: boolean;
    transform?: (doc: any, context: { file: string }) => any;
  } = {},
) {
  let docs = fs
    .readdirSync(dir)
    .map((file) => {
      if (!file.endsWith('.md')) return false;
      const content = fs.readFileSync(path.join(dir, file), 'utf-8');
      const { attributes, body } = fm(content);
      if (opts.ignoreDraft && (attributes as any).draft) {
        return false;
      }
      let data = {
        ...(attributes as object),
        content: body,
        toc: toc(body, { slugify }).json,
      };
      if (opts.transform) {
        const context = { file };
        data = opts.transform(data, context);
      }
      return data;
    })
    .filter(Boolean);
  if (opts.sort) {
    docs = docs.sort((a: any, b: any) =>
      b[opts.sort!.key] > a[opts.sort!.key] ? 1 : -1,
    );
  }
  return docs;
}
