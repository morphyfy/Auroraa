import { css } from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: "Croxy";
    src: url("/font/Croxy.otf") format("opentype");
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Croxy";
  }
`;
