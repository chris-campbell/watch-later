import React, { useRef } from "react";
import styled from "styled-components";
import MediaCell from "./mediaCell/MediaCell";

const MediaSelectContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
  overflow-y: scroll;
  height: 20vh;
  .media-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;

    @media (max-width: 784px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const MediaSelect = ({ movies }) => {
  const listInnerRef = useRef();

  console.log(movies);
  const onScroll = () => {
    console.log("rap");
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
      }
    }
  };
  return (
    <MediaSelectContainer>
      <div className="media-wrapper" ref={listInnerRef} onScroll={onScroll}>
        {movies.map((movie) => (
          <MediaCell key={movie.id} {...movie} />
        ))}
      </div>
    </MediaSelectContainer>
  );
};

export default MediaSelect;
