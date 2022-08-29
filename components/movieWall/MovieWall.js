import React from "react";
import PageTitle from "./pageTitle/PageTitle";
import InfiniteScroller from "./infiniteScroller/InfiniteScroller";
import { useSearch } from "../../pages/context/searchContext";

// MovieWall styles
import * as S from "./styles/styles";

const MovieWall = ({ query }) => {
  const { data, status, fetchNextPage, hasNextPage } = query;
  const { search } = useSearch();

  return (
    <S.MovieWallContainer>
      <PageTitle search={search} />
      <InfiniteScroller
        status={status}
        data={data}
        next={fetchNextPage}
        hasMore={hasNextPage}
      />
    </S.MovieWallContainer>
  );
};

export default MovieWall;
