import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { css } from "@emotion/css";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#faf9f9"
    strokeLinecap="round"
    {...props}
  />
);

export const Burger = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className={cn(
      "outline-none border-none bg-transparent cursor-pointer absolute hidden sm:block",
      css`
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        top: 18px;
        left: 15px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      `,
    )}
    type="button"
  >
    <svg width="27" height="27" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
