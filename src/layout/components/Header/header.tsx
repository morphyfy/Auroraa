import React from "react";

type HeaderProps = {
  classes?: string | any;
};

const Header = (props: HeaderProps) => {
  return <div className={props.classes}>Header</div>;
};

export default Header;
