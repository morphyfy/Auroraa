import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { maxWidth } from "./variable.styles";

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

  body {
    background: #0f0e0e;
  }

  * {
    color: #efefef;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: ${maxWidth.large};
  margin: 0px auto;
  padding: 15px;

  @media screen and (max-width: 991px) {
    padding: 0px;
  }
`;
