import styled from "styled-components";

export const MovieCastContainer = styled.section`
  margin-top: 4rem;
  padding: 1rem;
  .movie-cast-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;
    @media (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 371px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const CastMember = styled.div`
  position: relative;
  border-radius: 0.5rem;

  img {
    border-radius: 0.5rem;
  }

  .cast-details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #03071ee6;
    height: 5rem;
    padding: 1rem;
    p {
      font-size: 0.8rem;
      margin-top: 0.2rem;
    }
  }
`;
