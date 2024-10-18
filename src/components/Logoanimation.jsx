import React from 'react';
import { motion } from 'framer-motion';
import logo from "./logo.png";
const LogoAnimation = () => {
  const treeVariant = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const bookVariant = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.5 }
    }
  };

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 1 }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={treeVariant}
      >
        <motion.img
          src={logo} // Using require for the image
          alt="Asmi Veda Logo"
          className="w-80 h-auto"
          initial="hidden"
          animate="visible"
          variants={treeVariant}
        />
      </motion.div>

      <motion.div className="mt-6" initial="hidden" animate="visible" variants={bookVariant}>
        <motion.div className="text-4xl font-bold text-gray-800" initial="hidden" animate="visible" variants={textVariant}>
          <span className="text-green-500">asmi</span> <span className="text-orange-500">वेद</span>
        </motion.div>

        <motion.div className="text-lg text-gray-600 mt-2" initial="hidden" animate="visible" variants={textVariant} transition={{ delay: 1.5 }}>
          विद्या प्रशिक्षणम्
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
