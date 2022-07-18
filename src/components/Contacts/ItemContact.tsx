import { FiGithub, FiAtSign, FiFacebook } from "react-icons/fi";
import { AiOutlineBehance } from "react-icons/ai";
import cn from "classnames";
import { JSXElementConstructor, ReactElement } from "react";

type ElementIcon = ReactElement<
  SVGElement,
  string | JSXElementConstructor<any>
>;

type ItemContactProps = {
  className?: React.ReactNode;
  href: string;
  title: string;
  icon?: ElementIcon;
};

export const ItemContact: ItemContactProps[] = [
  {
    href: "https://www.facebook.com/rizukyy27/",
    title: "Facebook",
    icon: <FiFacebook size={19} />,
    className: cn(`bg-sky-500`),
  },
  {
    href: "https://github.com/ioofy",
    title: "Github",
    icon: <FiGithub size={19} />,
    className: cn(`bg-[#15B891]`),
  },
  {
    href: "https://behance.net/rizukyy27",
    title: "Behance",
    icon: <AiOutlineBehance size={23} />,
    className: cn(`bg-[#1A75E8]`),
  },
  {
    href: "mailto:mrizkyy027@gmail.com",
    title: "Email",
    icon: <FiAtSign size={19} />,
    className: cn(`bg-[#863892]`),
  },
];
