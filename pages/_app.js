import { useState } from "react";
import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./theme/theme";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SearchProvider } from "./context/searchContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <GlobalStyles />
        <Provider store={store}>
          <SearchProvider>
            <Layout>
              <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                  <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                  </PersistGate>
                </Hydrate>
              </QueryClientProvider>
            </Layout>
          </SearchProvider>
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
