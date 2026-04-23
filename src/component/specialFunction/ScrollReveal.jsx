import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.2,
    once: false, 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 1.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;