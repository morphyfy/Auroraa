import SEO from "@components/SEOComponents/SEO";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <SEO title="Welcome" />
      <h1>We Make Something Interest</h1>
    </div>
  );
};

export default Home;
