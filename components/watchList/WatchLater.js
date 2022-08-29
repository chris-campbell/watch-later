import React from "react";

// Redux imports
import { useSelector } from "react-redux";

// Imported Components
import BackButton from "./backButton/BackButton";
import ListCount from "./listCount/ListCount";
import WatchWall from "./watchWall/WatchWall";

import styled from "styled-components";

const WatchListContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const WatchLater = () => {
  const list = useSelector((state) => state.value);

  return (
    <WatchListContainer>
      <div className="wrapper">
        <BackButton />
        <ListCount listLength={list.length} />

        <WatchWall list={list} />
      </div>
    </WatchListContainer>
  );
};

export default WatchLater;
