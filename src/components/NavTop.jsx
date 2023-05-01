import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavTop = () => {
  return (
    <nav>
      <div className="nav-left">
        <h2 className="nav-title">Name</h2>
      </div>
      <div className="nav-top">
        <motion.ol
          className="nav-list"
          animate={{
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          }}
        >
          <motion.div variants={itemVariants} initial="closed" animate="open">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </motion.div>

          <motion.div variants={itemVariants} initial="closed" animate="open">
            <NavLink to="works" className="nav-item">
              My Works
            </NavLink>
          </motion.div>

          <motion.div variants={itemVariants} initial="closed" animate="open">
            <NavLink to="contact" className="nav-item">
              Contact
            </NavLink>
          </motion.div>
        </motion.ol>
      </div>
    </nav>
  );
};

export default NavTop;
