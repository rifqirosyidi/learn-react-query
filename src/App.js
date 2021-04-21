import { useState } from "react";
import { Nav } from "./components";
import { Peoples } from "./components/Peoples";
import { Planets } from "./components/Planets";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="bg-gray-800 h-full py-10">
          <h1 className="text-center text-2xl text-yellow-300 py-10 font-black text-gray-300">
            Star Wars Info
          </h1>
          <Nav setPage={setPage} />
          <div className="container mx-auto px-40 text-white font-light">
            {page === "planets" ? <Planets /> : <Peoples />}
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
