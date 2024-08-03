'use client';

import Image from 'next/image';
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const transitionVariants = {
  initial: {
    scale: "100%",
  },
  animate: {
    scale: "0%",
  },
  exit: {
    scale: ["0%", "100%"],
  },
};


export default function template({children}) {
  return (
    <main>
      <AnimatePresence>
        <motion.div
          className="fixed top-0 w-screen h-screen z-50 bg-black"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src="/anytube.png"
            height={400}
            width={400}
            className="relative h-full w-full object-contain "
          />
        </motion.div>
      {children}
      </AnimatePresence>
    </main>
  );
}
