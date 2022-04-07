import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { maxWidth } from "@styles/variable.styles";

type ThumbnailProps = {
  srcUrl: string;
  altText: string;
};

const ImageFigure = styled.figure``;

const FigCaptions = styled.figcaption`
  margin: 10px auto;
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

const Thumbnail: React.FC<ThumbnailProps> = ({ altText, srcUrl }) => {
  return (
    <ImageFigure>
      <Image
        src={srcUrl}
        alt={altText}
        width={950}
        height={500}
        objectFit="cover"
        quality={100}
      />
      <FigCaptions>{altText}</FigCaptions>
    </ImageFigure>
  );
};

export default Thumbnail;
