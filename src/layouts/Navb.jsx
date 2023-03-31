import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navb = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <main>
        <nav>
          <div className="nav-left">
            <h2 className="nav-title">Name</h2>
          </div>
          <div className="nav-right">
            <motion.ol
              className="nav-list"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>

              <NavLink to="works" className="nav-item">
                My Works
              </NavLink>
              <NavLink to="contact" className="nav-item">
                Contact
              </NavLink>
            </motion.ol>
          </div>
        </nav>

        <Outlet />

        <motion.footer
          className="footer"
          animate={{ translateY: 0 }}
          initial={{ translateY: 100 }}
        >
          &copy; Aditya 2023
        </motion.footer>
      </main>
    </>
  );
};

export default Navb;
