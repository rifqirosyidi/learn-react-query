import { useState } from "react";
import { Nav, Origin, Name } from "./components";

function App() {
  const [page, setPage] = useState("origin");
  return (
    <div className="bg-gray-800 h-screen">
      <h1 className="text-center text-4xl py-10 font-bold text-yellow-300">
        Star Wars Info
      </h1>
      <Nav setPage={setPage} />
      <div className="container mx-auto px-40">
        {page === "origin" ? <Origin /> : <Name />}
      </div>
    </div>
  );
}

export default App;
