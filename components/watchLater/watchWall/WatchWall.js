import React from "react";
import Movie from "../movie/Movie";
import styled from "styled-components";

const WatchWallContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  row-gap: 2rem;
  column-gap: 2rem;
`;

const WatchWall = ({ list }) => {
  return (
    <WatchWallContainer>
      {list.length > 0 ? (
        list.map((movie) => <Movie key={movie.id} {...movie} />)
      ) : (
        <h1>Watch list empty</h1>
      )}
    </WatchWallContainer>
  );
};

export default WatchWall;
