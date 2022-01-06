import { css } from "@emotion/react";
import { colors } from "./colors.styles";

const globalStyles = css`
  @font-face {
    font-family: "AuroraaBold";
    src: url("/font/Croxify-bold.otf") format("opentype");
  }

  @font-face {
    font-family: "AuroraaReg";
    src: url("/font/Croxify-reg.otf") format("opentype");
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    color: ${colors.gray};
    font-family: "AuroraaBold";
  }

  h1 {
    font-size: 35px;
  }
`;

export default globalStyles;
