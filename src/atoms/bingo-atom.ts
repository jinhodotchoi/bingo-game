import { atom } from "jotai";
import { bingoContents } from "~/constants/bingo";
import { GroupId } from "~/constants/group";
import { atomFamily, atomWithStorage, createJSONStorage } from "jotai/utils";

export const NO_CORRECT_GROUP = 0;

type CorrectGroup = typeof NO_CORRECT_GROUP | GroupId;

type BingoEntity = {
  isOpen: boolean;
  correctGroup: CorrectGroup;
};

type BingoAtom = Record<number, BingoEntity>;

const storage = createJSONStorage<BingoAtom>(() => window.sessionStorage);

export const getBingoAtomInitialValue = () =>
  bingoContents.reduce(
    (acc, bingoContent) => ({
      ...acc,
      [bingoContent.id]: {
        isOpen: false,
        correctGroup: NO_CORRECT_GROUP as CorrectGroup,
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
