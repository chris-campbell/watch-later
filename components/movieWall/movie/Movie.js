import React from "react";
import { addMovie } from "../../../redux/slices/watcherSlices";
import { useDispatch } from "react-redux";
import Popdown from "./popdown/Popdown";
import Popup from "./popup/Popup";
import Poster from "./poster/Poster";
import * as S from "./styles/styles";

const Movie = ({ id, title, poster_path, overview, release_date }) => {
  const movie = {
    id,
    title,
    poster_path,
    overview,
    release_date,
  };

  return (
    <S.MovieContainer>
      <Poster movieId={id} posterPath={poster_path} movie={movie} />
      <Popup title={title} releaseDate={release_date} overview={overview} />
    </S.MovieContainer>
  );
};

export default Movie;
