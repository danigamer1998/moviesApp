import React from 'react'
import Indexx from '../../components/MoviesRow'
import { api } from "../../APiconfig/apifetch"
import HeroMovie from '../../components/HeroMovie'

const Index = () => {
  return (
   <>
      <HeroMovie ap={api.movies}/>
      <div className='ListMovies'>
       <p>Originales</p>
      <Indexx api={api.nextflix} type="tv"/>
      <p>Movies Estren0</p>
      <Indexx api={api.movies} type="movie"/>
      <p>Recomendados</p>
      <Indexx api={api.recomendado} type="movie"/>
      <p>Series tv</p>

      <Indexx api={api.TvPop} type="tv"/>   
      <p>Movies Populares</p>

      <Indexx api={api.popular} type="movie"/>
    

    </div>
   </>
  )
}

export default Index
