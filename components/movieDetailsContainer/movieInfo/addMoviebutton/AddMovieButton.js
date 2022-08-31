import React, { useCallback } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import * as S from "./styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../../../redux/slices/watcherSlices";
import { toast } from "react-toastify";

const AddMovieButton = ({ addToWatch, movie, movieId }) => {
  const dispatch = useDispatch();
  const movies = useSelector((s) => s.value);

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

  const addmovieToWatchList = () => {
    const isMovie = movies.find((m) => m.id === movieId);
    console.log({ movies, movieId });
    if (isMovie)
      return toast.warn("Movie already in list.", { position: "bottom-right" });

    addToWatch();
    removeMoveNotify();
  };

  return (
    <S.AddMovieButtonContainer className="add-movie">
      <AddBoxIcon onClick={() => addmovieToWatchList()} /> Add to watch list
    </S.AddMovieButtonContainer>
  );
};

export default AddMovieButton;
