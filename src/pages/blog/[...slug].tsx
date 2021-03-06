import React from "react";
import client from "@lib/apollo";
import BlogHeader from "@components/BlogFeature/BlogHeader/BlogHeader";
import BlogWrapper from "@components/BlogFeature/BlogWrapper/BlogWrapper";
import { Container } from "@styles/global.styles";
import { QUERY_POSTS, QUERY_POSTS_DETAIL } from "@graphql/graphql.query";
import { PostDetailType, PostType } from "@interface/data";
import { BlogSeo } from "@components/MetaData/SEO";
import { z } from "zod";

type PostDetailProps = z.infer<typeof PostDetailType>;
type PostProps = z.infer<typeof PostType>;

interface ParamsProps {
  params: {
    slug: [string];
  };
}

export default function Article({ post }: PostDetailProps) {
  return (
    <Container>
      <BlogSeo
        title={`${post.title} | Blog Tulisan✍️`}
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
    </Container>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query<PostProps>({
    query: QUERY_POSTS,
  });

  const { edges } = data.postsConnection || {};

  const paths = edges.map(({ node }) => ({
    params: {
      slug: [node.slug],
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

  const { data } = await client.query<PostDetailProps>({
    query: QUERY_POSTS_DETAIL,
    variables: {
      slug,
    },
  });

  const { post } = data || {};

  return {
    props: {
      post: post,
    },
  };
}
