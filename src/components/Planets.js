import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./iterables/Planet";

const fetchPlanets = async (data) => {
  console.log(data);
  const res = await fetch(
    `http://swapi.dev/api/planets/?page=${data.queryKey[1]}`
  );
  return res.json();
};

export const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["planets", page], fetchPlanets);
  return (
    <>
      <div className="font-bold uppercase mt-5">Planets</div>
      <p className="mb-5">List of Planet</p>
      <div className="flex items-center mb-5 mr-4 space-x-2">
        <p>Page:</p>
        <button
          onClick={() => setPage(1)}
          className="px-3 py-1 bg-gray-700 border-gray-800"
        >
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className="px-3 py-1 bg-gray-700 border-gray-800"
        >
          2
        </button>
        <button
          onClick={() => setPage(3)}
          className="px-3 py-1 bg-gray-700 border-gray-800"
        >
          3
        </button>
      </div>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div className="flex flex-col space-y-2">
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </>
  );
};
