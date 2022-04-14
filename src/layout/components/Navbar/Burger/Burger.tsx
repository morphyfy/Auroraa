import React, { useState } from "react";
import styled from "@emotion/styled";
import SideMenu from "../SideMenu/MenuItem";

type StateProps = {
  initial?: boolean;
  clicked?: boolean;
  menuName?: string;
};

type LineProps = {
  isActive: boolean;
};

const Wrapper = styled.div`
  margin-right: 14px;
  display: none;
  z-index: 2;

  #hamburger {
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  #hamburger.is-active {
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  #hamburger.is-active .__line:nth-of-type(2) {
    width: 0px;
  }

  #hamburger.is-active .__line:nth-of-type(1),
  #hamburger.is-active .__line:nth-of-type(3) {
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  #hamburger.is-active .__line:nth-of-type(1) {
    -webkit-transform: translateY(13px);
    -ms-transform: translateY(13px);
    -o-transform: translateY(13px);
    transform: translateY(13px);
  }
  #hamburger.is-active .__line:nth-of-type(3) {
    -webkit-transform: translateY(-13px) rotate(90deg);
    -ms-transform: translateY(-13px) rotate(90deg);
    -o-transform: translateY(-13px) rotate(90deg);
    transform: translateY(-13px) rotate(90deg);
    margin-top: 13px;
  }
  @media screen and (max-width: 653px) {
    display: block;
  }
`;

const Hamburger = styled.button`
  outline: none;
  border: none;
  background: transparent;
`;

const Line = styled.span<LineProps>`
  width: 35px;
  height: 2px;
  right: 20px;
  background-color: #1bd6ca;
  display: block;
  margin: ${({ isActive }) => (isActive ? "10px" : "8px")};
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;

const Burger = () => {
  const [state, setState] = useState<StateProps>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    disableMenu();

    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);

    setTimeout(() => {
      setDisabled(false);
    }, 1300);
  };

  return (
    <Wrapper>
      <Hamburger
        id="hamburger"
        disabled={disabled}
        className={isOpen ? `is-active` : `not-active`}
        onClick={handleMenu}
        type="button"
      >
        <Line className="__line" isActive={isOpen}></Line>
        <Line className="__line" isActive={isOpen}></Line>
        <Line className="__line" isActive={isOpen}></Line>
      </Hamburger>
      <SideMenu isOpened={isOpen} />
    </Wrapper>
  );
};

export default Burger;
