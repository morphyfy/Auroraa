import React from "react";
import styled from "@emotion/styled";

const CommentsWrapper = styled.div`
  max-width: 100%;
  margin: 40px 0px;

  @media screen and (max-width: 653px) {
    padding: 0 15px;
  }
`;

const BlogComments = () => {
  return <CommentsWrapper></CommentsWrapper>;
};

export default BlogComments;
