import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Footers from "./components/Footer/Footer";
import Headers from "./components/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  margin: 20px 0px;
`;

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Headers />
      <Main>{children}</Main>
      <Footers />
    </React.Fragment>
  );
};

export default Layout;
