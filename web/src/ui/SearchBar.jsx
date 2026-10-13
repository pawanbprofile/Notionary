import React from "react";
import "../../src/index.css";
import { LuSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300">
      <LuSearch className="text-gray-400 text-xl" />
      <input
        placeholder="search notes..."
        placeholdertext-color="var(--color-text)"
        className="bg-transparent border-none focus:outline-none text-xl"
        style={{ color: "var(--color-text)" }}
      />
    </div>
  );
}

export default SearchBar;
