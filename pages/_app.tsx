import React from "react";
import Layout from "@layout/Layout";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@styles/global.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
