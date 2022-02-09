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
        content="Auroraa 🦄 | A place to share any ideas, thoughts, or stories."
        key="Auroraa, blogpost, ioofy, rizukyy, auroraa"
      />
      <meta
        name="keywords"
        content="auroraa, blog, nextjs-blog, mdx-blog"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
