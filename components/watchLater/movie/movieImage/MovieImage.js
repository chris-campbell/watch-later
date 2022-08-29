import React from "react";
import Poster from "./poster/Poster";
import PeekABooWall from "./peekABooWall/PeekABooWall";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../../../redux/slices/watcherSlices";
import styled from "styled-components";

const MovieImageContainer = styled.div`
  position: relative;
  &:hover .peekaboo-wall {
    height: 100%;
    transition: 500ms ease-in-out;
    opacity: 0.92;
    padding: 1.5rem;
    border-radius: 0.3rem;
  }
  .peekaboo-wall {
    background-color: ${(p) => p.theme.colors.theaterBlue};
    transition: 300ms ease-in;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    gap: 1rem;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  img {
    border-radius: 0.3rem;
  }
`;

const MovieImage = ({ movieId, title, overview, poster_path }) => {
  const dispatch = useDispatch();

  const removeMovieFromList = (id) => {
    dispatch(removeMovie({ id }));
  };

  return (
    <MovieImageContainer>
      <Poster posterPath={poster_path} />
      <PeekABooWall
        removeMovieFromList={removeMovieFromList}
        movieId={movieId}
        title={title}
        overview={overview}
      />
    </MovieImageContainer>
  );
};

export default MovieImage;
