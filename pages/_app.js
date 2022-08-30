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
import { ReactQueryDevtools } from "react-query/devtools";
import SearchProvider from "./context/searchContext";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <GlobalStyles />
        <Provider store={store}>
          <SearchProvider>
            <Layout>
              <ToastContainer />
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
