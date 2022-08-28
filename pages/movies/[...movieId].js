import React from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import MovieDetailsContainer from "../../components/movieDetailsContainer/MovieDetailsContainer";

const MovieDetails = ({ movie, team }) => {
  return <MovieDetailsContainer movie={movie} team={team} />;
};

export default MovieDetails;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const id = context.params.movieId[0];
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  const movieURL = `${apiUrl}movie/${id}?api_key=${apiKey}&language=en-US`;
  const teamURL = `${apiUrl}movie/${id}/credits?api_key=${apiKey}`;

  let movie;
  let team;

  try {
    const { data: movieData } = await axios.get(movieURL);
    const { data: teamData } = await axios.get(teamURL);

    movie = movieData;
    team = teamData;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { movie, team },
  };
}
