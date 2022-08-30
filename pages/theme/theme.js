import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      font-family: ${(p) => p.theme.fonts[0]} !important;
      margin: 0;
      padding: 0;
    }

    body {
        background-color: ${(p) => p.theme.colors.theaterBlue};
    }

    main {
        min-height: 100vh;
        max-width: 1200px;
        margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(p) => p.theme.colors.summerOrange};
    }
    
    p {
        color: ${(p) => p.theme.colors.snow};
    }

    a {
        color: ${(p) => p.theme.colors.snow};
    }

    .infinite-scroll-component {
      overflow: hidden !important;
    }

`;

export const theme = {
  colors: {
    theaterBlue: "#03071e",
    summerOrange: "#a64684",
    cosmos: "#a64684",
    snow: "#ffffff94",
  },
  fonts: ["Raleway, sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export default GlobalStyles;
