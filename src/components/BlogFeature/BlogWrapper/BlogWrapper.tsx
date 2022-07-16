import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { maxWidth } from "@styles/variable.styles";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import Markdown from "markdown-to-jsx";

type WrapperArticleProps = {
  content: string;
};

const WrapperArticle = styled.div`
  width: ${maxWidth.medium};
  max-width: 100%;
  margin: 30px auto;
  // every markup have a margin
  h2,
  h3,
  a,
  p,
  ul,
  ol,
  hr,
  li,
  pre,
  code,
  table,
  thead,
  blockquote,
  tbody,
  tr,
  th,
  td,
  img {
    margin: 25px 0px;
  }
  p {
    code {
      padding: 5px;
      background: #373c49;
      color: #fff;
      border-radius: 2px;
      font-family: "IBMSans", sans-serif;
      font-size: 14px;
      margin: 0 2px;
    }
  }
  p {
    em {
      font-family: "IBMSans", sans-serif;
      font-size: 16px;
      opacity: 1;
      line-height: 1.5;
    }
  }
  pre {
    code {
      font-family: "IBM Plex Mono", monospace;
      font-size: 14px;
      border-radius: 2px;
      .hljs-tag,
      .hljs-function,
      .hljs-params {
        color: #fff;
      }
    }
  }
  blockquote {
    text-align: center;
    p {
      font-family: "Grotesk", sans-serif;
      opacity: 0.9;
      line-height: 1.2em;
    }
  }
  ul {
    list-style-type: square;
    padding: 0px 15px;
    li {
      font-family: "IBMSans", sans-serif;
      font-size: 17px;
    }
  }
  a {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 4px;
    color: #fa8583;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.65rem;
  }
  h3 {
    font-size: 1.35rem;
  }
  h1,
  h2,
  h3 {
    font-family: "IBMSans", sans-serif;
    line-height: 1.3em;
  }
  p {
    font-family: "IBMSans", sans-serif;
    font-size: 18px;
    line-height: 1.7em;

    @media screen and (max-width: 428px) {
      font-size: 16px;
    }
  }

  del {
    font-family: "IBMSans", sans-serif;
  }

  img {
    border-radius: 5px !important;
    display: flex;
    justify-content: center;
    width: ${maxWidth.medium};
    height: auto;
    object-fit: contain;
  }
  em {
    font-family: "IBM Plex Mono", sans-serif;
    font-size: 15px;
    opacity: 0.8;
  }
  @media screen and (max-width: 834px) {
    width: 100%;
    padding: 20px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  @media screen and (max-width: 360px) {
    h2 {
      font-size: 1.35rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    em {
      font-size: 13px;
    }
    blockquote {
      p {
        font-size: 1.5rem !important;
      }
    }
  }
`;

const BlogWrapper: React.FC<WrapperArticleProps> = ({ content }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <WrapperArticle>
      <Markdown>{content}</Markdown>
    </WrapperArticle>
  );
};

export default BlogWrapper;
