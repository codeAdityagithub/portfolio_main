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
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitions.key}
        initial={transitions.from}
        animate={transitions.enter}
        exit={transitions.leave}
        className="super"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
