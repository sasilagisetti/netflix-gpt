import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const Nowmovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRmovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  return (
    <div className="relative z-[100] -mt-[2rem] px-8 py-6 bg-black text-white">
      <div className=" -mt-[15rem] ">
        <MovieList title={"Now Playing"} movies={Nowmovies} />
        <MovieList title={"Top Rated"} movies={topRmovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"UpComing Movies"} movies={upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
