import React, { useEffect } from "react";
import client from "@lib/apollo";
import Markdown from "markdown-to-jsx";
import { Container } from "@styles/global.styles";
import { gql } from "@apollo/client";
import { PostProps } from "@interface/@types";
import { PageSeo } from "@components/MetaData/SEO";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import Thumbnail from "@components/Thumbnail/Image";

const Home = ({ postsConnection }: PostProps) => {
  console.log(postsConnection);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Container>
      <PageSeo
        title="hello world"
        description="awesome"
        key="blog, mdx, and others stuff"
      />
      {postsConnection &&
        postsConnection.edges.map((edge, index) => {
          return (
            <div key={index}>
              <h1>{edge.node.title}</h1>
              <p>{edge.node.excerpt}</p>
              <Thumbnail
                srcUrl={edge.node.thumbnailImage.url}
                altText={edge.node.thumbnailImage.fileName}
              />
              <Markdown>{edge.node.content}</Markdown>
            </div>
          );
        })}
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        postsConnection(first: 1) {
          edges {
            node {
              excerpt
              title
              thumbnailImage {
                url
                fileName
              }
              content
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `,
  });

  const { postsConnection } = data;

  return {
    props: {
      postsConnection,
    },
  };
}

export default Home;
