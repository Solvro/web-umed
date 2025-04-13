/* eslint-disable unicorn/no-empty-file, import/consistent-type-specifier-style */
// Here implement the types used in the app

export interface NewsPost {
  id: string;
  status: string;
  sort: number;
  userCreated: string;
  dateCreated: string;
  userUpdated: string;
  dateUptated: string;
  content: string;
}
