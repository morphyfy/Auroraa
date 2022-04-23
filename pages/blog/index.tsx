import client from "@lib/apollo";
import React from "react";
import BlogCard from "@components/BlogFeature/BlogCard/BlogCard";
import { TiPen } from "react-icons/ti";
import { QUERY_POSTS } from "@graphql/graphql.query";
import { PostProps } from "@interface/@types";
import { Container } from "@styles/global.styles";
import { PageSeo } from "@components/MetaData/SEO";

const Blog = ({ postsConnection }: PostProps) => {
  return (
    <Container>
      <PageSeo
        title="Blog Tulisan✍️"
        description="Seorang antusias frontend developer, memiliki passion dibidang web."
        key="rizkyy.space, rizkyy, rizkyy blog, blog, mdx, next.js blog, nextjs blog, graphcms, cms developer blog"
      />

      <div className="flexc items-start space-y-3 sm:p-4">
        <div className="flex items-center">
          <div className="rounded-[10px] px-[5px] py-[4px] dark:bg-zinc-700/80">
            <TiPen className="h-6 w-6" />
          </div>
          <h1 className="text-[30px] font-serif ml-2 mt-1">Blog</h1>
        </div>
        <p className="font-sans opacity-80 text-[16px]">
          Terkadang ingin mencurahkan isi pikiran. Biasanya saya membahas
          tentang tutorial atau teknologi.
        </p>
      </div>

      <div className="card__list-post">
        {postsConnection &&
          postsConnection.edges.map(({ node }) => (
            <BlogCard
              slug={node.slug}
              key={node.id}
              categories={node.categories}
              excerpt={node.excerpt}
              title={node.title}
              date={node.createdAt}
            />
          ))}
      </div>
    </Container>
  );
};

export default Blog;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: QUERY_POSTS,
    variables: {
      first: 100,
      skip: 0,
    },
  });

  const { postsConnection } = data;

  return {
    props: {
      postsConnection,
    },
  };
}

