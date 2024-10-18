"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "./logo.png";

// Variants for animation
const letterVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.4 },
  },
};

const logoVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const Landingpage = () => {
  const sentences = ["Real life case studies", "40 Hours of industry training"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(sentences[currentIndex].split(""));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentSentence(sentences[currentIndex].split(""));
  }, [currentIndex]);

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-[#F3E5AB] via-[#EEDC82] to-[#DBC19B] px-4 lg:px-8">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left py-12 lg:py-24 space-y-6 lg:space-y-12">
        {["Boost your career", "With asmiVeda's"].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#40A720] leading-tight">
              {item}
            </h1>
          </motion.div>
        ))}

        <div id="hero">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} className="inline-flex space-x-1 flex-wrap">
              {currentSentence.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF9800] tracking-tight word-spacing-custom"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Logo Section */}
      <motion.div
        id="LOGO"
        className="flex justify-center items-center w-full lg:w-1/2 lg:justify-end lg:pr-8"
        variants={logoVariant}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={logo}
          alt="Asmiveda logo"
          width={200}
          height={200}
          className="w-3/4 max-w-sm lg:w-96 lg:h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Landingpage;
