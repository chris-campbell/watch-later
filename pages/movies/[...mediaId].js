import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  margin: 0 calc(-50vw + 50%);
  .hero {
    background-image: ${({ bdURL }) => `url(${bdURL})`};
    background-repeat: no-repeat;
    height: 40vh;
    position: sticky;
    background-size: cover !important;
    background-position: 50% !important;
  }
`;

const MediaDetails = (movie) => {
  const imageURL = process.env.IMAGE_BASE_URL;
  const backdropSize = process.env.BACKDROP_SIZE;
  const bgImage = movie.backdrop_path;

  const bd = `${imageURL}${backdropSize}${bgImage}`;

  return (
    <Container bdURL={bd}>
      <div className="hero"></div>
      <div className="media-details-wrapper">
        <p>{movie.title}</p>
      </div>
    </Container>
  );
};

export default MediaDetails;

export async function getServerSideProps({ params }) {
  const id = params.mediaId[0];
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  const url = `${apiUrl}movie/${id}?api_key=${apiKey}&language=en-US`;

  let movie;

  try {
    const { data } = await axios.get(url);
    movie = data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: movie,
  };
}
