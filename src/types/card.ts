import type { AuthorType } from "./author";

export type CardType = {
  cardId: number;
  image: string;
  text: string;
  date: string;
  author: AuthorType;
};
