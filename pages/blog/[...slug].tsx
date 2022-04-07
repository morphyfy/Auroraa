import React from "react";
import client from "@lib/apollo";
import { Container } from "@styles/global.styles";
import { DiscussionEmbed } from "disqus-react";
import { QUERY_POSTS, QUERY_POSTS_DETAIL } from "@graphql/graphql.query";
import { PostDetailProps, PostProps } from "@interface/@types";
import { BlogSeo } from "@components/MetaData/SEO";
import BlogHeader from "@components/BlogFeature/BlogHeader/BlogHeader";

type DisqusConfig = {
  url: string;
  identifier: string | any;
  title: string | any;
};

export default function Article({ post }: PostDetailProps) {
  // assign to constant
  const postDetail = post;

  const Comments = () => {
    // your disquss shortname from https://disqus.com/admin/
    const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;

    const disqusConfig = {
      // your site that was deployed on server in here
      url: `https://rizkyy27.vercel.app/article/${postDetail.slug}`,
      identifier: postDetail.title,
      title: postDetail.title,
    };

    return (
      <>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig as DisqusConfig}
        />
      </>
    );
  };

  return (
    <Container>
      <BlogSeo
        title={`${post.title} | Developer Blog - Rizkyy😎`}
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
        longtimeRead={5}
      />
      <Comments />
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
  const slug = params.slug[0];

  const { data } = await client.query({
    query: QUERY_POSTS_DETAIL,
    variables: {
      slug,
    },
  });

  const { post } = data as PostDetailProps;

  return {
    props: {
      post,
    },
  };
}
