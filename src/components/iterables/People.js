import React from "react";

const Planet = ({ people }) => {
  return (
    <div className="border p-5 bg-gray-700">
      <h3 className="font-black text-yellow-300">{people.name}</h3>
      <p>Gender: {people.gender}</p>
      <p>Birth Year: {people.birth_year}</p>
    </div>
  );
};

export default Planet;
