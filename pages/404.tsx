import React from "react";
import Thumbnail from "@components/Thumbnail/Image";
import { PageSeo } from "@components/MetaData/SEO";
import { Container } from "@styles/global.styles";

const NotFound = () => {
  return (
    <Container>
      <PageSeo
        title="Oops! Halaman Tidak Ditemukan"
        description="I'm Rizky front-end developer. proficient with JS and CSS Framework"
        key="rizkyy blog, blog, mdx, next.js blog, nextjs blog, graphcms, cms"
      />
      <div className="my-20">
        <Thumbnail
          srcUrl="/404.png"
          altText="Ooopsss... Halaman yang diminta tidak ditemukan"
        />
      </div>
    </Container>
  );
};

export default NotFound;
