import fm from 'front-matter';

export function parseFrontMatter(content: string, opts?: {}) {
  return fm(content);
}
