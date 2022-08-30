import React from "react";
import MovieOverview from "./movieOverview/MovieOverview";

const PeekABooWall = ({ title, overview }) => {
  return (
    <div className="peekaboo-wall">
      <MovieOverview title={title} overview={overview} />
    </div>
  );
};

export default PeekABooWall;
