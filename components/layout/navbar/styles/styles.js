import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 1.5rem 1rem;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    .nav-logo {
      font-size: ${(p) => p.theme.fontSizes.medium};
      font-weight: 600;
    }
    .primary-nav {
      .primary-nav-wrapper {
        display: flex;
        align-items: center;
        gap: 2rem;
        .watch-list {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: ${(p) => p.theme.colors.snow};
          font-size: 0.9rem;
          .watch-list-count {
            height: 30px;
            width: 30px;
            background-color: ${(p) => p.theme.colors.summerOrange};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
          }
        }
      }
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  img {
    border-radius: 4rem;
  }

  .dropdown-menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    right: 0;
    background-color: #1d1d1d;
    min-width: 130px;
    box-shadow: 10px 9px 27px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 9px 27px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 9px 27px -1px rgba(0, 0, 0, 0.75);
    z-index: 1;
    height: auto;
    border-radius: 0.5rem;
    ul {
      li {
        list-style: none;
        padding: 0.7rem 1rem;
        color: ${(p) => p.theme.colors.snow};
        &:hover {
          background-color: #2b2b2b;
          transition: 400ms;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  &:hover .dropdown-menu {
    visibility: visible;
    opacity: 1;
    transition: 500ms;
  }
`;
