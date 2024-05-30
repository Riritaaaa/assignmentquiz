
import Router from "@routes/route";
import { RouterProvider } from "react-router-dom";

// import { Pokemonservice } from "./service/pokemonservice";

function App() {
  /*  const getDataPokemon = useGetListPokemonsQuery({
    limit: 10,
    offset: 0,
  });

  console.log(getDataPokemon.data?.results) */

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;

{
  /*  <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<LayoutHome/>} >
          <Route index element={<HomePage/>} />
          <Route path="allnew" element={<AllNew/>} />
          <Route path="allnew/:typeName" element={<AllNew/>} />
          <Route path="detail/:typeName/:id" element={<DetailNew/>} />
        </Route>
      </Routes> */
}

{
  /*   <div className="custom-layout">
        <div className="main-layout">
          <h1>Vite + React + Redux</h1>
          <div className="card">
            <Counter></Counter>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div> */
}
