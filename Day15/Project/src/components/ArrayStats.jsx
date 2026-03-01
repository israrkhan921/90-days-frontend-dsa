// src/components/ArrayStats.jsx
import React, { useContext } from "react";
import { ArrayContext } from "../context/ArrayContext";
import { useArrayStats } from "../hooks/useArrayStats";

const StatCard = ({ title, value, color }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-md p-6 
        flex flex-col items-center justify-center
        transition-all duration-300 
        hover:shadow-xl hover:-translate-y-1
      `}
    >
      <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className={`text-3xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
};

const ArrayStats = () => {
  const { arr } = useContext(ArrayContext);
  const { sum, max, min, avg } = useArrayStats(arr);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
        Array Statistics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard title="Sum" value={sum} color="text-indigo-500" />
        <StatCard title="Max" value={max ?? "-"} color="text-green-500" />
        <StatCard title="Min" value={min ?? "-"} color="text-red-500" />
        <StatCard title="Average" value={avg} color="text-purple-500" />
      </div>
    </div>
  );
};

export default ArrayStats;