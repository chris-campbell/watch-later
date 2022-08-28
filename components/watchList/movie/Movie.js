import React from "react";
import Poster from "./poster/Poster";
import PeekABooWall from "./peekABooWall/peekABooWall";

const Movie = ({ poster_path, id, title, overview, removeMovieFromList }) => {
  return (
    <div className="list-movie">
      <div className="movie-image">
        <Poster posterPath={poster_path} />
        <PeekABooWall
          removeMovieFromList={removeMovieFromList}
          movieId={id}
          title={title}
          overview={overview}
        />
      </div>
    </div>
  );
};

export default Movie;
