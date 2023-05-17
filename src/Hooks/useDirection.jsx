import React, { useEffect, useRef, useState } from "react";

export const useDirection = () => {
  const [HTMLDirValue, setHTMLDirValue] = useState(null);
  const divRef = useRef();

  useEffect(() => {
    if (divRef) {
      setHTMLDirValue(divRef.current.dir);
    }
  });

  return { divRef, HTMLDirValue };
};
