import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="absolute -top-10 left-0 overflow-hidden">
      <iframe
       className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?rel=0?&autoplay=1&mute=1`}
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
