import SEO from "@components/MetaData/SEO";
import { Container } from "@styles/global.styles";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Container>
      <SEO title="Welcome" />
    </Container>
  );
};

export default Home;
