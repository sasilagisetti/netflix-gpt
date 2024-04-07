import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import {addPopularMovies } from "../Utils/moviesSlice";

const usePopularMovies = () => {
    //Fetch data from TMDB and updats movies store
    const dispatch = useDispatch();

  const getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{
    getPopularMovies();
  },[]);
}

export default usePopularMovies;