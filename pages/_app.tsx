import React from "react";
import Layout from "@layout/Layout";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@styles/global.styles";
import ThemeProviders from "@config/themeProvider";
import "@styles/css/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviders>
      <Layout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProviders>
  );
}

export default MyApp;
