import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  // console.log(movies[0]);
  const { original_title, overview, id } = movies[0];
  return (
    <div className="absolute w-full -z-10 top-0 left-0 overflow-hidden">
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
