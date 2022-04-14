/* eslint-disable react/prop-types */
import React from "react";
import { maxWidth } from "@styles/variable.styles";
import { menuItem } from "./constant/constant";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import Burger from "./Burger/Burger";

const Navbar = () => {
  // styling
  const Nav = styled.nav`
    height: 75px;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 20;
    transition: all 0.2s ease-in-out;
  `;

  const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 55px;
    z-index: 1;
    width: 100%;
    max-width: ${maxWidth.medium};

    @media screen and (max-width: 653px) {
      padding: 15px;
      height: 85px;
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
    cursor: pointer;
    list-style: none;
  `;

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
          {menuItem.map(({ href, id, name }) => (
            <Link href={href} key={id}>
              <NavLinks>
                <NavItem>{name}</NavItem>
              </NavLinks>
            </Link>
          ))}
        </SideItem>
      </NavbarContainer>
      <Burger />
    </Nav>
  );
};

export default Navbar;
