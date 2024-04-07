import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () =>{
      //Fetch data from TMDB and updats movies store
      const dispatch = useDispatch();

      const getTopRatedMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results))
      }
      useEffect(()=>{
        getTopRatedMovies();
      },[]);
}

export default useTopRatedMovies