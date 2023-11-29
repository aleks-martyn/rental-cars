import { useState } from 'react';
import { load } from 'js/localStorageFunctions';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => load(key) ?? defaultValue);
  return [state, setState];
};

export default useLocalStorage;
