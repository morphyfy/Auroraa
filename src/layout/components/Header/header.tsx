import React from "react";

type HeaderProps = {
  classes?: string;
};

const Header = (props: HeaderProps) => {
  return <div className={props.classes}>Header</div>;
};

export default Header;
