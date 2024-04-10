import React, { useEffect } from "react";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { API_OPTIONS } from "../Utils/constants";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);
  // console.log(showGptSearchView);
  return (
    <div className="w-full relative overflow-hidden">
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
      {/* {!showGptSearchView && <MainContainer />}
      {!showGptSearchView && <SecondaryContainer />} */}
    </div>
  );
};

export default Browse;
