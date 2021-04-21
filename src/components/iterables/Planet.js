import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="border p-5 bg-gray-700">
      <h3 className="font-black text-yellow-300">{planet.name}</h3>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
    </div>
  );
};

export default Planet;
