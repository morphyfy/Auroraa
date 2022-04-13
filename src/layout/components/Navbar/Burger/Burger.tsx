import React, { useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type StateProps = {
  initial?: boolean;
  clicked?: boolean;
  menuName?: string;
};

const animates = keyframes`
  0%, 100%{
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50%{
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
`;

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
    animation: ${animates} 0.6s forwards;
  }
  #hamburger.is-active .__line:nth-of-type(1),
  #hamburger.is-active .__line:nth-of-type(2),
  #hamburger.is-active .__line:nth-of-type(3) {
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  #hamburger.is-active .__line:nth-of-type(2) {
    opacity: 0;
  }
  #hamburger.is-active .__line:nth-of-type(1) {
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }
  #hamburger.is-active .__line:nth-of-type(3) {
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const Hamburger = styled.button`
  outline: none;
  border: none;
  background: transparent;
`;

const Line = styled.span`
  width: 35px;
  height: 2px;
  right: 20px;
  background-color: white;
  display: block;
  margin: 6px;
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
  const [isClass, setClass] = useState(false);

  const handleMenu = () => {
    setClass(!isClass);
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
      <Hamburger id="hamburger">
        <Line className="__line"></Line>
        <Line className="__line"></Line>
        <Line className="__line"></Line>
      </Hamburger>
    </Wrapper>
  );
};

export default Burger;
