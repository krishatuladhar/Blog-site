export enum Role {
  USER = "user",
  AUTHOR = "author",
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
};
