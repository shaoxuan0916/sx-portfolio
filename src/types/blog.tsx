export type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  tags?: string[];
  href: string;
  // rest
  [key: string]: any;
};
