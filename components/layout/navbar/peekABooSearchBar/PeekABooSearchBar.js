import React from "react";
import Container from "./styles/styles";

const PeekABooSearchBar = ({ toggle }) => {
  return (
    <Container toggle={toggle}>
      <input placeholder="Search by title" />
    </Container>
  );
};

export default PeekABooSearchBar;
