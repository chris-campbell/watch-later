import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Popdown = ({ addMovieToWatchList }) => {
  return (
    <div className="popdown">
      <div className="popdown-wrapper">
        <AddBoxIcon onClick={() => addMovieToWatchList()} />
      </div>
    </div>
  );
};

export default Popdown;
