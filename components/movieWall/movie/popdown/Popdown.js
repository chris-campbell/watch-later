import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Popdown = ({ addMovieToWatchList }) => {
  return (
    <div className="popdown">
      <div className="popdown-wrapper">
        <div onClick={() => addMovieToWatchList()}>
          <AddBoxIcon />
        </div>
      </div>
    </div>
  );
};

export default Popdown;
