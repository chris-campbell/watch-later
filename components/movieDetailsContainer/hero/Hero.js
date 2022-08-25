import React from "react";
import Image from "next/image";
import AddBoxIcon from "@mui/icons-material/AddBox";
const Hero = ({ title, poster, date, overview, genres, vote }) => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-poster">
          <Image
            src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${poster}`}
            width={400}
            height={600}
          />
        </div>

        <div className="movie-details">
          <div className="details-wrapper">
            <h1>
              {title}
              <span className="date">{`(${date.slice(0, 4)})`}</span>
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
              value={vote * 10}
            />

            <div className="add-movie">
              <AddBoxIcon onClick={() => addToWatch()} /> Add to watch list
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
