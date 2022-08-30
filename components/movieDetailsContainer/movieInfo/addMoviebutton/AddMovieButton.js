import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import * as S from "./styles/styles";

const AddMovieButton = ({ addToWatch }) => {
  return (
    <S.AddMovieButtonContainer className="add-movie">
      <AddBoxIcon onClick={() => addToWatch()} /> Add to watch list
    </S.AddMovieButtonContainer>
  );
};

export default AddMovieButton;
