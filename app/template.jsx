"use client"

import useScrollProgress from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 }
};

function ScrollBar({ children }) {
  const progress = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      {/* Vertical progress bar */}
      <span
        className="fixed z-50 bg-primary w-1 top-0 right-0"
        style={{ height: `${progress * 100}%`, transition: "height 0.2s ease-out" }}
      ></span>

      {/* Temporary scroll space for testing */}
      {/* <div className="h-[3000px]"></div> */}
    </>
  );
}

export default ScrollBar;
