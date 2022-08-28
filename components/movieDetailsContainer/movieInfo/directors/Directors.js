import React from "react";

const Directors = ({ directors }) => {
  return (
    <div className="directors">
      <h5>Directors</h5>

      {directors.map((director) => (
        <span key={director.id} className="director">
          {director.name}
        </span>
      ))}
    </div>
  );
};

export default Directors;
