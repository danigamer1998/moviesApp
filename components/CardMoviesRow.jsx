import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({daata}) => {
  return (
    <div className="cardmovs">      
                <p>{daata.name?daata.name:daata.title}</p> 
                <img src={`https://image.tmdb.org/t/p/w200/${daata.poster_path}`} alt="" />       
  
    </div>
  )
}

export default Movies
