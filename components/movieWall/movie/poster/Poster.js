import React from "react";
import Link from "next/link";
import Image from "next/image";

const Poster = ({ movieId, posterPath }) => {
  return (
    <Link passHref href={`/movies/${movieId}`}>
      <Image
        width={600}
        height={830}
        loading="lazy"
        src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${posterPath}`}
        alt="Movie Poster"
      />
    </Link>
  );
};

export default Poster;
