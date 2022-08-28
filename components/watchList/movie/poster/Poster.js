import React from "react";
import Image from "next/image";

const Poster = ({ posterPath }) => {
  return (
    <Image
      src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${posterPath}`}
      width={800}
      height={1030}
      loading="lazy"
    />
  );
};

export default Poster;
