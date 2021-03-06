import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { livariants } from "@animation/animations";

type MenuItemProps = {
  name: string;
  href: string | any;
};

export const MenuItem: React.FC<MenuItemProps> = ({ name, href }) => {
  return (
    <motion.li
      variants={livariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="hidden py-5 px-1 font-serif text-4xl sm:block"
    >
      <Link href={href}>
        <a className="text-white no-underline">{name}</a>
      </Link>
    </motion.li>
  );
};
