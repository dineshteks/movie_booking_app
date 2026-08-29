
import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-[500px] mt-3 ">

      {/* Search Icon */}
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
        🔍
      </span>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies..."
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-red-500
                   text-gray-800 bg-white"
      />

      {/* Clear Button */}
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-4 top-1/2 -translate-y-1/2
                     text-gray-400 hover:text-red-500 text-lg"
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default SearchBar;

