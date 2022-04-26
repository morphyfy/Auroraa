import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumbnail from "@components/Thumbnail/Image";
import { parseDate } from "@utils/parseDate";
import { readTime } from "@utils/readTime";
import { maxWidth } from "@styles/variable.styles";

const HeaderArticleWrapper = styled.div`
  width: ${maxWidth.medium};
  max-width: 100%;
  margin: auto;

  @media screen and (max-width: 834px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  font-family: "Grotesk", sans-serif;
  margin: 20px 0px 20px;

  @media screen and (max-width: 280px) {
    font-size: 1.5rem;
  }
`;

const Excerpt = styled.h2`
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.5;
  font-family: "IBMSans", sans-serif;
  margin: 0px 0px 40px;

  @media screen and (max-width: 428px) {
    font-size: 16px;
  }
`;

const AuthorDataContainer = styled.div`
  max-width: 100%;
  width: 350px;
  display: flex;
  margin: 40px 0px;
  align-items: center;
`;

const AuthorImage = styled(Image)`
  object-fit: cover !important;
  border-radius: 99px;
`;

const AsideRight = styled.div`
  margin-left: 15px;
  a {
    text-decoration: none;
  }
`;

const AuthorName = styled.p`
  font-size: 17px;
  margin-bottom: 2px;
  font-family: "IBMSans", sans-serif;
`;

const DateTitle = styled.p`
  font-size: 14px;
  opacity: 0.8;
  font-family: "IBMSans", sans-serif;
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;

type GrayMaterProps = {
  title: string;
  excerpt: string;
  authorUrl: string;
  dateString: string;
  authorName: string;
  longTimeReadContent: string;
  thumbnailUrl: string;
  altThumbnail: string;
};

const BlogHeader: React.FC<GrayMaterProps> = (props) => {
  return (
    <HeaderArticleWrapper>
      <AuthorDataContainer>
        <AuthorImage
          src={props.authorUrl}
          height={50}
          width={50}
          alt="Author"
        />
        <AsideRight>
          <Link href={`/`} passHref>
            <a target="_blank">
              <AuthorName id="author">{props.authorName}</AuthorName>
            </a>
          </Link>
          <DateTitle>
            {parseDate(props.dateString)} • 👁️{" "}
            {readTime(props.longTimeReadContent)}
            min read
          </DateTitle>
        </AsideRight>
      </AuthorDataContainer>
      <Heading>{props.title}</Heading>
      <Excerpt>{props.excerpt}</Excerpt>
      <Thumbnail srcUrl={props.thumbnailUrl} altText={props.altThumbnail} />
    </HeaderArticleWrapper>
  );
};

export default BlogHeader;
