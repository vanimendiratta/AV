"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { dataSets } from "../data"; // Import your data
import thumbnailmain from "../../public/images/Brand video thumbnail.jpg";

const CareerGoalsComponent = ({ dataId }) => {
  const router = useRouter();
  const content = dataSets[dataId] || dataSets[1]; // Default to Set 1 if dataId is not found

  const handleVideoClick = () => {
    if (content.videoUrl) {
      window.open(content.videoUrl, "_blank");
    } else {
      console.error("No video URL available");
    }
  };

  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        bounce: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#F3E5AB] via-[#EEDC82] to-[#DBC19B] p-10 rounded-lg shadow-lg"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Left Side - Text Content */}
      <motion.div
        className="flex flex-col w-full md:w-1/2 p-6"
        variants={textVariant}
      >
        <h2 className="text-4xl font-extrabold text-[#3E2723] mb-6">
          {content.title}
        </h2>
        <ul className="text-[#5D4037] space-y-4">
          {content.listItems.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side - Video Section */}
      <motion.div
        className="relative cursor-pointer w-full md:w-1/2 max-w-lg"
        onClick={handleVideoClick}
        variants={imageVariant}
      >
        <Image
          src={thumbnailmain}
          alt="Video Thumbnail"
          width={600}
          height={340}
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#FBC02D] rounded-full p-4 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#3E2723]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197 1.907a1 1 0 01-1.555-.832V9.757a1 1 0 011.555-.832l3.197 1.907a1 1 0 010 1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CareerGoalsComponent;
