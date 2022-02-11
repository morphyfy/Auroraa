import React, { ReactNode } from "react";
import { Global } from "@emotion/react";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import { globalStyles } from "@styles/global.styles";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const { children } = props;

  const showLayout = router.pathname === "/article/[slug]" ? false : true;

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {showLayout && <Header />}
      <main className="wrapper __wrapper-contents">{children}</main>
      {showLayout && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
