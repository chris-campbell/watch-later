import React from "react";
import styled from "styled-components";

export const PageTitleContainer = styled.div`
  margin-bottom: 2rem;
  .usage-message {
    font-size: 0.8rem;
    color: #ffffff4a;
    text-transform: none;
    letter-spacing: 0.01rem;
  }
  h1 {
    text-transform: capitalize;
    font-size: 1.2rem;
    .usage-message {
      font-size: 0.8rem;
      color: #ffffff4a;
      text-transform: none;
      letter-spacing: 0.01rem;
      font-style: normal;
    }
  }
`;

const PageTitle = ({ search }) => {
  return (
    <PageTitleContainer>
      {search === "" ? (
        <div className="page-title">
          <h1>
            Popular Movies{" "}
            <span className="usage-message">
              (Double-tap to add to watch list)
            </span>
          </h1>
        </div>
      ) : (
        <div className="page-title">
          Search {"   "}
          <span className="usage-message">
            (Double-tap to add to watch list)
          </span>
          <h1>{search}</h1>
        </div>
      )}
    </PageTitleContainer>
  );
};

export default PageTitle;
