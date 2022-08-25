import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: 0 calc(-50vw + 50%);
  .hero {
    background-image: ${({ bdURL }) =>
      `linear-gradient(90deg, rgba(3,7,30,1) 0%, rgba(3,7,30,0.7609637605042017) 64%, rgba(0,212,255,0) 100%),url(${bdURL})`};
    background-repeat: no-repeat;
    height: auto;
    position: sticky;
    background-size: cover !important;
    background-position: 50% !important;
    .hero-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 0;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;

      .hero-poster {
        height: 600px;
        width: 350px;
        position: relative;
      }

      img {
        border-radius: 0.5rem;
      }
    }
  }
`;
