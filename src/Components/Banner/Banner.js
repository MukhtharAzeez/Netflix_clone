import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../Axios/axios'
import {apiKey, imageBaseUrl} from '../../constants/constants'
function Banner() {
  const [movie , setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageBaseUrl+movie.poster_path : ''})` ,
   
    backgroundRepeat: 'no-repeat'}}>
      
      <div className='content'>
        <h1 className='title'>{movie ?movie.title : ''}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>MyList</button>
        </div>
        <p className='description'>{movie ?movie.overview :''}</p>
      </div>
      <div className="fade_bottom">

      </div>
    </div>

  )
  
}

export default Banner
