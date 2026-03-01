// src/components/ArrayDisplay.jsx
import React, { useContext } from "react";
import { ArrayContext } from "../context/ArrayContext";
import { useArrayStats } from "../hooks/useArrayStats";

const ArrayDisplay = ({ searchTerm, sortOrder }) => {
  const { arr, setArr } = useContext(ArrayContext);
  const { max, min } = useArrayStats(arr);

  let displayArr = [...arr];

  // Filter
  if (searchTerm) {
    displayArr = displayArr.filter((num) =>
      num.toString().includes(searchTerm)
    );
  }

  // Sort
  if (sortOrder === "asc") displayArr.sort((a, b) => a - b);
  if (sortOrder === "desc") displayArr.sort((a, b) => b - a);

  const deleteItem = (index) => {
    setArr(arr.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-6">
      {displayArr.length === 0 ? (
        <div className="text-center text-gray-500 py-10 text-lg">
          No numbers found
        </div>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {displayArr.map((num, i) => {
            const isMax = num === max;
            const isMin = num === min;

            return (
              <li
                key={i}
                className={`
                  relative bg-white rounded-2xl shadow-md p-6 
                  flex flex-col items-center justify-center 
                  transition-all duration-300 
                  hover:shadow-xl hover:-translate-y-1
                  ${isMax ? "ring-2 ring-green-400" : ""}
                  ${isMin ? "ring-2 ring-red-400" : ""}
                `}
              >
                {/* Number */}
                <span
                  className={`
                    text-3xl font-bold mb-4
                    ${
                      isMax
                        ? "text-green-500"
                        : isMin
                        ? "text-red-500"
                        : "text-gray-800"
                    }
                  `}
                >
                  {num}
                </span>

                {/* Badge */}
                {isMax && (
                  <span className="absolute top-2 right-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    MAX
                  </span>
                )}
                {isMin && (
                  <span className="absolute top-2 right-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    MIN
                  </span>
                )}

                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(i)}
                  className="mt-2 px-4 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ArrayDisplay;