import React from "react";
import { useState } from "react";

const ArrayTool = () => {
  const [number, setNumber] = useState([]);
  const [input, setInput] = useState("");

  const addNumber = () => {
    if (input === "") return;
    setNumber([...number, Number(input)]);
    setInput("");
  };

  const removeNumber = () => {
    setNumber(number.slice(0, -1));
  };

  const reverseArray = () => {
    const reversed = [...number];
    let left = 0;
    let right = reversed.length - 1;

    while (left < right) {
      [reversed[left], reversed[right]] = [reversed[right], reversed[left]];
      left++;
      right--;
    }

    setNumber(reversed);
  };

  return (
    <div className="bg-black text-yellow-600 flex flex-col justify-center items-center gap-6 h-screen w-screen">
      <p>{number.join(", ")}</p>
      <input
        className="bg-white "
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <div className="gap-4 flex ">
        <button
          className="bg-blue-600 cursor-pointer hover:bg-red-500 rounded-lg px-3"
          onClick={addNumber}
        >
          Add Number
        </button>
        <button
          className="bg-blue-600 cursor-pointer hover:bg-red-500 rounded-lg px-3"
          onClick={removeNumber}
        >
          Remove Number{" "}
        </button>
        <button
          className="bg-blue-600 cursor-pointer hover:bg-red-500 rounded-lg px-3"
          onClick={reverseArray}
        >
          Reverse Array
        </button>
      </div>
    </div>
  );
};

export default ArrayTool;
