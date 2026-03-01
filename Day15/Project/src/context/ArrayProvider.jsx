// src/context/ArrayProvider.jsx
import { useState, useEffect } from "react";
import { ArrayContext } from "./ArrayContext";

const ArrayProvider = ({ children }) => {
  // Load initial array from localStorage, fallback to default
  const [arr, setArr] = useState(() => {
    const stored = localStorage.getItem("arrayData");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever arr changes
  useEffect(() => {
    localStorage.setItem("arrayData", JSON.stringify(arr));
  }, [arr]);

  return (
    <ArrayContext.Provider value={{ arr, setArr }}>
      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider