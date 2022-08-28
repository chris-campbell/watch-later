import React from "react";
import Container from "./styles/styles";
import { useSearch } from "../../../../pages/context/searchContext";

const PeekABooSearchBar = ({ toggle }) => {
  const { setSearch } = useSearch();

  return (
    <Container toggle={toggle}>
      <input
        placeholder="Search by title"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
};

export default PeekABooSearchBar;
