import React from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../../../../../redux/slices/watcherSlices";

const RemoveMovieButton = ({ movieId }) => {
  const dispatch = useDispatch();

  const removeMovieFromList = (id) => {
    dispatch(removeMovie({ id }));
  };

  return (
    <span className="remove-movie">
      <Tooltip title={"Remove"} placement="bottom" arrow>
        <DisabledByDefaultIcon onClick={() => removeMovieFromList(movieId)} />
      </Tooltip>
    </span>
  );
};

export default RemoveMovieButton;
