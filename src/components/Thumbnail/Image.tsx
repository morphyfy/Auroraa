import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { maxWidth } from "@styles/variable.styles";

type ThumbnailProps = {
  srcUrl: string;
  altText: string;
};

const ImageFigure = styled.figure`
  max-width: 100%;
`;

const FigCaptions = styled.figcaption`
  margin: 10px auto;
  font-family: "IBMSans", sans-serif;
  font-size: 14px;
  opacity: 0.8;
  width: ${maxWidth.medium};
  text-align: center;

  @media screen and (max-width: 834px) {
    width: 100%;
  }
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;

const ThumbnailImage = styled(Image)`
  object-fit: cover !important;
`;

const Thumbnail: React.FC<ThumbnailProps> = ({ altText, srcUrl }) => {
  return (
    <ImageFigure>
      <ThumbnailImage
        src={srcUrl}
        alt={altText}
        width={950}
        height={550}
        quality={100}
        priority
        placeholder="blur"
        blurDataURL={`/_next/image?url=${srcUrl}&w=16&q=1`}
      />
      <FigCaptions>{altText}</FigCaptions>
    </ImageFigure>
  );
};

export default Thumbnail;
