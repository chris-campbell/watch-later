import MovieWall from "../movieWall/MovieWall";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
`;

const DashboardComponent = ({ movies }) => {
  return (
    <DashboardContainer>
      <MovieWall movies={movies} />
    </DashboardContainer>
  );
};

export default DashboardComponent;
