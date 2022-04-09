import React from "react";
import client from "@lib/apollo";
import Link from "next/link";
import BlogFeature from "@components/BlogFeature/BlogCard/BlogCard";
import { Container } from "@styles/global.styles";
import { PostProps } from "@interface/@types";
import { PageSeo } from "@components/MetaData/SEO";
import { QUERY_POSTS } from "@graphql/graphql.query";
import { MdOutlineArticle } from "react-icons/md";

const Home = ({ postsConnection }: PostProps) => {
  return (
    <Container>
      <PageSeo
        title="Rizkyy😎"
        description="I'm Rizky front-end developer. proficient with JS and CSS Framework"
        key="rizkyy blog, blog, mdx, next.js blog, nextjs blog, graphcms, cms"
      />
      <div className="flex flex-col items-start space-y-3 sm:p-4">
        <div className="flex items-center">
          <div className="rounded-[12px] bg-sky-400/30 p-[5px] dark:bg-zinc-700/80">
            <MdOutlineArticle className="h-6 w-6" />
          </div>
          <h1 className="text-[25px] font-[IBMSans] ml-2">Tulisan terbaru</h1>
        </div>
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
      <Link href="/blog">
        <span
          className="block my-5 font-[IBMSans] text-[18px] font-bold cursor-pointer
        text-[#35f4c6] sm:p-4"
        >
          Lihat Semua →
        </span>
      </Link>
    </Container>
  );
};

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

export default Home;
