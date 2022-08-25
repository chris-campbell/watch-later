import styled from "styled-components";

export const PopularityMeterContainer = styled.div`
  margin-bottom: 1rem;

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
`;
