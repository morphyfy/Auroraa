/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { maxWidth } from "@styles/variable.styles";
import { menuItem } from "./constant/constant";
import { useTheme } from "@emotion/react";
import { ThemeStylesProps } from "@interface/@types";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import Burger from "./Burger/Burger";

type NavbarProps = {
  isScroll: boolean;
};

const Navbar = () => {
  const theme = useTheme() as ThemeStylesProps;
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    changeBgNav();
    window.addEventListener("scroll", changeBgNav);
    return () => {
      window.removeEventListener("scroll", changeBgNav);
    };
  }, []);

  const changeBgNav = () => {
    if (window.scrollY >= 90) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  // styling
  const Nav = styled.nav<NavbarProps>`
    height: 75px;
    margin: 10px 0px;
    display: flex;
    box-shadow: ${(props) =>
      props.isScroll ? "1px 2px 18px rgb(0 0 0 / 10%)" : "none"};
    background: ${(props) => (props.isScroll ? theme.navBg : "transparent")};
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
    <Nav isScroll={isScroll}>
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
      </NavbarContainer>
      <SideItem>
        {menuItem.map(({ href, id, name }) => (
          <Link href={href} key={id}>
            <NavLinks>
              <NavItem>{name}</NavItem>
            </NavLinks>
          </Link>
        ))}
      </SideItem>
      <Burger />
    </Nav>
  );
};

export default Navbar;
