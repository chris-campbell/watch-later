import MovieWall from "../movieWall/MovieWall";
import * as S from "./styles/styles";

const DashboardComponent = ({ query }) => {
  return (
    <S.DashboardContainer>
      <MovieWall query={query} />
    </S.DashboardContainer>
  );
};

export default DashboardComponent;
