import React, { useEffect, useState } from 'react'

import useMovieVideos from '../hooks/useMovieVideos';

const VideoBackground = ({movieId}) => {
  const movieVideo=useMovieVideos(movieId)
 
   
  console.log(movieVideo)
    return (
<div className='flex items-center justify-center w-full h-screen'>
<iframe
  className='w-full h-full'
  src={`https://www.youtube.com/embed/${movieVideo?.key}?autoplay=1&rel=0&si=3mRzRMigPeVTvCpj`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
</div>
  )
}

export default VideoBackground