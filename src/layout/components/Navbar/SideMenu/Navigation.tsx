import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { menuItem } from "./constant/constant";
import { ulvariants } from "@animation/animations";

export const Navigation = () => {
  return (
    <motion.ul variants={ulvariants} className="p-6 top-36 w-56 absolute">
      {menuItem.map((i) => (
        <MenuItem name={i.name} key={i.id} href={i.href} />
      ))}
    </motion.ul>
  );
};
