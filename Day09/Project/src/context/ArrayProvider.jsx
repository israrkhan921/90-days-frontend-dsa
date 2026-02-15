import { useState } from "react";
import ArrayContext from "./ArrayContext";

function ArrayProvider({ children }) {
  const [numbers, setNumbers] = useState([]);

  const addNumbers = (newArray) => {
    const unique = [...new Set(newArray)];
    setNumbers(unique);
  };

  return (
    <ArrayContext.Provider value={{ numbers, addNumbers }}>
      {children}
    </ArrayContext.Provider>
  );
}

export default ArrayProvider;
