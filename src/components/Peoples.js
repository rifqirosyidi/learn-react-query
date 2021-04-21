import React from "react";
import { useQuery } from "react-query";
import People from "./iterables/People";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

export const Peoples = () => {
  const { data, status } = useQuery("people", fetchPeople);
  return (
    <>
      <div className="font-bold uppercase mt-5">People</div>
      <p className="mb-5">List of People</p>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div className="flex flex-col space-y-2">
          {data.results.map((people) => (
            <People key={people.name} people={people} />
          ))}
        </div>
      )}
    </>
  );
};
