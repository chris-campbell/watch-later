import React from "react";
import Image from "next/image";

const Poster = ({ poster_path }) => {
  const imageURL = process.env.IMAGE_BASE_URL;
  const posterSize = process.env.POSTER_SIZE;

  return (
    <div className="hero-poster">
      <Image
        src={`${imageURL}${posterSize}${poster_path}`}
        width={400}
        height={600}
      />
    </div>
  );
};

export default Poster;
