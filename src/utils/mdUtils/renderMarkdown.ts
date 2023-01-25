// @ts-ignore
import MarkdownIt from 'markdown-it';

export function renderMarkdown(content: string, opts?: {}) {
  const md = new MarkdownIt({
    linkify: true,
    html: true,
  });
  let html = md.render(content);
  return html;
}
