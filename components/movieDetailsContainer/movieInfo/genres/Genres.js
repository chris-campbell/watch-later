import React from "react";
import * as S from "./styles/styles";

const Genres = ({ genres }) => {
  return (
    <S.GenresContainer className="genres">
      {genres.map((genre) => (
        <span className="genre">{genre.name}</span>
      ))}
    </S.GenresContainer>
  );
};

export default Genres;
