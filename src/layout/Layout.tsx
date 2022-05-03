import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  margin: 20px 0px;
`;

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
