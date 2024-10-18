"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/logo.png";

// Animation variants for letter animations
const letterVariant = {
  hidden: { opacity: 0, y: -50 },
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
    y: -50,
    transition: { duration: 0.3 },
  },
};

// Animation for the logo section
const logoVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
};

// Landing Page Component
const Landingpage = ({
  courseTitle = "Premium Course",
  courseSummary = "This is an exclusive course designed to boost your skills with real-life case studies and 40 hours of industry expertise.",
}) => {
  const sentences = ["Shaping tomorrow's psychologists, today"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(sentences[0]?.split("") || []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, );

  useEffect(() => {
    setCurrentSentence(sentences[currentIndex]?.split("") || []);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F4] to-[#F4ECE4] flex flex-col justify-center items-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-24">
      {/* Hero Section */}
      <div className="w-full pt-10 flex flex-col md:flex-row justify-between items-center font-semibold">
        {/* Left Side - Course Summary */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10 space-y-6 w-full md:w-1/2">
          {/* Course Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#2D6A4F] font-bold tracking-wide">
              {courseTitle}
            </h1>
          </motion.div>

          {/* Course Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3E2723] max-w-full lg:max-w-2xl leading-relaxed px-2 sm:px-4 md:px-0"
          >
            {courseSummary}
          </motion.p>

          {/* Animated Sentence */}
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B7934C] mt-4 font-semibold">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} className="inline-flex space-x-1">
                {currentSentence.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B7934C] font-bold"
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

        {/* Right Side - Elegant Logo and Background Design */}
        <motion.div
          className="flex justify-center items-center mt-10 md:mt-0 w-full md:w-1/2 relative"
          variants={logoVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Elegant background decorations */}
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Adding luxurious shapes and textures */}
            <div className="absolute top-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] bg-gradient-to-b from-[#B7934C] to-transparent rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute bottom-0 w-[120px] sm:w-[170px] md:w-[220px] lg:w-[250px] h-[120px] sm:h-[170px] md:h-[220px] lg:h-[250px] bg-gradient-to-b from-[#EADAB3] to-transparent rounded-full opacity-20 blur-3xl"></div>
          </div>

          {/* Logo Container */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-[120px] sm:w-[150px] md:w-[175px] lg:w-[200px] h-[120px] sm:h-[150px] md:h-[175px] lg:h-[200px] bg-white shadow-xl rounded-full border-4 border-[#B7934C] p-4">
              <Image
                src={logo}
                alt="Asmiveda logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>

            {/* Elegant Label Below Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#B7934C] text-center"
            >
              Empowering Your Career with Knowledge
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landingpage;
