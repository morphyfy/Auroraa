import { css } from "@emotion/react";
import AuroraReader from "./font/AuroraReader.otf";

export const globalStyles = css`
  @font-face {
    font-family: "AuroraReader";
    src: url(${AuroraReader}) format("opentype");
  }

  body {
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;
