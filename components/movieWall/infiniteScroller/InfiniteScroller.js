import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FadeLoader from "react-spinners/FadeLoader";
import Movie from "../movie/Movie";

const InfiniteScroller = ({ status, data, fetchNextPage, hasNextPage }) => {
  return (
    <>
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
    </>
  );
};

export default InfiniteScroller;
