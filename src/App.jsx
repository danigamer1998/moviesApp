import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movie from "../router/pages/movies";
import Index from "../router/pages";
import MvFav from "../components/mvdfavorit";
import { useState, useEffect } from "react";
import Tv from "../router/pages/tv";

function App() {
  const items = JSON.parse(localStorage.getItem("Moviesfav"));

  const [setmovi, setadd] = useState([]);

  useEffect(() => {
    !items
      ? localStorage.setItem("Moviesfav", JSON.stringify([]))
      : setadd(items);
  }, []);
  return (
    <div className="App styl">
      <MvFav setmovi={setmovi} setadd={setadd} item={items} />
      <Routes>
        <Route
          path="movie/:id"
          element={<Movie setmovi={setmovi} setadd={setadd} item={items} />}
        />
        <Route
          path="tv/:id"
          element={<Tv setmovi={setmovi} setadd={setadd} item={items} />}
        />

        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
