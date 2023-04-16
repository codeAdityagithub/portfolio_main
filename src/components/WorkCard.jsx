import { useState } from "react";
import { motion } from "framer-motion";

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const cardVariants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Image({ src }) {
  return (
    <motion.div
      className="workimgdiv"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <img src={src} alt="" className="workimg" />
    </motion.div>
  );
}

const WorkCard = (props) => {
  const redir = () => {
    if (props.active) {
      window.open(`${props.href}`, "_blank");
    }
  };

  return (
    <motion.div className="work-card">
      <motion.div
        className="splash"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      ></motion.div>
      <Image src={props.href}></Image>
    </motion.div>
  );
};

export default WorkCard;
