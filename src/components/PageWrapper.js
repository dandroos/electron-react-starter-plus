import React from "react";
import { motion } from "framer-motion";
import { Container } from "@material-ui/core";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Container maxWidth="md">{children}</Container>
    </motion.div>
  );
};

export default PageWrapper;
