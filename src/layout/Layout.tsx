import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
      <Header />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
