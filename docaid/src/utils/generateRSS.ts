import { Feed } from 'feed';

export function generateRSS(opts: {
  feedOpts: {
    id?: string;
    link: string;
    title: string;
    description?: string;
    image: string;
    favicon?: string;
    copyright: string;
    feedLinks: Record<string, string>;
    author: Record<string, string>;
  };
  docItems: {
    id?: string;
    link: string;
    title: string;
    description?: string;
    content: string;
    date: Date;
    author?: Record<string, string>;
    authors?: Record<string, string>[];
  }[];
}) {
  const feed = new Feed({
    ...opts.feedOpts,
    id: opts.feedOpts.id || opts.feedOpts.link,
    description: opts.feedOpts.description || opts.feedOpts.title,
    favicon: opts.feedOpts.favicon || opts.feedOpts.image,
  });
  opts.docItems.forEach((item: any) => {
    const newItem = {
      ...item,
      id: item.id || item.link,
      description: item.description || item.title,
    };
    if (!item.author && !item.authors && opts.feedOpts.author) {
      newItem.author = opts.feedOpts.author;
    }
    feed.addItem(newItem);
  });
  return feed.atom1();
}
