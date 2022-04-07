import { css } from "@emotion/react";
import { maxWidth } from "./variable.styles";
import styled from "@emotion/styled";

export const globalStyles = css`
  // font for code blocks
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,400;1,500&display=swap");

  @font-face {
    font-family: "Grotesk";
    src: url("/fonts/Grotesk.woff2") format("woff2");
  }

  @font-face {
    font-family: "IBMSans";
    src: url("/fonts/IBMSans.woff2") format("woff2");
  }

  html {
    scroll-behavior: smooth;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: ${maxWidth.medium};
  margin: 0px auto;

  // every markup have a margin
  /* h2,
  h3,
  a,
  p,
  ul,
  ol,
  hr,
  li,
  pre,
  code,
  table,
  thead,
  blockquote,
  tbody,
  tr,
  th,
  td,
  img {
    margin: 25px 0px;
  }

  pre {
    code {
      font-family: "IBM Plex Mono", monospace;
      font-size: 14px;
      border-radius: 2px;
    }
  }

  blockquote {
    text-align: center;
    font-style: italic;
    p {
      font-family: "IBMSans", sans-serif;
      font-weight: bold;
      font-size: 2rem !important;
      opacity: 0.9;
      line-height: 1.2em;
    }
  }

  img {
    border-radius: 5px !important;
    display: flex;
    justify-content: center;
    width: ${maxWidth.medium};
    height: 500px;
    margin: 0px auto 5px;
  }

  @media screen and (max-width: 834px) {
    width: 100%;
    padding: 20px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  @media screen and (max-width: 360px) {
    h2 {
      font-size: 1.35rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 15px;
    }
    em {
      font-size: 13px;
    }
    blockquote {
      p {
        font-size: 1.5rem !important;
      }
    }
  } */
`;
