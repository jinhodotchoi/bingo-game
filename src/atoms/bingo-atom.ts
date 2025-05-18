import { atom } from "jotai";
import { bingoContents } from "~/constants/bingo";
import { GroupId } from "~/constants/group";
import { atomFamily, atomWithStorage, createJSONStorage } from "jotai/utils";

export const NO_WINNING_GROUP = 0;

type WinningGroup = typeof NO_WINNING_GROUP | GroupId;

type BingoEntity = {
  isOpen: boolean;
  winningGroup: WinningGroup;
};

type BingoAtom = Record<number, BingoEntity>;

const storage = createJSONStorage<BingoAtom>(() => window.sessionStorage);

export const getBingoAtomInitialValue = () =>
  bingoContents.reduce(
    (acc, bingoContent) => ({
      ...acc,
      [bingoContent.id]: {
        isOpen: false,
        winningGroup: NO_WINNING_GROUP as WinningGroup,
      },
    }),
    {} as BingoAtom,
  );

export const bingoAtom = atomWithStorage<BingoAtom>("__bingo", getBingoAtomInitialValue(), storage);

export const cellAtomFamily = atomFamily((id: number) =>
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
    },
  ),
);
