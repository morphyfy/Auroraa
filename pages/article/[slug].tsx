import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Container } from "@styles/global.styles";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogHeader from "@components/BlogHeader";
import BlogWrapper from "@components/BlogWrapper";
import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-bright.css";

type Params = {
  [param: string]: any;
};

type ArticleProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export default function Article({
  source,
}: ArticleProps): InferGetStaticPropsType<typeof getStaticProps> {
  const {
    scope: { dateString, mainImageUrl, title, excerpt, longtimeRead, altImage },
  } = source;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Container>
      <BlogHeader
        altImage={altImage}
        longtimeRead={longtimeRead}
        excerpt={excerpt}
        title={title}
        dateString={dateString}
        mainImageUrl={mainImageUrl}
      />
      <BlogWrapper>
        <MDXRemote {...source} />
      </BlogWrapper>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articleDirectory = path.join("__articles");
  const articleFiles = fs.readdirSync(articleDirectory);
  const paths = articleFiles.map((fileName: string) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Params> = async ({
  params: { slug },
}: Params) => {
  const articleFile = fs.readFileSync(path.join("__articles", slug + ".mdx"));
  const { data: metaData, content } = matter(articleFile);
  const mdxSource = await serialize(content, { scope: metaData });

  return { props: { source: mdxSource } };
};
