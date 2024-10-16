import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
const useStateWithUpdateNotifier1 = <T>(
  initialState: T,
  updateFn: ((newState: T) => void) | null
): [T, Dispatch<SetStateAction<T>>] => {
  const callback = useRef(updateFn);
  const [state, setState] = useState<T>(initialState);
  useEffect(() => {
    if (callback.current) {
      callback.current(state);
    }
  }, [state]);
  return [state, setState];
};

const useStateWithUpdateNotifier2 = <T>(
  initialValue: T
): [T, (newState: SetStateAction<T>, fn?: (state: T) => void) => void] => {
  const [state, setState] = useState<T>(initialValue);
  const callback = useRef<((state: T) => void) | null>(null);
  const updateFn = (newState: SetStateAction<T>, fn?: (state: T) => void) => {
    if (fn) {
      callback.current = fn;
    }
    setState(newState);
  };
  useEffect(() => {
    if (callback.current) {
      callback.current(state);
      callback.current = null;
    }
  }, [state]);
  return [state, updateFn];
};

export { useStateWithUpdateNotifier1, useStateWithUpdateNotifier2 };
