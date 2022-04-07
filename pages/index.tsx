import React from "react";
import client from "@lib/apollo";
import BlogFeature from "@components/BlogFeature/BlogCard/BlogCard";
import { Container } from "@styles/global.styles";
import { PostProps } from "@interface/@types";
import { PageSeo } from "@components/MetaData/SEO";
import { QUERY_POSTS } from "@graphql/graphql.query";

const Home = ({ postsConnection }: PostProps) => {
  return (
    <Container>
      <PageSeo
        title="Rizkyy😎"
        description="I'm Rizky front-end developer. proficient with JS and CSS Framework"
        key="rizkyy blog, blog, mdx, next.js blog, nextjs blog, graphcms, cms"
      />
      {postsConnection &&
        postsConnection.edges.map((edge) => {
          return (
            <BlogFeature
              slug={edge.node.slug}
              key={edge.node.id}
              categories={edge.node.categories}
              excerpt={edge.node.excerpt}
              title={edge.node.title}
              date={edge.node.createdAt}
            />
          );
        })}
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: QUERY_POSTS,
    variables: {
      first: 10,
    },
  });

  const { postsConnection } = data;

  return {
    props: {
      postsConnection,
    },
  };
}

export default Home;
