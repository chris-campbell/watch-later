import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import LinesEllipsis from "react-lines-ellipsis";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { removeMovie } from "../../redux/slices/watcherSlices";

const WatchListContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  .watch-list-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    h1 {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.snow};
      .list-count {
        color: ${({ theme }) => theme.colors.summerOrange};
        font-style: "italic";
      }
    }
    .watch-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 2rem;
      row-gap: 2rem;
      column-gap: 2rem;
      .list-movie {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 1rem;
        .movie-image {
          position: relative;
          &:hover .peekaboo-close {
            height: 100%;
            transition: 500ms ease-in-out;
            opacity: 0.92;
            padding: 1.5rem;
            border-radius: 0.3rem;
          }

          .peekaboo-close {
            background-color: ${(p) => p.theme.colors.theaterBlue};
            transition: 300ms ease-in;
            overflow: hidden;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 0;
            gap: 1rem;
            height: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            .movie-overview {
              h2 {
                color: ${(p) => p.theme.colors.snow};
                margin-bottom: 0.5rem;
                margin-top: 2rem;
              }
              p {
                color: ${(p) => p.theme.colors.snow};
                line-height: 1.4;
              }
            }
          }

          img {
            border-radius: 0.3rem;
          }
        }

        span {
          display: block;
          margin-bottom: 0.3rem;
        }

        h3 {
          margin-bottom: 1rem;
        }

        p {
          font-size: 0.9rem;
          min-height: 5rem;
        }

        .remove-movie {
          overflow: hidden;

          span {
            font-size: 0.7rem;
            color: ${({ theme }) => theme.colors.snow};
          }

          svg {
            color: ${({ theme }) => theme.colors.snow};
            margin-right: 0.5rem;
            margin-bottom: 0.2rem;
            border-radius: 1rem;
            &:hover {
              color: ${({ theme }) => theme.colors.summerOrange};
            }

            &:active {
              scale: 0.95;
            }
          }
        }
      }
    }
  }
`;

const watchList = () => {
  const list = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const removeMovieFromList = (id) => {
    dispatch(removeMovie({ id }));
  };

  return (
    <WatchListContainer>
      <div className="watch-list-wrapper">
        <h1>
          Watch list (<span className="list-count">{list.length}</span>)
        </h1>

        <div className="watch-list">
          {list.length > 0 ? (
            list.map((movie) => (
              <div className="list-movie" key={movie.id}>
                <div className="movie-image">
                  <Image
                    src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${movie.poster_path}`}
                    width={800}
                    height={1030}
                    loading="lazy"
                  />
                  <div className="peekaboo-close">
                    <span className="remove-movie">
                      <Tooltip title={"Remove"} placement="bottom" arrow>
                        <DisabledByDefaultIcon
                          onClick={() => removeMovieFromList(movie.id)}
                        />
                      </Tooltip>
                    </span>
                    <div className="movie-overview">
                      <h2>{movie.title}</h2>
                      <p>
                        <LinesEllipsis
                          text={movie.overview}
                          maxLine="3"
                          ellipsis="..."
                          trimRight
                          basedOn="words"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* <span>{movie.release_date?.slice(0, 4)}</span> */}
                  {/* <h3>{movie.title}</h3> */}

                  {/* <Tooltip title={movie.overview} placement="top">
                    <div>
                      <LinesEllipsis
                        text={movie.overview}
                        maxLine="3"
                        ellipsis="..."
                        trimRight
                        basedOn="words"
                      />
                    </div>
                  </Tooltip> */}
                </div>
              </div>
            ))
          ) : (
            <h1>Watch list empty</h1>
          )}
        </div>
      </div>
    </WatchListContainer>
  );
};

export default watchList;
