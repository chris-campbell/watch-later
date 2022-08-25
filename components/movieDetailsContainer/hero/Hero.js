import React from "react";
import Poster from "./poster/Poster";
import MovieInfo from "../movieInfo/MovieInfo";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../redux/slices/watcherSlices";

const Hero = ({
  id,
  title,
  poster,
  date,
  directors,
  overview,
  genres,
  vote,
}) => {
  const dispatch = useDispatch();

  const addToWatch = () => {
    const movie = { id, title, poster, overview, date };
    dispatch(addMovie(movie));
  };

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <Poster poster={poster} />

        <MovieInfo
          title={title}
          poster={poster}
          date={date}
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
