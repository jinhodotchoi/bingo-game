import { default as bingoContentsImpl } from "public/json/bingoContents.json";

export type BingoContent = {
  id: number;
  title: string;
};

export const bingoContents = bingoContentsImpl as BingoContent[];
