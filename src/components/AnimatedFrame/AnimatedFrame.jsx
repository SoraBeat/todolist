import React from "react";
import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -0 },
};

const AnimatedFrame = (props) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedFrame;
