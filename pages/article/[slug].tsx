import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Container } from "@styles/global.styles";
import { DiscussionEmbed } from "disqus-react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleHeader from "@components/ArticleHeader";
import ArticleWrapper from "@components/ArticleWrapper";
import hljs from "highlight.js";
import SEO from "@components/MetaData/SEO";
import Sidebar from "@layout/components/Sidebar/sidebar";
import "highlight.js/styles/stackoverflow-dark.css";
import Footer from "@layout/components/Footer/footer";
import Header from "@layout/components/Header/header";
import { convertSlug } from "@utils/slugToText";

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

  const router = useRouter();
  const { slug } = router.query;

  const Comments = () => {
    // your disquss shortname from https://disqus.com/admin/
    const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;

    const disqusConfig = {
      // your site that was deployed on server in here
      url: `https://rizkyy27.vercel.app/article/${slug}`,
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
      <Header classes="nav-hidden" />
      <Sidebar />
      <SEO title={title as string} content={convertSlug(slug as string)} />
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
      <Footer />
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
