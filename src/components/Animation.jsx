import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const headings = [
  "Case Study 1",
  "Case Study 2",
  "Case Study 3"
];

const Animation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(headings[currentIndex].split(''));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000); // Change sentence every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentSentence(headings[currentIndex].split(''));
  }, [currentIndex]);

  const letterVariant = {
    hidden: { opacity: 0, x: -50 }, // Letters enter from lef
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Delay each letter's appearance
        duration: 0.3,
      }
    }),
    exit: {
      opacity: 0,
      x: -50, // Letters exit to the left
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center">
        <AnimatePresence mode="wait"> {/* Updated mode to 'wait' */}
          <motion.div
            key={currentIndex}
            className="inline-flex space-x-1"
          >
            {currentSentence.map((letter, index) => (
              <motion.span
                key={index}
                className="text-4xl font-bold text-gray-800"
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Animation;
