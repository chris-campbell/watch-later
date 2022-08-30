import React, { useRef } from "react";
import Image from "next/image";
import useDoubleClick from "use-double-click";
import { useRouter } from "next/router";
import { addMovie } from "../../../../redux/slices/watcherSlices";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Poster = ({ movieId, posterPath, movie }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const buttonRef = useRef();

  useDoubleClick({
    onSingleClick: () => navigateToMovie(),
    onDoubleClick: () => addMovietoWatchList(),

    ref: buttonRef,
    latency: 250,
  });

  const navigateToMovie = () => {
    navigate.push(`/movies/${movieId}`);
  };

  const addMovietoWatchList = () => {
    dispatch(addMovie(movie));
    toast(
      ({}) => (
        <div>
          Added <span style={{ fontWeight: 600 }}>{movie.title}</span> to watch
          list.
        </div>
      ),
      { position: "bottom-right" }
    );
  };

  return (
    <div ref={buttonRef}>
      <Image
        width={500}
        height={730}
        src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${posterPath}`}
        alt="Movie Poster"
      />
    </div>
  );
};

export default Poster;
