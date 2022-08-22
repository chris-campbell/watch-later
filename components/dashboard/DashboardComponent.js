import { useEffect, useState } from "react";
import Genres from "../genres/Genres";
import MediaSelect from "../mediaSelect/MediaSelect";
import styled from "styled-components";
import axios from "axios";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 2rem;
`;

const DashboardComponent = ({ session }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=38b43897c78046316e465417feb86538&language=en-US&page=1"
      );

      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <DashboardContainer>
      <Genres movies={movies} />
      <MediaSelect movies={movies} />
    </DashboardContainer>
  );
};

export default DashboardComponent;
