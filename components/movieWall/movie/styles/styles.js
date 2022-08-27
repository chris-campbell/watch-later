import styled from "styled-components";

export const MovieContainer = styled.div`
  overflow-y: hidden;
  position: relative;
  img {
    border-radius: 0.3rem;
    cursor: pointer;
    transform: scale(1);
    transition: 500ms ease-out;

    &:hover {
      transform: scale(1.05);
      transition: 500ms ease-in;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &:hover .popup {
    height: 8rem;
    transition: 500ms;
  }

  .popdown {
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
  }

  .popup {
    background-color: #03071ee6;
    position: absolute;
    height: 0rem;
    bottom: 0;
    right: 0;
    left: 0;
    .popup-wrapper {
      padding: 1rem;
      .title {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        .date {
          color: ${({ theme }) => theme.colors.snow};
          font-weight: 400;
        }
      }
      .overview {
        font-size: 0.8em;
        line-height: 1.1rem;
        text-overflow: "Read more";
        box-orient: vertical;
        overflow: hidden !important;
      }
    }
  }
`;
