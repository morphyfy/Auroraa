import { css } from "@emotion/react";
import { maxWidth } from "./variable.styles";
import styled from "@emotion/styled";

export const globalStyles = css`
  // font for code blocks
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,400;1,500&display=swap");

  @font-face {
    font-family: "Grotesk";
    src: url("/fonts/Grotesk.woff2") format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "IBMSans";
    src: url("/fonts/IBMSans.woff2") format("woff2");
    font-display: swap;
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
`;
