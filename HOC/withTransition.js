import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, scaleY: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.3}}
      />
    </>
  );
};

export default withTransition;