import client from "@lib/apollo";
import React from "react";
import BlogFeature from "@components/BlogFeature/BlogCard/BlogCard";
import { TiPen } from "react-icons/ti";
import { QUERY_POSTS } from "@graphql/graphql.query";
import { PostProps } from "@interface/@types";
import { Container } from "@styles/global.styles";
import { PageSeo } from "@components/MetaData/SEO";

const Blog = ({ postsConnection }: PostProps) => {
  return (
    <Container>
      <PageSeo
        title="— Blog Tulisan"
        description="I'm Rizky front-end developer. proficient with JS and CSS Framework"
        key="rizkyy blog, blog, mdx, next.js blog, nextjs blog, graphcms, cms"
      />

      <div className="flex flex-col items-start space-y-3 sm:p-4">
        <div className="flex items-center">
          <div className="rounded-[12px] bg-sky-400/30 p-[5px] dark:bg-zinc-700/80">
            <TiPen className="h-6 w-6" />
          </div>
          <h1 className="text-[30px] font-[IBMSans] ml-2 mt-1">Blog</h1>
        </div>
        <p className="font-[IBMSans] opacity-80 text-[18px]">
          Terkadang ingin mencurahkan isi pikiran. Biasanya saya membahas
          tentang tutorial atau teknologi.
        </p>
      </div>

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

export default Blog;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: QUERY_POSTS,
    variables: {
      first: 3,
    },
  });

  const { postsConnection } = data;

  return {
    props: {
      postsConnection,
    },
  };
}
