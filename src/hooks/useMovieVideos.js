import { useEffect, useState } from 'react';
import { API_OPTION } from '../utilis/constant';
const useMovieVideos =(movieId)=>{
    const [movieVideo, setMovieVideo] = useState(null)
    const getMovieVideos = async ()=>{
        try{
         
        const url = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTION);
         const data = await url.json()
        //  console.log(data)
         const results=data.results.filter((res)=> res.type === 'Trailer')
         const movieVideos = results[0]
         setMovieVideo(movieVideos)
        //  console.log(movieVideo)
        }
        catch{
         console.log("Having some error while fetching movie video")
        }
     }
       useEffect(()=>{
         getMovieVideos()
       },[])
return movieVideo 
}

export default useMovieVideos