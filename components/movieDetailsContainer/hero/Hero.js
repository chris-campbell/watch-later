import React from "react";
import Poster from "./poster/Poster";
import MovieInfo from "../movieInfo/MovieInfo";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../redux/slices/watcherSlices";

const Hero = ({
  id,
  title,
  poster_path,
  release_date,
  directors,
  overview,
  genres,
  vote,
}) => {
  const dispatch = useDispatch();

  const addToWatch = () => {
    const movie = { id, title, poster_path, overview, release_date };
    console.log(movie);
    dispatch(addMovie(movie));
  };

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <Poster poster_path={poster_path} />

        <MovieInfo
          title={title}
          release_date={release_date}
          overview={overview}
          genres={genres}
          vote={vote}
          directors={directors}
          addToWatch={addToWatch}
        />
      </div>
    </div>
  );
};

export default Hero;
