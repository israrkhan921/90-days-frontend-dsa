// src/pages/Dashboard.jsx
import React, { useState } from "react";
import ArrayForm from "../components/ArrayForm";
import ArrayDisplay from "../components/ArrayDisplay";
import ArrayStats from "../components/ArrayStats";
import SearchSort from "../components/SearchSort";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
          Ultimate Array Dashboard
        </h1>

        {/* Array Form */}
        <ArrayForm />

        {/* Search & Sort */}
        <SearchSort
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {/* Array Display */}
        <ArrayDisplay searchTerm={searchTerm} sortOrder={sortOrder} />

        {/* Array Stats */}
        <ArrayStats />
      </div>
    </div>
  );
};

export default Dashboard;