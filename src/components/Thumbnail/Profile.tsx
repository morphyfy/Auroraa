import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type ThumbnailProps = {
  srcUrl: string;
  altText: string;
};

const ProfileWrapper = styled.div`
  width: 100%;
  margin: 50px 0px 0px;

  @media screen and (max-width: 653px) {
    padding: 15px !important;
  }
`;

const ProfileImage = styled(Image)`
  object-fit: cover !important;
  border-radius: 999px;
`;

const ProfileName = styled.p`
  font-size: 20px;
  font-family: "IBMSans", sans-serif;
  margin: 20px 0px 5px;

  @media screen and (max-width: 653px) {
    font-size: 18px;
  }
`;

const ProfileCareer = styled.p`
  font-size: 19px;
  font-family: "IBMSans", sans-serif;
  opacity: 0.8;

  @media screen and (max-width: 653px) {
    font-size: 18px;
  }
`;

const Profile: React.FC<ThumbnailProps> = ({ altText, srcUrl }) => {
  return (
    <ProfileWrapper>
      <ProfileImage
        src={srcUrl}
        alt={altText}
        width={150}
        height={150}
        quality={100}
        priority
        placeholder="blur"
        blurDataURL={`/_next/image?url=${srcUrl}&w=16&q=1`}
      />
      <ProfileName>Muhamad Rizky</ProfileName>
      <ProfileCareer>— Front End Dev</ProfileCareer>
    </ProfileWrapper>
  );
};

export default Profile;
