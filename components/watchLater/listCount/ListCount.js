import React from "react";
import styled from "styled-components";

const ListCountContainer = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.snow};
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .list-count {
    color: ${({ theme }) => theme.colors.summerOrange};
    font-style: "italic";
  }
`;

const ListCount = ({ listLength }) => {
  return (
    <ListCountContainer>
      Movies in list <span>•</span>{" "}
      <span className="list-count">{listLength}</span>
    </ListCountContainer>
  );
};

export default ListCount;
