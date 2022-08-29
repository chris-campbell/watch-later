import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FadeLoader from "react-spinners/FadeLoader";
import Movie from "../movie/Movie";

const InfiniteScroller = ({ status, data, next, hasmore }) => {
  return (
    <>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={next}
          hasMore={hasmore}
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
