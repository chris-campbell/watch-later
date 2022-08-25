import React from "react";
import Image from "next/image";
import * as S from "./styles/styles";

const MovieCast = ({ cast }) => {
  return (
    <S.MovieCastContainer className="movie-cast">
      <div className="movie-cast-wrapper">
        {cast.map((member) =>
          member.profile_path ? (
            <S.CastMember className="cast-member">
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
            </S.CastMember>
          ) : null
        )}
      </div>
    </S.MovieCastContainer>
  );
};

export default MovieCast;
