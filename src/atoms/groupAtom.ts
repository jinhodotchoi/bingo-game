import { atom } from "jotai";
import { groups } from "~/constants/group";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<number>(() => window.sessionStorage);

export const groupNumberAtom = atomWithStorage<number>("__groupNumber", 7, storage);

export const groupsAtom = atom((get) => groups.slice(0, get(groupNumberAtom)));
