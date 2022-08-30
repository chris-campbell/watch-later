import React, { useState, useEffect } from "react";
import Hero from "./hero/Hero";
import MovieCast from "./movieCast/MovieCast";

import * as S from "./styles/styles";

const MovieDetailsContainer = ({ movie, team }) => {
  const [cast, setCast] = useState([]);
  const [directors, setDirectors] = useState([]);

  const {
    id,
    title,
    poster_path,
    backdrop_path,
    overview,
    genres,
    vote_average,
    release_date,
  } = movie;

  const imageURL = process.env.IMAGE_BASE_URL;
  const backdropSize = process.env.BACKDROP_SIZE;
  const posterSize = process.env.POSTER_SIZE;

  const bd = `${imageURL}${backdropSize}${backdrop_path}`;
  const poster = `${imageURL}${posterSize}${poster_path}`;

  useEffect(() => {
    const directors = team.crew.filter((member) => member.job === "Director");

    setCast(team.cast);
    setDirectors(directors);
  }, [team.cast, team.crew]);

  return (
    <S.Container bdURL={bd} poster={poster}>
      <Hero
        id={id}
        title={title}
        poster_path={poster_path}
        backdrop_path={backdrop_path}
        release_date={release_date}
        overview={overview}
        genres={genres}
        directors={directors}
        vote={vote_average}
      />

      <MovieCast cast={cast} />
    </S.Container>
  );
};

export default MovieDetailsContainer;
