import React from "react";
import { useCycle, motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { Burger } from "../Burger/Burger";
import { css } from "@emotion/css";
import { sidemenu } from "@animation/animations";
import NowPlaying from "@components/NowPlaying/NowPlaying";
import cn from "classnames";

const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="sticky top-0 z-40">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="hidden sm:block relative"
      >
        <motion.div
          className={cn(
            "absolute top-0 left-0 bottom-0",
            css`
              width: 100%;
              height: 100vh;
              background: #0d121c;
            `,
          )}
          variants={sidemenu}
        >
          <div className="absolute bottom-0 mb-7">
            <NowPlaying />
          </div>
        </motion.div>
        <Navigation />
        <Burger toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default SideMenu;
