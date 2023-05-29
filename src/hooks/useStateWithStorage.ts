import { useState } from "react";
import { useIsomorphicEffect } from "~/hooks/useIsomorphicEffect";

export const useStateWithStorage = <T>(key: string, initial: T) => {
  const [state, setStateImpl] = useState(initial);

  useIsomorphicEffect(() => {
    const item = sessionStorage.getItem(key);

    if (item) {
      try {
        const _item = JSON.parse(item) as T;
        setStateImpl(_item);
      } catch (e) {}
    }
  }, [key]);

  const setState = (nextState: T) => {
    sessionStorage.setItem(key, JSON.stringify(nextState));
    setStateImpl(nextState);
  };

  return [state, setState] as const;
};
