import styled from "styled-components";

export const BackButtonContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    width: fit-content;

    &:hover {
      color: ${({ theme }) => theme.colors.summerOrange};
      transition: 300ms ease-in-out;
    }

    svg {
      font-size: 1.1rem;
    }
  }
`;
