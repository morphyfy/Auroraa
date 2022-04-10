import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />
        <link href="/site.webmanifest" rel="manifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#f2ece9" />
      </Head>
      <body>
        <Main />
 {
  process.env.NODE_ENV === "production" && (
    <script
      async
      defer
      data-website-id="1656c6d6-c8e0-4352-bb7a-ef1538170dc3"
      src="https://umami-production-e27e.up.railway.app/umami.js"
    ></script>
  );
}
      <NextScript />
      </body>
    </Html>
  );
}
