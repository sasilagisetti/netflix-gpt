import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/constants"
import { addUpComingMovies } from "../Utils/moviesSlice";

const useUpComingMovies = () =>{
    const dispatch = useDispatch();
    const getUpComingMoviesData = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const json = await data.json();
        console.log(json.results)
        dispatch(addUpComingMovies(json.results))
    }


    useEffect(()=>{
        getUpComingMoviesData();
    },[])
}

export default useUpComingMovies;