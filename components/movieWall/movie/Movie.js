import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LinesEllipsis from "react-lines-ellipsis";
import { addMovie } from "../../../redux/slices/watcherSlices";
import { useDispatch } from "react-redux";
import * as S from "./styles/styles";

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
    <S.MovieContainer>
      <Link passHref href={`/movies/${id}`}>
        <Image
          width={600}
          height={830}
          loading="lazy"
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
          <h4 className="title">
            {title}
            <span className="date">{release_date.slice(0, 4)}</span>
          </h4>
          <div className="overview">
            <LinesEllipsis
              text={overview}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </div>
        </div>
      </div>
    </S.MovieContainer>
  );
};

export default Movie;
