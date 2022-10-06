import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ toggle }) => (toggle ? "1rem" : "0")};
  background-color: #070c2b;
  transition: height 500ms ease-in;
  z-index: 10;

  input {
    height: ${({ toggle }) => (toggle ? "3rem" : "0rem")};
    visibility: ${({ toggle }) => (toggle ? "visible" : "hidden")};
    transition: all 300ms ease-in-out;
    width: 100%;
    max-width: 40rem;
    background-color: #ffffff12;
    border-radius: 2rem;
    border: none;
    outline: none;
    font-size: 1.2em;
    padding-left: 1.6rem;
    color: ${(p) => p.theme.colors.snow};
    &::placeholder {
      color: #ffffff38;
    }
  }
`;

export default Container;
