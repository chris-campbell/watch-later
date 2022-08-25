import React from "react";
import * as S from "./styles/styles";

const PopularityMeter = ({ vote }) => {
  return (
    <S.PopularityMeterContainer>
      <h5>Popularity</h5>

      <meter
        min="0"
        max="100"
        optimum="100"
        low="40"
        high="70"
        value={vote * 10}
      />
    </S.PopularityMeterContainer>
  );
};

export default PopularityMeter;
