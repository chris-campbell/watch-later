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
