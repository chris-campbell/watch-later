import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LinesEllipsis from "react-lines-ellipsis";
import { addMovie } from "../../../redux/slices/watcherSlices";
import { useDispatch } from "react-redux";

const MovieContainer = styled.div`
  overflow-y: hidden;
  position: relative;
  img {
    border-radius: 0.3rem;
    cursor: pointer;
    transform: scale(1);
    transition: 500ms ease-out;

    &:hover {
      transform: scale(1.05);
      transition: 500ms ease-in;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &:hover .popup {
    height: 10rem;
    transition: 500ms;
  }

  .popdown {
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    .popdown-wrapper {
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.snow};
        &:hover {
          transform: scale(1.1);
          transition: 400ms;
        }
      }
    }
  }

  .popup {
    background-color: #03071ee6;
    position: absolute;
    height: 0rem;
    bottom: 0;
    right: 0;
    left: 0;
    .popup-wrapper {
      padding: 1rem;
      .title {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        .date {
          color: ${({ theme }) => theme.colors.snow};
          font-weight: 400;
        }
      }
      .overview {
        font-size: 0.8em;
        line-height: 1.1rem;
        text-overflow: "Read more";
        box-orient: vertical;
        overflow: hidden !important;
      }
    }
  }
`;

const Movie = ({ id, title, poster_path, overview, release_date }) => {
  const dispatch = useDispatch();

  const addMovieToWatchList = () => {
    const movie = {
      id,
      title,
      poster_path,
      overview,
      release_date,
    };

    dispatch(addMovie(movie));
  };

  return (
    <MovieContainer>
      <Link passHref href={`/movies/${id}`}>
        <Image
          width={600}
          height={830}
          src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${poster_path}`}
        />
      </Link>
      <div className="popdown">
        <div className="popdown-wrapper">
          <div onClick={() => addMovieToWatchList()} data-movie-id={id}>
            <AddBoxIcon />
          </div>
        </div>
      </div>
      <div className="popup">
        <div className="popup-wrapper">
          <h3 className="title">
            {title}
            <span className="date">{release_date.slice(0, 4)}</span>
          </h3>
          <div className="overview">
            <LinesEllipsis
              text={overview}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </div>
        </div>
      </div>
    </MovieContainer>
  );
};

export default Movie;
