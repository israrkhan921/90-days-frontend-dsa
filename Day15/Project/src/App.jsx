import React from "react";
import ArrayProvider from "./context/ArrayProvider";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ArrayProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x flex items-center justify-center p-6">
        <div className="w-full max-w-5xl md:max-w-6xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 transition-transform duration-300 hover:-translate-y-1">
          <Dashboard />
        </div>
      </div>
    </ArrayProvider>
  );
}

export default App;