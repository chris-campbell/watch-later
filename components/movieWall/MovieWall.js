import React from "react";
import Movie from "./movie/Movie";
import InfiniteScroll from "react-infinite-scroll-component";
import FadeLoader from "react-spinners/FadeLoader";
import { useSearch } from "../../pages/context/searchContext";
import * as S from "./styles/styles";

const MovieWall = ({ query }) => {
  const { data, status, fetchNextPage, hasNextPage } = query;
  const { search } = useSearch();

  return (
    <S.MovieWallContainer>
      {search === "" ? (
        <S.PageTitle>
          <h1>Popular Movies</h1>
        </S.PageTitle>
      ) : (
        <S.PageTitle>
          Search: <h1>{search}</h1>
        </S.PageTitle>
      )}
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<FadeLoader color="#ff0000" />}
        >
          <div className="grid-container">
            {data?.pages.map((page) => (
              <>
                <div className="media-wrapper">
                  {page.results.map((movie) => (
                    <Movie key={movie.id} {...movie} />
                  ))}
                </div>
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </S.MovieWallContainer>
  );
};

export default MovieWall;
