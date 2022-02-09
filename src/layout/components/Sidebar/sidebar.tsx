import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import * as BoxIcons from "react-icons/bi";

const SidebarWrapper = styled.div`
  margin-top: -15px;
  display: -webkit-box;
  margin-left: -200px;
  border-right: 1px solid rgb(202, 198, 198);
  width: 200px;
  height: 100%;
  position: fixed;

  @media screen and (max-width: 1118px) {
    margin-left: -95px;
  }

  @media screen and (max-width: 991px) {
    margin-left: -80px;
    margin-top: -30px;
  }

  @media screen and (max-width: 834px) {
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

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <h1>Ioofy.</h1>
      </LogoWrapper>
      <SidebarContainer>
        <SidebarContent>
          <SidebarMenu>
            <Link href="/">
              <a>
                <SidebarMenuItem>
                  <BoxIcons.BiHome size={25} />
                </SidebarMenuItem>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <SidebarMenuItem>
                  <BoxIcons.BiMailSend size={25} />
                </SidebarMenuItem>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <SidebarMenuItem>
                  <BoxIcons.BiCoffee size={25} />
                </SidebarMenuItem>
              </a>
            </Link>
            <div style={{ width: "25px", left: "29%", position: "relative" }}>
              <hr />
            </div>
            <Link href="/about">
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
  );
};

export default Sidebar;
