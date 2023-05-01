import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import NavRight from "../components/NavRight";
import NavTop from "../components/NavTop";

const navVariants = {
  open: {
    height: "200px",
  },
  closed: {
    height: "80px",
  },
};

const Navb = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <>
      {windowWidth > 600 ? <NavTop /> : <NavRight />}

      <main>
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
