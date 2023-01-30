import path from 'path';
import fs from 'fs';
import fm from 'front-matter';
// @ts-ignore
import toc from 'markdown-toc';
import { getHighlighter } from 'shiki';
import type { Lang } from 'shiki';
import MarkdownIt from 'markdown-it';
import type {
  PluginWithParams,
  PluginWithOptions,
  PluginSimple,
} from 'markdown-it';
import anchor from 'markdown-it-anchor';

// ref: https://github.com/valeriangalliat/markdown-it-anchor/blob/master/index.js#L3
const slugify = (s: string) =>
  encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));

interface IOpts {
  sort?: {
    key: string;
  };
  ignoreDraft?: boolean;
  transform?: (doc: any) => any;
  shiki?: {
    themes: string[];
    langs: Lang[];
  };
  markdownIt?: {
    options?: MarkdownIt.Options;
    plugins?: (PluginSimple | PluginWithParams | PluginWithOptions)[];
  };
}

export async function parseDocs(dir: string, opts: IOpts = {}) {
  let docs = (
    await Promise.all(
      fs.readdirSync(dir).map(async (file) => {
        if (!file.endsWith('.md')) return false;
        const ret = await parseDoc(path.join(dir, file), opts, { file });
        return { ...ret, file };
      }),
    )
  ).filter(Boolean);
  if (opts.sort) {
    docs = docs.sort((a: any, b: any) =>
      b[opts.sort!.key] > a[opts.sort!.key] ? 1 : -1,
    );
  }
  return docs;
}

async function getMd(opts: IOpts) {
  const highlighter = await getHighlighter({
    themes: opts.shiki?.themes || ['material-theme-lighter'],
    langs: opts.shiki?.langs || [
      'ts',
      'tsx',
      'json',
      'css',
      'bash',
      'html',
      'diff',
    ],
  });
  const md = new MarkdownIt({
    linkify: true,
    html: true,
    highlight: (code, lang) => {
      return highlighter.codeToHtml(code, { lang });
    },
    ...opts.markdownIt?.options,
  });
  md.use(anchor);
  opts.markdownIt?.plugins?.forEach((plugin) => {
    if (Array.isArray(plugin)) {
      md.use(plugin[0], plugin[1]);
    } else {
      md.use(plugin);
    }
  });
  return md;
}

export async function parseDoc(filePath: string, opts: IOpts, extraData?: any) {
  const md = await getMd(opts);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { attributes, body } = fm(content);
  if (opts.ignoreDraft && (attributes as any).draft) {
    return false;
  }
  const html = md.render(body);
  let data = {
    ...(attributes as object),
    content: body,
    html,
    toc: toc(body, { slugify }).json,
    ...extraData,
  };
  if (opts.transform) {
    data = opts.transform(data);
  }
  return data;
}
