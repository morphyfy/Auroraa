import "@styles/css/index.css";
import React from "react";
import Layout from "@layout/Layout";
import ThemeProviders from "@config/ThemeProvider";
import { Global } from "@emotion/react";
import { globalStyles } from "@styles/global.styles";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { SEO } from "@components/MetaData/SEO";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviders>
      <Layout>
        <DefaultSeo {...SEO} />
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProviders>
  );
}

export default MyApp;
