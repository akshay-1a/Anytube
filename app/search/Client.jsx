'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Client() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="bg-black text-white w-full flex justify-center items-center p-5 text-center"
    >
      Find your favourite TV Shows and Movies here!
    </motion.div>
  );
}
