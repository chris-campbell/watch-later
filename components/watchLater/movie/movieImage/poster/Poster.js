import React from "react";
import ImageElement from "./imageElement/ImageElement";

const Poster = ({ posterPath }) => {
  return <ImageElement posterPath={posterPath} />;
};

export default React.memo(Poster);
