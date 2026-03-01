// src/components/SearchSort.jsx
import React from "react";

const SearchSort = ({
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search number..."
        className="
          w-full md:w-1/2 
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

      {/* Sort Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setSortOrder("asc")}
          className={`
            px-5 py-2 rounded-xl font-semibold transition-all duration-200
            ${
              sortOrder === "asc"
                ? "bg-indigo-500 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }
          `}
        >
          Sort Asc
        </button>

        <button
          onClick={() => setSortOrder("desc")}
          className={`
            px-5 py-2 rounded-xl font-semibold transition-all duration-200
            ${
              sortOrder === "desc"
                ? "bg-purple-500 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-purple-100"
            }
          `}
        >
          Sort Desc
        </button>

        {/* Clear Sort */}
        {sortOrder && (
          <button
            onClick={() => setSortOrder("")}
            className="px-4 py-2 rounded-xl bg-red-100 text-red-500 hover:bg-red-200 transition"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchSort;