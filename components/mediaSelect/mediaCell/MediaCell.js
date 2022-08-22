import React from "react";
import Image from "next/image";

const MediaCell = ({ title, poster_path }) => {
  return (
    <div>
      <Image
        width={300}
        height={400}
        src={`http://image.tmdb.org/t/p/w1280${poster_path}`}
      />
      <div>{title}</div>
    </div>
  );
};

export default MediaCell;
