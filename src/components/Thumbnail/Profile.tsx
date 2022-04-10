import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type ThumbnailProps = {
  srcUrl: string;
  altText: string;
};

const ProfileWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 653px) {
    padding: 15px !important;
  }
`;

const ProfileImage = styled(Image)`
  object-fit: cover !important;
  border-radius: 999px;
`;

const Profile: React.FC<ThumbnailProps> = ({ altText, srcUrl }) => {
  return (
    <ProfileWrapper>
      <ProfileImage
        src={srcUrl}
        alt={altText}
        width={120}
        height={120}
        quality={100}
        priority
        placeholder="blur"
        blurDataURL={`/_next/image?url=${srcUrl}&w=16&q=1`}
      />
    </ProfileWrapper>
  );
};

export default Profile;
