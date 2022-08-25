import React from "react";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import axios from "axios";

const Dashboard = (movies) => {
  return <DashboardComponent movies={movies.results} />;
};

export default Dashboard;

export const getStaticProps = async (ctx) => {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  const moviesURL = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  let movies;

  try {
    const { data: moviesData } = await axios.get(moviesURL);

    movies = moviesData;
  } catch (error) {
    console.log(error);
  }

  return {
    props: movies,
  };
};
