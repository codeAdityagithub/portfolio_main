import React from "react";

import Homemain from "../components/Homemain";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <Homemain />
        </div>
      </div>
    </>
  );
};

export default Home;
