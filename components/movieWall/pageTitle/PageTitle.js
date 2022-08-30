import React from "react";
import styled from "styled-components";

export const PageTitleContainer = styled.div`
  margin-bottom: 2rem;
  h1 {
    text-transform: capitalize;
    font-size: 1.2rem;
  }
`;

const PageTitle = ({ search }) => {
  return (
    <PageTitleContainer>
      {search === "" ? (
        <div className="page-title">
          <h1>Popular Movies</h1>
        </div>
      ) : (
        <div className="page-title">
          Search: <h1>{search}</h1>
        </div>
      )}
    </PageTitleContainer>
  );
};

export default PageTitle;
