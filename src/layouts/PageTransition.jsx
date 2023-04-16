import React from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const transitions = {
    key: location.pathname,
    from: { opacity: 0, transform: "scale(0.5)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.5)" },
    // from: {
    //   opacity: [0,0,0, 1],
    //   scale: [0.25, 0.25, 0.5, 0.5],
    //   x: "25%",
    // },
    // enter: {
    //   opacity: ,
    //   scale: 0.999999,
    //   x: 0,
    // },
    // leave: { opacity: 0, scale: 0, x: "-50%" },
  };

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
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
