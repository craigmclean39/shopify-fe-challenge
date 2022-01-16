import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  let currentValue;
  const [value, setValue] = useState(() => {
    try {
      currentValue = JSON.parse(window.localStorage.getItem(key) as string);

      if (currentValue === null) {
        return initialValue;
      }
    } catch (e) {
      return initialValue;
    }

    return currentValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
