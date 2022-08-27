import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Popup = ({ releaseDate, title, overview }) => {
  return (
    <div className="popup">
      <div className="popup-wrapper">
        <h4 className="title">
          {title}
          <span className="date">{releaseDate.slice(0, 4)}</span>
        </h4>

        <div className="overview">
          <LinesEllipsis
            text={overview}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
