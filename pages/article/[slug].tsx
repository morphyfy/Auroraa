import React from "react";
import { Container } from "@styles/global.styles";
import { DiscussionEmbed } from "disqus-react";
import { useRouter } from "next/router";

type DisqusConfig = {
  url: string;
  identifier: string | any;
  title: string | any;
};

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;

  const Comments = () => {
    // your disquss shortname from https://disqus.com/admin/
    const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;

    const disqusConfig = {
      // your site that was deployed on server in here
      url: `https://rizkyy27.vercel.app/article/${slug}`,
      // identifier: title,
      // title: title,
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

  return (
    <Container>
      <Comments />
    </Container>
  );
}
