import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import styled from "styled-components";

const PopdownContainer = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .popdown-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.snow};
      &:hover {
        transform: scale(1.1);
        transition: 400ms;
      }

      &:active {
        opacity: 0.8;
        color: ${({ theme }) => theme.colors.summerOrange};
      }
    }
  }
`;

const Popdown = ({ addMovieToWatchList }) => {
  return (
    <PopdownContainer className="popdown">
      <div className="popdown-wrapper">
        <div onClick={() => addMovieToWatchList()}>
          <AddBoxIcon />
        </div>
      </div>
    </PopdownContainer>
  );
};

export default Popdown;
