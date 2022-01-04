import { SEO } from "@components/index";
import Layout from "@layout/Layout";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="Welcome" />
      <div>Testing Eslint, Prettier, Husky and Setup</div>
    </Layout>
  );
};

export default Home;
