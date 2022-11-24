import React, { useState ,useEffect} from 'react'
import './RowPost.css'
import axios from '../../Axios/axios'
import {imageBaseUrl} from '../../constants/constants'
import Youtube from 'react-youtube'
import {apiKey} from '../../constants/constants'

function RowPost(props) {
  const [movie,setMovie] = useState([])
  const [key,setKey] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
    })
  },[])
  const opts = {
    height: '400',
    width: '50%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const movieTrailer=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
      console.log(response.data.results[0].key)
      if(response.data.results.length!==0){
        setKey(response.data.results[0].key)
      }else{
        setKey()
      }
      
    })
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((movies)=>
          <img onClick={()=>movieTrailer(movies.id)} className='poster' src={`${imageBaseUrl+movies.poster_path}`} alt="Poster" />
        )}

      </div>
    { key  && <Youtube videoId={key} opts={opts} /> }
    </div>
  )
}

export default RowPost
