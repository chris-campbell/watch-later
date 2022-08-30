import React from "react";
import MovieOverview from "./movieOverview/MovieOverview";
import RemoveMovieButton from "./removeMovieButton/RemoveMovieButton";

const PeekABooWall = ({ title, overview }) => {
  return (
    <div className="peekaboo-wall">
      <MovieOverview title={title} overview={overview} />
    </div>
  );
};

export default PeekABooWall;
