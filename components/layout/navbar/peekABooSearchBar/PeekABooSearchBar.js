import React from "react";
import Container from "./styles/styles";
import { useSearch } from "../../../../pages/context/searchContext";
import { useRouter } from "next/router";

const PeekABooSearchBar = ({ toggle }) => {
  const { setSearch } = useSearch();
  const { push, pathname } = useRouter();

  const handleChange = (e) => {
    pathname !== "/movies" && push("/");
    setSearch(e.target.value);
  };

  return (
    <Container toggle={toggle}>
      <input placeholder="Search by title" onChange={(e) => handleChange(e)} />
    </Container>
  );
};

export default PeekABooSearchBar;
