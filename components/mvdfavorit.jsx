import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieSearch from "./MovieSearch";

const MvFav = ({ setmovi, setadd, item }) => {
  const [setmovis, setaddm] = useState([]);
  const [setocult, getocult] = useState(false);

  useEffect(() => {
    setaddm(item);
  }, [setmovi]);

  const ocultardiv = () => {
    if (!setocult) {
      getocult(true);
      return;
    }
    getocult(false);
  };
  return (
    <header>
      <h2 className="logo">MOVIESD</h2>
      <MovieSearch/>
      <div className="nav">
        <button onClick={ocultardiv}>click</button>
        <div className={!setocult ? "oculto" : "movie"}>
          <h4>List Fa</h4>
          {setmovis?.length >= 1 ? (
            setmovis.map((item) =>  {
              const {id,poster_path}=item
    
              return(
              <div className="divcardmov" key={id}>
                <p>{id}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                  alt=""
                />
              </div>
            )})
          ) : (
            <p>movies not add </p>
          )}
        </div>
      </div>
    </header>
  );
};
export default MvFav;
