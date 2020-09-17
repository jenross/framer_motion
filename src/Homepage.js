import React from "react";
import Slideshow from "./Slideshow";
import { motion } from "framer-motion";

export const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Homepage</h2>
      <Slideshow />
    </motion.div>
  );
};

export default Homepage;
