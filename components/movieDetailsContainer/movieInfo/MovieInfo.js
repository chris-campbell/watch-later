import React from "react";
import Genres from "./genres/Genres";
import PopularityMeter from "./popularityMeter/PopularityMeter";
import Title from "./title/Title";
import Overview from "./overview/Overview";
import AddMovieButton from "./addMoviebutton/AddMovieButton";
import Directors from "./directors/Directors";
import * as S from "./styles/styles";

const MovieInfo = ({
  title,
  date,
  overview,
  genres,
  vote,
  directors,
  addToWatch,
}) => {
  return (
    <S.MovieDetailsContainer className="movie-details">
      <div className="details-wrapper">
        <Title title={title} date={date} />
        <Overview overview={overview} />
        <Genres genres={genres} />
        <PopularityMeter vote={vote} />
        <Directors directors={directors} />
        <AddMovieButton addToWatch={addToWatch} />
      </div>
    </S.MovieDetailsContainer>
  );
};

export default MovieInfo;
