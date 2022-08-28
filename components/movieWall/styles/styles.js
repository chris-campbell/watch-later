import styled from "styled-components";

export const MovieWallContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
  .media-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

export const PageTitle = styled.div`
  margin-bottom: 2rem;
  h1 {
    text-transform: capitalize;
    font-size: 1.4rem;
  }
`;
