import React, { useEffect } from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { API_OPTIONS } from '../Utils/constants'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className='absolute w-full'>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
