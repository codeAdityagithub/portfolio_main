import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const transitions = {
    key: location.pathname,
    from: { opacity: 0, transform: "scale(0.5)" },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: { opacity: 0, transform: "scale(0.5)" },
  };

  // useEffect(() => {
  //   const sup = document.querySelector(".super");
  //   const setPos = () => {
  //     let scroll = Math.floor(sup.scrollTop / 10);
  //     sup.style.backgroundPosition = `0px ${-scroll}px`;
  //     console.log("h");
  //   };
  //   sup.addEventListener("scroll", setPos);

  //   return () => sup.removeEventListener("scroll", setPos);
  // }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={transitions.key}
        initial="from"
        animate="enter"
        exit="leave"
        variants={transitions}
        className="super"
      >
        <img src="images/bgmain.svg" alt="" className="bgmain" />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
