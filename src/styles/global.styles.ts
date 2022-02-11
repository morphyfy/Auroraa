import { css } from "@emotion/react";
import { maxWidth } from "./variable.styles";
import styled from "@emotion/styled";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap");

  @font-face {
    font-family: "FacebookReaderB";
    src: url("/font/FacebookReaderBold.otf") format("opentype");
  }

  @font-face {
    font-family: "FacebookReaderM";
    src: url("/font/FacebookReaderMed.otf") format("opentype");
  }

  html {
    scroll-behavior: smooth;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: ${maxWidth.large};
  margin: 0px auto;
  padding: 15px;

  // only in slug page
  .nav-hidden {
    display: none;
  }

  @media screen and (max-width: 991px) {
    padding: 0px;
  }

  @media screen and (max-width: 912px) {
    .nav-hidden {
      display: block;
    }
  }
`;
