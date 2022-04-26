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
        title={`${post.title} | Blog Tulisan`}
        url={`https://rizkyy.space/article/${post.slug}`}
        description={post.title}
        date={post.createdAt}
      />
      <BlogHeader
        title={post.title}
        excerpt={post.excerpt}
        dateString={post.createdAt}
        authorName={post.author.name}
        authorUrl={post.author.photo.url}
        longTimeReadContent={post.content}
        thumbnailUrl={post.thumbnailImage.url}
        altThumbnail={post.thumbnailImage.fileName}
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
