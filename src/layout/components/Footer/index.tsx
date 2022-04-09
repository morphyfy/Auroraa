import React from "react";
import styled from "@emotion/styled";
import { maxWidth } from "@styles/variable.styles";

const FooterMain = styled.footer`
  height: 80px;
  display: flex;
  margin: 40px 0px;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  z-index: 1;
  width: 100%;
  padding: 0 0 15px;
  max-width: ${maxWidth.medium};

  @media screen and (max-width: 653px) {
    padding: 15px;
    height: 80px;
  }

  @media screen and (max-width: 428px) {
    flex-direction: column;
  }
`;

const FooterCopyright = styled.p`
  font-family: "IBMSans", sans-serif;
  font-size: 16px;
`;

const SideItem = styled.div`
  display: flex;
  align-items: center;
`;

const WebInfo = styled.p`
  font-family: "IBMSans", sans-serif;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterMain>
      <FooterWrapper>
        <FooterCopyright>© 2021 - 2022 Under MIT License</FooterCopyright>
        <SideItem>
          <WebInfo>Made with 💙 by Rizkyy.</WebInfo>
        </SideItem>
      </FooterWrapper>
    </FooterMain>
  );
};

export default Footer;
