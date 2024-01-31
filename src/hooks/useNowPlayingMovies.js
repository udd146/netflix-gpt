import { useEffect } from 'react'
import {API_OPTION} from '../utilis/constant.js'
import { addNowPlaying } from '../Slices/moviesSlice.js'
import { useDispatch } from 'react-redux'

const useNowPlayingMovie = ()=>{ 
    
const dispatch = useDispatch() 
const getNowPlayingMovies = async ()=>{
 try{
  const url = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION)
  const data = await url.json()
//   console.log(data?.results)
  dispatch(addNowPlaying(data.results))
 }
 catch{
  console.log("It's an error")
 }
}
 useEffect(()=>{
  getNowPlayingMovies()
 },[])
}

export default useNowPlayingMovie