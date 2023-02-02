import React from 'react'
import { Link } from 'react-router-dom'

const Carouselitem = ({dataa,id}) => {
  
  return (
    <div className="cardslid" key={id}>
      <div className="carouselinfo">
      <h3>{dataa.title} </h3>
      <p>
      {dataa.overview}</p>
      <Link to={`/movie/${dataa.id}`} className="playmovie btn">Play</Link>
      </div>
     
      <img src={`https://image.tmdb.org/t/p/w1280/${dataa.backdrop_path}`} alt="" />
      </div>
  )
}

export default Carouselitem