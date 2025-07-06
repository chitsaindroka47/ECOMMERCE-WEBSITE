import React from "react";
import { FaTh, FaList } from "react-icons/fa";

export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex gap-2">
      <button
        className={`p-2 border ${view === "grid" ? "bg-blue-500 text-white" : ""}`}
        onClick={() => setView("grid")}
      >
        <FaTh />
      </button>
      <button
        className={`p-2 border ${view === "list" ? "bg-blue-500 text-white" : ""}`}
        onClick={() => setView("list")}
      >
        <FaList />
      </button>
    </div>
  );
}
