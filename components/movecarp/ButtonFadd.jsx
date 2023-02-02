import React from 'react'

const ButtonFadd = ({used,setmovi,setadd}) => {
  const item = JSON.parse(localStorage.getItem("Moviesfav"));

  const favori = (data) => {

    const datos = {
      id: data.id,
      name: data.name ? data.name : data.title,
      poster_path: data.poster_path,
      original_name: data.original_name,
      caratula: data.backdrop_path,
    };
    if (!item) {
      localStorage.setItem("Moviesfav", JSON.stringify([]));
      console.log("ffdds");
    } else {
      if (setmovi.some((item) => item.id === data.id) === false) {
        setadd([...setmovi, datos]);
        localStorage.setItem("Moviesfav", JSON.stringify([...setmovi, datos]));
      }
    }
  };
  return (
    <div className="buttonsoption ">
    <button onClick={() => favori(used)} className="btn">
      <i className="fa-solid fa-plus"></i> Ver mas tarde
    </button>
    <a href="#trailer">
    <button className="playmovie btn">
      <i className="fa-solid fa-play"></i> Ver Trailer
    </button></a>
  </div>

  )
}

export default ButtonFadd
