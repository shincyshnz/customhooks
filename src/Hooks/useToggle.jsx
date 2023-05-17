import React, { useState } from "react";

export const useToggle = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked((prev) => (prev = !prev));
  };
  return { isChecked, handleToggle };
};
