import React from 'react'
import VideoTilte from './VideoTilte'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie = useSelector(store=> store.movies.nowPlaying)
  if(!movie) return
  const {original_title,overview,id} = movie[0]
//   console.log(movie[0])
    return (
      <div >
      <VideoTilte title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer