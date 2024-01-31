import React from 'react'

const VideoTilte = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-60 px-8 absolute bg-gradient-to-r from-black'> 
        <h1 className='font-bold text-4xl text-white '>{title}</h1>
        <p className='w-1/2 py-6 text-xl text-white'>{overview}</p>
        <div className='mt-6'>
            <button className='p-3 rounded-md font-bold text-xl bg-white text-black w-24 hover:bg-opacity-80'>Add</button>
            <button className='p-3 rounded-md text-xl  bg-gray-400 text-white mx-3  w-32'>More Info</button>
        </div>
   </div>
   )
}

export default VideoTilte