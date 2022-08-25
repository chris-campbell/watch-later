import styled from "styled-components";

export const TitleContainer = styled.div`
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
`;
