import React from "react";
import Image from "next/image";
import BrokenImage from "./img/brokenImg.png";

const Poster = ({ poster_path }) => {
  const imageURL = process.env.IMAGE_BASE_URL;
  const posterSize = process.env.POSTER_SIZE;

  return (
    <div className="hero-poster">
      {poster_path ? (
        <Image
          src={`${imageURL}${posterSize}${poster_path}`}
          width={500}
          height={700}
          alt="Movie Poster"
        />
      ) : (
        <Image src={BrokenImage} width={500} height={700} alt="Movie Poster" />
      )}
    </div>
  );
};

export default Poster;
