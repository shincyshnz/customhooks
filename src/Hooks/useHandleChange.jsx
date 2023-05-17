import React, { useState } from "react";

export const useHandleChange = () => {
  const [value, setValue] = useState({});

  const handleChange = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return { value, handleChange };
};
