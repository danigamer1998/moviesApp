import {useEffect,useState} from 'react'
import Carouselitem from './componentss/CardCarousel'


const HeroMovie = ({ap}) => {
  const [setdata,dataMovie]=useState([])
  const [itemIndex,setIndex]=useState(0)

  const apidata=async ()=>{
    const data=await fetch(ap)
    const datares=await data.json()
    dataMovie(datares.results.slice(0,6))
  }

  useEffect(() => {
    setTimeout(()=>{
      setIndex(itemIndex === setdata.length -1 ? 0 : itemIndex + 1)
    },4004)
    
  }, [itemIndex])

  useEffect(() => {
    apidata()
  }, [itemIndex])
  
  return (
    <div className='Slider'>
      <div className='slidercards' style={{transform:`translate(${-itemIndex *100}%,0)`}}>
       {setdata.map((item,ix)=> <Carouselitem dataa={item} id={ix} key={ix} />)}
      </div>

    </div>
  )
}

export default HeroMovie