import React from "react";
import { motion } from "framer-motion";

const Spin = ({ children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: "Infinity", ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Spin;
