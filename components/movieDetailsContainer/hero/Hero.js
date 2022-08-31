import React from "react";
import Poster from "./poster/Poster";
import MovieInfo from "../movieInfo/MovieInfo";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../redux/slices/watcherSlices";
import styled from "styled-components";

const HeroContainer = styled.section`
  /* background-image: ${({ bgURL }) =>
    `linear-gradient(90deg, rgba(3,7,30,1) 0%, rgba(3,7,30,0.7609637605042017) 64%, rgba(0,212,255,0) 100%),url(${bgURL})`}; */
  background-repeat: no-repeat;
  height: auto;
  position: sticky;
  background-size: cover !important;
  background-position: 50% !important;
  .hero-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;

    @media (max-width: 738px) {
      grid-template-rows: 1fr;
      grid-template-columns: none;
      gap: 0;
    }

    .hero-poster {
      height: auto;
      width: 100%;
      position: relative;
      margin-bottom: 4rem;
    }

    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
`;

const Hero = ({
  movieId,
  title,
  poster_path,
  backdrop_path,
  release_date,
  directors,
  overview,
  genres,
  vote,
  movie,
}) => {
  const dispatch = useDispatch();

  const imageURL = process.env.IMAGE_BASE_URL;
  const backdropSize = process.env.BACKDROP_SIZE;
  const bd = `${imageURL}${backdropSize}${backdrop_path}`;

  const addToWatch = () => {
    const id = movieId;
    const movieData = {
      id,
      title,
      poster_path,
      overview,
      release_date,
    };
    dispatch(addMovie(movieData));
  };

  return (
    <HeroContainer bgURL={bd}>
      <div className="hero-wrapper">
        <Poster poster_path={poster_path} />

        <MovieInfo
          movieId={movieId}
          movie={movie}
          title={title}
          release_date={release_date}
          overview={overview}
          genres={genres}
          vote={vote}
          directors={directors}
          addToWatch={addToWatch}
        />
      </div>
    </HeroContainer>
  );
};

export default Hero;
