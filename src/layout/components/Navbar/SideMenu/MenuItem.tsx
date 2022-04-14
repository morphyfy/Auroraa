import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import NowPlaying from "@components/NowPlaying/NowPlaying";

type SideMenuProps = {
  isOpened: boolean;
};

const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 653px) {
    display: block;
  }
`;

const SideMenus = styled.ul<SideMenuProps>`
  display: flex;
  align-items: center;
  z-index: -1;
  list-style: none;
  font-size: 1.1rem;

  @media screen and (max-width: 653px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    background: #0d121c;
    top: 0;
    right: 0;
    position: fixed;
    transform: ${({ isOpened }) =>
      isOpened ? "translateX(0)" : "translateX(100%)"};
    height: 100vh;
    width: 80%;
    transition: transform 0.3s ease-in-out;
  }
`;

const SideItems = styled.li`
  display: block;
  display: flex;
  margin: 200px 0px;
  padding: 40px;
  flex-direction: column;
`;

const SideItemsWrapper = styled.div`
  margin: 20px 0px;
`;

const LinkItems = styled.a`
  text-decoration: none;
  font-family: "Grotesk", sans-serif;
  font-size: 2rem;
  color: #fff;
`;

const SideMenu: React.FC<SideMenuProps> = ({ isOpened }) => {
  return (
    <Wrapper>
      <SideMenus isOpened={isOpened}>
        <SideItems>
          <SideItemsWrapper>
            <Link href="/">
              <LinkItems>Home</LinkItems>
            </Link>
          </SideItemsWrapper>
          <SideItemsWrapper>
            <Link href="/blog">
              <LinkItems>Blog</LinkItems>
            </Link>
          </SideItemsWrapper>
          <SideItemsWrapper>
            <Link href="/portofolio">
              <LinkItems>Portofolio</LinkItems>
            </Link>
          </SideItemsWrapper>
          <SideItemsWrapper>
            <Link href="/kontak">
              <LinkItems>Kontak</LinkItems>
            </Link>
          </SideItemsWrapper>
        </SideItems>
        <NowPlaying />
      </SideMenus>
    </Wrapper>
  );
};

export default SideMenu;
