import { useState, useEffect } from 'react';

export const useDebounce = function (value, delay) {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedVal(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedVal;
};

export const useVisualMode = function (initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory((history) => [newMode, ...history.slice(1)]);
    } else {
      setHistory((history) => [newMode, ...history]);
    }
  };

  const back = () => {
    setHistory((history) => (history.length > 1 ? history.slice(1) : history));
  };

  return { mode: history[0], transition, back };
};
