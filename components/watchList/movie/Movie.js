import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import Poster from "./poster/Poster";
import PeekABooWall from "./peekABooWall/peekABooWall";
import { over } from "lodash";

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
