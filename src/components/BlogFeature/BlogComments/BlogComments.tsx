import React from "react";
import styled from "@emotion/styled";
import { DiscussionEmbed } from "disqus-react";

type BlogCommentsProps = {
  title: string;
  slug: string;
};

type DisqusConfig = {
  url: string;
  identifier: string;
  title: string;
};

const CommentsWrapper = styled.div`
  max-width: 100%;
  margin: 40px 0px;

  @media screen and (max-width: 653px) {
    padding: 0 15px;
  }
`;

const BlogComments: React.FC<BlogCommentsProps> = (props) => {
  // your disquss shortname from https://disqus.com/admin/
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;

  const disqusConfig = {
    // your site that was deployed on server in here
    url: `https://rizkyy27.vercel.app/blog/${props.slug}`,
    identifier: props.title,
    title: props.title,
  };

  return (
    <CommentsWrapper>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig as DisqusConfig}
      />
    </CommentsWrapper>
  );
};

export default BlogComments;
