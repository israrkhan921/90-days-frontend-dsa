import { useState } from "react";
import ArrayContext from "./ArrayContext";

function ArrayProvider({ children }) {
  const [numbers, setNumbers] = useState([]);

  return (
    <ArrayContext.Provider value={{ numbers, setNumbers }}>
      {children}
    </ArrayContext.Provider>
  );
}

export default ArrayProvider;
