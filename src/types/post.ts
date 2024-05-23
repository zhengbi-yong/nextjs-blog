import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

export type BlogPost = {
  id?: string;
  title: string;
  slug: string;
  slugId?: string;
  category?: string;
  tags: string;
  date: Date;
  visible?: boolean;
  pin?: boolean;
  content: string;
  metadata: {
    [key: string]: any;
  };
};
