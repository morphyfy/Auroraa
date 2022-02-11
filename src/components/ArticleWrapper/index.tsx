import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { maxWidth } from "@styles/variable.styles";

type WrapperArticleProps = {
  children: ReactNode;
};

const WrapperArticle = styled.div`
  width: ${maxWidth.medium};
  max-width: 100%;
  margin: auto;

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
      padding: 4px;
      background: #373c49;
      color: #fff;
      border-radius: 2px;
      font-family: "FacebookReaderB", sans-serif;
      font-size: 13px;
      margin: 0 2px;
    }
  }

  p {
    em {
      font-family: "FacebookReaderB", sans-serif;
      font-size: 17px;
      opacity: 1;
      line-height: 1.5;
    }
  }

  pre {
    code {
      font-family: "Fira Code", monospace;
      font-size: 15px;
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
    font-style: italic;

    p {
      font-family: "charter", sans-serif;
      font-weight: bold;
      font-size: 2rem !important;
      opacity: 0.9;
      line-height: 1.2em;
    }
  }

  ul {
    list-style-type: square;
    padding: 0px 15px;
    li {
      font-family: "FacebookReaderB", sans-serif;
      font-size: 18px;
    }
  }

  a {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 4px;
    color: #fa8583;
  }

  h2 {
    font-size: 1.65rem;
  }

  h3 {
    font-size: 1.35rem;
  }

  h2,
  h3 {
    font-family: "FacebookReaderB", sans-serif;
    line-height: 1.3em;
  }

  p {
    font-family: "FacebookReaderM", sans-serif;
    font-size: 18px;
    line-height: 1.6em;
  }

  img {
    border-radius: 5px !important;
    display: flex;
    justify-content: center;
    width: ${maxWidth.medium};
    height: 500px;
    margin: 0px auto 5px;
    object-fit: cover;
  }

  em {
    font-family: "charter", sans-serif;
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

    p {
      font-size: 15px;
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

const ArticleWrapper: React.FC<WrapperArticleProps> = ({ children }) => {
  return <WrapperArticle>{children}</WrapperArticle>;
};

export default ArticleWrapper;
