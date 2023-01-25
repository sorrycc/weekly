export type Post = {
  title: string;
  titleImage: string;
  titleImageCaption: string;
  publishedAt: string;
  number: number;
  numberStr: string;
};

export type Toc = {
  content: string;
  slug: string;
  lvl: number;
  i: number;
  seen: number;
}[];
