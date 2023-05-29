import { atom } from "jotai";
import { bingoContents } from "~/constants/bingo";
import { GroupId } from "~/constants/group";
import { atomFamily, atomWithStorage, createJSONStorage } from "jotai/utils";

type BingoEntity = {
  isOpen: boolean;
  winningGroup: 0 | GroupId;
};

type BingoAtom = Record<number, BingoEntity>;

const storage = createJSONStorage<BingoAtom>(() => window.sessionStorage);

export const getBingoAtomInitialValue = () =>
  bingoContents.reduce(
    (acc, bingoContent) => ({
      ...acc,
      [bingoContent.id]: {
        isOpen: false,
        winningGroup: 0 as 0 | GroupId,
      },
    }),
    {} as BingoAtom
  );

export const bingoAtom = atomWithStorage<BingoAtom>("__bingo", getBingoAtomInitialValue(), storage);

export const bingoAtomFamily = atomFamily((id: number) =>
  atom(
    (get) => get(bingoAtom)[id],
    (get, set, args: Partial<BingoEntity>) => {
      const prev = get(bingoAtom);

      set(bingoAtom, {
        ...prev,
        [id]: {
          ...prev[id],
          ...args,
        },
      });
    }
  )
);
