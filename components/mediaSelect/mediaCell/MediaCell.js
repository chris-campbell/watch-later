import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const MediaCellContainer = styled.div`
  overflow-y: scroll;
  img {
    border-radius: 0.3rem;
    cursor: pointer;
    transform: scale(1);
    transition: 300ms ease-out;

    &:hover {
      transform: scale(1.05);
      transition: 300ms ease-in;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;

const MediaCell = ({ id, title, poster_path }) => {
  return (
    <Link passHref href={`/movies/${id}`}>
      <MediaCellContainer>
        <Image
          width={600}
          height={830}
          src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${poster_path}`}
        />
        <div>{title}</div>
      </MediaCellContainer>
    </Link>
  );
};

export default MediaCell;
