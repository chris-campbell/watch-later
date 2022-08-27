import { useState } from "react";
import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./theme/theme";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <GlobalStyles />
        <Provider store={store}>
          <Layout>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </QueryClientProvider>
          </Layout>
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
