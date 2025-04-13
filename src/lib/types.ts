/* eslint-disable unicorn/no-empty-file, import/consistent-type-specifier-style */
// Here implement the types used in the app

export interface NewsPost {
  id: string;
  title: string;
  status: string;
  sort: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  content: string;
}
