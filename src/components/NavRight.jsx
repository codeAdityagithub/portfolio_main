import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const navContainerVar = {
  open: {
    x: 0,
  },
  closed: {
    x: "100%",
  },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavRight = () => {
  const [expand, toggleExpand] = useCycle(false, true);
  const navExpand = () => {
    toggleExpand();
  };

  return (
    <>
      <motion.div className="nav-side-toggle">
        <button onClick={navExpand} className="btn btn-primary">
          <HamburgerIcon className="nav-toggle-icon" />
        </button>
      </motion.div>
      <motion.nav
        variants={navContainerVar}
        initial={"closed"}
        animate={expand ? "open" : "closed"}
        className="nav-side"
      >
        <motion.div className="nav-side-exit">
          <button onClick={navExpand} className="btn btn-primary">
            <CloseIcon className="nav-exit-icon" />
          </button>
        </motion.div>
        <motion.ol
          className="nav-list-vertical"
          animate={{
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          }}
        >
          <motion.div
            variants={itemVariants}
            initial="closed"
            animate="open"
            onClick={navExpand}
          >
            <NavLink to="/portfolio_main" className="nav-item-vertical">
              Home
            </NavLink>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="closed"
            animate="open"
            onClick={navExpand}
          >
            <NavLink to="works" className="nav-item-vertical">
              My Works
            </NavLink>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="closed"
            animate="open"
            onClick={navExpand}
          >
            <NavLink to="contact" className="nav-item-vertical">
              Contact
            </NavLink>
          </motion.div>
        </motion.ol>
      </motion.nav>
    </>
  );
};

export default NavRight;
