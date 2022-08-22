import React from "react";
import styled from "styled-components";
import MediaCell from "./mediaCell/MediaCell";

const MediaSelectContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
  .media-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;

    @media (max-width: 784px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const MediaSelect = ({ movies }) => {
  console.log(movies);
  return (
    <MediaSelectContainer>
      <div className="media-wrapper">
        {movies.map((movie) => (
          <MediaCell key={movie.id} {...movie} />
        ))}
      </div>
    </MediaSelectContainer>
  );
};

export default MediaSelect;
