import { useEffect, useState } from "react";

export const useDebounce = (filter: string, time: number) => {
  const [debouceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const value = setTimeout(() => { 
      setDebounceValue(filter); // only change debounceValue when there is no change in filter for 'time' period
    }, time);
    return () => clearTimeout(value); // when there is change in filter the current timer is deleted
  }, [filter, time]);
  return debouceValue;
};
