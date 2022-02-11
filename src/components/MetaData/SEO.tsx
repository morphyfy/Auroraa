import React from "react";
import Head from "next/head";

type HelmetProps = {
  title: string;
  content: string | any;
};

const SEO = (props: HelmetProps) => {
  return (
    <Head>
      <link rel="icon" href="/image/logo.png" />
      <meta charSet="utf-8" />
      <title>{props.title} | Auroraa 🦄</title>
      <meta
        name="description"
        property="og:title"
        content={props.content}
        key="auroraa, blog, nextjs-blog, mdx-blog"
      />
      <meta
        name="keywords"
        content="auroraa, blog, nextjs-blog, mdx-blog"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="twitter:description"
        content="Auroraa is a template blog for everyone who wants to share their ideas, thoughts, or stories."
      />
      <meta
        name="twitter:title"
        content="Auroraa 🦄 | A place to share any ideas, thoughts, or stories."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
