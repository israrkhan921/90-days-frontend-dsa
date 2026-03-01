// src/components/ArrayForm.jsx
import React, { useContext, useState } from "react";
import { ArrayContext } from "../context/ArrayContext";

const ArrayForm = () => {
  const { arr, setArr } = useContext(ArrayContext);
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value === "" || isNaN(value)) return;
    setArr([...arr, Number(value)]);
    setValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      
      {/* Input */}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter a number..."
        className="
          w-full sm:w-2/3 
          px-4 py-3 
          rounded-xl 
          border border-gray-300 
          focus:outline-none 
          focus:ring-2 
          focus:ring-indigo-400 
          focus:border-transparent
          shadow-sm
          transition
        "
      />

      {/* Button */}
      <button
        onClick={addItem}
        className="
          w-full sm:w-auto
          px-6 py-3 
          rounded-xl 
          bg-gradient-to-r from-indigo-500 to-purple-500 
          text-white 
          font-semibold 
          shadow-md
          hover:shadow-xl 
          hover:scale-105 
          active:scale-95
          transition-all duration-200
        "
      >
        Add Number
      </button>
    </div>
  );
};

export default ArrayForm;