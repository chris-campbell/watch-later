import React from "react";
import Image from "next/image";

const Poster = ({ poster_path }) => {
  const imageURL = process.env.IMAGE_BASE_URL;
  const posterSize = process.env.POSTER_SIZE;

  return (
    <div className="hero-poster">
      <Image
        src={`${imageURL}${posterSize}${poster_path}`}
        width={500}
        height={700}
        alt="Movie Poster"
      />
    </div>
  );
};

export default Poster;
