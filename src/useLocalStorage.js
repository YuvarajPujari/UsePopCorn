import { useState, useEffect } from "react";

export function useLocalStorage(intialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    // alert(storedValue);
    return storedValue ? JSON.parse(storedValue) : intialState;
  }); //using call back function in Use state hoo
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
