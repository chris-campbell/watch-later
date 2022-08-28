import React from "react";
import _ from "lodash";
import * as S from "./styles/styles";

const Genres = ({ genres }) => {
  return (
    <S.GenresContainer className="genres">
      {genres.map((genre) => (
        <span key={_.uniqueId()} className="genre">
          {genre.name}
        </span>
      ))}
    </S.GenresContainer>
  );
};

export default Genres;
