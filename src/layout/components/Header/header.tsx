import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { maxWidth } from "@styles/variable.styles";
import { linkHref } from "./constant/constant";

const Nav = styled.nav`
  height: 90px;
  margin: 10px 0px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 65px;
  z-index: 1;
  width: 100%;
  padding: 0 0 15px;
  max-width: ${maxWidth.medium};

  @media screen and (max-width: 653px) {
    padding: 15px;
    height: 80px;
  }
`;

const SideItem = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 653px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  font-family: "IBMSans", sans-serif;
  font-size: 19px;
  padding-left: 40px;
`;

const NavItem = styled.li`
  color: white;
  cursor: pointer;
  list-style: none;
`;

const Headers = () => {
  return (
    <Nav>
      <NavbarContainer>
        <Link href="/">
          <a>
            <Image
              src="/logo.png"
              alt="logo"
              height={55}
              width={50}
              quality={100}
              objectFit="contain"
            />
          </a>
        </Link>
        <SideItem>
          {linkHref.map((item) => (
            <Link href={item.href} key={item.id}>
              <NavLinks>
                <NavItem>{item.name}</NavItem>
              </NavLinks>
            </Link>
          ))}
        </SideItem>
      </NavbarContainer>
    </Nav>
  );
};

export default Headers;
