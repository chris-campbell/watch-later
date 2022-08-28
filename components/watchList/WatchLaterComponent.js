import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../redux/slices/watcherSlices";
import styled from "styled-components";
import Movie from "./movie/Movie";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

const WatchListContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  .watch-list-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    .back-to-search {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      width: fit-content;

      &:hover {
        color: ${({ theme }) => theme.colors.summerOrange};
        transition: 300ms ease-in-out;
      }

      svg {
        font-size: 1.1rem;
      }
    }
    h1 {
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.snow};
      display: flex;
      align-items: center;
      gap: 0.3rem;

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
          &:hover .peekaboo-wall {
            height: 100%;
            transition: 500ms ease-in-out;
            opacity: 0.92;
            padding: 1.5rem;
            border-radius: 0.3rem;
          }
          .peekaboo-wall {
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
              .overview-text {
                color: ${(p) => p.theme.colors.snow};
                line-height: 1.4;
                font-size: 0.8rem;
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

const WatchLaterComponent = () => {
  const list = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const removeMovieFromList = (id) => {
    dispatch(removeMovie({ id }));
  };

  return (
    <WatchListContainer>
      <div className="watch-list-wrapper">
        <p>
          <Link href="/movies">
            <a className="back-to-search">
              <ArrowBack /> Back to search
            </a>
          </Link>
        </p>
        <h1>
          Movies in list <span>•</span>{" "}
          <span className="list-count">{list.length}</span>
        </h1>

        <div className="watch-list">
          {list.length > 0 ? (
            list.map((movie) => (
              <Movie
                key={movie.id}
                {...movie}
                removeMovieFromList={removeMovieFromList}
              />
            ))
          ) : (
            <h1>Watch list empty</h1>
          )}
        </div>
      </div>
    </WatchListContainer>
  );
};

export default WatchLaterComponent;
