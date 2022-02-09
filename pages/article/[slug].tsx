import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Container } from "@styles/global.styles";
import { DiscussionEmbed } from "disqus-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleHeader from "@components/ArticleHeader";
import ArticleWrapper from "@components/ArticleWrapper";
import convertToTitle from "@utils/slugToTitle";
import hljs from "highlight.js";
import SEO from "@components/MetaData/SEO";
import "highlight.js/styles/stackoverflow-dark.css";

type Params = {
  [param: string]: any;
};

type ArticleProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

type DisqusConfig = {
  url: string;
  identifier: string | unknown | any;
  title: string | unknown | any;
};

export default function Article({
  source,
}: ArticleProps): InferGetStaticPropsType<typeof getStaticProps> {
  const {
    scope: { dateString, mainImageUrl, title, excerpt, longtimeRead, altImage },
  } = source;

  const Comments = () => {
    // your disquss shortname from https://disqus.com/admin/
    const disqusShortname = "rizkyy27";

    const disqusConfig = {
      url: `http://localhost:3000/article/${title}`,
      identifier: title,
      title: title,
    };

    return (
      <div>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig as DisqusConfig}
        />
      </div>
    );
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Container>
      <SEO title={convertToTitle(title)} />
      <ArticleHeader
        altImage={altImage}
        longtimeRead={longtimeRead}
        excerpt={excerpt}
        title={title}
        dateString={dateString}
        mainImageUrl={mainImageUrl}
      />
      <ArticleWrapper>
        <MDXRemote {...source} />
        <Comments />
      </ArticleWrapper>
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
