import React from "react";
import MovieOverview from "./movieOverview/MovieOverview";
import RemoveMovieButton from "./removeMovieButton/RemoveMovieButton";

const PeekABooWall = ({ title, overview, movieId }) => {
  return (
    <div className="peekaboo-wall">
      <RemoveMovieButton movieId={movieId} />
      <MovieOverview title={title} overview={overview} />
    </div>
  );
};

export default PeekABooWall;
