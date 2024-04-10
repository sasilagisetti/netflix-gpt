import React from 'react'
import { IMG_CDN } from '../Utils/constants'

const MovieCard = ({poster}) => {
    // console.log(poster)
  return (
    <div>
      <div className='w-48'>
        <img src={IMG_CDN+poster} alt="" />
      </div>
    </div>
  )
}

export default MovieCard
