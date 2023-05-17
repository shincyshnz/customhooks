import React, { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState("");

  const handleSetItem = (key, value) => {
    JSON.stringify(localStorage.setItem(key, value));
  };

  const handleGetItem = (key) => {
    const data = localStorage.getItem(key);
    // setStoredValue(data);
    data ? setStoredValue(data) : setStoredValue(`No item Named ${key}`);
  };

  return { storedValue, handleSetItem, handleGetItem };
};
