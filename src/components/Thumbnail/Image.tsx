import React from "react";
import Image from "next/image";

type ThumbnailProps = {
  srcUrl: string;
  altText: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ altText, srcUrl }) => {
  return (
    <Image
      src={srcUrl}
      alt={altText}
      width={950}
      height={500}
      objectFit="cover"
      quality={100}
    />
  );
};

export default Thumbnail;
