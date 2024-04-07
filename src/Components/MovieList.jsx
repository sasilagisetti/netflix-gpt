import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies)
  return (
    <div className='overflow-x-visible'>
      <div className=''>
        <h1 className='text-white text-2xl pb-6 font-semibold underline '>{title}</h1>
        <div className='flex flex-row gap-6 justify-between overflow-x-scroll scrollbar scrollbar-thumb-slate-950'>
            {movies && movies.map((movie) => <MovieCard key={movie.id} poster={movie.poster_path}/>)}
            {/* {movies && <MovieCard movie={movies[0]}/>} */}
        </div>
      </div>
    </div>
  )
}

export default MovieList
