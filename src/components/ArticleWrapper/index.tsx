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
  li,
  pre,
  code,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  img {
    margin: 40px 0px;
  }

  code {
    font-family: "Fira Code";
    font-size: 14px;
  }

  a {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 4px;
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
    font-size: 17px;
    line-height: 1.6em;
  }

  img {
    display: flex;
    justify-content: center;
    width: ${maxWidth.medium};
    height: 500px;
    margin: 0px auto 10px;
    object-fit: contain;
  }

  em {
    font-family: "FacebookReaderM", sans-serif;
    font-size: 15px;
    font-style: normal;
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
  }
`;

const ArticleWrapper: React.FC<WrapperArticleProps> = ({ children }) => {
  return <WrapperArticle>{children}</WrapperArticle>;
};

export default ArticleWrapper;
