import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
