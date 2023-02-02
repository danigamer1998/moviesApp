import React from "react";
import { Link } from "react-router-dom";
import { recomendid } from "../APiconfig/apifetch";
import ButtonFadd from "./movecarp/ButtonFadd";
import SesionEpisodeos from "./movecarp/SesionEpisodeos";
import Indexx from "./MoviesRow";
import VideoPlayer from "./video";

const MovieCard = ({ used, gener,setadd, usePara, type,setmovi }) => {
  const styles = {
    contentmv: {
      background: `linear-gradient(to right, #000000 10% ,
      #00000015), ${`url(https://image.tmdb.org/t/p/w780/${used.backdrop_path}) center/cover`}`,
      minHeight: `600px`,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "105px 0px 40px 0px",
      gap: "40px",
    },
  };
  const {
    runtime,
    release_date,
    title,
    overview,
    number_of_seasons,
    vote_average,
    number_of_episodes,
    poster_path,
    last_air_date,
    name
  } = used;
  return (
    <main className="containerCard">
      <div className="contentmv" style={styles.contentmv}>
        {/* <img src={`https://image.tmdb.org/t/p/w780/${used.backdrop_path}`} alt="" /> */}
        <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt="" />
        <div className="posterText">
        <h2>{name} {last_air_date &&  <span>({last_air_date.slice(0,4)}) </span>  }</h2>
          <h2>{title}  {release_date && <span>({release_date.slice(0,4)})</span>} </h2>
          <p></p>
          <div className="generes">
            {gener.map((genero) => (
              <button key={genero.id} to={`genero/${genero.id}`}>
                {genero.name}
              </button>
            ))}
          </div>
          <p className="descr">{overview}</p>
          <p className="puntaacion">
              <i className="fa-solid fa-star"></i> Puntaje:{" "}
              {vote_average.toFixed(1)}
            </p>
          <div className="datemovie">
            
            {number_of_seasons && <p>Temporadas: {number_of_seasons}</p>}
            {number_of_episodes && <p>Episodios: {number_of_episodes}</p>}
            
            {runtime && (
              <p>
                Duracion: {Math.floor(runtime / 60)} Hrs{" "}
                {Math.floor(runtime % 60)} Min
              </p>
            )}
           
          </div>
        
          <ButtonFadd setmovi={setmovi} setadd={setadd} used={used} />
        </div>

      </div>
          {/* {used.seasons && used.seasons.map(item=> <SesionEpisodeos usedid={used.id} season={item}/>)} */}
          {used.seasons && used.seasons.map(item=> (
            <div className="Containerseason">
              <div className="seasonText">
              <h4>{item.name} </h4>
              {/* <p>{item.name}</p> */}
              <p>Episodios: {item.episode_count}</p>
              <p className="overvw">{item.overview}</p>
              </div>

              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path }`} alt="" />
            </div>
          )
          
          )}

      {/* {used.seasons && used.seasons.map(item=> <SesionEpisodeos usedid={used.id} season={item}/>)} */}
      
      <VideoPlayer
        usedid={used.id}
        usePara={usePara}
        used={used.media_}
        type={type}
      />

      <Indexx api={recomendid(usePara, type)} usePara={usePara} type={type} />
    </main>
  );
};

export default MovieCard;
