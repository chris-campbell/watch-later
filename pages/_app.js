import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <GlobalStyles />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
