import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import styled from "styled-components";

const MovieOverviewContainer = styled.div`
  h2 {
    color: ${(p) => p.theme.colors.snow};
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }
  .overview-text {
    color: ${(p) => p.theme.colors.snow};
    line-height: 1.4;
    font-size: 0.8rem;
  }
`;

const MovieOverview = ({ title, overview }) => {
  return (
    <MovieOverviewContainer>
      <h2>{title}</h2>
      <div className="overview-text">
        <LinesEllipsis
          text={overview}
          maxLine="3"
          ellipsis=""
          trimRight
          basedOn="words"
        />
      </div>
    </MovieOverviewContainer>
  );
};

export default MovieOverview;
