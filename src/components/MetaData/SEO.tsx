import React from "react";
import Head from "next/head";

type HelmetProps = {
  title: string;
};

const SEO = (props: HelmetProps) => {
  return (
    <Head>
      <title>{props.title} | Auroraa</title>
      <meta
        name="description"
        property="og:title"
        content="AFF Utama"
        key="Auroraa, Articlepost, ioofy, rizukyy, aurora.com"
      />
      <meta name="keywords" content="auroraa, aurora, auroraa.com"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
