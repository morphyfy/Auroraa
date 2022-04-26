import React from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Main = styled.main`
  margin: 20px 0px;
`;

const Layout = (children: React.ReactNode) => {
  return (
    <React.Fragment>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

