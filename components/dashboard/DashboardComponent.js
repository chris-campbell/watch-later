import { useEffect, useState, useRef } from "react";
import Genres from "../mostPopular/MostPopluar";
import MediaSelect from "../mediaSelect/MediaSelect";
import styled from "styled-components";
import axios from "axios";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
`;

const DashboardComponent = ({ session }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `${process.env.API_URL}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
      );

      setMovies(data.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  useEffect(() => {}, []);

  if (loading) return "...loading";

  return (
    <DashboardContainer>
      <MediaSelect movies={movies} />
    </DashboardContainer>
  );
};

export default DashboardComponent;
