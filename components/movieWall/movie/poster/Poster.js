import React, { useRef, useCallback } from "react";
import Image from "next/image";
import useDoubleClick from "use-double-click";
import { useRouter } from "next/router";
import { addMovie } from "../../../../redux/slices/watcherSlices";
import { useDispatch, useSelector } from "react-redux";
import useFindMovie from "../../../../hooks/useFindMovie";
import { toast } from "react-toastify";

const Poster = ({ movieId, posterPath, movie }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const buttonRef = useRef();

  // const isMovieFound = useFindMovie();
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

  console.log(movies);

  const addMovietoWatchList = () => {
    const isMovie = useFindMovie(movies, movie.id);

    if (!isMovie) {
      removeMoveNotify();
      return dispatch(addMovie(movie));
    }

    return toast.warn("Movie already in list.", { position: "bottom-right" });
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

export default React.memo(Poster);
