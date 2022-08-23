import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const MostPopularContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
`;

const MostPopular = ({ movies }) => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const topThreeMovies = () => {
      const sortedByPopularity = movies.sort((a, b) =>
        a.popularity > b.popularity ? -1 : 1
      );

      return setTopMovies(sortedByPopularity.slice(0, 3));
    };

    topThreeMovies();
  }, []);

  return (
    <MostPopularContainer>
      <div className="most-popular-wrapper">
        {topMovies.map((movie) => (
          <div>
            <Image
              width={600}
              height={600}
              src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${movie.poster_path}`}
            />
          </div>
        ))}
      </div>
    </MostPopularContainer>
  );
};

export default MostPopular;
