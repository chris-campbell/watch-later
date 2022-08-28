import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../redux/slices/watcherSlices";
import styled from "styled-components";
import Movie from "./movie/Movie";

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

const WatchLaterComponent = () => {
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
              <Movie {...movie} removeMovieFromList={removeMovieFromList} />
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
