import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SesionEpisiodeosr } from '../../APiconfig/apifetch'

const SesionEpisodeos = ({usedid,season}) => {


  const [sesion,sets]=useState([])
  const [episodes,setepisodes]=useState([])
  const sesions= async()=>{
    const res=await fetch(SesionEpisiodeosr(usedid,season.season_number))
    const dataapi = await res.json()
    sets(dataapi)
    setepisodes(dataapi.episodes)
  }
  
  useEffect(()=>{
    sesions()
  },[])
  useEffect(()=>{
    sesions()
  },[season])
  return (
    <div className='containerSesaso'>
    <button> {sesion.name}</button>
    <section className="rowcontainer">
      <div className='containerrow'>{episodes.map(episodeo=>
        <div className='episodeoCard' key={episodeo.id}>
          <h5>episode {episodeo.episode_number} {episodeo.name}</h5>
          {/* <img src={`https://image.tmdb.org/t/p/w300/${episodeo.still_path!== null?episodeo.still_path:""}`} alt="" /> */}

        </div>
        )}</div>
    </section>
    </div>
  )
}

export default SesionEpisodeos
