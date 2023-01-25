// @ts-ignore
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

export function renderMarkdown(content: string, opts?: {}) {
  const md = new MarkdownIt({
    linkify: true,
    html: true,
  });
  md.use(anchor);
  let html = md.render(content);
  return html;
}
