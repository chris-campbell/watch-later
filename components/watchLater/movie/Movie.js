import React, { useRef } from "react";
import styled from "styled-components";
import MovieImage from "./movieImage/MovieImage";
import useDoubleClick from "use-double-click";
import { useRouter } from "next/router";
import { removeMovie } from "../../../redux/slices/watcherSlices";
import { useDispatch, useSelector } from "react-redux";
import useFindMovie from "../../../hooks/useFindMovie";
import { toast } from "react-toastify";

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

const Movie = ({ poster_path, id, title, overview, movie }) => {
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const navigate = useRouter();

  useDoubleClick({
    onSingleClick: () => navigateToMovie(),
    onDoubleClick: () => addMovietoWatchList(),

    ref: buttonRef,
    latency: 250,
  });

  const navigateToMovie = () => {
    navigate.push(`/movies/${id}`);
  };

  const addMovietoWatchList = () => {
    dispatch(removeMovie(movie));
    toast(
      ({}) => (
        <div>
          Removed <span style={{ fontWeight: 600 }}>{title}</span> from watch
          list.
        </div>
      ),
      { position: "bottom-right", closeOnClick: true }
    );
  };

  return (
    <MovieListItem ref={buttonRef} className="list-movie">
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
