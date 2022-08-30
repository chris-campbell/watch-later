import styled from "styled-components";

export const AddMovieButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.snow};
    &:hover {
      transform: scale(1.1);
      transition: 200ms;
    }

    &:active {
      color: ${({ theme }) => theme.colors.summerOrange};
    }
  }
`;
