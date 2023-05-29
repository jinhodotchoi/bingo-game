import { useEffect, useLayoutEffect, useState } from "react";

const isSSR = typeof window === "undefined";

const useIsomorphicEffect = isSSR ? useEffect : useLayoutEffect;

export const useStateWithStorage = <T>(key: string, initial: T) => {
  const [state, setStateImpl] = useState(initial);

  useIsomorphicEffect(() => {
    const item = sessionStorage.getItem(key);

    if (item) {
      const _item = JSON.parse(item) as T;
      setStateImpl(_item);
    }
  }, [key]);

  const setState = (nextState: T) => {
    sessionStorage.setItem(key, JSON.stringify(nextState));
    setStateImpl(nextState);
  };

  return [state, setState] as const;
};
