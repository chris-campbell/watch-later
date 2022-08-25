import React from "react";
import * as S from "./styles/styles";

const Title = ({ title, date }) => {
  return (
    <S.TitleContainer>
      <h1>
        {title}
        <span className="date">{`(${date.slice(0, 4)})`}</span>
      </h1>
    </S.TitleContainer>
  );
};

export default Title;
