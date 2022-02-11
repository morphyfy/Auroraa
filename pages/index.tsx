import SEO from "@components/MetaData/SEO";
import { Container } from "@styles/global.styles";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Container>
      <SEO title="Ioofy. Just enthusiast frontend devs want to learn anything." />
      <h1>Ioofy</h1>
    </Container>
  );
};

export default Home;
