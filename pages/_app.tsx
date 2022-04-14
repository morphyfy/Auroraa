import "@styles/css/index.css";
import React from "react";
import Layout from "@layout/Layout";
import ThemeProviders from "@config/themeProvider";
import { Global } from "@emotion/react";
import { globalStyles } from "@styles/global.styles";
import { AppProps } from "next/app";

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
