import React from "react";
import styled from "styled-components";
import Movie from "./movie/Movie";

const MovieWallContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
  overflow-y: scroll;
  height: 20vh;
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

const MovieWall = ({ movies }) => {
  return (
    <MovieWallContainer>
      <div className="media-wrapper">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </MovieWallContainer>
  );
};

export default MovieWall;
