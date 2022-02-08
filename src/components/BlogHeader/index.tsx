import styled from "@emotion/styled";
import React from "react";
import NextImage from "next/image";
import { maxWidth } from "@styles/variable.styles";
import { MetaData } from "@interface/MetaData";

interface BlogHeaderProps extends MetaData {}

const HeaderBlogWrapper = styled.div`
  width: ${maxWidth.medium};
  max-width: 100%;
  margin: auto;

  @media screen and (max-width: 834px) {
    width: 100%;
    padding: 15px;
  }
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-family: "FacebookReaderB", sans-serif;
  margin: 20px 0px 20px;

  @media screen and (max-width: 280px) {
    font-size: 2rem;
  }
`;

const Excerpt = styled.h2`
  font-size: 1.2rem;
  opacity: 0.8;
  font-family: "FacebookReaderM", sans-serif;
  margin: 0px 0px 40px;
`;

const ImageFigure = styled.figure``;

const Image = styled(NextImage)`
  object-fit: contain !important;
`;

const FigCaptions = styled.figcaption`
  margin: auto;
  font-family: "FacebookReaderM", sans-serif;
  font-size: 15px;
  opacity: 0.8;
  width: ${maxWidth.medium};
  text-align: center;
  max-width: 100%;

  @media screen and (max-width: 834px) {
    width: 100%;
  }

  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;

const AuthorDataContainer = styled.div`
  max-width: 100%;
  width: 350px;
  display: flex;
  margin: 30px 0px 50px;
  align-items: center;
`;

const AuthorImage = styled(NextImage)`
  object-fit: contain !important;
  border-radius: 99px;
`;

const AsideRight = styled.div`
  margin-left: 15px;
`;

const AuthorName = styled.p`
  font-size: 17px;
  margin-bottom: 8px;
  font-family: "FacebookReaderM", sans-serif;
`;

const DateTitle = styled.p`
  font-size: 14px;
  opacity: 0.8;
  font-family: "FacebookReaderM", sans-serif;
`;

const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  return (
    <HeaderBlogWrapper>
      <AuthorDataContainer>
        <AuthorImage
          src="https://avatars.githubusercontent.com/u/77242429?v=4"
          height={50}
          width={50}
          alt="Author"
        />
        <AsideRight>
          <AuthorName>Ioofy.</AuthorName>
          <DateTitle>
            {props.dateString} · {props.longtimeRead} min read
          </DateTitle>
        </AsideRight>
      </AuthorDataContainer>
      <Heading>{props.title}</Heading>
      <Excerpt>{props.excerpt}</Excerpt>
      <ImageFigure>
        <Image
          src={props.mainImageUrl}
          alt={props.altImage}
          height={450}
          width={850}
        />
        <FigCaptions>{props.altImage}</FigCaptions>
      </ImageFigure>
    </HeaderBlogWrapper>
  );
};

export default BlogHeader;
