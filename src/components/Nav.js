import React from "react";

export const Nav = ({ setPage }) => {
  return (
    <nav className="container mx-auto flex justify-center space-x-2">
      <button
        className="font-bold bg-yellow-300 px-4 py-2 rounded-sm hover:bg-yellow-200"
        onClick={() => setPage("name")}
      >
        Name
      </button>
      <button
        className="font-bold bg-yellow-300 px-4 py-2 rounded-sm hover:bg-yellow-200"
        onClick={() => setPage("origin")}
      >
        Origin
      </button>
    </nav>
  );
};
