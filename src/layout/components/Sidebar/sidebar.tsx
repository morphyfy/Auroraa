import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import * as BoxIcons from "react-icons/bi";
import NextImage from "next/image";
import Header from "../Header/header";
import { data as sidebarData } from "./constant";

const ContentMain = styled.div`
  .nav-hidden {
    display: none;
  }

  @media screen and (max-width: 912px) {
    .nav-hidden {
      display: block;
    }
  }
`;

const SidebarWrapper = styled.div`
  margin-top: -20px;
  display: -webkit-box;
  margin-left: -200px;
  border-right: 1px solid rgb(202, 198, 198);
  width: 170px;
  height: 100%;
  position: fixed;

  @media screen and (max-width: 1118px) {
    margin-left: -95px;
  }

  @media screen and (max-width: 991px) {
    margin-left: -75px;
    margin-top: -50px;
  }

  @media screen and (max-width: 912px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  position: relative;
  margin: auto;
`;

const SidebarContent = styled.div`
  max-width: 100%;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;

  a {
    text-decoration: none;
  }

  hr {
    margin: 30px 0px;
    opacity: 0.5;
  }
`;

const SidebarMenuItem = styled.li`
  padding: 20px;

  svg {
    opacity: 0.7;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  left: 50%;
  top: 25px;
`;

const Logo = styled(NextImage)`
  object-fit: cover !important;
`;

const Sidebar = () => {
  return (
    <ContentMain>
      <Header classes="nav-hidden" />
      <SidebarWrapper>
        <LogoWrapper>
          <Logo
            src="/image/logo.png"
            height={70}
            width={70}
            alt="Logo"
            layout="intrinsic"
          />
        </LogoWrapper>
        <SidebarContainer>
          <SidebarContent>
            <SidebarMenu>
              {sidebarData.map((item) => {
                return (
                  <Link href={item.href} key={item.id}>
                    <a>
                      <SidebarMenuItem>
                        {item.icon === "home" ? (
                          <BoxIcons.BiHome size={25} />
                        ) : item.icon === "contact" ? (
                          <BoxIcons.BiMailSend size={25} />
                        ) : (
                          <BoxIcons.BiCoffee size={25} />
                        )}
                      </SidebarMenuItem>
                    </a>
                  </Link>
                );
              })}
              <div style={{ width: "25px", left: "30%", position: "relative" }}>
                <hr />
              </div>
              <Link href="/chat">
                <a>
                  <SidebarMenuItem>
                    <BoxIcons.BiCommentDots size={25} />
                  </SidebarMenuItem>
                </a>
              </Link>
            </SidebarMenu>
          </SidebarContent>
        </SidebarContainer>
      </SidebarWrapper>
    </ContentMain>
  );
};

export default Sidebar;
