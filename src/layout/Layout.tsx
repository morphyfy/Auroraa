import React, { ReactNode } from "react";
import { Global } from "@emotion/react";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
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
      <main className="wrapper __wrapper-contents">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
