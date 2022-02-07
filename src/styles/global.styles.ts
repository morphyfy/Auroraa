import { css } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&display=swap");

  @font-face {
    font-family: "AuroraaBold";
    src: url("/font/FacebookReaderBold.otf") format("opentype");
  }

  @font-face {
    font-family: "AuroraaReg";
    src: url("/font/FacebookReaderMed.otf") format("opentype");
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyles;
