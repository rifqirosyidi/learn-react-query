import React from "react";

export const Nav = ({ setPage }) => {
  return (
    <nav className="container mx-auto flex justify-center space-x-2">
      <button
        className="font-light text-gray-300 border border-gray-300 py-1 px-5 hover:border-white hover:text-white transition duration-500 focus:bg-white focus:text-black focus:outline-none bg-gray-700"
        onClick={() => setPage("people")}
      >
        People
      </button>
      <button
        className="font-light text-gray-300 border border-gray-300 py-1 px-5 hover:border-white hover:text-white transition duration-500 focus:bg-white focus:text-black focus:outline-none bg-gray-700"
        onClick={() => setPage("planets")}
      >
        Planets
      </button>
    </nav>
  );
};
