import React from "react";
import styled from "styled-components";
import MovieImage from "./movieImage/MovieImage";

const MovieListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 1rem;

  span {
    display: block;
    margin-bottom: 0.3rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    min-height: 5rem;
  }
`;

const Movie = ({ poster_path, id, title, overview }) => {
  return (
    <MovieListItem className="list-movie">
      <MovieImage
        poster_path={poster_path}
        movieId={id}
        title={title}
        overview={overview}
      />
    </MovieListItem>
  );
};

export default Movie;
