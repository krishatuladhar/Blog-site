export interface AuthorType {
  aname: string;
  aimage: string;
}
export enum Role {
  USER = "user",
  AUTHOR = "author",
}

export type User = {
  name: string;
  email: string;
  role: Role;
};