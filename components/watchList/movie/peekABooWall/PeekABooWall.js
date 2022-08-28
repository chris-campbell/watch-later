import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Tooltip from "@mui/material/Tooltip";

const PeekABooWall = ({ removeMovieFromList, title, overview, movieId }) => {
  return (
    <div className="peekaboo-wall">
      <span className="remove-movie">
        <Tooltip title={"Remove"} placement="bottom" arrow>
          <DisabledByDefaultIcon onClick={() => removeMovieFromList(movieId)} />
        </Tooltip>
      </span>
      <div className="movie-overview">
        <h2>{title}</h2>
        <div className="overview-text">
          <LinesEllipsis
            text={overview}
            maxLine="3"
            ellipsis=""
            trimRight
            basedOn="words"
          />
        </div>
      </div>
    </div>
  );
};

export default PeekABooWall;
