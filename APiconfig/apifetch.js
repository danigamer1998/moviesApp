
const keyapid = "api_key=e42d1016e4345a5e306e5e3ed010d285";
const apid = `https://api.themoviedb.org/3`

export const recomendid=(id,type)=>{
  return `${apid}/${type}/${id}/similar?${keyapid}&language=es`
}
export const SesionEpisiodeosr=(id,seasons)=>{
  return `${apid}/tv/${id}/season/${seasons}?${keyapid}&language=en-US`

}
export const api={
  nextflix:`${apid}/trending/tv/day?${keyapid}&language=es`,
  movies:`${apid}/trending/movie/day?${keyapid}&language=es`,
  recomendado:` ${apid}/movie/top_rated?${keyapid}&language=es`,
  popular:`${apid}/movie/popular?${keyapid}&language=es`,
  TvPop:` ${apid}/tv/popular?${keyapid}&language=es`

  //api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
}

