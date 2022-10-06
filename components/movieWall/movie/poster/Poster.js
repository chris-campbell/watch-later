import React, { useRef, useCallback } from "react";
import Image from "next/image";
import useDoubleClick from "use-double-click";
import { useRouter } from "next/router";
import { addMovie } from "../../../../redux/slices/watcherSlices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import BrokenImage from "./img/brokenImg.png";

const Poster = ({ movieId, posterPath, movie }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const buttonRef = useRef();

  console.log({ posterPath });
  const movies = useSelector((s) => s.value);

  useDoubleClick({
    onSingleClick: () => navigateToMovie(),
    onDoubleClick: () => addMovietoWatchList(),

    ref: buttonRef,
    latency: 250,
  });

  const navigateToMovie = () => {
    navigate.push(`/movies/${movieId}`);
  };

  const removeMoveNotify = useCallback(
    () =>
      toast(
        ({}) => (
          <div>
            Added <span style={{ fontWeight: 600 }}>{movie.title}</span> to
            watch list.
          </div>
        ),
        { position: "bottom-right" }
      ),
    [movie.title]
  );

  const addMovietoWatchList = () => {
    const isMovie = movies.find((m) => m.id === movieId);

    if (isMovie)
      return toast.warn("Movie already in list.", { position: "bottom-right" });

    dispatch(addMovie(movie));
    removeMoveNotify();
  };

  return (
    <div ref={buttonRef}>
      {posterPath ? (
        <Image
          width={500}
          height={730}
          src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${posterPath}`}
          alt="Movie Poster"
        />
      ) : (
        <Image width={500} height={730} src={BrokenImage} alt="Movie Poster" />
      )}
    </div>
  );
};

export default Poster;
