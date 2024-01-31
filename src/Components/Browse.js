
import Header from './Header'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer.js'
import useNowPlayingMovie from '../hooks/useNowPlayingMovies.js'

const Browse = () => {
 
  useNowPlayingMovie()  // getting useNowPlayingMovie

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}


export default Browse