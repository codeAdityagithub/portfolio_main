import React from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Homemain = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am a <span class='home-keyword1'>Coder.</span>",
        "I am an <span class='home-keyword2'>Athlete.</span>",
        "I am a <span class='home-keyword3'>Human.</span>",
        "I am Aditya",
      ],
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 25,

      showCursor: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <motion.div animate={{}}>
      <h2 className="typed">
        <span ref={el} />
      </h2>
    </motion.div>
  );
};

export default Homemain;
