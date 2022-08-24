import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
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

      .movie-details {
        margin-top: 2rem;
        .details-wrapper {
          h1 {
            color: #fff;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 2rem;
            .date {
              font-size: 1.5rem;
              color: ${({ theme }) => theme.colors.snow};
            }
          }

          h3 {
            margin-bottom: 1rem;
          }

          h4 {
            margin-bottom: 0.5rem;
          }

          p {
            line-height: 1.4rem;
            margin-bottom: 1.5rem;
            color: #ffffff;
          }

          meter {
            height: 1.5rem;
            max-width: 20rem;
            width: 100%;
            border-radius: none;
            &::-webkit-meter-bar {
              border-radius: 3px;
              border: none;
            }
          }

          .genres {
            display: flex;
            gap: 1rem;
            color: #ffffff;
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
`;

const MovieCast = styled.section`
  margin-top: 4rem;
  .movie-cast-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;
  }
`;

const CastMember = styled.div`
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

const MediaDetails = ({ movie, team }) => {
  console.log(team);
  const [cast, setCast] = useState([]);
  const [directors, setDirectors] = useState([]);

  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    genres,
    vote_average,
    release_date,
  } = movie;

  const imageURL = process.env.IMAGE_BASE_URL;
  const backdropSize = process.env.BACKDROP_SIZE;
  const bgImage = backdrop_path;

  const bd = `${imageURL}${backdropSize}${bgImage}`;
  const poster = `${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${poster_path}`;

  useEffect(() => {
    const directors = team.crew.filter((member) => member.job === "Director");

    setCast(team.cast);
    setDirectors(directors);
  }, []);

  return (
    <Container bdURL={bd} poster={poster}>
      <div className="hero">
        <div className="hero-wrapper">
          <div className="hero-poster">
            <Image
              src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${poster_path}`}
              width={400}
              height={600}
            />
          </div>

          <div className="movie-details">
            <div className="details-wrapper">
              <h1>
                {title}
                <span className="date">{`(${release_date.slice(0, 4)})`}</span>
              </h1>
              <h3>Synopsis</h3>
              <p>{overview}</p>

              <div className="genres">
                {genres.map((genre) => (
                  <span className="genre">{genre.name}</span>
                ))}
              </div>

              <h4>Popularity</h4>
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={vote_average * 10}
              />
            </div>
          </div>
        </div>
      </div>
      <MovieCast className="movie-cast">
        <div className="movie-cast-wrapper">
          {cast.map((member) =>
            member.profile_path ? (
              <CastMember className="cast-member">
                <div className="cast-member-wrapper">
                  <div>
                    <div>
                      <Image
                        src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${member.profile_path}`}
                        width={350}
                        height={500}
                      />
                    </div>
                  </div>
                  <div className="cast-details">
                    <h4>{member.name}</h4>
                    <p>{member.character}</p>
                  </div>
                </div>
              </CastMember>
            ) : null
          )}
        </div>
      </MovieCast>
    </Container>
  );
};

export default MediaDetails;

export async function getServerSideProps({ params }) {
  const id = params.mediaId[0];
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
