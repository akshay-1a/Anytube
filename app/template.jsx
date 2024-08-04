'use client';

import Image from 'next/image';
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const transitionVariants = {
  initial: {
    scale: "0",
    y: "0",
  },
  animate: {
    scale: "100",
    y: "200",
  },
  exit:{
    scale: ["0","100"],
    y: "200",
  }
};


export default function Template({children}) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed top-0 w-screen h-screen z-50 bg-black/90"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ duration: 2.5 }}
        >
          <div className="flex flex-col justify-center items-center h-screen">
            <motion.img
              initial={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 0,
                x: -800,
                y: -340,
                rotate: 720,
                transitionEnd: {
                  display: "none",
                },
              }}
              transition={{ duration: 0.5, ease: "linear" }}
              src="/anytube.png"
              height={400}
              width={400}
              className="relative h-[500px] w-full object-contain"
            />
            <motion.h2
              initial={{ y: 400, scale: 10 }}
              animate={{
                y: -200,
                scale: 4,
                transitionEnd: {
                  y: -4,
                  display: "none",
                },
              }}
              transition={{ duration: 1.4, ease: "circInOut" }}
              className="relative grad text-6xl uppercase font-calistoga bg-black"
            >
              {" "}
              Anytube
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>
      {children}
    </>
  );
}
