import type { AuthorType } from "./author";

export interface CardType{
  image: string;
  title: string;
  text: string;
  date: string;
  author: AuthorType
}