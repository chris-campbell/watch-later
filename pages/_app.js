import "../styles/globals.css";
import Layout from "../components/layout/Layout";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
