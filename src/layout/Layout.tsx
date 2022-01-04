import React, { ReactNode } from "react";
import { Global } from "@emotion/react";
import Footer from "./components/FooterComponents/Footer";
import Header from "./components/HeaderComponents/Header";
import globalStyles from "@styles/global.styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
