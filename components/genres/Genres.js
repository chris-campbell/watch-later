import React from "react";
import styled from "styled-components";

const GenresContainer = styled.div`
  min-height: 100vh;
`;

const Genres = ({ movies }) => {
  return (
    <GenresContainer>
      <div className="genres-wrapper">Genres</div>
    </GenresContainer>
  );
};

export default Genres;
