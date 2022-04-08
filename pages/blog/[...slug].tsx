import React from "react";
import client from "@lib/apollo";
import BlogHeader from "@components/BlogFeature/BlogHeader/BlogHeader";
import BlogComments from "@components/BlogFeature/BlogComments/BlogComments";
import BlogWrapper from "@components/BlogFeature/BlogWrapper/BlogWrapper";
import { Container } from "@styles/global.styles";
import { QUERY_POSTS, QUERY_POSTS_DETAIL } from "@graphql/graphql.query";
import { PostDetailProps, PostProps } from "@interface/@types";
import { BlogSeo } from "@components/MetaData/SEO";

export default function Article({ post }: PostDetailProps) {
  return (
    <Container>
      <BlogSeo
        title={`${post.title} | Blog Tulisan — Rizkyy😎`}
        url={`https://rizkyy27.vercel.app/article/${post.slug}`}
        description={post.excerpt}
        date={post.createdAt}
      />
      <BlogHeader
        authorName={post.author.name}
        authorUrl={post.author.photo.url}
        dateString={post.createdAt}
        excerpt={post.excerpt}
        altThumbnail={post.thumbnailImage.fileName}
        thumbnailUrl={post.thumbnailImage.url}
        title={post.title}
        longTimeRead={post.content}
      />
      <BlogWrapper content={post.content} />
      <BlogComments slug={post.slug} title={post.title} />
    </Container>
  );
}

interface ParamsProps {
  params: {
    slug: [string];
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: QUERY_POSTS,
  });

  const { postsConnection }: PostProps = data;

  const paths = postsConnection.edges.map((edge) => ({
    params: {
      slug: [edge.node.slug],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ParamsProps) {
  // get slug from params
  const slug = params.slug[0];

  const { data } = await client.query({
    query: QUERY_POSTS_DETAIL,
    variables: {
      slug,
    },
  });

  const { post } = data;

  return {
    props: {
      post,
    },
  };
}
