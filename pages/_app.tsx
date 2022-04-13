import React from "react";
import Layout from "@layout/Layout";
import App from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@styles/global.styles";
import ThemeProviders from "@config/themeProvider";
import "@styles/css/index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProviders>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProviders>
    );
  }
}

export default MyApp;
