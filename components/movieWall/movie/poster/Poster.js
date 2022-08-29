import React from "react";
import Link from "next/link";
import Image from "next/image";

const Poster = ({ movieId, posterPath }) => {
  return (
    <Link passHref href={`/movies/${movieId}`}>
      <Image
        width={300}
        height={430}
        src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${posterPath}`}
        alt="Movie Poster"
      />
    </Link>
  );
};

export default Poster;
