import React from "react";
import { useQuery } from "react-query";
import Planet from "./iterables/Planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

export const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);
  return (
    <>
      <div className="font-bold uppercase mt-5">Planets</div>
      <p className="mb-5">List of Planet</p>
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
